/**
 * Gestion des publications (actualités) - localStorage
 * Commune Rurale de Bni Chegdale
 */

const POSTS_STORAGE_KEY = 'commune_posts';
const ADMIN_AUTH_KEY = 'commune_admin_auth';
const ADMIN_TOKEN_KEY = 'commune_admin_token';
const ADMIN_PASSWORD_KEY = 'commune_admin_password';
const DEFAULT_ADMIN_PASSWORD = 'bnichegdale2025';
const API_BASE = '';

let postsCache = [];
let useApi = null;
const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 Mo
const MAX_IMAGES_PER_POST = 10;

window.__postGalleries = window.__postGalleries || {};

const CATEGORY_BADGES = {
    important: 'bg-danger',
    project: 'bg-success',
    announcement: 'bg-info',
    notice: 'bg-warning',
    event: 'bg-success',
    info: 'bg-primary'
};

const CATEGORY_KEYS = {
    important: 'catImportant',
    project: 'catProject',
    announcement: 'catAnnouncement',
    notice: 'catNotice',
    event: 'catEvent',
    info: 'catInfo'
};

function generateId() {
    return 'post_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
}

function getAdminPassword() {
    return localStorage.getItem(ADMIN_PASSWORD_KEY) || DEFAULT_ADMIN_PASSWORD;
}

function isAdminLoggedIn() {
    return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'true'
        && (!!sessionStorage.getItem(ADMIN_TOKEN_KEY) || !useApi);
}

