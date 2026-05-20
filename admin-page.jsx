/* Admin Panel v3 — Global Content Editor · DonNTU Heritage OS */

const ADMIN_PIN   = '2026';
const STORE_KEY   = 'donntu_admin_settings';
const CONTENT_KEY = 'donntu_content';
const SESSION_KEY = 'donntu_admin_unlocked';
const LOG_KEY     = 'donntu_admin_log';
const VISITS_KEY  = 'donntu_visits';

/* ── Persistence helpers ──────────────────────────────────────── */
const getSettings = () => {
  try { const r=localStorage.getItem(STORE_KEY); return r?{...defaultSettings,...JSON.parse(r)}:{...defaultSettings}; }
  catch { return {...defaultSettings}; }
};
const saveSettings = s => { try{localStorage.setItem(STORE_KEY,JSON.stringify(s));}catch{} };

const getContent = () => {
  try { return JSON.parse(localStorage.getItem(CONTENT_KEY)||'{}'); }
  catch { return {}; }
};
const saveContent = c => {
  try {
    localStorage.setItem(CONTENT_KEY, JSON.stringify(c));
    window.dispatchEvent(new CustomEvent('donntu-content-updated'));
  } catch{}
};

const addLog = msg => {
  try {
    const log = JSON.parse(localStorage.getItem(LOG_KEY)||'[]');
    log.unshift({msg, ts:Date.now()});
    localStorage.setItem(LOG_KEY, JSON.stringify(log.slice(0,50)));
  } catch{}
};
const getLog = () => { try{return JSON.parse(localStorage.getItem(LOG_KEY)||'[]');}catch{return [];} };

const getCerts = () => {
  try {
    return Object.keys(localStorage)
      .filter(k=>k.startsWith('donntu_cert_'))
      .map(k=>{ try{const d=JSON.parse(localStorage.getItem(k));return{id:k.replace('donntu_cert_',''),...d};}catch{return null;} })
      .filter(Boolean)
      .sort((a,b)=>(b.issuedAt||0)-(a.issuedAt||0));
  } catch{return [];}
};

const defaultSettings = {
  disabledPages: [],
  maintenanceMode: false,
  announcementEnabled: false,
  announcementText: '',
  announcementType: 'info',
  showAdminBadge: true,
  buildVersion: 'V · 2026.05',
};

