# TaskFlow - Plateforme de Gestion de Projets Kanban

TaskFlow est une application web moderne de gestion de projets basée sur la méthode Kanban. Conçue pour la clarté et la productivité, elle permet aux équipes de collaborer en temps réel, de suivre l'avancement de leurs tâches et d'organiser leurs flux de travail de manière visuelle et intuitive.

## 🚀 Fonctionnalités Principales

*   **Tableaux Kanban Interactifs :** Interface glisser-déposer fluide pour organiser et déplacer les tâches entre différentes colonnes (À faire, En cours, Terminé, etc.).
*   **Gestion de Projets Multiples :** Tableau de bord centralisé pour visualiser tous vos projets récents, leur progression globale et leur statut d'un seul coup d'œil.
*   **Collaboration en Équipe :** Invitez facilement d'autres membres sur vos projets et assignez-leur des tâches spécifiques.
*   **Suivi du Temps :** Estimation et suivi du temps passé sur chaque tâche pour un meilleur contrôle des délais.
*   **Exportation PDF :** Générez des rapports PDF de vos tableaux de bord en un clic (fonctionnalité en cours de développement).
*   **Sécurité et Sessions :** Authentification robuste basée sur des cookies HTTP-Only et des JWT (JSON Web Tokens).

## 🛠️ Stack Technique (Frontend)

Ce projet est le client (frontend) de l'application TaskFlow. Il est construit avec les technologies modernes de l'écosystème React :

