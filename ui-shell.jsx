/* UI Shell v5 — admin panel access, amber palette, certification system */
const PAGES = [
  { id:'overview',     n:'01', ua:'Огляд' },
  { id:'heritage',     n:'02', ua:'Спадщина',     core:true },
  { id:'campus',       n:'03', ua:'Кампус' },
  { id:'building',     n:'04', ua:'Корпус' },
  { id:'labs',         n:'05', ua:'Лабораторії' },
  { id:'simulation',   n:'06', ua:'Симуляція' },
  { id:'achievements', n:'07', ua:'Досягнення',   core:true },
  { id:'archive',      n:'08', ua:'Архів' },
  { id:'certs',        n:'09', ua:'Сертифікати',  core:true },
  { id:'war',          n:'10', ua:'Війна',        core:true },
  { id:'people',       n:'11', ua:'Люди' },
  { id:'future',       n:'12', ua:'Майбутнє',     core:true },
  { id:'library',      n:'13', ua:'Бібліотека' },
  { id:'applicant',    n:'14', ua:'Абітурієнту',  core:true },
  { id:'studentlife', n:'15', ua:'Студентське життя' },
  { id:'map',          n:'16', ua:'Мапа',         core:true },
  { id:'timecapsule', n:'17', ua:'Часова капсула' },
  { id:'eras',         n:'18', ua:'Порівняння епох' },
  { id:'voices',       n:'19', ua:'Голоси',        core:true },
  { id:'science',      n:'20', ua:'Наука' },
  { id:'international',n:'21', ua:'Міжнародне' },
  { id:'departments',  n:'22', ua:'Кафедри',       core:true },
];

const TopBar = ({ cur, nav, lang }) => {
  const quick = ['01','02','05','07','10','12','14'];
  const [logoClicks, setLogoClicks] = React.useState(0);
  const logoClickRef = React.useRef(null);

  const handleLogoClick = () => {
    nav('boot');
    // 5 кліків за 3 секунди → admin
    setLogoClicks(n => {
      const next = n + 1;
      clearTimeout(logoClickRef.current);
      if (next >= 5) { nav('admin'); return 0; }
      logoClickRef.current = setTimeout(() => setLogoClicks(0), 3000);
      return next;
    });
  };

  const settings = (() => {
    try { return JSON.parse(localStorage.getItem('donntu_admin_settings') || '{}'); } catch { return {}; }
  })();
  const buildVer = settings.buildVersion || 'V · 2026.05';

  return (
    <header className="top">
      <div className="top-l">
        <span className="top-logo" onClick={handleLogoClick} title="Клікніть 5 разів для входу в адмін">⊡</span>
        <span className="top-brand">DONNTU · OS</span>
        <span className="top-ver">{buildVer}</span>
      </div>
      <nav className="top-nav">
        {PAGES.filter(p => quick.includes(p.n)).map(p => (
          <button key={p.id} className={`top-btn ${cur===p.id?'act':''}`} onClick={() => nav(p.id)}>
            {p.n} {p.ua.toUpperCase()}{p.core ? ' ⟡' : ''}
          </button>
        ))}
      </nav>
      <div className="top-r">
        <span>{settings.studentName || 'Ірина'} · {settings.studentCourse || '3 курс'}</span>
        <span>
          <span className={lang==='en'?'lang-act':''}>EN</span>{' · '}
          <span className={lang==='ua'?'lang-act':''}>UA</span>
        </span>
        <span className="top-time">{new Date().toLocaleTimeString('uk-UA',{hour:'2-digit',minute:'2-digit'})} · {settings.city || 'ЛУЦЬК'}</span>
      </div>
    </header>
  );
};

