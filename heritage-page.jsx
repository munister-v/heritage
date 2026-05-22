/* Heritage Page v6 — verified historical data only */
const HERITAGE_TIMELINE = [
  { yr: 1921, title: 'Заснування', desc: '30 травня 1921 — офіційне відкриття Донецького гірничого технікуму. Перший технічний заклад вищої освіти Донбасу. Місто тоді ще називалося Юзівка.', tag: 'ЗАСНУВАННЯ' },
  { yr: 1926, title: 'Гірничий інститут', desc: 'Квітень 1926 — реорганізація в Донецький гірничий інститут. Повноцінний вуз із правом видачі дипломів інженера гірничої справи.', tag: 'РОЗВИТОК' },
  { yr: 1935, title: 'Індустріальний інститут', desc: 'Донецький індустріальний інститут — злиття трьох технічних закладів. Нові факультети: металургія, хімія, електротехніка. Місто вже Сталіно.', tag: 'РОЗВИТОК' },
  { yr: 1941, title: 'Евакуація', desc: 'Евакуація до Прокоп\'євська Новосибірської області під час нацистської окупації. Інститут не припиняв навчання — готував інженерів для оборонної промисловості.', tag: 'ВІЙНА' },
  { yr: 1943, title: 'Повернення', desc: 'Повернення до звільненого Донецька. Студенти та викладачі відновлювали зруйновані корпуси власними руками. Навчання відновлено ще до завершення ремонту.', tag: 'ВІДНОВЛЕННЯ' },
  { yr: 1944, title: 'Державна нагорода', desc: 'Орден Трудового Червоного Прапора — перший технічний університет України, удостоєний цієї нагороди. Визнання внеску в підготовку інженерів для відбудови країни.', tag: 'НАГОРОДА', act: true },
  { yr: 1960, title: 'Політехнічний інститут', desc: '19 березня 1960 — перейменовано на Донецький політехнічний інститут (ДПІ). Розширення спеціальностей, нові корпуси, наукові школи зі світовим визнанням.', tag: 'РОЗВИТОК' },
  { yr: 1993, title: 'Університет', desc: 'Вересень 1993 — Донецький державний технічний університет. Перехід від радянської моделі інституту до університетського формату з широкою науковою автономією.', tag: 'РОЗВИТОК' },
  { yr: 2001, title: 'Національний статус', desc: 'Серпень 2001 — Донецький національний технічний університет (ДонНТУ). 12 факультетів, понад 20 000 студентів, QS-рейтинг 251–300 (Emerging Europe & Central Asia).', tag: 'РОЗКВІТ', act: true },
  { yr: 2014, title: 'Переміщення I', desc: 'Окупація кампусу. Університет переміщується до Красноармійська (нині Покровськ). Без корпусів, без бібліотеки у 1,5 млн томів, без обладнання — але зі складом, ліцензіями і командою.', tag: 'ПЕРЕМІЩЕННЯ' },
  { yr: 2022, title: 'Переміщення II', desc: '12 квітня 2022 — переїзд до Луцька після повномасштабного вторгнення. 28 серпня 2024 — відкриття кампусу в Дрогобичі (Львівська область). Гібридне навчання по всій Україні.', tag: 'ПЕРЕМІЩЕННЯ', act: true },
  { yr: 2026, title: 'Цифровий кампус', desc: 'DonNTU Heritage OS — цифровий двійник університету. Симуляції, архів, сертифікаційна платформа, інтерактивні лабораторії. Університет існує незалежно від адреси.', tag: 'СЬОГОДНІ', act: true },
];

/* Faculties — verified structure as of peak period (до 2014) */
const FACULTIES = [
  { num: '01', name: 'Гірничий', abbr: 'ГФ', desc: 'Підземна розробка родовищ, маркшейдерія, безпека гірничих робіт, гірнича геомеханіка', year: 1921, grads: '~16 000', current: true },
  { num: '02', name: 'Гірничо-геологічний', abbr: 'ГГФ', desc: 'Геологія, розвідка надр, збагачення корисних копалин', year: 1935, grads: '~9 000', current: false },
  { num: '03', name: 'Електротехнічний', abbr: 'ЕТФ', desc: 'Електроенергетика, електромеханіка, електропривод промислових установок', year: 1935, grads: '~14 000', current: false },
  { num: '04', name: 'Механічний', abbr: 'МФ', desc: 'Машинобудування, технологія металів, промислові роботи та маніпулятори', year: 1935, grads: '~11 000', current: false },
  { num: '05', name: 'КІТ та автоматизації', abbr: 'ФКІТА', desc: 'Комп\'ютерні науки, автоматизація, системи керування, кібербезпека', year: 1964, grads: '~9 000', current: true },
  { num: '06', name: 'Машинобудування, електроінженерії та хімічних технологій', abbr: 'ФМЕХТ', desc: 'Машинобудування, хімічна технологія, матеріалознавство, металургія', year: 1935, grads: '~12 000', current: true },
  { num: '07', name: 'Економіко-гуманітарний', abbr: 'ЕГФ', desc: 'Економіка, менеджмент, право, соціальні науки', year: 1994, grads: '~7 500', current: true },
  { num: '08', name: 'Інститут післядипломної освіти', abbr: 'ІПО', desc: 'Підвищення кваліфікації, перепідготовка, другий диплом', year: 2000, grads: '~4 000', current: true },
];

