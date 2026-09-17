# Analyse et reproduction de la page Processus

## Source

`page processus.pdf`, une page de 1343,13 × 3680,04 points. Rapport largeur/hauteur conservé sur le site.

## Typographie et couleurs relevées

- Montserrat Bold : titre principal 51,02 pt ; titres d’étapes 25,10 pt ; titre intermédiaire 31,18 pt.
- Montserrat Medium : descriptions d’étapes 17,01 pt ; introduction 19,84 pt.
- Signatra DEMO : numéros d’étapes 50,79 pt.
- Montserrat Medium / SemiBold : navigation, coordonnées et pied de page.
- Bleu : #172F49 ; doré : #D5B038 ; vert des étapes : #3B702E ; texte courant : #3D3C3C.

## Éléments préservés

Bannière et découpe, logo, navigation, badges dorés, image panoramique de l’oliveraie, feuilles décoratives, espaces blancs, position et forme des cartes, images débordantes, polices originales, sauts de ligne, textures et pied de page. Les ajouts de la précédente version (phrases de bannière, compteur 06, sous-titres des cartes, bloc de promotion final) ont été retirés de cette page.

## Réalisation

`public/images/processus-reference.svg` contient la composition extraite du PDF : photos intégrées et tracés vectoriels des lettres et formes. Les modes de fusion « darken » des groupes découpés ont été ajustés pour retrouver les transparences dans Chromium. Aucun appel à Google Fonts n’est nécessaire pour cette composition.

`src/ProcessPage.jsx` affiche cette composition dans React avec une couche de liens positionnés selon les coordonnées du PDF et un contenu sémantique pour les lecteurs d’écran. L’en-tête et le pied de page propres au PDF remplacent ceux du site uniquement sur Processus. Les autres pages restent inchangées.

Conséquence : les textes visibles sont des tracés SVG, et non des paragraphes HTML modifiables ou sélectionnables. Une modification visuelle future nécessite de régénérer ou d’éditer la composition. Sur mobile, la page est réduite proportionnellement pour préserver la composition, sans réorganisation des cartes ; les textes sont donc plus petits et peuvent nécessiter un zoom.

## Vérification

Capture navigateur et rendu PDF comparés à 1343 × 3680 pixels. Géométrie et composition conservées. Des différences de lissage et de conversion des couleurs subsistent entre Poppler et Chromium : écart absolu moyen par canal de 3,69 sur 255. Cela ne constitue pas une identité pixel à pixel entre moteurs.

Navigation Contact et View More vérifiée ; View More ouvre Formats. Absence de débordement horizontal aux largeurs 390 et 320 pixels. Aucun événement d’erreur JavaScript lors de la vérification.
