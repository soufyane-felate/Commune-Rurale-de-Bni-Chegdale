# Site Web Institutionnel - Commune Rurale de Beni Chegdale

Site web professionnel et moderne pour la Commune rurale de Beni Chegdale, conçu pour faciliter l'accès des citoyens aux services communaux et améliorer la communication entre la commune et les citoyens.

## 🎯 Caractéristiques

- **Design moderne et professionnel** : Interface claire et accessible
- **Responsive** : Compatible mobile, tablette et desktop
- **Animations CSS** : Animations légères et modernes pour une meilleure expérience utilisateur
- **Bootstrap 5** : Framework CSS pour un design responsive et professionnel
- **Identité visuelle** : Couleurs inspirées du Ministère de l'Intérieur marocain (vert, rouge foncé, blanc, gris)

## 📁 Structure du Projet

```
bnichegdal site/
│
├── index.html              # Page d'accueil
├── a-propos.html          # À propos de la commune
├── services.html          # Services communaux
├── horaires.html          # Horaires et jours de travail
├── administration.html    # Personnel et administration
├── actualites.html        # Actualités et annonces
├── contact.html           # Contact et formulaire
│
├── assets/
│   ├── css/
│   │   └── style.css     # Styles personnalisés et animations
│   └── js/
│       └── main.js       # JavaScript pour les interactions
│
└── README.md              # Documentation du projet
```

## 🚀 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles personnalisés avec animations
- **JavaScript** : Interactions et fonctionnalités
- **Bootstrap 5** : Framework CSS responsive (via CDN)
- **Bootstrap Icons** : Icônes modernes (via CDN)

## 📄 Pages du Site

### 1. Page d'Accueil (`index.html`)
- Présentation de la commune
- Message de bienvenue
- Accès rapide aux services
- Actualités récentes

### 2. À Propos (`a-propos.html`)
- Présentation générale de la commune
- Mission et rôles
- Valeurs et principes

### 3. Services Communaux (`services.html`)
- État Civil
- Urbanisme
- Impôts et Taxes Locales
- Affaires Sociales
- Autres services

### 4. Horaires (`horaires.html`)
- Horaires généraux
- Horaires par service
- Jours fériés et fermetures exceptionnelles

### 5. Administration (`administration.html`)
- Structure administrative
- Conseil communal
- Équipe de direction

### 6. Actualités (`actualites.html`)
- Dernières nouvelles
- Annonces importantes
- Événements communaux

### 7. Contact (`contact.html`)
- Informations de contact
- Formulaire de contact
- Contact par service
- Localisation

## 🎨 Palette de Couleurs

- **Vert foncé (Primary)** : `#1e5f3f`
- **Rouge foncé (Secondary)** : `#8b1a1a`
- **Vert moyen (Accent)** : `#2d8659`
- **Gris foncé** : `#2c3e50`
- **Blanc** : `#ffffff`

## ✨ Fonctionnalités

- Navigation responsive avec menu mobile
- Animations CSS au scroll
- Formulaire de contact avec validation
- Design responsive (mobile-first)
- Smooth scroll pour une navigation fluide
- Optimisations de performance

## 📱 Compatibilité

- ✅ Chrome (dernière version)
- ✅ Firefox (dernière version)
- ✅ Safari (dernière version)
- ✅ Edge (dernière version)
- ✅ Mobile (iOS Safari, Chrome Mobile)

## 🔧 Installation et Utilisation

### Mode avec base de données (recommandé pour l'hébergement)

1. Installer [Node.js](https://nodejs.org/) 18+
2. Copier `.env.example` vers `.env` et modifier les secrets :
   ```bash
   copy .env.example .env
   ```
3. Installer les dépendances et lancer le serveur :
   ```bash
   npm install
   npm start
   ```
4. Ouvrir **http://localhost:3000**
5. Administration : **http://localhost:3000/admin.html**  
   Mot de passe par défaut : `bnichegdale2025` (à changer dans `.env` ou depuis l'admin)

**Fichiers créés automatiquement :**
- `data/commune.db` — base SQLite (publications, paramètres admin)
- `uploads/` — photos et PDF des publications

### Mode statique (sans serveur)

Ouvrir `index.html` dans le navigateur : les publications restent dans `localStorage` du navigateur.

### Développement

```bash
npm run dev
```

## 📝 Personnalisation

### Modifier les couleurs :
Éditez les variables CSS dans `assets/css/style.css` :
```css
:root {
    --primary-color: #1e5f3f;
    --secondary-color: #8b1a1a;
    /* ... */
}
```

### Modifier le contenu :
- Éditez les fichiers HTML directement
- Les textes sont en français et peuvent être facilement modifiés

### Ajouter des pages :
1. Créer un nouveau fichier HTML
2. Copier la structure de navigation depuis une page existante
3. Ajouter le lien dans la navigation de toutes les pages

## 🗄️ Base de données et API

| Endpoint | Description |
|----------|-------------|
| `GET /api/health` | État du serveur |
| `GET /api/posts` | Liste des publications |
| `POST /api/posts` | Créer (token admin) |
| `DELETE /api/posts/:id` | Supprimer (token admin) |
| `POST /api/auth/login` | Connexion admin → JWT |
| `PUT /api/auth/password` | Changer mot de passe admin |

### Hébergement (VPS, Railway, Render, etc.)

1. Déployer le projet avec `npm start`
2. Définir les variables : `PORT`, `JWT_SECRET`, `ADMIN_PASSWORD`
3. Sauvegarder régulièrement `data/commune.db` et le dossier `uploads/`
4. Pour **MySQL/PostgreSQL** plus tard : remplacer `better-sqlite3` par un driver adapté (même schéma dans `server/schema.sql`)

### Migrer les anciennes publications (localStorage)

1. Dans le navigateur (console) : `copy(localStorage.getItem('commune_posts'))`
2. Coller dans un fichier `posts.json`
3. `node server/scripts/migrate-local.js posts.json`

## 🌐 Formulaire de contact

Le formulaire simule encore l'envoi côté client. Pour un envoi réel par email, ajouter un endpoint API dédié.

## 📞 Support

Pour toute question ou suggestion concernant le site :
- Email : leadernet001@gmail.com
- Téléphone : +212 622725296

## 📄 Licence

Ce projet est développé pour soufyane felate

## 👨‍💻 Développement

Site développé avec :
- Code propre et bien structuré
- Architecture claire et maintenable
- Bonnes pratiques web
- Accessibilité (WCAG)

---

**Version** : 1.0  
**Dernière mise à jour** : 2025  
**Auteur** :soufyane 

