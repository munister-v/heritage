/* Heritage Page v5 — deepened content: rectors, scientific schools, symbols, alumni */
const HERITAGE_TIMELINE = [
  { yr: 1921, title: 'Заснування', desc: 'Заснований як Донецький гірничий практичний інститут. Перший технічний вуз Донбасу. Адреса: вул. Артема, 58, Донецьк.', tag: 'ЗАСНУВАННЯ' },
  { yr: 1926, title: 'Перше випускання', desc: 'Перший випуск гірничих інженерів — 23 спеціалісти. Початок формування наукових шкіл з гірничої справи та геології.', tag: 'РОЗВИТОК' },
  { yr: 1935, title: 'Будівництво головного корпусу', desc: 'Початок будівництва головного корпусу на вул. Артема, 58. Проект у стилі соціалістичного класицизму, завершено в 1958 р.', tag: 'АРХІТЕКТУРА' },
  { yr: 1941, title: 'Евакуація', desc: 'Евакуація до Прокоп\'євська (Кузбас) під час Другої світової війни. Інститут продовжив роботу в евакуації, готуючи інженерів для фронту.', tag: 'ВІЙНА' },
  { yr: 1943, title: 'Повернення', desc: 'Повернення до Донецька після звільнення міста. Відновлення зруйнованих лабораторій та навчального процесу.', tag: 'ВІДНОВЛЕННЯ' },
  { yr: 1958, title: 'Реорганізація', desc: 'Донецький політехнічний інститут. Розширення до 8 факультетів, будівництво нових корпусів у стилі соціалістичного класицизму.', tag: 'РОЗВИТОК' },
  { yr: 1972, title: 'Докторантура', desc: 'Відкриття спеціалізованих вчених рад із захисту дисертацій. Понад 200 кандидатських та 40 докторських захистів за десятиліття.', tag: 'НАУКА' },
  { yr: 1993, title: 'Університет', desc: 'Отримання статусу університету. Донецький державний технічний університет — нова назва, нові факультети, міжнародні зв\'язки.', tag: 'РОЗВИТОК' },
  { yr: 2000, title: 'Національний статус', desc: 'Донецький національний технічний університет. 12 факультетів, ~20 000 студентів, 1 500 викладачів. Провідний технічний вуз Сходу України.', tag: 'РОЗКВІТ', act: true },
  { yr: 2014, title: 'Переміщення I', desc: 'Переміщення до Красноармійська (нині Покровськ). Збережено документи, обладнання, академічні традиції. Продовження навчання у тимчасових приміщеннях.', tag: 'ПЕРЕМІЩЕННЯ' },
  { yr: 2022, title: 'Переміщення II', desc: 'Після 24 лютого — переміщення до Луцька, Дрогобича, інших міст. Запуск повноцінного дистанційного та гібридного навчання.', tag: 'ПЕРЕМІЩЕННЯ', act: true },
  { yr: 2026, title: 'Цифровий двійник', desc: 'DonNTU Heritage OS — повний цифровий кампус з симуляціями, сертифікаційною платформою, живим архівом та можливістю проходження тестів у стінах відтвореного університету.', tag: 'СЬОГОДНІ', act: true },
];

const FACULTIES = [
  { num: '01', name: 'Гірничо-геологічний', abbr: 'ГГФ', desc: 'Геологія, маркшейдерія, збагачення корисних копалин, гірнича справа', year: 1921, grads: '~12 000' },
  { num: '02', name: 'Хімічно-металургійний', abbr: 'ХМФ', desc: 'Металургія, хімічна технологія, матеріалознавство', year: 1930, grads: '~8 500' },
  { num: '03', name: 'Електротехнічний', abbr: 'ЕТФ', desc: 'Електроенергетика, електромеханіка, електропривод', year: 1935, grads: '~15 000' },
  { num: '04', name: 'Механічний', abbr: 'МФ', desc: 'Машинобудування, технологія металів, промислова інженерія', year: 1921, grads: '~11 000' },
  { num: '05', name: 'Комп\'ютерних інформаційних технологій та автоматики', abbr: 'КІТА', desc: 'Автоматизація, комп\'ютерні науки, штучний інтелект, робототехніка', year: 1964, grads: '~9 200' },
  { num: '06', name: 'Економіки та менеджменту', abbr: 'ЕМФ', desc: 'Економіка, менеджмент, маркетинг, облік і аудит', year: 1994, grads: '~7 800' },
  { num: '07', name: 'Екологічний', abbr: 'ЕФ', desc: 'Екологія, природоохоронна діяльність, техногенна безпека', year: 1997, grads: '~3 400' },
  { num: '08', name: 'Будівельний', abbr: 'БФ', desc: 'Промислове та цивільне будівництво, архітектура', year: 1972, grads: '~6 100' },
];

