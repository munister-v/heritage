/* Culture Page — traditions, art, creative groups */
const CREATIVE_GROUPS = [
  { name:'Народний хор «Донбас»', type:'Хор', members:45, founded:1955, status:'active',
    desc:'Народний хор із 70-річною історією. Перший концерт — 1955, шахтарський клуб Донецька. Звання «Народний» — 1972. Після переміщення — відновлений у Луцьку. Репертуар: українські народні, шахтарські, патріотичні пісні.',
    achievements:['Звання «Народний» (1972)','Лауреат фестивалю «Студентська весна» — 12 разів','Концерт у Варшаві (2023)','Гімн DonNTU — офіційне виконання'] },
  { name:'Театр-студія «Горизонт»', type:'Театр', members:20, founded:1988, status:'active',
    desc:'Студентський театр. Від комедій до документальних вистав. Після 2014 — серія вистав про переміщення та ідентичність. «Адреса: тимчасова» — вистава про студентів-переселенців.',
    achievements:['«Адреса: тимчасова» — 30+ показів','Фестиваль «Мельпомена» — Гран-прі 2024','«Шахтарська балада» — документальна вистава','Турне 5 міст України'] },
  { name:'Ансамбль «Смолоскип»', type:'Танці', members:24, founded:1968, status:'active',
    desc:'Народний танцювальний ансамбль. Український, козацький, сучасний танець. Після переміщення — інтеграція волинських танцювальних традицій. Виступи на державних святах.',
    achievements:['Виступ на День Незалежності (Київ, 2024)','Фестиваль «Танці без кордонів» — 1 місце','Інтеграція донбаських та волинських традицій','Співпраця з ансамблем «Волиняночка»'] },
  { name:'Рок-гурт «Вугілля»', type:'Музика', members:5, founded:2019, status:'active',
    desc:'Студентський рок-гурт, створений після переміщення. Назва — дань гірничій історії. Жанр: інді-рок з фолковими елементами. Пісні про Донбас, переміщення, надію.',
    achievements:['Альбом «Переміщені ноти» (2023)','Фестиваль «Бандерштат» — виступ 2024','10 000+ прослуховувань на Spotify','Кліп «Адреса» — 50 000 переглядів'] },
  { name:'Літературний клуб «Лава»', type:'Література', members:15, founded:2015, status:'active',
    desc:'Поезія та проза про Донбас. Назва — подвійне значення: шахтарська лава та лава як потік. Щомісячні читання. Збірка «Переміщені слова» — 200 примірників.',
    achievements:['Збірка «Переміщені слова» (2022)','Публікації в «Літературній Україні»','Поетичний слем — 5 перемог','Колаборація з поетами з Маріуполя'] },
  { name:'Фотоклуб «Кадр»', type:'Фотографія', members:18, founded:2010, status:'active',
    desc:'Документальна та художня фотографія. Проект «До і після» — зйомка локацій DonNTU у Донецьку та нових містах. Виставки в Луцьку, Києві, Варшаві.',
    achievements:['Виставка «До і після» — 5 міст','Проект «Обличчя переміщення» — 200 портретів','Фотокнига «DonNTU: Два кампуси» (2024)','World Press Photo — шорт-ліст 2023'] },
];

const TRADITIONS = [
  { name:'День першокурсника', date:'1 вересня', since:1921,
    desc:'Найстаріша традиція. Посвята у студенти з 1921 року. Ректор вручає символічну лампу — «Вогонь знань». Після переміщення — додано ритуал «Вогонь, що переїхав».' },
  { name:'Шахтарський день', date:'Останній тиждень серпня', since:1948,
    desc:'Святкування Дня шахтаря — професійного свята, з яким історично пов\'язаний DonNTU. Лекції про гірничу справу, конкурс «Кращий молодий гірник».' },
  { name:'«Студентська весна»', date:'Квітень', since:1965,
    desc:'Фестиваль талантів: музика, танці, театр, гумор. Кожен факультет — окрема програма. Фінал — гала-концерт. Щороку — 500+ глядачів.' },
  { name:'Ніч науки', date:'Листопад', since:2018,
    desc:'Науково-популярний фестиваль. Лекції, експерименти, квести. Відкритий для всіх — від школярів до пенсіонерів. Традиція, народжена після переміщення.' },
  { name:'Випускний «Зоряний вечір»', date:'Червень', since:1960,
    desc:'Урочиста церемонія під відкритим небом. Випускники отримують дипломи та запалюють свічки — символ переданого знання. З 2015 — церемонія «Обіцянка повернутися».' },
  { name:'День вишиванки в DonNTU', date:'Третій четвер травня', since:2014,
    desc:'Масове носіння вишиванок. Після 2014 — особливе значення: демонстрація української ідентичності для університету з Донбасу.' },
];

const CULTURE_STATS = [
  { v:'6', label:'Творчих колективів', desc:'Хор, театр, танці, рок, поезія, фото' },
  { v:'127', label:'Учасників', desc:'Активних у творчих групах' },
  { v:'6', label:'Традицій', desc:'Від 1921 до сьогодні' },
  { v:'70+', label:'Років хору', desc:'Народний хор «Донбас»' },
  { v:'30+', label:'Показів', desc:'Вистави «Адреса: тимчасова»' },
  { v:'5', label:'Виставок', desc:'Фотопроект «До і після»' },
];

