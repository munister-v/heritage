/* Heritage Page v9 — matches overview Mondrian visual language exactly */

const HERITAGE_TIMELINE = [
  { yr: 1921, title: 'Заснування', desc: '30 травня 1921 — відкриття Донецького гірничого технікуму. Перший технічний заклад вищої освіти Донбасу. Місто тоді ще називалося Юзівка.', tag: 'ЗАСНУВАННЯ' },
  { yr: 1941, title: 'Евакуація I', desc: 'Евакуація до Прокоп\'євська під час нацистської окупації. Інститут не припиняв навчання — готував інженерів для оборонної промисловості.', tag: 'ВІЙНА' },
  { yr: 1944, title: 'Державна нагорода', desc: 'Орден Трудового Червоного Прапора — перший технічний університет України з цією нагородою.', tag: 'НАГОРОДА' },
  { yr: 2001, title: 'Національний статус', desc: 'ДонНТУ: 12 факультетів, понад 20 000 студентів, QS-рейтинг 251–300 (Emerging Europe & Central Asia).', tag: 'РОЗКВІТ' },
  { yr: 2014, title: 'Переміщення I', desc: 'Кампус під окупацією. Університет переміщується до Покровська. Без корпусів — але з людьми і ліцензіями.', tag: 'ПЕРЕМІЩЕННЯ' },
  { yr: 2022, title: 'Переміщення II', desc: '12 квітня 2022 — переїзд до Луцька. 28 серпня 2024 — відкриття кампусу в Дрогобичі.', tag: 'ПЕРЕМІЩЕННЯ' },
  { yr: 2026, title: 'Heritage OS', desc: 'DonNTU Heritage OS — цифровий двійник університету. Симуляції, архів, сертифікаційна платформа. Університет існує незалежно від адреси.', tag: 'СЬОГОДНІ' },
];

const FAMOUS_ALUMNI = [
  { name: 'Микита Хрущов', born: 1894, field: 'Робітничий факультет', title: 'Перший секретар ЦК КПРС (1953–1964)', desc: 'Навчався в технікумі. Ініціатор «відлиги» та першого космічного польоту.' },
  { name: 'Анатолій Солов\'яненко', born: 1932, field: 'Гірнича інженерія · 1954', title: 'Тенор · Народний артист СРСР', desc: 'Закінчив ДПІ і викладав інженерну графіку. La Scala, Метрополітен, Ковент-Гарден.' },
  { name: 'Юхим Звягільський', born: 1933, field: 'Гірнича справа', title: 'В.о. Прем\'єр-міністра України (1993–1994)', desc: 'Директор шахти «Засядька», народний депутат України.' },
  { name: 'Ольга Буславець', born: 1975, field: 'Економічний факультет', title: 'Міністр енергетики України (2020)', desc: 'Перша жінка-Міністр енергетики. Реформа ринку та інтеграція з ENTSO-E.' },
  { name: 'Станіслав Асєєв', born: 1989, field: 'КН / Журналістика', title: 'Журналіст, правозахисник', desc: 'Залишився в окупованому Донецьку для репортажів. Захоплений у 2017, звільнений у 2019.' },
];

const HERITAGE_VOICES = [
  { q: 'Ми приймаємо студентів, які ніколи не побачать стін, де вчилися їхні батьки. Але вони отримують ті самі знання, той самий диплом, ту саму відповідальність.', name: 'Д. С. Шиленко', role: 'Ректор ДонНТУ · Дрогобич, 2024', verified: true },
  { q: 'Університет пережив окупацію 1941 року — і продовжив роботу у Прокоп\'євську. Пережив 2014-й. Переживе і це.', name: 'Академічний щорічник ДонНТУ', role: 'Офіційне видання, 2022', verified: true },
  { q: 'Кампус існує не в місці. Він існує в людях, які його несуть з собою.', name: 'Викладач гірничого факультету', role: 'Дрогобич, 2025' },
  { q: 'Мій дід закінчив ДПІ в Донецьку, мій батько — ДонНТУ там само. Я закінчую ДонНТУ в Луцьку. Один університет — три адреси, одна якість.', name: 'Студент гірничого факультету', role: '4 курс · 2025' },
];

