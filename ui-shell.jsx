/* UI Shell v6 — WUF13 style: fixed navbar, no sidebar, no statusbar */
const PAGES = [
  { id:'overview',     n:'01', ua:'Огляд' },
  { id:'heritage',     n:'02', ua:'Спадщина',     core:true },
  { id:'campus',       n:'03', ua:'Кампус' },
  { id:'building',     n:'04', ua:'Корпус' },
  { id:'labs',         n:'05', ua:'Лабораторії' },
  { id:'achievements', n:'07', ua:'Досягнення',   core:true },
  { id:'archive',      n:'08', ua:'Архів' },
  { id:'certs',        n:'09', ua:'Сертифікати',  core:true },
  { id:'war',          n:'10', ua:'Війна',        core:true },
  { id:'people',       n:'11', ua:'Люди' },
  { id:'future',       n:'12', ua:'Майбутнє',     core:true },
  { id:'library',      n:'13', ua:'Бібліотека' },
  { id:'applicant',    n:'14', ua:'Абітурієнту',  core:true },
  { id:'studentlife',  n:'15', ua:'Студентське життя' },
  { id:'map',          n:'16', ua:'Мапа',         core:true },
  { id:'timecapsule',  n:'17', ua:'Часова капсула' },
  { id:'eras',         n:'18', ua:'Порівняння епох' },
  { id:'voices',       n:'19', ua:'Голоси',        core:true },
  { id:'science',      n:'20', ua:'Наука' },
  { id:'international',n:'21', ua:'Міжнародне' },
  { id:'departments',  n:'22', ua:'Кафедри',       core:true },
  { id:'panneau',      n:'23', ua:'Панно',         core:true },
];

/* WUF13-style top navbar — logo · nav links · CTA */
const TopBar = ({ cur, nav, copyLink, copied }) => {
  const NAV_LINKS = [
    { id:’heritage’,  ua:’Спадщина’ },
    { id:’people’,    ua:’Люди’ },
    { id:’war’,       ua:"Пам’ять" },
    { id:’voices’,    ua:’Голоси’ },
    { id:’archive’,   ua:’Архів’ },
    { id:’panneau’,   ua:’Панно’ },
  ];

  const [logoClicks, setLogoClicks] = React.useState(0);
  const logoClickRef = React.useRef(null);

  const handleLogoClick = () => {
    nav('overview');
    setLogoClicks(n => {
      const next = n + 1;
      clearTimeout(logoClickRef.current);
      if (next >= 5) { nav('admin'); return 0; }
      logoClickRef.current = setTimeout(() => setLogoClicks(0), 3000);
      return next;
    });
  };

  return (
    <header className="wuf-nav">
      {/* Logo */}
      <div className="wuf-nav-logo" onClick={handleLogoClick} title="Клікніть 5 разів для адмін-панелі">
        <div className="wuf-nav-logo-mark">D</div>
        <div className="wuf-nav-logo-text">
          <span className="wuf-nav-brand">DONNTU</span>
          <span className="wuf-nav-sub">ЦИФРОВА СПАДЩИНА</span>
        </div>
      </div>

      {/* Nav links */}
      <nav className="wuf-nav-links">
        {NAV_LINKS.map(l => (
          <button
            key={l.id}
            className={`wuf-nav-link ${cur === l.id ? 'act' : ''}`}
            onClick={() => nav(l.id)}
          >
            {l.ua}
          </button>
        ))}
      </nav>

      {/* CTA */}
      <div className="wuf-nav-cta">
        {/* Anchor copy button */}
        {cur && cur !== 'cert' && copyLink && (
          <button
            onClick={() => copyLink(cur)}
            title={'Скопіювати посилання: #' + cur}
            style={{
              fontFamily:'var(--mono)', fontSize:'0.5rem', letterSpacing:'0.07em',
              background:'none',
              border:'1px solid ' + (copied ? 'var(--sage)' : 'var(--b2)'),
              cursor:'pointer',
              padding:'0.25rem 0.6rem', borderRadius:'2px',
              color: copied ? 'var(--sage)' : 'var(--t3)',
              display:'flex', alignItems:'center', gap:'0.3rem',
              transition:'color 0.2s, border-color 0.2s',
              whiteSpace:'nowrap',
            }}
          >
            <span style={{fontSize:'0.7rem'}}>{copied ? '✓' : '⎘'}</span>
            <span style={{color: copied ? 'var(--sage)' : 'var(--amber)', opacity: copied ? 1 : 0.8}}>#</span>
            <span>{cur}</span>
          </button>
        )}
        <button className="btn btn-g wuf-nav-btn" onClick={() => nav('panneau')}>
          ВІДКРИТИ ПАННО →
        </button>
        <button
          className="wuf-nav-more"
          onClick={() => nav('overview')}
          title="Усі розділи"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

/* Full-width shell — no sidebar, no statusbar */
const Shell = ({ cur, nav, lang, children, copyLink, copied }) => (
  <div className="shell">
    <TopBar cur={cur} nav={nav} lang={lang} copyLink={copyLink} copied={copied} />
    <main className="main">{children}</main>
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

const LazyImg = ({ src, alt, style, className, fallbackText }) => {
  const [status, setStatus] = React.useState('loading');

  React.useEffect(() => {
    if (!src) { setStatus('error'); return; }
    setStatus('loading');
    const img = new window.Image();
    img.onload = () => setStatus('loaded');
    img.onerror = () => setStatus('error');
    img.src = src;
    return () => { img.onload = null; img.onerror = null; };
  }, [src]);

  return (
    <div style={{ position:'relative', overflow:'hidden', background:'var(--s1)', ...style }} className={className}>
      {status === 'loading' && (
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(90deg, var(--s1) 0%, var(--s2) 50%, var(--s1) 100%)',
          backgroundSize:'200% 100%',
          animation:'shimmer 1.4s ease infinite',
        }}/>
      )}
      {status !== 'error' && src && (
        <img src={src} alt={alt||''}
          loading="lazy"
          decoding="async"
          style={{
            width:'100%', height:'100%', objectFit:'cover', display:'block',
            opacity: status === 'loaded' ? 1 : 0,
            transition:'opacity 0.5s ease',
          }}
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
        />
      )}
      {status === 'error' && (
        <div style={{
          position:'absolute', inset:0, display:'flex',
          flexDirection:'column', alignItems:'center', justifyContent:'center',
          gap:'0.5rem',
        }}>
          <span style={{fontSize:'1.25rem', opacity:0.2}}>⊡</span>
          <span style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', letterSpacing:'0.06em'}}>
            {fallbackText || 'ЗОБРАЖЕННЯ НЕДОСТУПНЕ'}
          </span>
          {src && <button onClick={() => setStatus('loading')} style={{
            fontFamily:'var(--mono)', fontSize:'0.5rem', color:'var(--t3)',
            background:'none', border:'1px solid var(--b2)', cursor:'pointer',
            padding:'0.2rem 0.5rem', letterSpacing:'0.06em', marginTop:'0.25rem',
          }}>↺ RETRY</button>}
        </div>
      )}
    </div>
  );
};

Object.assign(window, { PAGES, Shell, Inst, Badge, Bar, PDots, Stat, Modal, LazyImg });
