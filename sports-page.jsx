/* Sports Page — teams, achievements, sections */
const SPORT_TEAMS = [
  { name:'Футбол «Шахтар-Політех»', type:'team', sport:'Футбол', members:22, founded:1965, status:'active',
    desc:'Історична команда, яка грала у другій лізі СРСР. Після переміщення відновлена у Луцьку. Тренується на стадіоні «Авангард». Чемпіон обласних студентських ліг 2024–2025.',
    achievements:['Чемпіон обласної ліги 2024','Півфінал Універсіади 2025','Кубок ректора — 8 перемог','Друга ліга СРСР (1972–1985)'],
    coach:'О. Демченко' },
  { name:'Баскетбол', type:'team', sport:'Баскетбол', members:14, founded:1958, status:'active',
    desc:'Чоловіча та жіноча команди. Жіноча — бронзові призерки Універсіади 2024. Регулярні турніри з іншими технічними університетами.',
    achievements:['Бронза Універсіади (жін.) 2024','Чемпіон міжвузівського турніру 2023','Кубок Волині 2025'],
    coach:'Т. Коваль' },
  { name:'Волейбол', type:'team', sport:'Волейбол', members:16, founded:1970, status:'active',
    desc:'Найсильніша команда серед переміщених університетів. Перемога в турнірі «Незламні» 2024 — змагання для ВНЗ, що пережили переміщення.',
    achievements:['Перемога «Незламні» 2024','Ліга університетів — 2 місце 2025','Чемпіон Донецької області (2012)'],
    coach:'І. Савчук' },
  { name:'Шахи', type:'team', sport:'Шахи', members:12, founded:1935, status:'active',
    desc:'Одна з найстаріших секцій. Донбас — регіон сильних шахістів. DonNTU виховав 3 майстрів спорту. Онлайн-турніри з міжнародними партнерами.',
    achievements:['3 майстри спорту','Чемпіон серед ВНЗ Волині 2024','Міжнародний онлайн-турнір — 2 місце','Чемпіонат УРСР (1978) — 3 місце'],
    coach:'В. Литвиненко' },
  { name:'Легка атлетика', type:'team', sport:'Легка атлетика', members:18, founded:1950, status:'active',
    desc:'Біг, стрибки, метання. 5 студентів-атлетів — кандидати в майстри спорту. Щорічний крос «Пам\'яті Донбасу» — 200+ учасників.',
    achievements:['5 КМС серед студентів','Крос «Пам\'яті Донбасу» — 200+ учасників','Обласна першість — 4 золоті медалі 2025'],
    coach:'Р. Бондар' },
  { name:'Плавання', type:'team', sport:'Плавання', members:10, founded:1975, status:'limited',
    desc:'Секція працює обмежено через відсутність власного басейну після переміщення. Використовують міський басейн Луцька за графіком. 3 перемоги на обласних змаганнях.',
    achievements:['3 перемоги на обласних змаганнях','Марафон «Переплисти Стир» 2024','Міжвузівський турнір — 2 місце'],
    coach:'Н. Зінченко' },
];

const SPORT_SECTIONS = [
  { name:'Тхеквондо', members:15, schedule:'Пн/Ср/Пт 18:00', level:'Розряди та КМС',
    desc:'Секція створена після переміщення у 2015 р. 2 кандидати в майстри спорту. Виступи на чемпіонатах Волинської області.' },
  { name:'Настільний теніс', members:20, schedule:'Щодня 17:00–20:00', level:'Аматорський та розрядний',
    desc:'Найпопулярніша секція за кількістю учасників. Доступна у гуртожитку. Щомісячні турніри.' },
  { name:'Фітнес та кросфіт', members:35, schedule:'Пн–Пт 7:00 та 19:00', level:'Всі рівні',
    desc:'Тренажерний зал у спортивному блоці. Груповий кросфіт двічі на день. Популярна серед викладачів.' },
  { name:'Туризм та скелелазіння', members:12, schedule:'Ср/Сб', level:'Спортивний туризм',
    desc:'Пішохідний та скельний туризм. Щомісячні виходи. Волинь надає чудові маршрути.' },
  { name:'Кіберспорт', members:28, schedule:'Щодня онлайн', level:'Аматорський та змагальний',
    desc:'CS2, Dota 2, Valorant. Команда DonNTU Miners — учасники UESF (Українська кіберспортивна федерація). Онлайн-ліга університетів.' },
  { name:'Йога та медитація', members:18, schedule:'Вт/Чт 8:00', level:'Всі рівні',
    desc:'Програма стрес-менеджменту для студентів та викладачів. Особливо важлива для переміщених, що пережили стрес війни.' },
];

