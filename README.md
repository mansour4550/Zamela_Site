# ZMELA Olive Oil  Site Web

## Lancer le projet

Prérequis : Node.js 20.19+ ou 22.12+ et npm.

```powershell
cd SiteWeb
npm install
npm run dev
```

Ouvrir l’adresse affichée par Vite dans le navigateur.

## Préparer la version de production

```powershell
npm run build
npm run preview
```

Le dossier `dist` contient les fichiers à héberger sur un serveur statique. Ne pas ouvrir index.html directement avec file://.

## Organisation

- `src/main.jsx` : page, en-tête, cartes de distinctions et pied de page.
- `src/styles.css` : styles et adaptations ordinateur, tablette et mobile.
- `public/images` : visuels extraits du PDF fourni, dont la bannière et les trophées.

Les rubriques La Huilerie, Processus, Qualité, Formats et Export sont des libellés en attente des prochaines pages. Certifications et Contact mènent aux sections présentes. Les numéros de téléphone sont cliquables. Les mentions légales seront à ajouter avec leur contenu validé. Aucun formulaire, suivi analytique ou cookie n’est ajouté.

Les textes et distinctions proviennent de la maquette fournie ; ils ne constituent pas une vérification indépendante des certifications. Les polices Google Fonts utilisent une connexion Internet, avec polices système de secours. Les visuels sont locaux.

## Page Processus

La page Processus est accessible via `?page=processus`, la page Certifications via `?page=certifications`. L’en-tête et le pied de page sont partagés. `src/ProcessPage.jsx` contient les six étapes de production et `public/images/process-*.jpg` leurs visuels extraits du PDF « page processus.pdf ». Comme dans la maquette, l’étape Stockage reprend la photo de la chaîne de production.

## Page Formats

Accessible via `?page=formats`. Le fichier `src/FormatsPage.jsx` conserve les textes visibles de la maquette « site page formats.pdf », y compris les six volumes, leurs intitulés et la répétition du paragraphe de la section marché. Les images proviennent de ce PDF. Le pied de page Formats reprend son contenu sans inventer de pages juridiques ; les mentions juridiques restent du texte tant que leurs pages ne sont pas fournies.

## Page Qualité

Accessible via `?page=qualite`. `src/QualityPage.jsx` reprend les textes visibles de « site page qualité.pdf » sans reformulation : bannière, cinq points de contrôle et quatre engagements. Photos extraites du PDF, pictogrammes redessinés en SVG. En-tête et pied de page conservent le contenu de la maquette, comme la page Formats.

## Accueil

La racine du site et `?page=accueil` affichent l’accueil (`src/HomePage.jsx`). Le logo de toutes les pages permet d’y revenir. Les liens La Huilerie et Export rejoignent les sections correspondantes de l’accueil, en attendant des pages dédiées. Les boutons de partenariat rejoignent les coordonnées de contact. Les emplacements visuels proposés dans le brief sont remplacés par les photos et illustrations ZMELA déjà présentes dans le projet. Les textes « Website pages » et la présentation multi-pages sont conservés du brief.

## Processus — reproduction exacte de la composition du PDF

La version Processus utilise désormais la composition SVG extraite du document original, avec des liens React superposés et un contenu sémantique accessible. Voir `ANALYSE-PROCESSUS.md` pour les polices, couleurs, mesures, vérifications et limites de cette approche. Sur mobile, les proportions de la page sont conservées, sans redistribution des cartes.
