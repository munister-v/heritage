/* Admin Panel v2 — DonNTU Heritage OS · System Administration · Responsive */

const ADMIN_PIN = '2026';
const STORE_KEY = 'donntu_admin_settings';
const SESSION_KEY = 'donntu_admin_unlocked';
const LOG_KEY = 'donntu_admin_log';
const VISITS_KEY = 'donntu_visits';

const defaultSettings = {
  studentName: 'Ірина',
  studentCourse: '3 курс',
  city: 'ЛУЦЬК',
  buildVersion: 'V · 2026.05',
  announcementEnabled: false,
  announcementText: '',
  announcementType: 'info',
  announcementScheduledOff: '',
  disabledPages: [],
  labStatuses: {},
  simModules: { mine: true, grid: true, cyber: true, city: true },
  maintenanceMode: false,
  theme: 'dark',
  accentColor: 'lime',
  showAdminBadge: true,
  contentOverrides: {},
  mediaOverrides: {},
};

const getSettings = () => {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? { ...defaultSettings, ...JSON.parse(raw) } : { ...defaultSettings };
  } catch { return { ...defaultSettings }; }
};

const saveSettings = (s) => {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(s)); } catch {}
};

const getCerts = () => {
  try {
    return Object.keys(localStorage)
      .filter(k => k.startsWith('donntu_cert_'))
      .map(k => {
        try {
          const d = JSON.parse(localStorage.getItem(k));
          return { id: k.replace('donntu_cert_', ''), ...d };
        } catch { return null; }
      })
      .filter(Boolean)
      .sort((a, b) => (b.issuedAt || 0) - (a.issuedAt || 0));
  } catch { return []; }
};

const addLog = (msg) => {
  try {
    const log = JSON.parse(localStorage.getItem(LOG_KEY) || '[]');
    log.unshift({ msg, ts: Date.now() });
    localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(0, 50)));
  } catch {}
};

const getLog = () => {
  try { return JSON.parse(localStorage.getItem(LOG_KEY) || '[]'); } catch { return []; }
};

/* ── Responsive hook ── */
const useAW = () => {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener('resize', h);
    return () => window.removeEventListener('resize', h);
  }, []);
  return w;
};

/* ────────────────── ATOMS ────────────────── */
const Toggle = ({ on, onChange, label }) => (
  <button onClick={() => onChange(!on)} style={{
    display:'flex', alignItems:'center', gap:'0.625rem',
    background:'none', border:'none', cursor:'pointer', padding:0,
    color: on ? 'var(--lime)' : 'var(--t3)',
    fontFamily:'var(--mono)', fontSize:'0.75rem', letterSpacing:'0.06em',
  }}>
    <span style={{
      width:32, height:18, border:'1px solid', borderColor: on ? 'var(--lime)' : 'var(--b3)',
      display:'flex', alignItems:'center', padding:'0 2px',
      transition:'all .2s',
    }}>
      <span style={{
        width:12, height:12, background: on ? 'var(--lime)' : 'var(--b3)',
        marginLeft: on ? 'auto' : 0, transition:'all .15s',
      }}/>
    </span>
    {label}
  </button>
);

