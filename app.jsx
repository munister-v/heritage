/* Main App v3 */
const App = () => {
  const [page, setPage] = React.useState('boot');
  const [lang, setLang] = React.useState('ua');

  const nav = (p) => {
    setPage(p);
    const main = document.querySelector('.main');
    if (main) main.scrollTop = 0;
  };

  if (page === 'boot') return React.createElement(BootPage, { onEnter: () => nav('overview') });

  const PM = {
    overview: OverviewPage,
    heritage: HeritagePage,
    campus: CampusPage,
    building: BuildingPage,
    labs: LabsPage,
    simulation: SimulationPage,
    achievements: AchievementsPage,
    assessment: AssessmentPage,
    archive: ArchivePage,
    student: AchievementsPage,
  };
  const P = PM[page] || OverviewPage;

  return (
    <div style={{height:'100%',position:'relative'}}>
      <div style={{position:'fixed',inset:0,zIndex:0,pointerEvents:'none'}}>
        <StarField density={80} opacity={0.06} subtle />
      </div>
      <Shell cur={page} nav={nav} lang={lang}>
        <P key={page} onNavigate={nav} />
      </Shell>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
