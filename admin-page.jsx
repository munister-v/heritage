/* Admin Panel v1 — DonNTU Heritage OS · System Administration */

const ADMIN_PIN = '2026';
const STORE_KEY = 'donntu_admin_settings';
const SESSION_KEY = 'donntu_admin_unlocked';
const LOG_KEY = 'donntu_admin_log';

const defaultSettings = {
  studentName: 'Ірина',
  studentCourse: '3 курс',
  city: 'ЛУЦЬК',
  buildVersion: 'V · 2026.05',
  announcementEnabled: false,
  announcementText: '',
  announcementType: 'info',
  disabledPages: [],
  labStatuses: {},
  simModules: { mine: true, grid: true, cyber: true, city: true },
  maintenanceMode: false,
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

const ARow = ({ label, children, note }) => (
  <div style={{
    display:'flex', justifyContent:'space-between', alignItems:'center',
    padding:'0.875rem 0', borderBottom:'1px solid var(--b1)',
  }}>
    <div>
      <div style={{fontFamily:'var(--sans)', fontSize:'0.8125rem', color:'var(--t1)'}}>{label}</div>
      {note && <div style={{fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--t3)', marginTop:'0.2rem', letterSpacing:'0.04em'}}>{note}</div>}
    </div>
    <div>{children}</div>
  </div>
);

const AInput = ({ value, onChange, placeholder, mono }) => (
  <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
    style={{
      background:'var(--s2)', border:'1px solid var(--b2)',
      color:'var(--t1)', fontFamily: mono ? 'var(--mono)' : 'var(--sans)',
      fontSize:'0.8125rem', padding:'0.4rem 0.625rem',
      outline:'none', width:220,
    }}
  />
);

const ABtn = ({ onClick, children, danger, primary, small }) => (
  <button onClick={onClick} style={{
    padding: small ? '0.3rem 0.625rem' : '0.5rem 1rem',
    fontFamily:'var(--mono)', fontSize: small ? '0.625rem' : '0.75rem',
    letterSpacing:'0.06em', cursor:'pointer', border:'1px solid',
    borderColor: danger ? 'var(--rust)' : primary ? 'var(--lime)' : 'var(--b2)',
    color: danger ? 'var(--rust)' : primary ? '#050505' : 'var(--t2)',
    background: primary ? 'var(--lime)' : 'transparent',
    transition:'opacity .15s',
  }}>
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

/* ────────────────── TABS ────────────────── */
const TABS = [
  { id:'dash',    label:'ОГЛЯД' },
  { id:'pages',   label:'СТОРІНКИ' },
  { id:'profile', label:'ПРОФІЛЬ' },
  { id:'announce',label:'ОГОЛОШЕННЯ' },
  { id:'certs',   label:'СЕРТИФІКАТИ' },
  { id:'labs',    label:'ЛАБОРАТОРІЇ' },
  { id:'sim',     label:'СИМУЛЯЦІЇ' },
  { id:'system',  label:'СИСТЕМА' },
];

/* ────────────────── SECTIONS ────────────────── */
const DashTab = ({ settings, certs }) => {
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

  const statCard = (v, label, sub, color) => (
    <div className="gc" style={{padding:'1.25rem', borderLeft:`2px solid ${color}`}}>
      <div style={{fontFamily:'var(--mono)', fontSize:'1.5rem', color, marginBottom:'0.25rem'}}>{v}</div>
      <div style={{fontFamily:'var(--sans)', fontSize:'0.75rem', color:'var(--t1)'}}>{label}</div>
      {sub && <div style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', marginTop:'0.25rem'}}>{sub}</div>}
    </div>
  );

  return (
    <div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))', gap:'0.75rem', marginBottom:'2rem'}}>
        {statCard(certs.length, 'Сертифікатів видано', 'За весь час', 'var(--amber)')}
        {statCard(activePages + '/' + totalPages, 'Активних сторінок', disabledCount + ' вимкнено', 'var(--lime)')}
        {statCard(simOn + '/4', 'Симуляцій онлайн', 'Активних модулів', 'var(--slate)')}
        {statCard(storageUsed, 'Локальне сховище', 'localStorage', 'var(--sage)')}
        {statCard(settings.maintenanceMode ? 'ON' : 'OFF', 'Техобслуговування', 'Maintenance mode', settings.maintenanceMode ? 'var(--rust)' : 'var(--b3)')}
        {statCard(new Date().toLocaleDateString('uk-UA'), 'Поточна дата', 'Сесія активна', 'var(--t3)')}
      </div>

      <ASection title="СТАТУС СИСТЕМИ">
        {[
          { k:'Версія білду', v: settings.buildVersion },
          { k:'Профіль студента', v: settings.studentName + ' · ' + settings.studentCourse },
          { k:'Місто / вузол', v: settings.city },
          { k:'Оголошення', v: settings.announcementEnabled ? '● УВІМКНЕНО: «' + settings.announcementText.slice(0,40) + '»' : '○ вимкнено' },
          { k:'Maintenance mode', v: settings.maintenanceMode ? '⚠ УВІМКНЕНО' : 'Вимкнено' },
        ].map(({ k, v }) => (
          <div key={k} style={{
            display:'flex', gap:'2rem', padding:'0.5rem 0',
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
            display:'flex', gap:'1rem', padding:'0.375rem 0',
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

const PagesTab = ({ settings, onChange }) => {
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
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem'}}>
        <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>
          {ALL_PAGES.length - disabled.length}/{ALL_PAGES.length} сторінок активно
        </span>
        <ABtn small onClick={enableAll}>УВІМКНУТИ ВСІ</ABtn>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:'0.5rem'}}>
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

const ProfileTab = ({ settings, onChange }) => {
  const [s, setS] = React.useState(settings);
  const save = () => { onChange(s); addLog('Профіль оновлено'); };
  return (
    <div>
      <ASection title="ПРОФІЛЬ ПОТОЧНОГО КОРИСТУВАЧА" badge="відображається у topbar">
        <ARow label="Ім'я студента" note="Відображається у правому куті топбару"><AInput value={s.studentName} onChange={v => setS({...s, studentName:v})} placeholder="Ім'я" /></ARow>
        <ARow label="Курс / статус" note="Відображається поряд з ім'ям"><AInput value={s.studentCourse} onChange={v => setS({...s, studentCourse:v})} placeholder="3 курс" /></ARow>
        <ARow label="Місто / вузол" note="Відображається у годиннику"><AInput value={s.city} onChange={v => setS({...s, city:v.toUpperCase()})} placeholder="ЛУЦЬК" /></ARow>
      </ASection>
      <ASection title="СИСТЕМНА ІДЕНТИФІКАЦІЯ">
        <ARow label="Версія білду" note="Відображається у topbar-brand"><AInput value={s.buildVersion} onChange={v => setS({...s, buildVersion:v})} mono /></ARow>
      </ASection>
      <div style={{marginTop:'1.5rem'}}>
        <ABtn primary onClick={save}>ЗБЕРЕГТИ ЗМІНИ</ABtn>
        <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)', marginLeft:'1rem'}}>Зміни застосуються після перезавантаження сторінки</span>
      </div>
    </div>
  );
};

const AnnounceTab = ({ settings, onChange }) => {
  const [s, setS] = React.useState(settings);
  const save = () => { onChange(s); addLog('Оголошення оновлено: ' + (s.announcementEnabled ? s.announcementText.slice(0,40) : 'вимкнено')); };
  return (
    <div>
      <ASection title="АКТИВНЕ ОГОЛОШЕННЯ" badge="відображається в статус-барі та на overview">
        <ARow label="Увімкнути оголошення" note="Показати банер на всіх сторінках">
          <Toggle on={s.announcementEnabled} onChange={v => setS({...s, announcementEnabled:v})} label={s.announcementEnabled ? 'УВІМКНЕНО' : 'ВИМКНЕНО'} />
        </ARow>
        <ARow label="Тип оголошення" note="Визначає колір банера">
          <select value={s.announcementType} onChange={e => setS({...s, announcementType:e.target.value})}
            style={{background:'var(--s2)', border:'1px solid var(--b2)', color:'var(--t1)', fontFamily:'var(--mono)', fontSize:'0.75rem', padding:'0.375rem 0.625rem'}}>
            <option value="info">INFO — Нейтральний (amber)</option>
            <option value="warn">WARN — Попередження (orange)</option>
            <option value="alert">ALERT — Критичне (red)</option>
            <option value="good">GOOD — Позитивне (lime)</option>
          </select>
        </ARow>
        <ARow label="Текст оголошення" note="До 120 символів">
          <div>
            <textarea value={s.announcementText} onChange={e => setS({...s, announcementText:e.target.value.slice(0,120)})}
              rows={3} placeholder="Текст оголошення..."
              style={{
                background:'var(--s2)', border:'1px solid var(--b2)', color:'var(--t1)',
                fontFamily:'var(--sans)', fontSize:'0.8125rem', padding:'0.5rem 0.625rem',
                resize:'vertical', width:320, outline:'none', display:'block',
              }}
            />
            <div style={{fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', marginTop:'0.25rem'}}>{s.announcementText.length}/120</div>
          </div>
        </ARow>
      </ASection>

      {s.announcementEnabled && s.announcementText && (
        <div style={{
          padding:'0.75rem 1rem', marginBottom:'1.5rem',
          background: s.announcementType === 'alert' ? 'rgba(196,80,57,.1)' :
                      s.announcementType === 'warn'  ? 'rgba(212,140,0,.08)' :
                      s.announcementType === 'good'  ? 'rgba(205,242,79,.06)' :
                                                       'rgba(212,196,181,.06)',
          border:'1px solid',
          borderColor: s.announcementType === 'alert' ? 'var(--rust)' :
                       s.announcementType === 'warn'  ? '#d48c00' :
                       s.announcementType === 'good'  ? 'var(--lime)' :
                                                        'var(--amber)',
          fontFamily:'var(--sans)', fontSize:'0.8125rem',
        }}>
          <span style={{fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--t3)', marginRight:'0.75rem', letterSpacing:'0.08em'}}>ПОПЕРЕДНІЙ ПЕРЕГЛЯД ▸</span>
          {s.announcementText}
        </div>
      )}

      <ABtn primary onClick={save}>ЗБЕРЕГТИ ОГОЛОШЕННЯ</ABtn>
    </div>
  );
};

const CertsTab = () => {
  const [certs, setCerts] = React.useState(getCerts);
  const [confirm, setConfirm] = React.useState(null);

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

  return (
    <div>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'1rem'}}>
        <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>
          Всього сертифікатів: {certs.length}
        </span>
        {certs.length > 0 && (
          confirm === 'all'
            ? <div style={{display:'flex', gap:'0.5rem'}}>
                <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--rust)', alignSelf:'center'}}>Видалити всі {certs.length}?</span>
                <ABtn danger small onClick={clearAll}>ПІДТВЕРДИТИ</ABtn>
                <ABtn small onClick={() => setConfirm(null)}>СКАСУВАТИ</ABtn>
              </div>
            : <ABtn danger small onClick={() => setConfirm('all')}>ВИДАЛИТИ ВСІ</ABtn>
        )}
      </div>

      {certs.length === 0 ? (
        <div className="gc" style={{padding:'2rem', textAlign:'center'}}>
          <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)'}}>Сертифікатів ще не видано</span>
        </div>
      ) : (
        <div style={{display:'flex', flexDirection:'column', gap:'0.5rem'}}>
          {certs.map(c => (
            <div key={c.id} className="gc" style={{padding:'1rem', display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'1rem'}}>
              <div>
                <div style={{fontFamily:'var(--mono)', fontSize:'0.625rem', color:'var(--lime)', marginBottom:'0.25rem', letterSpacing:'0.06em'}}>CERT · {c.id}</div>
                <div style={{fontFamily:'var(--sans)', fontSize:'0.875rem', color:'var(--t1)', marginBottom:'0.25rem'}}>{c.subject || 'Без назви'}</div>
                <div style={{display:'flex', gap:'1rem', flexWrap:'wrap'}}>
                  <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)'}}>Студент: {c.name || '—'}</span>
                  <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)'}}>Бал: {c.score || '—'}</span>
                  <span style={{fontFamily:'var(--mono)', fontSize:'0.6875rem', color:'var(--t3)'}}>
                    {c.issuedAt ? new Date(c.issuedAt).toLocaleDateString('uk-UA') : '—'}
                  </span>
                </div>
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

const LabsTab = ({ settings, onChange }) => {
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
  const STATUS_OPTS = [
    { v:'open', label:'ВІДКРИТА', color:'var(--sage)' },
    { v:'maintenance', label:'ТЕХОГЛЯД', color:'var(--amber)' },
    { v:'closed', label:'ЗАКРИТА', color:'var(--rust)' },
  ];
  return (
    <div>
      <p style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)', marginBottom:'1.25rem'}}>
        Статус відображається на картках лабораторій. За замовчуванням — ВІДКРИТА.
      </p>
      <div style={{display:'flex', flexDirection:'column', gap:'0.375rem'}}>
        {LABS.map(lab => {
          const cur = statuses[lab] || 'open';
          return (
            <div key={lab} className="gc" style={{padding:'0.75rem 1rem', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <span style={{fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t2)'}}>{lab}</span>
              <div style={{display:'flex', gap:'0.375rem'}}>
                {STATUS_OPTS.map(opt => (
                  <button key={opt.v} onClick={() => setStatus(lab, opt.v)} style={{
                    padding:'0.25rem 0.5rem', fontFamily:'var(--mono)', fontSize:'0.5625rem',
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

const SimTab = ({ settings, onChange }) => {
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
            padding:'1.25rem', display:'flex', justifyContent:'space-between', alignItems:'flex-start',
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

const SystemTab = ({ settings, onChange }) => {
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

  const clearLog = () => { localStorage.removeItem(LOG_KEY); addLog('Журнал очищено'); setConfirm(null); };

  const storageInfo = (() => {
    try {
      const keys = Object.keys(localStorage).filter(k => k.startsWith('donntu_'));
      let size = 0;
      keys.forEach(k => size += (localStorage[k] || '').length);
      return { keys: keys.length, size: (size / 1024).toFixed(2) };
    } catch { return { keys: 0, size: 0 }; }
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
            display:'flex', gap:'2rem', padding:'0.5rem 0',
            borderBottom:'1px solid var(--b1)', fontFamily:'var(--mono)', fontSize:'0.6875rem',
          }}>
            <span style={{color:'var(--t3)', minWidth:240}}>{k}</span>
            <span style={{color:'var(--t2)', wordBreak:'break-all'}}>{v}</span>
          </div>
        ))}
      </ASection>

      <ASection title="ТЕХНІЧНЕ ОБСЛУГОВУВАННЯ">
        <ARow label="Maintenance mode" note="Показує технічну заставку всім користувачам">
          <Toggle on={settings.maintenanceMode}
            onChange={v => { onChange({...settings, maintenanceMode:v}); addLog('Maintenance mode: ' + (v?'ON':'OFF')); }}
            label={settings.maintenanceMode ? '⚠ УВІМКНЕНО' : 'ВИМКНЕНО'} />
        </ARow>
      </ASection>

      <ASection title="ОПЕРАЦІЇ З ДАНИМИ">
        <div style={{display:'flex', flexDirection:'column', gap:'0.875rem'}}>
          <ARow label="Експорт даних" note="Завантажити всі donntu_* ключі як JSON">
            <ABtn onClick={exportData}>⬇ ЕКСПОРТУВАТИ JSON</ABtn>
          </ARow>
          <ARow label="Очистити журнал" note="Видалити всі записи адмін-журналу">
            {confirm === 'log'
              ? <div style={{display:'flex', gap:'0.5rem'}}>
                  <ABtn danger small onClick={clearLog}>ПІДТВЕРДИТИ</ABtn>
                  <ABtn small onClick={() => setConfirm(null)}>НІ</ABtn>
                </div>
              : <ABtn danger small onClick={() => setConfirm('log')}>ОЧИСТИТИ ЖУРНАЛ</ABtn>
            }
          </ARow>
          <ARow label="Очистити всі сертифікати" note="Незворотна операція — видалити всі видані сертифікати">
            {confirm === 'certs'
              ? <div style={{display:'flex', gap:'0.5rem'}}>
                  <ABtn danger small onClick={clearCerts}>ПІДТВЕРДИТИ</ABtn>
                  <ABtn small onClick={() => setConfirm(null)}>НІ</ABtn>
                </div>
              : <ABtn danger onClick={() => setConfirm('certs')}>⚠ ВИДАЛИТИ ВСІ СЕРТИФІКАТИ</ABtn>
            }
          </ARow>
          <ARow label="Скинути систему" note="Очищає всі donntu_* ключі та скидає налаштування до дефолту">
            {confirm === 'reset'
              ? <div style={{display:'flex', gap:'0.5rem', alignItems:'center'}}>
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
  const [unlocked, setUnlocked] = React.useState(() => sessionStorage.getItem(SESSION_KEY) === '1');
  const [pin, setPin] = React.useState('');
  const [pinError, setPinError] = React.useState(false);
  const [tab, setTab] = React.useState('dash');
  const [settings, setSettings] = React.useState(getSettings);
  const certs = getCerts();

  const tryUnlock = () => {
    if (pin === ADMIN_PIN) {
      sessionStorage.setItem(SESSION_KEY, '1');
      setUnlocked(true);
      setPin('');
      setPinError(false);
      addLog('Вхід в адмін-панель');
    } else {
      setPinError(true);
      setPin('');
      setTimeout(() => setPinError(false), 1500);
    }
  };

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
          Введіть PIN-код для доступу
        </p>
      </div>

      <div className="gc" style={{padding:'2.5rem', width:320, textAlign:'center'}}>
        <div style={{
          fontFamily:'var(--mono)', fontSize:'2rem', letterSpacing:'0.5em',
          color: pinError ? 'var(--rust)' : 'var(--t1)',
          textAlign:'center', marginBottom:'1.5rem',
          transition:'color .2s',
          minHeight:'3rem',
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
    dash:     <DashTab settings={settings} certs={certs} />,
    pages:    <PagesTab settings={settings} onChange={handleChange} />,
    profile:  <ProfileTab settings={settings} onChange={handleChange} />,
    announce: <AnnounceTab settings={settings} onChange={handleChange} />,
    certs:    <CertsTab />,
    labs:     <LabsTab settings={settings} onChange={handleChange} />,
    sim:      <SimTab settings={settings} onChange={handleChange} />,
    system:   <SystemTab settings={settings} onChange={handleChange} />,
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
        <div style={{display:'flex', gap:'0.625rem', alignItems:'center'}}>
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

      {/* ANNOUNCEMENT BANNER (if active) */}
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
          display:'flex', gap:'1rem', alignItems:'center',
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
            padding:'0.625rem 1rem', fontFamily:'var(--mono)', fontSize:'0.6875rem',
            letterSpacing:'0.08em', cursor:'pointer', background:'none', border:'none',
            borderBottom: tab === t.id ? '2px solid var(--lime)' : '2px solid transparent',
            color: tab === t.id ? 'var(--lime)' : 'var(--t3)',
            transition:'color .15s', whiteSpace:'nowrap', flexShrink:0,
          }}>{t.label}</button>
        ))}
      </div>

      {/* CONTENT */}
      {tabMap[tab] || null}

      {/* FOOTER */}
      <div style={{
        marginTop:'3rem', paddingTop:'1.5rem', borderTop:'1px solid var(--b1)',
        display:'flex', justifyContent:'space-between', alignItems:'center',
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
