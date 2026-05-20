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

/* Видатні випускники ДонНТУ — джерело: donntu.ru/samye-izvestnye-vypuskniki
   (порядок змішано; Звягільського видалено) */
const DEFAULT_SPEAKERS = [
  {
    name: "Анатолій Солов'яненко",
    role: 'Видатний оперний співак, Народний артист СРСР · випуск 1954 · Герой України (2008)',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/solovyanenko1.jpg',
  },
  {
    name: 'Олександр Мінаєв',
    role: 'Інженер-металург, ректор ДонНТУ · випуск 1964 · Герой України (2012)',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/minaev.jpg',
  },
  {
    name: 'Микита Хрущов',
    role: 'Перший секретар ЦК КПРС · слухач робфаку ДГТ (1922–1925) · тричі Герой Соцпраці',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/hrushchev.jpg',
  },
  {
    name: 'Юрій Баранов',
    role: 'Інженер-гірник · випуск 1960 · Герой України (2001) за внесок у вугільну галузь',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/baranov_1.jpg',
  },
  {
    name: 'Борис Грядущий',
    role: 'Інженер-електромеханік гірничий · випуск 1956 · Герой України (2008), енергетика',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/grjaduwij_0.jpg',
  },
  {
    name: 'Володимир Коновалов',
    role: 'Командир підводного човна, Герой Радянського Союзу · слухач ДГТ 1922–1925 · загинув 1967',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/konovalov.jpg',
  },
  {
    name: 'Олександр Богданов',
    role: 'Інженер-механік · випуск 1981 · Герой України (2013) за розвиток вугільної галузі',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/bogdanovom_0.jpg',
  },
  {
    name: 'Юрій Білобров',
    role: 'Інженер-механік · випуск 1965 · Герой України (2004), машинобудування',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/bilobrov_0.jpg',
  },
  {
    name: 'Микола Сургай',
    role: 'Інженер-гірник · випуск 1959 · Герой України (2003), вугільна промисловість',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/surgay_0.jpg',
  },
  {
    name: 'Віктор Калашников',
    role: 'Професор, кандидат технічних наук · лауреат Державної премії · відновлювана енергетика',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/kalahnikov.jpg',
  },
  {
    name: 'Сергій Тулуб',
    role: 'Інженер-економіст гірничий · випуск 1976 · Герой України (2004), атомна енергетика',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/tulub_0.jpg',
  },
  {
    name: 'Станіслав Поважний',
    role: 'Інженер-електромеханік · випуск 1961 · Герой України (2013), розвиток освіти',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/povazhniy-s-f_0.jpg',
  },
  {
    name: 'Олександр Риженков',
    role: 'Інженер-металург (чорна металургія) · випуск 1972 · Герой України (2010)',
    img:  'https://donntu.ru/sites/default/files/styles/graduate/public/graduate/ryzhenkov_0.jpg',
  },
];