const RECTORS = [
  { name: 'Г. В. Малєєв', years: '1968–1989', era: 'Науковий розквіт', desc: 'Понад 20 років очолював інститут. ДПІ виріс до провідного технічного вузу УРСР.' },
  { name: 'О. А. Мінаєв', years: '1989–2014', era: 'Трансформація та розквіт', desc: 'Герой України. 20 000+ студентів, QS-рейтинг, національний статус 2001.' },
  { name: 'Я. О. Ляшок', years: '2014–2019', era: 'Перше переміщення', desc: 'Зберіг акредитацію і академічний склад у переміщенні до Покровська.' },
  { name: 'Д. С. Шиленко', years: '2019–н.ч.', era: 'Стійкість і відродження', desc: 'Відкрив кампус у Дрогобичі 2024. Розвиває Erasmus+ та цифрову інфраструктуру.' },
];

/* ─── CSS values to match overview page exactly ─── */
const WUF_BLUE  = '#005ab8';
const WUF_PINK  = '#f48ba2';
const WUF_TEAL  = '#c0e5e7';
const WUF_YELL  = '#f5d248';
const WUF_ORG   = '#f26522';   /* --ac from brand */
const WUF_DARK  = '#0d0f14';
const WUF_CREAM = '#f0ede6';

/* Exact type scale from overview wuf-host-* classes */
const T_BODY  = { fontFamily: 'var(--display)', fontSize: '1.5rem', lineHeight: '2rem',   fontWeight: 400 };
const T_HEAD  = { fontFamily: 'var(--display)', fontSize: '2rem',   lineHeight: '2.5rem', fontWeight: 400 };
const T_LABEL = { fontFamily: 'var(--mono)',    fontSize: '0.6rem', lineHeight: '1rem',   letterSpacing: '0.14em', textTransform: 'uppercase' };
const T_STAT  = { fontFamily: 'var(--display)', fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 800, lineHeight: 1 };
const T_HERO  = { fontFamily: 'var(--display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 800, lineHeight: 1.1 };
const T_QUOTE = { fontFamily: 'var(--display)', fontSize: '1.5rem', lineHeight: '2rem',   fontWeight: 400, fontStyle: 'italic' };

const PAD   = '3rem';         /* 48px — matches wuf-host-blue */
const PAD_V = '5rem 3rem';   /* 80/48 — matches wuf-host-pink */
const BORDER = '1px solid rgba(0,0,0,0.08)';
const BORDER_D = '1px solid rgba(255,255,255,0.07)';

/* Photo tile component */
const PT = ({ src, alt, caption, style = {} }) => (
  <div style={{ position: 'relative', overflow: 'hidden', ...style }}>
    <img src={src} alt={alt} loading="lazy"
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    {caption && (
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
        padding: '2.5rem 1.25rem 0.875rem',
        ...T_LABEL, color: 'rgba(255,255,255,0.8)' }}>
        {caption}
      </div>
    )}
  </div>
);

