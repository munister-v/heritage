/* Main App v6 — hash-based anchor routing */
const VALID_PAGES = new Set([
  'overview','heritage','campus','building','labs','simulation','achievements',
  'archive','certs','war','people','future','library','applicant','studentlife',
  'map','timecapsule','eras','voices','science','international','departments','admin','panneau'
]);

const getHashPage = () => {
  const h = window.location.hash.replace('#','').toLowerCase().trim();
  return VALID_PAGES.has(h) ? h : null;
};

const App = () => {
  const [page, setPage] = React.useState('overview');
  const [lang, setLang] = React.useState('ua');
  const [certId, setCertId] = React.useState(null);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cert = params.get('cert');
    if (cert) {
      setCertId(cert);
      setPage('cert');
      return;
    }
    // Hash routing on first load
    const hashPage = getHashPage();
    if (hashPage) setPage(hashPage);
  }, []);

  // React to browser back/forward
  React.useEffect(() => {
    const onHash = () => {
      const h = getHashPage();
      if (h) setPage(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const nav = (p) => {
    setPage(p);
    if (p !== 'cert') history.pushState(null, '', '#' + p);
    const main = document.querySelector('.main');
    if (main) main.scrollTop = 0;
    try {
      const v = JSON.parse(localStorage.getItem('donntu_visits') || '{}');
      v[p] = (v[p] || 0) + 1;
      localStorage.setItem('donntu_visits', JSON.stringify(v));
    } catch {}
  };

  const copyLink = (targetPage) => {
    const p = targetPage || page;
    const url = window.location.origin + window.location.pathname + '#' + p;
    try {
      navigator.clipboard.writeText(url);
    } catch (_) {
      const ta = document.createElement('textarea');
      ta.value = url; document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCertGenerated = (id) => {
    setCertId(id);
    nav('certs');
  };

  if (page === 'cert') {
    const data = certId
      ? (() => { try { return JSON.parse(localStorage.getItem('donntu_cert_' + certId) || 'null'); } catch(e) { return null; } })()
      : null;
    return React.createElement(CertPage, { certId, certData: data, onBack: () => nav('overview') });
  }

  const PM = {
    overview:     OverviewPage,
    heritage:     HeritagePage,
    campus:       CampusPage,
    building:     BuildingPage,
    labs:         LabsPage,
    simulation:   SimulationPage,
    achievements: AchievementsPage,
    assessment:   AssessmentPage,
    archive:      ArchivePage,
    certs:        CertsListPage,
    war:          WarPage,
    people:       PeoplePage,
    future:       FuturePage,
    library:      LibraryPage,
    applicant:    ApplicantPage,
    studentlife:  StudentLifePage,
    map:          MapPage,
    timecapsule:  TimeCapsulePage,
    eras:         ErasPage,
    voices:       VoicesPage,
    science:      SciencePage,
    international:InternationalPage,
    departments:  DepartmentsPage,
    admin:        AdminPage,
    panneau:      HeritageDonntuPage,
  };
  const P = PM[page] || OverviewPage;
  const pageProps = { onNavigate: nav };
  if (page === 'assessment') pageProps.onCertGenerated = handleCertGenerated;

  return (
    <Shell cur={page} nav={nav} lang={lang} copyLink={copyLink} copied={copied}>
      <P key={page} {...pageProps} />
    </Shell>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
