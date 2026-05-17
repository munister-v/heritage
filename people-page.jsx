/* People Page — faculty, students, community */
const FACULTY_PROFILES = [
  { name:'Проф. О. Коваленко', dept:'Гірнича інженерія', years:'1984–н.ч.', role:'Завідувач кафедри', status:'active',
    desc:'42 роки в DonNTU. Пережив обидва переміщення. Автор 180+ наукових праць з підземної розробки родовищ. Підготував 12 кандидатів та 3 докторів наук.',
    quote:'Я прийшов сюди студентом у 1984. Відтоді змінилося все — крім якості наших інженерів.' },
  { name:'Доц. М. Лисенко', dept:'Архітектура', years:'1987–н.ч.', role:'Доцент', status:'active',
    desc:'Випускниця 1987 року. Спеціаліст з промислової архітектури Донбасу. Документує архітектурну спадщину зруйнованих міст. Автор проекту «Пам\'ять міст».',
    quote:'Кожна будівля — це книга. Коли її руйнують, ми втрачаємо сторінки історії. Моя робота — зберегти текст.' },
  { name:'Проф. В. Бондаренко', dept:'Електропривод', years:'1990–н.ч.', role:'Професор', status:'active',
    desc:'Доктор технічних наук. Розробник систем автоматизації для шахт Донбасу. 200+ впроваджень на підприємствах. Нагорода «Заслужений винахідник України».',
    quote:'Кожна моя розробка працювала на шахтах, яких більше немає. Але знання залишились — і вони потрібні для відбудови.' },
  { name:'Доц. І. Петренко', dept:'Кібербезпека', years:'2008–н.ч.', role:'Завідувач кафедри', status:'active',
    desc:'Наймолодший завідувач кафедри в історії DonNTU. Спеціаліст з захисту промислових систем. Співпраця з НАТО та ЄС у сфері кіберзахисту критичної інфраструктури.',
    quote:'Війна показала, що кібербезпека — не абстракція. Це захист електростанцій, водопроводів, лікарень.' },
  { name:'Ст. викл. Н. Ткаченко', dept:'Екологія', years:'2012–н.ч.', role:'Старший викладач', status:'active',
    desc:'Дослідниця екологічних наслідків війни на Донбасі. Грантові проекти з ЄС та ЮНЕП. Моніторинг забруднення ґрунтів та водойм у зоні бойових дій.',
    quote:'Війна забруднює не тільки душі — вона отруює землю на десятиліття. Ми документуємо, щоб знати, що відновлювати.' },
  { name:'Проф. С. Григоренко', dept:'Металургія', years:'1995–н.ч.', role:'Професор', status:'active',
    desc:'Фахівець з нових матеріалів та технологій лиття. Консультант Укрметалургпрому. Автор 15 патентів. Працює над технологіями переробки залізобетонних конструкцій зруйнованих будівель.',
    quote:'Уламки зруйнованих будинків — це не сміття. Це ресурс для відбудови. Ми розробляємо технології їх переробки.' },
];

const STUDENT_STORIES = [
  { name:'Анна Шевченко', program:'Кібербезпека · 4 курс', from:'Краматорськ', year:2022,
    story:'Вступила під час повномасштабного вторгнення. Навчається дистанційно з Дніпра. Розробляє систему моніторингу кібератак на енергоінфраструктуру. Стипендіатка програми ЄС.',
    dream:'Створити кіберщит для відновленої інфраструктури Донбасу.' },
  { name:'Дмитро Кравченко', program:'Будівництво · 2 курс', from:'Маріуполь', year:2023,
    story:'Евакуйований з Маріуполя у березні 2022. Втратив дім. Вступив у DonNTU, щоб навчитися відбудовувати. Активіст волонтерського руху «Відбудуй Донбас».',
    dream:'Відбудувати рідне місто. Кожну будівлю, кожну вулицю.' },
  { name:'Олена Мороз', program:'Екологія · 3 курс', from:'Покровськ', year:2021,
    story:'Почала навчання в Покровську, продовжила в Луцьку. Досліджує вплив мінних полів на екосистеми Донеччини. Учасниця міжнародної конференції з екології воєнних конфліктів.',
    dream:'Щоб діти на Донбасі могли безпечно гратися на траві, не боячись мін.' },
  { name:'Артем Волошин', program:'Гірнича інженерія · магістр', from:'Торецьк', year:2020,
    story:'Четверте покоління гірничих інженерів у родині. Розробляє методи безпечної консервації затоплених шахт. Дипломна робота — першій в Україні аналіз ризиків від затоплення шахт Донбасу.',
    dream:'Запобігти екологічній катастрофі від затоплення шахт. Це загроза для мільйонів людей.' },
];

