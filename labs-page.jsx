/* Labs + Building Pages v4 — deepened: equipment, publications, lab work descriptions */
const LABS = [
  {
    id:'LAB-M01', ua:'Симулятор гірничої безпеки', sub:'Корпус B-01 · Гірнича інженерія', disc:'Гірнича інженерія', d:5, t:'90 хв', s:'completed', sLbl:'ЗАВЕРШЕНО',
    fullDesc: 'Повноцінна симуляція шахтного середовища з моніторингом метану, вентиляції та аварійних ситуацій. Базується на реальних даних шахт Донбасу.',
    equipment: ['Симулятор SCADA-системи вентиляції', 'Датчики метану CH₄ (цифрові двійники)', 'Пульт диспетчера шахти', 'VR-шоломи для занурення в шахту'],
    labWorks: ['Аналіз газової обстановки у вибої', 'Проєктування вентиляційної мережі', 'Дії при аварійному загазуванні', 'Евакуація персоналу — моделювання'],
    publications: ['Коваленко О.М. «Моделювання газодинамічних явищ у шахтах» // Уголь Украины, 2019', 'Петров В.І. «Цифровий двійник вентиляції шахти ім. Засядька» // Геотехнічна механіка, 2021'],
  },
  {
    id:'LAB-E01', ua:'Лабораторія енергосистем', sub:'Корпус B-03 · Енергетика', disc:'Енергетика', d:4, t:'50 хв', s:'completed', sLbl:'ЗАВЕРШЕНО',
    fullDesc: 'Моделювання електричних мереж та енергосистем промислових підприємств. Аналіз стійкості, оптимізація навантаження, інтеграція відновлювальних джерел.',
    equipment: ['Симулятор електричної мережі 110/35/6 кВ', 'Модель сонячної електростанції 10 кВт', 'Реле захисту SEPAM (цифрова копія)', 'Програмний комплекс PSS/E'],
    labWorks: ['Розрахунок коротких замикань', 'Моделювання електропостачання шахти', 'Оптимізація графіка навантаження', 'Інтеграція ВДЕ в промислову мережу'],
    publications: ['Бунько В.О. «Оптимізація енергоспоживання промислових підприємств Донбасу» // Електротехніка, 2020', 'Ляшенко Т.М. «Мікросітки для відновлення енергопостачання» // Energy, 2023'],
  },
  {
    id:'LAB-A01', ua:'Автоматизація та робототехніка', sub:'Корпус B-02 · Системи керування', disc:'Керування', d:4, t:'55 хв', s:'open', sLbl:'ВІДКРИТО',
    fullDesc: 'Розробка та тестування систем автоматизованого керування промисловими процесами. ПЛК-програмування, SCADA, промисловий IoT.',
    equipment: ['ПЛК Siemens S7-1200 (емулятор)', 'SCADA-система WinCC', 'Робот-маніпулятор (цифровий двійник)', 'Промислові датчики IoT'],
    labWorks: ['Програмування ПЛК для конвеєрної лінії', 'Налаштування SCADA-інтерфейсу', 'Керування роботом-маніпулятором', 'Побудова IoT-мережі датчиків'],
    publications: ['Гринченко В.І. «Автоматизація конвеєрного транспорту шахт» // АСУ ТП, 2018', 'Козлов А.С. «Промисловий IoT для моніторингу шахтного обладнання» // Sensors, 2022'],
  },
  {
    id:'LAB-C01', ua:'Кібербезпека', sub:'Корпус B-02 · Інформаційна безпека', disc:'Кібербезпека', d:4, t:'60 хв', s:'open', sLbl:'ВІДКРИТО',
    fullDesc: 'Захист промислових АСУ ТП від кіберзагроз. Аналіз вразливостей SCADA, криптографія, мережева безпека критичної інфраструктури.',
    equipment: ['Кіберполігон АСУ ТП (ізольована мережа)', 'Honeypot-системи для промислових протоколів', 'Сканер вразливостей Nessus', 'SIEM-система для промислових мереж'],
    labWorks: ['Аналіз вразливостей протоколу Modbus', 'Захист SCADA від атак типу Man-in-the-Middle', 'Криптографічний захист телеметрії', 'Реагування на кіберінцидент — сценарій'],
    publications: ['Шевченко І.П. «Захист АСУ ТП енергетичних підприємств від APT-атак» // Кібербезпека, 2023', 'Ковальчук Д.М. «Виявлення аномалій у трафіку промислових протоколів» // IEEE Access, 2024'],
  },
  {
    id:'LAB-D01', ua:'Лабораторія цифрової економіки', sub:'Корпус B-02 · Економіка', disc:'Економіка', d:2, t:'40 хв', s:'open', sLbl:'ВІДКРИТО',
    fullDesc: 'Економічне моделювання, аналіз даних, бізнес-аналітика. Цифрова трансформація промислових підприємств, оцінка збитків від війни.',
    equipment: ['BI-платформа Power BI / Tableau', 'Середовище Python + Pandas / NumPy', 'ERP-симулятор (SAP Learning)', 'ГІС-модулі для оцінки збитків'],
    labWorks: ['Оцінка збитків промислових підприємств Донбасу', 'Побудова BI-дашборду для підприємства', 'Аналіз ринку праці переміщених ВНЗ', 'Фінансове моделювання проєкту відбудови'],
    publications: ['Мельник Т.А. «Оцінка прямих збитків промислової інфраструктури Донецької області» // Економіка України, 2023'],
  },
  {
    id:'LAB-R01', ua:'Лабораторія відновлення Донбасу', sub:'Корпус B-06 · Відбудова', disc:'Відновлення', d:5, t:'90 хв', s:'flagship', sLbl:'ФЛАГМАН',
    fullDesc: 'Міждисциплінарне середовище планування відбудови. Картування забруднень, тріаж інфраструктури, сценарії розселення — на основі реальних даних та академічних досліджень.',
    equipment: ['ГІС-платформа QGIS + супутникові знімки', 'Дрон-симулятор для обстеження руйнувань', 'BIM-модулі для проєктування відбудови', '3D-принтер для макетування (цифровий)'],
    labWorks: ['Картування мінної небезпеки за супутниковими даними', 'Тріаж інфраструктури: пріоритезація відбудови', 'Екологічна оцінка забруднення ґрунтів', 'Сценарне планування розселення громади'],
    publications: ['Бондаренко А.В. «Методика тріажу інфраструктури постконфліктних територій» // Urban Studies, 2024', 'Козак Д.С. «Супутниковий моніторинг руйнувань Маріуполя» // Remote Sensing, 2023'],
  },
];