async function adminLogin(password) {
    if (await checkApi()) {
        try {
            const res = await fetch(`${API_BASE}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });
            if (!res.ok) return false;
            const data = await res.json();
            sessionStorage.setItem(ADMIN_TOKEN_KEY, data.token);
            sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
            return true;
        } catch {
            return false;
        }
    }
    if (password === getAdminPassword()) {
        sessionStorage.setItem(ADMIN_AUTH_KEY, 'true');
        return true;
    }
    return false;
}

function adminLogout() {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
    sessionStorage.removeItem(ADMIN_TOKEN_KEY);
}

async function setAdminPassword(password) {
    if (await checkApi()) {
        const res = await fetch(`${API_BASE}/api/auth/password`, {
            method: 'PUT',
            headers: getAuthHeaders(),
            body: JSON.stringify({ password })
        });
        return res.ok;
    }
    setAdminPasswordLocal(password);
    return true;
}

function setAdminPasswordLocal(password) {
    localStorage.setItem(ADMIN_PASSWORD_KEY, password);
}

function getPostsLocal() {
    try {
        const raw = localStorage.getItem(POSTS_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function savePostsLocal(posts) {
    localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(posts));
}

async function checkApi() {
    if (useApi !== null) return useApi;
    try {
        const res = await fetch(`${API_BASE}/api/health`);
        useApi = res.ok;
    } catch {
        useApi = false;
    }
    return useApi;
}

async function loadPosts() {
    if (await checkApi()) {
        try {
            const res = await fetch(`${API_BASE}/api/posts`);
            postsCache = res.ok ? await res.json() : [];
        } catch {
            postsCache = [];
        }
    } else {
        postsCache = getPostsLocal();
    }
    return postsCache;
}

function getPosts() {
    return postsCache;
}

function getAuthHeaders() {
    const token = sessionStorage.getItem(ADMIN_TOKEN_KEY);
    const headers = { 'Content-Type': 'application/json' };
    if (token) headers.Authorization = `Bearer ${token}`;
    return headers;
}

function getLocalizedField(obj, lang) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj.trim();
    const preferred = (obj[lang] || '').trim();
    if (preferred) return preferred;
    const fallbacks = lang === 'fr' ? ['fr', 'ar', 'en'] : lang === 'en' ? ['en', 'fr', 'ar'] : ['ar', 'fr', 'en'];
    for (const code of fallbacks) {
        const val = (obj[code] || '').trim();
        if (val) return val;
    }
    return '';
}

function formatDate(dateStr, lang) {
    const d = new Date(dateStr);
    const locales = { ar: 'ar-MA', fr: 'fr-FR', en: 'en-GB' };
    return d.toLocaleDateString(locales[lang] || 'ar-MA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        if (file.size > MAX_FILE_SIZE) {
            reject(new Error('FILE_TOO_LARGE'));
            return;
        }
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
    });
}

function getPostImages(post) {
    if (Array.isArray(post.images) && post.images.length > 0) {
        return post.images.filter(Boolean);
    }
    if (post.image) return [post.image];
    return [];
}

async function addPost(postData) {
    const payload = {
        title: postData.title,
        content: postData.content,
        category: postData.category || 'info',
        date: postData.date || new Date().toISOString().split('T')[0],
        images: Array.isArray(postData.images)
            ? postData.images.filter(Boolean).slice(0, MAX_IMAGES_PER_POST)
            : postData.image ? [postData.image] : [],
        pdf: postData.pdf || null,
        pdfName: postData.pdfName || null
    };

    if (await checkApi()) {
        const res = await fetch(`${API_BASE}/api/posts`, {
            method: 'POST',
            headers: getAuthHeaders(),
            body: JSON.stringify(payload)
        });
        if (!res.ok) {
            const err = await res.json().catch(() => ({}));
            throw new Error(err.error || 'Erreur publication');
        }
        const post = await res.json();
        await loadPosts();
        return post;
    }

    const posts = getPostsLocal();
    const post = {
        id: generateId(),
        title: payload.title,
        content: payload.content,
        category: payload.category,
        date: payload.date,
        images: payload.images,
        pdf: payload.pdf,
        pdfName: payload.pdfName,
        createdAt: Date.now()
    };
    posts.unshift(post);
    savePostsLocal(posts);
    postsCache = posts;
    return post;
}

function renderPostImages(post, title, compact) {
    const images = getPostImages(post);
    if (!images.length) return '';

    const safeTitle = escapeHtml(title);
    const postId = post.id;

    window.__postGalleries[postId] = { images, title };

    if (compact) {
        if (images.length === 1) {
            return `<div class="post-image-wrap post-image-wrap--compact">
                <a href="actualites.html#post-${postId}" class="post-image-link">
                    <img src="${images[0]}" alt="${safeTitle}" class="post-image post-image--contain" loading="lazy">
                </a>
            </div>`;
        }
        const compactId = `postCompact-${postId}`;
        const compactItems = images.map((src, i) => `
            <div class="carousel-item${i === 0 ? ' active' : ''}">
                <a href="actualites.html#post-${postId}" class="post-image-link d-block">
                    <img src="${src}" alt="${safeTitle}" class="post-image post-image--contain" loading="lazy">
                </a>
            </div>`).join('');
        return `<div id="${compactId}" class="carousel slide carousel-fade post-compact-carousel post-image-wrap--compact" data-bs-ride="carousel" data-bs-interval="4000" data-bs-pause="hover">
            <div class="carousel-inner">${compactItems}</div>
            <span class="post-images-count"><i class="bi bi-images me-1"></i>${images.length}</span>
        </div>`;
    }

    if (images.length === 1) {
        return `<figure class="post-image-hero">
            <button type="button" class="post-image-zoom-btn" data-full-image="${images[0]}" data-gallery="${postId}" data-gallery-index="0" aria-label="${safeTitle}">
                <img src="${images[0]}" alt="${safeTitle}" class="post-image post-image-full" loading="lazy">
                <span class="post-image-zoom-hint"><i class="bi bi-zoom-in"></i></span>
            </button>
        </figure>`;
    }

    const items = images.map((src, i) => `
        <div class="carousel-item${i === 0 ? ' active' : ''}">
            <button type="button" class="post-image-zoom-btn" data-gallery="${postId}" data-gallery-index="${i}" aria-label="${safeTitle}">
                <img src="${src}" alt="${safeTitle} — ${i + 1}" class="post-image post-image-full d-block w-100" loading="lazy">
                <span class="post-image-zoom-hint"><i class="bi bi-zoom-in"></i></span>
            </button>
        </div>`).join('');

    const indicators = images.map((_, i) => `
        <button type="button" data-bs-target="#postGallery-${postId}" data-bs-slide-to="${i}"${i === 0 ? ' class="active" aria-current="true"' : ''} aria-label="صورة ${i + 1}"></button>`).join('');

    return `<div id="postGallery-${postId}" class="carousel slide carousel-fade post-gallery-carousel" data-bs-ride="carousel" data-bs-interval="5000" data-bs-pause="hover" data-bs-touch="true">
        <div class="carousel-indicators">${indicators}</div>
        <div class="carousel-inner">${items}</div>
        <button class="carousel-control-prev" type="button" data-bs-target="#postGallery-${postId}" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">السابق</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#postGallery-${postId}" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">التالي</span>
        </button>
        <span class="post-gallery-counter"><i class="bi bi-images me-1"></i>${images.length}</span>
    </div>`;
}

async function deletePost(id) {
    if (await checkApi()) {
        const res = await fetch(`${API_BASE}/api/posts/${id}`, {
            method: 'DELETE',
            headers: getAuthHeaders()
        });
        if (!res.ok) throw new Error('Suppression impossible');
        await loadPosts();
        return;
    }
    const posts = getPostsLocal().filter(p => p.id !== id);
    savePostsLocal(posts);
    postsCache = posts;
}

function renderPostCard(post, lang, options = {}) {
    const { compact = false, index = 0 } = options;
    const title = getLocalizedField(post.title, lang);
    const content = getLocalizedField(post.content, lang);
    const catKey = CATEGORY_KEYS[post.category] || 'catInfo';
    const catLabel = typeof getTranslation === 'function'
        ? getTranslation(lang, catKey)
        : post.category;
    const badgeClass = CATEGORY_BADGES[post.category] || 'bg-primary';
    const delay = Math.min(index * 0.1, 0.5);

    const excerpt = compact && content.length > 120
        ? content.slice(0, 120) + '…'
        : content;

    const imageHtml = renderPostImages(post, title, compact);

    const pdfHtml = post.pdf
        ? `<a href="${post.pdf}" download="${escapeHtml(post.pdfName || 'document.pdf')}" class="btn btn-outline-primary btn-sm mt-3 post-pdf-btn">
            <i class="bi bi-file-earmark-pdf me-2"></i>${escapeHtml(typeof getTranslation === 'function' ? getTranslation(lang, 'downloadPdf') : 'PDF')}
           </a>`
        : '';

    if (compact) {
        return `
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm post-card animate-fade-in-up" style="animation-delay: ${delay}s">
                ${imageHtml}
                <div class="card-body">
                    <span class="badge ${badgeClass} mb-2">${escapeHtml(catLabel)}</span>
                    <h5 class="card-title">${escapeHtml(title)}</h5>
                    <p class="card-text text-muted">${escapeHtml(excerpt)}</p>
                    <a href="actualites.html#post-${post.id}" class="btn btn-sm btn-primary">
                        ${escapeHtml(typeof getTranslation === 'function' ? getTranslation(lang, 'btnReadMore') : 'Lire')}
                    </a>
                </div>
                <div class="card-footer bg-transparent border-0">
                    <small class="text-muted"><i class="bi bi-calendar me-1"></i>${formatDate(post.date, lang)}</small>
                </div>
            </div>
        </div>`;
    }

    return `
    <article id="post-${post.id}" class="card shadow-lg border-0 mb-4 post-card post-card-full animate-fade-in-up" style="animation-delay: ${delay}s">
        ${imageHtml}
        <div class="card-body p-4">
            <div class="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-2">
                <span class="badge ${badgeClass} fs-6">${escapeHtml(catLabel)}</span>
                <span class="text-muted"><i class="bi bi-calendar me-1"></i>${formatDate(post.date, lang)}</span>
            </div>
            <h2 class="text-primary mb-3">${escapeHtml(title)}</h2>
            <div class="post-content lead">${content.split('\n').map(p => p.trim() ? `<p>${escapeHtml(p)}</p>` : '').join('')}</div>
            ${pdfHtml}
        </div>
    </article>`;
}

function renderPostsList(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    window.__postGalleries = {};

    const lang = window.languageManager
        ? languageManager.getCurrentLanguage()
        : (localStorage.getItem('selectedLanguage') || 'ar');

    const posts = getPosts().sort((a, b) => new Date(b.date) - new Date(a.date));

    if (posts.length === 0) {
        const emptyMsg = typeof getTranslation === 'function'
            ? getTranslation(lang, 'noPosts')
            : 'Aucune publication.';
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-newspaper text-muted display-4 mb-3 d-block"></i>
                <p class="lead text-muted" data-translate="noPosts">${emptyMsg}</p>
            </div>`;
        return;
    }

    const limit = options.limit || posts.length;
    const compact = options.compact || false;
    const slice = posts.slice(0, limit);

    if (compact) {
        container.innerHTML = slice.map((p, i) => renderPostCard(p, lang, { compact: true, index: i })).join('');
    } else {
        container.innerHTML = slice.map((p, i) => renderPostCard(p, lang, { index: i })).join('');
    }
}

function ensurePostLightbox() {
    if (document.getElementById('postImageLightbox')) return;
    const lb = document.createElement('div');
    lb.id = 'postImageLightbox';
    lb.className = 'post-lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.setAttribute('aria-hidden', 'true');
    lb.innerHTML = `
        <div class="post-lightbox-backdrop" data-close-lightbox></div>
        <button type="button" class="post-lightbox-close" data-close-lightbox aria-label="Fermer">
            <i class="bi bi-x-lg"></i>
        </button>
        <button type="button" class="post-lightbox-nav post-lightbox-prev" aria-label="السابق">
            <i class="bi bi-chevron-left"></i>
        </button>
        <button type="button" class="post-lightbox-nav post-lightbox-next" aria-label="التالي">
            <i class="bi bi-chevron-right"></i>
        </button>
        <div class="post-lightbox-frame">
            <img class="post-lightbox-img" src="" alt="">
            <span class="post-lightbox-counter"></span>
        </div>
    `;
    document.body.appendChild(lb);

    lb.querySelectorAll('[data-close-lightbox]').forEach(el => {
        el.addEventListener('click', closePostLightbox);
    });
    lb.querySelector('.post-lightbox-prev').addEventListener('click', (e) => {
        e.stopPropagation();
        stepPostLightbox(-1);
    });
    lb.querySelector('.post-lightbox-next').addEventListener('click', (e) => {
        e.stopPropagation();
        stepPostLightbox(1);
    });
    document.addEventListener('keydown', (e) => {
        if (!document.getElementById('postImageLightbox')?.classList.contains('is-open')) return;
        if (e.key === 'Escape') closePostLightbox();
        if (e.key === 'ArrowLeft') stepPostLightbox(-1);
        if (e.key === 'ArrowRight') stepPostLightbox(1);
    });
}

let lightboxState = { images: [], index: 0, title: '' };

function openPostLightboxGallery(galleryId, index) {
    const g = window.__postGalleries[galleryId];
    if (!g || !g.images.length) return;
    lightboxState = { images: g.images, index, title: g.title || '' };
    updatePostLightboxImage();
}

function updatePostLightboxImage() {
    ensurePostLightbox();
    const lb = document.getElementById('postImageLightbox');
    const img = lb.querySelector('.post-lightbox-img');
    const counter = lb.querySelector('.post-lightbox-counter');
    const { images, index, title } = lightboxState;
    img.src = images[index];
    img.alt = title ? `${title} — ${index + 1}` : '';
    const multi = images.length > 1;
    counter.textContent = multi ? `${index + 1} / ${images.length}` : '';
    counter.style.display = multi ? '' : 'none';
    lb.querySelector('.post-lightbox-prev').style.display = multi ? '' : 'none';
    lb.querySelector('.post-lightbox-next').style.display = multi ? '' : 'none';
    lb.classList.add('is-open');
    lb.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function stepPostLightbox(delta) {
    const { images, index } = lightboxState;
    if (images.length <= 1) return;
    lightboxState.index = (index + delta + images.length) % images.length;
    updatePostLightboxImage();
}

function openPostLightbox(src, alt) {
    lightboxState = { images: [src], index: 0, title: alt || '' };
    updatePostLightboxImage();
}

function closePostLightbox() {
    const lb = document.getElementById('postImageLightbox');
    if (!lb) return;
    lb.classList.remove('is-open');
    lb.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function initPostCarousels() {
    if (typeof bootstrap === 'undefined') return;
    document.querySelectorAll('.post-gallery-carousel, .post-compact-carousel').forEach((el) => {
        if (el.dataset.carouselInit) return;
        el.dataset.carouselInit = '1';
        bootstrap.Carousel.getOrCreateInstance(el, {
            interval: el.classList.contains('post-compact-carousel') ? 4000 : 5000,
            ride: 'carousel',
            pause: 'hover',
            wrap: true,
            touch: true
        });
    });
}

function initPostImageZoom() {
    document.querySelectorAll('.post-image-zoom-btn').forEach(btn => {
        if (btn.dataset.zoomBound) return;
        btn.dataset.zoomBound = '1';
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const galleryId = btn.getAttribute('data-gallery');
            const index = parseInt(btn.getAttribute('data-gallery-index') || '0', 10);
            if (galleryId && window.__postGalleries[galleryId]) {
                openPostLightboxGallery(galleryId, index);
            } else {
                const img = btn.querySelector('img');
                openPostLightbox(btn.getAttribute('data-full-image') || img?.src, img ? img.alt : '');
            }
        });
    });
}

async function initPostsDisplay() {
    await loadPosts();
    renderPostsList('homePostsContainer', { limit: 3, compact: true });
    renderPostsList('postsContainer');
    initPostCarousels();
    initPostImageZoom();
}

document.addEventListener('DOMContentLoaded', () => {
    ensurePostLightbox();
    initPostsDisplay();
});
document.addEventListener('languageChanged', () => initPostsDisplay());

window.PostsManager = {
    getPosts,
    loadPosts,
    checkApi,
    addPost,
    deletePost,
    renderPostsList,
    getLocalizedField,
    getPostImages,
    MAX_IMAGES_PER_POST,
    isAdminLoggedIn,
    adminLogin,
    adminLogout,
    setAdminPassword,
    getAdminPassword,
    readFileAsDataURL,
    MAX_FILE_SIZE,
    DEFAULT_ADMIN_PASSWORD,
    useApi: () => useApi
};