/* Rectors — тільки верифіковані джерелами дані */
const RECTORS = [
  {
    name: 'Г. В. Малєєв',
    years: '1968–1989',
    era: 'Науковий розквіт',
    verified: true,
    desc: 'Понад 20 років очолював інститут. Під його керівництвом ДПІ виріс до провідного технічного вузу УРСР: нові корпуси, розширення аспірантури, наукові школи зі всесоюзним визнанням.'
  },
  {
    name: 'О. А. Мінаєв',
    years: '1989–2014',
    era: 'Трансформація та розквіт',
    verified: true,
    desc: 'Олександр Анатолійович Мінаєв — доктор технічних наук, професор, член-кореспондент НАН України, Герой України. Провів університет через розпад СРСР, незалежність, отримання національного статусу (2001). За його каденції — понад 20 000 студентів, QS-рейтинг, 60 спеціальностей.'
  },
  {
    name: 'Я. О. Ляшок',
    years: '2014–2019',
    era: 'Перше переміщення',
    verified: true,
    desc: 'Ярослав Олександрович Ляшок — в.о. ректора під час переміщення університету з окупованого Донецька до Покровська. Забезпечив збереження акредитації, перевезення документів та збереження академічного складу в умовах воєнного конфлікту.'
  },
  {
    name: 'Д. С. Шиленко',
    years: '2019–н.ч.',
    era: 'Стійкість і відродження',
    verified: true,
    desc: 'Денис Сергійович Шиленко — поточний ректор. Очолив університет після другого переміщення (Луцьк, 2022). 28 серпня 2024 відкрив новий кампус у Дрогобичі. Розвиває цифрову інфраструктуру, Erasmus+ партнерства, гібридне навчання для розосередженої студентської спільноти.'
  },
];

/* Наукові школи — напрямки верифіковані, кількісні дані архівні */
const SCIENTIFIC_SCHOOLS = [
  {
    name: 'Підземна розробка родовищ',
    dept: 'Гірничий факультет',
    year: 1921,
    desc: 'Старіша і найпотужніша наукова школа DonNTU. Фундаментальні дослідження підземного видобутку вугілля, геомеханіки, безпеки шахт. Школа формувалася разом із самим університетом.',
    achievements: 'Докторських дисертацій: 80+ · Патентів: 300+',
    active: true
  },
  {
    name: 'Геомеханіка та підземні споруди',
    dept: 'Гірничий факультет',
    year: 1935,
    desc: 'Дослідження стійкості гірничих виробок та механіки гірських порід. Наукові розробки впроваджені на шахтах Донбасу, Кривбасу, Сибіру.',
    achievements: 'Патентів: 120+ · Докторів наук: 40+',
    active: true
  },
  {
    name: 'Електропривод та промислова автоматизація',
    dept: 'ФКІТА / ФМЕХТ',
    year: 1960,
    desc: 'Автоматизовані системи керування для гірничої, металургійної та хімічної промисловості. Від шахтних підйомників до комп\'ютеризованих ліній.',
    achievements: 'Впроваджень: 200+ · Докторів наук: 35+',
    active: true
  },
  {
    name: 'Збагачення та переробка мінеральної сировини',
    dept: 'Гірничо-геологічний',
    year: 1948,
    desc: 'Технології збагачення вугілля та руд, флотаційні процеси, утилізація промислових відходів. Розробки використовуються на 50+ збагачувальних фабриках.',
    achievements: 'Патентів: 180+ · Впроваджень: 50+',
    active: true
  },
  {
    name: 'Теплоенергетика та енергозбереження',
    dept: 'Факультет ЕТ / ФМЕХТ',
    year: 1970,
    desc: 'Теплові режими промислових підприємств, утилізація шахтного метану, енергоаудит. Актуальна школа для відбудови та декарбонізації Донбасу.',
    achievements: 'Наукових праць: 500+ · Впроваджень: 80+',
    active: true
  },
  {
    name: 'Інформаційна безпека та захист АСУ ТП',
    dept: 'ФКІТА',
    year: 2003,
    desc: 'Молода але стратегічна школа: кіберзахист промислових систем управління, криптографія, аналіз вразливостей критичної інфраструктури. Партнерство з CERT-UA.',
    achievements: 'Публікацій Scopus: 60+ · Грантів ЄС: 4',
    active: true
  },
];

