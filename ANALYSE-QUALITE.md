# Analyse et reproduction de la page Qualité

## Source
`site page qualité.pdf`, une page de 1343,13 × 2988,12 points. Rapport largeur/hauteur de 0,44948 strictement conservé sur le site.

## Typographie et couleurs relevées
- **Montserrat Bold / Black** : titre principal (51,02 pt), titre de précision industrielle (34,01 pt), titres d'engagements (21,00 pt), badge (20,00 pt), titre contact (22,00 pt).
- **Montserrat Medium / Regular** : chapô hero (17,01 pt), textes de contrôle (14,00 pt), descriptions des cartes (15,00 pt), coordonnées et footer.
- **Palette chromatique** :
  - Bleu nuit institutionnel : `#172F49`
  - Doré ZMELA : `#D5B038`
  - Vert forêt texturé : `#284234` / `#1F3327`
  - Blanc cassé / beige papier : `#FAF8F5`
  - Gris de lecture : `#4A4A4A` et `#555555`

## Éléments préservés à l'identique
- Bannière d'en-tête avec bordure texturée façon papier déchiré (*deckled edge*).
- Logo officiel ZMELA Olive Oil, signature d'entreprise et badge d'appel doré centré.
- Menu de navigation avec état actif spécifiquement sur **Qualité**.
- Section Héro : carnet de suivi qualité avec stylo, tubes à essais d'huile d'olive, bécher avec pipette, bouteille ZMELA grand format et rameaux d'olives fraîches.
- Section industrielle : bloc visuel de l'unité de production avec les 5 points de contrôle et leurs icônes circulaires bleu nuit.
- Grille 2×2 des 4 cartes d'engagements de qualité aux coins arrondis et icônes dorées (*Traçabilité*, *Maîtrise technique*, *Exigence sensorielle*, *Standards internationaux*).
- Pied de page texturé avec les illustrations d'aquarelle de feuilles d'olivier, bloc adresse, numéros de téléphone et mentions légales.

## Réalisation
- `public/images/qualite-reference.jpg` restitue l'intégralité du rendu original en très haute définition (2686 × 5976 px).
- `src/QualityPage.jsx` et `src/process-exact.css` intègrent la composition dans React avec calque interactif de navigation proportionnel et structure HTML sémantique pour l'accessibilité et le SEO.