const ARow = ({ label, children, note, isMobile }) => (
  <div style={{
    display:'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: isMobile ? 'flex-start' : 'space-between',
    alignItems: isMobile ? 'flex-start' : 'center',
    gap: isMobile ? '0.5rem' : 0,
    padding:'0.875rem 0', borderBottom:'1px solid var(--b1)',
  }}>
    <div>
      <div style={{fontFamily:'var(--sans)', fontSize:'0.8125rem', color:'var(--t1)'}}>{label}</div>
      {note && <div style={{fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--t3)', marginTop:'0.2rem', letterSpacing:'0.04em'}}>{note}</div>}
    </div>
    <div>{children}</div>
  </div>
);

const AInput = ({ value, onChange, placeholder, mono, isMobile, fullWidth }) => (
  <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
    style={{
      background:'var(--s2)', border:'1px solid var(--b2)',
      color:'var(--t1)', fontFamily: mono ? 'var(--mono)' : 'var(--sans)',
      fontSize:'0.8125rem', padding:'0.4rem 0.625rem',
      outline:'none',
      width: fullWidth || isMobile ? '100%' : 220,
    }}
  />
);

const ABtn = ({ onClick, children, danger, primary, small, icon }) => (
  <button onClick={onClick} style={{
    padding: small ? '0.3rem 0.625rem' : '0.5rem 1rem',
    fontFamily:'var(--mono)', fontSize: small ? '0.625rem' : '0.75rem',
    letterSpacing:'0.06em', cursor:'pointer', border:'1px solid',
    borderColor: danger ? 'var(--rust)' : primary ? 'var(--lime)' : 'var(--b2)',
    color: danger ? 'var(--rust)' : primary ? '#050505' : 'var(--t2)',
    background: primary ? 'var(--lime)' : 'transparent',
    transition:'opacity .15s', display:'inline-flex', alignItems:'center', gap:'0.375rem',
  }}>
    {icon && <span>{icon}</span>}
    {children}
  </button>
);

const ASection = ({ title, children, badge }) => (
  <div style={{ marginBottom:'2rem' }}>
    <div style={{
      display:'flex', alignItems:'center', gap:'0.75rem',
      borderBottom:'1px solid var(--b2)', paddingBottom:'0.625rem', marginBottom:'1rem',
    }}>
      <span style={{ fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--lime)', letterSpacing:'0.1em' }}>▸ {title}</span>
      {badge && <span style={{ fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)' }}>{badge}</span>}
      <div style={{ flex:1, height:'1px', background:'var(--b1)' }}/>
    </div>
    {children}
  </div>
);

const AChip = ({ color, children }) => {
  const bg = color === 'lime' ? 'rgba(205,242,79,.12)' : color === 'rust' ? 'rgba(196,80,57,.12)' : color === 'sage' ? 'rgba(106,159,116,.12)' : 'rgba(212,196,181,.08)';
  const bc = color === 'lime' ? 'var(--lime)' : color === 'rust' ? 'var(--rust)' : color === 'sage' ? 'var(--sage)' : 'var(--amber)';
  return (
    <span style={{
      display:'inline-block', padding:'0.2rem 0.5rem',
      fontFamily:'var(--mono)', fontSize:'0.5rem', letterSpacing:'0.1em',
      background: bg, border:`1px solid ${bc}`, color: bc,
    }}>{children}</span>
  );
};

/* ────────────────── TABS ────────────────── */
const TABS = [
  { id:'dash',      label:'ОГЛЯД',       icon:'◈' },
  { id:'analytics', label:'АНАЛІТИКА',   icon:'↗' },
  { id:'pages',     label:'СТОРІНКИ',    icon:'☰' },
  { id:'content',   label:'КОНТЕНТ',     icon:'✎' },
  { id:'media',     label:'МЕДІА',       icon:'⊡' },
  { id:'profile',   label:'ПРОФІЛЬ',     icon:'◉' },
  { id:'announce',  label:'ОГОЛОШЕННЯ',  icon:'!' },
  { id:'certs',     label:'СЕРТИФІКАТИ', icon:'★' },
  { id:'labs',      label:'ЛАБОРАТОРІЇ', icon:'⚗' },
  { id:'sim',       label:'СИМУЛЯЦІЇ',   icon:'⚙' },
  { id:'system',    label:'СИСТЕМА',     icon:'⌥' },
];

/* ────────────────── DASH TAB ────────────────── */
const DashTab = ({ settings, certs, isMobile }) => {
  const totalPages = 22;
  const disabledCount = settings.disabledPages.length;
  const activePages = totalPages - disabledCount;
  const simOn = Object.values(settings.simModules).filter(Boolean).length;

  const storageUsed = (() => {
    try {
      let total = 0;
      for (let k in localStorage) total += (localStorage[k] || '').length;
      return (total / 1024).toFixed(1) + ' KB';
    } catch { return '—'; }
  })();

  const visits = (() => {
    try { return JSON.parse(localStorage.getItem(VISITS_KEY) || '{}'); } catch { return {}; }
  })();
  const topVisits = Object.entries(visits).sort((a,b) => b[1]-a[1]).slice(0,8);
  const maxVisit = topVisits.length ? topVisits[0][1] : 1;

  const lastLogin = (() => {
    const log = getLog();
    const entry = log.find(l => l.msg === 'Вхід в адмін-панель');
    if (!entry) return '—';
    const diff = Math.floor((Date.now() - entry.ts) / 60000);
    if (diff < 1) return 'щойно';
    if (diff < 60) return diff + ' хв тому';
    return Math.floor(diff/60) + ' год тому';
  })();

  const statCard = (v, label, sub, color) => (
    <div className="gc" style={{padding:'1.25rem', borderLeft:`2px solid ${color}`}}>
      <div style={{fontFamily:'var(--mono)', fontSize:'1.5rem', color, marginBottom:'0.25rem'}}>{v}</div>
      <div style={{fontFamily:'var(--sans)', fontSize:'0.75rem', color:'var(--t1)'}}>{label}</div>
      {sub && <div style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', marginTop:'0.25rem'}}>{sub}</div>}
    </div>
  );

  const handleEnableAll = () => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const s = raw ? JSON.parse(raw) : {};
      s.disabledPages = [];
      localStorage.setItem(STORE_KEY, JSON.stringify(s));
      addLog('Швидка дія: всі сторінки увімкнено');
      alert('Всі сторінки увімкнено. Оновіть сторінку для застосування.');
    } catch {}
  };

  const handleClearAnnounce = () => {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      const s = raw ? JSON.parse(raw) : {};
      s.announcementEnabled = false;
      localStorage.setItem(STORE_KEY, JSON.stringify(s));
      addLog('Швидка дія: оголошення знято');
      alert('Оголошення знято. Оновіть сторінку.');
    } catch {}
  };

  return (
    <div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))', gap:'0.75rem', marginBottom:'2rem'}}>
        {statCard(certs.length, 'Сертифікатів видано', 'За весь час', 'var(--amber)')}
        {statCard(activePages + '/' + totalPages, 'Активних сторінок', disabledCount + ' вимкнено', 'var(--lime)')}
        {statCard(simOn + '/4', 'Симуляцій онлайн', 'Активних модулів', 'var(--slate)')}
        {statCard(storageUsed, 'Локальне сховище', 'localStorage', 'var(--sage)')}
        {statCard(settings.maintenanceMode ? 'ON' : 'OFF', 'Техобслуговування', 'Maintenance mode', settings.maintenanceMode ? 'var(--rust)' : 'var(--b3)')}
        {statCard(lastLogin, 'Останній вхід', 'Адмін-сесія', 'var(--t3)')}
      </div>

      <ASection title="ШВИДКІ ДІЇ">
        <div style={{display:'flex', gap:'0.625rem', flexWrap:'wrap'}}>
          <ABtn icon="◎" onClick={handleEnableAll}>Увімкнути всі сторінки</ABtn>
          <ABtn icon="✕" onClick={handleClearAnnounce}>Зняти оголошення</ABtn>
          <ABtn icon="↺" onClick={() => window.location.reload()}>Refresh stats</ABtn>
        </div>
      </ASection>

      <ASection title="АКТИВНІСТЬ СТОРІНОК" badge="топ-8 за переглядами">
        {topVisits.length === 0 ? (
          <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>Немає даних про відвідування. Переглядайте сторінки для накопичення статистики.</span>
        ) : (
          <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
            {topVisits.map(([page, count]) => {
              const pct = Math.round((count / maxVisit) * 100);
              return (
                <div key={page} style={{display:'flex', alignItems:'center', gap:'0.75rem'}}>
                  <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)', minWidth:100}}>{page}</span>
                  <div style={{flex:1, height:6, background:'var(--b1)'}}>
                    <div style={{height:6, background:'var(--lime)', width: pct+'%', transition:'width .4s'}}/>
                  </div>
                  <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t2)', minWidth:24, textAlign:'right'}}>{count}</span>
                </div>
              );
            })}
          </div>
        )}
      </ASection>

      <ASection title="СТАТУС СИСТЕМИ">
        {[
          { k:'Версія білду', v: settings.buildVersion },
          { k:'Профіль студента', v: settings.studentName + ' · ' + settings.studentCourse },
          { k:'Місто / вузол', v: settings.city },
          { k:'Оголошення', v: settings.announcementEnabled ? '● УВІМКНЕНО: «' + settings.announcementText.slice(0,40) + '»' : '○ вимкнено' },
          { k:'Maintenance mode', v: settings.maintenanceMode ? '⚠ УВІМКНЕНО' : 'Вимкнено' },
        ].map(({ k, v }) => (
          <div key={k} style={{
            display:'flex', flexWrap:'wrap', gap:'0.5rem 2rem', padding:'0.5rem 0',
            borderBottom:'1px solid var(--b1)', fontFamily:'var(--mono)', fontSize:'0.75rem',
          }}>
            <span style={{color:'var(--t3)', minWidth:180}}>{k}</span>
            <span style={{color:'var(--t1)'}}>{v}</span>
          </div>
        ))}
      </ASection>

      <ASection title="ЖУРНАЛ ПОДІЙ" badge="останні 10">
        {getLog().slice(0,10).map((l, i) => (
          <div key={i} style={{
            display:'flex', flexWrap:'wrap', gap:'0.5rem 1rem', padding:'0.375rem 0',
            borderBottom:'1px solid var(--b1)', fontFamily:'var(--mono)', fontSize:'0.6875rem',
          }}>
            <span style={{color:'var(--t3)', minWidth:130}}>{new Date(l.ts).toLocaleTimeString('uk-UA')}</span>
            <span style={{color:'var(--t2)'}}>{l.msg}</span>
          </div>
        ))}
        {getLog().length === 0 && <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>Журнал порожній</span>}
      </ASection>
    </div>
  );
};