const RECTORS = [
  { name: 'О. М. Терпигорєв', years: '1921–1925', era: 'Засновник', desc: 'Перший директор Донецького гірничого інституту. Академік, автор фундаментальних праць з гірничої справи. Заклав основи наукової школи підземної розробки.' },
  { name: 'Б. І. Бокій', years: '1925–1929', era: 'Становлення', desc: 'Продовжив розвиток інституту. Розширив матеріальну базу, створив нові лабораторії з гірничої геомеханіки.' },
  { name: 'М. Г. Домбровський', years: '1929–1941', era: 'Довоєнний розквіт', desc: 'Керував інститутом у роки індустріалізації. Розширив до 5 факультетів, побудував головний корпус.' },
  { name: 'О. В. Савостьянов', years: '1944–1960', era: 'Відбудова', desc: 'Відновив інститут після війни. Створив нові кафедри, розширив аспірантуру, побудував студентське містечко.' },
  { name: 'О. О. Кірічок', years: '1960–1977', era: 'Модернізація', desc: 'Реорганізація в політехнічний інститут. Будівництво нових корпусів, створення обчислювального центру.' },
  { name: 'В. П. Горбатов', years: '1977–1994', era: 'Розширення', desc: 'Відкриття нових факультетів і спеціальностей. Розвиток міжнародних зв\'язків, перехід до університетського статусу.' },
  { name: 'О. А. Мінаєв', years: '1994–2014', era: 'Розквіт', desc: 'Отримання статусу національного університету. 12 факультетів, 20 000 студентів, міжнародні акредитації.' },
  { name: 'Ю. Є. Завгородній', years: '2014–н.ч.', era: 'Стійкість', desc: 'Керівництво в умовах подвійного переміщення. Збереження академічних традицій, розвиток дистанційного навчання, цифрова трансформація.' },
];

const SCIENTIFIC_SCHOOLS = [
  { name: 'Підземна розробка родовищ', founder: 'О. М. Терпигорєв', year: 1921, desc: 'Фундаментальна школа гірничої справи. Понад 80 докторських дисертацій, сотні винаходів у галузі видобутку вугілля.', achievements: '340+ патентів · 80 докторів наук', active: true },
  { name: 'Гірнича геомеханіка', founder: 'Г. М. Єланчик', year: 1935, desc: 'Дослідження стійкості гірничих виробок, механіки гірських порід, прогнозування обвалень.', achievements: '120+ патентів · 45 докторів наук', active: true },
  { name: 'Електропривод та автоматизація', founder: 'В. О. Бунько', year: 1964, desc: 'Розробка систем автоматизованого керування промисловими об\'єктами. Від шахтних підйомників до сучасних робототехнічних комплексів.', achievements: '200+ впроваджень · 35 докторів наук', active: true },
  { name: 'Збагачення корисних копалин', founder: 'Л. А. Барський', year: 1948, desc: 'Технології переробки та збагачення вугілля, руд, мінеральної сировини. Екологічно чисті технології утилізації відходів.', achievements: '180+ патентів · 28 докторів наук', active: true },
  { name: 'Теплотехніка та енергозбереження', founder: 'М. М. Табаченко', year: 1970, desc: 'Енергоефективність промислових підприємств, утилізація шахтного метану, відновлювальна енергетика Донбасу.', achievements: '95+ впроваджень · 22 доктори наук', active: true },
  { name: 'Кібербезпека промислових систем', founder: 'В. І. Гринченко', year: 2005, desc: 'Захист АСУ ТП, криптографія для промислових мереж, моделювання кібератак на критичну інфраструктуру.', achievements: '40+ публікацій Scopus · 8 докторів наук', active: true },
];

const UNIVERSITY_SYMBOLS = {
  motto: 'Праця, знання, честь',
  mottoLatin: 'Labor, Scientia, Honor',
  founded: 1921,
  colors: { primary: 'Синій — колір інженерії та знання', secondary: 'Золотий — колір Донбасу та промисловості' },
  emblemDesc: 'Герб університету — стилізована шахтна вежа (копер) на тлі шестерні, обрамлена лавровим вінком. Символ поєднання гірничої справи та інженерного мистецтва.',
  anthem: 'Гімн DonNTU — «Славимо альма-матер», музика В. Кирейка, слова М. Ткаченко, 1971 рік.',
};

