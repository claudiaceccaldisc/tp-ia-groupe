# TimeTravel Agency

Webapp interactive développée dans le cadre du module IA M1/M2 à Ynov.

L’objectif du projet était de créer une application web immersive pour une agence fictive de voyage temporel, intégrant un agent conversationnel IA et une fonctionnalité de personnalisation.

---

## Objectifs du projet

- Créer une webapp moderne et responsive
- Intégrer des assets générés lors du module précédent (images + vidéo)
- Mettre en place un agent conversationnel intelligent
- Ajouter une fonctionnalité de recommandation personnalisée (quiz)
- Déployer l’application en ligne

---

## Stack technique

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Mistral AI (modèle mistral-small)
- Déploiement : Vercel

---

## Fonctionnalités implémentées

- Landing page immersive avec vidéo en arrière-plan
- Mode sombre / mode clair
- 3 destinations temporelles :
  - Paris 1889
  - Florence 1504
  - Crétacé
- Affichage de prix indicatifs (usage pédagogique uniquement)
- Quiz personnalisé recommandant une destination
- Chatbot IA conversationnel (réponses contextualisées)
- Interface responsive mobile-first (optimisée iPhone 16 Pro)

---

## IA utilisées

- Génération initiale de la structure : Bolt.new
- Assistant conversationnel : Mistral AI (mistral-small)

Le chatbot est configuré avec un system prompt personnalisé afin d’assurer :
- Un ton professionnel et immersif
- Des réponses cohérentes avec les destinations
- Des recommandations adaptées aux profils utilisateurs

---

## Mention importante

Les prix affichés sont fictifs et utilisés uniquement dans le cadre du projet pédagogique.

---

## Lancer le projet en local

1. Cloner le repository :

```bash
git clone https://github.com/claudiaceccaldisc/tp-ia-groupe.git
cd tp-ia-groupe

```
2. Installer les dépendances :

npm install

3. Créer un fichier .env à la racine :

VITE_MISTRAL_API_KEY=VOTRE_CLE_ICI

4. Lancer le serveur :

npm run dev

Puis ouvrir :

http://localhost:5173


## Déploiement

L’application est déployée via Vercel.

Les variables d’environnement (clé Mistral) sont configurées directement dans les paramètres du projet Vercel.