const SPORT_EVENTS = [
  { name:'Крос «Пам\'яті Донбасу»', date:'Вересень', type:'Масовий забіг', participants:'200+',
    desc:'Щорічний забіг на честь загиблих. 5 км та 10 км дистанції. Відкритий для всіх.' },
  { name:'Універсіада України', date:'Травень', type:'Всеукраїнський', participants:'Збірна DonNTU',
    desc:'Головне студентське спортивне змагання. DonNTU виступає у 6 видах спорту.' },
  { name:'Турнір «Незламні»', date:'Листопад', type:'Міжвузівський', participants:'8 ВНЗ',
    desc:'Змагання для переміщених університетів. Волейбол, футбол, шахи, баскетбол.' },
  { name:'Спартакіада DonNTU', date:'Квітень', type:'Внутрішній', participants:'Всі факультети',
    desc:'Змагання між факультетами. 10 видів спорту. Кубок переможцю — на весь рік.' },
  { name:'Кубок ректора з футболу', date:'Жовтень', type:'Внутрішній', participants:'6 команд',
    desc:'Традиція з 1965 року. Факультетські команди + збірна викладачів.' },
];

const SPORT_STATS = [
  { v:'6', label:'Команд', desc:'Футбол, баскетбол, волейбол та ін.' },
  { v:'6', label:'Секцій', desc:'Від тхеквондо до кіберспорту' },
  { v:'155', label:'Спортсменів', desc:'Активних членів команд та секцій' },
  { v:'8', label:'КМС та МС', desc:'Кандидатів та майстрів спорту' },
  { v:'5', label:'Турнірів на рік', desc:'Від внутрішніх до всеукраїнських' },
  { v:'3', label:'Спортзали', desc:'У Луцьку та Дрогобичі' },
];

