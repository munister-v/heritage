/* Eras Comparison Page — interactive comparison across university history */
const ERAS = [
  { year:1921, name:'Заснування', period:'1921–1940',
    students:120, faculty:18, faculties:2, buildings:1, location:'Юзівка (Сталіно)',
    specialties:['Гірнича справа','Металургія'],
    highlight:'Юзівське гірниче училище — початок інженерної освіти на Донбасі.',
    rector:'М.М. Протод\'яконов',
    events:['Заснування Юзівського гірничого технікуму','Перші 120 студентів','2 спеціальності'],
    status:'foundation',
    desc:'Усе починалося з потреби Донбасу в інженерах. Регіон видобував вугілля та плавив метал, але не мав власних фахівців. Юзівське училище стало відповіддю на цей виклик.' },

  { year:1935, name:'Індустріалізація', period:'1935–1941',
    students:2800, faculty:180, faculties:5, buildings:3, location:'Сталіно (Донецьк)',
    specialties:['Гірництво','Металургія','Хімія','Геологія','Електротехніка'],
    highlight:'Донецький індустріальний інститут — кузня інженерних кадрів для індустріалізації.',
    rector:'О.Ф. Жданов',
    events:['Реорганізація в інститут','Будівництво головного корпусу (1936–1958)','Наукові лабораторії','5 факультетів'],
    status:'growth',
    desc:'Сталінська індустріалізація потребувала масової підготовки інженерів. Інститут виріс у 20 разів і став центром промислової науки Донбасу.' },

  { year:1945, name:'Повоєнне відновлення', period:'1943–1960',
    students:4200, faculty:290, faculties:7, buildings:6, location:'Сталіно (Донецьк)',
    specialties:['Гірництво','Металургія','Електротехніка','Будівництво','Геологія','Хімія','Машинобудування'],
    highlight:'Відбудова після евакуації. Новий головний корпус. Перші кандидатські дисертації.',
    rector:'П.Г. Нечипоренко',
    events:['Повернення з евакуації','Завершення головного корпусу (1958)','Перші аспіранти','Бібліотека: 200 000 томів'],
    status:'rebuild',
    desc:'Університет повернувся із евакуації у зруйноване місто. Студенти і викладачі відбудовували корпуси власними руками. До 1958 року постав величний головний корпус.' },

  { year:2000, name:'Розквіт', period:'1990–2013',
    students:18500, faculty:1200, faculties:12, buildings:22, location:'Донецьк',
    specialties:['Гірництво','Металургія','IT','Електротехніка','Будівництво','Екологія','Економіка','Менеджмент','Архітектура','Хімія','Геологія','Автоматизація'],
    highlight:'DonNTU — один з найбільших технічних університетів України. 18 500 студентів, 22 корпуси.',
    rector:'О.А. Мінаєв',
    events:['Статус національного університету','22 навчальні корпуси','Бібліотека: 1.2 млн томів','12 факультетів','Партнерства з ЄС','5 гуртожитків'],
    status:'peak',
    desc:'Золота ера DonNTU. Університет входив до топ-10 технічних ВНЗ України. 12 факультетів, міжнародні програми, сучасні лабораторії. Донецьк був гордий своїм політехом.' },

  { year:2014, name:'Переміщення', period:'2014–2019',
    students:3200, faculty:420, faculties:8, buildings:0, location:'Покровськ → Красноармійськ',
    specialties:['Гірництво','IT','Електротехніка','Будівництво','Екологія','Автоматизація','Архітектура','Кібербезпека'],
    highlight:'Окупація Донецька. Університет переміщується — без будівель, без обладнання, без бібліотеки.',
    rector:'В.П. Бурлака',
    events:['Окупація кампусу','Переміщення до Покровська','Тимчасові аудиторії','Дистанційне навчання','Збереження акредитації'],
    status:'crisis',
    desc:'14 квітня 2014 — дата, яка змінила все. Озброєні люди зайняли головний корпус. Університет втратив 22 корпуси, 5 гуртожитків, 1.2 млн книг, 22 лабораторії. Але не зупинився.' },

  { year:2026, name:'Відродження', period:'2020–н.ч.',
    students:4800, faculty:580, faculties:9, buildings:5, location:'Луцьк · Дрогобич · Київ',
    specialties:['Гірництво','IT','Кібербезпека','Електротехніка','Будівництво','Екологія','Автоматизація','Архітектура','Відновлювальна енергетика'],
    highlight:'Луцьк — новий дім. 5 корпусів, 12 лабораторій, міжнародні партнерства. DonNTU живий.',
    rector:'В.П. Бурлака',
    events:['Переїзд до Луцька','3 навчальні корпуси','12 нових лабораторій','2 гуртожитки','Кампус у Дрогобичі','Представництво у Києві','Erasmus+, DAAD партнерства'],
    status:'rebirth',
    desc:'Луцьк прийняв DonNTU як свій. Новий кампус, нові лабораторії, нові партнерства. Студентів менше, але якість вища. Університет готує інженерів для відбудови Донбасу.' },
];

