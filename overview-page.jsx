/* Overview Page v4 — WUF13-identical landing page */

const TIMELINE_ITEMS = [
  { year:'1921', title:'Заснування', desc:'Донецький гірничий технікум — перший вищий навчальний заклад Донбасу.' },
  { year:'1935', title:'Статус інституту', desc:'Перетворення на Сталінський гірничий інститут, розширення факультетів.' },
  { year:'1962', title:'Університет', desc:'Отримання статусу технічного університету, відкриття нових кафедр.' },
  { year:'2014', title:'Переміщення', desc:'Евакуація до Покровська після початку окупації. Університет продовжує роботу.' },
];

const ARTICLE_ITEMS = [
  {
    tag:'СПАДЩИНА',
    title:'Сто років інженерної освіти на Донбасі',
    desc:'Від гірничого технікуму до сучасного університету — шлях, що змінив регіон.',
    img:'https://images.unsplash.com/photo-1562774053-701939374585?w=700&h=400&fit=crop',
    page:'heritage',
  },
  {
    tag:'ПАМ\'ЯТЬ',
    title:'Видатні випускники та науковці університету',
    desc:'Люди, що визначили науковий і культурний облік Донецького краю.',
    img:'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=700&h=400&fit=crop',
    page:'people',
  },
  {
    tag:'АРХІВ',
    title:'Цифровий архів: документи та фотографії',
    desc:'Тисячі матеріалів, що зберігають пам\'ять про університет і місто.',
    img:'https://images.unsplash.com/photo-1581092160607-ee4c5a98b4ab?w=700&h=400&fit=crop',
    page:'archive',
  },
];

