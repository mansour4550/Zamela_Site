import React from 'react';

const asset = name => `${import.meta.env.BASE_URL}images/${name}`;

const controls = [
  { text: 'Suivi des lots et traçabilité de production.', icon: 'clipboard' },
  { text: 'Équipements modernes adaptés aux standards professionnels.', icon: 'cogs' },
  { text: 'Contrôle des paramètres essentiels de qualité.', icon: 'flask' },
  { text: 'Préservation des arômes, de la fraîcheur et de la valeur nutritionnelle.', icon: 'leaf' },
  { text: 'Process certifié et orienté export.', icon: 'shield' },
];

const commitments = [
  {
    title: 'Traçabilité',
    text: 'Une lecture claire de l’origine, du traitement et du conditionnement.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 19V9h10l18 18-10 10L9 19z" />
        <circle cx="15" cy="15" r="2.5" fill="currentColor" />
        <path d="M22 28l6-6" />
      </svg>
    ),
  },
  {
    title: 'Maîtrise technique',
    text: 'Une production régulière, propre et respectueuse du profil aromatique.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="24" cy="24" r="7" />
        <path d="M24 6v4m0 28v4m-12.7-29.3l2.8 2.8m17.8 17.8l2.8 2.8M6 24h4m28 0h4M11.3 36.7l2.8-2.8m17.8-17.8l2.8-2.8" />
      </svg>
    ),
  },
  {
    title: 'Exigence sensorielle',
    text: 'Une huile expressive, équilibrée, fraîche et premium.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M24 6c-6 9-14 17-14 24a14 14 0 0 0 28 0c0-7-8-15-14-24z" />
        <path d="M19 32c0 3 2.5 5 5 5" />
      </svg>
    ),
  },
  {
    title: 'Standards internationaux',
    text: 'Une démarche qualité pensée pour les distributeurs et importateurs.',
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="24" cy="20" r="13" />
        <path d="M16 31l-3 11 11-5 11 5-3-11" />
        <path d="M19 20l3 3 7-7" />
      </svg>
    ),
  },
];

function ControlIcon({ type }) {
  switch (type) {
    case 'clipboard':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" />
          <path d="M9 14l2 2 4-4" />
        </svg>
      );
    case 'cogs':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'flask':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3" />
          <path d="M8 15h8" />
        </svg>
      );
    case 'leaf':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 20A7 7 0 0 1 4 13C4 6 12 3 20 3c0 8-3 16-10 16z" />
          <path d="M4 21c4-4 8-8 16-18" />
        </svg>
      );
    case 'shield':
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
  }
}

export default function QualityPage() {
  return (
    <main id="contenu" className="quality-page">
      <section className="hero quality-hero" aria-labelledby="quality-title">
        <img
          className="hero-image"
          src={asset('quality-hero.jpg')}
          alt="Huile d’olive ZMELA et échantillons pour le contrôle qualité"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="badge-pill">Contrôle qualité</span>
          <h1 id="quality-title">
            UNE QUALITÉ<br />
            SUIVIE, MESURÉE<br />
            ET PROTÉGÉE
          </h1>
          <p>
            La valeur d’une huile d’olive premium repose sur la rigueur du process, la traçabilité et la capacité à préserver le goût naturel du fruit.
          </p>
        </div>
      </section>

      <section className="quality-control" aria-labelledby="control-title">
        <div className="container quality-control-inner">
          <div className="quality-production">
            <img
              src={asset('quality-production.jpg')}
              alt="Équipe et équipements de production dans l’huilerie"
              loading="lazy"
              width="2740"
              height="1536"
            />
          </div>
          <div className="quality-control-copy">
            <h2 id="control-title">
              LA PRÉCISION INDUSTRIELLE<br />
              AU SERVICE DU GOÛT<br />
              MÉDITERRANÉEN
            </h2>
            <p>
              Chaque étape est pensée pour maintenir l’intégrité de l’huile : réception, extraction, stockage, analyses, conditionnement et préparation des commandes.
            </p>
            <ul className="quality-controls">
              {controls.map(item => (
                <li key={item.text}>
                  <span className="quality-control-icon">
                    <ControlIcon type={item.icon} />
                  </span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="quality-commitments container" aria-label="Engagements qualité">
        {commitments.map(item => (
          <article className="quality-commitment" key={item.title}>
            <span className="quality-commitment-icon">{item.icon}</span>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