const COMMUNITY_STATS = [
  { v:'~65 000', label:'Випускників', desc:'За 105 років існування' },
  { v:'1 247', label:'Студентів зараз', desc:'Очно та дистанційно' },
  { v:'310', label:'Викладачів', desc:'У 4 містах' },
  { v:'48', label:'Докторів наук', desc:'Активних дослідників' },
  { v:'12', label:'Країн', desc:'Звідки студенти' },
  { v:'85%', label:'Працевлаштування', desc:'Протягом 6 місяців' },
];

const GENERATIONS = [
  { era:'1920–1940', name:'Засновники', desc:'Перші гірничі інженери Донбасу. Будували промисловість з нуля. Заклали наукові школи, які працюють досі.', count:'~2 000 випускників' },
  { era:'1941–1960', name:'Відбудовники', desc:'Пережили війну та відбудували Донбас. Відновили зруйновані шахти та заводи. Створили промисловий потенціал регіону.', count:'~8 000 випускників' },
  { era:'1961–1990', name:'Розбудовники', desc:'Покоління індустріального розквіту. Автоматизація, нові технології, міжнародне визнання. Золотий вік DonNTU.', count:'~25 000 випускників' },
  { era:'1991–2013', name:'Трансформатори', desc:'Перехід від радянської системи. Ринкова економіка, нові спеціальності, комп\'ютеризація. Адаптація до нової реальності.', count:'~22 000 випускників' },
  { era:'2014–н.ч.', name:'Незламні', desc:'Покоління війни та переміщень. Навчаються під обстрілами, мігрують з університетом, будують майбутнє попри все.', count:'~8 000 випускників' },
];

