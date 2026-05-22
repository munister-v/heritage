/* Overview Page v4 — content-store aware, live-editable via admin */

/* ── CityscapeSVG ─────────────────────────────────────────────── */
const CityscapeSVG = () => (
  <svg viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" style={{width:'100%',height:'100%',display:'block'}}>
    <rect width="1440" height="600" fill="#6BC8E5"/>
    {/* Sky clouds */}
    <ellipse cx="200" cy="80" rx="90" ry="30" fill="rgba(255,255,255,0.35)"/>
    <ellipse cx="260" cy="70" rx="60" ry="22" fill="rgba(255,255,255,0.35)"/>
    <ellipse cx="1100" cy="90" rx="80" ry="25" fill="rgba(255,255,255,0.3)"/>
    <ellipse cx="1160" cy="78" rx="55" ry="20" fill="rgba(255,255,255,0.3)"/>
    {/* Ground */}
    <rect x="0" y="480" width="1440" height="120" fill="#5FB85F"/>
    {/* Left arch bridge */}
    <rect x="30" y="290" width="18" height="200" fill="#C0392B"/>
    <rect x="130" y="290" width="18" height="200" fill="#C0392B"/>
    <path d="M30,290 Q89,200 148,290" fill="none" stroke="#C0392B" strokeWidth="18"/>
    <rect x="10" y="340" width="160" height="150" fill="#E84A6A" opacity="0.2"/>
    {/* Pink/red building left */}
    <rect x="50" y="330" width="80" height="160" fill="#E84A6A" stroke="#000" strokeWidth="2"/>
    <polygon points="50,330 90,290 130,330" fill="#C0392B" stroke="#000" strokeWidth="2"/>
    {[65,95].map((x,i)=>[350,390,430].map((y,j)=>(
      <rect key={i*3+j} x={x} y={y} width="16" height="18" fill="#6BC8E5" stroke="#000" strokeWidth="1"/>
    )))}
    {/* Center-left buildings */}
    <rect x="200" y="260" width="100" height="230" fill="#9B59B6" stroke="#000" strokeWidth="2.5"/>
    <rect x="220" y="290" width="60" height="200" fill="#8E44AD" stroke="#000" strokeWidth="1.5"/>
    {[215,245,275].map((x,i)=>[270,310,360,410].map((y,j)=>(
      <rect key={i*4+j} x={x} y={y} width="20" height="22" fill="#6BC8E5" stroke="#000" strokeWidth="1.2"/>
    )))}
    {/* Dome building */}
    <rect x="370" y="300" width="140" height="190" fill="#BDC3C7" stroke="#000" strokeWidth="2"/>
    <ellipse cx="440" cy="290" rx="80" ry="40" fill="#E0E0E0" stroke="#000" strokeWidth="2"/>
    {[385,420,455,490].map((x,i)=>[320,370,420,460].map((y,j)=>(
      <rect key={i*4+j} x={x} y={y} width="18" height="20" fill="#6BC8E5" stroke="#000" strokeWidth="1"/>
    )))}
    {/* Main orange tower */}
    <rect x="570" y="140" width="160" height="350" fill="#F08D3F" stroke="#000" strokeWidth="2.5"/>
    <polygon points="570,140 650,90 730,140" fill="#E07830" stroke="#000" strokeWidth="2.5"/>
    {[590,625,660,695].map((x,i)=>[160,210,260,310,370,420].map((y,j)=>(
      <rect key={i*6+j} x={x} y={y} width="20" height="24" fill="#6BC8E5" stroke="#000" strokeWidth="1.5"/>
    )))}
    {/* Right buildings */}
    <rect x="790" y="220" width="120" height="270" fill="#005ab8" stroke="#000" strokeWidth="2.5"/>
    <polygon points="790,220 850,170 910,220" fill="#0045a0" stroke="#000" strokeWidth="2.5"/>
    {[805,840,875].map((x,i)=>[240,290,340,390,440].map((y,j)=>(
      <rect key={i*5+j} x={x} y={y} width="18" height="20" fill="#6BC8E5" stroke="#000" strokeWidth="1.2"/>
    )))}
    {/* Far right buildings */}
    <rect x="970" y="300" width="90" height="190" fill="#2ECC71" stroke="#000" strokeWidth="2"/>
    <polygon points="970,300 1015,255 1060,300" fill="#27AE60" stroke="#000" strokeWidth="2"/>
    <rect x="1100" y="270" width="110" height="220" fill="#F5D248" stroke="#000" strokeWidth="2"/>
    <polygon points="1100,270 1155,220 1210,270" fill="#E8C42A" stroke="#000" strokeWidth="2"/>
    <rect x="1260" y="330" width="140" height="160" fill="#E84A6A" stroke="#000" strokeWidth="2"/>
    {/* Trees */}
    {[160,540,760,1070,1240].map((x,i)=>(
      <g key={i}>
        <rect x={x+4} y="430" width="8" height="55" fill="#7A4A2F"/>
        <ellipse cx={x+8} cy="420" rx="20" ry="25" fill="#27AE60" stroke="#000" strokeWidth="1.5"/>
      </g>
    ))}
  </svg>
);