/* ────────────────── ANALYTICS TAB ────────────────── */
const AnalyticsTab = ({ settings, isMobile }) => {
  const visits = (() => {
    try { return JSON.parse(localStorage.getItem(VISITS_KEY) || '{}'); } catch { return {}; }
  })();
  const topPages = Object.entries(visits).sort((a,b) => b[1]-a[1]).slice(0,10);
  const maxV = topPages.length ? topPages[0][1] : 1;

  const certs = getCerts();
  const scoreBuckets = { '0–49':0, '50–69':0, '70–84':0, '85–100':0 };
  let totalXP = 0;
  certs.forEach(c => {
    const sc = Number(c.score || 0);
    totalXP += sc;
    if (sc < 50) scoreBuckets['0–49']++;
    else if (sc < 70) scoreBuckets['50–69']++;
    else if (sc < 85) scoreBuckets['70–84']++;
    else scoreBuckets['85–100']++;
  });
  const maxBucket = Math.max(...Object.values(scoreBuckets), 1);

  const labStatuses = settings.labStatuses || {};
  let labOpen = 0, labMaint = 0, labClosed = 0;
  Object.values(labStatuses).forEach(s => {
    if (s === 'open') labOpen++;
    else if (s === 'maintenance') labMaint++;
    else if (s === 'closed') labClosed++;
  });

  const simMods = settings.simModules || {};
  const simOn = Object.values(simMods).filter(Boolean).length;
  const simOff = Object.values(simMods).filter(v => !v).length;

  const storageKeys = (() => {
    try {
      return Object.keys(localStorage)
        .filter(k => k.startsWith('donntu_'))
        .map(k => ({ k, size: ((localStorage[k] || '').length / 1024).toFixed(2) }))
        .sort((a,b) => b.size - a.size);
    } catch { return []; }
  })();
  const maxKB = storageKeys.length ? Number(storageKeys[0].size) : 1;

  const clearVisits = () => {
    localStorage.removeItem(VISITS_KEY);
    addLog('Аналітику відвідувань очищено');
    alert('Дані відвідувань видалено. Оновіть сторінку.');
  };

  const barRow = (label, pct, value, color) => (
    <div style={{display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'0.5rem'}}>
      <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)', minWidth:140}}>{label}</span>
      <div style={{flex:1, height:6, background:'var(--b1)'}}>
        <div style={{height:6, background: color||'var(--lime)', width: pct+'%', transition:'width .4s'}}/>
      </div>
      <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t2)', minWidth:30, textAlign:'right'}}>{value}</span>
    </div>
  );

  return (
    <div>
      <ASection title="ВІДВІДУВАННЯ СТОРІНОК" badge="топ-10">
        {topPages.length === 0
          ? <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>Дані відсутні — переглядайте сторінки</span>
          : topPages.map(([page, count]) => barRow(page, Math.round(count/maxV*100), count, 'var(--lime)'))}
        <div style={{marginTop:'1rem'}}>
          <ABtn danger small onClick={clearVisits}>Очистити аналітику</ABtn>
        </div>
      </ASection>

      <ASection title="РОЗПОДІЛ БАЛІВ СЕРТИФІКАТІВ" badge={certs.length + ' сертифікатів · ' + totalXP + ' XP'}>
        {Object.entries(scoreBuckets).map(([label, count]) =>
          barRow(label, Math.round(count/maxBucket*100), count, 'var(--amber)')
        )}
      </ASection>

      <ASection title="СТАН ЛАБОРАТОРІЙ">
        {barRow('Відкрито', labOpen ? Math.round(labOpen/(labOpen+labMaint+labClosed||1)*100) : 0, labOpen, 'var(--sage)')}
        {barRow('Техогляд', labMaint ? Math.round(labMaint/(labOpen+labMaint+labClosed||1)*100) : 0, labMaint, 'var(--amber)')}
        {barRow('Закрито', labClosed ? Math.round(labClosed/(labOpen+labMaint+labClosed||1)*100) : 0, labClosed, 'var(--rust)')}
      </ASection>

      <ASection title="СИМУЛЯЦІЇ">
        {barRow('Активних', Math.round(simOn/4*100), simOn, 'var(--lime)')}
        {barRow('Вимкнено', Math.round(simOff/4*100), simOff, 'var(--rust)')}
      </ASection>

      <ASection title="СХОВИЩЕ donntu_*" badge="розмір ключів">
        {storageKeys.length === 0
          ? <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>Немає даних</span>
          : storageKeys.map(({ k, size }) => barRow(k, Math.round(Number(size)/maxKB*100), size + ' KB', 'var(--slate)'))}
      </ASection>
    </div>
  );
};