const PARTNER_DISC = [
  'Гірнича інженерія', 'Екологічна інженерія',
  'Містобудування', 'Кібербезпека',
  'Енергосистеми', 'Цифрове виробництво',
  'Економіка', 'Архітектура',
];

const LabsPage = ({ onNavigate }) => {
  const [expandedLab, setExpandedLab] = React.useState(null);

  return (
    <div className="page">
      <span className="lbl">05 · ЛАБОРАТОРІЇ</span>

      <div className="lab-head">
        <div>
          <h1 className="h1">Лабораторії</h1>
          <p className="body" style={{marginTop:'0.625rem',fontSize:'1rem',maxWidth:'46ch'}}>
            Двадцять два інженерні модулі по шести корпусах. Кожна лабораторія —
            автономне симуляційне середовище з польовими даними.
          </p>
        </div>
        <div style={{width:240,height:160,borderRadius:'var(--r-md)',overflow:'hidden',border:'1px solid var(--border)',position:'relative',flexShrink:0}}>
          <img src="https://images.unsplash.com/photo-1581092160607-ee4c5a98b4ab?w=560&h=320&fit=crop" alt=""
            style={{width:'100%',height:'100%',objectFit:'cover',opacity:.55,filter:'grayscale(.2)'}} />
          <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(10,10,20,.3),rgba(10,10,20,.75))'}}></div>
          <div style={{position:'absolute',bottom:'0.75rem',left:'0.875rem'}}>
            <span className="lbl" style={{color:'rgba(255,255,255,.7)'}}>22 МОДУЛІ · 6 КОРПУСІВ</span>
          </div>
        </div>
      </div>

      <div className="lab-tbl">
        {LABS.map(l => (
          <div key={l.id}>
            <div className="lab-r" onClick={() => setExpandedLab(expandedLab === l.id ? null : l.id)}>
              <span className="lab-id">{l.id}</span>
              <div>
                <span className="lab-ua">{l.ua}</span>
                <div className="lab-sub">{l.sub}</div>
              </div>
              <span className="lab-disc">{l.disc}</span>
              <PDots filled={l.d} />
              <span className="lab-time">{l.t}</span>
              <Badge status={l.s} label={l.sLbl} />
              <span className="lbl lbl-gold" style={{textAlign:'right'}}>{expandedLab === l.id ? '↓' : '→'}</span>
            </div>
            {expandedLab === l.id && (
              <div className="gc" style={{margin:'0 0 0.75rem',padding:'1.5rem',borderLeft:'3px solid var(--amber)'}}>
                <p className="body" style={{marginBottom:'1.25rem',lineHeight:1.7}}>{l.fullDesc}</p>
                <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1.25rem'}}>
                  <div>
                    <span className="lbl lbl-amber" style={{marginBottom:'0.625rem',display:'block'}}>ОБЛАДНАННЯ</span>
                    <div style={{display:'flex',flexDirection:'column',gap:'0.375rem'}}>
                      {l.equipment.map((eq, i) => (
                        <div key={i} style={{display:'flex',gap:'0.5rem',alignItems:'flex-start'}}>
                          <span className="mono" style={{color:'var(--amber)',fontSize:'0.75rem',marginTop:2}}>◇</span>
                          <span className="caption" style={{lineHeight:1.5}}>{eq}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="lbl lbl-amber" style={{marginBottom:'0.625rem',display:'block'}}>ЛАБОРАТОРНІ РОБОТИ</span>
                    <div style={{display:'flex',flexDirection:'column',gap:'0.375rem'}}>
                      {l.labWorks.map((lw, i) => (
                        <div key={i} style={{display:'flex',gap:'0.5rem',alignItems:'flex-start'}}>
                          <span className="mono" style={{color:'var(--sage)',fontSize:'0.75rem',marginTop:2}}>{String(i+1).padStart(2,'0')}</span>
                          <span className="caption" style={{lineHeight:1.5}}>{lw}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{marginTop:'1.25rem',paddingTop:'1rem',borderTop:'1px solid var(--border)'}}>
                  <span className="lbl lbl-dim" style={{marginBottom:'0.5rem',display:'block'}}>ПУБЛІКАЦІЇ</span>
                  {l.publications.map((pub, i) => (
                    <p key={i} className="caption" style={{lineHeight:1.6,marginBottom:'0.375rem',fontStyle:'italic'}}>{pub}</p>
                  ))}
                </div>
                <div style={{marginTop:'1rem',display:'flex',gap:'0.625rem',flexWrap:'wrap'}}>
                  <button className="btn btn-sm btn-g" onClick={() => onNavigate('simulation')}>ЗАПУСТИТИ СИМУЛЯЦІЮ →</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="div-row">
        <span className="lbl">ФЛАГМАН · ОСОБЛИВО ЗНАЧИМИЙ ПРОЕКТ</span>
        <div className="div-line"></div>
      </div>

      <div className="flag-s">
        <div className="flag-l">
          <span className="lbl lbl-gold">ФЛАГМАН</span>
          <h2 className="h2" style={{marginTop:'0.875rem'}}>Лабораторія<br/>відновлення <em>Донбасу</em></h2>
          <p className="body" style={{marginTop:'1.25rem',fontSize:'0.9375rem',maxWidth:'46ch'}}>
            Міждисциплінарне середовище планування для реабілітації урбаністичної
            тканини. Картування забруднень, тріаж інфраструктури, сценарії
            розселення — на основі живих даних і академічного матеріалу.
          </p>
          <div style={{display:'flex',gap:'0.625rem',marginTop:'1.5rem',flexWrap:'wrap'}}>
            <button className="btn btn-g" onClick={() => onNavigate('simulation')}>ВІДКРИТИ ФЛАГМАН →</button>
            <button className="btn">СИЛАБУС PDF</button>
          </div>
        </div>
        <div className="flag-r">
          <span className="lbl">ПАРТНЕРСЬКІ ДИСЦИПЛІНИ</span>
          <div className="disc-g">
            {PARTNER_DISC.map(d => (
              <div key={d} className="disc-i"><span>{d}</span><span className="disc-dot">•</span></div>
            ))}
          </div>
          <div style={{marginTop:'1.5rem',paddingTop:'1.5rem',borderTop:'1px solid var(--border)'}}>
            <span className="lbl">ПАРТНЕРИ · ГРАНТОДАВЦІ</span>
            <p className="body" style={{fontSize:'0.8125rem',marginTop:'0.5rem'}}>
              ЄС · Українська фундація відбудови · Світовий банк · МОН України
            </p>
          </div>
        </div>
      </div>

      <Inst />
    </div>
  );
};

/* Building */
const FLOORS = ['F·09','F·08','F·07','F·06','F·05','F·04','F·03','F·02','F·01'];
const ROOMS = [
  { tp:'ЗАЛА',   id:'R·01', ua:'Лекційна зала А',         en:'Lecture Hall A',  dp:40, cp:16 },
  { tp:'ЛАБ.',   id:'R·03', ua:'Лабораторія автоматизації', en:'Automation Lab', dp:46, cp:24 },
  { tp:'СТУДІЯ', id:'R·05', ua:'Студія креслення',         en:'Drafting Studio', dp:52, cp:32 },
];

const BuildingPage = ({ onNavigate }) => {
  const [af, setAf] = React.useState(7);
  return (
    <div className="page">
      <span className="lbl">04 · КОРПУС B-02</span>
      <div className="bld-head">
        <div>
          <h1 className="h1">Інженерний корпус · <em>B-02</em></h1>
          <p className="caption" style={{marginTop:'0.375rem',fontSize:'0.875rem'}}>9 поверхів · 24 кімнати · 1976 рік</p>
        </div>
        <div style={{width:220,height:130,borderRadius:'var(--r-md)',overflow:'hidden',border:'1px solid var(--border)',position:'relative',flexShrink:0}}>
          <img src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=480&h=280&fit=crop" alt=""
            style={{width:'100%',height:'100%',objectFit:'cover',opacity:.5,filter:'grayscale(.3)'}} />
          <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(10,10,20,.3),rgba(10,10,20,.75))'}}></div>
          <div style={{position:'absolute',bottom:'0.625rem',left:'0.75rem'}}>
            <span className="lbl" style={{color:'rgba(255,255,255,.7)'}}>РЕКОНСТРУЙОВАНО · 2022</span>
          </div>
        </div>
      </div>

      <div className="bld-lay">
        <div>
          <span className="lbl">РОЗРІЗ · ОБЕРІТЬ ПОВЕРХ</span>
          <div className="fl-stack">
            {FLOORS.map((f,i) => (
              <div key={f} className={`fl-row ${(9-i)===af?'fl-act':''}`} onClick={() => setAf(9-i)}>
                <span className="fl-lbl">{f}</span>
                <div className="fl-cells">{Array.from({length:8},(_,j) => <div key={j} className="fl-cell"></div>)}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
          <div>
            <span className="lbl">ПОВЕРХ · F·0{af}</span>
            <h2 className="h2" style={{marginTop:'0.5rem',fontSize:'1.75rem'}}>Кімнати поверху</h2>
          </div>
          {ROOMS.map(r => (
            <div key={r.id} className="gc rm-card">
              <div className="rm-hd">
                <span className="lbl">{r.tp} · {r.id}</span>
                <span className="lbl-dim" style={{fontSize:'0.5rem'}}>●</span>
              </div>
              <div className="rm-title">{r.ua}</div>
              <div className="rm-en">{r.en}</div>
              <div className="rm-ft">
                <span className="caption">{r.dp} м² · до {r.cp} осіб</span>
                <span className="lbl lbl-gold">УВІЙТИ →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { LabsPage, BuildingPage });
