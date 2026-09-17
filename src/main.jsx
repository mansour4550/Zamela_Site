import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import ProcessPage from './ProcessPage.jsx';
import FormatsPage, { FormatsFooter } from './FormatsPage.jsx';
import QualityPage from './QualityPage.jsx';
import CertificationsPage from './CertificationsPage.jsx';
import HomePage, { HomeFooter } from './HomePage.jsx';

const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`;

function Arrow({ down = false }) {
  return <span aria-hidden="true">{down ? '↓' : '↗'}</span>;
}

function Header({ page, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNav = (targetPage, hash = '') => {
    setOpen(false);
    if (onNavigate) {
      onNavigate(targetPage, hash);
    }
  };

  return (
    <header className="header" id="haut">
      <div className="header-top container">
        <a
          href="?page=accueil"
          aria-label="ZMELA Olive Oil, accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNav('accueil');
          }}
        >
          <img className="logo" src={asset('zmela-logo.png')} alt="ZMELA Olive Oil" />
        </a>
        <a className="header-phone" href="tel:+21693454606">
          <span className="phone-icon" aria-hidden="true">↗</span>
          <span>
            {['formats', 'qualite', 'certifications', 'processus'].includes(page) ? (
              <>Contactez nous au :<strong>93 454 606 - 23 465 997</strong></>
            ) : (
              <>Parlons de votre projet<strong>+216 93 454 606</strong></>
            )}
          </span>
        </a>
        <span className="header-signature">
          Huilerie El Ferdaws <span>·</span> {['formats', 'qualite', 'certifications', 'processus', 'accueil'].includes(page) ? 'ZMELA Olive Oil' : 'Depuis la Tunisie, avec passion.'}
        </span>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Fermer ✕' : 'Menu ☰'}
        </button>
      </div>
      <nav id="navigation" className={`navigation ${open ? 'is-open' : ''}`} aria-label="Navigation principale">
        <div className="container nav-inner">
          <a
            href="?page=accueil#huilerie"
            onClick={(e) => {
              e.preventDefault();
              handleNav('accueil', 'huilerie');
            }}
          >
            La Huilerie
          </a>
          <a
            href="?page=processus"
            aria-current={page === 'processus' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNav('processus');
            }}
          >
            Processus {page === 'processus' && <span className="nav-dot" />}
          </a>
          <a
            href="?page=qualite"
            aria-current={page === 'qualite' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNav('qualite');
            }}
          >
            Qualité {page === 'qualite' && <span className="nav-dot" />}
          </a>
          <a
            href="?page=certifications"
            aria-current={page === 'certifications' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNav('certifications');
            }}
          >
            Certifications {page === 'certifications' && <span className="nav-dot" />}
          </a>
          <a
            href="?page=formats"
            aria-current={page === 'formats' ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              handleNav('formats');
            }}
          >
            Formats {page === 'formats' && <span className="nav-dot" />}
          </a>
          <a
            href="?page=accueil#export"
            onClick={(e) => {
              e.preventDefault();
              handleNav('accueil', 'export');
            }}
          >
            Export
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNav(page, 'contact');
            }}
          >
            Contact <Arrow />
          </a>
          {page === 'accueil' && (
            <a
              className="nav-partner"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav('accueil', 'contact');
              }}
            >
              Devenir partenaire <Arrow />
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <span className="wordmark">Zmela<span>OLIVE OIL</span></span>
          <p>Producteur tunisien d’huile d’olive extra vierge premium et maison productrice de ZMELA Olive Oil.</p>
          <span className="footer-origin">UNE TERRE. UNE PASSION. UNE EXIGENCE.</span>
        </div>
        <div className="footer-contact">
          <span className="badge-pill">Restons en contact</span>
          <h2>Une belle histoire<br />commence par un échange.</h2>
          <address>
            <div>
              <span>Adresse</span>
              Route Sharban Al-Sawasi, Mahdia 5140
            </div>
            <div>
              <span>Téléphone</span>
              <a href="tel:+21693454606">+216 93 454 606</a>
              <span className="phone-divider"> / </span>
              <a href="tel:+21623465997">+216 23 465 997</a>
            </div>
          </address>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© HUILERIE AL FERDAWS SARL</span>
        <span>Mentions légales • Politique de confidentialité • Cookies</span>
        <a href="#haut" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}

function App() {
  const getPageFromUrl = () => {
    const p = new URLSearchParams(window.location.search).get('page');
    return ['processus', 'formats', 'qualite', 'certifications'].includes(p) ? p : 'accueil';
  };

  const [page, setPage] = useState(getPageFromUrl);

  const navigate = (newPage, hash = '') => {
    setPage(newPage);
    const newUrl = newPage === 'accueil' ? (hash ? `/#${hash}` : '/') : `?page=${newPage}${hash ? `#${hash}` : ''}`;
    window.history.pushState({}, '', newUrl);

    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPageFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = `${
      page === 'accueil'
        ? 'Huilerie El Ferdaws'
        : page === 'qualite'
        ? 'Contrôle qualité'
        : page === 'formats'
        ? 'Formats disponibles'
        : page === 'processus'
        ? 'Processus de production'
        : 'Certifications & Awards'
    } — ZMELA Olive Oil`;
  }, [page]);

  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Header page={page} onNavigate={navigate} />
      {page === 'accueil' && <HomePage onNavigate={navigate} />}
      {page === 'processus' && <ProcessPage onNavigate={navigate} />}
      {page === 'qualite' && <QualityPage onNavigate={navigate} />}
      {page === 'certifications' && <CertificationsPage onNavigate={navigate} />}
      {page === 'formats' && <FormatsPage onNavigate={navigate} />}
      {page === 'accueil' ? <HomeFooter /> : ['formats'].includes(page) ? <FormatsFooter /> : <Footer onNavigate={navigate} />}
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