const CulturePage = ({ onNavigate }) => {
  const [expandedGroup, setExpandedGroup] = React.useState(null);
  const [tab, setTab] = React.useState('groups');

  return (
    <div className="page">
      <span className="lbl">25 · КУЛЬТУРА</span>

      <div style={{marginTop:'1.5rem'}}>
        <h1 className="h1" style={{fontSize:'2.25rem',lineHeight:1.15}}>
          Мистецтво <em>стійкості.</em>
        </h1>
        <p className="body" style={{marginTop:'1rem',maxWidth:'580px'}}>
          Хор із 70-річною історією. Театр, що грає про переміщення. Рок-гурт «Вугілля». Фотовиставка «До і після». Коли втрачаєш фізичний дім — культура стає тим, що тримає разом.
        </p>
      </div>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'0.75rem',marginTop:'2rem'}}>
        {CULTURE_STATS.map((s,i) => (
          <div key={i} className="gc" style={{padding:'1rem',textAlign:'center'}}>
            <div className="serif tg" style={{fontSize:'1.375rem',fontWeight:500}}>{s.v}</div>
            <div className="lbl" style={{marginTop:'0.5rem'}}>{s.label}</div>
            <div className="caption" style={{marginTop:'0.25rem',color:'var(--t3)'}}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{display:'flex',gap:'0.5rem',marginTop:'2.5rem'}}>
        {[{k:'groups',l:'Творчі колективи'},{k:'traditions',l:'Традиції'}].map(t => (
          <button key={t.k} className={`lbl ${tab===t.k?'lbl-gold':''}`} onClick={() => setTab(t.k)}
            style={{padding:'0.375rem 0.75rem',border:'1px solid var(--border)',borderRadius:'2px',background: tab===t.k ? 'rgba(196,132,52,0.1)' : 'transparent',cursor:'pointer',color: tab===t.k ? 'var(--amber)' : 'var(--t3)'}}>
            {t.l}
          </button>
        ))}
      </div>

      {/* Creative Groups */}
      {tab==='groups' && (
        <div style={{marginTop:'1rem'}}>
          <div className="div-row">
            <span className="lbl">ТВОРЧІ КОЛЕКТИВИ · {CREATIVE_GROUPS.length}</span>
            <div className="div-line"></div>
          </div>
          <div style={{display:'grid',gap:'0.75rem',marginTop:'1rem'}}>
            {CREATIVE_GROUPS.map((g,i) => (
              <div key={i} className="gc" style={{padding:'1.25rem',cursor:'pointer',borderColor: expandedGroup===i ? 'var(--amber)' : undefined}} onClick={() => setExpandedGroup(expandedGroup===i ? null : i)}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <div>
                    <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{g.name}</h4>
                    <span className="lbl" style={{marginTop:'0.25rem'}}>{g.type} · з {g.founded} р. · {g.members} учасників</span>
                  </div>
                  <Badge status="completed" label="АКТИВНИЙ" />
                </div>
                {expandedGroup===i && (
                  <div style={{marginTop:'1rem',borderTop:'1px solid var(--border)',paddingTop:'1rem'}}>
                    <p className="body" style={{fontSize:'0.8125rem'}}>{g.desc}</p>
                    <div className="lbl" style={{marginTop:'0.75rem'}}>ДОСЯГНЕННЯ</div>
                    <div style={{display:'flex',flexDirection:'column',gap:'0.375rem',marginTop:'0.5rem'}}>
                      {g.achievements.map((a,j) => (
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

      {/* Traditions */}
      {tab==='traditions' && (
        <div style={{marginTop:'1rem'}}>
          <div className="div-row">
            <span className="lbl">ТРАДИЦІЇ · {TRADITIONS.length}</span>
            <div className="div-line"></div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1rem',marginTop:'1rem'}}>
            {TRADITIONS.map((t,i) => (
              <div key={i} className="gc" style={{padding:'1.25rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                  <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{t.name}</h4>
                  <span className="mono" style={{fontSize:'0.6875rem',color:'var(--amber)'}}>з {t.since}</span>
                </div>
                <span className="lbl" style={{marginTop:'0.25rem',display:'block'}}>{t.date}</span>
                <p className="body" style={{marginTop:'0.75rem',fontSize:'0.8125rem',color:'var(--t2)'}}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Cultural identity */}
      <div className="gc gc-gold" style={{marginTop:'2.5rem',padding:'2rem',textAlign:'center'}}>
        <span className="lbl lbl-gold">КУЛЬТУРНА ІДЕНТИЧНІСТЬ</span>
        <h3 className="serif tg" style={{fontSize:'1.25rem',marginTop:'0.75rem'}}>
          Донбас + Волинь = нова традиція
        </h3>
        <p className="body" style={{marginTop:'1rem',maxWidth:'520px',margin:'1rem auto 0',fontSize:'0.8125rem',color:'var(--t2)'}}>
          Переміщення створило унікальний культурний сплав. Шахтарські пісні хору «Донбас» поєднуються з волинськими колядками. Танцювальний ансамбль «Смолоскип» інтегрує козацькі та поліські танці. Це не втрата ідентичності — це її збагачення. DonNTU стає мостом між Сходом та Заходом України.
        </p>
      </div>
    </div>
  );
};
