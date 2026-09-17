import React from 'react';

const asset = name => `${import.meta.env.BASE_URL}images/${name}`;

const awards = [
  { name: 'USIOOC Miami', description: 'International Olive Oil Competition', place: 'Miami', year: '2025', image: 'asset-00.jpg' },
  { name: 'Olea Mogador Gold 2025', description: 'Gold Recognition', place: 'Mogador', year: '2025', image: 'asset-01.jpg' },
  { name: 'EIOOC', description: 'European International Recognition', place: 'Europe', year: null, image: 'asset-02.jpg' },
  { name: 'Olive Istanbul IOOC 2025', description: 'International Award', place: 'Istanbul', year: '2025', image: 'asset-03.jpg' },
  { name: 'Pyramids IOOC 2026', description: 'Quality Recognition', place: 'Égypte', year: '2026', image: 'asset-04.jpg' },
  { name: 'London EIOOC Gold 2026', description: 'Gold Medal', place: 'Londres', year: '2026', image: 'asset-05.jpg' },
];

function AwardCard({ award, index }) {
  return (
    <article className="award-card">
      <div className="award-visual">
        <span className="award-number">0${index + 1}</span>
        <img src={asset(award.image)} alt={`Trophée ${award.name}`} loading="lazy" width="400" height="400" />
        {award.year && <span className="award-year">${award.year}</span>}
      </div>
      <div className="award-info">
        <span className="award-location">${award.place}</span>
        <h3>${award.name}</h3>
        <p>${award.description}</p>
      </div>
    </article>
  );
}

export default function CertificationsPage() {
  return (
    <main id="contenu" className="certifications-page">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src={asset('asset-08.jpg')}
          alt="Huile d’olive ZMELA, bouteille, bidon et trophée dans un paysage méditerranéen"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="badge-pill">Certifications & Awards</span>
          <h1 id="hero-title">
            UNE RECONNAISSANCE<br />
            QUI RENFORCE<br />
            LA <em>CONFIANCE</em>
          </h1>
          <p>
            Le fruit de notre savoir-faire.<br />
            La reconnaissance au-delà des frontières.
          </p>
          <a className="button" href="#certifications">
            Découvrir nos distinctions <span aria-hidden="true">↓</span>
          </a>
        </div>
        <span className="hero-caption">ZMELA OLIVE OIL · TUNISIE</span>
      </section>

      <section className="awards-section" id="certifications" aria-labelledby="awards-title">
        <div className="section-intro">
          <span className="badge-pill">Certifications & Awards</span>
          <h2 id="awards-title">Certifications <em>& Awards</em></h2>
          <p>
            ZMELA Olive Oil bénéficie d’une reconnaissance internationale à travers plusieurs distinctions, médailles et compétitions spécialisées. Ces récompenses reflètent l’engagement de Huilerie El Ferdaws envers la qualité et l’excellence.
          </p>
          <div className="section-rule"><span>✦</span></div>
        </div>
        <div className="container awards-grid">
          {awards.map((award, index) => (
            <AwardCard key={award.name} award={award} index={index} />
          ))}
        </div>
      </section>

      <section className="standards container" id="engagement" aria-labelledby="standards-title">
        <div className="standards-copy">
          <span className="badge-pill">International standards</span>
          <h2 id="standards-title">
            Une marque claire,<br />
            fiable et <em>rassurante.</em>
          </h2>
          <p>
            Au-delà des médailles, Huilerie El Ferdaws construit une démarche continue : process contrôlé, traçabilité, conservation adaptée et présentation premium.
          </p>
          <div className="principles">
            <span>Process contrôlé</span>
            <span>Traçabilité</span>
            <span>Qualité</span>
          </div>
          <a className="text-link" href="#contact">
            Échangeons sur vos besoins <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="standards-image">
          <img
            src={asset('asset-13.jpg')}
            alt="Bouteille d’huile d’olive ZMELA accompagnée de son certificat et de ses distinctions"
            loading="lazy"
            width="1536"
            height="1024"
          />
          <span className="image-note">Le goût de l’exigence.</span>
        </div>
      </section>
    </main>
  );
}