const PeoplePage = ({ onNavigate }) => {
  const [selectedFaculty, setSelectedFaculty] = React.useState(null);

  return (
    <div className="page">
      <span className="lbl">11 · ЛЮДИ</span>

      <div style={{marginTop:'1.5rem'}}>
        <h1 className="h1" style={{fontSize:'2.25rem',lineHeight:1.15}}>
          Університет — це <em>люди.</em>
        </h1>
        <p className="body" style={{marginTop:'1rem',maxWidth:'560px'}}>
          Не корпуси і не адреса. Викладачі, які передають знання через покоління. Студенти, які вчаться попри війну. Випускники, розкидані по світу, але об'єднані alma mater.
        </p>
      </div>

      {/* Community stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'0.75rem',marginTop:'2rem'}}>
        {COMMUNITY_STATS.map((s,i) => (
          <div key={i} className="gc" style={{padding:'1rem',textAlign:'center'}}>
            <div className="serif tg" style={{fontSize:'1.375rem',fontWeight:500}}>{s.v}</div>
            <div className="lbl" style={{marginTop:'0.5rem'}}>{s.label}</div>
            <div className="caption" style={{marginTop:'0.25rem',color:'var(--t3)'}}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Faculty */}
      <div className="div-row" style={{marginTop:'2.5rem'}}>
        <span className="lbl">ВИКЛАДАЧІ · ОБЛИЧЧЯ УНІВЕРСИТЕТУ</span>
        <div className="div-line"></div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:'1rem',marginTop:'1rem'}}>
        {FACULTY_PROFILES.map((f,i) => (
          <div key={i} className="gc" style={{padding:'1.25rem',cursor:'pointer',borderColor: selectedFaculty===i ? 'var(--amber)' : undefined}} onClick={() => setSelectedFaculty(selectedFaculty===i ? null : i)}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
              <div>
                <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{f.name}</h4>
                <span className="lbl" style={{marginTop:'0.25rem'}}>{f.dept}</span>
              </div>
              <Badge status={f.status==='active' ? 'completed' : 'open'} label={f.status==='active' ? 'АКТИВНИЙ' : f.status} />
            </div>
            <span className="caption" style={{display:'block',marginTop:'0.5rem',color:'var(--t3)'}}>{f.role} · {f.years}</span>

            {selectedFaculty===i && (
              <div style={{marginTop:'1rem',borderTop:'1px solid var(--border)',paddingTop:'1rem'}}>
                <p className="body" style={{fontSize:'0.8125rem'}}>{f.desc}</p>
                <blockquote className="serif" style={{marginTop:'0.75rem',fontSize:'0.8125rem',fontStyle:'italic',color:'var(--amber)',borderLeft:'2px solid var(--amber)',paddingLeft:'0.75rem'}}>
                  «{f.quote}»
                </blockquote>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Students */}
      <div className="div-row" style={{marginTop:'2.5rem'}}>
        <span className="lbl">СТУДЕНТИ · ІСТОРІЇ СЬОГОДЕННЯ</span>
        <div className="div-line"></div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1rem',marginTop:'1rem'}}>
        {STUDENT_STORIES.map((s,i) => (
          <div key={i} className="gc" style={{padding:'1.25rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
              <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{s.name}</h4>
              <span className="mono" style={{fontSize:'0.6875rem',color:'var(--t3)'}}>{s.year}</span>
            </div>
            <span className="lbl" style={{marginTop:'0.25rem',display:'block'}}>{s.program}</span>
            <span className="caption" style={{color:'var(--t3)'}}>з {s.from}</span>
            <p className="body" style={{marginTop:'0.75rem',fontSize:'0.8125rem'}}>{s.story}</p>
            <div className="gc gc-gold" style={{marginTop:'0.75rem',padding:'0.75rem'}}>
              <span className="lbl lbl-gold" style={{fontSize:'0.625rem'}}>МРІЯ</span>
              <p className="serif" style={{fontSize:'0.8125rem',fontStyle:'italic',marginTop:'0.375rem',color:'var(--t1)'}}>{s.dream}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Generations */}
      <div className="div-row" style={{marginTop:'2.5rem'}}>
        <span className="lbl">ПОКОЛІННЯ · 105 РОКІВ ВИПУСКНИКІВ</span>
        <div className="div-line"></div>
      </div>
      <div style={{marginTop:'1rem'}}>
        {GENERATIONS.map((g,i) => (
          <div key={i} style={{display:'flex',gap:'1.5rem',alignItems:'flex-start',marginBottom:'1rem',paddingBottom:'1rem',borderBottom:'1px solid var(--border)'}}>
            <div style={{minWidth:'100px'}}>
              <span className="serif tg" style={{fontSize:'1rem',fontWeight:500}}>{g.era}</span>
            </div>
            <div style={{flex:1}}>
              <h4 className="h3" style={{fontWeight:500}}>{g.name}</h4>
              <p className="body" style={{marginTop:'0.375rem',fontSize:'0.8125rem',color:'var(--t2)'}}>{g.desc}</p>
            </div>
            <div style={{minWidth:'120px',textAlign:'right'}}>
              <span className="caption" style={{color:'var(--amber)'}}>{g.count}</span>
            </div>
          </div>
        ))}
      </div>

      <Inst />
    </div>
  );
};

window.PeoplePage = PeoplePage;
