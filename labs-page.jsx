/* Labs Page v5 — WeeGo design, card grid, filters, rich detail panel */

const LABS = [
  {
    id:'LAB-M01', n:'01', ua:'Симулятор гірничої безпеки', sub:'Корпус B-01', disc:'Гірнича', d:5, t:'90 хв', s:'completed', sLbl:'ЗАВЕРШЕНО',
    icon:'⛏',
    brief:'Шахтне SCADA-середовище з моніторингом метану, вентиляції та аварійних сценаріїв.',
    fullDesc:'Повноцінна симуляція шахтного середовища з моніторингом метану, вентиляції та аварійних ситуацій. Базується на реальних польових даних шахт Донбасу. Студенти працюють з цифровими двійниками реального обладнання.',
    equipment:['Симулятор SCADA вентиляції', 'Датчики метану CH₄ (цифрові двійники)', 'Пульт диспетчера шахти', 'VR-шоломи для занурення в шахту', 'Термоанемометричний прилад'],
    labWorks:['Аналіз газової обстановки у вибої', 'Проєктування вентиляційної мережі', 'Дії при аварійному загазуванні', 'Евакуація персоналу — моделювання'],
    publications:['Коваленко О.М. «Моделювання газодинамічних явищ у шахтах» // Уголь Украины, 2019','Петров В.І. «Цифровий двійник вентиляції шахти ім. Засядька» // Геотехнічна механіка, 2021'],
    students:148, utilization:92,
  },
  {
    id:'LAB-E01', n:'02', ua:'Енергосистеми та відновлювані ДЕ', sub:'Корпус B-03', disc:'Енергетика', d:4, t:'50 хв', s:'completed', sLbl:'ЗАВЕРШЕНО',
    icon:'⚡',
    brief:'Моделювання електричних мереж 110/35/6 кВ, ВДЕ та оптимізація навантаження.',
    fullDesc:'Моделювання електричних мереж та енергосистем промислових підприємств. Аналіз стійкості, оптимізація навантаження, інтеграція відновлювальних джерел у промислову мережу.',
    equipment:['Симулятор мережі 110/35/6 кВ', 'Модель СЕС 10 кВт', 'Реле захисту SEPAM (цифрова копія)', 'Програмний комплекс PSS/E', 'Вимірювальний комплекс RMS'],
    labWorks:['Розрахунок коротких замикань', 'Моделювання електропостачання шахти', 'Оптимізація графіка навантаження', 'Інтеграція ВДЕ в промислову мережу'],
    publications:['Бунько В.О. «Оптимізація енергоспоживання» // Електротехніка, 2020','Ляшенко Т.М. «Мікросітки для відновлення» // Energy, 2023'],
    students:112, utilization:78,
  },
  {
    id:'LAB-A01', n:'03', ua:'Автоматизація та робототехніка', sub:'Корпус B-02', disc:'Автоматизація', d:4, t:'55 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'🤖',
    brief:'ПЛК-програмування, SCADA, промисловий IoT та керування роботом-маніпулятором.',
    fullDesc:'Розробка та тестування систем автоматизованого керування промисловими процесами. ПЛК-програмування, SCADA-інтерфейси, промисловий IoT — усе на базі реального обладнання з числовим керуванням.',
    equipment:['ПЛК Siemens S7-1200 (емулятор)', 'SCADA WinCC', 'Робот-маніпулятор (цифровий двійник)', 'Промислові датчики IoT', 'Перетворювачі частоти ABB'],
    labWorks:['Програмування ПЛК для конвеєра', 'Налаштування SCADA-інтерфейсу', 'Керування роботом-маніпулятором', 'Побудова IoT-мережі датчиків'],
    publications:['Гринченко В.І. «Автоматизація конвеєрного транспорту» // АСУ ТП, 2018','Козлов А.С. «Промисловий IoT для шахт» // Sensors, 2022'],
    students:98, utilization:85,
  },
  {
    id:'LAB-C01', n:'04', ua:'Кібербезпека АСУ ТП', sub:'Корпус B-02', disc:'Кібербезпека', d:4, t:'60 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'🔐',
    brief:'Захист промислових SCADA від кіберзагроз, аналіз вразливостей Modbus, криптографія.',
    fullDesc:'Захист промислових АСУ ТП від кіберзагроз. Аналіз вразливостей SCADA, криптографія, мережева безпека критичної інфраструктури. Відпрацювання реальних сценаріїв атак у ізольованому середовищі.',
    equipment:['Кіберполігон АСУ ТП (ізольована мережа)', 'Honeypot для промислових протоколів', 'Nessus сканер вразливостей', 'SIEM для промислових мереж', 'Форензик-станція'],
    labWorks:['Аналіз вразливостей Modbus', 'Захист SCADA від MitM-атак', 'Криптографічний захист телеметрії', 'Реагування на кіберінцидент — сценарій'],
    publications:['Шевченко І.П. «Захист АСУ ТП від APT-атак» // Кібербезпека, 2023','Ковальчук Д.М. «Аномалії у трафіку промпротоколів» // IEEE Access, 2024'],
    students:76, utilization:70,
  },
  {
    id:'LAB-AI01', n:'05', ua:'Штучний інтелект та ML', sub:'Корпус B-04', disc:'IT', d:5, t:'75 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'🧠',
    brief:'Нейронні мережі, комп\'ютерний зір, NLP та MLOps на GPU-кластері університету.',
    fullDesc:'Дослідження та практична розробка систем ШІ: навчання нейронних мереж, комп\'ютерний зір для промисловості, обробка природної мови, MLOps-пайплайни. GPU-кластер 8×RTX 4090.',
    equipment:['GPU-кластер 8×NVIDIA RTX 4090', 'Датасет промислових дефектів DonNTU-IDS', 'Промислові камери технічного зору', 'MLflow + DVC середовище', 'Роботизована рука для навчання'],
    labWorks:['Детекція дефектів гірничого обладнання (YOLO)', 'NLP-аналіз технічної документації', 'Прогнозування аварій (TimeSeries)', 'Розгортання ML-моделі у виробництві'],
    publications:['Сірченко О.В. «Детекція дефектів конвеєрної стрічки методами CV» // Applied Sciences, 2024','Мороз Д.І. «Прогнозування поломок шахтного обладнання» // Machines, 2023'],
    students:134, utilization:95,
  },
  {
    id:'LAB-GEO01', n:'06', ua:'ГІС та дистанційне зондування', sub:'Корпус B-06', disc:'Геодезія', d:3, t:'60 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'🛰',
    brief:'QGIS, Copernicus-дані, картування руйнувань та моделювання забруднень ДЗЗ.',
    fullDesc:'Геоінформаційні системи для аналізу промислових та постконфліктних територій. Обробка знімків Sentinel-2/SAR, 3D-моделювання рельєфу, оцінка збитків інфраструктури за супутниковими даними.',
    equipment:['QGIS + ArcGIS Pro', 'Архів знімків Copernicus / Sentinel', 'Дрон DJI Phantom 4 RTK (симулятор)', 'Обчислювальний кластер для обробки растрів', 'GPS-приймач L1/L2 (цифровий двійник)'],
    labWorks:['Картування руйнувань за Sentinel-2', 'Оцінка мінного забруднення (алгоритм HALO)', 'Побудова 3D-рельєфу за LiDAR-даними', 'Аналіз зміни землекористування 2014–2024'],
    publications:['Козак Д.С. «Супутниковий моніторинг руйнувань Маріуполя» // Remote Sensing, 2023','Панченко Л.О. «ГІС-оцінка деградації сільгоспугідь Донбасу» // Land, 2024'],
    students:89, utilization:72,
  },
  {
    id:'LAB-ENV01', n:'07', ua:'Екологічний моніторинг', sub:'Корпус B-05', disc:'Екологія', d:3, t:'45 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'🌿',
    brief:'Аналіз забруднення ґрунтів, повітря та води у постіндустріальних районах Донбасу.',
    fullDesc:'Комплексний екологічний моніторинг промислових територій. Аналіз важких металів у ґрунтах, моніторинг атмосферних викидів, оцінка якості поверхневих вод у постконфліктних умовах.',
    equipment:['Польова хімічна лабораторія', 'Газоаналізатор (VOC, SO₂, NOₓ)', 'Атомно-абсорбційний спектрометр', 'IoT-мережа моніторингу якості повітря', 'Програмний комплекс AERMOD'],
    labWorks:['Оцінка забруднення важкими металами', 'Атмосферне розсіювання промвикидів', 'Якість поверхневих вод: індекс WQI', 'Екологічний аудит промислового об\'єкта'],
    publications:['Іванова К.П. «Забруднення ґрунтів важкими металами в зоні бойових дій» // Env.Sci., 2024','Мельник Т.А. «Атмосферні викиди зруйнованих промпідприємств» // Atmosphere, 2023'],
    students:67, utilization:60,
  },
  {
    id:'LAB-NET01', n:'08', ua:'Комп\'ютерні мережі та SDN', sub:'Корпус B-04', disc:'IT', d:3, t:'50 хв', s:'completed', sLbl:'ЗАВЕРШЕНО',
    icon:'🌐',
    brief:'Cisco/Linux-мережі, SDN OpenFlow, маршрутизація та безпека мережної інфраструктури.',
    fullDesc:'Проєктування та адміністрування комп\'ютерних мереж. Програмно-визначені мережі (SDN), сегментація VLAN, VPN, QoS для промислових додатків та захист мережного периметру.',
    equipment:['Cisco Catalyst 2960 (Packet Tracer)', 'SDN-контролер OpenDaylight', 'Linux-сервери для мережних служб', 'Wireshark / ntopng аналізатор', 'Firewall Fortinet (навчальна ліцензія)'],
    labWorks:['Налаштування OSPF/BGP маршрутизації', 'SDN-контролер + OpenFlow flow-tables', 'VPN-тунель для промислових SCADA', 'Аналіз мережного трафіку та IDS'],
    publications:['Борисенко А.Г. «SDN для промислових мереж гірничих підприємств» // Computers, 2022'],
    students:103, utilization:80,
  },
  {
    id:'LAB-MECH01', n:'09', ua:'Механіка та матеріалознавство', sub:'Корпус B-01', disc:'Механіка', d:3, t:'55 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'⚙',
    brief:'МСЕ-аналіз, ANSYS-симуляція, тестування матеріалів для гірничого обладнання.',
    fullDesc:'Обчислювальна механіка та матеріалознавство для проєктування гірничого обладнання. МСЕ-аналіз статичних і динамічних навантажень, вибір матеріалів, втомне руйнування, топологічна оптимізація.',
    equipment:['ANSYS Workbench (навчальна ліцензія)', 'SolidWorks Simulation', '3D-принтер FDM + SLA', 'Машина для випробувань матеріалів (цифровий двійник)', 'Мікроскоп Olympus BX53 (симулятор)'],
    labWorks:['МСЕ-аналіз елемента шахтного кріплення', 'Оптимізація топології несучої рами', 'Аналіз втомного руйнування (S-N крива)', 'Моделювання удару для засобів захисту'],
    publications:['Рева О.В. «Топологічна оптимізація кріпильних елементів шахтної механізованої кріпі» // Strength of Materials, 2023'],
    students:82, utilization:65,
  },
  {
    id:'LAB-CHEM01', n:'10', ua:'Хімічні технології', sub:'Корпус B-05', disc:'Хімія', d:2, t:'40 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'🧪',
    brief:'Хімічна технологія коксохімії, водоочищення та переробка промислових відходів.',
    fullDesc:'Хімічні технології переробки сировини та промислових відходів. Коксохімія, водоочищення стічних вод гірничих підприємств, утилізація шлаків та нейтралізація хімічних забруднень.',
    equipment:['Лабораторний реактор хімічного синтезу', 'Хромато-мас-спектрометр (симулятор)', 'Піч для коксування вугілля (мікромодель)', 'Установка флокуляції для водоочищення', 'ІЧ-спектрометр FTIR'],
    labWorks:['Аналіз якості коксівного вугілля', 'Очищення шахтних вод від сульфатів', 'Нейтралізація кислих стоків', 'Утилізація доменного шлаку'],
    publications:['Ткаченко М.В. «Хімічна технологія переробки шлаків Донецького металургійного заводу» // Ukr.Chem.J., 2022'],
    students:54, utilization:48,
  },
  {
    id:'LAB-D01', n:'11', ua:'Цифрова економіка та аналітика', sub:'Корпус B-02', disc:'Економіка', d:2, t:'40 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'📊',
    brief:'BI-дашборди, ERP-симуляція, оцінка збитків та фінансове моделювання відбудови.',
    fullDesc:'Економічне моделювання, аналіз даних, бізнес-аналітика. Цифрова трансформація промислових підприємств, оцінка збитків від збройної агресії, фінансове моделювання проєктів відбудови.',
    equipment:['Power BI / Tableau Desktop', 'Python + Pandas / NumPy / Plotly', 'ERP-симулятор SAP Learning', 'ГІС-модулі для оцінки збитків', 'Bloomberg Terminal (навчальний)'],
    labWorks:['Оцінка збитків підприємств Донбасу', 'BI-дашборд для промислового підприємства', 'Аналіз ринку праці ВПО', 'Фінансове моделювання проєкту відбудови'],
    publications:['Мельник Т.А. «Оцінка прямих збитків промислової інфраструктури» // Економіка України, 2023'],
    students:119, utilization:74,
  },
  {
    id:'LAB-SIM01', n:'12', ua:'Тренажерний центр', sub:'Корпус B-03', disc:'Симуляція', d:3, t:'60 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'🖥',
    brief:'Повноекранні тренажери: диспетчер шахти, пульт управління підстанцією, HoReCa-OS.',
    fullDesc:'Мультидисциплінарний тренажерний центр для практичного відпрацювання технологічних процесів. Симулятори диспетчерського управління, аварійних ситуацій та нестаціонарних режимів.',
    equipment:['Симулятор диспетчера шахти (5 місць)', 'Тренажер управління підстанцією', 'VR-шоломи Meta Quest 3 (10 од)', 'Тактильні контролери для VR', 'Проєктор 180° для середовища занурення'],
    labWorks:['Диспетчерське управління у кризовій ситуації', 'Обслуговування підстанції під напругою', 'Аварійна зупинка доменної печі', 'Евакуація з гірничої виробки — VR'],
    publications:['Дяченко В.Р. «VR-тренажери для підготовки шахтарів: ефективність» // Safety Science, 2023'],
    students:201, utilization:88,
  },
  {
    id:'LAB-ARCH01', n:'13', ua:'Цифрова архітектура та BIM', sub:'Корпус B-06', disc:'Архітектура', d:3, t:'60 хв', s:'open', sLbl:'ВІДКРИТО',
    icon:'🏗',
    brief:'BIM-проєктування відбудови, Revit, параметрична архітектура та 3D-рендеринг.',
    fullDesc:'Цифрове проєктування та BIM-моделювання для відбудови зруйнованої інфраструктури. Від концепту до будівельної документації з урахуванням вимог стійкості та енергоефективності.',
    equipment:['Autodesk Revit 2025 (навчальна ліцензія)', 'Rhino 8 + Grasshopper', '3D-принтер для макетів', 'VR-візуалізація проєктів (Meta Quest 3)', 'Рендер-ферма (NVIDIA RTX A6000)'],
    labWorks:['BIM-модель зруйнованого будинку для відбудови', 'Параметричне фасадне проєктування', 'Енергетичне моделювання будівлі', 'BIM-координація: архітектура + конструкції + MEP'],
    publications:['Остапенко Ю.В. «BIM-методологія у відновленні постконфліктних міст» // Buildings, 2024'],
    students:77, utilization:68,
  },
  {
    id:'LAB-R01', n:'14', ua:'Лабораторія відновлення Донбасу', sub:'Корпус B-06', disc:'Відновлення', d:5, t:'90 хв', s:'flagship', sLbl:'ФЛАГМАН',
    icon:'🔬',
    brief:'Флагманський міждисциплінарний центр: ГІС-картування, тріаж інфраструктури, сценарії розселення.',
    fullDesc:'Міждисциплінарне середовище планування відбудови. Картування забруднень, тріаж інфраструктури, сценарії розселення — на основі реальних даних та академічних досліджень ДонНТУ.',
    equipment:['ГІС-платформа QGIS + Copernicus', 'Дрон-симулятор для обстеження руйнувань', 'BIM-модулі для проєктування відбудови', '3D-принтер для макетування', 'Дашборд моніторингу відбудови Донеччини'],
    labWorks:['Картування мінної небезпеки за ДЗЗ', 'Тріаж інфраструктури: пріоритезація відбудови', 'Екологічна оцінка забруднення ґрунтів', 'Сценарне планування розселення громади'],
    publications:['Бондаренко А.В. «Методика тріажу інфраструктури постконфліктних територій» // Urban Studies, 2024','Козак Д.С. «Супутниковий моніторинг руйнувань Маріуполя» // Remote Sensing, 2023'],
    students:243, utilization:97,
  },
];

