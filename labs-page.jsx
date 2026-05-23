/* Labs Page v6 — wuf-host type scale, virtual interactive labs tied to DonNTU history */

/* ── Type tokens (wuf-host exact) ─────────────────────────────── */
const LH  = { fontFamily:'var(--display)', fontSize:'2rem',   lineHeight:'2.5rem', fontWeight:400 };
const LB2 = { fontFamily:'var(--display)', fontSize:'1.5rem', lineHeight:'2rem',   fontWeight:400 };
const LBL = { fontFamily:'var(--mono)',    fontSize:'0.6rem', letterSpacing:'0.14em', textTransform:'uppercase', lineHeight:'1rem' };
const LPAD = '3rem';
const LBR  = '1px solid rgba(0,0,0,0.08)';

/* ── Colours ───────────────────────────────────────────────────── */
const LBLUE='#005ab8', LPINK='#f48ba2', LTEAL='#c0e5e7', LYELL='#f5d248';
const LORG='#f26522', LDARK='#0d0f14', LCREAM='#f0ede6', LNAVY='#1a1a2e';
const LWHITE='#fff', LOFF='#111214';

/* ── Status config ─────────────────────────────────────────────── */
const STATUS = {
  open:      { color: LBLUE,  dot: LBLUE  },
  completed: { color: '#4a7c59', dot: '#4a7c59' },
  flagship:  { color: LORG,   dot: LORG   },
};

