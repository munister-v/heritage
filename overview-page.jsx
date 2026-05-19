/* Overview Page v5 — WUF13-identical landing (real WUF13 layout) */

/* ── Cityscape illustration in WUF13 flat style ── */
const CityscapeSVG = () => (
  <svg viewBox="0 0 1440 980" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
    {/* Sky */}
    <rect x="0" y="0" width="1440" height="980" fill="#6BC8E5"/>
    {/* Clouds (left + right) */}
    <g stroke="#000" strokeWidth="2.5" fill="#fff">
      <ellipse cx="80" cy="200" rx="80" ry="22"/>
      <ellipse cx="120" cy="190" rx="50" ry="18"/>
      <ellipse cx="1280" cy="130" rx="100" ry="28"/>
      <ellipse cx="1340" cy="120" rx="60" ry="22"/>
    </g>
    {/* Power lines */}
    <g stroke="#000" strokeWidth="2" fill="none">
      <line x1="0" y1="280" x2="500" y2="180"/>
      <line x1="0" y1="320" x2="500" y2="220"/>
      <line x1="940" y1="180" x2="1440" y2="280"/>
      <line x1="940" y1="220" x2="1440" y2="320"/>
    </g>
    {/* Hills behind */}
    <path d="M-20,560 Q200,420 480,520 T960,500 Q1200,460 1460,540 L1460,980 L-20,980 Z" fill="#3FB0D8" stroke="#000" strokeWidth="3"/>

    {/* Left side: bridge/aqueduct */}
    <g stroke="#000" strokeWidth="3">
      <rect x="20" y="520" width="380" height="280" fill="#4FC1E0"/>
      {/* Arches */}
      {[40, 145, 250, 355].map((x,i) => (
        <g key={i}>
          <rect x={x} y="540" width="80" height="120" fill="#A6E3F0"/>
          <path d={`M${x},600 Q${x+40},540 ${x+80},600 L${x+80},540 L${x},540 Z`} fill="#4FC1E0"/>
        </g>
      ))}
    </g>

    {/* Pink dome on far left */}
    <g stroke="#000" strokeWidth="3">
      <rect x="0" y="640" width="180" height="200" fill="#E84A6A"/>
      <path d="M0,640 Q90,500 180,640 Z" fill="#F5A6B5"/>
      <rect x="60" y="700" width="40" height="100" fill="#E84A6A"/>
    </g>

    {/* DonNTU main building — center-right (orange) */}
    <g stroke="#000" strokeWidth="3">
      <rect x="900" y="340" width="380" height="460" fill="#F08D3F"/>
      {/* Cupola */}
      <rect x="1060" y="280" width="60" height="60" fill="#F08D3F"/>
      <polygon points="1060,280 1090,240 1120,280" fill="#C0392B"/>
      {/* Window rows with arches */}
      {[380, 470, 560, 650, 740].map((y,row) => (
        <g key={row}>
          {[930, 1020, 1110, 1200].map((x,col) => (
            <g key={col}>
              <rect x={x} y={y} width="50" height="60" fill="#5BBEDC"/>
              <path d={`M${x},${y+15} Q${x+25},${y-10} ${x+50},${y+15}`} fill="#5BBEDC" stroke="#000" strokeWidth="3"/>
            </g>
          ))}
        </g>
      ))}
    </g>

    {/* Green tree on right */}
    <g stroke="#000" strokeWidth="3">
      <rect x="1320" y="700" width="20" height="100" fill="#7A4A2F"/>
      <ellipse cx="1330" cy="680" rx="80" ry="90" fill="#5FB85F"/>
    </g>

    {/* Ground line */}
    <line x1="0" y1="800" x2="1440" y2="800" stroke="#000" strokeWidth="3"/>
    <rect x="0" y="800" width="1440" height="180" fill="#6BC8E5"/>
  </svg>
);