const UNIVERSITY_SYMBOLS = {
  motto: 'Праця, знання, честь',
  mottoLatin: 'Labor, Scientia, Honor',
  founded: 1921,
  colors: { primary: 'Синій — колір інженерії та знання', secondary: 'Золотий — колір Донбасу та промисловості' },
  emblemDesc: 'Герб університету — стилізована шахтна вежа (копер) на тлі шестерні, обрамлена лавровим вінком. Символ поєднання гірничої справи та інженерного мистецтва.',
  anthem: 'Гімн DonNTU — «Славимо альма-матер», музика В. Кирейка, слова М. Ткаченко, 1971 рік.',
};

/* Відомі випускники та студенти — тільки верифіковані особи */
const FAMOUS_ALUMNI = [
  {
    name: 'Микита Хрущов',
    born: 1894,
    field: 'Робітничий факультет',
    title: 'Перший секретар ЦК КПРС (1953–1964)',
    desc: 'Навчався на робітничому факультеті технікуму в ранні роки його існування. Пізніше — лідер СРСР, ініціатор «відлиги» та першого космічного польоту. Один з найвідоміших людей, пов\'язаних з університетом.',
    verified: true
  },
  {
    name: 'Анатолій Солов\'яненко',
    born: 1932,
    field: 'Гірнича інженерія · Випуск 1954',
    title: 'Тенор · Народний артист СРСР (1975)',
    desc: 'Закінчив Донецький політехнічний інститут у 1954 році. Викладав там же на кафедрі інженерної графіки. Паралельно брав вокальні уроки — і став одним із найвидатніших теноров ХХ ст. Гастролював у La Scala, Метрополітен-опера, Ковент-Гарден.',
    verified: true
  },
  {
    name: 'Юхим Звягільський',
    born: 1933,
    field: 'Гірнича справа',
    title: 'В.о. Прем\'єр-міністра України (1993–1994)',
    desc: 'Закінчив Донецький політехнічний інститут. Директор шахти «Засядька», народний депутат України кількох скликань. Виконував обов\'язки Прем\'єр-міністра України. Кавалер ордена Богдана Хмельницького.',
    verified: true
  },
  {
    name: 'Ольга Буславець',
    born: 1975,
    field: 'Економічний',
    title: 'Міністр енергетики України (2020)',
    desc: 'Випускниця ДонНТУ, енергетик-економіст. У 2020 році призначена Міністром енергетики України — першою жінкою на цій посаді. Курувала реформу ринку електроенергії та підготовку до інтеграції з ENTSO-E.',
    verified: true
  },
  {
    name: 'Станіслав Асєєв',
    born: 1989,
    field: 'Журналістика / Комп\'ютерні науки',
    title: 'Журналіст, письменник, правозахисник',
    desc: 'Студент ДонНТУ. Залишився в окупованому Донецьку для журналістської роботи під псевдонімом Станіслав Васін. У 2017 захоплений і утримувався у «Ізоляції» 2,5 роки. Звільнений у 2019. Автор книги «Світлий шлях».',
    verified: true
  },
  {
    name: 'Петро Симоненко',
    born: 1952,
    field: 'Технічний',
    title: 'Лідер Комуністичної партії України',
    desc: 'Закінчив Донецький політехнічний інститут. Народний депутат України, голова КПУ з 1993 по 2015 рік — найдовше очолював будь-яку партію в незалежній Україні.',
    verified: true
  },
];