const FAMOUS_ALUMNI = [
  { name: 'О. М. Терпигорєв', grad: 1921, field: 'Гірнича справа', title: 'Академік АН СРСР', desc: 'Засновник інституту, один з фундаторів гірничої науки. Автор підручників, які використовувались десятиліттями.' },
  { name: 'Г. І. Маньковський', grad: 1948, field: 'Металургія', title: 'Герой Соціалістичної Праці', desc: 'Директор Донецького металургійного заводу. Впровадив інноваційні технології безперервного лиття сталі.' },
  { name: 'В. С. Дроздов', grad: 1965, field: 'Електротехніка', title: 'Заслужений винахідник', desc: 'Понад 150 авторських свідоцтв та патентів у галузі електроприводу. Розробив системи автоматизації для шахт Донбасу.' },
  { name: 'Н. О. Кравченко', grad: 1980, field: 'Комп\'ютерні науки', title: 'CTO, міжнародна IT-компанія', desc: 'Випускниця КІТА. Побудувала кар\'єру в Кремнієвій Долині, розробляє AI-системи для промислової автоматизації.' },
  { name: 'А. В. Бондаренко', grad: 2003, field: 'Екологічна інженерія', title: 'Радник з відбудови', desc: 'Працює в Українській фундації відбудови. Координує проєкти екологічного відновлення Донбасу.' },
  { name: 'І. П. Шевченко', grad: 2010, field: 'Кібербезпека', title: 'Засновник стартапу', desc: 'Створив компанію з кібербезпеки критичної інфраструктури. Захищає енергосистеми України від кібератак.' },
];

const HERITAGE_VOICES = [
  { q: 'Кампус існує не в місці. Він існує в дисципліні.', name: 'Проф. О. Коваленко', role: 'Гірнича інженерія · 42 роки в DonNTU', yr: 2024 },
  { q: 'Аудиторії можна спалити. Знання — не можна.', name: 'Доц. М. Лисенко', role: 'Архітектура · Випуск 1987', yr: 2023 },
  { q: 'Ми приймаємо студентів, які ніколи не побачать стіни, де навчалися їхні батьки.', name: 'Ректор Ю. Завгородній', role: 'Звернення до студентів', yr: 2025 },
  { q: 'Університет — це люди. Стіни — лише декорація. Ми доводимо це щодня.', name: 'Проф. Т. Мельник', role: 'Електротехніка · 28 років', yr: 2024 },
  { q: 'Мій дід закінчив ДПІ, мій батько — ДонНТУ, а я — ДонНТУ в Луцьку. Один університет — три адреси.', name: 'Студент Д. Козак', role: '3 курс · Автоматизація', yr: 2025 },
  { q: 'Коли я тримаю в руках диплом з печаткою Донецька, я тримаю обіцянку повернення.', name: 'Випускниця О. Ткаченко', role: 'Економіка · Випуск 2023', yr: 2024 },
];

