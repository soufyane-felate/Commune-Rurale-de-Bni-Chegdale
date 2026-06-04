/**
 * Panneau d'administration - publications
 */

document.addEventListener('DOMContentLoaded', function () {
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const loginForm = document.getElementById('loginForm');
    const postForm = document.getElementById('postForm');
    const postDate = document.getElementById('postDate');
    const formAlert = document.getElementById('formAlert');

    if (postDate) {
        postDate.value = new Date().toISOString().split('T')[0];
    }

    async function showDashboard() {
        loginSection.classList.add('d-none');
        dashboardSection.classList.remove('d-none');
        await PostsManager.loadPosts();
        renderAdminPostsList();
    }

    function showLogin() {
        loginSection.classList.remove('d-none');
        dashboardSection.classList.add('d-none');
    }

    if (PostsManager.isAdminLoggedIn()) {
        showDashboard();
    }

    loginForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const pwd = document.getElementById('adminPassword').value;
        const err = document.getElementById('loginError');
        if (await PostsManager.adminLogin(pwd)) {
            err.classList.add('d-none');
            await showDashboard();
        } else {
            err.classList.remove('d-none');
        }
    });

    document.getElementById('togglePassword').addEventListener('click', function () {
        const input = document.getElementById('adminPassword');
        const icon = this.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.className = 'bi bi-eye-slash';
        } else {
            input.type = 'password';
            icon.className = 'bi bi-eye';
        }
    });

    document.getElementById('logoutBtn').addEventListener('click', function () {
        PostsManager.adminLogout();
        showLogin();
        document.getElementById('adminPassword').value = '';
    });

    let pendingImages = [];
    let pendingPdf = null;
    let pendingPdfName = null;

    function renderImagePreviews() {
        const preview = document.getElementById('imagePreview');
        if (!pendingImages.length) {
            preview.innerHTML = '';
            return;
        }
        preview.innerHTML = pendingImages.map((src, i) => `
            <div class="admin-preview-item">
                <img src="${src}" alt="preview ${i + 1}" class="admin-preview-img">
                <button type="button" class="admin-preview-remove" data-remove-image="${i}" title="حذف">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        `).join('');

        preview.querySelectorAll('[data-remove-image]').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = parseInt(btn.getAttribute('data-remove-image'), 10);
                pendingImages.splice(idx, 1);
                renderImagePreviews();
            });
        });
    }

    document.getElementById('postImages').addEventListener('change', async function (e) {
        const files = Array.from(e.target.files || []);
        if (!files.length) return;

        const max = PostsManager.MAX_IMAGES_PER_POST;
        let added = 0;

        for (const file of files) {
            if (pendingImages.length >= max) {
                showAlert('warning', `الحد الأقصى ${max} صور للمنشور`);
                break;
            }
            try {
                pendingImages.push(await PostsManager.readFileAsDataURL(file));
                added++;
            } catch (err) {
                showAlert('danger', err.message === 'FILE_TOO_LARGE'
                    ? `صورة كبيرة: ${file.name} (حد 2 ميغابايت)`
                    : `خطأ: ${file.name}`);
            }
        }

        if (added) renderImagePreviews();
        e.target.value = '';
    });

    document.getElementById('postPdf').addEventListener('change', async function (e) {
        const file = e.target.files[0];
        const preview = document.getElementById('pdfPreview');
        if (!file) {
            pendingPdf = null;
            pendingPdfName = null;
            preview.classList.add('d-none');
            return;
        }
        try {
            pendingPdf = await PostsManager.readFileAsDataURL(file);
            pendingPdfName = file.name;
            preview.textContent = '📄 ' + file.name;
            preview.classList.remove('d-none');
        } catch (err) {
            showAlert('danger', err.message === 'FILE_TOO_LARGE' ? 'ملف PDF كبير جداً (حد أقصى 2 ميغابايت)' : 'خطأ في تحميل PDF');
            pendingPdf = null;
        }
    });

    const LANG_TABS = { ar: '#tabAr', fr: '#tabFr', en: '#tabEn' };

    function showLangTab(lang) {
        const tabBtn = document.querySelector('[data-bs-target="' + LANG_TABS[lang] + '"]');
        if (tabBtn && typeof bootstrap !== 'undefined') {
            bootstrap.Tab.getOrCreateInstance(tabBtn).show();
        }
    }

    function readPostFields() {
        return {
            ar: {
                title: document.getElementById('titleAr').value.trim(),
                content: document.getElementById('contentAr').value.trim()
            },
            fr: {
                title: document.getElementById('titleFr').value.trim(),
                content: document.getElementById('contentFr').value.trim()
            },
            en: {
                title: document.getElementById('titleEn').value.trim(),
                content: document.getElementById('contentEn').value.trim()
            }
        };
    }

    function validatePostFields(fields) {
        const complete = ['ar', 'fr', 'en'].filter(
            (l) => fields[l].title && fields[l].content
        );
        if (complete.length > 0) {
            return { ok: true };
        }
        const partial = ['ar', 'fr', 'en'].find(
            (l) => fields[l].title || fields[l].content
        );
        if (partial) {
            const missingTitle = !fields[partial].title;
            return {
                ok: false,
                lang: partial,
                message: missingTitle
                    ? 'أكمل العنوان في هذه اللغة'
                    : 'أكمل المحتوى في هذه اللغة',
                focusId: missingTitle ? 'title' + partial.charAt(0).toUpperCase() + partial.slice(1) : 'content' + partial.charAt(0).toUpperCase() + partial.slice(1)
            };
        }
        return {
            ok: false,
            lang: 'ar',
            message: 'أدخل العنوان والمحتوى بلغة واحدة على الأقل (عربي، فرنسي أو إنجليزي)',
            focusId: 'titleAr'
        };
    }

    postForm.addEventListener('submit', async function (e) {
        e.preventDefault();
        const fields = readPostFields();
        const check = validatePostFields(fields);
        if (!check.ok) {
            showLangTab(check.lang);
            showAlert('warning', check.message);
            const el = document.getElementById(check.focusId);
            if (el) el.focus();
            return;
        }

        try {
            await PostsManager.addPost({
                title: {
                    ar: fields.ar.title,
                    fr: fields.fr.title,
                    en: fields.en.title
                },
                content: {
                    ar: fields.ar.content,
                    fr: fields.fr.content,
                    en: fields.en.content
                },
                category: document.getElementById('postCategory').value,
                date: document.getElementById('postDate').value,
                images: [...pendingImages],
                pdf: pendingPdf,
                pdfName: pendingPdfName
            });
        } catch (err) {
            showAlert('danger', err.message || 'خطأ في النشر');
            return;
        }

        postForm.reset();
        if (postDate) postDate.value = new Date().toISOString().split('T')[0];
        pendingImages = [];
        pendingPdf = pendingPdfName = null;
        renderImagePreviews();
        document.getElementById('pdfPreview').classList.add('d-none');

        showAlert('success', 'تم نشر المنشور بنجاح!');
        renderAdminPostsList();
    });

    document.getElementById('passwordForm').addEventListener('submit', async function (e) {
        e.preventDefault();
        const np = document.getElementById('newPassword').value;
        if (np.length < 6) {
            showAlert('warning', 'كلمة المرور 6 أحرف على الأقل');
            return;
        }
        const ok = await PostsManager.setAdminPassword(np);
        if (!ok) {
            showAlert('danger', 'فشل تغيير كلمة المرور');
            return;
        }
        document.getElementById('newPassword').value = '';
        showAlert('success', 'تم تغيير كلمة المرور');
    });

    function showAlert(type, msg) {
        formAlert.className = 'alert alert-' + type;
        formAlert.textContent = msg;
        formAlert.classList.remove('d-none');
        setTimeout(() => formAlert.classList.add('d-none'), 4000);
    }

    function renderAdminPostsList() {
        const list = document.getElementById('adminPostsList');
        const count = document.getElementById('postsCount');
        const posts = PostsManager.getPosts().sort((a, b) => new Date(b.date) - new Date(a.date));
        count.textContent = posts.length;

        if (!posts.length) {
            list.innerHTML = '<p class="text-muted text-center p-4 mb-0">لا توجد منشورات</p>';
            return;
        }

        list.innerHTML = posts.map(post => {
            const title = PostsManager.getLocalizedField(post.title, 'ar');
            const imgs = PostsManager.getPostImages(post);
            const thumb = imgs.length
                ? `<span class="admin-thumb-wrap"><img src="${imgs[0]}" class="admin-list-thumb" alt="">${imgs.length > 1 ? `<span class="admin-thumb-badge">${imgs.length}</span>` : ''}</span>`
                : '<div class="admin-list-thumb admin-list-thumb-empty"><i class="bi bi-file-text"></i></div>';
            return `
            <div class="admin-post-item">
                ${thumb}
                <div class="flex-grow-1 min-width-0">
                    <h6 class="mb-1 text-truncate">${escapeHtml(title)}</h6>
                    <small class="text-muted">${post.date}</small>
                </div>
                <button type="button" class="btn btn-outline-danger btn-sm" data-delete="${post.id}" title="حذف">
                    <i class="bi bi-trash"></i>
                </button>
            </div>`;
        }).join('');

        list.querySelectorAll('[data-delete]').forEach(btn => {
            btn.addEventListener('click', async function () {
                if (confirm('هل تريد حذف هذا المنشور؟')) {
                    try {
                        await PostsManager.deletePost(this.getAttribute('data-delete'));
                        renderAdminPostsList();
                    } catch {
                        showAlert('danger', 'فشل الحذف');
                    }
                }
            });
        });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
});
