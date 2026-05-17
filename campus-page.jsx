/* Campus Page v3 — Ukrainian, interactive */
const BLDS = [
  { id:'B-01', ua:'Головний корпус', en:'Main Building', x:35, y:52, depth:'9 поверхів · 38 кімнат', use:'Адмін., великі лекційні' },
  { id:'B-02', ua:'Інженерний корпус', en:'Engineering', x:52, y:42, act:true, depth:'9 поверхів · 24 кімнати', use:'Автоматизація, кіберсистеми' },
  { id:'B-03', ua:'Лабораторний корпус', en:'Laboratory', x:68, y:62, depth:'5 поверхів · 18 лабораторій', use:'Енергосистеми, експерименти' },
  { id:'B-04', ua:'Бібліотека', en:'Library', x:48, y:68, depth:'4 поверхи · 2 чит. зали', use:'Книги, цифрові ресурси' },
  { id:'B-05', ua:'Індустрія 4.0', en:'Industry 4.0', x:72, y:35, depth:'3 поверхи · 12 студій', use:'Цифрова економіка, AI' },
  { id:'B-06', ua:"Архів пам'яті", en:'Memory Archive', x:30, y:78, depth:'2 поверхи · 4 800 одиниць', use:'Документи, плани, свідчення' },
];

const CampusPage = ({ onNavigate }) => {
  const [sel, setSel] = React.useState('B-02');
  const [vm, setVm] = React.useState('ПЛАН');
  const selected = BLDS.find(b => b.id === sel);

  return (
    <div className="page camp">
      <div className="camp-sub">
        <div style={{display:'flex',gap:'1rem',alignItems:'baseline',flexWrap:'wrap'}}>
          <span className="lbl">03 · КАМПУС · ВІРТУАЛЬНЕ ВІКНО</span>
          <span className="caption serif-i">Розподілений кампус — шість обʼємів.</span>
        </div>
        <div style={{display:'flex',gap:'1rem',alignItems:'center'}}>
          {['ПЛАН','АКСОНОМЕТРІЯ','РОЗРІЗ'].map(m => (
            <button key={m} className={`camp-vb ${vm===m?'act':''}`} onClick={() => setVm(m)}>{m}</button>
          ))}
          <span className="lbl lbl-dim">МАСШТАБ · 1:4000</span>
        </div>
      </div>

      <div className="camp-bd">
        <div className="camp-info">
          <div style={{textAlign:'right'}}>
            <span className="lbl">КОМПАС · ПЛАН</span>
            <div className="compass"><span className="c-n">N</span><span className="c-e">E</span><span className="c-s">S</span><span className="c-w">W</span></div>
          </div>
          <div>
            <span className="lbl" style={{display:'block',marginBottom:'0.625rem'}}>ПЕРЕМІЩЕННЯ · ПАМ'ЯТЬ</span>
            <div className="disp-path">
              <span className="disp-i">ДОНЕЦЬК →</span>
              <span className="disp-i" style={{paddingLeft:16}}>ПОКРОВСЬК →</span>
              <span className="disp-i" style={{paddingLeft:32}}>ЛУЦЬК →</span>
              <span className="disp-i tg" style={{paddingLeft:48}}>ДРОГОБИЧ <span style={{fontSize:'0.5rem'}}>●</span></span>
            </div>
            <p className="body" style={{fontSize:'0.75rem',marginTop:'1rem',lineHeight:1.65}}>
              Інституція переміщувалась чотири рази. Кампус — жодного.
            </p>
          </div>
        </div>

        <div className="camp-map">
          <div className="camp-grid"></div>
          {BLDS.map(b => (
            <div key={b.id}
                 className={`camp-mk ${b.act?'':''} ${sel===b.id?'sel':''}`}
                 style={{left:b.x+'%',top:b.y+'%'}}
                 onClick={() => setSel(b.id)}>
              <span className={`mk-d ${b.act?'mk-df':''}`}>◇</span>
              <div className="mk-info">
                <span className="mk-id">{b.id}</span>
                <span className="mk-name">{b.ua}</span>
                <span className="mk-en">{b.en}</span>
              </div>
            </div>
          ))}

          {selected && (
            <div className="camp-detail show">
              <div className="gc gc-static" style={{padding:'1.25rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'0.625rem'}}>
                  <span className="lbl">{selected.id} · ОБРАНО</span>
                  <button className="modal-close" onClick={() => setSel('')} style={{width:24,height:24,fontSize:'0.75rem'}}>✕</button>
                </div>
                <h3 className="h3" style={{fontSize:'1.25rem',fontWeight:500}}>{selected.ua}</h3>
                <p className="caption" style={{marginTop:'0.25rem'}}>{selected.depth}</p>
                <p className="body" style={{fontSize:'0.8125rem',marginTop:'0.75rem',color:'var(--t2)'}}>{selected.use}</p>
                <div style={{display:'flex',gap:'0.5rem',marginTop:'1rem'}}>
                  <button className="btn btn-sm btn-g" onClick={() => onNavigate('building')}>УВІЙТИ →</button>
                  <button className="btn btn-sm" onClick={() => onNavigate('labs')}>ЛАБОРАТОРІЇ</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="camp-bot">
        <span className="lbl lbl-dim">МАСШТАБ 1:4000 · ВУЗОЛ ЛУЦЬК-02</span>
        <div className="camp-acts">
          <button className="btn btn-g" onClick={() => onNavigate('building')}>УВІЙТИ В КОРПУС</button>
          <button className="btn" onClick={() => onNavigate('labs')}>ЛАБОРАТОРІЇ</button>
          <button className="btn" onClick={() => onNavigate('simulation')}>СИМУЛЯЦІЯ</button>
          <button className="btn" onClick={() => onNavigate('archive')}>АРХІВ</button>
        </div>
      </div>

      <Inst />
    </div>
  );
};

window.CampusPage = CampusPage;