/* ── WUF-style hero decorations ──────────────────────────────── */
const HeroLeaf = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 50 50" style={{display:'block',flexShrink:0}}>
    <circle cx="25" cy="25" r="24" fill="#1a2e1c"/>
    {[0,51.4,102.8,154.2,205.7,257.1,308.6].map((deg, i) => (
      <ellipse key={i} cx="25" cy="8" rx="5" ry="11"
        fill={i % 2 === 0 ? '#3daa6e' : '#2c8a55'}
        transform={`rotate(${deg} 25 25)`}
      />
    ))}
    <circle cx="25" cy="25" r="4.5" fill="#1a2e1c"/>
  </svg>
);

const HeroPill = ({ w = 22, h = 70 }) => (
  <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{display:'block',flexShrink:0}}>
    <rect x="1" y="1" width={w-2} height={h-2} rx={(w-2)/2}
      fill="rgba(181,237,231,0.7)" stroke="#0a0a0a" strokeWidth="1.75"/>
    <line x1={w/2} y1="2" x2={w/2} y2={h-2} stroke="#0a0a0a" strokeWidth="1.25"/>
  </svg>
);

const HeroTree = () => (
  <svg width="34" height="56" viewBox="0 0 34 56" style={{display:'block',flexShrink:0}}>
    <rect x="14" y="42" width="6" height="14" rx="2" fill="#1a2e1c"/>
    <polygon points="17,2 32,44 2,44" fill="#2d7d4a"/>
    <polygon points="17,16 30,48 4,48" fill="#1f5e36"/>
  </svg>
);

const HeroDecoCol = ({ items }) => (
  <div className="wuf-hero-decos">
    {items.map((item, i) => {
      if (item === 'leaf')      return <HeroLeaf key={i} size={50}/>;
      if (item === 'leaf-sm')  return <HeroLeaf key={i} size={38}/>;
      if (item === 'pill')     return <HeroPill key={i} w={22} h={60}/>;
      if (item === 'pill-lg')  return <HeroPill key={i} w={22} h={84}/>;
      if (item === 'tree')     return <HeroTree key={i}/>;
      return null;
    })}
  </div>
);

/* ── Content store helpers ────────────────────────────────────── */
const CONTENT_KEY = 'donntu_content';
const PEOPLE_IMAGE_VERSION = '20260522-restored';

