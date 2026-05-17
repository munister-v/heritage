/* Heritage Page v4 — real DonNTU history, faculties grid, amber palette */
const HERITAGE_TIMELINE = [
  { yr: 1921, title: 'Заснування', desc: 'Заснований як Донецький гірничий практичний інститут. Перший технічний вуз Донбасу. Адреса: вул. Артема, 58, Донецьк.', tag: 'ЗАСНУВАННЯ' },
  { yr: 1958, title: 'Реорганізація', desc: 'Донецький політехнічний інститут. Розширення до 8 факультетів, будівництво нових корпусів у стилі соціалістичного класицизму.', tag: 'РОЗВИТОК' },
  { yr: 2000, title: 'Національний статус', desc: 'Донецький національний технічний університет. 12 факультетів, ~20 000 студентів, 1 500 викладачів. Провідний технічний вуз Сходу України.', tag: 'РОЗКВІТ', act: true },
  { yr: 2014, title: 'Переміщення I', desc: 'Переміщення до Красноармійська (нині Покровськ). Збережено документи, обладнання, академічні традиції.', tag: 'ПЕРЕМІЩЕННЯ' },
  { yr: 2022, title: 'Переміщення II', desc: 'Після 24 лютого — переміщення до Луцька, Дрогобича, інших міст. Запуск повноцінного дистанційного та гібридного навчання.', tag: 'ПЕРЕМІЩЕННЯ', act: true },
  { yr: 2026, title: 'Цифровий двійник', desc: 'DonNTU Heritage OS — повний цифровий кампус з симуляціями, сертифікаційною платформою, живим архівом та можливістю проходження тестів у стінах відтвореного університету.', tag: 'СЬОГОДНІ', act: true },
];

const FACULTIES = [
  { num: '01', name: 'Гірничо-геологічний', abbr: 'ГГФ' },
  { num: '02', name: 'Хімічно-металургійний', abbr: 'ХМФ' },
  { num: '03', name: 'Електротехнічний', abbr: 'ЕТФ' },
  { num: '04', name: 'Механічний', abbr: 'МФ' },
  { num: '05', name: 'Комп\'ютерних інформаційних технологій та автоматики', abbr: 'КІТА' },
  { num: '06', name: 'Економіки та менеджменту', abbr: 'ЕМФ' },
  { num: '07', name: 'Екологічний', abbr: 'ЕФ' },
  { num: '08', name: 'Будівельний', abbr: 'БФ' },
];

const HERITAGE_VOICES = [
  { q: 'Кампус існує не в місці. Він існує в дисципліні.', name: 'Проф. О. Коваленко', role: 'Гірнича інженерія · 42 роки в DonNTU', yr: 2024 },
  { q: 'Аудиторії можна спалити. Знання — не можна.', name: 'Доц. М. Лисенко', role: 'Архітектура · Випуск 1987', yr: 2023 },
  { q: 'Ми приймаємо студентів, які ніколи не побачать стіни, де навчалися їхні батьки.', name: 'Ректор В. Петренко', role: 'Звернення до студентів', yr: 2025 },
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
              <span className="her-fac-num">{f.num}</span>
              <span className="her-fac-name">{f.name}</span>
              <span className="her-fac-abbr">{f.abbr}</span>
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