const NEWS_ITEMS = [
  { date: '19 травня 2026', title: 'Стартує цифрова реставрація панно «Історія ДонНТУ» — 105 портретів у HD', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&h=560&fit=crop' },
  { date: '12 травня 2026', title: 'ДонНТУ відкриває новий науковий центр у Дрогобичі' },
  { date: '5 травня 2026', title: 'Випускники-захисники: біографії 300 студентів, що стали до лав ЗСУ' },
  { date: '28 квітня 2026', title: 'Архів університету поповнився 4 800 цифровими документами' },
];

const FOCUS_AREAS = [
  { n:'Розділ 1', title:'Сторічна історія: від технікуму до університету', page:'heritage' },
  { n:'Розділ 2', title:'Люди, що визначили обличчя ДонНТУ', page:'people' },
  { n:'Розділ 3', title:'Цифровий архів: документи та фотографії', page:'archive' },
  { n:'Розділ 4', title:'Війна, евакуація та незламна пам’ять', page:'war' },
  { n:'Розділ 5', title:'Голоси випускників і викладачів', page:'voices' },
  { n:'Розділ 6', title:'Інтерактивне панно «Історія ДонНТУ»', page:'panneau' },
];

const SPEAKERS = [
  { name:'Олександр Янчуков', role:'Ректор Донецького національного технічного університету', img:'' },
  { name:'Олексій Ященко', role:'Проректор з наукової роботи', img:'' },
  { name:'Валентина Ковальова', role:'Декан факультету інформаційних технологій', img:'' },
];

const OverviewPage = ({ onNavigate }) => (
  <div>
    {/* ══ HERO: cyan sky + cityscape + white dome ══ */}
    <section className="wuf-hero">
      <div className="wuf-hero-city"><CityscapeSVG /></div>
      <div className="wuf-hero-dome">
        <div className="wuf-hero-date">1921 — наш час</div>
        <div className="wuf-hero-place">Дрогобич · Львівська обл. · Україна</div>
        <h1 className="wuf-hero-title">DONNTU</h1>
        <h2 className="wuf-hero-theme">
          Цифрова спадщина:<br/>
          сторічна історія, пам’ять і відновлення
        </h2>
        <div className="wuf-hero-btns">
          <button className="wuf-hero-btn wuf-hero-btn-primary" onClick={() => onNavigate('panneau')}>
            Відкрити панно
          </button>
          <button className="wuf-hero-btn wuf-hero-btn-primary" onClick={() => onNavigate('heritage')}>
            Спадщина
          </button>
          <button className="wuf-hero-btn wuf-hero-btn-primary" onClick={() => onNavigate('war')}>
            Пам’ять
          </button>
          <button className="wuf-hero-btn wuf-hero-btn-primary" onClick={() => onNavigate('archive')}>
            Архів
          </button>
        </div>
      </div>
    </section>

    {/* ══ Section tabs (under hero) ══ */}
    <div className="wuf-section-tabs">
      <button className="wuf-section-tab" onClick={() => onNavigate('people')}>Люди</button>
      <button className="wuf-section-tab" onClick={() => onNavigate('heritage')}>Хронологія</button>
      <button className="wuf-section-tab" onClick={() => onNavigate('panneau')}>Панно</button>
      <button className="wuf-section-tab" onClick={() => onNavigate('voices')}>Голоси</button>
    </div>

    {/* ══ HOST CITY — WUF13-identical 4-column Mondrian block ══ */}
    <section className="wuf-host">
      <div className="wuf-host-grid">

        {/* ① Blue — welcome text */}
        <div className="wuf-host-blue">
          <h2 className="wuf-host-blue-h">
            Ми вітаємо ДонНТУ<br/>у Дрогобичі
          </h2>
          <p className="wuf-host-blue-p">
            Ми пишаємося тим, що Донецький національний технічний університет продовжує
            свою столітню місію в нових умовах — у Дрогобичі, Львівська область. Як
            університет-переселенець, ДонНТУ зберігає понад 100 років інженерної освіти
            Донбасу і відкриває нову сторінку в серці Галичини.
          </p>
          <p className="wuf-host-blue-p">
            Учасники порталу знайдуть тут унікальне поєднання цифрового архіву, живих
            спогадів та інтерактивних ресурсів — де спадщина і сучасність існують поруч,
            а люди залишаються в центрі кожної сторінки.
          </p>
        </div>

        {/* ② Pink — city description */}
        <div className="wuf-host-pink">
          <p className="wuf-host-pink-p">
            Дрогобич — стародавнє місто Галичини з багатою культурною спадщиною, розташоване
            у Львівській області, неподалік Карпат. Місто, де народився Іван Франко і Бруно
            Шульц, стало новим домом для ДонНТУ після початку повномасштабного вторгнення
            Росії у 2022 році.
          </p>
          <p className="wuf-host-pink-p">
            Відмінна зв'язність, наукова та культурна інфраструктура роблять Дрогобич
            ідеальним місцем для відродження університету. Разом з містом ДонНТУ будує
            майбутнє, зберігаючи пам'ять.
          </p>
        </div>

        {/* ③ Photo (right top) */}
        <div className="wuf-host-photo-box">
          <div className="wuf-host-photo-inner">
            <div style={{
              width:'100%', height:'100%', background:'#E8EAF0',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:'5rem', color:'#9199AA', fontFamily:'var(--display)', fontWeight:700,
            }}>О</div>
          </div>
        </div>

        {/* ④ City photo (bottom-left, spans 2 cols) */}
        <div className="wuf-host-city-photo">
          <img
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&h=600&fit=crop"
            alt="Дрогобич"
            style={{width:'100%', height:'100%', objectFit:'cover', display:'block'}}
            loading="lazy"
          />
        </div>

        {/* ⑤ Illustration (bottom-middle) */}
        <div className="wuf-host-illustration">
          <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
            {/* Sky */}
            <rect width="300" height="300" fill="#6BC8E5"/>
            {/* Sun */}
            <circle cx="240" cy="60" r="38" fill="#F5D248" stroke="#000" strokeWidth="2"/>
            {/* Ground */}
            <rect x="0" y="200" width="300" height="100" fill="#5FB85F"/>
            {/* Big building — orange */}
            <rect x="90" y="100" width="120" height="110" fill="#F08D3F" stroke="#000" strokeWidth="2.5"/>
            <polygon points="90,100 150,55 210,100" fill="#C0392B" stroke="#000" strokeWidth="2.5"/>
            {/* Windows on building */}
            {[115,155,195].map((x,i) => [120,150,178].map((y,j) => (
              <rect key={i*3+j} x={x} y={y} width="16" height="18" fill="#6BC8E5" stroke="#000" strokeWidth="1.5"/>
            )))}
            {/* Left small house */}
            <rect x="10" y="160" width="60" height="50" fill="#E84A6A" stroke="#000" strokeWidth="2"/>
            <polygon points="10,160 40,130 70,160" fill="#9B59B6" stroke="#000" strokeWidth="2"/>
            {/* Right tower */}
            <rect x="235" y="130" width="45" height="80" fill="#1F3A9C" stroke="#000" strokeWidth="2"/>
            <polygon points="235,130 257,95 280,130" fill="#2ECC71" stroke="#000" strokeWidth="2"/>
            {/* Trees */}
            <rect x="78" y="210" width="8" height="30" fill="#7A4A2F"/>
            <ellipse cx="82" cy="200" rx="18" ry="22" fill="#27AE60" stroke="#000" strokeWidth="1.5"/>
            <rect x="215" y="215" width="8" height="25" fill="#7A4A2F"/>
            <ellipse cx="219" cy="206" rx="16" ry="20" fill="#27AE60" stroke="#000" strokeWidth="1.5"/>
            {/* Road */}
            <rect x="130" y="210" width="40" height="90" fill="#BDC3C7"/>
            <rect x="147" y="220" width="6" height="15" fill="#fff"/>
            <rect x="147" y="245" width="6" height="15" fill="#fff"/>
            <rect x="147" y="270" width="6" height="15" fill="#fff"/>
            {/* Grid lines — stained-glass feel */}
            <line x1="90" y1="0" x2="90" y2="300" stroke="#000" strokeWidth="1.5" opacity=".2"/>
            <line x1="210" y1="0" x2="210" y2="300" stroke="#000" strokeWidth="1.5" opacity=".2"/>
            <line x1="0" y1="200" x2="300" y2="200" stroke="#000" strokeWidth="1.5" opacity=".2"/>
          </svg>
        </div>

        {/* ⑥ Quote (bottom-right, light blue) */}
        <div className="wuf-host-quote">
          <div className="wuf-host-quote-name">Олександр Янчуков</div>
          <div className="wuf-host-quote-role">
            Ректор Донецького національного<br/>технічного університету
          </div>
          <blockquote className="wuf-host-quote-text">
            "Ми запрошуємо вас долучитися до нашої цифрової спадщини —
            зберегти ім'я, обличчя і голос університету, який подолав
            евакуацію, але не зломився. Наша місія триває."
          </blockquote>
        </div>

      </div>
    </section>

    {/* ══ NEWS ══ */}
    <section className="wuf-news">
      <div className="wuf-news-inner">
        <div className="wuf-news-head">
          <h2 className="wuf-news-title">Новини</h2>
          <button className="wuf-news-view-all" onClick={() => onNavigate('archive')}>Усі новини</button>
        </div>
        <div className="wuf-news-grid">
          <div className="wuf-news-main" onClick={() => onNavigate('panneau')}>
            <div className="wuf-news-main-img">
              <img src={NEWS_ITEMS[0].img} alt={NEWS_ITEMS[0].title} loading="lazy"/>
            </div>
            <div className="wuf-news-date">{NEWS_ITEMS[0].date}</div>
            <h3 className="wuf-news-headline">{NEWS_ITEMS[0].title}</h3>
          </div>
          <div className="wuf-news-list">
            {NEWS_ITEMS.slice(1).map((n, i) => (
              <div key={i} className="wuf-news-item" onClick={() => onNavigate('archive')}>
                <div className="wuf-news-date">{n.date}</div>
                <div className="wuf-news-item-h">{n.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ══ THEME ══ */}
    <section className="wuf-theme">
      <div className="wuf-theme-inner">
        <h2 className="wuf-theme-h">Тема порталу</h2>
        <div className="wuf-theme-body">
          Тема цифрового порталу — <strong>«Цифрова спадщина: сторічна історія, пам’ять і відновлення»</strong>{' '}
          — об’єднує понад сто років інженерної освіти, науки та культури з місією зберегти ім’я,
          обличчя і голос Донецького національного технічного університету. Тут зустрічаються
          архіви та сучасність, портрети і біографії, війна і надія на відбудову.
        </div>
      </div>
    </section>

    {/* ══ How to participate / Як долучитись ══ */}
    <section style={{padding:'1rem 6vw 3rem',background:'#fff'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto'}}>
        <button className="wuf-arrow-link" onClick={() => onNavigate('applicant')}>
          <div className="wuf-arrow-link-top">
            <span className="wuf-arrow-link-label">Як долучитись?</span>
            <span className="wuf-arrow-link-arrow">→</span>
          </div>
          <span className="wuf-arrow-link-sub">Абітурієнту, кафедри, вступ</span>
        </button>
      </div>
    </section>

    {/* ══ Our reach ══ */}
    <section className="wuf-reach">
      <div className="wuf-reach-inner">
        <h2 className="wuf-reach-title">Наш масштаб</h2>
        <div className="wuf-reach-grid">
          <div className="wuf-reach-item">
            <div className="wuf-reach-n">40&nbsp;000+</div>
            <div className="wuf-reach-l">Випускників за сто років</div>
          </div>
          <div className="wuf-reach-item">
            <div className="wuf-reach-n">105</div>
            <div className="wuf-reach-l">Портретів на інтерактивному панно</div>
          </div>
          <div className="wuf-reach-item">
            <div className="wuf-reach-n">4&nbsp;800</div>
            <div className="wuf-reach-l">Документів у цифровому архіві</div>
          </div>
        </div>
      </div>
    </section>

    {/* ══ Speakers (Featured Persons) ══ */}
    <section className="wuf-speakers">
      <div className="wuf-speakers-inner">
        <div className="wuf-news-head">
          <h2 className="wuf-news-title">Видатні постаті</h2>
          <button className="wuf-news-view-all" onClick={() => onNavigate('people')}>Усі люди</button>
        </div>
        <div className="wuf-speakers-grid">
          {SPEAKERS.map((s, i) => (
            <div key={i} className="wuf-speaker" onClick={() => onNavigate('people')}>
              <div className="wuf-speaker-img">
                {s.img
                  ? <img src={s.img} alt={s.name} loading="lazy"/>
                  : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'#E2E4E8',color:'#7A7E87',fontSize:'3rem',fontFamily:'var(--sans)',fontWeight:600}}>
                      {s.name.charAt(0)}
                    </div>
                }
              </div>
              <div className="wuf-speaker-name">{s.name}</div>
              <div className="wuf-speaker-role">{s.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ Background paper arrow ══ */}
    <section style={{padding:'2rem 6vw 3rem',background:'#fff'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto'}}>
        <button className="wuf-arrow-link" onClick={() => onNavigate('heritage')}>
          <div className="wuf-arrow-link-top">
            <span className="wuf-arrow-link-label">Базова стаття</span>
            <span className="wuf-arrow-link-arrow">→</span>
          </div>
          <span className="wuf-arrow-link-sub">Сторічна історія ДонНТУ: від технікуму до національного університету</span>
        </button>
      </div>
    </section>

    {/* ══ Key Focus Areas / Розділи ══ */}
    <section className="wuf-focus">
      <div className="wuf-focus-inner">
        <h2 className="wuf-news-title">Ключові розділи</h2>
        <div className="wuf-focus-grid">
          {FOCUS_AREAS.map((f, i) => (
            <div key={i} className="wuf-focus-card" onClick={() => onNavigate(f.page)}>
              <div className="wuf-focus-card-num">{f.n}</div>
              <div className="wuf-focus-card-title">{f.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ══ Footer ══ */}
    <footer className="wuf-footer">
      <div className="wuf-footer-inner">
        <div className="wuf-footer-top">
          <div>
            <div className="wuf-footer-brand">DONNTU</div>
            <p className="wuf-footer-tagline">
              Донецький національний технічний університет.<br/>
              Цифрова спадщина · Пам’ять · Відновлення.
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
            { heading:'ПАМ’ЯТЬ', links:[
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
          <span className="wuf-footer-copy">© 2026 DONNTU · Цифрова спадщина · Всі права захищені</span>
          <span className="wuf-footer-copy">Дрогобич · Львівська обл. · donntu.edu.ua</span>
        </div>
      </div>
    </footer>
  </div>
);
