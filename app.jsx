/* Main App v5 — admin panel + certification routing */
const App = () => {
  const [page, setPage] = React.useState('boot');
  const [lang, setLang] = React.useState('ua');
  const [certId, setCertId] = React.useState(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cert = params.get('cert');
    if (cert) {
      setCertId(cert);
      setPage('cert');
    }
  }, []);

  const nav = (p) => {
    setPage(p);
    const main = document.querySelector('.main');
    if (main) main.scrollTop = 0;
  };

  const handleCertGenerated = (id) => {
    setCertId(id);
    nav('certs');
  };

  if (page === 'boot') return React.createElement(BootPage, { onEnter: () => nav('overview') });

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
  };
  const P = PM[page] || OverviewPage;
  const pageProps = { onNavigate: nav };
  if (page === 'assessment') pageProps.onCertGenerated = handleCertGenerated;

  return (
    <div style={{height:'100%',position:'relative'}}>
      <div style={{position:'fixed',inset:0,zIndex:0,pointerEvents:'none'}}>
        <StarField density={80} opacity={0.06} subtle />
      </div>
      <Shell cur={page} nav={nav} lang={lang}>
        <P key={page} {...pageProps} />
      </Shell>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
