import React from 'react';
const asset = name => `${import.meta.env.BASE_URL}images/${name}`;
const formats = [
  { size: '5L', label: 'Family & HoReCa', image: 'formats-09.jpg' },
  { size: '3L', label: 'Retail Export', image: 'formats-10.jpg' },
  { size: '1L', label: 'Premium Bottle', image: 'formats-11.jpg' },
  { size: '750ML', label: 'Table Selection', image: 'formats-12.jpg' },
  { size: '500ML', label: 'Retail Classic', image: 'formats-02.jpg' },
  { size: '250ML', label: 'Discovery Size', image: 'formats-03.jpg' },
];
const marketCopy = 'Du rayon spécialisé aux circuits de distribution internationaux, ZMELA propose des formats flexibles et une présentation premium.';
export default function FormatsPage() {
  return <main id="contenu" className="formats-page">
    <section className="hero formats-hero" aria-labelledby="formats-title">
      <img className="hero-image" src={asset('formats-01.jpg')} alt="La gamme ZMELA : bidons et bouteilles d’huile d’olive" fetchPriority="high" />
      <div className="hero-shade" />
      <div className="container hero-content"><span className="badge-pill">Formats disponibles</span><h1 id="formats-title">UNE GAMME<br />PENSÉE POUR<br />TOUS LES<br /><em>MARCHÉS.</em></h1><p>ZMELA propose des formats pensés pour les consommateurs, les professionnels de la restauration, les importateurs et les marques privées.</p></div>
    </section>
    <section className="formats-catalog container" aria-label="Formats disponibles">
      <div className="formats-grid">{formats.map(format => <article className="format-card" key={format.size}>
        <div className="format-picture"><img src={asset(format.image)} alt={`ZMELA Olive Oil — ${format.size}`} loading="lazy" width="884" height="660" /></div>
        <div className="format-info"><h2>{format.size}</h2><p>{format.label}</p></div>
      </article>)}</div>
    </section>
    <section className="formats-market" aria-labelledby="market-title"><div className="container formats-market-inner">
      <img src={asset('formats-04.jpg')} alt="Les six formats de la gamme ZMELA Olive Oil" loading="lazy" width="1448" height="1086" />
      <div><h2 id="market-title">DESIGNED FOR EVERY<br />MARKET</h2><p>{marketCopy}</p><p>{marketCopy}</p></div>
    </div></section>
  </main>;
}
export function FormatsFooter() {
  return <footer id="contact" className="footer formats-footer"><div className="container footer-main">
    <div className="footer-brand"><span className="wordmark">Zmela<span>OLIVE OIL</span></span><p>Producteur tunisien d’huile d’olive extra vierge premium et maison productrice de ZMELA Olive Oil</p></div>
    <div className="footer-contact"><h2>CONTACT</h2><address><div><span>ADRESSE</span>Route Sharban Al-Sawasi, Mahdia 5140</div><div><span>PHONE</span><a href="tel:+21693454606">93 454 606</a> - <a href="tel:+21623465997">23 465 997</a></div></address></div>
  </div><div className="container footer-bottom"><span>© HUILERIE AL FERDAWS SARL</span><span>Mentions légales • Politique de confidentialité • Cookies</span></div></footer>;
}