const PEOPLE_ITEMS = [
  { name:'Олександр Янчуков', role:'Ректор', years:'2017 —', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Smiley.svg/240px-Smiley.svg.png' },
  { name:'Олексій Ященко', role:'Проректор', years:'2018 —', img:'' },
  { name:'Валентина Ковальова', role:'Декан ФІТА', years:'2015 —', img:'' },
  { name:'Микола Лобас', role:'Заслужений науковець', years:'1958 — 2021', img:'' },
];

const QUOTES = [
  { text:'Університет пережив окупацію, евакуацію, війну — але продовжує готувати інженерів для майбутньої відбудови.', name:'Ректор університету', role:'ДОННУ · 2024' },
  { text:'Тут народилася інженерна думка Донбасу. Ці коридори пам\'ятають тисячі студентів, що розбудували регіон.', name:'Випускниця 1989 року', role:'МАШИНОБУДІВНИЙ ФАКУЛЬТЕТ' },
  { text:'Навіть у вигнанні ми зберігаємо ім\'я, традиції і честь університету. Це і є справжня спадщина.', name:'Викладач кафедри фізики', role:'ДОННУ · ПОКРОВСЬК' },
];

const OverviewPage = ({ onNavigate }) => (
  <div>
    {/* ══ MONDRIAN HERO ══ */}
    <section className="wuf-hero">
      {/* Royal blue block — main welcome */}
      <div className="wuf-hero-block wuf-hero-blue">
        <span className="wuf-hero-eyebrow">DONNTU · ЦИФРОВА СПАДЩИНА</span>
        <h1>Вітаємо у цифровій пам'яті ДонНТУ</h1>
        <p>
          Понад сто років інженерної освіти, науки та пам'яті. Університет,
          що пережив окупацію, евакуацію та війну — і продовжує жити, готуючи
          інженерів для майбутньої відбудови країни.
        </p>
        <p>
          Тут зберігаються імена, фотографії, історії — все, що визначає
          справжню спадщину Донецького національного технічного університету.
        </p>
        <div className="wuf-hero-btns">
          <button className="wuf-hero-btn wuf-hero-btn-primary" onClick={() => onNavigate('panneau')}>
            ВІДКРИТИ ПАННО →
          </button>
          <button className="wuf-hero-btn wuf-hero-btn-outline-w" onClick={() => onNavigate('heritage')}>
            СПАДЩИНА
          </button>
        </div>
      </div>

      {/* Pink block — about Donetsk/Pokrovsk */}
      <div className="wuf-hero-block wuf-hero-pink">
        <span className="wuf-hero-eyebrow-pink">ДОНЕЦЬК · ПОКРОВСЬК</span>
        <h2>Місто, університет, доля</h2>
        <p>
          Університет, що народився у серці Донбасу — там, де куються
          інженери і традиції. Створений у 1921 році, він став інтелектуальним
          центром регіону.
        </p>
        <p>
          З 2014 року університет працює в евакуації, зберігаючи колектив,
          архіви та ім'я. Це не просто адреса — це жива пам'ять про місто,
          яке формувало покоління.
        </p>
      </div>

      {/* Photo block — rector / heritage */}
      <div className="wuf-hero-block wuf-hero-photo">
        <img
          src="https://donntu.ru/sites/default/files/images/kartina/images/kartina_istoria.jpg"
          alt="Панно — Історія ДонНТУ"
          loading="lazy"
        />
      </div>
    </section>

    {/* ══ MONDRIAN SUB-BAND ══ */}
    <section className="wuf-mondrian">
      <div className="wuf-mondrian-img">
        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?w=1000&h=700&fit=crop"
          alt="Кампус ДонНТУ"
          loading="lazy"
        />
      </div>
      <div className="wuf-mondrian-quote">
        <div className="wuf-mondrian-quote-name">Олександр Янчуков</div>
        <div className="wuf-mondrian-quote-role">
          Ректор Донецького національного<br/>технічного університету
        </div>
        <p className="wuf-mondrian-quote-text">
          «Університет — це не стіни, а люди. Поки живі викладачі, студенти і
          пам'ять — живий і університет. Ми зберігаємо ДонНТУ як спадщину
          цілого регіону.»
        </p>
      </div>
      <div className="wuf-mondrian-yellow">
        <h3>105 портретів. Одна історія.</h3>
        <p>
          Інтерактивне панно — живописне полотно з біографіями видатних
          постатей університету. Натисніть на будь-який портрет, щоб
          дізнатись про цю людину.
        </p>
        <button className="wuf-hero-btn wuf-hero-btn-outline" onClick={() => onNavigate('panneau')}>
          ПЕРЕГЛЯНУТИ →
        </button>
      </div>
    </section>

    {/* ══ STATS BAR ══ */}
    <div className="wuf-stats">
      {[
        { v:'1921', l:'Рік заснування' },
        { v:'100+', l:'Років освіти' },
        { v:'40К+', l:'Випускників' },
        { v:'40+',  l:'Кафедр і факультетів' },
      ].map((s,i) => (
        <div key={i} className="wuf-stat">
          <span className="wuf-stat-v">{s.v}</span>
          <span className="wuf-stat-l">{s.l}</span>
        </div>
      ))}
    </div>

    {/* ══ INTRO SECTION ══ */}
    <section className="wuf-section wuf-section-white">
      <div className="wuf-section-inner">
        <div className="wuf-2col">
          <div>
            <span className="wuf-section-label">ПРО УНІВЕРСИТЕТ</span>
            <h2 className="wuf-section-title">Серце інженерної освіти Донбасу</h2>
            <div className="wuf-divider"></div>
            <p className="wuf-section-sub" style={{marginBottom:'1.5rem'}}>
              Заснований у 1921 році як Донецький гірничий технікум, університет став
              інтелектуальним центром всього Донецького басейну. Тут навчалися інженери,
              що будували промисловість країни, вчені, що відкривали нові горизонти науки.
            </p>
            <p style={{fontSize:'1rem',color:'var(--t2)',lineHeight:'1.65',marginBottom:'2rem'}}>
              Після 2014 року університет евакуювався до Покровська, зберігши колектив,
              архіви та традиції. Цей сайт — цифрова пам'ять про університет і всіх,
              хто пов'язаний з ним.
            </p>
            <div style={{display:'flex',gap:'0.875rem',flexWrap:'wrap'}}>
              <button className="btn btn-g" onClick={() => onNavigate('heritage')}>Дізнатись більше</button>
              <button className="btn" onClick={() => onNavigate('archive')}>Переглянути архів</button>
            </div>
          </div>
          <div className="wuf-2col-img">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop"
              alt="Корпус університету"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    {/* ══ ARTICLES / SECTIONS ══ */}
    <section className="wuf-section wuf-section-gray">
      <div className="wuf-section-inner">
        <span className="wuf-section-label">РОЗДІЛИ</span>
        <h2 className="wuf-section-title">Цифрова спадщина</h2>
        <div className="wuf-articles">
          {ARTICLE_ITEMS.map((a,i) => (
            <article key={i} className="wuf-article" onClick={() => onNavigate(a.page)}>
              <div className="wuf-article-img">
                <img src={a.img} alt={a.title} loading="lazy"/>
              </div>
              <div className="wuf-article-body">
                <span className="wuf-article-tag">{a.tag}</span>
                <h3 className="wuf-article-title">{a.title}</h3>
                <p className="wuf-article-desc">{a.desc}</p>
                <div className="wuf-article-foot">
                  <span>ЧИТАТИ</span>
                  <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* ══ PANNEAU FEATURE ══ */}
    <section className="wuf-section wuf-section-white">
      <div className="wuf-section-inner">
        <div className="wuf-panneau-feature">
          <div>
            <span className="wuf-section-label">ІНТЕРАКТИВНЕ ПАННО</span>
            <h2 className="wuf-section-title">105 видатних постатей університету</h2>
            <div className="wuf-divider"></div>
            <p className="wuf-section-sub">
              Живописне полотно з портретами ректорів, науковців, героїв і випускників.
              Натисніть на будь-який портрет — і дізнайтесь про цю людину.
            </p>
            <button className="wuf-hero-btn wuf-hero-btn-primary" onClick={() => onNavigate('panneau')}>
              ВІДКРИТИ ПАННО
            </button>
          </div>
          <div className="wuf-panneau-thumb" onClick={() => onNavigate('panneau')}>
            <img
              src="https://donntu.ru/sites/default/files/images/kartina/images/kartina_istoria.jpg"
              alt="Панно університету"
              loading="lazy"
            />
            <div className="wuf-panneau-thumb-overlay">
              <span className="wuf-panneau-thumb-label">105 ПОРТРЕТІВ · КЛІКНІТЬ ДЛЯ ПЕРЕГЛЯДУ</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ══ TIMELINE ══ */}
    <section className="wuf-section wuf-section-gray">
      <div className="wuf-section-inner">
        <span className="wuf-section-label">ХРОНОЛОГІЯ</span>
        <h2 className="wuf-section-title">Віхи 100-річної історії</h2>
        <div className="wuf-timeline">
          {TIMELINE_ITEMS.map((t,i) => (
            <div key={i} className="wuf-tl-card">
              <div className="wuf-tl-year">{t.year}</div>
              <div className="wuf-tl-title">{t.title}</div>
              <p className="wuf-tl-desc">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="wuf-view-all">
          <button className="wuf-view-all-btn" onClick={() => onNavigate('heritage')}>
            ПОВНА ХРОНОЛОГІЯ →
          </button>
        </div>
      </div>
    </section>

    {/* ══ WAR / MEMORY (dark) ══ */}
    <div className="wuf-dark">
      <div className="wuf-dark-inner">
        <span className="wuf-dark-label">ВІЙНА ТА ПАМ'ЯТЬ</span>
        <h2 className="wuf-dark-title">Університет на лінії фронту</h2>
        <p className="wuf-dark-sub">
          З 2014 року — окупація, евакуація, війна. Університет продовжує жити
          і зберігає пам'ять про студентів і викладачів, що захищають Україну.
        </p>
        <div className="wuf-dark-grid">
          {[
            { n:'2014', t:'Окупація і переміщення', d:'Університет евакуювався з Донецька до підконтрольної України.' },
            { n:'300+', t:'Студентів-захисників', d:'Сотні випускників і студентів стали до лав Збройних Сил України.' },
            { n:'∞',    t:'Незламна пам\'ять', d:'Архіви, фотографії, імена — університет зберігає все для майбутнього.' },
          ].map((c,i) => (
            <div key={i} className="wuf-dark-card">
              <div className="wuf-dark-card-n">{c.n}</div>
              <div className="wuf-dark-card-t">{c.t}</div>
              <p className="wuf-dark-card-d">{c.d}</p>
            </div>
          ))}
        </div>
        <div style={{marginTop:'2.5rem'}}>
          <button className="wuf-hero-btn wuf-hero-btn-primary" onClick={() => onNavigate('war')}>
            РОЗДІЛ ПАМ'ЯТІ →
          </button>
        </div>
      </div>
    </div>

    {/* ══ VOICES ══ */}
    <section className="wuf-section wuf-section-white">
      <div className="wuf-section-inner">
        <span className="wuf-section-label">ГОЛОСИ</span>
        <h2 className="wuf-section-title">Свідки і учасники</h2>
        <div className="wuf-quotes">
          {QUOTES.map((q,i) => (
            <div key={i} className="wuf-quote">
              <div className="wuf-quote-mark">"</div>
              <p className="wuf-quote-text">{q.text}</p>
              <div className="wuf-quote-author">
                <div className="wuf-quote-name">{q.name}</div>
                <div className="wuf-quote-role">{q.role}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="wuf-view-all">
          <button className="wuf-view-all-btn" onClick={() => onNavigate('voices')}>
            БІЛЬШЕ ГОЛОСІВ →
          </button>
        </div>
      </div>
    </section>

    {/* ══ PEOPLE TEASER ══ */}
    <section className="wuf-section wuf-section-gray">
      <div className="wuf-section-inner">
        <span className="wuf-section-label">ЛЮДИ</span>
        <h2 className="wuf-section-title">Ректори та видатні постаті</h2>
        <div className="wuf-people">
          {PEOPLE_ITEMS.map((p,i) => (
            <div key={i} className="wuf-person" onClick={() => onNavigate('people')}>
              <div className="wuf-person-photo">
                {p.img
                  ? <img src={p.img} alt={p.name} loading="lazy"/>
                  : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--s2)'}}>
                      <span style={{fontFamily:'var(--display)',fontSize:'2.5rem',color:'var(--b3)'}}>Д</span>
                    </div>
                }
              </div>
              <div className="wuf-person-body">
                <div className="wuf-person-name">{p.name}</div>
                <div className="wuf-person-role">{p.role}</div>
                <div className="wuf-person-years">{p.years}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="wuf-view-all">
          <button className="wuf-view-all-btn" onClick={() => onNavigate('people')}>
            УСІ ЛЮДИ →
          </button>
        </div>
      </div>
    </section>

    {/* ══ FOOTER ══ */}
    <footer className="wuf-footer">
      <div className="wuf-footer-inner">
        <div className="wuf-footer-top">
          <div>
            <div className="wuf-footer-brand">DONNTU</div>
            <p className="wuf-footer-tagline">
              Донецький національний технічний університет.<br/>
              Цифрова спадщина · Пам'ять · Відновлення.
            </p>
          </div>
          {[
            { heading:'РОЗДІЛИ', links:[
              { l:'Спадщина', p:'heritage' }, { l:'Люди', p:'people' }, { l:'Архів', p:'archive' },
              { l:'Панно', p:'panneau' }, { l:'Голоси', p:'voices' },
            ]},
            { heading:'НАВЧАННЯ', links:[
              { l:'Абітурієнту', p:'applicant' }, { l:'Кафедри', p:'departments' },
              { l:'Наука', p:'science' }, { l:'Бібліотека', p:'library' },
            ]},
            { heading:'ПАМ\'ЯТЬ', links:[
              { l:'Війна', p:'war' }, { l:'Карта', p:'map' }, { l:'Часова капсула', p:'timecapsule' },
              { l:'Майбутнє', p:'future' },
            ]},
          ].map((col, i) => (
            <div key={i}>
              <div className="wuf-footer-heading">{col.heading}</div>
              <div className="wuf-footer-links">
                {col.links.map((lk,j) => (
                  <button key={j} className="wuf-footer-link" onClick={() => onNavigate(lk.p)}>{lk.l}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="wuf-footer-bottom">
          <span className="wuf-footer-copy">© 2026 DONNTU · ЦИФРОВА СПАДЩИНА · ВСІ ПРАВА ЗАХИЩЕНІ</span>
          <span className="wuf-footer-copy">ПОКРОВСЬК · УКРАЇНА · DONNTU.EDU.UA</span>
        </div>
      </div>
    </footer>
  </div>
);