const Sidebar = ({ cur, nav }) => {
  const certCount = (() => {
    try {
      return Object.keys(localStorage).filter(k => k.startsWith('donntu_cert_')).length;
    } catch(e) { return 0; }
  })();
  const settings = (() => {
    try { return JSON.parse(localStorage.getItem('donntu_admin_settings') || '{}'); } catch { return {}; }
  })();
  const disabled = settings.disabledPages || [];

  return (
    <aside className="side">
      <div className="side-hdr">
        <span className="lbl">СИСТЕМА</span>
        <span className="lbl lbl-dim">XXII</span>
      </div>
      <nav className="side-nav">
        {PAGES.filter(p => !disabled.includes(p.id)).map(p => (
          <button key={p.id} className={`si ${cur===p.id?'act':''}`} onClick={() => nav(p.id)}>
            <span className="si-num">{p.n}</span>
            <span className="si-label">
              {p.ua}
              {p.id === 'certs' && certCount > 0 ? ` (${certCount})` : ''}
            </span>
            <span className="si-mark">{p.core ? '⟡' : ''}</span>
          </button>
        ))}
      </nav>
      {/* Admin button — at the bottom of sidebar */}
      <div style={{marginTop:'auto', borderTop:'1px solid var(--b1)', padding:'0.5rem 0'}}>
        <button className={`si ${cur==='admin'?'act':''}`} onClick={() => nav('admin')} style={{
          borderLeft: cur==='admin' ? '2px solid var(--lime)' : '2px solid transparent',
          color: cur==='admin' ? 'var(--lime)' : 'var(--t3)',
        }}>
          <span className="si-num" style={{color:'var(--lime)', opacity:0.7}}>⟡</span>
          <span className="si-label" style={{letterSpacing:'0.06em'}}>АДМІН</span>
          <span className="si-mark" style={{color:'var(--lime)', fontSize:'0.5rem'}}>●</span>
        </button>
      </div>
    </aside>
  );
};

const StatusBar = ({ route }) => {
  const certCount = (() => {
    try {
      return Object.keys(localStorage).filter(k => k.startsWith('donntu_cert_')).length;
    } catch(e) { return 0; }
  })();

  return (
    <footer className="sbar">
      <div className="sbar-l">
        <span><span style={{color:'var(--sage)',fontSize:'0.5rem'}}>●</span> DONNTU OS · НАЖИВО</span>
        <span className="lbl-dim">ROUTE · {route||'OVERVIEW'}</span>
        <span className="lbl-dim">SEL · B-02 · ІНЖЕНЕРНИЙ КОРПУС</span>
      </div>
      <div className="sbar-r">
        <span>ЦИФРОВА СПАДЩИНА · СЕРТИФІКАТИ</span>
        {certCount > 0 && <span style={{color:'var(--amber)'}}>CERTS · {certCount}</span>}
        <span>АРХІВ · 4.8K</span>
        <span className="lbl-dim">LATENCY 42MS</span>
      </div>
    </footer>
  );
};

const Shell = ({ cur, nav, lang, children }) => (
  <div className="shell">
    <TopBar cur={cur} nav={nav} lang={lang} />
    <div className="shell-body">
      <Sidebar cur={cur} nav={nav} />
      <main className="main">{children}</main>
    </div>
    <StatusBar route={cur?.toUpperCase()} />
  </div>
);

const Inst = () => (
  <div className="inst">
    <span className="lbl">ВУЗОЛ</span>
    <span className="lbl-dim">NODE · LUTSK-02</span>
    <span className="lbl-dim">50.7472°N · 25.3254°E</span>
  </div>
);

const Badge = ({ status, label }) => {
  const colors = {
    open:'var(--t2)', completed:'var(--sage)', flagship:'var(--sage)',
    now:'var(--amber)', featured:'var(--amber)', elevated:'var(--rust)',
    locked:'var(--t3)', earned:'var(--amber)', rare:'var(--violet)',
  };
  const c = colors[status] || colors.open;
  return (
    <span className="badge" style={{ borderColor: c+'44' }}>
      <span className="badge-dot" style={{ background: c }}></span>
      {label||status.toUpperCase()}
    </span>
  );
};

const Bar = ({ value, max=100, variant='gold' }) => (
  <div className="bar">
    <div className={`bar-fill ${variant==='cyan'?'bar-c':variant==='green'?'bar-g':''}`}
         style={{ width: Math.min(100, value/max*100) + '%' }}></div>
  </div>
);

const PDots = ({ filled, total=5 }) => (
  <span className="pdots">
    {Array.from({length:total},(_,i) =>
      <span key={i} className={i<filled?'pd-f':'pd-e'}>●</span>
    )}
  </span>
);

const Stat = ({ v, label }) => (
  <div className="stat">
    <div className="stat-v">{v}</div>
    <span className="stat-l">{label}</span>
  </div>
);

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="modal-bg" onClick={onClose}>
      <div className="gc modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
};

Object.assign(window, { PAGES, Shell, Inst, Badge, Bar, PDots, Stat, Modal });
