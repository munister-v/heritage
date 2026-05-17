/* HomePage — editorial heritage landing */

const HERO_IMG = 'https://images.unsplash.com/photo-1568667256549-094345857637?w=2400&q=80';

const HOME_SECTIONS = [
  { id: 'gallery',  eyebrow: '01 · Архів',         title: 'Архів фотографій',   desc: 'Понад 4 800 знімків — кампус, аудиторії, студенти, документи.', img: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=900&q=80' },
  { id: 'campus3d', eyebrow: '02 · 3D-реконструкція', title: '3D Кампус',       desc: 'Інтерактивна модель головного корпусу на вул. Артема, 58.', img: 'https://images.unsplash.com/photo-1545972154-9bb223aac798?w=900&q=80' },
  { id: 'archive',  eyebrow: '03 · Наука',         title: 'Науковий архів',     desc: '312 наукових праць — гірництво, металургія, енергетика.', img: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=80' },
  { id: 'voices',   eyebrow: '04 · Свідчення',     title: 'Усна історія',       desc: '89 годин записів — викладачі, випускники, працівники.', img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&q=80' },
  { id: 'timeline', eyebrow: '05 · Хронологія',    title: '105 років історії',  desc: 'Від практичного інституту 1921 року до цифрового кампусу.', img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=900&q=80' },
  { id: 'certify',  eyebrow: '06 · Сертифікація',  title: 'Центр сертифікації', desc: 'Пройти модуль, отримати сертифікат із персональним посиланням.', img: 'https://images.unsplash.com/photo-1486520299386-6d106b22014b?w=900&q=80' },
];

const STATS = [
  { num: '4 832', lbl: 'фотографій в архіві' },
  { num: '312',   lbl: 'наукових праць' },
  { num: '89',    lbl: 'годин усної історії' },
  { num: '105',   lbl: 'років історії' },
];

const FEATURED = [
  { img: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80', title: 'Головний корпус, 1958',           eyebrow: 'Архітектура' },
  { img: 'https://images.unsplash.com/photo-1517160770490-b0eb52a90947?w=900&q=80',  title: 'Південне крило, 1970-ті',          eyebrow: 'Кампус' },
  { img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=900&q=80',  title: 'Велика лекційна аудиторія А-1',    eyebrow: 'Інтер’єр' },
];

const HomePage = ({ onNavigate }) => {
  const nav = onNavigate || (() => {});
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{backgroundImage: `url(${HERO_IMG})`}} />
        <div className="hero-overlay" />
        <div className="hero-inner container">
          <div className="hero-eyebrow">Donetsk National Technical University · Archive</div>
          <h1 className="hero-title">Цифрова <em>Спадщина</em></h1>
          <p className="hero-sub">
            Донецький національний технічний університет · Кампус, що існує цифрово.
            Архів, реконструкція, свідчення та сертифікація — на одній платформі.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary btn-lg" onClick={() => nav('gallery')}>Відкрити архів</button>
            <button className="btn btn-lg" onClick={() => nav('campus3d')}>3D-кампус →</button>
          </div>
        </div>
      </section>

      {/* SECTION CARDS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Шість колекцій,<br/>одна пам'ять.</h2>
            <p className="body-lg">
              Проєкт об'єднує матеріальну та нематеріальну спадщину університету —
              від креслень корпусів до голосів тих, хто там навчався.
            </p>
          </div>
          <div className="section-cards">
            {HOME_SECTIONS.map(s => (
              <button key={s.id} className="sc" onClick={() => nav(s.id)}>
                <div className="sc-img" style={{backgroundImage: `url(${s.img})`}} />
                <div className="sc-body">
                  <div className="sc-eyebrow">{s.eyebrow}</div>
                  <div className="sc-title">{s.title}</div>
                  <div className="sc-desc">{s.desc}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="container">
        <div className="stats-row">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item">
              <div className="stat-num">{s.num}</div>
              <div className="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Обране з архіву</h2>
            <p className="body-lg">Три знімки з тисяч — кожен зі своєю історією.</p>
          </div>
          <div className="featured-grid">
            {FEATURED.map((f, i) => (
              <div key={i} className="featured-item" style={{backgroundImage: `url(${f.img})`}} onClick={() => nav('gallery')}>
                <div className="featured-cap">
                  <div className="eyebrow">{f.eyebrow}</div>
                  <div className="featured-cap-title">{f.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG INTRO */}
      <section className="section" style={{paddingTop: 0}}>
        <div className="container-narrow">
          <div className="intro-block">
            Донецький національний технічний університет — один з найстаріших технічних університетів України,
            заснований <em>1921 року</em> як гірничий практичний інститут.
          </div>
          <div className="intro-block" style={{color: 'var(--text-2)', fontSize: '1.125rem', fontFamily: 'var(--sans)'}}>
            У 2014 році, у зв'язку з війною, університет змушений був покинути головний корпус
            на вул. Артема, 58 у Донецьку. У 2022 році — пройти через друге переміщення.
            Цифрова Спадщина — це спроба зберегти те, що неможливо перенести: атмосферу аудиторій,
            обриси будівель, голоси людей, наукову школу.
          </div>
          <div className="intro-block" style={{color: 'var(--text-2)', fontSize: '1.125rem', fontFamily: 'var(--sans)'}}>
            Платформа працює як архів, музей і освітнє середовище одночасно. Ви можете переглядати
            фотоматеріали, обійти головний корпус у 3D, прочитати наукові праці випускників,
            почути спогади викладачів та пройти сертифікаційні модулі.
          </div>
        </div>
      </section>
    </>
  );
};

Object.assign(window, { HomePage });