const SportsPage = ({ onNavigate }) => {
  const [expandedTeam, setExpandedTeam] = React.useState(null);
  const [tab, setTab] = React.useState('teams');

  return (
    <div className="page">
      <span className="lbl">23 · СПОРТ</span>

      <div style={{marginTop:'1.5rem'}}>
        <h1 className="h1" style={{fontSize:'2.25rem',lineHeight:1.15}}>
          Тіло та <em>дух.</em>
        </h1>
        <p className="body" style={{marginTop:'1rem',maxWidth:'580px'}}>
          Спорт — частина ДНК DonNTU. «Шахтар-Політех» грав у другій лізі СРСР. Після переміщення — відновили все. 6 команд, 6 секцій, 155 активних спортсменів. Щорічний крос «Пам'яті Донбасу» — 200+ учасників.
        </p>
      </div>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'0.75rem',marginTop:'2rem'}}>
        {SPORT_STATS.map((s,i) => (
          <div key={i} className="gc" style={{padding:'1rem',textAlign:'center'}}>
            <div className="serif tg" style={{fontSize:'1.375rem',fontWeight:500}}>{s.v}</div>
            <div className="lbl" style={{marginTop:'0.5rem'}}>{s.label}</div>
            <div className="caption" style={{marginTop:'0.25rem',color:'var(--t3)'}}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{display:'flex',gap:'0.5rem',marginTop:'2.5rem'}}>
        {[{k:'teams',l:'Команди'},{k:'sections',l:'Секції'},{k:'events',l:'Турніри'}].map(t => (
          <button key={t.k} className={`lbl ${tab===t.k?'lbl-gold':''}`} onClick={() => setTab(t.k)}
            style={{padding:'0.375rem 0.75rem',border:'1px solid var(--border)',borderRadius:'2px',background: tab===t.k ? 'rgba(196,132,52,0.1)' : 'transparent',cursor:'pointer',color: tab===t.k ? 'var(--amber)' : 'var(--t3)'}}>
            {t.l}
          </button>
        ))}
      </div>

      {/* Teams */}
      {tab==='teams' && (
        <div style={{marginTop:'1rem'}}>
          <div className="div-row">
            <span className="lbl">КОМАНДИ · {SPORT_TEAMS.length}</span>
            <div className="div-line"></div>
          </div>
          <div style={{display:'grid',gap:'0.75rem',marginTop:'1rem'}}>
            {SPORT_TEAMS.map((t,i) => (
              <div key={i} className="gc" style={{padding:'1.25rem',cursor:'pointer',borderColor: expandedTeam===i ? 'var(--amber)' : undefined}} onClick={() => setExpandedTeam(expandedTeam===i ? null : i)}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <div>
                    <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{t.name}</h4>
                    <span className="lbl" style={{marginTop:'0.25rem'}}>Тренер: {t.coach} · з {t.founded} р. · {t.members} осіб</span>
                  </div>
                  <Badge status={t.status==='active'?'completed':'open'} label={t.status==='active'?'АКТИВНА':'ОБМЕЖЕНО'} />
                </div>
                {expandedTeam===i && (
                  <div style={{marginTop:'1rem',borderTop:'1px solid var(--border)',paddingTop:'1rem'}}>
                    <p className="body" style={{fontSize:'0.8125rem'}}>{t.desc}</p>
                    <div className="lbl" style={{marginTop:'0.75rem'}}>ДОСЯГНЕННЯ</div>
                    <div style={{display:'flex',flexDirection:'column',gap:'0.375rem',marginTop:'0.5rem'}}>
                      {t.achievements.map((a,j) => (
                        <span key={j} className="mono" style={{fontSize:'0.6875rem',color:'var(--t2)'}}>→ {a}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sections */}
      {tab==='sections' && (
        <div style={{marginTop:'1rem'}}>
          <div className="div-row">
            <span className="lbl">СЕКЦІЇ · {SPORT_SECTIONS.length}</span>
            <div className="div-line"></div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'0.75rem',marginTop:'1rem'}}>
            {SPORT_SECTIONS.map((s,i) => (
              <div key={i} className="gc" style={{padding:'1.25rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                  <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{s.name}</h4>
                  <span className="mono" style={{fontSize:'0.6875rem',color:'var(--amber)'}}>{s.members} осіб</span>
                </div>
                <span className="lbl" style={{marginTop:'0.25rem',display:'block'}}>{s.schedule} · {s.level}</span>
                <p className="body" style={{marginTop:'0.75rem',fontSize:'0.8125rem',color:'var(--t2)'}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Events */}
      {tab==='events' && (
        <div style={{marginTop:'1rem'}}>
          <div className="div-row">
            <span className="lbl">ТУРНІРИ ТА ПОДІЇ · {SPORT_EVENTS.length}</span>
            <div className="div-line"></div>
          </div>
          <div style={{display:'grid',gap:'0.75rem',marginTop:'1rem'}}>
            {SPORT_EVENTS.map((e,i) => (
              <div key={i} className="gc" style={{padding:'1.25rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <div>
                    <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{e.name}</h4>
                    <span className="lbl" style={{marginTop:'0.25rem'}}>{e.type} · {e.date} · {e.participants} учасників</span>
                  </div>
                </div>
                <p className="body" style={{marginTop:'0.75rem',fontSize:'0.8125rem',color:'var(--t2)'}}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lost facilities */}
      <div className="gc gc-gold" style={{marginTop:'2.5rem',padding:'2rem',textAlign:'center'}}>
        <span className="lbl lbl-gold">ВТРАЧЕНА СПОРТИВНА БАЗА</span>
        <h3 className="serif tg" style={{fontSize:'1.25rem',marginTop:'0.75rem'}}>
          Стадіон «Політехнік» — 5 000 місць
        </h3>
        <p className="body" style={{marginTop:'1rem',maxWidth:'480px',margin:'1rem auto 0',fontSize:'0.8125rem',color:'var(--t2)'}}>
          У Донецьку залишились: стадіон на 5 000 місць, 2 спортзали, басейн 50 м, тенісні корти, легкоатлетичний манеж. Загальна площа спортивної інфраструктури — 12 000 м². Але дух — переїхав разом з нами.
        </p>
      </div>
    </div>
  );
};