/* ── Default content (mirrors overview-page defaults) ─────────── */
const DEFAULT_CONTENT = {
  heroDate:    '1921 — наш час',
  heroPlace:   'Дрогобич · Львівська обл. · Україна',
  heroTitle:   'DONNTU',
  heroTheme:   'Цифрова спадщина:\nсторічна історія, пам\'ять і відновлення',

  newsItems: [
    { date:'19 травня 2026', title:'Представники ДонНТУ взяли участь у роботі журі фестивалю робототехніки «Inno Tech»', img:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=560&fit=crop' },
    { date:'18 травня 2026', title:'Заходи до Дня пам\'яті жертв політичних репресій та геноциду кримськотатарського народу', img:'' },
    { date:'18 травня 2026', title:'ДонНТУ долучився до розроблення плану профорієнтації Авдіївської громади', img:'' },
    { date:'18 травня 2026', title:'V Всеукраїнська науково-практична конференція «Наукові досягнення сучасної молоді»', img:'' },
    { date:'15 травня 2026', title:'Перший з 2022 року візит представників місцевої влади Японії (м. Камока) до ДонНТУ', img:'' },
  ],

  reachStats: [
    { n:'1921',    label:'Рік заснування університету' },
    { n:'105',     label:'Років інженерної освіти Донбасу' },
    { n:'40 000+', label:'Випускників за всю історію' },
  ],

  speakers: [
    { name:'Олександр Янчуков',   role:'Ректор Донецького національного технічного університету', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=240&fit=crop&q=80' },
    { name:'Олексій Ященко',      role:'Проректор з наукової роботи', img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=240&h=240&fit=crop&q=80' },
    { name:'Валентина Ковальова', role:'Декан факультету інформаційних технологій', img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=240&fit=crop&q=80' },
  ],

  themeHeading: 'Тема порталу',
  themeBody:    'Тема цифрового порталу — «Цифрова спадщина: сторічна історія, пам\'ять і відновлення» — об\'єднує понад 100 років інженерної освіти, науки та культури з місією зберегти ім\'я, обличчя і голос університету. Заснований у 1921 році як гірничий технікум, ДонНТУ пройшов шлях від Донецька через евакуацію до Дрогобича. Тут — архіви, портрети, біографії і надія.',

  dialoguesHeading: 'Діалоги про спадщину',
  dialoguesBody:    'Серія публічних розмов із істориками, випускниками й учнями про те, як зберегти інженерну культуру Донбасу, передати її новим поколінням і вписати у спільну українську спадщину.',
  dialoguesImg:     'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&h=600&fit=crop',
  dialoguesCount:   '12 відеозаписів та транскриптів',

  focusAreas: [
    { n:'Розділ 1', title:'Сторічна історія: від технікуму до університету', page:'heritage' },
    { n:'Розділ 2', title:'Люди, що визначили обличчя ДонНТУ',               page:'people'  },
    { n:'Розділ 3', title:'Цифровий архів: документи та фотографії',         page:'archive' },
    { n:'Розділ 4', title:"Війна, евакуація та незламна пам'ять",            page:'war'     },
    { n:'Розділ 5', title:'Голоси випускників і викладачів',                  page:'voices'  },
    { n:'Розділ 6', title:'Інтерактивне панно «Історія ДонНТУ»',             page:'panneau' },
  ],

  videos: [
    { date:'12 травня 2026', title:'ДонНТУ — 105 років: від гірничого технікуму до національного університету', img:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop' },
    { date:'4 травня 2026',  title:'Евакуація 2022: голоси викладачів і студентів ДонНТУ', img:'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=450&fit=crop' },
    { date:'18 квітня 2026', title:'Інтерактивне панно «Видатні постаті ДонНТУ» — як це працює', img:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop' },
  ],

  hostBlueHeading: 'Ми вітаємо ДонНТУ\nу Дрогобичі',
  hostBlueP1:  'Донецький національний технічний університет продовжує свою столітню місію в нових умовах — у Дрогобичі, Львівська область. Як університет-переселенець, ДонНТУ зберігає понад 100 років інженерної освіти Донбасу й відкриває нову сторінку в серці Галичини.',
  hostBlueP2:  'Учасники порталу знайдуть тут унікальне поєднання цифрового архіву, живих спогадів та інтерактивних ресурсів — де спадщина і сучасність існують поруч, а люди залишаються в центрі кожної сторінки.',
  hostPinkP1:  'Дрогобич — стародавнє місто Галичини з багатою культурною спадщиною, розташоване у Львівській області, неподалік Карпат. Місто, де народилися Іван Франко та Бруно Шульц, стало новим домом для ДонНТУ.',
  hostPinkP2:  'Відмінна інфраструктура й наукова традиція роблять Дрогобич ідеальним місцем для відродження університету.',
  hostCityPhoto:   'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=600&fit=crop&q=80',
  hostQuoteName:   'Олександр Янчуков',
  hostQuoteRole:   'Ректор Донецького національного технічного університету',
  hostQuoteText:   'Ми запрошуємо вас долучитися до нашої цифрової спадщини — зберегти ім\'я, обличчя і голос університету, який подолав евакуацію, але не зломився. Наша місія триває.',

  footerBrand:     'DONNTU',
  footerTagline:   'Донецький національний технічний університет.\nЦифрова спадщина · Пам\'ять · Відновлення.',
  footerCopyright: '© 2026 ДонНТУ · Цифрова спадщина · mail@donntu.edu.ua',
  footerAddress:   'вул. Самбірська, 76 · Дрогобич · Львівська обл. · donntu.edu.ua',
};

/* ── Tiny UI primitives ───────────────────────────────────────── */
const cx = (...args) => args.filter(Boolean).join(' ');

const F = ({ label, value, onChange, placeholder, mono, wide }) => (
  <div style={{marginBottom:'0.75rem'}}>
    <div style={{fontSize:'0.6875rem',fontWeight:600,letterSpacing:'0.06em',color:'var(--t3)',textTransform:'uppercase',marginBottom:'0.25rem'}}>{label}</div>
    <input
      value={value}
      onChange={e=>onChange(e.target.value)}
      placeholder={placeholder||''}
      style={{
        width: wide ? '100%' : '100%',
        background:'var(--s1)',
        border:'1px solid var(--b1)',
        borderRadius:'4px',
        padding:'0.5rem 0.625rem',
        fontSize: mono ? '0.75rem' : '0.8125rem',
        fontFamily: mono ? 'var(--mono)' : 'inherit',
        color:'var(--t1)',
        boxSizing:'border-box',
        outline:'none',
      }}
    />
  </div>
);

const TA = ({ label, value, onChange, rows }) => (
  <div style={{marginBottom:'0.75rem'}}>
    <div style={{fontSize:'0.6875rem',fontWeight:600,letterSpacing:'0.06em',color:'var(--t3)',textTransform:'uppercase',marginBottom:'0.25rem'}}>{label}</div>
    <textarea
      value={value}
      onChange={e=>onChange(e.target.value)}
      rows={rows||4}
      style={{
        width:'100%',background:'var(--s1)',border:'1px solid var(--b1)',borderRadius:'4px',
        padding:'0.5rem 0.625rem',fontSize:'0.8125rem',color:'var(--t1)',
        boxSizing:'border-box',resize:'vertical',outline:'none',lineHeight:1.5,
      }}
    />
  </div>
);

const ImgF = ({ label, value, onChange }) => (
  <div style={{marginBottom:'0.75rem'}}>
    <div style={{fontSize:'0.6875rem',fontWeight:600,letterSpacing:'0.06em',color:'var(--t3)',textTransform:'uppercase',marginBottom:'0.25rem'}}>{label}</div>
    <div style={{display:'flex',gap:'0.5rem',alignItems:'flex-start'}}>
      {value && <img src={value} alt="" style={{width:56,height:56,objectFit:'cover',borderRadius:4,border:'1px solid var(--b1)',flexShrink:0}} onError={e=>e.target.style.display='none'}/>}
      <input
        value={value}
        onChange={e=>onChange(e.target.value)}
        placeholder="https://..."
        style={{flex:1,background:'var(--s1)',border:'1px solid var(--b1)',borderRadius:'4px',padding:'0.5rem 0.625rem',fontSize:'0.75rem',fontFamily:'var(--mono)',color:'var(--t1)',boxSizing:'border-box',outline:'none'}}
      />
    </div>
  </div>
);

const Btn = ({ onClick, children, primary, danger, small }) => (
  <button onClick={onClick} style={{
    padding: small ? '0.3rem 0.625rem' : '0.5rem 1rem',
    fontSize: small ? '0.75rem' : '0.8125rem',
    fontWeight: 500,
    borderRadius: 4,
    border: '1px solid ' + (danger?'var(--rust)':primary?'var(--ac)':'var(--b2)'),
    background: danger ? 'rgba(196,80,57,.08)' : primary ? 'var(--ac)' : 'var(--s1)',
    color: danger ? 'var(--rust)' : primary ? '#fff' : 'var(--t1)',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  }}>{children}</button>
);

const Tog = ({ on, onChange, label }) => (
  <label style={{display:'flex',alignItems:'center',gap:'0.5rem',cursor:'pointer',userSelect:'none'}}>
    <div onClick={()=>onChange(!on)} style={{
      width:36,height:20,borderRadius:10,position:'relative',flexShrink:0,
      background: on ? 'var(--ac)' : 'var(--b2)',transition:'background 0.2s',
    }}>
      <div style={{
        position:'absolute',top:2,left: on?16:2,width:16,height:16,borderRadius:'50%',
        background:'#fff',transition:'left 0.2s',
      }}/>
    </div>
    <span style={{fontSize:'0.8125rem',color:'var(--t2)'}}>{label}</span>
  </label>
);

const Divider = ({ title }) => (
  <div style={{display:'flex',alignItems:'center',gap:'0.75rem',margin:'1.5rem 0 1rem'}}>
    <div style={{fontSize:'0.6875rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--t3)',whiteSpace:'nowrap'}}>{title}</div>
    <div style={{flex:1,height:1,background:'var(--b1)'}}/>
  </div>
);

const Panel = ({ title, badge, open, onToggle, children }) => (
  <div style={{border:'1px solid var(--b1)',borderRadius:6,marginBottom:'0.75rem',overflow:'hidden'}}>
    <button onClick={onToggle} style={{
      width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',
      padding:'0.875rem 1rem',background:'var(--s1)',border:'none',cursor:'pointer',textAlign:'left',
    }}>
      <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
        <span style={{fontSize:'0.875rem',fontWeight:600,color:'var(--t1)'}}>{title}</span>
        {badge && <span style={{fontSize:'0.6875rem',background:'var(--s2)',color:'var(--t3)',borderRadius:10,padding:'0.1rem 0.5rem',border:'1px solid var(--b1)'}}>{badge}</span>}
      </div>
      <span style={{fontSize:'0.75rem',color:'var(--t3)',transform:open?'rotate(180deg)':'none',transition:'transform 0.15s'}}>▾</span>
    </button>
    {open && <div style={{padding:'1rem',background:'var(--bg)',borderTop:'1px solid var(--b1)'}}>{children}</div>}
  </div>
);

/* ── Array item editor ──────────────────────────────────────────── */
const ArrayEditor = ({ items, onChange, renderItem, newItem, maxItems }) => {
  const move = (i, dir) => {
    const a = [...items];
    const j = i + dir;
    if (j < 0 || j >= a.length) return;
    [a[i], a[j]] = [a[j], a[i]];
    onChange(a);
  };
  const remove = i => onChange(items.filter((_,idx)=>idx!==i));
  const add = () => { if (!maxItems || items.length < maxItems) onChange([...items, {...newItem}]); };
  const update = (i, patch) => onChange(items.map((item,idx)=>idx===i?{...item,...patch}:item));

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{border:'1px solid var(--b1)',borderRadius:4,padding:'0.75rem',marginBottom:'0.5rem',background:'var(--s1)'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.5rem'}}>
            <span style={{fontSize:'0.75rem',color:'var(--t3)',fontWeight:600}}>#{i+1}</span>
            <div style={{display:'flex',gap:'0.25rem'}}>
              <Btn small onClick={()=>move(i,-1)}>↑</Btn>
              <Btn small onClick={()=>move(i,+1)}>↓</Btn>
              <Btn small danger onClick={()=>remove(i)}>✕</Btn>
            </div>
          </div>
          {renderItem(item, i, patch=>update(i,patch))}
        </div>
      ))}
      {(!maxItems || items.length < maxItems) && (
        <Btn onClick={add}>+ Додати</Btn>
      )}
    </div>
  );
};

/* ── Save banner ────────────────────────────────────────────────── */
const SaveBanner = ({ dirty, onSave, onReset }) => dirty ? (
  <div style={{
    position:'sticky',top:0,zIndex:100,
    background:'#1a4e1a',color:'#fff',
    padding:'0.625rem 1.25rem',
    display:'flex',alignItems:'center',justifyContent:'space-between',
    borderBottom:'1px solid #2d6b2d',
    fontSize:'0.8125rem',
    marginBottom:'1rem',
  }}>
    <span>⚠ Є незбережені зміни</span>
    <div style={{display:'flex',gap:'0.5rem'}}>
      <Btn small onClick={onReset}>Скасувати</Btn>
      <Btn small primary onClick={onSave}>Зберегти та застосувати</Btn>
    </div>
  </div>
) : null;

/* ══════════════════════════════════════════════════════════════════
   TAB: CONTENT — main overview page editor
══════════════════════════════════════════════════════════════════ */
const ContentTab = () => {
  const [saved,  setSaved]  = React.useState(getContent);
  const [draft,  setDraft]  = React.useState(getContent);
  const [open,   setOpen]   = React.useState({});

  const dirty = JSON.stringify(draft) !== JSON.stringify(saved);

  const set = (key, val) => setDraft(d => ({...d, [key]: val}));
  const cv  = (key) => draft[key] !== undefined ? draft[key] : DEFAULT_CONTENT[key];

  const tog = k => setOpen(o=>({...o,[k]:!o[k]}));

  const handleSave = () => {
    saveContent(draft);
    setSaved({...draft});
    addLog('Контент оновлено через адмін-панель');
  };
  const handleReset = () => {
    setDraft({...saved});
  };
  const handleResetAll = () => {
    if (!window.confirm('Скинути весь контент до початкових значень?')) return;
    setDraft({});
    saveContent({});
    setSaved({});
    addLog('Контент скинуто до початкових значень');
  };

  return (
    <div>
      <SaveBanner dirty={dirty} onSave={handleSave} onReset={handleReset}/>

      {/* ─ Hero ─ */}
      <Panel title="Герой" badge="hero" open={open.hero} onToggle={()=>tog('hero')}>
        <F label="Дата / рік" value={cv('heroDate')} onChange={v=>set('heroDate',v)}/>
        <F label="Місцезнаходження" value={cv('heroPlace')} onChange={v=>set('heroPlace',v)}/>
        <F label="Назва (великий заголовок)" value={cv('heroTitle')} onChange={v=>set('heroTitle',v)}/>
        <TA label="Підзаголовок (\\n = новий рядок)" value={cv('heroTheme')} onChange={v=>set('heroTheme',v)} rows={2}/>
      </Panel>

      {/* ─ News ─ */}
      <Panel title="Новини" badge={`${cv('newsItems').length || DEFAULT_CONTENT.newsItems.length} шт.`} open={open.news} onToggle={()=>tog('news')}>
        <ArrayEditor
          items={cv('newsItems')||DEFAULT_CONTENT.newsItems}
          onChange={v=>set('newsItems',v)}
          newItem={{date:'',title:'',img:''}}
          renderItem={(item,i,upd)=>(
            <div>
              <F label="Дата"    value={item.date}  onChange={v=>upd({date:v})}/>
              <F label="Заголовок" value={item.title} onChange={v=>upd({title:v})}/>
              <ImgF label="Фото (URL)" value={item.img||''} onChange={v=>upd({img:v})}/>
            </div>
          )}
        />
      </Panel>

      {/* ─ Theme section ─ */}
      <Panel title="Тема порталу" open={open.theme} onToggle={()=>tog('theme')}>
        <F label="Заголовок секції" value={cv('themeHeading')} onChange={v=>set('themeHeading',v)}/>
        <TA label="Текст" value={cv('themeBody')} onChange={v=>set('themeBody',v)} rows={5}/>
      </Panel>

      {/* ─ Reach stats ─ */}
      <Panel title="Статистика (цифри)" badge="3 блоки" open={open.reach} onToggle={()=>tog('reach')}>
        <ArrayEditor
          items={cv('reachStats')||DEFAULT_CONTENT.reachStats}
          onChange={v=>set('reachStats',v)}
          newItem={{n:'',label:''}}
          maxItems={6}
          renderItem={(item,i,upd)=>(
            <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:'0.5rem'}}>
              <F label="Число" value={item.n}     onChange={v=>upd({n:v})}/>
              <F label="Підпис" value={item.label} onChange={v=>upd({label:v})}/>
            </div>
          )}
        />
      </Panel>

      {/* ─ Speakers ─ */}
      <Panel title="Видатні постаті" badge={`${(cv('speakers')||DEFAULT_CONTENT.speakers).length} осіб`} open={open.speakers} onToggle={()=>tog('speakers')}>
        <ArrayEditor
          items={cv('speakers')||DEFAULT_CONTENT.speakers}
          onChange={v=>set('speakers',v)}
          newItem={{name:'',role:'',img:''}}
          maxItems={6}
          renderItem={(item,i,upd)=>(
            <div>
              <F label="Ім'я" value={item.name} onChange={v=>upd({name:v})}/>
              <F label="Посада / роль" value={item.role} onChange={v=>upd({role:v})}/>
              <ImgF label="Фото (URL)" value={item.img||''} onChange={v=>upd({img:v})}/>
            </div>
          )}
        />
      </Panel>

      {/* ─ Dialogues ─ */}
      <Panel title="Діалоги про спадщину" open={open.dialog} onToggle={()=>tog('dialog')}>
        <F label="Заголовок" value={cv('dialoguesHeading')} onChange={v=>set('dialoguesHeading',v)}/>
        <TA label="Текст" value={cv('dialoguesBody')} onChange={v=>set('dialoguesBody',v)} rows={3}/>
        <ImgF label="Фото (URL)" value={cv('dialoguesImg')} onChange={v=>set('dialoguesImg',v)}/>
        <F label="Підпис кількості (напр. «12 відеозаписів»)" value={cv('dialoguesCount')} onChange={v=>set('dialoguesCount',v)}/>
      </Panel>

      {/* ─ Focus areas ─ */}
      <Panel title="Ключові розділи" badge="6 карток" open={open.focus} onToggle={()=>tog('focus')}>
        <ArrayEditor
          items={cv('focusAreas')||DEFAULT_CONTENT.focusAreas}
          onChange={v=>set('focusAreas',v)}
          newItem={{n:'Розділ 7',title:'',page:'overview'}}
          maxItems={9}
          renderItem={(item,i,upd)=>(
            <div style={{display:'grid',gridTemplateColumns:'1fr 3fr 1fr',gap:'0.5rem'}}>
              <F label="Мітка"    value={item.n}     onChange={v=>upd({n:v})}/>
              <F label="Назва"    value={item.title}  onChange={v=>upd({title:v})}/>
              <F label="Сторінка" value={item.page}   onChange={v=>upd({page:v})} mono/>
            </div>
          )}
        />
      </Panel>

      {/* ─ Videos ─ */}
      <Panel title="Відеоматеріали" badge={`${(cv('videos')||DEFAULT_CONTENT.videos).length} відео`} open={open.videos} onToggle={()=>tog('videos')}>
        <ArrayEditor
          items={cv('videos')||DEFAULT_CONTENT.videos}
          onChange={v=>set('videos',v)}
          newItem={{date:'',title:'',img:''}}
          maxItems={6}
          renderItem={(item,i,upd)=>(
            <div>
              <F label="Дата" value={item.date} onChange={v=>upd({date:v})}/>
              <F label="Назва" value={item.title} onChange={v=>upd({title:v})}/>
              <ImgF label="Прев'ю (URL)" value={item.img||''} onChange={v=>upd({img:v})}/>
            </div>
          )}
        />
      </Panel>

      {/* ─ Host city ─ */}
      <Panel title="Блок «Місто-хост» (Дрогобич)" open={open.host} onToggle={()=>tog('host')}>
        <Divider title="Синій блок (ліво)"/>
        <TA label="Заголовок (\\n = новий рядок)" value={cv('hostBlueHeading')} onChange={v=>set('hostBlueHeading',v)} rows={2}/>
        <TA label="Абзац 1" value={cv('hostBlueP1')} onChange={v=>set('hostBlueP1',v)} rows={3}/>
        <TA label="Абзац 2" value={cv('hostBlueP2')} onChange={v=>set('hostBlueP2',v)} rows={3}/>

        <Divider title="Рожевий блок (центр)"/>
        <TA label="Абзац 1" value={cv('hostPinkP1')} onChange={v=>set('hostPinkP1',v)} rows={3}/>
        <TA label="Абзац 2" value={cv('hostPinkP2')} onChange={v=>set('hostPinkP2',v)} rows={2}/>

        <Divider title="Фото міста"/>
        <ImgF label="URL фотографії (нижній лівий блок)" value={cv('hostCityPhoto')} onChange={v=>set('hostCityPhoto',v)}/>

        <Divider title="Цитата (бірюзовий блок)"/>
        <F  label="Ім'я"   value={cv('hostQuoteName')} onChange={v=>set('hostQuoteName',v)}/>
        <F  label="Посада" value={cv('hostQuoteRole')} onChange={v=>set('hostQuoteRole',v)}/>
        <TA label="Текст цитати" value={cv('hostQuoteText')} onChange={v=>set('hostQuoteText',v)} rows={3}/>
      </Panel>

      {/* ─ Footer ─ */}
      <Panel title="Підвал (footer)" open={open.footer} onToggle={()=>tog('footer')}>
        <F  label="Назва бренду" value={cv('footerBrand')} onChange={v=>set('footerBrand',v)}/>
        <TA label="Опис (\\n = новий рядок)" value={cv('footerTagline')} onChange={v=>set('footerTagline',v)} rows={2}/>
        <F  label="Рядок копірайту" value={cv('footerCopyright')} onChange={v=>set('footerCopyright',v)}/>
        <F  label="Адреса" value={cv('footerAddress')} onChange={v=>set('footerAddress',v)}/>
      </Panel>

      {/* ─ Bottom actions ─ */}
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'1rem',borderTop:'1px solid var(--b1)',marginTop:'1rem'}}>
        <Btn danger onClick={handleResetAll}>Скинути всі зміни до початкових</Btn>
        <Btn primary onClick={handleSave}>💾 Зберегти та застосувати</Btn>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   TAB: DASHBOARD
══════════════════════════════════════════════════════════════════ */
const DashTab = ({ settings, onNavigate }) => {
  const totalPages = 22;
  const disabledCount = settings.disabledPages.length;
  const visits = (() => { try{return JSON.parse(localStorage.getItem(VISITS_KEY)||'{}');}catch{return {};} })();
  const topVisits = Object.entries(visits).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const maxVisit = topVisits.length ? topVisits[0][1] : 1;
  const log = getLog().slice(0,8);
  const contentKeys = Object.keys(getContent()).length;

  const fmtTs = ts => {
    const d = new Date(ts), now = new Date();
    const diff = Math.floor((now-d)/60000);
    if(diff<1) return 'щойно';
    if(diff<60) return `${diff} хв тому`;
    if(diff<1440) return `${Math.floor(diff/60)} год тому`;
    return d.toLocaleDateString('uk');
  };

  const Card = ({n,label,sub,color}) => (
    <div style={{background:'var(--s1)',border:'1px solid var(--b1)',borderRadius:6,padding:'1rem',flex:1,minWidth:100}}>
      <div style={{fontSize:'1.75rem',fontWeight:700,color:color||'var(--ac)',fontFamily:'var(--display)',lineHeight:1}}>{n}</div>
      <div style={{fontSize:'0.75rem',color:'var(--t2)',marginTop:'0.25rem',fontWeight:500}}>{label}</div>
      {sub && <div style={{fontSize:'0.6875rem',color:'var(--t3)',marginTop:'0.125rem'}}>{sub}</div>}
    </div>
  );

  return (
    <div>
      <div style={{display:'flex',gap:'0.75rem',flexWrap:'wrap',marginBottom:'1.5rem'}}>
        <Card n={totalPages-disabledCount} label="Активних сторінок" sub={`з ${totalPages} загалом`}/>
        <Card n={Object.keys(visits).reduce((s,k)=>s+visits[k],0)||0} label="Всього переглядів"/>
        <Card n={contentKeys} label="Редагованих полів" color="var(--wuf-blue)"/>
        <Card n={getCerts().length} label="Сертифікатів"/>
      </div>

      <Divider title="Активність сторінок"/>
      {topVisits.length === 0
        ? <p style={{color:'var(--t3)',fontSize:'0.8125rem'}}>Переглядів ще немає.</p>
        : topVisits.map(([page,count])=>(
          <div key={page} style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'0.375rem'}}>
            <div style={{width:80,fontSize:'0.75rem',color:'var(--t2)',fontWeight:600,flexShrink:0}}>{page}</div>
            <div style={{flex:1,height:8,background:'var(--s2)',borderRadius:4,overflow:'hidden'}}>
              <div style={{width:`${(count/maxVisit)*100}%`,height:'100%',background:'var(--ac)',borderRadius:4}}/>
            </div>
            <div style={{width:24,fontSize:'0.75rem',color:'var(--t3)',textAlign:'right'}}>{count}</div>
          </div>
        ))
      }

      <Divider title="Журнал подій"/>
      <div style={{background:'var(--s1)',border:'1px solid var(--b1)',borderRadius:6,overflow:'hidden'}}>
        {log.length === 0
          ? <div style={{padding:'0.75rem 1rem',fontSize:'0.8125rem',color:'var(--t3)'}}>Порожньо.</div>
          : log.map((e,i)=>(
            <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'0.5rem 1rem',borderBottom:i<log.length-1?'1px solid var(--b1)':'none'}}>
              <span style={{fontSize:'0.8125rem',color:'var(--t1)'}}>{e.msg}</span>
              <span style={{fontSize:'0.75rem',color:'var(--t3)',flexShrink:0,marginLeft:'1rem'}}>{fmtTs(e.ts)}</span>
            </div>
          ))
        }
      </div>

      <Divider title="Швидкі дії"/>
      <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
        <Btn onClick={()=>{ if(window.confirm('Очистити всю аналітику?')){localStorage.removeItem(VISITS_KEY);window.location.reload();} }}>Скинути аналітику</Btn>
        <Btn onClick={()=>{ localStorage.removeItem(LOG_KEY);window.location.reload(); }}>Очистити лог</Btn>
        <Btn danger onClick={()=>{ if(window.confirm('Скинути весь контент?')){saveContent({});window.location.reload();} }}>Скинути контент</Btn>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   TAB: PAGES (enable/disable + page visibility)