/* ────────────────── PAGES TAB ────────────────── */
const PagesTab = ({ settings, onChange, isMobile }) => {
  const ALL_PAGES = [
    { id:'overview', n:'01', ua:'Огляд' },
    { id:'heritage', n:'02', ua:'Спадщина' },
    { id:'campus', n:'03', ua:'Кампус' },
    { id:'building', n:'04', ua:'Корпус' },
    { id:'labs', n:'05', ua:'Лабораторії' },
    { id:'simulation', n:'06', ua:'Симуляція' },
    { id:'achievements', n:'07', ua:'Досягнення' },
    { id:'archive', n:'08', ua:'Архів' },
    { id:'certs', n:'09', ua:'Сертифікати' },
    { id:'war', n:'10', ua:'Війна' },
    { id:'people', n:'11', ua:'Люди' },
    { id:'future', n:'12', ua:'Майбутнє' },
    { id:'library', n:'13', ua:'Бібліотека' },
    { id:'applicant', n:'14', ua:'Абітурієнту' },
    { id:'studentlife', n:'15', ua:'Студентське життя' },
    { id:'map', n:'16', ua:'Мапа' },
    { id:'timecapsule', n:'17', ua:'Часова капсула' },
    { id:'eras', n:'18', ua:'Порівняння епох' },
    { id:'voices', n:'19', ua:'Голоси' },
    { id:'science', n:'20', ua:'Наука' },
    { id:'international', n:'21', ua:'Міжнародне' },
    { id:'departments', n:'22', ua:'Кафедри' },
  ];
  const disabled = settings.disabledPages || [];
  const toggle = (id) => {
    const next = disabled.includes(id) ? disabled.filter(x => x !== id) : [...disabled, id];
    onChange({ ...settings, disabledPages: next });
    addLog(`Сторінка ${id}: ${disabled.includes(id) ? 'УВІМКНЕНО' : 'ВИМКНЕНО'}`);
  };
  const enableAll = () => { onChange({ ...settings, disabledPages: [] }); addLog('Усі сторінки увімкнено'); };

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem', flexWrap:'wrap', gap:'0.5rem'}}>
        <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>
          {ALL_PAGES.length - disabled.length}/{ALL_PAGES.length} сторінок активно
        </span>
        <ABtn small onClick={enableAll}>УВІМКНУТИ ВСІ</ABtn>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))', gap:'0.5rem'}}>
        {ALL_PAGES.map(p => {
          const isOff = disabled.includes(p.id);
          return (
            <div key={p.id} className="gc" style={{
              padding:'0.75rem 1rem', display:'flex',
              justifyContent:'space-between', alignItems:'center',
              opacity: isOff ? 0.5 : 1,
              borderLeft: !isOff ? '2px solid var(--lime)' : '1px solid var(--b1)',
            }}>
              <div style={{display:'flex', gap:'0.75rem', alignItems:'center'}}>
                <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)'}}>{p.n}</span>
                <span style={{fontFamily:'var(--sans)', fontSize:'0.8125rem', color: isOff ? 'var(--t3)' : 'var(--t1)'}}>{p.ua}</span>
              </div>
              <Toggle on={!isOff} onChange={() => toggle(p.id)} label={isOff ? 'OFF' : 'ON'} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ────────────────── CONTENT TAB ────────────────── */
const ContentTab = ({ settings, onChange, isMobile }) => {
  const [co, setCo] = React.useState(settings.contentOverrides || {});
  const save = () => {
    onChange({ ...settings, contentOverrides: co });
    addLog('Контент-оверрайди збережено');
  };

  const FIELDS = [
    { k:'universityName', label:'Назва університету', placeholder:'ДонНТУ' },
    { k:'founded', label:'Рік заснування', placeholder:'1921' },
    { k:'motto', label:'Девіз', placeholder:'Праця, знання, честь' },
    { k:'currentCity', label:'Поточне місто', placeholder:'Дрогобич' },
    { k:'currentCampus', label:'Кампус', placeholder:'Новий кампус · 2024' },
    { k:'footerNote', label:'Нотатка у футері', placeholder:'Власний текст...' },
  ];

  return (
    <div>
      <ASection title="ТЕКСТОВИЙ КОНТЕНТ" badge="перезавантажте сторінку для застосування">
        {FIELDS.map(({ k, label, placeholder }) => (
          <ARow key={k} label={label} isMobile={isMobile}>
            <AInput
              value={co[k] || ''}
              onChange={v => setCo({ ...co, [k]: v })}
              placeholder={placeholder}
              isMobile={isMobile}
            />
          </ARow>
        ))}
      </ASection>
      <div style={{display:'flex', alignItems:'center', gap:'1rem', flexWrap:'wrap'}}>
        <ABtn primary onClick={save}>ЗБЕРЕГТИ КОНТЕНТ</ABtn>
        <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)'}}>
          Дані застосовуються після перезавантаження сторінки
        </span>
      </div>
    </div>
  );
};

/* ────────────────── MEDIA TAB ────────────────── */
const MEDIA_SLOTS = [
  { k:'HERO_CAMPUS', label:'Campus hero image (overview)' },
  { k:'ARCHIVE_1', label:'Archive photo 1' },
  { k:'ARCHIVE_2', label:'Archive photo 2' },
  { k:'LABS_BANNER', label:'Labs page banner' },
  { k:'WAR_HERO', label:'War page hero' },
  { k:'LIBRARY_HERO', label:'Library hero' },
  { k:'CAMPUS_MAP', label:'Campus aerial view' },
  { k:'BOOT_BG', label:'Boot screen background' },
];

const MediaTab = ({ settings, onChange, isMobile }) => {
  const [mo, setMo] = React.useState(settings.mediaOverrides || {});
  const [drafts, setDrafts] = React.useState({});

  const saveSlot = (k) => {
    const newMo = { ...mo, [k]: drafts[k] !== undefined ? drafts[k] : (mo[k] || '') };
    setMo(newMo);
    onChange({ ...settings, mediaOverrides: newMo });
    addLog(`Медіа-слот ${k} оновлено`);
  };

  return (
    <div>
      <ASection title="МЕДІА-СЛОТИ" badge="8 слотів">
        <div style={{display:'flex', flexDirection:'column', gap:'1.5rem'}}>
          {MEDIA_SLOTS.map(({ k, label }) => {
            const curUrl = mo[k] || '';
            const draftVal = drafts[k] !== undefined ? drafts[k] : curUrl;
            return (
              <div key={k} className="gc" style={{padding:'1rem'}}>
                <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', alignItems:'flex-start'}}>
                  {curUrl && (
                    <div style={{flexShrink:0}}>
                      <LazyImg src={curUrl} alt={label} style={{width:200, height:120}} />
                    </div>
                  )}
                  <div style={{flex:1, minWidth:200}}>
                    <div style={{fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--lime)', letterSpacing:'0.08em', marginBottom:'0.375rem'}}>{k}</div>
                    <div style={{fontFamily:'var(--sans)', fontSize:'0.8125rem', color:'var(--t2)', marginBottom:'0.625rem'}}>{label}</div>
                    <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap', alignItems:'center'}}>
                      <input
                        value={draftVal}
                        onChange={e => setDrafts({ ...drafts, [k]: e.target.value })}
                        placeholder="https://..."
                        style={{
                          background:'var(--s2)', border:'1px solid var(--b2)',
                          color:'var(--t1)', fontFamily:'var(--mono)', fontSize:'0.75rem',
                          padding:'0.4rem 0.625rem', outline:'none',
                          width: isMobile ? '100%' : 300,
                        }}
                      />
                      <ABtn small primary onClick={() => saveSlot(k)}>Зберегти</ABtn>
                    </div>
                    <div style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', marginTop:'0.375rem'}}>
                      Використовуйте Unsplash URL для тестових зображень
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ASection>
    </div>
  );
};

/* ────────────────── PROFILE TAB ────────────────── */
const ProfileTab = ({ settings, onChange, isMobile }) => {
  const [s, setS] = React.useState(settings);
  const save = () => { onChange(s); addLog('Профіль оновлено'); };

  const ACCENTS = [
    { v:'lime', color:'var(--lime)', label:'LIME' },
    { v:'amber', color:'var(--amber)', label:'AMBER' },
    { v:'slate', color:'var(--slate)', label:'SLATE' },
  ];

  return (
    <div>
      <ASection title="ПРОФІЛЬ ПОТОЧНОГО КОРИСТУВАЧА" badge="відображається у topbar">
        <ARow label="Ім'я студента" note="Відображається у правому куті топбару" isMobile={isMobile}>
          <AInput value={s.studentName} onChange={v => setS({...s, studentName:v})} placeholder="Ім'я" isMobile={isMobile} />
        </ARow>
        <ARow label="Курс / статус" note="Відображається поряд з ім'ям" isMobile={isMobile}>
          <AInput value={s.studentCourse} onChange={v => setS({...s, studentCourse:v})} placeholder="3 курс" isMobile={isMobile} />
        </ARow>
        <ARow label="Місто / вузол" note="Відображається у годиннику" isMobile={isMobile}>
          <AInput value={s.city} onChange={v => setS({...s, city:v.toUpperCase()})} placeholder="ЛУЦЬК" isMobile={isMobile} />
        </ARow>
      </ASection>
      <ASection title="СИСТЕМНА ІДЕНТИФІКАЦІЯ">
        <ARow label="Версія білду" note="Відображається у topbar-brand" isMobile={isMobile}>
          <AInput value={s.buildVersion} onChange={v => setS({...s, buildVersion:v})} mono isMobile={isMobile} />
        </ARow>
        <ARow label="Показувати ADMIN у сайдбарі" note="Значок ⟡ ADMIN внизу навігації" isMobile={isMobile}>
          <Toggle on={!!s.showAdminBadge} onChange={v => setS({...s, showAdminBadge:v})} label={s.showAdminBadge ? 'ВИДИМИЙ' : 'СХОВАНИЙ'} />
        </ARow>
      </ASection>
      <ASection title="АКЦЕНТНИЙ КОЛІР">
        <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', alignItems:'center'}}>
          {ACCENTS.map(a => (
            <button key={a.v} onClick={() => setS({...s, accentColor: a.v})} style={{
              width:40, height:40, background: a.color,
              border: s.accentColor === a.v ? '2px solid var(--t1)' : '2px solid transparent',
              cursor:'pointer', position:'relative',
            }} title={a.label}>
              {s.accentColor === a.v && (
                <span style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--mono)', fontSize:'0.5rem', color:'#050505', fontWeight:700}}>✓</span>
              )}
            </button>
          ))}
          <span style={{fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--t3)'}}>
            {(ACCENTS.find(a => a.v === s.accentColor)||ACCENTS[0]).label}
          </span>
        </div>
      </ASection>
      <div style={{marginTop:'1.5rem'}}>
        <ABtn primary onClick={save}>ЗБЕРЕГТИ ЗМІНИ</ABtn>
        <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)', marginLeft:'1rem'}}>Зміни застосуються після перезавантаження сторінки</span>
      </div>
    </div>
  );
};

/* ────────────────── ANNOUNCE TAB ────────────────── */
const AnnounceTab = ({ settings, onChange, isMobile }) => {
  const [s, setS] = React.useState(() => {
    // Check if scheduledOff is in the past → disable
    const copy = { ...settings };
    if (copy.announcementScheduledOff) {
      const t = new Date(copy.announcementScheduledOff).getTime();
      if (!isNaN(t) && t < Date.now()) {
        copy.announcementEnabled = false;
      }
    }
    return copy;
  });

  const save = () => {
    onChange(s);
    addLog('Оголошення оновлено: ' + (s.announcementEnabled ? s.announcementText.slice(0,40) : 'вимкнено'));
  };

  const bannerBg = {
    alert: 'rgba(196,80,57,.12)', warn: 'rgba(212,140,0,.1)',
    good: 'rgba(205,242,79,.08)', info: 'rgba(212,196,181,.08)',
  };
  const bannerBc = {
    alert: 'var(--rust)', warn: '#d48c00', good: 'var(--lime)', info: 'var(--amber)',
  };

  return (
    <div>
      <ASection title="АКТИВНЕ ОГОЛОШЕННЯ" badge="відображається в статус-барі та на overview">
        <ARow label="Увімкнути оголошення" note="Показати банер на всіх сторінках" isMobile={isMobile}>
          <Toggle on={s.announcementEnabled} onChange={v => setS({...s, announcementEnabled:v})} label={s.announcementEnabled ? 'УВІМКНЕНО' : 'ВИМКНЕНО'} />
        </ARow>
        <ARow label="Тип оголошення" note="Визначає колір банера" isMobile={isMobile}>
          <select value={s.announcementType} onChange={e => setS({...s, announcementType:e.target.value})}
            style={{background:'var(--s2)', border:'1px solid var(--b2)', color:'var(--t1)', fontFamily:'var(--mono)', fontSize:'0.75rem', padding:'0.375rem 0.625rem'}}>
            <option value="info">INFO — Нейтральний (amber)</option>
            <option value="warn">WARN — Попередження (orange)</option>
            <option value="alert">ALERT — Критичне (red)</option>
            <option value="good">GOOD — Позитивне (lime)</option>
          </select>
        </ARow>
        <ARow label="Текст оголошення" note="До 120 символів" isMobile={isMobile}>
          <div>
            <textarea value={s.announcementText} onChange={e => setS({...s, announcementText:e.target.value.slice(0,120)})}
              rows={3} placeholder="Текст оголошення..."
              style={{
                background:'var(--s2)', border:'1px solid var(--b2)', color:'var(--t1)',
                fontFamily:'var(--sans)', fontSize:'0.8125rem', padding:'0.5rem 0.625rem',
                resize:'vertical', width: isMobile ? '100%' : 320, outline:'none', display:'block',
              }}
            />
            <div style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', marginTop:'0.25rem'}}>{s.announcementText.length}/120</div>
          </div>
        </ARow>
        <ARow label="Авто-вимкнення" note="Вимкнути оголошення після вказаного часу" isMobile={isMobile}>
          <input type="datetime-local" value={s.announcementScheduledOff || ''} onChange={e => setS({...s, announcementScheduledOff: e.target.value})}
            style={{background:'var(--s2)', border:'1px solid var(--b2)', color:'var(--t1)', fontFamily:'var(--mono)', fontSize:'0.75rem', padding:'0.375rem 0.625rem', outline:'none'}}
          />
        </ARow>
      </ASection>

      {s.announcementEnabled && s.announcementText && (
        <div style={{marginBottom:'1.5rem'}}>
          <div style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', letterSpacing:'0.1em', marginBottom:'0.5rem'}}>ПОПЕРЕДНІЙ ПЕРЕГЛЯД</div>
          <div style={{
            padding:'0.75rem 1rem',
            background: bannerBg[s.announcementType] || bannerBg.info,
            border:'1px solid',
            borderColor: bannerBc[s.announcementType] || bannerBc.info,
            display:'flex', gap:'1rem', alignItems:'center',
          }}>
            <span style={{
              fontFamily:'var(--mono)', fontSize:'0.5625rem', letterSpacing:'0.1em',
              color: bannerBc[s.announcementType] || bannerBc.info, flexShrink:0,
            }}>{s.announcementType.toUpperCase()}</span>
            <span style={{fontFamily:'var(--sans)', fontSize:'0.8125rem', color:'var(--t1)'}}>{s.announcementText}</span>
          </div>
        </div>
      )}

      <ABtn primary onClick={save}>ЗБЕРЕГТИ ОГОЛОШЕННЯ</ABtn>
    </div>
  );
};

/* ────────────────── CERTS TAB ────────────────── */
const CertsTab = ({ isMobile }) => {
  const [certs, setCerts] = React.useState(getCerts);
  const [confirm, setConfirm] = React.useState(null);
  const [search, setSearch] = React.useState('');
  const [sortBy, setSortBy] = React.useState('date');

  const deleteCert = (id) => {
    localStorage.removeItem('donntu_cert_' + id);
    addLog('Сертифікат видалено: ' + id);
    setCerts(getCerts());
    setConfirm(null);
  };
  const clearAll = () => {
    certs.forEach(c => localStorage.removeItem('donntu_cert_' + c.id));
    addLog('Всі сертифікати видалено (' + certs.length + ')');
    setCerts([]);
    setConfirm(null);
  };

  const totalXP = certs.reduce((s,c) => s + Number(c.score||0), 0);

  const filtered = certs
    .filter(c => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (c.name||'').toLowerCase().includes(q) || (c.subject||'').toLowerCase().includes(q) || (c.student||'').toLowerCase().includes(q);
    })
    .sort((a,b) => {
      if (sortBy === 'score') return (b.score||0) - (a.score||0);
      return (b.issuedAt||0) - (a.issuedAt||0);
    });

  const scoreColor = (sc) => {
    const n = Number(sc||0);
    if (n >= 85) return 'var(--lime)';
    if (n >= 70) return 'var(--sage)';
    if (n >= 50) return 'var(--amber)';
    return 'var(--rust)';
  };

  return (
    <div>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem', gap:'0.75rem'}}>
        <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', alignItems:'center'}}>
          <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>
            {certs.length} сертифікатів · {totalXP} XP загалом
          </span>
          <AChip color="lime">{filtered.length} показано</AChip>
        </div>
        <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap', alignItems:'center'}}>
          <ABtn small onClick={() => setSortBy('date')} primary={sortBy==='date'}>ЗА ДАТОЮ</ABtn>
          <ABtn small onClick={() => setSortBy('score')} primary={sortBy==='score'}>ЗА БАЛОМ</ABtn>
          {certs.length > 0 && (
            confirm === 'all'
              ? <div style={{display:'flex', gap:'0.375rem'}}>
                  <ABtn danger small onClick={clearAll}>ПІДТВЕРДИТИ</ABtn>
                  <ABtn small onClick={() => setConfirm(null)}>НІ</ABtn>
                </div>
              : <ABtn danger small onClick={() => setConfirm('all')}>ВИДАЛИТИ ВСІ</ABtn>
          )}
        </div>
      </div>

      <div style={{marginBottom:'1rem'}}>
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Пошук за іменем або предметом..."
          style={{
            background:'var(--s2)', border:'1px solid var(--b2)', color:'var(--t1)',
            fontFamily:'var(--sans)', fontSize:'0.8125rem', padding:'0.5rem 0.75rem',
            outline:'none', width: isMobile ? '100%' : 320,
          }}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="gc" style={{padding:'2rem', textAlign:'center'}}>
          <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>{certs.length ? 'Нічого не знайдено' : 'Сертифікатів ще не видано'}</span>
        </div>
      ) : (
        <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
          {filtered.map(c => (
            <div key={c.id} className="gc" style={{padding:'1rem', display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'1rem', flexWrap:'wrap'}}>
              <div style={{flex:1, minWidth:200}}>
                <div style={{fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--lime)', marginBottom:'0.25rem', letterSpacing:'0.06em'}}>CERT · {c.id}</div>
                <div style={{fontFamily:'var(--sans)', fontSize:'0.875rem', color:'var(--t1)', marginBottom:'0.375rem'}}>{c.subject || c.module || 'Без назви'}</div>
                <div style={{display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'0.5rem'}}>
                  <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)'}}>Студент: {c.name || c.student || '—'}</span>
                  <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color: scoreColor(c.score)}}>Бал: {c.score || '—'}</span>
                  <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)'}}>
                    {c.issuedAt ? new Date(c.issuedAt).toLocaleDateString('uk-UA') : (c.date || '—')}
                  </span>
                </div>
                {c.score && (
                  <div style={{height:4, background:'var(--b1)', width:'100%', maxWidth:240}}>
                    <div style={{height:4, background: scoreColor(c.score), width: Math.min(100,Number(c.score))+'%', transition:'width .4s'}}/>
                  </div>
                )}
              </div>
              {confirm === c.id
                ? <div style={{display:'flex', gap:'0.375rem'}}>
                    <ABtn danger small onClick={() => deleteCert(c.id)}>ТАК</ABtn>
                    <ABtn small onClick={() => setConfirm(null)}>НІ</ABtn>
                  </div>
                : <ABtn danger small onClick={() => setConfirm(c.id)}>✕</ABtn>
              }
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ────────────────── LABS TAB ────────────────── */
const LabsTab = ({ settings, onChange, isMobile }) => {
  const LABS = [
    'Л-001 · Геомеханіка', 'Л-002 · Вибухова справа', 'Л-003 · Кібербезпека АСУ ТП',
    'Л-004 · Збагачення руд', 'Л-005 · Електропривод', 'Л-006 · Автоматизація',
    'Л-007 · Гідравліка', 'Л-008 · Зварювання', 'Л-009 · Матеріалознавство',
    'Л-010 · Відновлювальна енергетика', 'Л-011 · Екологія', 'Л-012 · Робототехніка',
    'Л-013 · Хімічна технологія', 'Л-014 · Мережі та системи',
  ];
  const statuses = settings.labStatuses || {};

  const setStatus = (id, status) => {
    const next = { ...statuses, [id]: status };
    onChange({ ...settings, labStatuses: next });
    addLog(`Лабораторія ${id}: статус → ${status}`);
  };

  const setAll = (status) => {
    const next = {};
    LABS.forEach(lab => { next[lab] = status; });
    onChange({ ...settings, labStatuses: next });
    addLog(`Всі лабораторії → ${status}`);
  };

  const STATUS_OPTS = [
    { v:'open', label:'ВІДКРИТА', color:'var(--sage)' },
    { v:'maintenance', label:'ТЕХОГЛЯД', color:'var(--amber)' },
    { v:'closed', label:'ЗАКРИТА', color:'var(--rust)' },
  ];

  const openCount = LABS.filter(l => (statuses[l]||'open') === 'open').length;
  const maintCount = LABS.filter(l => (statuses[l]||'open') === 'maintenance').length;
  const closedCount = LABS.filter(l => (statuses[l]||'open') === 'closed').length;

  return (
    <div>
      <div style={{display:'flex', gap:'0.75rem', flexWrap:'wrap', alignItems:'center', marginBottom:'1rem'}}>
        <AChip color="sage">{openCount} відкрито</AChip>
        <AChip color="amber">{maintCount} техогляд</AChip>
        <AChip color="rust">{closedCount} закрито</AChip>
        <div style={{marginLeft:'auto', display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
          <ABtn small onClick={() => setAll('open')}>Всі відкриті</ABtn>
          <ABtn small onClick={() => setAll('maintenance')}>Всі на техогляді</ABtn>
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'column', gap:'0.375rem'}}>
        {LABS.map(lab => {
          const cur = statuses[lab] || 'open';
          return (
            <div key={lab} className="gc" style={{
              padding:'0.75rem 1rem', display:'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent:'space-between', alignItems: isMobile ? 'flex-start' : 'center',
              gap: isMobile ? '0.5rem' : 0,
            }}>
              <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t2)'}}>{lab}</span>
              <div style={{display:'flex', gap:'0.375rem', flexWrap:'wrap'}}>
                {STATUS_OPTS.map(opt => (
                  <button key={opt.v} onClick={() => setStatus(lab, opt.v)} style={{
                    padding:'0.3rem 0.625rem', fontFamily:'var(--mono)', fontSize:'0.5625rem',
                    letterSpacing:'0.06em', cursor:'pointer', border:'1px solid',
                    borderColor: cur === opt.v ? opt.color : 'var(--b2)',
                    color: cur === opt.v ? opt.color : 'var(--t3)',
                    background: cur === opt.v ? opt.color + '18' : 'transparent',
                  }}>{opt.label}</button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ────────────────── SIM TAB ────────────────── */
const SimTab = ({ settings, onChange, isMobile }) => {
  const mods = settings.simModules || { mine:true, grid:true, cyber:true, city:true };
  const toggle = (k) => {
    const next = { ...mods, [k]: !mods[k] };
    onChange({ ...settings, simModules: next });
    addLog(`Симуляція ${k}: ${!mods[k] ? 'УВІМКНЕНО' : 'ВИМКНЕНО'}`);
  };
  const MODULES = [
    { k:'mine', title:'⛏ Безпека шахти', desc:'Симуляція рівня CH₄, вентиляція, запечатування виробок. 300с таймер.' },
    { k:'grid', title:'⚡ Енергомережа', desc:'6 підстанцій, каскадні відключення, ручне керування автоматами. 240с.' },
    { k:'cyber', title:'🛡 Кібератака', desc:'5 SCADA-вузлів, розповсюдження інфекції, ізоляція та відновлення.' },
    { k:'city', title:'🏗 Відновлення міста', desc:'12 будівель Маріуполя, бюджет 100 одиниць, тріаж та пріоритети.' },
  ];
  return (
    <div>
      <p style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)', marginBottom:'1.25rem'}}>
        Вимкнені модулі приховуються з вкладки симуляції. Мінімум 1 модуль має бути активним.
      </p>
      <div style={{display:'flex', flexDirection:'column', gap:'0.625rem'}}>
        {MODULES.map(m => (
          <div key={m.k} className="gc" style={{
            padding:'1.25rem', display:'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent:'space-between', alignItems: isMobile ? 'flex-start' : 'flex-start',
            gap:'0.75rem',
            borderLeft: mods[m.k] ? '2px solid var(--lime)' : '1px solid var(--b1)',
            opacity: mods[m.k] ? 1 : 0.55,
          }}>
            <div>
              <div style={{fontFamily:'var(--sans)', fontSize:'0.875rem', color:'var(--t1)', marginBottom:'0.375rem'}}>{m.title}</div>
              <div style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)'}}>{m.desc}</div>
            </div>
            <Toggle on={!!mods[m.k]} onChange={() => toggle(m.k)} label={mods[m.k] ? 'АКТИВНИЙ' : 'ВИМКНЕНО'} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* ────────────────── SYSTEM TAB ────────────────── */
const SystemTab = ({ settings, onChange, isMobile }) => {
  const [confirm, setConfirm] = React.useState(null);

  const resetAll = () => {
    const keysToKeep = [];
    for (let k in localStorage) {
      if (!k.startsWith('donntu_')) keysToKeep.push([k, localStorage[k]]);
    }
    localStorage.clear();
    keysToKeep.forEach(([k, v]) => localStorage.setItem(k, v));
    sessionStorage.removeItem(SESSION_KEY);
    addLog('SYSTEM RESET — всі дані очищено');
    onChange({ ...defaultSettings });
    setConfirm(null);
    alert('Систему скинуто. Перезавантажте сторінку.');
  };

  const clearCerts = () => {
    Object.keys(localStorage).filter(k => k.startsWith('donntu_cert_')).forEach(k => localStorage.removeItem(k));
    addLog('Всі сертифікати видалено');
    setConfirm(null);
  };

  const exportData = () => {
    const data = {};
    for (let k in localStorage) {
      if (k.startsWith('donntu_')) data[k] = localStorage[k];
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type:'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'donntu-export-' + Date.now() + '.json'; a.click();
    URL.revokeObjectURL(url);
    addLog('Дані експортовано');
  };

  const copyToClipboard = () => {
    const data = {};
    for (let k in localStorage) {
      if (k.startsWith('donntu_')) data[k] = localStorage[k];
    }
    try {
      navigator.clipboard.writeText(JSON.stringify(data, null, 2));
      addLog('Дані скопійовано в буфер');
      alert('Скопійовано в буфер обміну');
    } catch { alert('Не вдалось скопіювати'); }
  };

  const importJSON = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target.result);
          Object.entries(data).forEach(([k, v]) => {
            if (k.startsWith('donntu_')) localStorage.setItem(k, v);
          });
          addLog('JSON імпортовано: ' + Object.keys(data).length + ' ключів');
          alert('Імпортовано ' + Object.keys(data).length + ' ключів. Перезавантажте сторінку.');
        } catch { alert('Помилка читання JSON файлу'); }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const clearLog = () => { localStorage.removeItem(LOG_KEY); addLog('Журнал очищено'); setConfirm(null); };

  const storageInfo = (() => {
    try {
      const keys = Object.keys(localStorage).filter(k => k.startsWith('donntu_'));
      let size = 0;
      keys.forEach(k => size += (localStorage[k] || '').length);
      return { keys: keys.length, size: (size / 1024).toFixed(2) };
    } catch { return { keys: 0, size: 0 }; }
  })();

  const quotaInfo = (() => {
    try {
      let total = 0;
      for (let k in localStorage) total += (localStorage[k]||'').length;
      const estMax = 5120;
      return { used: (total/1024).toFixed(1), pct: Math.round(total/1024/estMax*100) };
    } catch { return { used: '?', pct: 0 }; }
  })();

  return (
    <div>
      <ASection title="ІНФОРМАЦІЯ ПРО СИСТЕМУ">
        {[
          { k:'User agent', v: navigator.userAgent.slice(0,60) + '...' },
          { k:'Ключів donntu_* в localStorage', v: storageInfo.keys + ' ключів · ' + storageInfo.size + ' KB' },
          { k:'Версія React', v: React.version },
          { k:'Build', v: settings.buildVersion },
          { k:'Адмін PIN', v: '••••' },
        ].map(({ k, v }) => (
          <div key={k} style={{
            display:'flex', flexWrap:'wrap', gap:'0.5rem 2rem', padding:'0.5rem 0',
            borderBottom:'1px solid var(--b1)', fontFamily:'var(--mono)', fontSize:'0.6875rem',
          }}>
            <span style={{color:'var(--t3)', minWidth:240}}>{k}</span>
            <span style={{color:'var(--t2)', wordBreak:'break-all'}}>{v}</span>
          </div>
        ))}
        <div style={{marginTop:'1rem'}}>
          <div style={{fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--t3)', marginBottom:'0.375rem'}}>
            LOCALSTORAGE QUOTA · {quotaInfo.used} KB / ~5120 KB використано ({quotaInfo.pct}%)
          </div>
          <div style={{height:6, background:'var(--b1)', maxWidth:320}}>
            <div style={{height:6, background:'var(--lime)', width: quotaInfo.pct+'%', transition:'width .4s'}}/>
          </div>
        </div>
      </ASection>

      <ASection title="ТЕХНІЧНЕ ОБСЛУГОВУВАННЯ">
        <ARow label="Maintenance mode" note="Показує технічну заставку всім користувачам" isMobile={isMobile}>
          <Toggle on={settings.maintenanceMode}
            onChange={v => { onChange({...settings, maintenanceMode:v}); addLog('Maintenance mode: ' + (v?'ON':'OFF')); }}
            label={settings.maintenanceMode ? '⚠ УВІМКНЕНО' : 'ВИМКНЕНО'} />
        </ARow>
      </ASection>

      <ASection title="ОПЕРАЦІЇ З ДАНИМИ">
        <div style={{display:'flex', flexDirection:'column', gap:'0.875rem'}}>
          <ARow label="Експорт даних" note="Завантажити всі donntu_* ключі як JSON" isMobile={isMobile}>
            <div style={{display:'flex', gap:'0.5rem', flexWrap:'wrap'}}>
              <ABtn onClick={exportData} icon="⬇">ЕКСПОРТУВАТИ JSON</ABtn>
              <ABtn onClick={copyToClipboard} icon="⎘">КОПІЮВАТИ В БУФЕР</ABtn>
            </div>
          </ARow>
          <ARow label="Імпорт JSON" note="Відновити donntu_* ключі з файлу" isMobile={isMobile}>
            <ABtn onClick={importJSON} icon="⬆">ІМПОРТ JSON</ABtn>
          </ARow>
          <ARow label="Очистити журнал" note="Видалити всі записи адмін-журналу" isMobile={isMobile}>
            {confirm === 'log'
              ? <div style={{display:'flex', gap:'0.5rem'}}>
                  <ABtn danger small onClick={clearLog}>ПІДТВЕРДИТИ</ABtn>
                  <ABtn small onClick={() => setConfirm(null)}>НІ</ABtn>
                </div>
              : <ABtn danger small onClick={() => setConfirm('log')}>ОЧИСТИТИ ЖУРНАЛ</ABtn>
            }
          </ARow>
          <ARow label="Очистити всі сертифікати" note="Незворотна операція — видалити всі видані сертифікати" isMobile={isMobile}>
            {confirm === 'certs'
              ? <div style={{display:'flex', gap:'0.5rem'}}>
                  <ABtn danger small onClick={clearCerts}>ПІДТВЕРДИТИ</ABtn>
                  <ABtn small onClick={() => setConfirm(null)}>НІ</ABtn>
                </div>
              : <ABtn danger onClick={() => setConfirm('certs')}>⚠ ВИДАЛИТИ ВСІ СЕРТИФІКАТИ</ABtn>
            }
          </ARow>
          <ARow label="Скинути систему" note="Очищає всі donntu_* ключі та скидає налаштування до дефолту" isMobile={isMobile}>
            {confirm === 'reset'
              ? <div style={{display:'flex', gap:'0.5rem', alignItems:'center', flexWrap:'wrap'}}>
                  <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--rust)'}}>Незворотно!</span>
                  <ABtn danger onClick={resetAll}>СКИНУТИ ВСЕ</ABtn>
                  <ABtn small onClick={() => setConfirm(null)}>СКАСУВАТИ</ABtn>
                </div>
              : <ABtn danger onClick={() => setConfirm('reset')}>⚠ FACTORY RESET</ABtn>
            }
          </ARow>
        </div>
      </ASection>
    </div>
  );
};

/* ────────────────── MAIN ADMIN PAGE ────────────────── */
const AdminPage = ({ onNavigate }) => {
  const w = useAW();
  const isMobile = w <= 640;

  const [unlocked, setUnlocked] = React.useState(() => sessionStorage.getItem(SESSION_KEY) === '1');
  const [pin, setPin] = React.useState('');
  const [pinError, setPinError] = React.useState(false);
  const [shake, setShake] = React.useState(false);
  const [tab, setTab] = React.useState('dash');
  const [settings, setSettings] = React.useState(getSettings);
  const certs = getCerts();

  const tryUnlock = React.useCallback(() => {
    if (pin === ADMIN_PIN) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setUnlocked(true);
      setPin('');
      setPinError(false);
      addLog('Вхід в адмін-панель');
    } else {
      setPinError(true);
      setShake(true);
      setPin('');
      setTimeout(() => { setPinError(false); setShake(false); }, 1500);
    }
  }, [pin]);

  // Keyboard input for login
  React.useEffect(() => {
    if (unlocked) return;
    const h = (e) => {
      if ('0123456789'.includes(e.key) && pin.length < 4) setPin(p => p + e.key);
      if (e.key === 'Backspace') setPin(p => p.slice(0, -1));
      if (e.key === 'Enter') tryUnlock();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [pin, unlocked, tryUnlock]);

  const lock = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setUnlocked(false);
    addLog('Вихід з адмін-панелі');
  };

  const handleChange = (next) => {
    setSettings(next);
    saveSettings(next);
  };

  /* ── LOGIN SCREEN ── */
  if (!unlocked) return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'center',
      minHeight:'80vh', flexDirection:'column', gap:'2rem',
    }}>
      <div style={{textAlign:'center', marginBottom:'0.5rem'}}>
        <div style={{fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--lime)', letterSpacing:'0.15em', marginBottom:'1rem'}}>
          ⟡ DONNTU OS · ADMIN ACCESS ⟡
        </div>
        <h2 style={{fontFamily:'var(--serif)', fontSize:'2rem', color:'var(--t1)', fontWeight:400, marginBottom:'0.5rem'}}>
          Адміністрування
        </h2>
        <p style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>
          Введіть PIN-код для доступу · або використайте клавіатуру
        </p>
      </div>

      <div className="gc" style={{
        padding:'2.5rem',
        width: isMobile ? '100%' : 320,
        maxWidth: 340,
        textAlign:'center',
        animation: shake ? 'pinShake 0.4s ease' : 'none',
      }}>
        <style>{`@keyframes pinShake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-8px)}40%,80%{transform:translateX(8px)}}`}</style>
        <div style={{
          fontFamily:'var(--mono)', fontSize:'2rem', letterSpacing:'0.5em',
          color: pinError ? 'var(--rust)' : 'var(--t1)',
          textAlign:'center', marginBottom:'1.5rem',
          transition:'color .2s', minHeight:'3rem',
        }}>
          {pin ? '●'.repeat(pin.length).padEnd(4, '·') : '· · · ·'}
        </div>

        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'0.5rem', marginBottom:'0.625rem'}}>
          {[1,2,3,4,5,6,7,8,9].map(n => (
            <button key={n} onClick={() => pin.length < 4 && setPin(p => p + n)} style={{
              padding:'1rem', fontFamily:'var(--mono)', fontSize:'1.125rem', cursor:'pointer',
              border:'1px solid var(--b2)', background:'var(--s1)', color:'var(--t1)',
              transition:'background .1s',
            }}>
              {n}
            </button>
          ))}
          <button onClick={() => setPin(p => p.slice(0,-1))} style={{
            padding:'1rem', fontFamily:'var(--mono)', fontSize:'0.875rem', cursor:'pointer',
            border:'1px solid var(--b2)', background:'var(--s1)', color:'var(--t3)',
          }}>⌫</button>
          <button onClick={() => pin.length < 4 && setPin(p => p + '0')} style={{
            padding:'1rem', fontFamily:'var(--mono)', fontSize:'1.125rem', cursor:'pointer',
            border:'1px solid var(--b2)', background:'var(--s1)', color:'var(--t1)',
          }}>0</button>
          <button onClick={tryUnlock} style={{
            padding:'1rem', fontFamily:'var(--mono)', fontSize:'0.875rem', cursor:'pointer',
            border:'1px solid var(--lime)', background:'var(--lime)', color:'#050505',
          }}>▶</button>
        </div>

        {pinError && (
          <div style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--rust)', marginTop:'0.5rem'}}>
            Невірний PIN
          </div>
        )}

        <div style={{marginTop:'1.5rem', borderTop:'1px solid var(--b1)', paddingTop:'1rem'}}>
          <button onClick={() => onNavigate('overview')} style={{
            fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--t3)',
            background:'none', border:'none', cursor:'pointer', letterSpacing:'0.06em',
          }}>← ПОВЕРНУТИСЬ ДО СИСТЕМИ</button>
        </div>
      </div>
    </div>
  );

  /* ── ADMIN PANEL ── */
  const tabMap = {
    dash:      <DashTab settings={settings} certs={certs} isMobile={isMobile} />,
    analytics: <AnalyticsTab settings={settings} isMobile={isMobile} />,
    pages:     <PagesTab settings={settings} onChange={handleChange} isMobile={isMobile} />,
    content:   <ContentTab settings={settings} onChange={handleChange} isMobile={isMobile} />,
    media:     <MediaTab settings={settings} onChange={handleChange} isMobile={isMobile} />,
    profile:   <ProfileTab settings={settings} onChange={handleChange} isMobile={isMobile} />,
    announce:  <AnnounceTab settings={settings} onChange={handleChange} isMobile={isMobile} />,
    certs:     <CertsTab isMobile={isMobile} />,
    labs:      <LabsTab settings={settings} onChange={handleChange} isMobile={isMobile} />,
    sim:       <SimTab settings={settings} onChange={handleChange} isMobile={isMobile} />,
    system:    <SystemTab settings={settings} onChange={handleChange} isMobile={isMobile} />,
  };

  return (
    <div className="page">
      {/* HEADER */}
      <div style={{
        display:'flex', justifyContent:'space-between', alignItems:'flex-start',
        marginBottom:'2rem', flexWrap:'wrap', gap:'1rem',
      }}>
        <div>
          <span className="lbl" style={{color:'var(--lime)'}}>⟡ ADMIN · SYSTEM PANEL</span>
          <h1 className="h1" style={{marginTop:'0.5rem', fontSize:'1.875rem'}}>
            Адміністрування <em>DonNTU OS</em>
          </h1>
          <p className="body" style={{marginTop:'0.5rem', fontSize:'0.875rem', color:'var(--t3)'}}>
            Управління системою, сторінками, сертифікатами та контентом
          </p>
        </div>
        <div style={{display:'flex', gap:'0.625rem', alignItems:'center', flexWrap:'wrap'}}>
          <div style={{
            padding:'0.375rem 0.75rem', border:'1px solid var(--lime)',
            fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--lime)', letterSpacing:'0.1em',
          }}>
            ● СЕСІЯ АКТИВНА
          </div>
          <ABtn danger small onClick={lock}>LOCK ⎋</ABtn>
          <ABtn small onClick={() => onNavigate('overview')}>← ДО СИСТЕМИ</ABtn>
        </div>
      </div>

      {/* ANNOUNCEMENT BANNER */}
      {settings.announcementEnabled && settings.announcementText && (
        <div style={{
          padding:'0.625rem 1rem', marginBottom:'1.5rem',
          background: settings.announcementType === 'alert' ? 'rgba(196,80,57,.12)' :
                      settings.announcementType === 'warn'  ? 'rgba(212,140,0,.1)' :
                      settings.announcementType === 'good'  ? 'rgba(205,242,79,.08)' :
                                                               'rgba(212,196,181,.08)',
          border:'1px solid',
          borderColor: settings.announcementType === 'alert' ? 'var(--rust)' :
                       settings.announcementType === 'warn'  ? '#d48c00' :
                       settings.announcementType === 'good'  ? 'var(--lime)' :
                                                                'var(--amber)',
          display:'flex', gap:'1rem', alignItems:'center', flexWrap:'wrap',
        }}>
          <span style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', letterSpacing:'0.1em', flexShrink:0}}>
            {settings.announcementType.toUpperCase()} · АКТИВНЕ ОГОЛОШЕННЯ
          </span>
          <span style={{fontFamily:'var(--sans)', fontSize:'0.8125rem', color:'var(--t1)'}}>{settings.announcementText}</span>
        </div>
      )}

      {/* TABS */}
      <div style={{
        display:'flex', gap:0, marginBottom:'2rem',
        borderBottom:'1px solid var(--b1)', overflowX:'auto',
      }}>
        {TABS.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: isMobile ? '0.625rem 0.625rem' : '0.625rem 1rem',
            fontFamily:'var(--mono)', fontSize:'0.6875rem',
            letterSpacing:'0.08em', cursor:'pointer', background:'none', border:'none',
            borderBottom: tab === t.id ? '2px solid var(--lime)' : '2px solid transparent',
            color: tab === t.id ? 'var(--lime)' : 'var(--t3)',
            transition:'color .15s', whiteSpace:'nowrap', flexShrink:0,
          }}>
            {isMobile ? t.icon : t.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      {tabMap[tab] || null}

      {/* FOOTER */}
      <div style={{
        marginTop:'3rem', paddingTop:'1.5rem', borderTop:'1px solid var(--b1)',
        display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'0.5rem',
      }}>
        <span style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', letterSpacing:'0.08em'}}>
          DONNTU OS · ADMIN PANEL · {settings.buildVersion}
        </span>
        <span style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)'}}>
          Зміни зберігаються в localStorage · Сесія скидається при закритті браузера
        </span>
      </div>
    </div>
  );
};

window.AdminPage = AdminPage;
