/* App — Цифрова Спадщина ДонНТУ */

const App = () => {
  const [page, setPage] = React.useState('home');
  const [certId, setCertId] = React.useState(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get('cert');
    if (c) { setCertId(c); setPage('cert'); }
  }, []);

  const nav = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCertGenerated = (id) => {
    setCertId(id);
    const u = new URL(window.location.href);
    u.searchParams.set('cert', id);
    window.history.pushState({}, '', u);
    setPage('cert');
  };

  if (page === 'cert') {
    let data = null;
    if (certId) {
      try { data = JSON.parse(localStorage.getItem('donntu_cert_' + certId) || 'null'); } catch (e) {}
    }
    return React.createElement(CertPage, {
      certId,
      certData: data,
      onBack: () => {
        const u = new URL(window.location.href);
        u.searchParams.delete('cert');
        window.history.pushState({}, '', u);
        nav('home');
      },
    });
  }

  const PAGES = {
    home: HomePage,
    gallery: GalleryPage,
    campus3d: Campus3DPage,
    archive: ArchivePage,
    voices: VoicesPage,
    timeline: TimelinePage,
    certify: CertifyPage,
    assessment: AssessmentPage,
  };
  const P = PAGES[page] || HomePage;

  return React.createElement(
    Shell,
    { cur: page, nav },
    React.createElement(P, {
      key: page,
      onNavigate: nav,
      onCertGenerated: handleCertGenerated,
    })
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