══════════════════════════════════════════════════════════════════ */
const ALL_PAGES = [
  {id:'heritage',   label:'Спадщина'},
  {id:'campus',     label:'Кампус'},
  {id:'labs',       label:'Лабораторії'},
  {id:'simulation', label:'Симуляція'},
  {id:'achievements',label:'Досягнення'},
  {id:'archive',    label:'Архів'},
  {id:'war',        label:'Пам\'ять'},
  {id:'people',     label:'Люди'},
  {id:'future',     label:'Майбутнє'},
  {id:'library',    label:'Бібліотека'},
  {id:'applicant',  label:'Абітурієнту'},
  {id:'studentlife',label:'Студ. Життя'},
  {id:'map',        label:'Карта'},
  {id:'timecapsule',label:'Часова Капс.'},
  {id:'eras',       label:'Ери'},
  {id:'voices',     label:'Голоси'},
  {id:'science',    label:'Наука'},
  {id:'international',label:'Міжнар.'},
  {id:'departments',label:'Кафедри'},
  {id:'panneau',    label:'Панно'},
  {id:'admin',      label:'Адмін'},
];

const PagesTab = ({ settings, onChange }) => {
  const toggle = id => {
    const dis = settings.disabledPages.includes(id)
      ? settings.disabledPages.filter(p=>p!==id)
      : [...settings.disabledPages, id];
    onChange({...settings, disabledPages: dis});
  };
  const enableAll = () => onChange({...settings, disabledPages:[]});

  return (
    <div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1rem'}}>
        <span style={{fontSize:'0.8125rem',color:'var(--t2)'}}>{settings.disabledPages.length} сторінок вимкнено</span>
        <Btn small onClick={enableAll}>Увімкнути всі</Btn>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(180px,1fr))',gap:'0.5rem'}}>
        {ALL_PAGES.map(p=>{
          const on = !settings.disabledPages.includes(p.id);
          return (
            <div key={p.id} onClick={()=>toggle(p.id)} style={{
              display:'flex',alignItems:'center',justifyContent:'space-between',
              padding:'0.625rem 0.75rem',borderRadius:4,cursor:'pointer',
              border:'1px solid '+(on?'var(--b1)':'var(--rust)'),
              background: on?'var(--s1)':'rgba(196,80,57,.06)',
            }}>
              <span style={{fontSize:'0.8125rem',color:on?'var(--t1)':'var(--rust)',fontWeight:on?400:500}}>{p.label}</span>
              <span style={{fontSize:'0.6875rem',color:on?'var(--t3)':'var(--rust)'}}>{on?'ON':'OFF'}</span>
            </div>
          );
        })}
      </div>
      <div style={{marginTop:'1.5rem'}}>
        <Tog on={settings.maintenanceMode} onChange={v=>onChange({...settings,maintenanceMode:v})} label="Режим обслуговування (показувати заглушку)"/>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   TAB: ANNOUNCEMENT
══════════════════════════════════════════════════════════════════ */
const AnnounceTab = ({ settings, onChange }) => (
  <div>
    <div style={{marginBottom:'1rem'}}>
      <Tog on={settings.announcementEnabled} onChange={v=>onChange({...settings,announcementEnabled:v})} label="Показувати банер оголошення"/>
    </div>
    {settings.announcementEnabled && <>
      <F label="Текст оголошення" value={settings.announcementText||''} onChange={v=>onChange({...settings,announcementText:v})}/>
      <div style={{marginBottom:'0.75rem'}}>
        <div style={{fontSize:'0.6875rem',fontWeight:600,letterSpacing:'0.06em',color:'var(--t3)',textTransform:'uppercase',marginBottom:'0.375rem'}}>Тип</div>
        <div style={{display:'flex',gap:'0.5rem'}}>
          {['info','warning','success','error'].map(t=>(
            <button key={t} onClick={()=>onChange({...settings,announcementType:t})} style={{
              padding:'0.375rem 0.75rem',borderRadius:4,fontSize:'0.75rem',cursor:'pointer',fontWeight:500,
              border:'1px solid '+(settings.announcementType===t?'var(--ac)':'var(--b2)'),
              background: settings.announcementType===t?'var(--ac)':'var(--s1)',
              color: settings.announcementType===t?'#fff':'var(--t2)',
            }}>{t}</button>
          ))}
        </div>
      </div>
      {settings.announcementText && (
        <div style={{
          padding:'0.75rem 1rem',borderRadius:4,marginTop:'0.75rem',
          background: settings.announcementType==='warning'?'rgba(224,120,48,.12)':settings.announcementType==='error'?'rgba(196,80,57,.12)':settings.announcementType==='success'?'rgba(58,140,92,.12)':'rgba(0,90,184,.08)',
          border: '1px solid '+(settings.announcementType==='warning'?'var(--ac)':settings.announcementType==='error'?'var(--rust)':settings.announcementType==='success'?'var(--gr)':'var(--wuf-blue)'),
          fontSize:'0.875rem',color:'var(--t1)',
        }}>
          Прев'ю: {settings.announcementText}
        </div>
      )}
    </>}
  </div>
);

/* ══════════════════════════════════════════════════════════════════
   TAB: CERTIFICATES
══════════════════════════════════════════════════════════════════ */
const CertsTab = () => {
  const [certs, setCerts] = React.useState(getCerts);
  const del = id => {
    if(!window.confirm('Видалити сертифікат?')) return;
    localStorage.removeItem('donntu_cert_'+id);
    setCerts(getCerts());
    addLog(`Сертифікат ${id} видалено`);
  };
  const fmtDate = ts => ts ? new Date(ts).toLocaleDateString('uk') : '—';
  return (
    <div>
      <div style={{marginBottom:'1rem',fontSize:'0.8125rem',color:'var(--t2)'}}>Всього: {certs.length} сертифікатів</div>
      {certs.length === 0
        ? <p style={{color:'var(--t3)',fontSize:'0.8125rem'}}>Сертифікати ще не видавались.</p>
        : <div style={{border:'1px solid var(--b1)',borderRadius:6,overflow:'hidden'}}>
            {certs.map((c,i)=>(
              <div key={c.id} style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0.625rem 1rem',borderBottom:i<certs.length-1?'1px solid var(--b1)':'none',background:i%2?'var(--s1)':'var(--bg)'}}>
                <div>
                  <div style={{fontSize:'0.8125rem',fontWeight:600,color:'var(--t1)'}}>{c.name||'—'}</div>
                  <div style={{fontSize:'0.75rem',color:'var(--t3)'}}>{c.id} · {fmtDate(c.issuedAt)}</div>
                </div>
                <Btn small danger onClick={()=>del(c.id)}>✕</Btn>
              </div>
            ))}
          </div>
      }
      {certs.length > 0 && (
        <div style={{marginTop:'1rem'}}>
          <Btn danger onClick={()=>{
            if(!window.confirm('Видалити ВСІ сертифікати?')) return;
            getCerts().forEach(c=>localStorage.removeItem('donntu_cert_'+c.id));
            setCerts([]);
            addLog('Всі сертифікати видалено');
          }}>Видалити всі сертифікати</Btn>
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   TAB: ANALYTICS
══════════════════════════════════════════════════════════════════ */
const AnalyticsTab = () => {
  const visits = (() => { try{return JSON.parse(localStorage.getItem(VISITS_KEY)||'{}');}catch{return {};} })();
  const all = Object.entries(visits).sort((a,b)=>b[1]-a[1]);
  const total = all.reduce((s,[,n])=>s+n,0);
  const maxV = all.length ? all[0][1] : 1;
  return (
    <div>
      <div style={{display:'flex',gap:'0.75rem',marginBottom:'1.5rem'}}>
        <div style={{background:'var(--s1)',border:'1px solid var(--b1)',borderRadius:6,padding:'1rem',flex:1}}>
          <div style={{fontSize:'1.75rem',fontWeight:700,color:'var(--ac)',fontFamily:'var(--display)'}}>{total}</div>
          <div style={{fontSize:'0.75rem',color:'var(--t2)',marginTop:'0.25rem'}}>Всього переглядів</div>
        </div>
        <div style={{background:'var(--s1)',border:'1px solid var(--b1)',borderRadius:6,padding:'1rem',flex:1}}>
          <div style={{fontSize:'1.75rem',fontWeight:700,color:'var(--wuf-blue)',fontFamily:'var(--display)'}}>{all.length}</div>
          <div style={{fontSize:'0.75rem',color:'var(--t2)',marginTop:'0.25rem'}}>Унікальних сторінок</div>
        </div>
      </div>
      <Divider title="Всі сторінки"/>
      {all.length === 0
        ? <p style={{color:'var(--t3)',fontSize:'0.8125rem'}}>Даних немає.</p>
        : all.map(([page,count])=>(
          <div key={page} style={{display:'flex',alignItems:'center',gap:'0.75rem',marginBottom:'0.5rem'}}>
            <div style={{width:120,fontSize:'0.8125rem',color:'var(--t1)',fontWeight:500,flexShrink:0}}>{page}</div>
            <div style={{flex:1,height:10,background:'var(--s2)',borderRadius:5,overflow:'hidden'}}>
              <div style={{width:`${(count/maxV)*100}%`,height:'100%',background:'var(--wuf-blue)',borderRadius:5}}/>
            </div>
            <div style={{width:32,fontSize:'0.8125rem',color:'var(--t2)',textAlign:'right',fontWeight:600}}>{count}</div>
          </div>
        ))
      }
      {all.length > 0 && (
        <div style={{marginTop:'1rem'}}>
          <Btn danger onClick={()=>{ if(!window.confirm('Очистити всю аналітику?'))return; localStorage.removeItem(VISITS_KEY); window.location.reload(); }}>Очистити аналітику</Btn>
        </div>
      )}
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   TAB: SYSTEM SETTINGS
══════════════════════════════════════════════════════════════════ */
const SystemTab = ({ settings, onChange }) => {
  const [newPin, setNewPin] = React.useState('');
  const [pinMsg, setPinMsg] = React.useState('');

  const handlePin = () => {
    if (newPin.length < 4) { setPinMsg('PIN має бути ≥ 4 символів'); return; }
    localStorage.setItem('donntu_admin_pin', newPin);
    setPinMsg('PIN змінено!');
    setNewPin('');
    setTimeout(()=>setPinMsg(''),2000);
    addLog('PIN адмін-панелі змінено');
  };

  const storageUsed = (() => {
    try {
      let total=0;
      for(let k in localStorage) {
        if(localStorage.hasOwnProperty(k)) total+=(localStorage[k].length+k.length)*2;
      }
      return (total/1024).toFixed(1)+' KB';
    } catch{return '?';}
  })();

  return (
    <div>
      <Divider title="PIN-код адмін-панелі"/>
      <div style={{display:'flex',gap:'0.5rem',alignItems:'flex-end',marginBottom:'0.5rem'}}>
        <div style={{flex:1}}>
          <F label="Новий PIN" value={newPin} onChange={setNewPin} placeholder="мін. 4 символи" mono/>
        </div>
        <div style={{marginBottom:'0.75rem'}}>
          <Btn primary onClick={handlePin}>Змінити</Btn>
        </div>
      </div>
      {pinMsg && <div style={{fontSize:'0.8125rem',color:'var(--gr)',marginBottom:'0.75rem'}}>{pinMsg}</div>}

      <Divider title="Інтерфейс"/>
      <div style={{display:'flex',flexDirection:'column',gap:'0.75rem'}}>
        <Tog on={settings.showAdminBadge} onChange={v=>onChange({...settings,showAdminBadge:v})} label="Показувати значок адміна у навбарі"/>
      </div>

      <Divider title="Системна інформація"/>
      <div style={{background:'var(--s1)',border:'1px solid var(--b1)',borderRadius:6,padding:'1rem'}}>
        {[
          ['Версія білду', settings.buildVersion||'V · 2026.05'],
          ['Використання localStorage', storageUsed],
          ['Кількість сертифікатів', getCerts().length],
          ['Подій у журналі', getLog().length],
        ].map(([k,v])=>(
          <div key={k} style={{display:'flex',justifyContent:'space-between',padding:'0.375rem 0',borderBottom:'1px solid var(--b1)'}}>
            <span style={{fontSize:'0.8125rem',color:'var(--t2)'}}>{k}</span>
            <span style={{fontSize:'0.8125rem',color:'var(--t1)',fontWeight:600,fontFamily:'var(--mono)'}}>{v}</span>
          </div>
        ))}
      </div>

      <Divider title="Небезпечна зона"/>
      <div style={{display:'flex',gap:'0.5rem',flexWrap:'wrap'}}>
        <Btn danger onClick={()=>{
          if(!window.confirm('Скинути всі налаштування адмін-панелі?'))return;
          localStorage.removeItem(STORE_KEY);
          addLog('Налаштування скинуто');
          window.location.reload();
        }}>Скинути налаштування</Btn>
        <Btn danger onClick={()=>{
          if(!window.confirm('Вийти з адмін-сесії?'))return;
          localStorage.removeItem(SESSION_KEY);
          window.location.reload();
        }}>Вийти з сесії</Btn>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════
   MAIN: AdminPage
══════════════════════════════════════════════════════════════════ */
const TABS = [
  { id:'dash',     icon:'▦', label:'Дашборд' },
  { id:'content',  icon:'✎', label:'Контент' },
  { id:'pages',    icon:'≡', label:'Сторінки' },
  { id:'announce', icon:'⊙', label:'Банер' },
  { id:'certs',    icon:'✦', label:'Серт.' },
  { id:'analytics',icon:'▸', label:'Аналітика' },
  { id:'system',   icon:'⚙', label:'Система' },
];

const AdminPage = ({ onNavigate }) => {
  const [pin, setPin]       = React.useState('');
  const [unlocked, setUnlocked] = React.useState(() => !!localStorage.getItem(SESSION_KEY));
  const [pinErr, setPinErr] = React.useState('');
  const [tab,  setTab]      = React.useState('dash');
  const [settings, setSettings] = React.useState(getSettings);

  const handleUnlock = () => {
    const stored = localStorage.getItem('donntu_admin_pin') || ADMIN_PIN;
    if (pin === stored) {
      localStorage.setItem(SESSION_KEY, '1');
      setUnlocked(true);
      addLog('Вхід в адмін-панель');
    } else {
      setPinErr('Невірний PIN');
      setTimeout(()=>setPinErr(''), 2000);
    }
  };

  const handleSettingsChange = s => {
    setSettings(s);
    saveSettings(s);
    addLog('Налаштування змінено');
  };

  /* ── Lock screen ── */
  if (!unlocked) return (
    <div style={{minHeight:'60vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <div style={{
        background:'var(--s1)',border:'1px solid var(--b1)',borderRadius:8,
        padding:'2.5rem',width:320,textAlign:'center',
      }}>
        <div style={{fontSize:'2rem',marginBottom:'0.5rem'}}>⚙</div>
        <div style={{fontSize:'1.125rem',fontWeight:700,color:'var(--t1)',marginBottom:'0.25rem',fontFamily:'var(--display)'}}>Адмін-панель</div>
        <div style={{fontSize:'0.8125rem',color:'var(--t3)',marginBottom:'1.5rem'}}>Введіть PIN для входу</div>
        <input
          type="password"
          value={pin}
          onChange={e=>setPin(e.target.value)}
          onKeyDown={e=>e.key==='Enter'&&handleUnlock()}
          placeholder="PIN"
          autoFocus
          style={{
            width:'100%',textAlign:'center',letterSpacing:'0.2em',fontSize:'1.25rem',
            padding:'0.75rem',border:'1px solid var(--b1)',borderRadius:4,background:'var(--bg)',
            color:'var(--t1)',boxSizing:'border-box',outline:'none',marginBottom:'0.75rem',
          }}
        />
        {pinErr && <div style={{color:'var(--rust)',fontSize:'0.8125rem',marginBottom:'0.5rem'}}>{pinErr}</div>}
        <button onClick={handleUnlock} style={{
          width:'100%',padding:'0.75rem',background:'var(--ac)',color:'#fff',
          border:'none',borderRadius:4,fontSize:'0.9375rem',fontWeight:600,cursor:'pointer',
        }}>Увійти</button>
        <div style={{marginTop:'1rem',fontSize:'0.75rem',color:'var(--t3)'}}>За замовчуванням: 2026</div>
      </div>
    </div>
  );

  /* ── Admin UI ── */
  return (
    <div style={{display:'flex',minHeight:'calc(100vh - 64px)'}}>
      {/* Sidebar */}
      <nav style={{
        width:140,flexShrink:0,background:'var(--s1)',borderRight:'1px solid var(--b1)',
        padding:'1.5rem 0',position:'sticky',top:64,height:'calc(100vh - 64px)',
        overflowY:'auto',boxSizing:'border-box',
      }}>
        <div style={{padding:'0 1rem 1.25rem',borderBottom:'1px solid var(--b1)',marginBottom:'0.75rem'}}>
          <div style={{fontSize:'0.6875rem',fontWeight:700,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--t3)'}}>ADMIN</div>
          <div style={{fontSize:'0.75rem',color:'var(--t2)',marginTop:'0.125rem'}}>DonNTU OS</div>
        </div>
        {TABS.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            display:'flex',alignItems:'center',gap:'0.5rem',
            width:'100%',padding:'0.625rem 1rem',textAlign:'left',
            border:'none',cursor:'pointer',fontSize:'0.8125rem',
            background: tab===t.id ? 'rgba(224,120,48,.1)' : 'transparent',
            color: tab===t.id ? 'var(--ac)' : 'var(--t2)',
            fontWeight: tab===t.id ? 600 : 400,
            borderRight: tab===t.id ? '2px solid var(--ac)' : '2px solid transparent',
          }}>
            <span style={{fontSize:'0.875rem'}}>{t.icon}</span>
            {t.label}
          </button>
        ))}
        <div style={{padding:'1rem',marginTop:'auto',borderTop:'1px solid var(--b1)'}}>
          <button onClick={()=>{localStorage.removeItem(SESSION_KEY);window.location.reload();}} style={{
            fontSize:'0.75rem',color:'var(--t3)',background:'none',border:'none',cursor:'pointer',
          }}>↩ Вийти</button>
        </div>
      </nav>

      {/* Main */}
      <main style={{flex:1,padding:'1.5rem 2rem',overflowY:'auto',maxWidth:900,boxSizing:'border-box'}}>
        {/* Header */}
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'1.5rem'}}>
          <div>
            <h1 style={{fontSize:'1.25rem',fontWeight:700,color:'var(--t1)',fontFamily:'var(--display)',margin:0}}>{TABS.find(t=>t.id===tab)?.label}</h1>
            <div style={{fontSize:'0.75rem',color:'var(--t3)',marginTop:'0.125rem'}}>DonNTU Heritage OS · Адмін-панель</div>
          </div>
          <button onClick={()=>onNavigate('overview')} style={{
            fontSize:'0.8125rem',color:'var(--t2)',background:'var(--s1)',
            border:'1px solid var(--b1)',borderRadius:4,padding:'0.375rem 0.75rem',cursor:'pointer',
          }}>← На головну</button>
        </div>

        {/* Tab content */}
        {tab === 'dash'     && <DashTab settings={settings} onNavigate={onNavigate}/>}
        {tab === 'content'  && <ContentTab/>}
        {tab === 'pages'    && <PagesTab settings={settings} onChange={handleSettingsChange}/>}
        {tab === 'announce' && <AnnounceTab settings={settings} onChange={handleSettingsChange}/>}
        {tab === 'certs'    && <CertsTab/>}
        {tab === 'analytics'&& <AnalyticsTab/>}
        {tab === 'system'   && <SystemTab settings={settings} onChange={handleSettingsChange}/>}
      </main>
    </div>
  );
};

Object.assign(window, { AdminPage });