/* ── Labs data ─────────────────────────────────────────────────── */
const LABS = [
  {
    id:'L·01', ua:'Шахта ім. Засядька', disc:'Гірнича інженерія',
    d:4, t:'60 хв', s:'open', sLbl:'ВІДКРИТО',
    brief:'SCADA-тренажер диспетчера: метан, вентиляція та аварійний сценарій у реальному часі.',
    fullDesc:"Цифровий двійник диспетчерського пункту шахти ім. Засядька — найбільшої шахти Донбасу (25 000 гірників, глибина 1400 м). Студент бере роль чергового диспетчера і в реальному часі відстежує показники вентиляції, рівень метану в трьох вибоях та стан підйомних механізмів. Сценарій завершується аварійною ситуацією, яку треба розв'язати за 8 хвилин.",
    interactions:['Моніторинг метану CH₄ по вибоях','Управління вентиляційними дверима','Аварія: газовий викид — евакуація зміни',"Зв'язок з гірничорятувальниками"],
    context:"Шахта ім. Засядька, вул. Стратонавтів, Донецьк. Діяла 1958–2018.",
    color: LTEAL,
  },
  {
    id:'L·02', ua:'Кампус Артема, 58', disc:'Архів університету',
    d:1, t:'30 хв', s:'open', sLbl:'ВІДКРИТО',
    brief:'3D-прогулянка кампусом Донецька — аудиторії, архівні фото 1950–2014, останній день.',
    fullDesc:"Реконструйований цифровий кампус ДонНТУ на вул. Артема, 58. Ходиш по коридорах, заходиш в аудиторії, дивишся архівні фото і документи. Кожна кімната — шар часу: переключаєш між 1960, 1991, 2005 та 2014 роками і бачиш як змінювалось середовище. Завершується 16 лютого 2022 — останній день перед евакуацією.",
    interactions:['Навігація по корпусах (схема поверхів)','Перемикач часових шарів 1960→2014','Архівні документи і фотографії','Остання перекличка: 16.02.2022'],
    context:"Головний корпус ДонНТУ, Донецьк. Відкритий 1926, окупований 2014.",
    color: LYELL,
  },
  {
    id:'L·03', ua:'Евакуація × 3', disc:'Історія університету',
    d:2, t:'45 хв', s:'open', sLbl:'ВІДКРИТО',
    brief:'Три евакуації: 1941, 2014, 2022. Порівняльна карта, документи, рішення.',
    fullDesc:"Інтерактивна карта трьох евакуацій університету. 1941: під бомбардуваннями — до Прокоп'євська. 2014: під обстрілами — до Покровська. 2022: знову — до Луцька, потім Дрогобич. Для кожної евакуації: маршрут, перелік вивезеного обладнання, накази ректора, листи викладачів і студентів.",
    interactions:['Карта маршрутів трьох евакуацій','Архів наказів і документів по роках','Порівняння: що вдалось зберегти',"Інтерв'ю очевидців (аудіо)"],
    context:"Прокоп'євськ (1941) → Покровськ (2014) → Луцьк → Дрогобич (2022–2024).",
    color: LPINK,
  },
  {
    id:'L·04', ua:'Геологічний розріз Донбасу', disc:'Геологія',
    d:3, t:'50 хв', s:'open', sLbl:'ВІДКРИТО',
    brief:'Профіль надр до 2000 м: клікай шари, визначай породи, знаходь вугільні пласти.',
    fullDesc:"Вертикальний розріз донецького басейну від поверхні до глибини 2000 м. Клікаєш на геологічний шар — отримуєш інформацію про породу, вік, характеристики. Завдання: знайти 6 вугільних пластів, оцінити їх промислову цінність, нанести на карту шахтне поле. Дані базуються на реальних геологічних звітах ДонНТУ.",
    interactions:['Вертикальний розріз з 12 шарами','Визначення мінералів та порід','Розрахунок запасів пласта','Побудова геологічної карти шахтного поля'],
    context:"Реальні геологічні дані Донецького кам'яновугільного басейну, архів ДонНТУ.",
    color: LTEAL,
  },
  {
    id:'L·05', ua:'Реконструкція міста', disc:'Містобудування',
    d:4, t:'75 хв', s:'open', sLbl:'ВІДКРИТО',
    brief:'Симулятор відбудови: супутникові дані руйнувань, тріаж, розподіл ресурсів.',
    fullDesc:"Ти — керівник відділу відновлення. Є супутникові знімки пошкодженого міста, обмежений бюджет і 500 днів. Потрібно: оцінити збитки за категоріями, скласти тріаж інфраструктури (лікарні → школи → житло → промисловість), обрати підрядників, розподілити фінансування. Сценарії побудовані на основі даних CEDOS та World Bank.",
    interactions:['Карта пошкоджень з фільтрами','Тріаж: розстав пріоритети відбудови','Бюджетний калькулятор','Підсумковий звіт та рейтинг рішень'],
    context:"Методологія RAPID Assessment, World Bank. Синтетичні дані на основі відкритих джерел.",
    color: LBLUE,
  },
  {
    id:'L·06', ua:'Метанова хвиля', disc:'Безпека праці',
    d:5, t:'40 хв', s:'open', sLbl:'ВІДКРИТО',
    brief:'Фізика вибуху в шахті: розрахуй вентиляцію, встанови кордон безпеки, врятуй зміну.',
    fullDesc:"Симуляція поширення метанової хвилі в гірничій виробці. Задаєш параметри вентиляції, довжину виробки, концентрацію газу. Модель розраховує зону вибуху, ударну хвилю, температуру. Твоя задача — встановити правильний вентиляційний режим і евакуювати зміну до моменту займання. Ціна помилки — статистика реальних аварій.",
    interactions:['Параметрична модель вибуху','Розрахунок вентиляційного тиску','Евакуаційний план (таймер)','Статистика аварій Донбасу 1990–2014'],
    context:"Базується на методиці ННДІПБОП (Донецьк). Параметри реальних шахт Донбасу.",
    color: LORG,
  },
  {
    id:'L·07', ua:'Коксова піч', disc:'Хімічні технології',
    d:3, t:'45 хв', s:'open', sLbl:'ВІДКРИТО',
    brief:'Повний цикл коксування: від донецького вугілля до металургійного коксу та побічних продуктів.',
    fullDesc:"Повний цикл виробництва коксу від завантаження вугільної шихти до вивантаження готового продукту. Студент контролює температуру, тривалість, хімічний склад. Побічні продукти (бензол, смола, аміак) збираються і оцінюються. Фінальний крок: перевірка якості коксу за стандартом ДСТУ для металургії.",
    interactions:['Завантаження шихти та склад вугілля','Температурний графік піролізу','Збір та ідентифікація побічних продуктів','QC: перевірка якості коксу'],
    context:"Донецький коксохімічний завод — один з найбільших в Європі. Сировина: вугілля марок Ж, КЖ.",
    color: LYELL,
  },
  {
    id:'L·08', ua:'Аудиторія 1921', disc:'Історія університету',
    d:1, t:'25 хв', s:'completed', sLbl:'ЗАВЕРШЕНО',
    brief:'Перша лекція ДГІ, 30 травня 1921. Засновники, перші залікові книжки, голоси епохи.',
    fullDesc:"Віртуальна реконструкція першої аудиторії Донецького гірничого інституту. Дата: 30 травня 1921. Ти — студент першого набору. Перша лекція з геодезії, 23 студенти, крейда на дошці. Між заняттями — архівна колекція: перші залікові книжки, список викладачів, фотографії юзівського технікуму.",
    interactions:['Реконструйована аудиторія (3D)','Архів: перший список студентів 1921','Перші залікові книжки (скани)','Хронологія: ДГІ → ДПІ → ДНТУ → ДонНТУ'],
    context:"Гірничий технікум у Юзівці (нині Донецьк), відкритий 30 травня 1921 р.",
    color: LCREAM,
  },
  {
    id:'L·09', ua:'Дрон над Донецьком', disc:'Дистанційне зондування',
    d:3, t:'55 хв', s:'open', sLbl:'ВІДКРИТО',
    brief:'Пілотуєш дрон над реконструйованим містом, фіксуєш пошкодження, складаєш HALO-звіт.',
    fullDesc:"Симулятор польоту розвідувального дрону над умовним містом (геометрія — реальний Донецьк, текстури — нейтральні). Місія: за 20 хвилин польоту обстежити 6 кварталів, зафіксувати пошкодження, класифікувати об'єкти (житло, лікарня, дорога, міст). Зібрані дані автоматично формуються у звіт HALO-формату.",
    interactions:['Симулятор польоту (WASD + камера)','Класифікатор пошкоджень (клік на об\'єкт)','Тепловізійний і RGB режими','Генерація HALO-звіту'],
    context:"Методологія HALO Trust та UN Habitat для оцінки пошкоджень в зонах конфліктів.",
    color: LBLUE,
  },
  {
    id:'L·10', ua:'Рішення ректора', disc:'Управління в кризі',
    d:5, t:'90 хв', s:'flagship', sLbl:'ФЛАГМАН',
    brief:'28 лютого 2022, 04:00. Ти — ректор. 72 години щоб врятувати університет. Квест з реальними документами.',
    fullDesc:"Текстовий квест-симулятор на основі реальних подій лютого–квітня 2022. Ти — ректор ДонНТУ. Почалось повномасштабне вторгнення. Є 72 години, команда, список майна, бази даних студентів і 50 000 справ в архіві. Кожне рішення має наслідки. Наприкінці — порівняння з тим, що насправді зробив Д. С. Шиленко.",
    interactions:['Текстовий квест (розгалужені рішення)','Документи: накази, списки, листи (реальні скани)','Лічильник часу і ресурсів','Фінал: порівняння з реальними рішеннями'],
    context:"Реальна хронологія: 24 лютого — вторгнення, 12 квітня 2022 — ДонНТУ в Луцьку.",
    color: LDARK,
    partners:['Кризовий менеджмент','Право','Психологія','Логістика','Архівна справа','Цифрова безпека'],
  },
];

