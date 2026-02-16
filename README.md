# 🚀 TimeTravel Agency -- Webapp Interactive

Application web développée dans le cadre du Projet Supervisé IA (M1/M2)d'Ynov
-- Session 2 : Webapp et IA Agents.

TimeTravel Agency est une agence fictive de voyage temporel haut de
gamme proposant des immersions dans différentes époques historiques.\
Cette application combine développement frontend moderne, intelligence
artificielle générative et automatisation intelligente pour offrir une
expérience immersive et interactive.

------------------------------------------------------------------------

## 🎯 Objectif du Projet

Créer une webapp interactive intégrant :

-   Une landing page immersive
-   Une galerie de destinations temporelles
-   Un agent conversationnel IA
-   Une fonctionnalité d'automatisation/personnalisation
-   Un déploiement en production

------------------------------------------------------------------------

## 🧱 Stack Technique

-   **React + TypeScript**
-   **Vite**
-   **Tailwind CSS**
-   **Framer Motion (animations)**
-   **API Mistral AI (modèle mistral-small)**
-   **Vercel (déploiement)**
-   Git / GitHub (versioning)

------------------------------------------------------------------------

## ✨ Fonctionnalités Implémentées

### 1️⃣ Landing Page Immersive

-   Hero section avec vidéo en arrière-plan
-   Design premium sombre (noir & doré)
-   Responsive (mobile-first)
-   Mention légale sur les prix fictifs

### 2️⃣ Galerie des Destinations

-   **Paris 1889** -- Belle Époque\
-   **Florence 1504** -- Renaissance\
-   **Crétacé -- 65M av. J.-C.** -- Ère des dinosaures

Fonctionnalités : - Cards interactives - Affichage dynamique des prix
(usage pédagogique) - Animations au scroll (Framer Motion)

### 3️⃣ 🤖 Chatbot IA (API Mistral)

-   Widget flottant en bas à droite
-   Personality définie via prompt système
-   Réponses en français uniquement
-   Texte simple (sans markdown)
-   Gestion des erreurs
-   Gestion du loading

Capacités : - Explication des destinations - Conseils personnalisés -
Informations sur les prix (fictifs) - Réponses type FAQ - Suggestions
adaptées aux intérêts utilisateurs

### 4️⃣ 🧠 Quiz Intelligent (Automatisation & Personnalisation)

-   Quiz interactif en 4 questions
-   Algorithme de scoring simple
-   Recommandation automatique d'une destination
-   Génération d'une explication personnalisée via IA
-   Nettoyage du formatage des réponses

Cette fonctionnalité répond à l'exigence d'automatisation intelligente
du projet.

### 5️⃣ 🌙 Dark Mode

-   Toggle clair/sombre
-   Gestion via ThemeContext
-   Transitions fluides

### 6️⃣ 🌍 Déploiement

-   Déploiement via Vercel
-   Variables d'environnement sécurisées
-   URL publique fonctionnelle

------------------------------------------------------------------------

## 🤖 Outils IA Utilisés

-   Generation structure de base de l'application via Bolt.new
-   API Mistral AI (mistral-small) pour :
    -   Chatbot conversationnel
    -   Génération d'explications personnalisées
-   Itérations de prompts pour affiner la personnalité et la qualité des
    réponses

------------------------------------------------------------------------

## 🧠 Exemple de Prompt Système (Chatbot)

Le chatbot est configuré comme suit :

> Tu es l'assistant virtuel officiel de TimeTravel Agency.\
> Tu réponds en français uniquement.\
> Tu es professionnel, immersif et structuré.\
> Tu n'utilises pas de markdown ni de formatage spécial.

Destinations disponibles : - Paris 1889 - Florence 1504 - Crétacé (65
millions d'années)

Les prix sont fictifs et utilisés uniquement à des fins pédagogiques.

------------------------------------------------------------------------

## 🔐 Sécurité

-   Clé API stockée dans un fichier `.env`
-   `.env` ignoré via `.gitignore`
-   Aucune clé sensible pushée sur GitHub
-   Variable configurée sur Vercel

------------------------------------------------------------------------

## 📂 Structure du Projet

    src/
     ├── components/
     │    ├── Hero.tsx
     │    ├── Destinations.tsx
     │    ├── DestinationCard.tsx
     │    ├── Quiz.tsx
     │    └── ChatbotButton.tsx
     ├── context/
     │    └── ThemeContext.tsx
     ├── App.tsx
     ├── main.tsx
     └── index.css

------------------------------------------------------------------------

## 🚀 Installation en Local

``` bash
npm install
npm run dev
```

Créer un fichier `.env` :

    VITE_MISTRAL_API_KEY=your_api_key_here

------------------------------------------------------------------------

## 📖 Couverture des Critères d'Évaluation

✔ Webapp fonctionnelle et déployée\
✔ Structure React claire et maintenable\
✔ Agent conversationnel opérationnel\
✔ Fonctionnalité d'automatisation intelligente\
✔ Design professionnel et cohérent\
✔ Documentation et transparence IA

------------------------------------------------------------------------

## 📝 Licence

Projet pédagogique -- M1/M2 Digital & IA\
TimeTravel Agency est un projet fictif à usage académique uniquement.

------------------------------------------------------------------------

## 👥 Travail en Groupe

Membre du groupe :

Claudia CECCALDI
Chloé LEONARD
Arnaud PINATEL

Projet réalisé en groupe (3 étudiants).\
Rendu individuel comprenant :

-   URL publique de la webapp
-   Repository GitHub
-   Documentation technique (README)

------------------------------------------------------------------------

Développé avec assistance d'outils d'IA générative et d'aide au code.