/* Section label bar */
const SL = ({ label, right, dark }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem',
    padding: dark ? '2.5rem 3rem 1.25rem' : '2.5rem 3rem 1.25rem',
    borderTop: dark ? BORDER_D : BORDER }}>
    <span style={{ ...T_LABEL, color: dark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.35)', flexShrink: 0 }}>{label}</span>
    <div style={{ flex: 1, height: 1, background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }} />
    {right && <span style={{ ...T_LABEL, color: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)', flexShrink: 0 }}>{right}</span>}
  </div>
);

const HeritagePage = ({ onNavigate }) => (
  <div style={{ background: '#fff', minHeight: '100%' }}>

    {/* ══ §1  HERO ══════════════════════════════════════════════ */}
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', minHeight: 480, borderBottom: BORDER }}>

      {/* Blue: heading */}
      <div style={{ background: WUF_BLUE, color: '#fff', padding: PAD,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
        <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.6)' }}>02 · СПАДЩИНА · ОСЕРДЯ СИСТЕМИ</div>
        <h1 style={{ ...T_HERO, color: '#fff', margin: 0 }}>
          Університет,<br />
          що{' '}<em style={{ fontStyle: 'italic', color: WUF_YELL }}>не має</em><br />
          фізичного місця.
        </h1>
        <p style={{ ...T_BODY, fontSize: '1.125rem', lineHeight: '1.75rem', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
          DonNTU існує понад сто років. Два переміщення, дві евакуації, три міста —
          і жодного разу університет не закрився.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
          <button className="wuf-hos-btn wuf-hos-btn--primary">Цифровий архів →</button>
          <button className="wuf-hos-btn wuf-hos-btn--ghost" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Кампус</button>
        </div>
      </div>

      {/* Photo: campus */}
      <PT src="assets/donetsk-main.jpg" alt="Головний корпус ДонНТУ"
        caption="1-й корпус · вул. Артема, 58"
        style={{ borderLeft: BORDER, borderRight: BORDER }} />

      {/* Year tile */}
      <div style={{ background: WUF_ORG, color: '#fff', padding: PAD,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>ЗАСНОВАНО</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(4rem,8vw,6rem)',
          fontWeight: 800, lineHeight: 1, color: '#fff' }}>1921</div>
        <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>
          105 РОКІВ · БЕЗПЕРЕРВНОЇ РОБОТИ
        </div>
      </div>
    </div>

    {/* ══ §2  STATS ════════════════════════════════════════════ */}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', borderBottom: BORDER }}>
      {[
        { n: '110 000+', l: 'Випускників за всю історію',  bg: '#fff' },
        { n: '~20 000',  l: 'Студентів на піку 2001–2014', bg: WUF_TEAL },
        { n: 'QS 251–300',l:'Рейтинг EECA 2022',          bg: WUF_BLUE, light: true },
        { n: '1,5 млн',  l: 'Томів у бібліотеці Донецька', bg: WUF_PINK },
      ].map((s, i) => (
        <div key={i} style={{ background: s.bg, padding: '2.5rem 2rem',
          borderRight: i < 3 ? BORDER : 'none',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '0.5rem' }}>
          <div style={{ ...T_STAT, color: s.light ? '#fff' : '#111214' }}>{s.n}</div>
          <div style={{ ...T_LABEL, color: s.light ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.45)' }}>{s.l}</div>
        </div>
      ))}
    </div>

    {/* ══ §3  КАМПУС ══════════════════════════════════════════ */}
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr',
      gridTemplateRows: '340px 300px', borderBottom: BORDER }}>

      {/* Big main photo */}
      <PT src="assets/donetsk-main.jpg" alt="Головний корпус ДонНТУ"
        caption="1-й корпус · вул. Артема, 58 · Донецьк"
        style={{ gridRow: '1/2', borderRight: BORDER }} />

      {/* Pink text tile */}
      <div style={{ background: WUF_PINK, padding: PAD_V,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: BORDER }}>
        <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.4)', marginBottom: '1rem' }}>КАМПУС · ДОНЕЦЬК</div>
        <p style={{ ...T_BODY, fontSize: '1.25rem', lineHeight: '1.875rem', color: '#111214', margin: 0 }}>
          Одинадцять корпусів у центрі Донецька.
          Головна будівля — пам'ятник архітектури 1930-х.
          Бібліотека з 1,5 млн томів. Все залишилось там —
          нетронуте, недоступне.
        </p>
      </div>

      {/* Facade photo */}
      <PT src="assets/donetsk-facade.jpg" alt="Фасад ДонНТУ" caption="Фасад · вул. Артема" />

      {/* Artyoma street photo */}
      <PT src="assets/donetsk-artyoma.jpg" alt="Вул. Артема, Донецьк"
        caption="Вул. Артема · Донецьк"
        style={{ borderTop: BORDER, borderRight: BORDER }} />

      {/* Drohobych campus photo */}
      <PT src="assets/drohobych-campus.jpg" alt="Кампус у Дрогобичі"
        caption="Кампус ДонНТУ · Дрогобич · 2024"
        style={{ borderTop: BORDER, borderRight: BORDER }} />

      {/* Orange: current address */}
      <div style={{ background: WUF_ORG, color: '#fff', padding: PAD,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', borderTop: BORDER }}>
        <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>ЗАРАЗ</div>
        <div style={{ ...T_HEAD, color: '#fff', marginBottom: '0.5rem' }}>
          Дрогобич,<br />Львівська обл.
        </div>
        <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.6)' }}>ВІДКРИТО · 28.08.2024</div>
      </div>
    </div>

    {/* ══ §4  ХРОНОЛОГІЯ ══════════════════════════════════════ */}
    <SL label="Хронологія · 1921 – 2026" />

    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', borderTop: BORDER }}>
      {/* 1921 — big teal tile */}
      <div style={{ background: WUF_TEAL, padding: PAD, borderRight: BORDER,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 300 }}>
        <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.4)', marginBottom: '0.75rem' }}>ЗАСНУВАННЯ</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(4rem,8vw,7rem)',
          fontWeight: 800, lineHeight: 1, color: '#111214', marginBottom: '0.75rem' }}>1921</div>
        <div style={{ ...T_BODY, fontSize: '1.25rem', lineHeight: '1.875rem', color: '#111214' }}>
          Гірничий технікум у Юзівці.<br />
          Перший технічний заклад Донбасу.
        </div>
      </div>

      {/* 1941 — pink war */}
      <div style={{ background: WUF_PINK, padding: PAD, borderRight: BORDER,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.4)', marginBottom: '0.75rem' }}>ВІЙНА · ЕВАКУАЦІЯ</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.5rem,5vw,4rem)',
          fontWeight: 800, lineHeight: 1, color: '#111214', marginBottom: '0.75rem' }}>1941</div>
        <div style={{ ...T_BODY, fontSize: '1.1rem', lineHeight: '1.75rem', color: '#111214' }}>
          До Прокоп'євська.<br />
          Навчання тривало<br />
          навіть під час війни.
        </div>
      </div>

      {/* 1944 — yellow award */}
      <div style={{ background: WUF_YELL, padding: PAD,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.4)', marginBottom: '0.75rem' }}>НАГОРОДА ДЕРЖАВИ</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.5rem,5vw,4rem)',
          fontWeight: 800, lineHeight: 1, color: '#111214', marginBottom: '0.75rem' }}>1944</div>
        <div style={{ ...T_BODY, fontSize: '1.1rem', lineHeight: '1.75rem', color: '#111214' }}>
          Орден Трудового<br />Червоного Прапора.
        </div>
      </div>
    </div>

    {/* Timeline row 2 */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', borderTop: BORDER }}>
      {/* 2001 — blue */}
      <div style={{ background: WUF_BLUE, color: '#fff', padding: PAD, borderRight: BORDER,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: 280 }}>
        <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.55)', marginBottom: '0.75rem' }}>РОЗКВІТ</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.5rem,5vw,4rem)',
          fontWeight: 800, lineHeight: 1, color: '#fff', marginBottom: '0.75rem' }}>2001</div>
        <div style={{ ...T_BODY, fontSize: '1rem', lineHeight: '1.625rem', color: 'rgba(255,255,255,0.85)' }}>
          Національний статус.<br />20 000 студентів.<br />QS 251–300.
        </div>
      </div>

      {/* 2014 — dark */}
      <div style={{ background: '#1a1a2e', color: '#fff', padding: PAD, borderRight: BORDER,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.35)', marginBottom: '0.75rem' }}>ОКУПАЦІЯ</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.5rem,5vw,4rem)',
          fontWeight: 800, lineHeight: 1, color: WUF_CREAM, marginBottom: '0.75rem' }}>2014</div>
        <div style={{ ...T_BODY, fontSize: '1rem', lineHeight: '1.625rem', color: 'rgba(255,255,255,0.65)' }}>
          Переміщення до Покровська.<br />Без корпусів —<br />але з людьми.
        </div>
      </div>

      {/* 2022 — Drohobych photo */}
      <PT src="assets/drohobych-panorama.jpg" alt="Дрогобич"
        caption="Дрогобич · нова адреса · 2024"
        style={{ borderRight: BORDER, minHeight: 280 }} />

      {/* 2026 — orange */}
      <div style={{ background: WUF_ORG, color: '#fff', padding: PAD,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem' }}>СЬОГОДНІ</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(2.5rem,5vw,4rem)',
          fontWeight: 800, lineHeight: 1, color: '#fff', marginBottom: '0.75rem' }}>2026</div>
        <div style={{ ...T_BODY, fontSize: '1rem', lineHeight: '1.625rem', color: 'rgba(255,255,255,0.85)' }}>
          Heritage OS.<br />Цифровий двійник<br />університету.
        </div>
      </div>
    </div>

    {/* ══ §5  ЗНАМЕНИТІ ВИПУСКНИКИ ════════════════════════════ */}
    <SL label="Знамениті випускники · Верифіковані особи" />

    {/* Alumni grid — varies */}
    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', borderTop: BORDER, borderBottom: BORDER }}>

      {/* Хрущов — big blue */}
      <div style={{ background: WUF_BLUE, color: '#fff', padding: PAD,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        minHeight: 340, borderRight: BORDER }}>
        <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.5)', marginBottom: '0.75rem' }}>
          РОБІТНИЧИЙ ФАКУЛЬТЕТ · Н. 1894
        </div>
        <div style={{ ...T_HEAD, color: '#fff', marginBottom: '0.5rem' }}>Микита Хрущов</div>
        <div style={{ ...T_BODY, fontSize: '1.125rem', lineHeight: '1.75rem',
          color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', marginBottom: '0.75rem' }}>
          Перший секретар ЦК КПРС (1953–1964)
        </div>
        <div style={{ ...T_BODY, fontSize: '1rem', lineHeight: '1.625rem', color: 'rgba(255,255,255,0.75)' }}>
          Ініціатор «відлиги» та першого космічного польоту.
          Навчався в технікумі, пізніше — лідер СРСР.
        </div>
      </div>

      {/* Солов'яненко — pink */}
      <div style={{ background: WUF_PINK, padding: PAD,
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.4)', marginBottom: '0.75rem' }}>
          ГІРНИЧА ІНЖЕНЕРІЯ · 1954
        </div>
        <div style={{ ...T_HEAD, color: '#111214', marginBottom: '0.5rem' }}>
          Анатолій Солов'яненко
        </div>
        <div style={{ ...T_BODY, fontSize: '1rem', lineHeight: '1.625rem',
          fontStyle: 'italic', color: '#111214', marginBottom: '0.75rem' }}>
          Тенор · Народний артист СРСР (1975)
        </div>
        <div style={{ ...T_BODY, fontSize: '0.95rem', lineHeight: '1.5rem', color: 'rgba(0,0,0,0.7)' }}>
          Закінчив ДПІ, викладав інженерну графіку.
          La Scala, Метрополітен, Ковент-Гарден.
        </div>
      </div>
    </div>

    {/* Alumni row 2 */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderBottom: BORDER }}>
      {[
        { a: FAMOUS_ALUMNI[2], bg: WUF_TEAL,  tc: '#111214', mc: 'rgba(0,0,0,0.4)'   },
        { a: FAMOUS_ALUMNI[3], bg: '#fff',     tc: '#111214', mc: 'rgba(0,0,0,0.4)'   },
        { a: FAMOUS_ALUMNI[4], bg: WUF_DARK,   tc: WUF_CREAM, mc: 'rgba(255,255,255,0.35)' },
      ].map(({ a, bg, tc, mc }, i) => (
        <div key={i} style={{ background: bg, color: tc, padding: PAD, minHeight: 280,
          borderRight: i < 2 ? BORDER : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ ...T_LABEL, color: mc, marginBottom: '0.75rem' }}>
            {a.field} · Н. {a.born}
          </div>
          <div style={{ fontFamily: 'var(--display)', fontSize: '1.5rem', fontWeight: 700,
            lineHeight: 1.25, color: tc, marginBottom: '0.4rem' }}>{a.name}</div>
          <div style={{ ...T_BODY, fontSize: '0.9rem', fontStyle: 'italic',
            color: tc === WUF_CREAM ? 'rgba(240,237,230,0.7)' : 'rgba(0,0,0,0.6)',
            lineHeight: '1.5rem', marginBottom: '0.5rem' }}>{a.title}</div>
          <div style={{ ...T_BODY, fontSize: '0.85rem', lineHeight: '1.4rem',
            color: tc === WUF_CREAM ? 'rgba(240,237,230,0.55)' : 'rgba(0,0,0,0.55)' }}>{a.desc}</div>
        </div>
      ))}
    </div>

    {/* ══ §6  РЕКТОРИ ═════════════════════════════════════════ */}
    <SL label="Ректори · Верифіковані дані" right="donntu.edu.ua · Wikipedia" />

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderTop: BORDER, borderBottom: BORDER }}>
      {RECTORS.map((r, i) => {
        const schemes = [
          { bg: WUF_TEAL, tc: '#111214', mc: 'rgba(0,0,0,0.4)' },
          { bg: '#fff',   tc: '#111214', mc: 'rgba(0,0,0,0.4)' },
          { bg: WUF_BLUE, tc: '#fff',    mc: 'rgba(255,255,255,0.5)' },
          { bg: WUF_PINK, tc: '#111214', mc: 'rgba(0,0,0,0.4)' },
        ];
        const { bg, tc, mc } = schemes[i];
        return (
          <div key={i} style={{ background: bg, color: tc, padding: PAD, minHeight: 240,
            borderRight: i % 2 === 0 ? BORDER : 'none',
            borderBottom: i < 2 ? BORDER : 'none',
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <div style={{ ...T_LABEL, color: mc, marginBottom: '0.75rem',
              background: 'rgba(0,0,0,0.08)', display: 'inline-block',
              padding: '0.2rem 0.6rem', borderRadius: 2, alignSelf: 'flex-start' }}>
              {r.era}
            </div>
            <div style={{ fontFamily: 'var(--display)', fontSize: '1.75rem',
              fontWeight: 700, lineHeight: 1.2, color: tc, marginBottom: '0.25rem' }}>{r.name}</div>
            <div style={{ ...T_LABEL, color: mc, marginBottom: '0.75rem' }}>{r.years}</div>
            <div style={{ ...T_BODY, fontSize: '1rem', lineHeight: '1.625rem', color: mc }}>{r.desc}</div>
          </div>
        );
      })}
    </div>

    {/* ══ §7  ГОЛОСИ ══════════════════════════════════════════ */}
    <SL label="Голоси · Свідчення" />

    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', borderTop: BORDER, borderBottom: BORDER }}>

      {/* Big quote — teal */}
      <div style={{ background: WUF_TEAL, padding: PAD, borderRight: BORDER,
        display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 340 }}>
        <blockquote style={{ ...T_QUOTE, fontSize: '1.75rem', lineHeight: '2.25rem',
          color: '#111214', margin: '0 0 2rem' }}>
          «{HERITAGE_VOICES[0].q}»
        </blockquote>
        <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.45)', marginBottom: '0.25rem' }}>
          {HERITAGE_VOICES[0].name}
        </div>
        <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.3)' }}>{HERITAGE_VOICES[0].role}</div>
      </div>

      {/* Stack: quote 2 + 3 */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ background: WUF_BLUE, color: '#fff', padding: PAD, flex: 1,
          display: 'flex', flexDirection: 'column', justifyContent: 'center', borderBottom: BORDER }}>
          <blockquote style={{ ...T_QUOTE, fontSize: '1.1rem', lineHeight: '1.75rem',
            color: '#fff', margin: '0 0 1rem' }}>
            «{HERITAGE_VOICES[1].q}»
          </blockquote>
          <div style={{ ...T_LABEL, color: 'rgba(255,255,255,0.5)' }}>{HERITAGE_VOICES[1].name}</div>
        </div>
        <div style={{ background: WUF_PINK, padding: PAD, flex: 1,
          display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <blockquote style={{ ...T_QUOTE, fontSize: '1.1rem', lineHeight: '1.75rem',
            color: '#111214', margin: '0 0 1rem' }}>
            «{HERITAGE_VOICES[2].q}»
          </blockquote>
          <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.4)' }}>{HERITAGE_VOICES[2].name}</div>
        </div>
      </div>
    </div>

    {/* Voice row 2 */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: BORDER }}>
      {HERITAGE_VOICES.slice(2).map((v, i) => (
        <div key={i} style={{ background: i === 0 ? '#fff' : WUF_YELL,
          padding: PAD, minHeight: 260,
          borderRight: i === 0 ? BORDER : 'none',
          display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <blockquote style={{ ...T_QUOTE, fontSize: '1.25rem', lineHeight: '2rem',
            color: '#111214', margin: '0 0 1.5rem' }}>
            «{v.q}»
          </blockquote>
          <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.45)', marginBottom: '0.25rem' }}>{v.name}</div>
          <div style={{ ...T_LABEL, color: 'rgba(0,0,0,0.3)' }}>{v.role}</div>
        </div>
      ))}
    </div>

    {/* ══ §8  МАНІФЕСТ CTA ════════════════════════════════════ */}
    <div style={{ background: WUF_DARK, color: WUF_CREAM,
      padding: 'clamp(4rem,8vw,8rem) 3rem',
      textAlign: 'center', display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: '2rem' }}>
      <div style={{ ...T_LABEL, color: WUF_ORG }}>МАНІФЕСТ</div>
      <h2 style={{ fontFamily: 'var(--display)', fontWeight: 800,
        fontSize: 'clamp(2rem,6vw,5rem)', lineHeight: 1.1,
        color: WUF_CREAM, margin: 0, maxWidth: 800 }}>
        Пам'ять{' '}
        <em style={{ fontStyle: 'italic', color: WUF_YELL }}>активується</em>,<br />
        а не зберігається.
      </h2>
      <p style={{ ...T_BODY, fontSize: '1.125rem', color: 'rgba(240,237,230,0.65)',
        maxWidth: 560, margin: 0, lineHeight: '1.75rem' }}>
        Кожна лабораторія, кожна сесія симуляції, кожен документ архіву —
        акт активації. Ви не вивчаєте університет. Ви <em>є</em> університетом.
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap',
        justifyContent: 'center', marginTop: '1rem' }}>
        <button className="wuf-hos-btn wuf-hos-btn--primary">Отримати сертифікат →</button>
        <button className="wuf-hos-btn wuf-hos-btn--ghost">Цифровий архів</button>
        <button className="wuf-hos-btn wuf-hos-btn--ghost">Симуляція</button>
      </div>
    </div>

  </div>
);