const DEFAULT_NEWS = [
  { date:'19 травня 2026', title:'Представники ДонНТУ взяли участь у роботі журі фестивалю робототехніки «Inno Tech»', img:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=560&fit=crop' },
  { date:'18 травня 2026', title:'Заходи до Дня пам\'яті жертв політичних репресій та геноциду кримськотатарського народу', img:'' },
  { date:'18 травня 2026', title:'ДонНТУ долучився до розроблення плану профорієнтації Авдіївської громади', img:'' },
  { date:'18 травня 2026', title:'V Всеукраїнська науково-практична конференція «Наукові досягнення сучасної молоді»', img:'' },
  { date:'15 травня 2026', title:'Перший з 2022 року візит представників місцевої влади Японії (м. Камока) до ДонНТУ', img:'' },
];

const DEFAULT_REACH = [
  { n:'1921',     label:'Рік заснування університету' },
  { n:'105',      label:'Років інженерної освіти Донбасу' },
  { n:'40 000+', label:'Випускників за всю історію' },
];

/* Видатні випускники ДонНТУ — фото локально в assets/people/ */
const DEFAULT_SPEAKERS = [
  {
    name: "Анатолій Солов'яненко",
    meta: '1932 – 1999 · КУЛЬТУРА',
    role: 'Оперний співак (тенор), Народний артист СРСР',
    bio:  'Соліст Київської опери, виконав понад 30 провідних тенорових партій. Гастролював у Ла Скала. Герой України (2008).',
    img:  'assets/people/solovyanenko.jpg',
  },
  {
    name: 'Олександр Мінаєв',
    meta: 'випуск 1964 · ОСВІТА',
    role: 'Ректор ДонНТУ · 1989–2014',
    bio:  'Провів університет через незалежність, отримання національного статусу (2001) та пік розвитку: 20 000 студентів, QS-рейтинг. Герой України (2012).',
    img:  'assets/people/minaev.jpg',
  },
  {
    name: 'Юрій Баранов',
    meta: 'випуск 1960 · ГІРНИЧА СПРАВА',
    role: 'Інженер-гірник, керівник вугільних підприємств',
    bio:  'Понад 40 років у вугільній промисловості Донбасу. Впроваджував механізацію видобутку. Герой України (2001).',
    img:  'assets/people/baranov.jpg',
  },
  {
    name: 'Борис Грядущий',
    meta: 'випуск 1956 · ЕНЕРГЕТИКА',
    role: 'Інженер-електромеханік гірничий',
    bio:  'Очолював наукові установи з електрифікації гірничих робіт. Зміцнював енергетичну незалежність України. Герой України (2008).',
    img:  'assets/people/gryadushchyi.jpg',
  },
  {
    name: 'Володимир Коновалов',
    meta: '1911 – 1967 · ВІЙСЬКОВА СПРАВА',
    role: 'Командир підводного човна, Герой Радянського Союзу',
    bio:  'Слухач підготовчих курсів ДГТ у 1922–1925 рр. Командував підводним човном Л-3 під час Другої світової війни — одним із найрезультативніших підводних човнів.',
    img:  'assets/people/konovalov.jpg',
  },
  {
    name: 'Олександр Богданов',
    meta: 'випуск 1981 · ГІРНИЧА СПРАВА',
    role: 'Інженер-механік, керівник вугільної галузі',
    bio:  'Розвивав вугільну промисловість України в умовах ринкових трансформацій. Лідер галузевих об\'єднань. Герой України (2013).',
    img:  'assets/people/bogdanov.jpg',
  },
  {
    name: 'Юрій Білобров',
    meta: 'випуск 1965 · МАШИНОБУДУВАННЯ',
    role: 'Інженер-механік, керівник машинобудівних підприємств',
    bio:  'Очолював одне з найбільших машинобудівних об\'єднань Донбасу. Розвивав випуск гірничого обладнання. Герой України (2004).',
    img:  'assets/people/bilobrov.jpg',
  },
  {
    name: 'Микола Сургай',
    meta: 'випуск 1959 · ГІРНИЧА СПРАВА',
    role: 'Інженер-гірник, керівник вугільної галузі',
    bio:  'Очолював профільні установи з видобутку вугілля. Поєднував практичну роботу з науковою діяльністю. Герой України (2003).',
    img:  'assets/people/surgay.jpg',
  },
  {
    name: 'Віктор Калашников',
    meta: 'НАУКА · ЕНЕРГЕТИКА',
    role: 'Професор, кандидат технічних наук',
    bio:  'Лауреат Державної премії України. Розробляв системи відновлюваної енергії та автоматичні теплові установки.',
    img:  'assets/people/kalashnykov.jpg',
  },
  {
    name: 'Сергій Тулуб',
    meta: 'випуск 1976 · АТОМНА ЕНЕРГЕТИКА',
    role: 'Інженер-економіст гірничий',
    bio:  'Очолював профільні структури атомної енергетики України. Сприяв розвитку галузі у важкі для країни роки. Герой України (2004).',
    img:  'assets/people/tulub.jpg',
  },
  {
    name: 'Станіслав Поважний',
    meta: 'випуск 1961 · ОСВІТА',
    role: 'Інженер-електромеханік, освітянин',
    bio:  'Працював у системі вищої освіти Донбасу понад 50 років. Виховав покоління інженерних кадрів. Герой України (2013).',
    img:  'assets/people/povazhnyi.jpg',
  },
  {
    name: 'Олександр Риженков',
    meta: 'випуск 1972 · МЕТАЛУРГІЯ',
    role: 'Інженер-металург (чорна металургія)',
    bio:  'Очолював металургійні підприємства повного циклу. Модернізував виробничі потужності галузі. Герой України (2010).',
    img:  'assets/people/ryzhenkov.jpg',
  },
];

const DEFAULT_FOCUS = [
  { n:'Розділ 1', title:'Сторічна історія: від технікуму до університету', page:'heritage' },
  { n:'Розділ 2', title:'Цифровий архів: документи та фотографії',         page:'archive' },
  { n:'Розділ 3', title:'Інтерактивне панно «Історія ДонНТУ»',             page:'panneau' },
  { n:'Розділ 4', title:'Кампус і будівлі університету',                   page:'campus' },
  { n:'Розділ 5', title:'Наукові досягнення та видатні випускники',         page:'achievements' },
  { n:'Розділ 6', title:'Майбутнє університету',                           page:'future' },
];

const DEFAULT_VIDEOS = [
  { date:'12 травня 2026', title:'ДонНТУ — 105 років: від гірничого технікуму до національного університету', img:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=450&fit=crop' },
  { date:'4 травня 2026',  title:'Евакуація 2022: голоси викладачів і студентів ДонНТУ', img:'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=450&fit=crop' },
  { date:'18 квітня 2026', title:'Інтерактивне панно «Видатні постаті ДонНТУ» — як це працює', img:'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop' },
];

const readContent = () => {
  try { return JSON.parse(localStorage.getItem(CONTENT_KEY) || '{}'); }
  catch { return {}; }
};

/* ── OverviewPage ─────────────────────────────────────────────── */
const OverviewPage = ({ onNavigate }) => {
  const [ct, setCt] = React.useState(readContent);

  React.useEffect(() => {
    const h = () => setCt(readContent());
    window.addEventListener('donntu-content-updated', h);
    window.addEventListener('storage', h);
    return () => {
      window.removeEventListener('donntu-content-updated', h);
      window.removeEventListener('storage', h);
    };
  }, []);

  /* accessor: content store value with fallback to default */
  const cv = (k, d) => (ct[k] !== undefined && ct[k] !== null && ct[k] !== '') ? ct[k] : d;

  /* dynamic data */
  const news        = cv('newsItems',   DEFAULT_NEWS);
  const reach       = cv('reachStats',  DEFAULT_REACH);
  const speakers    = cv('speakers',    DEFAULT_SPEAKERS);
  const focusAreas  = cv('focusAreas',  DEFAULT_FOCUS);
  const videos      = cv('videos',      DEFAULT_VIDEOS);

  /* hero */
  const heroDate    = cv('heroDate',    '1921 — наш час');
  const heroPlace   = cv('heroPlace',   'Дрогобич · Львівська обл. · Україна');
  const heroTitle   = cv('heroTitle',   'DONNTU\nЦИФРОВА\nСПАДЩИНА');
  const heroTheme   = cv('heroTheme',   'Цифрова спадщина:\nсторічна історія, пам\'ять і відновлення');

  /* theme section */
  const themeH      = cv('themeHeading', 'Тема порталу');
  const themeBody   = cv('themeBody',    'Тема цифрового порталу — «Цифрова спадщина: сторічна історія, пам\'ять і відновлення» — об\'єднує понад 100 років інженерної освіти, науки та культури з місією зберегти ім\'я, обличчя і голос університету. Заснований у 1921 році як гірничий технікум, ДонНТУ пройшов шлях від Донецька через евакуацію до Дрогобича. Тут — архіви, портрети, біографії і надія.');

  /* dialogues */
  const dialogH     = cv('dialoguesHeading', 'Діалоги про спадщину');
  const dialogBody  = cv('dialoguesBody',    'Серія публічних розмов із істориками, випускниками й учнями про те, як зберегти інженерну культуру Донбасу, передати її новим поколінням і вписати у спільну українську спадщину.');
  const dialogImg   = cv('dialoguesImg',     'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=900&h=600&fit=crop');
  const dialogCount = cv('dialoguesCount',   '12 відеозаписів та транскриптів');

  /* host city */
  const hostBlueH   = cv('hostBlueHeading', 'Ми вітаємо ДонНТУ\nу Дрогобичі');
  const hostBlueP1  = cv('hostBlueP1', 'Донецький національний технічний університет продовжує свою столітню місію в нових умовах — у Дрогобичі, Львівська область. Як університет-переселенець, ДонНТУ зберігає понад 100 років інженерної освіти Донбасу й відкриває нову сторінку в серці Галичини.');
  const hostBlueP2  = cv('hostBlueP2', 'Учасники порталу знайдуть тут унікальне поєднання цифрового архіву, живих спогадів та інтерактивних ресурсів — де спадщина і сучасність існують поруч, а люди залишаються в центрі кожної сторінки.');
  const hostPinkP1  = cv('hostPinkP1', 'Дрогобич — стародавнє місто Галичини з багатою культурною спадщиною, розташоване у Львівській області, неподалік Карпат. Місто, де народилися Іван Франко та Бруно Шульц, стало новим домом для ДонНТУ.');
  const hostPinkP2  = cv('hostPinkP2', 'Відмінна інфраструктура й наукова традиція роблять Дрогобич ідеальним місцем для відродження університету.');
  const hostPhoto   = cv('hostCityPhoto', 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=600&fit=crop&q=80');
  const hostQName   = cv('hostQuoteName', 'Денис Шиленко');
  const hostQRole   = cv('hostQuoteRole', 'В. о. ректора Донецького національного технічного університету');
  const hostQText   = cv('hostQuoteText', 'Ми евакуювали університет двічі — і щоразу зберегли головне: людей, знання та ідентичність. Наша місія — готувати інженерів для відбудови України.');

  /* footer */
  const footerBrand   = cv('footerBrand',   'DONNTU');
  const footerTagline = cv('footerTagline',  'Донецький національний технічний університет.\nЦифрова спадщина · Пам\'ять · Відновлення.');
  const footerCopy    = cv('footerCopyright','© 2026 ДонНТУ · Цифрова спадщина · mail@donntu.edu.ua');
  const footerAddr    = cv('footerAddress',  'вул. Самбірська, 76 · Дрогобич · Львівська обл. · donntu.edu.ua');

  const personImg = src => (
    src && src.startsWith('assets/people/') && !src.includes('?')
      ? `${src}?v=${PEOPLE_IMAGE_VERSION}`
      : src
  );

  return (
    <div>

      {/* ══ HOST CITY — Mondrian block ══ */}
      <section className="wuf-host">
        <div className="wuf-host-grid">
          {/* ① Blue */}
          <div className="wuf-host-blue">
            <h2 className="wuf-host-blue-h">
              {hostBlueH.split('\n').map((l,i,a)=>(
                <React.Fragment key={i}>{l}{i<a.length-1&&<br/>}</React.Fragment>
              ))}
            </h2>
            <p className="wuf-host-blue-p">{hostBlueP1}</p>
            <p className="wuf-host-blue-p">{hostBlueP2}</p>
          </div>
          {/* ② Pink */}
          <div className="wuf-host-pink">
            <p className="wuf-host-pink-p">{hostPinkP1}</p>
            <p className="wuf-host-pink-p">{hostPinkP2}</p>
          </div>
          {/* ③ Photo — Вілла Яроша */}
          <div className="wuf-host-photo-box">
            <div className="wuf-host-photo-inner">
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Casco_hist%C3%B3rico_de_Drogobych.jpg" alt="Історичний центр Дрогобича" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} loading="lazy"/>
            </div>
          </div>
          {/* ④ City photo — Вілла Б'янки */}
          <div className="wuf-host-city-photo">
            <img src="assets/drohobych-168.jpg" alt="Вілла Б'янки (Палац мистецтв) — вул. Шевченка, 38" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} loading="lazy"/>
          </div>
          {/* ⑤ City panorama — Ратуша */}
          <div className="wuf-host-illustration">
            <img src="assets/drohobych-panorama.jpg" alt="Дрогобицька Ратуша — символ міста" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} loading="lazy"/>
          </div>
          {/* ⑥ Quote */}
          <div className="wuf-host-quote">
            <div className="wuf-host-quote-avatar">
              <img src="assets/shylenko.jpg" alt="Денис Шиленко" loading="lazy"/>
            </div>
            <div className="wuf-host-quote-name">{hostQName}</div>
            <div className="wuf-host-quote-role">{hostQRole}</div>
            <blockquote className="wuf-host-quote-text">«{hostQText}»</blockquote>
          </div>
        </div>
      </section>

      {/* ══ Arrow: Як долучитись ══ */}
      <section className="wuf-arrow-section">
        <div className="wuf-arrow-section-inner">
          <button className="wuf-arrow-link" onClick={() => onNavigate('applicant')}>
            <div className="wuf-arrow-link-top">
              <span className="wuf-arrow-link-label">Як долучитись?</span>
              <span className="wuf-arrow-link-arrow">→</span>
            </div>
            <span className="wuf-arrow-link-sub">Абітурієнту, кафедри, вступ</span>
          </button>
        </div>
      </section>

      {/* ══ REACH STATS ══ */}
      <section className="wuf-reach">
        <div className="wuf-reach-inner">
          <h2 className="wuf-reach-title">ДонНТУ у цифрах</h2>
          <div className="wuf-reach-grid">
            {reach.map((r, i) => (
              <div key={i} className="wuf-reach-item">
                <div className="wuf-reach-n">{r.n}</div>
                <div className="wuf-reach-l">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SPEAKERS ══ */}
      <section className="wuf-alumni">
        <div className="wuf-alumni-head">
          <div className="wuf-alumni-head-text">
            <h2 className="wuf-alumni-h">Видатні випускники</h2>
            <p className="wuf-alumni-lead">
              Понад 100 років ДонНТУ виховує інженерів, науковців і державних діячів.
              Серед випускників — Герої України, лауреати державних премій, видатні
              митці й політичні постаті.
            </p>
          </div>
        </div>

        <div className="wuf-alumni-grid">
          {speakers.map((s, i) => (
            <article key={i} className="wuf-person">
              <div className="wuf-person-img">
                {s.img
                  ? <img src={personImg(s.img)} alt={s.name} loading={i < 8 ? 'eager' : 'lazy'} decoding="async"/>
                  : <div className="wuf-person-img-fb">{s.name.charAt(0)}</div>
                }
              </div>
              <div className="wuf-person-body">
                {s.meta && <div className="wuf-person-meta">{s.meta}</div>}
                <h3 className="wuf-person-name">{s.name}</h3>
                <div className="wuf-person-role">{s.role}</div>
                {s.bio && <p className="wuf-person-bio">{s.bio}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ══ WAR & UNIVERSITY ══ */}
      <section className="wuf-war">
        <div className="wuf-sec-strip wuf-sec-strip--red">
          <span className="wuf-sec-strip-num">СЕКЦІЯ 03</span>
          <span className="wuf-sec-strip-rule"/>
          <span className="wuf-sec-strip-label">ЧОТИРИ АДРЕСИ ОДНОГО УНІВЕРСИТЕТУ</span>
        </div>
        <div className="wuf-war-head">
          <h2 className="wuf-war-h">Чотири адреси одного університету</h2>
          <p className="wuf-war-lead">
            Від Донецька через Покровськ, Луцьк до Дрогобича — ДонНТУ чотири рази рятував своє ім'я,
            свою місію та своїх людей.
          </p>
        </div>

        <div className="wuf-war-grid">

          {/* 1 — Donetsk */}
          <div className="wuf-war-card wuf-war-card--occupied">
            <div className="wuf-war-card-img">
              <img src="assets/donetsk-main.jpg" alt="Головний корпус ДонНТУ у Донецьку" loading="lazy"/>
              <div className="wuf-war-card-badge wuf-war-card-badge--red">окупований з 2014</div>
            </div>
            <div className="wuf-war-card-body">
              <div className="wuf-war-card-period">1921 — 2014</div>
              <h3 className="wuf-war-card-city">Донецьк</h3>
              <p className="wuf-war-card-addr">вул. Артема, 58</p>
              <p className="wuf-war-card-text">
                Головний кампус на 11 корпусів — місце народження університету.
                Бібліотека, аудиторії, лабораторії — залишені, але не забуті.
                З квітня 2014 — під окупацією.
              </p>
            </div>
          </div>

          {/* 2 — Pokrovsk before */}
          <div className="wuf-war-card">
            <div className="wuf-war-card-img">
              <img src="assets/pokrovsk-main.jpg" alt="Головний корпус ДонНТУ у Покровську, 2021" loading="lazy"/>
              <div className="wuf-war-card-badge wuf-war-card-badge--teal">2021 · до удару</div>
            </div>
            <div className="wuf-war-card-body">
              <div className="wuf-war-card-period">2014 — 2024</div>
              <h3 className="wuf-war-card-city">Покровськ</h3>
              <p className="wuf-war-card-addr">вул. Центральна, 84</p>
              <p className="wuf-war-card-text">
                Після евакуації з окупованого Донецька університет відродився
                у Покровську. Новий кампус — відбудований, живий.
                10 років наукової роботи і навчання.
              </p>
            </div>
          </div>

          {/* 3 — Pokrovsk destroyed */}
          <div className="wuf-war-card wuf-war-card--ruins">
            <div className="wuf-war-card-img">
              <img src="assets/pokrovsk-war-2024.jpg" alt="ДонНТУ після ракетного удару, лютий 2024" loading="lazy"/>
              <div className="wuf-war-card-badge wuf-war-card-badge--red">28.02.2024 · знищено</div>
            </div>
            <div className="wuf-war-card-body">
              <div className="wuf-war-card-period">Покровськ · 2024</div>
              <h3 className="wuf-war-card-city">Знищено</h3>
              <p className="wuf-war-card-text">
                Ракетний удар 28 лютого 2024 року зрівняв головний корпус
                із землею. Викладачі вели заняття онлайн наступного ж дня.
                Навчання не зупинялось жодної хвилини.
              </p>
            </div>
          </div>

          {/* 4 — Lutsk */}
          <div className="wuf-war-card">
            <div className="wuf-war-card-img">
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop" alt="ДонНТУ у Луцьку, 2022" loading="lazy"/>
              <div className="wuf-war-card-badge wuf-war-card-badge--teal">квітень 2022 – 2024</div>
            </div>
            <div className="wuf-war-card-body">
              <div className="wuf-war-card-period">2022 — 2024</div>
              <h3 className="wuf-war-card-city">Луцьк</h3>
              <p className="wuf-war-card-addr">Волинська обл. · на базі ЛНТУ</p>
              <p className="wuf-war-card-text">
                У квітні 2022 університет евакуювався до Луцька. Два роки навчання
                на базі Луцького НТУ — до офіційного переміщення до Дрогобича.
              </p>
            </div>
          </div>

          {/* 5 — Drohobych */}
          <div className="wuf-war-card wuf-war-card--alive">
            <div className="wuf-war-card-img">
              <img src="assets/drohobych-campus.jpg" alt="Кампус ДонНТУ у Дрогобичі, вул. Шевченка 18" loading="lazy"/>
              <div className="wuf-war-card-badge wuf-war-card-badge--green">серпень 2024 → зараз</div>
            </div>
            <div className="wuf-war-card-body">
              <div className="wuf-war-card-period">2024 → сьогодні</div>
              <h3 className="wuf-war-card-city">Дрогобич</h3>
              <p className="wuf-war-card-addr">вул. Шевченка, 18 · Львівська обл.</p>
              <p className="wuf-war-card-text">
                Офіційне переміщення до Дрогобича за наказом МОН від 28 серпня 2024.
                «Дім з фресками» — пам'ятка архітектури XIX ст. — новий дім університету.
              </p>
            </div>
          </div>

        </div>

        <div className="wuf-war-quote">
          <blockquote className="wuf-war-blockquote">
            «Ми евакуювали не лише людей і документи. Ми евакуювали ідентичність.»
          </blockquote>
        </div>
      </section>

      {/* ══ LIBRARY / UNREALIZED DREAM ══ */}
      <section className="wuf-library">
        {/* Section strip */}
        <div className="wuf-sec-strip wuf-sec-strip--teal" style={{position:'relative',zIndex:2}}>
          <span className="wuf-sec-strip-num">СЕКЦІЯ 04</span>
          <span className="wuf-sec-strip-rule"/>
          <span className="wuf-sec-strip-label">НТБ ДОННТУ · НАУКОВО-ТЕХНІЧНА БІБЛІОТЕКА</span>
        </div>
        {/* Full-bleed background photo */}
        <div className="wuf-library-bg">
          <img src="assets/donetsk-library.jpg" alt="НТБ ДонНТУ — будівля бібліотеки у Донецьку" loading="lazy"/>
          <div className="wuf-library-bg-overlay"/>
        </div>
        <div className="wuf-library-inner">
          <div className="wuf-library-left">
            <span className="wuf-library-label">БІБЛІОТЕКА · ЗАСНОВАНО 1921</span>
            <h2 className="wuf-library-h">НТБ ДонНТУ</h2>
            <p className="wuf-library-lead">
              Понад 1 300 000 томів. Сто років зібраних знань.
              Залишилась у Донецьку.
            </p>

            <div className="wuf-library-stats">
              <div className="wuf-library-stat">
                <span className="wuf-library-stat-n">1,3 млн</span>
                <span className="wuf-library-stat-l">томів до 2014 року</span>
              </div>
              <div className="wuf-library-stat">
                <span className="wuf-library-stat-n">250 000</span>
                <span className="wuf-library-stat-l">записів в електронному каталозі</span>
              </div>
              <div className="wuf-library-stat">
                <span className="wuf-library-stat-n">32 000+</span>
                <span className="wuf-library-stat-l">документів у репозиторії ELARDONTU</span>
              </div>
              <div className="wuf-library-stat">
                <span className="wuf-library-stat-n">0</span>
                <span className="wuf-library-stat-l">томів евакуйовано у 2014</span>
              </div>
            </div>

            <p className="wuf-library-body">
              Науково-технічна бібліотека ДонНТУ — одна з найбільших технічних
              бібліотек України — залишилась у захопленому Донецьку. Заснована у 1921 році
              з 200 рукописних методичних посібників, до 1940-го вона налічувала понад
              650 тисяч видань. Унікальне зібрання гірничих, металургійних та інженерних
              видань, архіви дисертацій, рідкісні фонди — все це досі перебуває в окупації.
            </p>

            <div className="wuf-library-dream">
              <div className="wuf-library-dream-tag">Цифрова спадщина</div>
              <p className="wuf-library-dream-text">
                Попри втрату фізичного фонду, бібліотека продовжує роботу: електронний
                каталог налічує ~250 000 записів, репозиторій ELARDONTU — понад 32 000
                документів. Бібліотека має доступ до Web of Science, Scopus та EBSCO.
                У 2012 році посіла 2-ге місце на Всеукраїнському інтернет-конкурсі
                «Найкращий сайт бібліотеки».
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Arrow: Базова стаття ══ */}
      <section className="wuf-arrow-section">
        <div className="wuf-arrow-section-inner">
          <button className="wuf-arrow-link" onClick={() => onNavigate('heritage')}>
            <div className="wuf-arrow-link-top">
              <span className="wuf-arrow-link-label">Сторічна історія ДонНТУ: від технікуму до національного університету</span>
              <span className="wuf-arrow-link-arrow">→</span>
            </div>
          </button>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="wuf-footer">
        <div className="wuf-footer-inner">
          <div className="wuf-footer-top">
            <div>
              <div className="wuf-footer-brand">{footerBrand}</div>
              <p className="wuf-footer-tagline">
                {footerTagline.split('\n').map((l,i,a)=>(
                  <React.Fragment key={i}>{l}{i<a.length-1&&<br/>}</React.Fragment>
                ))}
              </p>
            </div>
            {[
              { heading:'РОЗДІЛИ', links:[
                { l:'Спадщина', p:'heritage' }, { l:'Архів',  p:'archive'  },
                { l:'Панно',    p:'panneau'  }, { l:'Кампус', p:'campus'   },
              ]},
              { heading:'НАВЧАННЯ', links:[
                { l:'Абітурієнту', p:'applicant' }, { l:'Кафедри',    p:'departments' },
                { l:'Наука',       p:'science'    }, { l:'Бібліотека', p:'library'     },
              ]},
              { heading:'УНІВЕРСИТЕТ', links:[
                { l:'Карта', p:'map' }, { l:'Часова капсула', p:'timecapsule' },
                { l:'Досягнення', p:'achievements' }, { l:'Майбутнє', p:'future' },
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
            <span className="wuf-footer-copy">{footerCopy}</span>
            <span className="wuf-footer-copy">{footerAddr}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

Object.assign(window, { OverviewPage });
