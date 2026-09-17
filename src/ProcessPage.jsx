import React from 'react';

const asset = name => `${import.meta.env.BASE_URL}images/${name}`;

const steps = [
  { num: '01', title: 'Réception des olives', text: 'Les olives sont reçues avec une attention particulière portée à la fraîcheur, à l’état du fruit et à la rapidité de transformation.', image: 'process-00.jpg' },
  { num: '02', title: 'Sélection et nettoyage', text: 'Les lots sont contrôlés, triés et nettoyés afin d’éliminer les impuretés et de préparer une matière première saine.', image: 'process-01.jpg' },
  { num: '03', title: 'Extraction à froid', text: 'L’extraction est conduite avec maîtrise pour préserver les arômes, la finesse végétale et la valeur nutritionnelle.', image: 'process-02.jpg' },
  { num: '04', title: 'Séparation et filtration', text: 'Les phases sont séparées avec précision puis l’huile est stabilisée selon le profil recherché.', image: 'process-03.jpg' },
  { num: '05', title: 'Stockage contrôlé', text: 'L’huile est conservée dans des conditions adaptées afin de préserver fraîcheur, équilibre et stabilité.', image: 'process-13.jpg' },
  { num: '06', title: 'Bottling & packaging', text: 'Le conditionnement valorise ZMELA et répond aux exigences retail, horeca, export et private label.', image: 'process-14.jpg' },
];

export default function ProcessPage({ onNavigate }) {
  return (
    <main id="contenu" className="process-page">
      <section className="hero process-hero" aria-labelledby="process-title">
        <img
          className="hero-image"
          src={asset('process-04.jpg')}
          alt="Oliveraie tunisienne de Huilerie El Ferdaws"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="badge-pill">Processus de production</span>
          <h1 id="process-title">
            DE L’OLIVE FRAÎCHE<br />
            À L’HUILE <em>PREMIUM</em>
          </h1>
          <p>
            Notre process est conçu pour protéger la qualité du fruit, maîtriser chaque transformation et garantir une huile stable, expressive et conforme aux exigences des partenaires.
          </p>
          <a className="button" href="#etapes">
            Découvrir les 6 étapes <span aria-hidden="true">↓</span>
          </a>
        </div>
      </section>

      <section className="process-intro container" id="etapes">
        <div className="steps-heading">
          <div>
            <span className="badge-pill">De l'arbre à la bouteille</span>
            <h2>Une qualité contrôlée <em>à chaque étape</em></h2>
          </div>
        </div>
        <div className="pdf-steps">
          {steps.map(step => (
            <article className="pdf-step" key={step.num}>
              <span className="pdf-step-label">Étape {step.num}</span>
              <div className="pdf-step-panel">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <img className="pdf-step-photo-image" src={asset(step.image)} alt={step.title} loading="lazy" />
              </div>
            </article>
          ))}
        </div>
        <div className="process-cta">
          <div>
            <span className="badge-pill">Gamme & Formats</span>
            <h2>Découvrez notre sélection de formats prêts à l'export</h2>
          </div>
          <button className="button" onClick={() => onNavigate && onNavigate('formats')}>
            Voir les formats disponibles <span aria-hidden="true">↗</span>
          </button>
        </div>
      </section>
    </main>
  );
}
