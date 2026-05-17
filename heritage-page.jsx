/* Heritage CORE Page — the soul of the system */
const HERITAGE_TIMELINE = [
  { yr: 1921, title: 'Заснування', desc: 'Заснований як Донецький гірничий технікум для підготовки інженерів вугільної промисловості Донбасу.', tag: 'ЗАСНУВАННЯ' },
  { yr: 1935, title: 'Перетворення на інститут', desc: 'Реорганізовано в Донецький індустріальний інститут. Розширення на металургію, машинобудування, енергетику.' },
  { yr: 1960, title: 'Розквіт', desc: 'Один з найбільших технічних університетів СРСР. 22 факультети, понад 20 000 студентів.', tag: 'РОЗКВІТ' },
  { yr: 1993, title: 'Національний статус', desc: 'Отримано статус Донецького національного технічного університету. 12 наукових шкіл міжнародного рівня.' },
  { yr: 2014, title: 'Перше переміщення', desc: 'Внаслідок збройної агресії університет переміщено до Красноармійська (нині Покровськ). Колектив зберіг наукову та академічну спадщину.', tag: 'ПЕРЕМІЩЕННЯ', act: true },
  { yr: 2022, title: 'Друге переміщення', desc: 'Повномасштабне вторгнення. Університет переміщено до Луцька. Започатковано віртуальний кампус як форму існування.', tag: 'ПЕРЕМІЩЕННЯ' },
  { yr: 2026, title: 'Цифровий двійник', desc: 'Запуск DonNTU OS — повноцінного віртуального кампусу з симуляціями, архівом, лабораторіями. Інституція існує всюди й одночасно.', tag: 'СЬОГОДНІ', act: true },
];

const HERITAGE_VOICES = [
  { q: 'Кампус існує не в місці. Він існує в дисципліні.', name: 'Проф. О. Коваленко', role: 'Гірнича інженерія · 42 роки в DonNTU', yr: 2024 },
  { q: 'Аудиторії можна спалити. Знання — не можна.', name: 'Доц. М. Лисенко', role: 'Архітектура · Випуск 1987', yr: 2023 },
  { q: 'Ми приймаємо студентів, які ніколи не побачать стіни, де навчалися їхні батьки.', name: 'Ректор В. Петренко', role: 'Звернення до студентів', yr: 2025 },
];

const HeritagePage = ({ onNavigate }) => {
  const [active, setActive] = React.useState(4);

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
            DonNTU існує понад сто років. За цей час інституція пережила
            переміщення, відновлення, переоснащення. Заклад — це не будівля,
            а спільнота, дисципліна, метод.
          </p>
          <p className="body" style={{maxWidth:'46ch',marginTop:'1rem',fontSize:'1rem',lineHeight:1.7}}>
            DonNTU OS — це форма існування цифрової спадщини: симульований кампус,
            активний архів, жива інженерна школа.
          </p>
          <div style={{display:'flex',gap:'0.625rem',marginTop:'2rem'}}>
            <button className="btn btn-g" onClick={() => onNavigate('archive')}>УВІЙТИ В АРХІВ →</button>
            <button className="btn" onClick={() => onNavigate('campus')}>ОГЛЯНУТИ КАМПУС</button>
          </div>
        </div>
        <div className="her-emblem">
          <div className="her-emblem-meta">
            <span className="lbl lbl-gold">ЗАСНОВАНО</span>
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
            <span className="her-pill-l serif">Архітектура</span>
            <span className="caption">Простір як знання. Кампус — носій культурного коду.</span>
          </div>
          <div className="her-pill">
            <span className="her-pill-n">II</span>
            <span className="her-pill-l serif">Інженерія</span>
            <span className="caption">Метод, дисципліна, наукова школа. Те, що не переміщується.</span>
          </div>
          <div className="her-pill">
            <span className="her-pill-n">III</span>
            <span className="her-pill-l serif">Пам'ять</span>
            <span className="caption">Активний архів. Свідчення, документи, плани, голоси.</span>
          </div>
          <div className="her-pill">
            <span className="her-pill-n">IV</span>
            <span className="her-pill-l serif">Відновлення</span>
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
                  <div style={{display:'flex',gap:'0.75rem',alignItems:'center',marginBottom:'0.375rem'}}>
                    <h4>{t.title}</h4>
                    {t.tag && <span className="lbl" style={{color: t.act ? 'var(--gold)' : 'var(--t3)'}}>{t.tag}</span>}
                  </div>
                  <p>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
                <span className="voice-name serif">{v.name}</span>
                <span className="voice-role">{v.role} · {v.yr}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="gc gc-gold" style={{padding:'2.5rem',textAlign:'center',marginTop:'1rem'}}>
        <span className="lbl lbl-gold">МАНІФЕСТ</span>
        <h2 className="h2" style={{marginTop:'0.75rem',marginBottom:'1.25rem',fontSize:'clamp(1.5rem,3vw,2.25rem)'}}>
          Пам'ять <em>активується</em>, а не зберігається.
        </h2>
        <p className="body" style={{maxWidth:'52ch',margin:'0 auto',fontSize:'0.9375rem'}}>
          Кожна лабораторія, кожна сесія симуляції, кожен документ архіву —
          це акт активації. Ви не вивчаєте університет. Ви <em>є</em> університетом.
        </p>
      </div>

      <Inst />
    </div>
  );
};

window.HeritagePage = HeritagePage;