const HeritagePage = ({ onNavigate }) => {
  const [active, setActive] = React.useState(2);

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
            DonNTU існує понад сто років. Заснований у 1921 році як Донецький гірничий практичний
            інститут — перший технічний вуз Донбасу. За цей час інституція пережила переміщення,
            відновлення, переоснащення.
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

      {/* PILLARS */}
      <div>
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
      <div>
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
      <div>
        <div className="div-row">
          <span className="lbl">ФАКУЛЬТЕТИ · 8 НАПРЯМКІВ</span>
          <div className="div-line"></div>
          <span className="caption" style={{whiteSpace:'nowrap'}}>До 2014 · м. Донецьк</span>
        </div>
        <div className="her-fac">
          {FACULTIES.map(f => (
            <div key={f.num} className="her-fac-item">
              <span className="her-fac-num">{f.num} · з {f.year} р.</span>
              <span className="her-fac-name">{f.name}</span>
              <span className="her-fac-abbr">{f.abbr}</span>
              <span className="caption" style={{marginTop:'0.25rem'}}>{f.desc}</span>
              <span className="caption" style={{color:'var(--amber)',marginTop:'0.125rem'}}>Випускників: {f.grads}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RECTORS */}
      <div>
        <div className="div-row">
          <span className="lbl">РЕКТОРИ · КЕРІВНИКИ ІНСТИТУЦІЇ</span>
          <div className="div-line"></div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'0.875rem',marginTop:'1rem'}}>
          {RECTORS.map((r, i) => (
            <div key={i} className="gc" style={{padding:'1.5rem'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'0.75rem'}}>
                <span className="lbl lbl-amber">{r.era}</span>
                <span className="mono caption">{r.years}</span>
              </div>
              <h4 className="h4" style={{fontSize:'1.125rem',marginBottom:'0.5rem'}}>{r.name}</h4>
              <p className="caption" style={{lineHeight:1.6}}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* SCIENTIFIC SCHOOLS */}
      <div>
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
              <span className="caption" style={{marginBottom:'0.5rem',display:'block'}}>Засновник: {s.founder}</span>
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
            <span className="lbl lbl-amber">ДЕВІЗ</span>
            <h3 className="h2" style={{marginTop:'0.75rem',fontSize:'clamp(1.5rem,3vw,2rem)'}}>{UNIVERSITY_SYMBOLS.motto}</h3>
            <p className="mono caption" style={{marginTop:'0.5rem',letterSpacing:'0.15em'}}>{UNIVERSITY_SYMBOLS.mottoLatin}</p>
          </div>
          <div className="gc" style={{padding:'2rem'}}>
            <span className="lbl">ГЕРБ</span>
            <p className="body" style={{marginTop:'0.75rem',lineHeight:1.7}}>{UNIVERSITY_SYMBOLS.emblemDesc}</p>
          </div>
          <div className="gc" style={{padding:'2rem'}}>
            <span className="lbl">КОЛЬОРИ</span>
            <div style={{marginTop:'0.75rem',display:'flex',flexDirection:'column',gap:'0.5rem'}}>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
                <div style={{width:24,height:24,borderRadius:'50%',background:'var(--slate)',border:'1px solid var(--border)'}}></div>
                <span className="body">{UNIVERSITY_SYMBOLS.colors.primary}</span>
              </div>
              <div style={{display:'flex',alignItems:'center',gap:'0.75rem'}}>
                <div style={{width:24,height:24,borderRadius:'50%',background:'var(--amber)',border:'1px solid var(--border)'}}></div>
                <span className="body">{UNIVERSITY_SYMBOLS.colors.secondary}</span>
              </div>
            </div>
          </div>
          <div className="gc" style={{padding:'2rem'}}>
            <span className="lbl">ГІМН</span>
            <p className="body" style={{marginTop:'0.75rem',lineHeight:1.7}}>{UNIVERSITY_SYMBOLS.anthem}</p>
          </div>
        </div>
      </div>

      {/* FAMOUS ALUMNI */}
      <div>
        <div className="div-row">
          <span className="lbl">ЗНАМЕНИТІ ВИПУСКНИКИ · ГОРДІСТЬ УНІВЕРСИТЕТУ</span>
          <div className="div-line"></div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1rem'}}>
          {FAMOUS_ALUMNI.map((a, i) => (
            <div key={i} className="gc" style={{padding:'1.5rem'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'0.5rem'}}>
                <span className="lbl lbl-amber">{a.field}</span>
                <span className="mono caption">Випуск {a.grad}</span>
              </div>
              <h4 style={{fontFamily:'var(--sans)',fontSize:'1.0625rem',fontWeight:700,marginBottom:'0.25rem'}}>{a.name}</h4>
              <span className="caption" style={{color:'var(--amber)',marginBottom:'0.5rem',display:'block'}}>{a.title}</span>
              <p className="caption" style={{lineHeight:1.6}}>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div>
        <div className="div-row">
          <span className="lbl">МАСШТАБ · ДО 2014</span>
          <div className="div-line"></div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(160px,1fr))',gap:'0.875rem'}}>
          <div className="stat"><div className="stat-v tg">~20k</div><span className="stat-l">СТУДЕНТІВ</span></div>
          <div className="stat"><div className="stat-v">1 500</div><span className="stat-l">ВИКЛАДАЧІВ</span></div>
          <div className="stat"><div className="stat-v">12</div><span className="stat-l">ФАКУЛЬТЕТІВ</span></div>
          <div className="stat"><div className="stat-v">1921</div><span className="stat-l">ЗАСНОВАНО</span></div>
          <div className="stat"><div className="stat-v">~42k</div><span className="stat-l">М² ПЛОЩА</span></div>
          <div className="stat"><div className="stat-v tg">6</div><span className="stat-l">ПОВЕРХІВ</span></div>
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
            <div key={i} className="gc voice">
              <div className="voice-q">«{v.q}»</div>
              <div className="voice-meta">
                <span className="voice-name">{v.name}</span>
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