const DEFAULT_FOCUS = [
  { n:'Розділ 1', title:'Сторічна історія: від технікуму до університету', page:'heritage' },
  { n:'Розділ 2', title:'Люди, що визначили обличчя ДонНТУ',               page:'people' },
  { n:'Розділ 3', title:'Цифровий архів: документи та фотографії',         page:'archive' },
  { n:'Розділ 4', title:"Війна, евакуація та незламна пам'ять",            page:'war' },
  { n:'Розділ 5', title:'Голоси випускників і викладачів',                  page:'voices' },
  { n:'Розділ 6', title:'Інтерактивне панно «Історія ДонНТУ»',             page:'panneau' },
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
  const hostQName   = cv('hostQuoteName', 'Олександр Янчуков');
  const hostQRole   = cv('hostQuoteRole', 'Ректор Донецького національного технічного університету');
  const hostQText   = cv('hostQuoteText', 'Ми запрошуємо вас долучитися до нашої цифрової спадщини — зберегти ім\'я, обличчя і голос університету, який подолав евакуацію, але не зломився. Наша місія триває.');

  /* footer */
  const footerBrand   = cv('footerBrand',   'DONNTU');
  const footerTagline = cv('footerTagline',  'Донецький національний технічний університет.\nЦифрова спадщина · Пам\'ять · Відновлення.');
  const footerCopy    = cv('footerCopyright','© 2026 ДонНТУ · Цифрова спадщина · mail@donntu.edu.ua');
  const footerAddr    = cv('footerAddress',  'вул. Самбірська, 76 · Дрогобич · Львівська обл. · donntu.edu.ua');

  return (
    <div>
      {/* ══ HERO ══ */}
      <section className="wuf-hero">
        {/* Left: stacked title + meta + CTAs */}
        <div className="wuf-hero-left">
          <h1 className="wuf-hero-title">
            {(heroTitle || 'DONNTU').split('\n').map((line, i) => (
              <span key={i} className="wuf-hero-title-line">{line}</span>
            ))}
          </h1>
          <div className="wuf-hero-meta">
            {heroDate}
            {' · '}
            {heroPlace}
          </div>
          <div className="wuf-hero-btns">
            <button className="wuf-hero-btn wuf-hero-btn-primary" onClick={() => onNavigate('panneau')}>Відкрити панно →</button>
            <button className="wuf-hero-btn wuf-hero-btn-outline" onClick={() => onNavigate('heritage')}>Переглянути спадщину</button>
          </div>
        </div>

        {/* Right: botanical decorations + framed cityscape */}
        <div className="wuf-hero-right">
          <HeroDecoCol items={['leaf','pill-lg','leaf-sm','pill']}/>
          <div className="wuf-hero-frame">
            <CityscapeSVG/>
          </div>
          <HeroDecoCol items={['pill','leaf','tree','leaf-sm']}/>
        </div>
      </section>

      {/* ══ ABOUT SECTION — WUF-style: text left · logo right ══ */}
      <section className="wuf-about">
        {/* Left: heading + lead + body */}
        <div className="wuf-about-left">
          <h2 className="wuf-about-h">Донецький національний технічний університет</h2>
          <p className="wuf-about-lead">
            ДонНТУ — один із провідних технічних університетів України, що веде свою
            понад 100-річну місію попри окупацію та переселення.
          </p>
          <p className="wuf-about-body">
            Заснований 30 травня 1921 року як Донецький гірничий технікум — перший технічний заклад
            Донбасу. За роки існування підготував понад 40 000 інженерів і вчених. З початком
            повномасштабного вторгнення університет евакуювався до Дрогобича Львівської
            області і продовжує роботу.
          </p>
          <p className="wuf-about-body">
            Представники університету, викладачі, студенти та випускники з усього світу
            знайдуть тут цифровий архів, живі спогади та інтерактивні ресурси — де
            спадщина і сучасність існують поруч, а люди залишаються в центрі кожної
            сторінки.
          </p>
        </div>

        {/* Right: logo + CTA */}
        <div className="wuf-about-right">
          {/* Stained-glass DONNTU HERITAGE logo */}
          <svg className="wuf-about-logo" viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg">
            {/* Speech-bubble hexagonal frame */}
            <defs>
              <clipPath id="logoClip">
                <path d="M40,20 Q40,8 52,8 L268,8 Q280,8 280,20 L280,200 Q280,212 268,212 L190,212 L160,240 L130,212 L52,212 Q40,212 40,200 Z"/>
              </clipPath>
            </defs>
            {/* Background sections (stained glass colors) */}
            <g clipPath="url(#logoClip)">
              {/* Sky blue top left */}
              <polygon points="40,8 160,8 100,80 40,60" fill="#7ecef4"/>
              {/* Light blue top center */}
              <polygon points="160,8 280,8 240,70 160,50" fill="#b8dff5"/>
              {/* Teal left */}
              <polygon points="40,60 100,80 80,160 40,140" fill="#3dbdaa"/>
              {/* Red/coral top right */}
              <polygon points="240,70 280,8 280,100 250,120" fill="#e85555"/>
              {/* Orange right */}
              <polygon points="250,120 280,100 280,200 260,180" fill="#f0a030"/>
              {/* Green bottom left */}
              <polygon points="40,140 80,160 60,212 40,212" fill="#4caf7d"/>
              {/* Teal bottom center */}
              <polygon points="80,160 200,180 180,212 60,212" fill="#2a9d8f"/>
              {/* Yellow bottom right */}
              <polygon points="200,180 260,180 280,200 280,212 180,212" fill="#e9c46a"/>
              {/* Ground / arch area */}
              <rect x="70" y="150" width="180" height="65" fill="#b8dcc8"/>
            </g>

            {/* University buildings (stained-glass style) */}
            <g clipPath="url(#logoClip)">
              {/* Main clock tower */}
              <rect x="130" y="55" width="42" height="110" fill="#d4a843" stroke="#111" strokeWidth="2.5"/>
              {/* Tower top */}
              <polygon points="130,55 151,30 172,55" fill="#c49030" stroke="#111" strokeWidth="2.5"/>
              {/* Clock circle */}
              <circle cx="151" cy="72" r="11" fill="#f5e8c0" stroke="#111" strokeWidth="2"/>
              <circle cx="151" cy="72" r="2" fill="#111"/>
              <line x1="151" y1="72" x2="151" y2="64" stroke="#111" strokeWidth="1.5"/>
              <line x1="151" y1="72" x2="157" y2="72" stroke="#111" strokeWidth="1.5"/>
              {/* Tower windows */}
              <rect x="140" y="90" width="8" height="12" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>
              <rect x="153" y="90" width="8" height="12" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>
              <rect x="140" y="112" width="8" height="12" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>
              <rect x="153" y="112" width="8" height="12" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>

              {/* Left wing building */}
              <rect x="72" y="95" width="58" height="75" fill="#d4a843" stroke="#111" strokeWidth="2"/>
              {/* Left building columns arch entrance */}
              <path d="M88,170 L88,140 Q96,128 104,140 L104,170" fill="#2a6496" stroke="#111" strokeWidth="1.5"/>
              {/* Left windows */}
              <rect x="78" y="105" width="12" height="16" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>
              <rect x="96" y="105" width="12" height="16" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>
              <rect x="114" y="105" width="12" height="16" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>

              {/* Right wing building */}
              <rect x="172" y="100" width="60" height="70" fill="#c8a84b" stroke="#111" strokeWidth="2"/>
              <rect x="178" y="112" width="14" height="18" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>
              <rect x="198" y="112" width="14" height="18" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>
              <rect x="218" y="112" width="10" height="18" fill="#7ecef4" stroke="#111" strokeWidth="1.5"/>

              {/* Gear element (tech symbol) — bottom left */}
              <circle cx="92" cy="168" r="22" fill="none" stroke="#2a4a7a" strokeWidth="3"/>
              <circle cx="92" cy="168" r="14" fill="#1e3a5f" stroke="#2a4a7a" strokeWidth="2"/>
              {[0,45,90,135,180,225,270,315].map((deg,i) => {
                const r = deg * Math.PI / 180;
                const x1 = 92 + 16 * Math.cos(r), y1 = 168 + 16 * Math.sin(r);
                const x2 = 92 + 22 * Math.cos(r), y2 = 168 + 22 * Math.sin(r);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2a4a7a" strokeWidth="4"/>;
              })}
              <circle cx="92" cy="168" r="6" fill="#4a8abf"/>

              {/* Crest/emblem on tower */}
              <circle cx="151" cy="48" r="7" fill="#8b6914" stroke="#111" strokeWidth="1.5"/>
            </g>

            {/* Frame border */}
            <path d="M40,20 Q40,8 52,8 L268,8 Q280,8 280,20 L280,200 Q280,212 268,212 L190,212 L160,240 L130,212 L52,212 Q40,212 40,200 Z"
              fill="none" stroke="#111" strokeWidth="3.5"/>

            {/* Inner light grid lines (stained glass leads) */}
            <g stroke="#111" strokeWidth="1.2" opacity="0.5" clipPath="url(#logoClip)">
              <line x1="40" y1="80" x2="280" y2="80"/>
              <line x1="40" y1="150" x2="280" y2="150"/>
              <line x1="130" y1="8" x2="100" y2="212"/>
              <line x1="190" y1="8" x2="200" y2="212"/>
            </g>
          </svg>

          {/* CTA link */}
          <button className="wuf-about-cta" onClick={() => onNavigate('heritage')}>
            <span className="wuf-about-cta-text">Explore DONNTU105</span>
            <span className="wuf-about-cta-line">
              <svg width="120" height="14" viewBox="0 0 120 14">
                <line x1="0" y1="7" x2="108" y2="7" stroke="#2d7d6e" strokeWidth="2"/>
                <polygon points="108,3 120,7 108,11" fill="#2d7d6e"/>
              </svg>
            </span>
          </button>
        </div>
      </section>

      {/* ══ Section tabs ══ */}
      <div className="wuf-section-tabs">
        <button className="wuf-section-tab" onClick={() => onNavigate('people')}>Люди</button>
        <button className="wuf-section-tab" onClick={() => onNavigate('heritage')}>Хронологія</button>
        <button className="wuf-section-tab" onClick={() => onNavigate('panneau')}>Панно</button>
        <button className="wuf-section-tab" onClick={() => onNavigate('voices')}>Голоси</button>
      </div>

      {/* ══ NEWS ══ */}
      <section className="wuf-news">
        <div className="wuf-news-inner">
          <div className="wuf-news-head">
            <h2 className="wuf-news-title">Новини</h2>
            <button className="wuf-news-view-all" onClick={() => onNavigate('archive')}>Усі новини</button>
          </div>
          <div className="wuf-news-grid">
            <div className="wuf-news-main" onClick={() => onNavigate('archive')}>
              <div className="wuf-news-main-img">
                {news[0] && <img src={news[0].img} alt={news[0] && news[0].title} loading="lazy"/>}
              </div>
              <div className="wuf-news-date">{news[0] && news[0].date}</div>
              <h3 className="wuf-news-headline">{news[0] && news[0].title}</h3>
            </div>
            <div className="wuf-news-list">
              <div className="wuf-news-list-inner">
                {news.slice(1).map((n, i) => (
                  <div key={i} className="wuf-news-item" onClick={() => onNavigate('archive')}>
                    <div className="wuf-news-date">{n.date}</div>
                    <div className="wuf-news-item-h">{n.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ THEME ══ */}
      <section className="wuf-theme">
        <div className="wuf-theme-inner">
          <div className="wuf-theme-left">
            <h2 className="wuf-theme-h">{themeH}</h2>
          </div>
          <div className="wuf-theme-right">
            <div className="wuf-theme-body">{themeBody}</div>
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
      <section className="wuf-speakers">
        <div className="wuf-speakers-inner">
          <div className="wuf-speakers-head">
            <h2 className="wuf-news-title">Видатні постаті</h2>
            <button className="wuf-news-view-all" onClick={() => onNavigate('people')}>Усі люди</button>
          </div>
          <div className="wuf-speakers-grid">
            {speakers.map((s, i) => (
              <div key={i} className="wuf-speaker" onClick={() => onNavigate('people')}>
                <div className="wuf-speaker-img">
                  {s.img
                    ? <img src={s.img} alt={s.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} loading="lazy"/>
                    : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'#E2E4E8',color:'#7A7E87',fontSize:'3rem',fontFamily:'var(--display)',fontWeight:400}}>{s.name.charAt(0)}</div>
                  }
                </div>
                <div className="wuf-speaker-body">
                  <div className="wuf-speaker-name">{s.name}</div>
                  <div className="wuf-speaker-role">{s.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DIALOGUES ══ */}
      <section className="wuf-dialogues">
        <div className="wuf-dialogues-inner">
          <div className="wuf-dialogues-text">
            <h2 className="wuf-dialogues-h">{dialogH}</h2>
            <p className="wuf-dialogues-p">{dialogBody}</p>
            <button className="wuf-arrow-link" onClick={() => onNavigate('voices')}>
              <div className="wuf-arrow-link-top">
                <span className="wuf-arrow-link-label">Дивитися всі діалоги</span>
                <span className="wuf-arrow-link-arrow">→</span>
              </div>
              <span className="wuf-arrow-link-sub">{dialogCount}</span>
            </button>
          </div>
          <div className="wuf-dialogues-img">
            <img src={dialogImg} alt="Діалоги про спадщину" loading="lazy"/>
          </div>
        </div>
      </section>

      {/* ══ Arrow: Базова стаття ══ */}
      <section className="wuf-arrow-section">
        <div className="wuf-arrow-section-inner">
          <button className="wuf-arrow-link" onClick={() => onNavigate('heritage')}>
            <div className="wuf-arrow-link-top">
              <span className="wuf-arrow-link-label">Базова стаття</span>
              <span className="wuf-arrow-link-arrow">→</span>
            </div>
            <span className="wuf-arrow-link-sub">Сторічна історія ДонНТУ: від технікуму до національного університету</span>
          </button>
        </div>
      </section>

      {/* ══ FOCUS AREAS ══ */}
      <section className="wuf-focus">
        <div className="wuf-focus-head">
          <h2 className="wuf-news-title">Ключові розділи</h2>
        </div>
        <div className="wuf-focus-inner">
          <div className="wuf-focus-grid">
            {focusAreas.map((f, i) => (
              <div key={i} className="wuf-focus-card" onClick={() => onNavigate(f.page)}>
                <div className="wuf-focus-card-num">{f.n}</div>
                <div className="wuf-focus-card-title">{f.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ Arrow: Усі сесії ══ */}
      <section className="wuf-arrow-section">
        <div className="wuf-arrow-section-inner">
          <button className="wuf-arrow-link" onClick={() => onNavigate('panneau')}>
            <div className="wuf-arrow-link-top">
              <span className="wuf-arrow-link-label">Усі сесії та події</span>
              <span className="wuf-arrow-link-arrow">→</span>
            </div>
            <span className="wuf-arrow-link-sub">Конференції, лекції, виставки</span>
          </button>
        </div>
      </section>

      {/* ══ VIDEOS ══ */}
      <section className="wuf-videos">
        <div className="wuf-videos-inner">
          <div className="wuf-videos-head">
            <h2 className="wuf-videos-title">Відеоматеріали</h2>
            <button className="wuf-news-view-all" onClick={() => onNavigate('archive')}>Усі відео</button>
          </div>
          <div className="wuf-videos-grid">
            {videos.map((v, i) => (
              <div key={i} className="wuf-video-card" onClick={() => onNavigate('archive')}>
                <div className="wuf-video-thumb">
                  <img src={v.img} alt={v.title} loading="lazy"/>
                  <div className="wuf-video-play">▶</div>
                </div>
                <div className="wuf-video-card-body">
                  <div className="wuf-video-meta">{v.date}</div>
                  <div className="wuf-video-title">{v.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
          {/* ③ Photo placeholder */}
          <div className="wuf-host-photo-box">
            <div className="wuf-host-photo-inner">
              <div style={{width:'100%',height:'100%',background:'#E8EAF0',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'5rem',color:'#9199AA',fontFamily:'var(--display)',fontWeight:400}}>О</div>
            </div>
          </div>
          {/* ④ City photo */}
          <div className="wuf-host-city-photo">
            <img src={hostPhoto} alt="Карпати поблизу Дрогобича" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} loading="lazy"/>
          </div>
          {/* ⑤ Illustration */}
          <div className="wuf-host-illustration">
            <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
              <rect width="300" height="300" fill="#6BC8E5"/>
              <circle cx="240" cy="60" r="38" fill="#F5D248" stroke="#000" strokeWidth="2"/>
              <rect x="0" y="200" width="300" height="100" fill="#5FB85F"/>
              <rect x="90" y="100" width="120" height="110" fill="#F08D3F" stroke="#000" strokeWidth="2.5"/>
              <polygon points="90,100 150,55 210,100" fill="#C0392B" stroke="#000" strokeWidth="2.5"/>
              {[115,155,195].map((x,i)=>[120,150,178].map((y,j)=>(
                <rect key={i*3+j} x={x} y={y} width="16" height="18" fill="#6BC8E5" stroke="#000" strokeWidth="1.5"/>
              )))}
              <rect x="10" y="160" width="60" height="50" fill="#E84A6A" stroke="#000" strokeWidth="2"/>
              <polygon points="10,160 40,130 70,160" fill="#9B59B6" stroke="#000" strokeWidth="2"/>
              <rect x="235" y="130" width="45" height="80" fill="#005ab8" stroke="#000" strokeWidth="2"/>
              <polygon points="235,130 257,95 280,130" fill="#2ECC71" stroke="#000" strokeWidth="2"/>
              <rect x="78" y="210" width="8" height="30" fill="#7A4A2F"/>
              <ellipse cx="82" cy="200" rx="18" ry="22" fill="#27AE60" stroke="#000" strokeWidth="1.5"/>
              <rect x="215" y="215" width="8" height="25" fill="#7A4A2F"/>
              <ellipse cx="219" cy="206" rx="16" ry="20" fill="#27AE60" stroke="#000" strokeWidth="1.5"/>
            </svg>
          </div>
          {/* ⑥ Quote */}
          <div className="wuf-host-quote">
            <div className="wuf-host-quote-name">{hostQName}</div>
            <div className="wuf-host-quote-role">{hostQRole}</div>
            <blockquote className="wuf-host-quote-text">«{hostQText}»</blockquote>
          </div>
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
                { l:'Спадщина', p:'heritage'   }, { l:'Люди',     p:'people'   },
                { l:'Архів',    p:'archive'    }, { l:'Панно',    p:'panneau'  }, { l:'Голоси',  p:'voices' },
              ]},
              { heading:'НАВЧАННЯ', links:[
                { l:'Абітурієнту', p:'applicant' }, { l:'Кафедри',  p:'departments' },
                { l:'Наука',       p:'science'    }, { l:'Бібліотека', p:'library' },
              ]},
              { heading:"ПАМ'ЯТЬ", links:[
                { l:'Війна', p:'war' }, { l:'Карта', p:'map' },
                { l:'Часова капсула', p:'timecapsule' }, { l:'Майбутнє', p:'future' },
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