*   **Framework principal :** [React](https://react.dev/) (v18)
*   **Outil de build :** [Vite](https://vitejs.dev/) (v6) - *Pour un développement ultra-rapide et un build optimisé.*
*   **Routage :** [React Router DOM](https://reactrouter.com/) (v7) - *Gestion de la navigation côté client avec routes protégées.*
*   **Style et CSS :**
    *   [Tailwind CSS](https://tailwindcss.com/) (v3) - *Framework CSS utilitaire pour un design sur mesure et rapide.*
    *   [Shadcn/UI](https://ui.shadcn.com/) - *Collection de composants UI accessibles et personnalisables (Basés sur Radix UI).*
*   **Icônes :** [Lucide React](https://lucide.dev/)
*   **Notifications :** [Sonner](https://sonner.emilkowal.ski/) - *Toasts élégants et légers.*
*   **Drag & Drop (Kanban) :** [dnd-kit](https://dndkit.com/) - *Bibliothèque moderne et accessible pour le glisser-déposer.*

## 📂 Architecture Complète du Projet

L'arborescence du projet est pensée pour être claire, modulaire et évolutive :

```text
fronttaskflow/
├── public/                     # Fichiers statiques servis à la racine
│   ├── fonts/                  # Polices de caractères locales (Merriweather, Raleway)
│   ├── images/                 # Images et illustrations (HOME.png, hero-home.svg, logo-taskflow.svg)
│   ├── favicon.svg             # Icône du site
│   └── icons.svg               # Fichier regroupant les icônes
│
├── src/                        # Code source de l'application React
│   ├── assets/                 # Ressources statiques internes
│   │   └── hero.png            # Image héro alternative
│   │
│   ├── components/             # Composants réutilisables (UI et Fonctionnels)
│   │   ├── dashboard/          # Composants spécifiques à la vue d'ensemble
│   │   │   ├── DashboardHeader.jsx   # En-tête du dashboard (actions globales)
│   │   │   ├── EmptyProjectState.jsx # Affichage lorsqu'il n'y a pas de projet
│   │   │   └── ProjectCard.jsx       # Carte résumant un projet
│   │   │
│   │   ├── footer/             # Pied de page global
│   │   │   └── footer.jsx
│   │   │
│   │   ├── header/             # En-tête (navigation supérieure)
│   │   │   └── header.jsx
│   │   │
│   │   ├── kanban/             # Composants spécifiques au tableau de bord Kanban
│   │   │   ├── KanbanHeader.jsx      # En-tête de la vue kanban
│   │   │   ├── TaskCard.jsx          # Carte représentant une tâche
│   │   │   ├── board.jsx             # Le tableau Kanban principal
│   │   │   └── column.jsx            # Une colonne du Kanban
│   │   │
│   │   ├── modal/              # Toutes les fenêtres modales
│   │   │   ├── add_member_modal.jsx     # Modale d'invitation d'un membre
│   │   │   ├── create_project_modal.jsx # Modale de création de projet
│   │   │   ├── create_task_modal.jsx    # Modale de création de tâche
│   │   │   ├── modal_register.jsx       # Modale/Page d'inscription
│   │   │   └── task_detail_modal.jsx    # Modale de détail d'une tâche
│   │   │
│   │   ├── Sidebar/            # Menu de navigation latéral
│   │   │   └── Sidebar.jsx
│   │   │
│   │   ├── tools/              # Utilitaires fonctionnels
│   │   │   └── exportPdf.js    # Fonction pour l'exportation en PDF
│   │   │
│   │   ├── ui/                 # Composants de base Shadcn (Boutons, Inputs, Dialogs...)
│   │   │   ├── badge.jsx, button.jsx, card.jsx, dialog.jsx, field.jsx
│   │   │   └── input-group.jsx, input.jsx, label.jsx, progress.jsx, separator.jsx, textarea.jsx
│   │   │
│   │   └── ProtectedRoute.jsx  # Composant de protection de route (Redirection si non connecté)
│   │
│   ├── contexte/               # Gestionnaires d'état globaux
│   │   └── AuthContext.jsx     # Fournisseur du contexte d'authentification (User, Login, Logout)
│   │
│   ├── lib/                    # Utilitaires et fonctions partagées
│   │   └── utils.js
│   │
│   ├── pages/                  # Composants représentant des pages entières (Routes)
│   │   ├── account.jsx         # Paramètres du compte utilisateur
│   │   ├── dashboard.jsx       # Tableau de bord principal (Liste des projets)
│   │   ├── home.jsx            # Page d'accueil et formulaire de connexion
│   │   ├── kanban.jsx          # Vue détaillée d'un projet (Tableau Kanban)
│   │   └── (Pages légales: cgu.jsx, legal.jsx, rgpd.jsx)
│   │
│   ├── services/               # Logique de communication avec l'API backend
│   │   ├── api.js              # Configuration de base d'axios/fetch
│   │   ├── authService.js      # Requêtes pour Login, Logout, Check Session
│   │   └── projectService.js   # Requêtes CRUD pour les Projets
│   │
│   ├── App.css                 # Styles spécifiques à App (si besoin)
│   ├── App.jsx                 # Configuration principale du Routage (React Router)
│   ├── index.css               # Styles globaux et configuration Tailwind
│   └── main.jsx                # Point d'entrée de l'application React
│
├── .env.example                # Fichier d'exemple pour les variables d'environnement
├── .gitignore                  # Fichiers ignorés par Git
├── components.json             # Configuration de Shadcn/UI
├── eslint.config.js            # Configuration du linter (ESLint)
├── index.html                  # Fichier HTML principal (Vite)
├── jsconfig.json               # Configuration des chemins relatifs (alias @/)
├── package-lock.json           # Arbre de dépendances figé
├── package.json                # Dépendances et scripts du projet
├── postcss.config.js           # Configuration PostCSS (pour Tailwind)
├── tailwind.config.js          # Configuration de Tailwind (Couleurs personnalisées, Polices)
└── vite.config.js              # Configuration de l'outil de build Vite
```

## ⚙️ Prérequis et Installation

Assurez-vous d'avoir [Node.js](https://nodejs.org/) installé sur votre machine (version 18+ recommandée).

1.  **Cloner le dépôt :**
    ```bash
    git clone <votre-url-de-depot>
    cd fronttaskflow
    ```

2.  **Installer les dépendances :**
    ```bash
    npm install
    ```

3.  **Configuration (Optionnel) :**
    Par défaut, l'application pointe vers l'API locale `http://localhost:3000/api`. Si votre backend tourne sur un autre port, modifiez la constante `API_URL` dans les fichiers du dossier `src/services/`.

4.  **Démarrer le serveur de développement :**
    ```bash
    npm run dev
    ```
    L'application sera accessible sur `http://localhost:5173`.

## 🔗 Intégration Backend (API)

L'application Frontend est conçue pour communiquer avec une API REST (Node.js/Express).

**Points d'attention cruciaux :**
*   **CORS (Cross-Origin Resource Sharing) :** Le backend doit autoriser les requêtes provenant de l'URL du frontend (ex: `http://localhost:5173`).
*   **Cookies de Session :** Le système d'authentification utilise des cookies `HttpOnly`. Pour que cela fonctionne en développement local (localhost), le backend doit configurer les cookies avec `SameSite: 'lax'` (et non `none` sans HTTPS). Le frontend envoie l'option `credentials: 'include'` avec chaque requête `fetch` vers l'API.


---
*Projet développé par Zakhari Moussaoui, Mamadou Baradji et Romain Testaert.*