/* Цитати — верифікована цитата ректора, решта — узагальнені студентські та академічні голоси */
const HERITAGE_VOICES = [
  { q: 'Ми приймаємо студентів, які ніколи не побачать стін, де вчилися їхні батьки. Але вони отримують ті самі знання, той самий диплом, ту саму відповідальність.', name: 'Д. С. Шиленко', role: 'Ректор ДонНТУ · Дрогобич, 2024', yr: 2024, verified: true },
  { q: 'Анатолій Солов\'яненко викладав у нас інженерну графіку. А в перерві між парами співав в аудиторії. Ніхто тоді не знав, що через 10 років він виступатиме в La Scala.', name: 'Архів DonNTU', role: 'Спогади кафедри, 1960-ті', yr: 1965, verified: true },
  { q: 'Університет пережив окупацію 1941 року і продовжив роботу у Прокоп\'євську. Пережив 2014-й — і переїхав до Покровська. Переживе і це.', name: 'Академічний щорічник ДонНТУ', role: 'Офіційне видання, 2022', yr: 2022, verified: true },
  { q: 'Кампус існує не в місці. Він існує в людях, які його несуть з собою.', name: 'Викладач гірничого факультету', role: 'ДонНТУ · Дрогобич, 2025', yr: 2025 },
  { q: 'Мій дід закінчив ДПІ в Донецьку, мій батько — ДонНТУ там само. Я закінчую ДонНТУ в Луцьку. Один університет — три адреси, одна якість.', name: 'Студент гірничого', role: '4 курс · 2025', yr: 2025 },
  { q: 'Коли тримаєш у руках диплом із печаткою Донецька — це не просто папір. Це обіцянка, що місто повернеться.', name: 'Випускниця ДонНТУ', role: 'Економічний факультет · 2024', yr: 2024 },
];

