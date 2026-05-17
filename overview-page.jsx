/* Overview Page v3 — Ukrainian-first */
const SURF_IMG = {
  campus: 'https://images.unsplash.com/photo-1562774053-701939374585?w=700&h=500&fit=crop',
  labs: 'https://images.unsplash.com/photo-1581092160607-ee4c5a98b4ab?w=700&h=500&fit=crop',
  archive: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=700&h=500&fit=crop',
};

const OverviewPage = ({ onNavigate }) => {
  const h = new Date().getHours();
  const gr = h < 12 ? 'Доброго ранку' : h < 18 ? 'Доброго дня' : 'Доброго вечора';

  const schedule = [
    { t:'10:00', n:'Лекція · Гірнича безпека', r:'Зала A' },
    { t:'13:30', n:'Лаб. · Енергосистеми', r:'B-03', now:true },
    { t:'16:00', n:'Оцінювання · Автоматизація', r:'B-02' },
    { t:'18:30', n:'Семінар · Відновлення', r:'B-04' },
  ];

  return (
    <div className="page">
      <span className="lbl">01 · ОГЛЯД</span>

      <div className="ov-head">
        <div>
          <h1 className="ov-greeting">{gr}, <em>Ірино.</em></h1>
          <p className="body" style={{marginTop:'0.5rem'}}>Чотирнадцятий тиждень семестру.</p>
        </div>
        <div className="ov-date">
          <span className="lbl">ВЕСНЯНИЙ СЕМЕСТР 2026 · ТИЖ. 14</span>
          <div className="serif" style={{fontSize:'1.5rem',fontWeight:400,marginTop:'0.5rem'}}>Четвер · 24 квітня</div>
        </div>
      </div>

      <div className="ov-cards">
        {/* Continue */}
        <div className="gc">
          <span className="lbl">ПРОДОВЖИТИ</span>
          <h3 className="h3" style={{marginTop:'0.875rem',fontWeight:500}}>Симулятор гірничої безпеки</h3>
          <p className="caption" style={{marginTop:'0.25rem'}}>Сесія 06 · LAB-M01</p>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:'1rem',alignItems:'baseline'}}>
            <span className="lbl">ПРОГРЕС</span>
            <span className="serif tg" style={{fontSize:'1.125rem',fontWeight:500}}>62%</span>
          </div>
          <Bar value={62} />
          <button className="btn btn-g btn-full" onClick={() => onNavigate('simulation')} style={{marginTop:'1.25rem'}}>
            ВІДНОВИТИ СЕСІЮ <span>→</span>
          </button>
        </div>

        {/* Today */}
        <div className="gc">
          <span className="lbl">СЬОГОДНІ</span>
          <div className="ov-sched">
            {schedule.map((s,i) => (
              <div key={i} className={`ov-si ${s.now?'ov-now':''}`}>
                <span className="ov-time">{s.t}</span>
                <div className="ov-name">
                  <div>{s.n}</div>
                  <span className="caption">{s.r}</span>
                </div>
                {s.now && <Badge status="now" label="ЗАРАЗ" />}
              </div>
            ))}
          </div>
        </div>

        {/* Quiet note */}
        <div className="gc gc-gold">
          <span className="lbl lbl-gold">ТИХА НОТАТКА</span>
          <blockquote className="ov-qn">
            «Кампус існує не в місці. Він існує в дисципліні.»
          </blockquote>
          <div style={{marginTop:'auto',paddingTop:'1.25rem'}}>
            <span className="lbl lbl-dim">З УСНОЇ ІСТОРІЇ · 2024 · КИЇВ</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="ov-stats">
        <Stat v="6" label="Корпусів" />
        <Stat v="22" label="Лабораторій" />
        <Stat v="4.8K" label="Архів" />
        <Stat v="1 247" label="Студентів" />
        <Stat v="18" label="Дисциплін" />
        <Stat v="105" label="Років" />
      </div>

      {/* Surfaces */}
      <div className="div-row">
        <span className="lbl">ПОВЕРХНІ СИСТЕМИ · ШВИДКИЙ ВХІД</span>
        <div className="div-line"></div>
      </div>
      <div className="ov-surf">
        {[
          {id:'heritage',n:'02',ua:'Спадщина',d:'Осердя системи. Хроніка інституції.',img:SURF_IMG.archive,core:true},
          {id:'labs',n:'05',ua:'Лабораторії',d:'22 інженерні модулі по 6 корпусах.',img:SURF_IMG.labs},
          {id:'achievements',n:'07',ua:'Досягнення',d:'24 відзнаки, 4 категорії, 4 рівні.',img:SURF_IMG.archive,core:true},
        ].map(s => (
          <div key={s.id} className="gc surf" onClick={() => onNavigate(s.id)}>
            <div className="surf-img" style={{backgroundImage:`url(${s.img})`}}></div>
            <div className="surf-body">
              <span className="lbl">{s.n} · {s.ua.toUpperCase()}{s.core?' ⟡':''}</span>
              <h3 className="h3" style={{marginTop:'0.5rem'}}>{s.ua}</h3>
              <p className="body" style={{fontSize:'0.875rem'}}>{s.d}</p>
              <span className="surf-arr lbl lbl-gold">ВІДКРИТИ →</span>
            </div>
          </div>
        ))}
      </div>

      <Inst />
    </div>
  );
};

window.OverviewPage = OverviewPage;