/* ── Shared micro-components ───────────────────────────────────── */
const Dots = ({ filled, total=5 }) => (
  <div style={{ display:'flex', gap:4, alignItems:'center' }}>
    {Array.from({ length: total }, (_, i) => (
      <span key={i} style={{
        width: 7, height: 7, borderRadius:'50%',
        background: i < filled ? LDARK : 'transparent',
        border: `1.5px solid ${i < filled ? LDARK : 'rgba(0,0,0,0.2)'}`,
        display:'inline-block', flexShrink:0,
      }} />
    ))}
  </div>
);

const Badge = ({ s, label }) => {
  const cfg = STATUS[s] || STATUS.open;
  return (
    <span style={{
      ...LBL,
      display:'inline-flex', alignItems:'center', gap:5,
      padding:'4px 10px',
      border:`1px solid ${cfg.color}`,
      color: cfg.color,
    }}>
      <span style={{ width:5, height:5, borderRadius:'50%', background:cfg.dot, flexShrink:0 }} />
      {label}
    </span>
  );
};

/* ── Single lab row ────────────────────────────────────────────── */
const LabRow = ({ lab, open, onToggle }) => {
  const isFlg = lab.s === 'flagship';
  const rowBg = open ? 'rgba(0,0,0,0.03)' : LWHITE;

  return (
    <div style={{ borderBottom: LBR }}>

      {/* ── Main row ── */}
      <div
        onClick={onToggle}
        style={{
          display:'grid',
          gridTemplateColumns:'5.5rem 1fr 12rem 6rem 5rem 9rem 5.5rem',
          alignItems:'center',
          padding:'1.25rem 1.5rem',
          cursor:'pointer',
          background: rowBg,
          transition:'background .15s',
          gap:'1rem',
        }}
        onMouseEnter={e => { if(!open) e.currentTarget.style.background='rgba(0,0,0,0.02)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = open ? 'rgba(0,0,0,0.03)' : LWHITE; }}
      >

        {/* ID */}
        <span style={{ ...LBL, color:'rgba(0,0,0,0.35)', fontSize:'0.55rem' }}>{lab.id}</span>

        {/* Name */}
        <div>
          <div style={{ ...LH, fontSize:'1.125rem', lineHeight:'1.5rem', color: LDARK }}>
            {lab.ua}
            {isFlg && <span style={{ ...LBL, color:LORG, marginLeft:'0.75rem', fontSize:'0.5rem' }}>★ ФЛАГМАН</span>}
          </div>
          <div style={{ ...LBL, color:'rgba(0,0,0,0.4)', marginTop:3, fontSize:'0.55rem' }}>{lab.context}</div>
        </div>

        {/* Discipline */}
        <span style={{ ...LBL, color:'rgba(0,0,0,0.5)', fontSize:'0.55rem' }}>{lab.disc}</span>

        {/* Dots */}
        <Dots filled={lab.d} />

        {/* Duration */}
        <span style={{ ...LBL, color:'rgba(0,0,0,0.5)', fontSize:'0.55rem' }}>{lab.t}</span>

        {/* Status */}
        <Badge s={lab.s} label={lab.sLbl} />

        {/* Open */}
        <span style={{
          ...LBL, color: open ? LBLUE : LDARK,
          fontSize:'0.55rem', textAlign:'right',
          transition:'color .15s',
        }}>
          {open ? '↑ ЗГОРН.' : 'ВІДКРИТИ →'}
        </span>
      </div>

      {/* ── Expanded panel ── */}
      {open && (
        <div style={{
          borderTop: LBR,
          display:'grid', gridTemplateColumns:'1fr 1fr',
          borderLeft:`3px solid ${isFlg ? LORG : LBLUE}`,
        }}>

          {/* Left: description + context */}
          <div style={{
            padding:`2rem ${LPAD}`,
            borderRight: LBR,
            display:'flex', flexDirection:'column', gap:'1.5rem',
          }}>
            <div>
              <div style={{ ...LBL, color:'rgba(0,0,0,0.35)', marginBottom:'0.75rem' }}>ОПИС ЛАБОРАТОРІЇ</div>
              <p style={{ ...LB2, fontSize:'1rem', lineHeight:'1.6rem', color:LDARK }}>{lab.fullDesc}</p>
            </div>
            <div style={{
              padding:'1rem 1.25rem',
              background: lab.color === LDARK ? '#f5f0e8' : `${lab.color}22`,
              borderLeft:`3px solid ${lab.color === LDARK ? '#555' : lab.color}`,
            }}>
              <div style={{ ...LBL, color:'rgba(0,0,0,0.4)', marginBottom:'0.375rem', fontSize:'0.55rem' }}>КОНТЕКСТ</div>
              <span style={{ ...LBL, color: LDARK, fontSize:'0.6rem' }}>{lab.context}</span>
            </div>
          </div>

          {/* Right: interactions */}
          <div style={{ padding:`2rem ${LPAD}`, display:'flex', flexDirection:'column', gap:'1.5rem' }}>
            <div>
              <div style={{ ...LBL, color:'rgba(0,0,0,0.35)', marginBottom:'1rem' }}>ІНТЕРАКТИВНІ МОДУЛІ</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.75rem' }}>
                {lab.interactions.map((item, i) => (
                  <div key={i} style={{
                    display:'flex', gap:'1rem', alignItems:'flex-start',
                    padding:'0.75rem 1rem',
                    border: LBR,
                    background: LWHITE,
                  }}>
                    <span style={{
                      ...LBL, fontSize:'0.55rem',
                      color: isFlg ? LORG : LBLUE,
                      flexShrink:0, minWidth:'1.25rem',
                    }}>
                      {String(i+1).padStart(2,'0')}
                    </span>
                    <span style={{ ...LBL, color:LDARK, fontSize:'0.6rem', lineHeight:'1rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{
              marginTop:'auto',
              paddingTop:'1.25rem',
              borderTop: LBR,
              display:'flex', gap:'0.75rem',
            }}>
              <button
                style={{
                  ...LBL, fontSize:'0.6rem',
                  padding:'0.75rem 1.5rem',
                  background: isFlg ? LORG : LBLUE,
                  color: LWHITE, border:'none', cursor:'pointer',
                }}
                onClick={e => { e.stopPropagation(); }}
              >
                ЗАПУСТИТИ →
              </button>
              <button
                style={{
                  ...LBL, fontSize:'0.6rem',
                  padding:'0.75rem 1.25rem',
                  background:'transparent',
                  color: LDARK,
                  border:`1px solid rgba(0,0,0,0.2)`,
                  cursor:'pointer',
                }}
                onClick={e => { e.stopPropagation(); }}
              >
                МЕТОДИЧКА
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

/* ── Flagship block ────────────────────────────────────────────── */
const FlagshipBlock = ({ lab, onNavigate }) => (
  <div style={{
    display:'grid', gridTemplateColumns:'2fr 1fr',
    background: LDARK, color: LWHITE,
    border:`1px solid rgba(255,255,255,0.06)`,
  }}>
    {/* Left */}
    <div style={{
      padding: LPAD,
      borderRight:'1px solid rgba(255,255,255,0.06)',
      display:'flex', flexDirection:'column', gap:'1.5rem',
    }}>
      <div style={{ ...LBL, color: LORG, fontSize:'0.6rem' }}>ФЛАГМАН · {lab.id}</div>

      <div>
        <h2 style={{ ...LH, fontSize:'2.5rem', lineHeight:'3rem', color:LWHITE, margin:0 }}>
          {lab.ua}
        </h2>
        <p style={{ ...LB2, color:'rgba(255,255,255,0.55)', marginTop:'1rem', maxWidth:'44ch' }}>
          {lab.brief}
        </p>
      </div>

      <div style={{ display:'flex', gap:'0.75rem', flexWrap:'wrap' }}>
        <button
          style={{
            ...LBL, fontSize:'0.6rem',
            padding:'0.875rem 1.75rem',
            background: LORG, color:LWHITE,
            border:'none', cursor:'pointer',
          }}
          onClick={() => onNavigate && onNavigate('simulation')}
        >
          ЗАПУСТИТИ ФЛАГМАН →
        </button>
        <button
          style={{
            ...LBL, fontSize:'0.6rem',
            padding:'0.875rem 1.5rem',
            background:'transparent', color:LWHITE,
            border:'1px solid rgba(255,255,255,0.2)',
            cursor:'pointer',
          }}
        >
          МЕТОДИЧНИЙ ОПИС
        </button>
      </div>

      {/* Stats */}
      <div style={{ display:'flex', gap:'2.5rem', paddingTop:'1.5rem', borderTop:'1px solid rgba(255,255,255,0.07)' }}>
        <div>
          <div style={{ fontFamily:'var(--display)', fontSize:'2rem', fontWeight:400, color:LORG, lineHeight:1 }}>72</div>
          <div style={{ ...LBL, color:'rgba(255,255,255,0.4)', marginTop:6, fontSize:'0.55rem' }}>ГОДИНИ КВЕСТУ</div>
        </div>
        <div>
          <div style={{ fontFamily:'var(--display)', fontSize:'2rem', fontWeight:400, color:LWHITE, lineHeight:1 }}>48</div>
          <div style={{ ...LBL, color:'rgba(255,255,255,0.4)', marginTop:6, fontSize:'0.55rem' }}>РІШЕНЬ</div>
        </div>
        <div>
          <div style={{ fontFamily:'var(--display)', fontSize:'2rem', fontWeight:400, color:LTEAL, lineHeight:1 }}>6</div>
          <div style={{ ...LBL, color:'rgba(255,255,255,0.4)', marginTop:6, fontSize:'0.55rem' }}>ДИСЦИПЛІН</div>
        </div>
      </div>
    </div>

    {/* Right: partner disciplines */}
    <div style={{ padding: LPAD, display:'flex', flexDirection:'column', gap:'1.5rem' }}>
      <div style={{ ...LBL, color:'rgba(255,255,255,0.35)', fontSize:'0.55rem' }}>ПАРТНЕРСЬКІ ДИСЦИПЛІНИ</div>
      <div style={{ display:'flex', flexDirection:'column' }}>
        {(lab.partners || []).map((d, i, arr) => (
          <div key={d} style={{
            display:'flex', justifyContent:'space-between', alignItems:'center',
            padding:'0.875rem 0',
            borderBottom: i < arr.length-1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
          }}>
            <span style={{ ...LBL, color:'rgba(255,255,255,0.7)', fontSize:'0.6rem' }}>{d}</span>
            <span style={{ color: LORG, fontSize:'0.5rem' }}>•</span>
          </div>
        ))}
      </div>
      <div style={{
        marginTop:'auto', paddingTop:'1.5rem',
        borderTop:'1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ ...LBL, color:'rgba(255,255,255,0.35)', fontSize:'0.55rem', marginBottom:'0.75rem' }}>БАЗА МАТЕРІАЛІВ</div>
        <p style={{ ...LBL, color:'rgba(255,255,255,0.55)', fontSize:'0.6rem', lineHeight:'1.4rem' }}>
          Реальні накази ДонНТУ · Архів МОН України · Хронологія CEDOS · Матеріали ОБСЄ
        </p>
      </div>
    </div>
  </div>
);

/* ── Column headers ────────────────────────────────────────────── */
const TableHead = () => (
  <div style={{
    display:'grid',
    gridTemplateColumns:'5.5rem 1fr 12rem 6rem 5rem 9rem 5.5rem',
    alignItems:'center',
    padding:'0.75rem 1.5rem',
    gap:'1rem',
    borderBottom: LBR,
    background:'rgba(0,0,0,0.02)',
  }}>
    {['КОД','ЛАБОРАТОРІЯ','ДИСЦИПЛІНА','РІВЕНЬ','ЧАС','СТАТУС',''].map((h, i) => (
      <span key={i} style={{ ...LBL, color:'rgba(0,0,0,0.3)', fontSize:'0.5rem' }}>{h}</span>
    ))}
  </div>
);

/* ── Main page ─────────────────────────────────────────────────── */
const LabsPage = ({ onNavigate }) => {
  const [expanded, setExpanded] = React.useState(null);
  const flagship = LABS.find(l => l.s === 'flagship');
  const rows = LABS.filter(l => l.s !== 'flagship');

  const toggle = id => setExpanded(prev => prev === id ? null : id);

  return (
    <div style={{ background: LCREAM, minHeight:'100vh' }}>

      {/* ── Hero ── */}
      <div style={{
        display:'grid', gridTemplateColumns:'2fr 1fr',
        borderBottom: LBR,
        minHeight: 320,
      }}>
        {/* Title tile */}
        <div style={{
          padding: LPAD,
          paddingTop:'4rem',
          background: LWHITE,
          borderRight: LBR,
          display:'flex', flexDirection:'column', gap:'1.25rem',
        }}>
          <div style={{ ...LBL, color:'rgba(0,0,0,0.35)', fontSize:'0.55rem' }}>05 · ЛАБОРАТОРІЇ · ЦИФРОВІ СИМУЛЯЦІЇ</div>
          <h1 style={{ ...LH, fontSize:'2.5rem', lineHeight:'3rem', color:LDARK, margin:0 }}>
            Віртуальні<br/><em style={{ fontStyle:'italic', color:LBLUE }}>лабораторії</em>
          </h1>
          <p style={{ ...LB2, color:'rgba(0,0,0,0.6)', maxWidth:'42ch', margin:0 }}>
            Десять інтерактивних модулів прив'язаних до реальної історії ДонНТУ — від шахти Засядька до рішень ректора 2022 року.
          </p>
        </div>

        {/* Stats grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', background: LDARK }}>
          {[
            { v:'10', l:'Лабораторій' },
            { v:'9', l:'Дисциплін' },
            { v:'5', l:'Рівнів складності' },
            { v:'100+', l:'Років історії' },
          ].map((s, i) => (
            <div key={i} style={{
              padding:'2rem 1.5rem',
              borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              display:'flex', flexDirection:'column', justifyContent:'flex-end', gap:8,
            }}>
              <div style={{ fontFamily:'var(--display)', fontSize:'2.5rem', fontWeight:400, lineHeight:1, color: i===0 ? LORG : i===3 ? LTEAL : LWHITE }}>
                {s.v}
              </div>
              <div style={{ ...LBL, color:'rgba(255,255,255,0.4)', fontSize:'0.55rem' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Table ── */}
      <div style={{ background: LWHITE, borderBottom: LBR }}>
        <TableHead />
        {rows.map(lab => (
          <LabRow
            key={lab.id}
            lab={lab}
            open={expanded === lab.id}
            onToggle={() => toggle(lab.id)}
          />
        ))}
      </div>

      {/* ── Flagship ── */}
      {flagship && (
        <div>
          <div style={{
            padding:'1.25rem 1.5rem',
            background: LCREAM,
            borderBottom: LBR,
            display:'flex', alignItems:'center', gap:'1rem',
          }}>
            <span style={{ ...LBL, color:'rgba(0,0,0,0.35)', fontSize:'0.55rem', whiteSpace:'nowrap' }}>
              ФЛАГМАНСЬКА ЛАБОРАТОРІЯ
            </span>
            <div style={{ flex:1, height:1, background:'rgba(0,0,0,0.08)' }} />
            <Badge s="flagship" label="ФЛАГМАН" />
          </div>
          <FlagshipBlock lab={flagship} onNavigate={onNavigate} />
        </div>
      )}

    </div>
  );
};

/* ── Building page (unchanged) ─────────────────────────────────── */
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