const DISC_FILTERS = ['Всі', 'IT', 'Гірнича', 'Енергетика', 'Автоматизація', 'Кібербезпека', 'Відновлення', 'Інше'];

const DISC_COLORS = {
  'IT':             { text:'var(--lime)',  bg:'rgba(205,242,79,.06)',  border:'rgba(205,242,79,.2)'  },
  'Гірнича':        { text:'var(--ac)',    bg:'rgba(212,196,181,.06)', border:'rgba(212,196,181,.2)' },
  'Енергетика':     { text:'var(--slate)', bg:'rgba(136,152,170,.06)', border:'rgba(136,152,170,.2)' },
  'Автоматизація':  { text:'var(--t1)',    bg:'rgba(255,255,255,.03)', border:'rgba(255,255,255,.1)' },
  'Кібербезпека':   { text:'var(--gr)',    bg:'rgba(106,159,116,.06)', border:'rgba(106,159,116,.2)' },
  'Геодезія':       { text:'var(--slate)', bg:'rgba(136,152,170,.06)', border:'rgba(136,152,170,.2)' },
  'Екологія':       { text:'var(--gr)',    bg:'rgba(106,159,116,.06)', border:'rgba(106,159,116,.2)' },
  'Механіка':       { text:'var(--t2)',    bg:'rgba(255,255,255,.02)', border:'rgba(255,255,255,.08)' },
  'Хімія':          { text:'var(--rust)',  bg:'rgba(196,80,57,.06)',   border:'rgba(196,80,57,.2)'   },
  'Економіка':      { text:'var(--ac)',    bg:'rgba(212,196,181,.06)', border:'rgba(212,196,181,.2)' },
  'Симуляція':      { text:'var(--lime)',  bg:'rgba(205,242,79,.04)',  border:'rgba(205,242,79,.15)' },
  'Архітектура':    { text:'var(--slate)', bg:'rgba(136,152,170,.06)', border:'rgba(136,152,170,.2)' },
  'Відновлення':    { text:'var(--lime)',  bg:'rgba(205,242,79,.08)',  border:'rgba(205,242,79,.35)' },
};

