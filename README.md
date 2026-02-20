# 🚀 TimeTravel Agency --- Webapp Interactive IA

Application web développée dans le cadre du **Projet Supervisé IA
(M1/M2) -- Ynov**\
Session 2 : **Webapp & IA Agents**

TimeTravel Agency est une agence fictive de voyage temporel haut de
gamme proposant des immersions dans différentes époques historiques.\
Cette application combine développement frontend moderne, intelligence
artificielle générative et automatisation intelligente pour offrir une
expérience immersive et interactive.

------------------------------------------------------------------------

# 🎯 Objectif du Projet

Créer une webapp interactive intégrant :

-   Une landing page immersive
-   Une galerie complète de destinations temporelles
-   Un agent conversationnel IA
-   Une fonctionnalité d'automatisation intelligente (quiz personnalisé)
-   Une gestion du thème clair/sombre
-   Un déploiement en production

------------------------------------------------------------------------

# 🧱 Stack Technique

-   React + TypeScript
-   Vite
-   Tailwind CSS
-   Framer Motion (animations)
-   API Mistral AI (mistral-small)
-   Vercel (déploiement)
-   Git / GitHub (versioning & gestion des branches)

------------------------------------------------------------------------

# ✨ Destinations Disponibles

-   Paris 1889 --- Belle Époque\
-   Florence 1504 --- Renaissance\
-   Crétacé --- 65M av. J.-C.\
-   Rome 80 ap. J.-C.\
-   Réunion \~1690\
-   Kyoto 794\
-   Londres 1605\
-   Machu Picchu 1450

    #  Fonctionnalités :

- Cards interactives animées
- Carrousel d’images par destination
- Prix dynamiques (usage pédagogique uniquement)
- Navigation vers système de réservation
- Animations au scroll (Framer Motion)
- Adaptation automatique au thème clair/sombre

  # Système de Réservation

- Formulaire interactif
- Génération automatique d’un numéro de réservation
- Confirmation animée
- Gestion d’un contexte global (ReservationContext)
- Page listant les réservations effectuées
  
------------------------------------------------------------------------

# 🤖 Fonctionnalités IA

## Chatbot Intelligent

Widget conversationnel intelligent :
- Bouton flottant
- Réponses en français uniquement
- Ton professionnel et immersif
- Texte simple sans markdown
- Nettoyage automatique des caractères spéciaux
- Gestion des erreurs et loading

Capacités :
- Présentation des destinations
- Conseils personnalisés
- FAQ
- Explications contextuelles
- Informations sur les prix (fictifs)

## Quiz Intelligent

Quiz interactif permettant :
- Analyse des préférences utilisateur
- Attribution dynamique de scores
- Recommandation automatique d’une destination
- Génération IA d’une explication personnalisée
- Nettoyage automatique du formatage IA
- Le quiz prend en compte l’ensemble des destinations disponibles.

------------------------------------------------------------------------

# 🌙 Thème Clair / Sombre

-   Toggle dynamique
-   Adaptation complète des couleurs
-   Transitions fluides

------------------------------------------------------------------------

# 🔊 Gestion Audio

- Activation / désactivation du son
- Effets sonores contextuels selon destination
- SoundContext dédié

------------------------------------------------------------------------

# 🌍 Déploiement

Déploiement continu via Vercel

- Variables d’environnement sécurisées
- URL publique accessible
- CI/CD automatique

------------------------------------------------------------------------
# 🤖 Outils IA Utilisés

- Génération initiale de structure via Bolt.new
- Assistance développement via IA générative

API Mistral AI pour :
    - Chatbot conversationnel
    - Explication personnalisée du quiz
- Itérations de prompts pour améliorer qualité et cohérence

# 🧠 Exemple de Prompt Système (Chatbot)

Tu es l'assistant virtuel officiel de TimeTravel Agency.
Tu réponds en français uniquement.
Tu es professionnel, immersif et structuré.
Tu n'utilises pas de markdown ni de formatage spécial.

Destinations disponibles :
Paris 1889
Florence 1504
Crétacé
Rome 80
Réunion ~1690
Kyoto 794
Londres 1605
Machu Picchu 1450

Les prix sont fictifs et utilisés uniquement à des fins pédagogiques.
------------------------------------------------------------------------

# 🚀 Installation en Local

``` bash
npm install
npm run dev
```

Créer un fichier `.env` :

    VITE_MISTRAL_API_KEY=your_api_key_here

------------------------------------------------------------------------

# 🔐 Sécurité

-   Clé API stockée dans `.env`
-   `.env` ignoré via `.gitignore`
-   Aucune clé sensible versionnée

------------------------------------------------------------------------

# 👥 Travail en Groupe

-   Claudia CECCALDI\
-   Chloé LEONARD\
-   Arnaud PINATEL

Projet pédagogique --- M1/M2 Digital & IA