const ERA_COMPARE_FIELDS = [
  { key:'students', label:'Студентів', format: v => v.toLocaleString('uk-UA') },
  { key:'faculty', label:'Викладачів', format: v => v.toLocaleString('uk-UA') },
  { key:'faculties', label:'Факультетів', format: v => v },
  { key:'buildings', label:'Корпусів', format: v => v },
  { key:'location', label:'Локація', format: v => v },
];

const ErasPage = ({ onNavigate }) => {
  const [selectedEra, setSelectedEra] = React.useState(5);
  const [compareMode, setCompareMode] = React.useState(false);
  const [compareEra, setCompareEra] = React.useState(0);

  const era = ERAS[selectedEra];
  const cmpEra = ERAS[compareEra];

  const statusColors = {
    foundation:'var(--t2)', growth:'var(--sage)', rebuild:'var(--amber)',
    peak:'var(--sage)', crisis:'var(--rust)', rebirth:'var(--amber)',
  };
  const statusLabels = {
    foundation:'ЗАСНУВАННЯ', growth:'ЗРОСТАННЯ', rebuild:'ВІДБУДОВА',
    peak:'РОЗКВІТ', crisis:'КРИЗА', rebirth:'ВІДРОДЖЕННЯ',
  };

  return (
    <div className="page">
      <span className="lbl">18 · ПОРІВНЯННЯ ЕПОХ</span>

      <div style={{marginTop:'1.5rem'}}>
        <h1 className="h1" style={{fontSize:'2.25rem',lineHeight:1.15}}>
          105 років — одна <em>історія.</em>
        </h1>
        <p className="body" style={{marginTop:'1rem',maxWidth:'560px'}}>
          Оберіть епоху та побачте, як змінювався DonNTU: скільки студентів, які факультети, де знаходився, чим жив. Від 120 студентів у 1921 до 18 500 у розквіті — і до 4 800 у відродженні.
        </p>
      </div>

      {/* Era selector */}
      <div style={{display:'flex',gap:'0.5rem',marginTop:'2rem',flexWrap:'wrap'}}>
        {ERAS.map((e,i) => (
          <button key={i}
            style={{padding:'0.625rem 1rem',border:'1px solid '+(selectedEra===i?'var(--amber)':'var(--border)'),background:selectedEra===i?'var(--s1)':'transparent',cursor:'pointer',color:selectedEra===i?'var(--amber)':'var(--t1)',fontSize:'0.8125rem',flex:'1 1 auto',textAlign:'center',minWidth:'100px'}}
            onClick={() => setSelectedEra(i)}>
            <div style={{fontSize:'1.25rem',fontWeight:600}}>{e.year}</div>
            <div className="caption" style={{marginTop:'0.25rem'}}>{e.name}</div>
          </button>
        ))}
      </div>

      {/* Selected era details */}
      <div className="gc gc-gold" style={{padding:'1.5rem',marginTop:'1.5rem'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:'1rem'}}>
          <div>
            <span className="lbl lbl-gold">{era.period}</span>
            <h2 className="h1" style={{fontSize:'1.75rem',marginTop:'0.5rem'}}>{era.name}</h2>
            <span className="caption" style={{color:'var(--t3)'}}>{era.location}</span>
          </div>
          <Badge status={era.status==='peak'||era.status==='growth'?'completed':era.status==='crisis'?'elevated':'now'} label={statusLabels[era.status]} />
        </div>
        <p className="body" style={{marginTop:'1rem',fontSize:'0.875rem'}}>{era.desc}</p>
        <div style={{marginTop:'0.75rem'}}>
          <span className="caption" style={{color:'var(--t3)'}}>Ректор: {era.rector}</span>
        </div>
      </div>

      {/* Stats grid */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'0.75rem',marginTop:'1.5rem'}}>
        <div className="gc" style={{padding:'1rem',textAlign:'center'}}>
          <div className="serif tg" style={{fontSize:'1.375rem',fontWeight:500}}>{era.students.toLocaleString('uk-UA')}</div>
          <div className="lbl" style={{marginTop:'0.5rem'}}>Студентів</div>
        </div>
        <div className="gc" style={{padding:'1rem',textAlign:'center'}}>
          <div className="serif tg" style={{fontSize:'1.375rem',fontWeight:500}}>{era.faculty}</div>
          <div className="lbl" style={{marginTop:'0.5rem'}}>Викладачів</div>
        </div>
        <div className="gc" style={{padding:'1rem',textAlign:'center'}}>
          <div className="serif tg" style={{fontSize:'1.375rem',fontWeight:500}}>{era.faculties}</div>
          <div className="lbl" style={{marginTop:'0.5rem'}}>Факультетів</div>
        </div>
        <div className="gc" style={{padding:'1rem',textAlign:'center'}}>
          <div className="serif tg" style={{fontSize:'1.375rem',fontWeight:500}}>{era.buildings}</div>
          <div className="lbl" style={{marginTop:'0.5rem'}}>Корпусів</div>
        </div>
        <div className="gc" style={{padding:'1rem',textAlign:'center'}}>
          <div className="serif tg" style={{fontSize:'1.375rem',fontWeight:500}}>{era.specialties.length}</div>
          <div className="lbl" style={{marginTop:'0.5rem'}}>Спеціальностей</div>
        </div>
      </div>

      {/* Specialties */}
      <div className="div-row" style={{marginTop:'2rem'}}>
        <span className="lbl">СПЕЦІАЛЬНОСТІ · {era.year}</span>
        <div className="div-line"></div>
      </div>
      <div style={{display:'flex',gap:'0.5rem',marginTop:'0.75rem',flexWrap:'wrap'}}>
        {era.specialties.map((s,i) => (
          <span key={i} style={{padding:'0.375rem 0.75rem',border:'1px solid var(--border)',fontSize:'0.75rem',color:'var(--t2)'}}>{s}</span>
        ))}
      </div>

      {/* Key events */}
      <div className="div-row" style={{marginTop:'2rem'}}>
        <span className="lbl">КЛЮЧОВІ ПОДІЇ</span>
        <div className="div-line"></div>
      </div>
      <div style={{marginTop:'0.75rem'}}>
        {era.events.map((ev,i) => (
          <div key={i} style={{display:'flex',alignItems:'center',gap:'0.75rem',padding:'0.5rem 0',borderBottom:'1px solid var(--border)'}}>
            <span style={{color:'var(--amber)',fontSize:'0.625rem'}}>●</span>
            <span className="body" style={{fontSize:'0.875rem'}}>{ev}</span>
          </div>
        ))}
      </div>

      {/* Compare mode */}
      <div className="div-row" style={{marginTop:'2.5rem'}}>
        <span className="lbl">ПОРІВНЯННЯ ЕПОХ</span>
        <div className="div-line"></div>
      </div>
      <p className="caption" style={{marginTop:'0.5rem',color:'var(--t3)'}}>
        Порівняйте {era.year} рік з іншою епохою:
      </p>
      <div style={{display:'flex',gap:'0.5rem',marginTop:'0.75rem',flexWrap:'wrap'}}>
        {ERAS.map((e,i) => i !== selectedEra && (
          <button key={i}
            style={{padding:'0.375rem 0.75rem',border:'1px solid '+(compareEra===i?'var(--amber)':'var(--border)'),background:compareEra===i?'var(--s1)':'transparent',cursor:'pointer',color:compareEra===i?'var(--amber)':'var(--t1)',fontSize:'0.75rem'}}
            onClick={() => { setCompareEra(i); setCompareMode(true); }}>
            {e.year} · {e.name}
          </button>
        ))}
      </div>

      {compareMode && (
        <div style={{marginTop:'1rem'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:'0.8125rem'}}>
            <thead>
              <tr style={{borderBottom:'2px solid var(--border)'}}>
                <th style={{padding:'0.75rem',textAlign:'left',color:'var(--t3)',fontWeight:400}}>ПОКАЗНИК</th>
                <th style={{padding:'0.75rem',textAlign:'center',color:'var(--amber)',fontWeight:500}}>{era.year} · {era.name}</th>
                <th style={{padding:'0.75rem',textAlign:'center',color:'var(--t2)',fontWeight:500}}>{cmpEra.year} · {cmpEra.name}</th>
              </tr>
            </thead>
            <tbody>
              {ERA_COMPARE_FIELDS.map((f,i) => (
                <tr key={i} style={{borderBottom:'1px solid var(--border)'}}>
                  <td className="caption" style={{padding:'0.75rem',color:'var(--t3)'}}>{f.label}</td>
                  <td style={{padding:'0.75rem',textAlign:'center',fontWeight:500}}>{f.format(era[f.key])}</td>
                  <td style={{padding:'0.75rem',textAlign:'center',color:'var(--t2)'}}>{f.format(cmpEra[f.key])}</td>
                </tr>
              ))}
              <tr style={{borderBottom:'1px solid var(--border)'}}>
                <td className="caption" style={{padding:'0.75rem',color:'var(--t3)'}}>Спеціальностей</td>
                <td style={{padding:'0.75rem',textAlign:'center',fontWeight:500}}>{era.specialties.length}</td>
                <td style={{padding:'0.75rem',textAlign:'center',color:'var(--t2)'}}>{cmpEra.specialties.length}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {/* Quote */}
      <div className="gc gc-gold" style={{padding:'1.5rem',marginTop:'2.5rem',textAlign:'center'}}>
        <blockquote className="serif" style={{fontSize:'1.125rem',lineHeight:1.6,fontStyle:'italic'}}>
          «{era.highlight}»
        </blockquote>
      </div>

      <Inst />
    </div>
  );
};

window.ErasPage = ErasPage;