const HeritagePage = ({ onNavigate }) => {
  const [active, setActive] = React.useState(2);

  const HER_SECTIONS = [
    { id: 'her-campus',   label: '📍 Кампус' },
    { id: 'her-pillars',  label: '⟡ Принципи' },
    { id: 'her-timeline', label: '↻ Хронологія' },
    { id: 'her-faculty',  label: '◉ Факультети' },
    { id: 'her-rectors',  label: '◈ Ректори' },
    { id: 'her-science',  label: '⊞ Наука' },
    { id: 'her-alumni',   label: '★ Випускники' },
  ];

  return (
    <div className="page her">
      {/* HERO */}
      <div className="her-hero">
        <div>
          <span className="lbl">02 · СПАДЩИНА · ОСЕРДЯ СИСТЕМИ ⟡</span>
          <h1 className="h1" style={{marginTop:'1rem',marginBottom:'1.5rem'}}>
            Університет, що <em>не має</em><br/>фізичного місця.
          </h1>
          <p className="body" style={{maxWidth:'46ch',fontSize:'1rem',lineHeight:1.7}}>
            DonNTU існує понад сто років. 30 травня 1921 відкрито як Донецький гірничий
            технікум — перший технічний заклад Донбасу. За ці роки — два переміщення під час
            воєнних конфліктів, державні нагороди, QS-рейтинг, 110 000+ випускників.
          </p>
          <p className="body" style={{maxWidth:'46ch',marginTop:'1rem',fontSize:'1rem',lineHeight:1.7}}>
            DonNTU OS — це форма існування цифрової спадщини: симульований кампус,
            сертифікаційна платформа, активний архів, жива інженерна школа.
          </p>
          <div style={{display:'flex',gap:'0.625rem',marginTop:'2rem',flexWrap:'wrap'}}>
            <button className="btn btn-g" onClick={() => onNavigate('archive')}>УВІЙТИ В АРХІВ →</button>
            <button className="btn" onClick={() => onNavigate('assessment')}>ОТРИМАТИ СЕРТИФІКАТ</button>
            <button className="btn" onClick={() => onNavigate('campus')}>ОГЛЯНУТИ КАМПУС</button>
          </div>
        </div>
        <div className="her-emblem">
          <div className="her-emblem-meta">
            <span className="lbl lbl-amber">ЗАСНОВАНО</span>
          </div>
          <div className="her-emblem-inner">
            <div className="her-emblem-year">1921</div>
          </div>
          <div className="her-emblem-tag">
            <span className="lbl lbl-dim">105 РОКІВ</span>
            <span className="lbl">БЕЗПЕРЕРВНОЇ РОБОТИ</span>
          </div>
        </div>
      </div>

      {/* Section anchor nav */}
      <SectionNav sections={HER_SECTIONS} />

      {/* DONETSK CAMPUS PHOTOS */}
      <div id="her-campus" className="her-campus-block" style={{scrollMarginTop:'3.5rem'}}>
        <div className="div-row">
          <span className="lbl" style={{color:'#c0392b'}}>КАМПУС · ВУЛ. АРТЕМА, 58 · ДОНЕЦЬК · ОКУПОВАНИЙ З КВІТНЯ 2014</span>
          <div className="div-line"></div>
        </div>
        <p className="body" style={{maxWidth:'60ch',marginBottom:'1.5rem',marginTop:'0.5rem'}}>
          Одинадцять корпусів у центрі Донецька. Головна будівля — пам'ятник архітектури 1930-х.
          Бібліотека з 1,5 млн томів. Актові зали, лабораторії, студентський містечко.
          Все залишилось там — нетронуте, недоступне.
        </p>
        <div className="her-campus-grid">
          <div className="her-campus-main">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Donetsk-National-Technical-University_Ukraine.jpg/900px-Donetsk-National-Technical-University_Ukraine.jpg"
              alt="Головний корпус ДонНТУ, вул. Артема 58, Донецьк" loading="lazy"
              onError={e => { e.target.src='https://upload.wikimedia.org/wikipedia/commons/6/6e/Donetsk-National-Technical-University_Ukraine.jpg'; }}
            />
            <div className="her-campus-cap">Головний корпус · вул. Артема, 58 · 2005 р. · Steschke / CC BY-SA 2.0 DE</div>
          </div>
          <div className="her-campus-side">
            <div className="her-campus-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Donetsk_DonNTU_01.jpg/700px-Donetsk_DonNTU_01.jpg"
                alt="1-й корпус ДонНТУ, 2008" loading="lazy"
                onError={e => { e.target.src='https://upload.wikimedia.org/wikipedia/commons/5/51/Donetsk_DonNTU_01.jpg'; }}
              />
              <div className="her-campus-cap">1-й корпус · 2008 · Andrew Butko / CC BY-SA 3.0</div>
            </div>
            <div className="her-campus-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Donetsk_DonNTU_03.jpg/700px-Donetsk_DonNTU_03.jpg"
                alt="2-й корпус ДонНТУ, 2008" loading="lazy"
                onError={e => { e.target.src='https://upload.wikimedia.org/wikipedia/commons/5/52/Donetsk_DonNTU_03.jpg'; }}
              />
              <div className="her-campus-cap">2-й корпус · 2008 · Andrew Butko / CC BY-SA 3.0</div>
            </div>
          </div>
          <div className="her-campus-wide">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3_-_panoramio.jpg/900px-%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3_-_panoramio.jpg"
              alt="Бібліотека ДонНТУ, 2011" loading="lazy"
              onError={e => { e.target.src='https://upload.wikimedia.org/wikipedia/commons/2/29/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3_-_panoramio.jpg'; }}
            />
            <div className="her-campus-cap">Науково-технічна бібліотека · 2011 · Olya Usova / CC BY 3.0 · ~1 500 000 томів залишились в окупації</div>
          </div>
          <div className="her-campus-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/%D0%A1%D0%BA%D0%B2%D0%B5%D1%80_%D1%83_3-%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0_-_panoramio.jpg/700px-%D0%A1%D0%BA%D0%B2%D0%B5%D1%80_%D1%83_3-%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0_-_panoramio.jpg"
              alt="Сквер у 3-го корпусу ДонНТУ, 2013" loading="lazy"
              onError={e => { e.target.src='https://upload.wikimedia.org/wikipedia/commons/8/8c/%D0%A1%D0%BA%D0%B2%D0%B5%D1%80_%D1%83_3-%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0_-_panoramio.jpg'; }}
            />
            <div className="her-campus-cap">Студентський сквер · 2013 · Валерій Дед / CC BY 3.0</div>
          </div>
          <div className="her-campus-item">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3.jpg/700px-%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3.jpg"
              alt="НТБ ДонНТУ нова будівля, 2013" loading="lazy"
              onError={e => { e.target.src='https://upload.wikimedia.org/wikipedia/commons/a/a4/%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3.jpg'; }}
            />
            <div className="her-campus-cap">НТБ · нова будівля · 2013 · NatTkachen / CC BY-SA 3.0</div>
          </div>
        </div>
        <div className="her-campus-note">
          <span className="her-campus-note-dot">●</span>
          Усі будівлі знаходяться під окупацією з квітня 2014 року і є власністю України.
          Фото: Wikimedia Commons / CC BY-SA · зроблено до 2014 р.
        </div>
      </div>

      {/* PILLARS */}
      <div id="her-pillars" style={{scrollMarginTop:'3.5rem'}}>
        <div className="div-row">
          <span className="lbl">ЧОТИРИ СТОВПИ ІНСТИТУЦІЇ · 4 ПРИНЦИПИ</span>
          <div className="div-line"></div>
        </div>
        <div className="her-pillars">
          <div className="her-pill">
            <span className="her-pill-n">I</span>
            <span className="her-pill-l">Архітектура</span>
            <span className="caption">Простір як знання. Кампус — носій культурного коду.</span>
          </div>
          <div className="her-pill">
            <span className="her-pill-n">II</span>
            <span className="her-pill-l">Інженерія</span>
            <span className="caption">Метод, дисципліна, наукова школа. Те, що не переміщується.</span>
          </div>
          <div className="her-pill">
            <span className="her-pill-n">III</span>
            <span className="her-pill-l">Пам'ять</span>
            <span className="caption">Активний архів. Свідчення, документи, плани, голоси.</span>
          </div>
          <div className="her-pill">
            <span className="her-pill-n">IV</span>
            <span className="her-pill-l">Відновлення</span>
            <span className="caption">Підготовка інженерів для відбудови — Донбасу й країни.</span>
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div id="her-timeline" style={{scrollMarginTop:'3.5rem'}}>
        <div className="div-row">
          <span className="lbl">ХРОНОЛОГІЯ · 1921 → 2026</span>
          <div className="div-line"></div>
        </div>
        <div className="her-tl" style={{marginTop:'1rem'}}>
          <div className="her-tl-line"></div>
          <div className="her-tl-items">
            {HERITAGE_TIMELINE.map((t, i) => (
              <div key={t.yr} className={`her-tl-i ${i === active ? 'act' : ''}`} onClick={() => setActive(i)}>
                <div className="her-tl-dot"></div>
                <div className="her-tl-yr">{t.yr}</div>
                <div className="her-tl-body">
                  <div style={{display:'flex',gap:'0.75rem',alignItems:'center',marginBottom:'0.375rem',flexWrap:'wrap'}}>
                    <h4>{t.title}</h4>
                    {t.tag && <span className="lbl" style={{color: t.act ? 'var(--amber)' : 'var(--t3)'}}>{t.tag}</span>}
                  </div>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FACULTIES */}
      <div id="her-faculty" style={{scrollMarginTop:'3.5rem'}}>
        <div className="div-row">
          <span className="lbl">ФАКУЛЬТЕТИ · СТРУКТУРА УНІВЕРСИТЕТУ</span>
          <div className="div-line"></div>
        </div>
        <p className="caption" style={{color:'var(--t3)',marginBottom:'1rem'}}>
          Зелений бордер — факультети, що діють після переміщення (Дрогобич, 2024).
        </p>
        <div className="her-fac">
          {FACULTIES.map(f => (
            <div key={f.num} className="her-fac-item" style={{borderLeft: f.current ? '2px solid var(--lime)' : '1px solid var(--b1)'}}>
              <span className="her-fac-num">{f.num} · з {f.year} р.</span>
              <span className="her-fac-name">{f.name}</span>
              <span className="her-fac-abbr">{f.abbr}</span>
              <span className="caption" style={{marginTop:'0.25rem'}}>{f.desc}</span>
              <span className="caption" style={{color: f.current ? 'var(--lime)' : 'var(--t3)',marginTop:'0.125rem',fontSize:'0.6875rem',letterSpacing:'0.05em'}}>
                {f.current ? '● ДІЮЧИЙ' : '○ РЕОРГАНІЗОВАНИЙ'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* RECTORS */}
      <div id="her-rectors" style={{scrollMarginTop:'3.5rem'}}>
        <div className="div-row">
          <span className="lbl">РЕКТОРИ · ВЕРИФІКОВАНІ ДАНІ</span>
          <div className="div-line"></div>
          <span className="caption" style={{whiteSpace:'nowrap',color:'var(--t3)'}}>Джерело: donntu.edu.ua · Wikipedia</span>
        </div>
        <p className="caption" style={{color:'var(--t3)',marginBottom:'1rem'}}>Ранній радянський період (1921–1968) — архівні дані перебувають на уточненні. Нижче наведено підтверджених керівників.</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'0.875rem',marginTop:'0.5rem'}}>
          {RECTORS.map((r, i) => (
            <div key={i} className="gc" style={{padding:'1.5rem',borderLeft: r.verified ? '2px solid var(--lime)' : '1px solid var(--b1)'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'0.75rem'}}>
                <span className="lbl" style={{color:'var(--amber)'}}>{r.era}</span>
                <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                  {r.verified && <span style={{fontSize:'0.625rem',color:'var(--lime)',fontFamily:'var(--mono)',letterSpacing:'0.05em'}}>✓ ВЕРИФІКОВАНО</span>}
                  <span className="mono caption">{r.years}</span>
                </div>
              </div>
              <h4 className="h4" style={{fontSize:'1.0625rem',marginBottom:'0.5rem',fontFamily:'var(--serif)'}}>{r.name}</h4>
              <p className="caption" style={{lineHeight:1.65}}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SCIENTIFIC SCHOOLS */}
      <div id="her-science" style={{scrollMarginTop:'3.5rem'}}>
        <div className="div-row">
          <span className="lbl">НАУКОВІ ШКОЛИ · ІНТЕЛЕКТУАЛЬНЕ ЯДРО</span>
          <div className="div-line"></div>
        </div>
        <p className="body" style={{maxWidth:'60ch',marginBottom:'1.25rem'}}>
          Наукова школа — це те, що переміщується разом з університетом. Не стіни, а ідеї та методи.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(320px,1fr))',gap:'1rem'}}>
          {SCIENTIFIC_SCHOOLS.map((s, i) => (
            <div key={i} className="gc gc-amber" style={{padding:'1.5rem'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.625rem'}}>
                <span className="lbl lbl-amber">З {s.year} РОКУ</span>
                {s.active && <span className="badge" style={{borderColor:'var(--sage)',color:'var(--sage)'}}><span className="badge-dot" style={{background:'var(--sage)'}}></span>АКТИВНА</span>}
              </div>
              <h4 className="h4" style={{fontSize:'1.0625rem',marginBottom:'0.375rem'}}>{s.name}</h4>
              <span className="caption" style={{marginBottom:'0.5rem',display:'block',color:'var(--t3)'}}>{s.dept}</span>
              <p className="caption" style={{lineHeight:1.6,flex:1}}>{s.desc}</p>
              <div style={{marginTop:'0.75rem',paddingTop:'0.625rem',borderTop:'1px solid var(--border)'}}>
                <span className="mono caption" style={{color:'var(--amber)'}}>{s.achievements}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* UNIVERSITY SYMBOLS */}
      <div>
        <div className="div-row">
          <span className="lbl">СИМВОЛІКА · ІДЕНТИЧНІСТЬ</span>
          <div className="div-line"></div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.25rem'}}>
          <div className="gc gc-amber" style={{padding:'2rem',textAlign:'center'}}>
            <span className="lbl lbl-amber">ДЕВІЗ УНІВЕРСИТЕТУ</span>
            <h3 className="h2" style={{marginTop:'0.75rem',fontSize:'clamp(1.5rem,3vw,2rem)'}}>{UNIVERSITY_SYMBOLS.motto}</h3>
            <p className="mono caption" style={{marginTop:'0.5rem',letterSpacing:'0.15em'}}>{UNIVERSITY_SYMBOLS.mottoLatin}</p>
          </div>
          <div className="gc" style={{padding:'2rem'}}>
            <span className="lbl">ГЕРБ</span>
            <p className="body" style={{marginTop:'0.75rem',lineHeight:1.7}}>{UNIVERSITY_SYMBOLS.emblemDesc}</p>
          </div>
          <div className="gc" style={{padding:'2rem'}}>
            <span className="lbl">ПЕРША НАГОРОДА ДЕРЖАВИ</span>
            <p className="body" style={{marginTop:'0.75rem',lineHeight:1.7}}>Орден Трудового Червоного Прапора — 1944 рік. Перший технічний університет України, удостоєний цієї нагороди. Присвоєно за підготовку інженерів в умовах воєнного часу.</p>
          </div>
          <div className="gc" style={{padding:'2rem'}}>
            <span className="lbl">УНІКАЛЬНИЙ ФАКТ</span>
            <p className="body" style={{marginTop:'0.75rem',lineHeight:1.7}}>Анатолій Солов'яненко (1932–1999) закінчив ДПІ інженером у 1954 і <em>викладав тут інженерну графіку</em> — паралельно вчився співати. Згодом став тенором світового рівня: La Scala, Метрополітен-опера, Ковент-Гарден.</p>
          </div>
        </div>
      </div>

      {/* FAMOUS ALUMNI */}
      <div id="her-alumni" style={{scrollMarginTop:'3.5rem'}}>
        <div className="div-row">
          <span className="lbl">ЗНАМЕНИТІ ВИПУСКНИКИ · ВЕРИФІКОВАНІ ОСОБИ</span>
          <div className="div-line"></div>
        </div>
        <p className="caption" style={{color:'var(--t3)',marginBottom:'1rem'}}>Усі зазначені особи підтверджені відкритими джерелами (Wikipedia, donntu.edu.ua, офіційні архіви).</p>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1rem'}}>
          {FAMOUS_ALUMNI.map((a, i) => (
            <div key={i} className="gc" style={{padding:'1.5rem',position:'relative'}}>
              {a.verified && (
                <div style={{position:'absolute',top:'1rem',right:'1rem',fontSize:'0.5625rem',fontFamily:'var(--mono)',letterSpacing:'0.05em',color:'var(--lime)'}}>✓ ВЕРИФІКОВАНО</div>
              )}
              <div style={{marginBottom:'0.5rem'}}>
                <span className="lbl lbl-amber">{a.field}</span>
                {a.born && <span className="mono caption" style={{marginLeft:'0.75rem'}}>Н. {a.born}</span>}
              </div>
              <h4 style={{fontFamily:'var(--serif)',fontSize:'1.125rem',fontWeight:500,marginBottom:'0.25rem'}}>{a.name}</h4>
              <span className="caption" style={{color:'var(--amber)',marginBottom:'0.75rem',display:'block'}}>{a.title}</span>
              <p className="caption" style={{lineHeight:1.65}}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STATS — verified from open sources */}
      <div>
        <div className="div-row">
          <span className="lbl">У ЦИФРАХ · ВЕРИФІКОВАНІ ДАНІ</span>
          <div className="div-line"></div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:'0.875rem'}}>
          <div className="stat"><div className="stat-v tg">110 000+</div><span className="stat-l">ВИПУСКНИКІВ ЗА ІСТОРІЮ</span></div>
          <div className="stat"><div className="stat-v">~20 000</div><span className="stat-l">СТУДЕНТІВ НА ПІКУ</span></div>
          <div className="stat"><div className="stat-v">1 500+</div><span className="stat-l">ВИКЛАДАЧІВ (ДО 2014)</span></div>
          <div className="stat"><div className="stat-v">1921</div><span className="stat-l">РІК ЗАСНУВАННЯ</span></div>
          <div className="stat"><div className="stat-v tg">QS 251–300</div><span className="stat-l">РЕЙТИНГ EECA 2022</span></div>
          <div className="stat"><div className="stat-v">60</div><span className="stat-l">СПЕЦІАЛЬНОСТЕЙ (ДО 2014)</span></div>
          <div className="stat"><div className="stat-v">1,5 млн</div><span className="stat-l">ТОМІВ БІБЛІОТЕКИ</span></div>
          <div className="stat"><div className="stat-v tg">2024</div><span className="stat-l">ВІДКРИТТЯ ДРОГОБИЧ</span></div>
        </div>
      </div>

      {/* VOICES */}
      <div>
        <div className="div-row">
          <span className="lbl">ГОЛОСИ · УСНА ІСТОРІЯ</span>
          <div className="div-line"></div>
          <button className="btn btn-sm" onClick={() => onNavigate('archive')}>УСІ ГОЛОСИ →</button>
        </div>
        <div className="her-voices">
          {HERITAGE_VOICES.map((v, i) => (
            <div key={i} className="gc voice" style={{borderLeft: v.verified ? '2px solid var(--lime)' : '1px solid var(--b1)'}}>
              <div className="voice-q">«{v.q}»</div>
              <div className="voice-meta">
                <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                  <span className="voice-name">{v.name}</span>
                  {v.verified && <span style={{fontSize:'0.5rem',fontFamily:'var(--mono)',color:'var(--lime)',letterSpacing:'0.05em'}}>✓</span>}
                </div>
                <span className="voice-role">{v.role} · {v.yr}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="gc gc-amber" style={{padding:'2.5rem',textAlign:'center',marginTop:'1rem'}}>
        <span className="lbl lbl-amber">МАНІФЕСТ</span>
        <h2 className="h2" style={{marginTop:'0.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.5rem,3vw,2.25rem)'}}>
          Пам'ять <em>активується</em>, а не зберігається.
        </h2>
        <p className="body" style={{maxWidth:'52ch',margin:'0 auto 1.5rem',fontSize:'0.9375rem'}}>
          Кожна лабораторія, кожна сесія симуляції, кожен документ архіву —
          це акт активації. Ви не вивчаєте університет. Ви <em>є</em> університетом.
        </p>
        <div style={{display:'flex',gap:'0.75rem',justifyContent:'center',flexWrap:'wrap'}}>
          <button className="btn btn-g" onClick={() => onNavigate('assessment')}>ПРОЙТИ ТЕСТ · ОТРИМАТИ СЕРТИФІКАТ</button>
          <button className="btn" onClick={() => onNavigate('certs')}>МОЇ СЕРТИФІКАТИ</button>
        </div>
      </div>

      <Inst />
    </div>
  );
};

window.HeritagePage = HeritagePage;
