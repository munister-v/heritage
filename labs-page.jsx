/* Labs + Building Pages v3 — Ukrainian, responsive */
const LABS = [
  { id:'LAB-M01', ua:'Симулятор гірничої безпеки', sub:'Корпус B-01 · Гірнича інженерія', disc:'Гірнича інженерія', d:5, t:'90 хв', s:'completed', sLbl:'ЗАВЕРШЕНО' },
  { id:'LAB-E01', ua:'Лабораторія енергосистем',   sub:'Корпус B-03 · Енергетика',       disc:'Енергетика',        d:4, t:'50 хв', s:'completed', sLbl:'ЗАВЕРШЕНО' },
  { id:'LAB-A01', ua:'Автоматизація та робототехніка', sub:'Корпус B-02 · Системи керування', disc:'Керування',     d:4, t:'55 хв', s:'open',      sLbl:'ВІДКРИТО' },
  { id:'LAB-C01', ua:'Кібербезпека',                sub:'Корпус B-02 · Інформаційна безпека', disc:'Кібербезпека', d:4, t:'60 хв', s:'open',      sLbl:'ВІДКРИТО' },
  { id:'LAB-D01', ua:'Лабораторія цифрової економіки', sub:'Корпус B-02 · Економіка',     disc:'Економіка',         d:2, t:'40 хв', s:'open',      sLbl:'ВІДКРИТО' },
  { id:'LAB-R01', ua:'Лабораторія відновлення Донбасу', sub:'Корпус B-06 · Відбудова',    disc:'Відновлення',       d:5, t:'90 хв', s:'flagship',  sLbl:'ФЛАГМАН' },
];

const PARTNER_DISC = [
  'Гірнича інженерія', 'Екологічна інженерія',
  'Містобудування', 'Кібербезпека',
  'Енергосистеми', 'Цифрове виробництво',
  'Економіка', 'Архітектура',
];

const LabsPage = ({ onNavigate }) => (
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
        <div key={l.id} className="lab-r" onClick={() => onNavigate('simulation')}>
          <span className="lab-id">{l.id}</span>
          <div>
            <span className="lab-ua">{l.ua}</span>
            <div className="lab-sub">{l.sub}</div>
          </div>
          <span className="lab-disc">{l.disc}</span>
          <PDots filled={l.d} />
          <span className="lab-time">{l.t}</span>
          <Badge status={l.s} label={l.sLbl} />
          <span className="lbl lbl-gold" style={{textAlign:'right'}}>→</span>
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