const STATS = [
  { v:'14', l:'Лабораторій' },
  { v:'6',  l:'Корпусів' },
  { v:'22', l:'Дисципліни' },
  { v:'1.4K', l:'Студентів/рік' },
  { v:'87%', l:'Утилізація' },
  { v:'18', l:'Публікацій 2024' },
];

const StatusColors = {
  completed: 'var(--gr)',
  open:      'var(--ac)',
  flagship:  'var(--lime)',
  locked:    'var(--t3)',
};

const LabCard = ({ lab, isOpen, onToggle }) => {
  const dc = DISC_COLORS[lab.disc] || { text:'var(--t2)', bg:'transparent', border:'var(--b1)' };
  const sc = StatusColors[lab.s] || 'var(--t3)';

  return (
    <div style={{ borderBottom:'1px solid var(--b1)', background: isOpen ? 'rgba(212,196,181,.02)' : 'transparent' }}>
      {/* Card header — clickable */}
      <div
        onClick={onToggle}
        style={{
          display:'grid',
          gridTemplateColumns:'40px 1fr auto',
          gap:'1rem',
          padding:'1.25rem 1.5rem',
          cursor:'pointer',
          transition:'background .2s',
        }}
        onMouseEnter={e => { if (!isOpen) e.currentTarget.style.background = 'rgba(255,255,255,.015)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = isOpen ? 'rgba(212,196,181,.02)' : 'transparent'; }}
      >
        {/* Icon */}
        <div style={{
          width:40, height:40,
          border:`1px solid ${isOpen ? 'rgba(212,196,181,.3)' : 'var(--b1)'}`,
          display:'flex', alignItems:'center', justifyContent:'center',
          fontSize:'1.125rem', flexShrink:0,
          background: isOpen ? 'rgba(212,196,181,.06)' : 'transparent',
          transition:'all .2s',
        }}>{lab.icon}</div>

        {/* Info */}
        <div style={{ minWidth:0 }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.625rem', marginBottom:'4px', flexWrap:'wrap' }}>
            <span style={{ fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', letterSpacing:'0.1em' }}>{lab.id}</span>
            <span style={{
              fontFamily:'var(--mono)', fontSize:'0.5rem', letterSpacing:'0.1em',
              padding:'2px 6px',
              border:`1px solid ${dc.border}`,
              color: dc.text,
              background: dc.bg,
              textTransform:'uppercase',
            }}>{lab.disc}</span>
          </div>
          <div style={{ fontFamily:'var(--sans)', fontSize:'1rem', fontWeight:700, lineHeight:1.25, marginBottom:'4px' }}>{lab.ua}</div>
          <div style={{ fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)', letterSpacing:'0.08em' }}>{lab.sub}</div>
          <div style={{ fontSize:'0.8rem', color:'var(--t3)', lineHeight:1.5, marginTop:'6px', maxWidth:'52ch' }}>{lab.brief}</div>
        </div>

        {/* Meta */}
        <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:'0.5rem', flexShrink:0 }}>
          <span style={{
            fontFamily:'var(--mono)', fontSize:'0.5rem', letterSpacing:'0.1em',
            padding:'2px 8px', border:`1px solid ${sc}44`,
            color: sc, display:'flex', alignItems:'center', gap:'5px',
          }}>
            <span style={{ width:4, height:4, borderRadius:'50%', background:sc, display:'inline-block' }}></span>
            {lab.sLbl}
          </span>
          <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
            <span className="pdots"><PDots filled={lab.d} /></span>
            <span style={{ fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--t3)' }}>{lab.t}</span>
          </div>
          {/* utilization bar */}
          <div style={{ width:80 }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:3 }}>
              <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', color:'var(--t3)' }}>УТИЛ.</span>
              <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', color: lab.utilization > 85 ? 'var(--lime)' : 'var(--t3)' }}>{lab.utilization}%</span>
            </div>
            <div className="bar">
              <div className={`bar-fill${lab.utilization > 85 ? ' bar-lime' : lab.s === 'flagship' ? ' bar-lime' : ''}`}
                   style={{ width: lab.utilization + '%' }}></div>
            </div>
          </div>
          <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', color: isOpen ? 'var(--ac)' : 'var(--t3)', marginTop:'2px', transition:'color .2s' }}>
            {isOpen ? '↑ ЗГОРНУТИ' : '↓ РОЗГОРНУТИ'}
          </span>
        </div>
      </div>

      {/* Expanded detail */}
      {isOpen && (
        <div style={{
          borderTop:'1px solid var(--b1)',
          padding:'1.5rem 1.5rem 1.75rem',
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem',
          borderLeft:`3px solid ${lab.s === 'flagship' ? 'var(--lime)' : 'rgba(212,196,181,.3)'}`,
        }}>
          {/* Left: description + equipment */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <div>
              <span className="lbl" style={{ display:'block', marginBottom:'0.5rem' }}>ОПИС</span>
              <p style={{ fontSize:'0.875rem', color:'var(--t2)', lineHeight:1.72 }}>{lab.fullDesc}</p>
            </div>
            <div>
              <span className="lbl lbl-amber" style={{ display:'block', marginBottom:'0.625rem' }}>ОБЛАДНАННЯ</span>
              <div style={{ display:'flex', flexDirection:'column', gap:'5px' }}>
                {lab.equipment.map((eq, i) => (
                  <div key={i} style={{ display:'flex', gap:'8px', alignItems:'flex-start' }}>
                    <span style={{ color:'var(--ac)', fontFamily:'var(--mono)', fontSize:'0.625rem', marginTop:2, flexShrink:0 }}>◇</span>
                    <span style={{ fontSize:'0.8125rem', color:'var(--t2)', lineHeight:1.45 }}>{eq}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: lab works + publications */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <div>
              <span className="lbl" style={{ display:'block', marginBottom:'0.625rem', color:'var(--lime)', opacity:.9 }}>ЛАБОРАТОРНІ РОБОТИ</span>
              <div style={{ display:'flex', flexDirection:'column', gap:'5px' }}>
                {lab.labWorks.map((lw, i) => (
                  <div key={i} style={{ display:'flex', gap:'8px', alignItems:'flex-start' }}>
                    <span style={{ fontFamily:'var(--mono)', fontSize:'0.5625rem', color:'var(--lime)', marginTop:2, flexShrink:0, minWidth:18 }}>{String(i+1).padStart(2,'0')}</span>
                    <span style={{ fontSize:'0.8125rem', color:'var(--t2)', lineHeight:1.45 }}>{lw}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="lbl lbl-dim" style={{ display:'block', marginBottom:'0.5rem' }}>ПУБЛІКАЦІЇ</span>
              {lab.publications.map((pub, i) => (
                <p key={i} style={{ fontSize:'0.75rem', color:'var(--t3)', lineHeight:1.6, fontStyle:'italic', marginBottom:'4px' }}>{pub}</p>
              ))}
            </div>
            <div style={{ marginTop:'auto', paddingTop:'0.875rem', borderTop:'1px solid var(--b1)', display:'flex', gap:'0.5rem', alignItems:'center', justifyContent:'space-between' }}>
              <div style={{ display:'flex', gap:'4px' }}>
                <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', color:'var(--t3)' }}>СТУДЕНТІВ:</span>
                <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', color:'var(--t1)' }}>{lab.students}</span>
              </div>
              <button className="btn btn-sm btn-g">ЗАПУСТИТИ СИМУЛЯЦІЮ →</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LabsPage = ({ onNavigate }) => {
  const [filter, setFilter]   = React.useState('Всі');
  const [expanded, setExpanded] = React.useState(null);
  const [search, setSearch]   = React.useState('');

  const filtered = LABS.filter(l => {
    const disc = filter === 'Всі' ? true
      : filter === 'Інше' ? !['IT','Гірнича','Енергетика','Автоматизація','Кібербезпека','Відновлення'].includes(l.disc)
      : l.disc === filter;
    const q = search.toLowerCase();
    const matchSearch = !q || l.ua.toLowerCase().includes(q) || l.disc.toLowerCase().includes(q) || l.sub.toLowerCase().includes(q);
    return disc && matchSearch;
  });

  const toggle = id => setExpanded(expanded === id ? null : id);

  const flagship = LABS.find(l => l.s === 'flagship');

  return (
    <div className="page page-anim" style={{ display:'flex', flexDirection:'column', gap:'2.5rem' }}>

      {/* Header */}
      <div>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap:'2rem', marginBottom:'1.5rem', flexWrap:'wrap' }}>
          <div>
            <span className="lbl" style={{ marginBottom:'0.5rem', display:'block' }}>05 · ЛАБОРАТОРІЇ</span>
            <h1 className="h1">Лабораторний <em>комплекс</em></h1>
            <p className="body" style={{ marginTop:'0.625rem', maxWidth:'50ch', fontSize:'1rem' }}>
              Чотирнадцять інженерних модулів по шести корпусах — від гірничої симуляції до цифрового відновлення Донбасу.
            </p>
          </div>
          {/* search */}
          <div style={{ display:'flex', alignItems:'center', gap:0, border:'1px solid var(--b1)', background:'var(--s1)', flexShrink:0 }}>
            <span style={{ padding:'0.65rem 0.875rem', fontFamily:'var(--mono)', fontSize:'0.6rem', color:'var(--t3)', letterSpacing:'0.1em', borderRight:'1px solid var(--b1)' }}>ПОШУК</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="назва, дисципліна..."
              style={{
                background:'none', border:'none', outline:'none', padding:'0.65rem 1rem',
                color:'var(--t1)', fontFamily:'var(--mono)', fontSize:'0.75rem',
                width:200, letterSpacing:'0.05em',
              }}
            />
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(6,1fr)', gap:0, border:'1px solid var(--b1)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding:'12px 14px',
              borderRight: i < STATS.length-1 ? '1px solid var(--b1)' : 'none',
              background:'rgba(9,9,9,.74)',
            }}>
              <div style={{ fontFamily:'var(--serif)', fontSize:'1.5rem', fontWeight:300, lineHeight:1, marginBottom:5, color: i === 0 ? 'var(--lime)' : 'var(--t1)' }}>{s.v}</div>
              <div style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--t3)' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter bar */}
      <div>
        <div style={{ display:'flex', borderBottom:'1px solid var(--b1)', overflowX:'auto', scrollbarWidth:'none' }}>
          {DISC_FILTERS.map(f => (
            <button key={f} onClick={() => { setFilter(f); setExpanded(null); }} style={{
              background:'none', border:'none', borderBottom:`2px solid ${filter === f ? 'var(--lime)' : 'transparent'}`,
              color: filter === f ? 'var(--t1)' : 'var(--t3)',
              fontFamily:'var(--mono)', fontSize:'0.5625rem', letterSpacing:'0.14em',
              padding:'0.875rem 1.25rem', cursor:'pointer', whiteSpace:'nowrap',
              transition:'all .2s', flexShrink:0,
              background: filter === f ? 'rgba(205,242,79,.04)' : 'none',
            }}>{f.toUpperCase()}</button>
          ))}
          <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', padding:'0 1rem', borderLeft:'1px solid var(--b1)' }}>
            <span style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', color:'var(--t3)', letterSpacing:'0.1em' }}>{filtered.length} З {LABS.length}</span>
          </div>
        </div>

        {/* Labs list */}
        <div style={{ border:'1px solid var(--b1)', borderTop:'none' }}>
          {filtered.length === 0 ? (
            <div style={{ padding:'3rem', textAlign:'center', fontFamily:'var(--mono)', fontSize:'0.75rem', color:'var(--t3)' }}>
              НІЧОГО НЕ ЗНАЙДЕНО — СПРОБУЙТЕ ІНШИЙ ФІЛЬТР
            </div>
          ) : filtered.map(lab => (
            <LabCard key={lab.id} lab={lab} isOpen={expanded === lab.id} onToggle={() => toggle(lab.id)} />
          ))}
        </div>
      </div>

      {/* Flagship section */}
      {flagship && (
        <div>
          <div className="div-row">
            <span className="lbl" style={{ whiteSpace:'nowrap' }}>ФЛАГМАН · ОСОБЛИВО ЗНАЧИМИЙ ПРОЕКТ</span>
            <div className="div-line"></div>
          </div>

          <div style={{
            display:'grid', gridTemplateColumns:'1.2fr 1fr',
            border:'1px solid rgba(205,242,79,.2)',
            borderLeft:'3px solid var(--lime)',
            background:'rgba(205,242,79,.025)',
            overflow:'hidden',
          }}>
            <div style={{ padding:'2.25rem', borderRight:'1px solid var(--b1)' }}>
              <span className="lbl" style={{ color:'var(--lime)', marginBottom:'0.875rem', display:'block' }}>ФЛАГМАН · {flagship.id}</span>
              <h2 className="h2" style={{ marginTop:'0', lineHeight:1.1 }}>
                {flagship.ua.split(' ').slice(0,2).join(' ')}<br/>
                <em>{flagship.ua.split(' ').slice(2).join(' ')}</em>
              </h2>
              <p className="body" style={{ marginTop:'1.25rem', fontSize:'0.9375rem', maxWidth:'46ch' }}>
                {flagship.fullDesc}
              </p>
              <div style={{ display:'flex', gap:'0.625rem', marginTop:'1.75rem', flexWrap:'wrap' }}>
                <button className="btn btn-g" onClick={() => onNavigate && onNavigate('simulation')}>ВІДКРИТИ ФЛАГМАН →</button>
                <button className="btn btn-sm">СИЛАБУС PDF</button>
              </div>
              <div style={{ marginTop:'1.5rem', display:'flex', gap:'1.5rem' }}>
                <div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'1.75rem', fontWeight:300, color:'var(--lime)', lineHeight:1 }}>{flagship.students}</div>
                  <div style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', color:'var(--t3)', letterSpacing:'0.1em', marginTop:4 }}>СТУДЕНТІВ/РІК</div>
                </div>
                <div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'1.75rem', fontWeight:300, color:'var(--lime)', lineHeight:1 }}>{flagship.utilization}%</div>
                  <div style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', color:'var(--t3)', letterSpacing:'0.1em', marginTop:4 }}>УТИЛІЗАЦІЯ</div>
                </div>
                <div>
                  <div style={{ fontFamily:'var(--serif)', fontSize:'1.75rem', fontWeight:300, color:'var(--ac)', lineHeight:1 }}>{flagship.labWorks.length}</div>
                  <div style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', color:'var(--t3)', letterSpacing:'0.1em', marginTop:4 }}>ЛАБОРАТОРНИХ РОБІТ</div>
                </div>
              </div>
            </div>

            <div style={{ padding:'2.25rem', display:'flex', flexDirection:'column', gap:'1.25rem' }}>
              <div>
                <span className="lbl" style={{ marginBottom:'1rem', display:'block' }}>ПАРТНЕРСЬКІ ДИСЦИПЛІНИ</span>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr' }}>
                  {['ГІС та ДЗЗ','Кібербезпека','Екологія','Містобудування','Економіка','Архітектура','Цифрове виробництво','Право'].map((d, i, arr) => (
                    <div key={d} style={{
                      display:'flex', justifyContent:'space-between', alignItems:'center',
                      padding:'0.6rem 0', fontSize:'0.8125rem',
                      borderBottom: i < arr.length - 2 ? '1px solid var(--b1)' : 'none',
                      transition:'color .2s', cursor:'default',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--lime)'}
                    onMouseLeave={e => e.currentTarget.style.color = ''}>
                      <span>{d}</span>
                      <span style={{ color:'var(--lime)', fontSize:'0.5rem' }}>•</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ paddingTop:'1.25rem', borderTop:'1px solid var(--b1)', marginTop:'auto' }}>
                <span className="lbl" style={{ marginBottom:'0.5rem', display:'block' }}>ПАРТНЕРИ · ГРАНТОДАВЦІ</span>
                <p className="body" style={{ fontSize:'0.8125rem' }}>
                  ЄС · Українська фундація відбудови · Світовий банк · МОН України
                </p>
                <div style={{ display:'flex', gap:'0.625rem', marginTop:'0.875rem', flexWrap:'wrap' }}>
                  {['ЄС','УФВ','World Bank','МОН'].map(p => (
                    <span key={p} style={{
                      fontFamily:'var(--mono)', fontSize:'0.5rem', letterSpacing:'0.1em',
                      padding:'3px 8px', border:'1px solid var(--b1)', color:'var(--t3)',
                    }}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Inst />
    </div>
  );
};

/* ── Building page (unchanged logic, WeeGo styling via CSS vars) ── */
const FLOORS = ['F·09','F·08','F·07','F·06','F·05','F·04','F·03','F·02','F·01'];
const ROOMS = [
  { tp:'ЗАЛА',   id:'R·01', ua:'Лекційна зала А',           en:'Lecture Hall A',    dp:40, cp:16 },
  { tp:'ЛАБ.',   id:'R·03', ua:'Лабораторія автоматизації',  en:'Automation Lab',   dp:46, cp:24 },
  { tp:'СТУДІЯ', id:'R·05', ua:'Студія креслення',           en:'Drafting Studio',  dp:52, cp:32 },
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
        <div style={{width:220,height:130,overflow:'hidden',border:'1px solid var(--b1)',position:'relative',flexShrink:0}}>
          <img src="https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=480&h=280&fit=crop" alt=""
            style={{width:'100%',height:'100%',objectFit:'cover',opacity:.5,filter:'grayscale(.3)'}} />
          <div style={{position:'absolute',inset:0,background:'linear-gradient(135deg,rgba(5,5,5,.3),rgba(5,5,5,.75))'}}></div>
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
                <span className="lbl lbl-amber">УВІЙТИ →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { LabsPage, BuildingPage });
