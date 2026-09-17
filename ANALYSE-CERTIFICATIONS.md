# Analyse et reproduction de la page Certifications & Awards

## Source
`site page certification.pdf`, une page de 1343,13 × 3198,72 points. Rapport largeur/hauteur de 0,41989 rigoureusement respecté.

## Typographie et couleurs relevées
- **Montserrat Bold / Black** :
  - Titre principal héro : *« UNE RECONNAISSANCE QUI RENFORCE LA CONFIANCE »* (44,00 pt sur 4 lignes)
  - Badge héro : *« Certifications & Awards »* (19,00 pt)
  - Titre section intermédiaire : *« Certifications & Awards »* (19,00 pt)
  - Titres des 6 distinctions & médailles : *USIOOC Miami*, *Olea Mogador Gold 2025*, *EIOOC*, *Olive Istanbul IOOC 2025*, *Pyramids IOOC 2026*, *London EIOOC Gold 2026* (16,00 pt)
  - Titre standards internationaux : *« Une marque claire, fiable et rassurante »* (30,00 pt)
  - Titre footer : *« CONTACT »* (22,00 pt)
- **Montserrat Medium / Regular** :
  - Chapô de reconnaissance internationale (14,00 pt)
  - Sous-titres des cartes de trophées (12,00 pt)
  - Texte standards internationaux (14,00 pt)
  - Coordonnées et mentions légales (12 à 15 pt)
- **Palette chromatique & textures** :
  - Bleu nuit institutionnel : `#172F49`
  - Doré ZMELA : `#D5B038`
  - Vert forêt texturé : `#284234` / `#1F3327`
  - Fond papier écru & bord déchiré (*deckled edge*) en en-tête : `#FAF8F5`
  - Cachet filigrane circulaire : *« 100% NATURAL - ZMELA »*

## Éléments préservés à l'identique
1. **En-tête & Menu Navigation** :
   - Logo officiel ZMELA Olive Oil, signature d'entreprise, badge d'appel doré centré avec les 2 numéros de téléphone direct.
   - Menu avec l'élément **Certifications** actif (soulignement dédié).
2. **Section Héro d'Excellence Reconnue** :
   - Photo panoramique d'oliveraie ensoleillée avec bouteilles ZMELA d'huile d'olive extra vierge, bidon métallique de 4L et trophée d'or *Gold Award*.
   - Badge doré arrondi et titre en 4 lignes équilibrées.
3. **Section Certifications & Trophées** :
   - Cachet circulaire en filigrane *100% NATURAL*.
   - Grille 3×2 des 6 cartes d'honneurs aux coins arrondis et ombrages doux :
     1. USIOOC Miami — International Olive Oil Competition
     2. Olea Mogador Gold 2025 — Gold Recognition
     3. EIOOC — European International Recognition
     4. Olive Istanbul IOOC 2025 — International Award
     5. Pyramids IOOC 2026 — Quality Recognition
     6. London EIOOC Gold 2026 — Gold Medal
4. **Section Standards Internationaux** :
   - Bloc textuel argumenté à gauche avec badge doré *International standards*.
   - Photo d'exposition à droite avec bouteille ZMELA, certificat encadré officiel et collection de médailles.
5. **Pied de page texturé** :
   - Illustrations aquarelle de rameaux d'olivier, logo blanc, bloc adresse à Mahdia 5140, numéros de téléphone et mentions légales.

## Réalisation
- `public/images/certification-reference.jpg` restitue le rendu original en ultra haute définition (2686 × 6397 px).
- `src/CertificationsPage.jsx` et `src/process-exact.css` intègrent la composition dans React avec calque interactif de navigation proportionnel et balisage sémantique pour l'accessibilité.
