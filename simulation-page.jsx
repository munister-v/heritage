/* Simulation Page v4 — deepened: real incidents, additional simulators, scenario selection */
const REAL_INCIDENTS = [
  { id: 'INC-01', name: 'Вибух на шахті ім. Засядька', year: 2007, casualties: 101, desc: 'Вибух метану на глибині 1 070 м. Найбільша шахтна катастрофа в Україні XXI століття. Причина: накопичення CH₄ у тупиковій виробці.', lesson: 'Критична важливість безперервного моніторингу метану та дегазації.' },
  { id: 'INC-02', name: 'Аварія на шахті Суходільська-Східна', year: 2011, casualties: 2, desc: 'Раптове обвалення покрівлі в лаві. Порушення паспорта кріплення через зміну гірничо-геологічних умов.', lesson: 'Необхідність адаптивного кріплення та геомеханічного моніторингу.' },
  { id: 'INC-03', name: 'Затоплення шахти Степова', year: 2017, casualties: 8, desc: 'Прорив води з виробленого простору. Швидке затоплення нижніх горизонтів. Евакуація ускладнена через пошкоджені комунікації.', lesson: 'Гідрогеологічний моніторинг та резервні шляхи евакуації.' },
  { id: 'INC-04', name: 'Блекаут Донецької енергосистеми', year: 2014, casualties: 0, desc: 'Каскадне відключення через пошкодження ЛЕП. Шахти без електропостачання — загроза затоплення та загазування.', lesson: 'Автономне енергозабезпечення шахт та АВР (автоматичне введення резерву).' },
];

const ADDITIONAL_SIMULATORS = [
  { id: 'SIM-E01', name: 'Симулятор енергосистеми', icon: '⚡', desc: 'Моделювання електричної мережі 110/35/6 кВ. Аварійні сценарії: короткі замикання, перевантаження, каскадні відключення. Інтеграція відновлювальних джерел.', difficulty: 4, time: '60 хв', status: 'open' },
  { id: 'SIM-C01', name: 'Кіберполігон АСУ ТП', icon: '🛡', desc: 'Захист промислових систем від кібератак. Сценарії: атака на SCADA шахти, перехоплення телеметрії, ransomware на диспетчерській. Реагування в реальному часі.', difficulty: 5, time: '75 хв', status: 'open' },
  { id: 'SIM-R01', name: 'Симулятор відновлення міста', icon: '🏗', desc: 'Планування відбудови зруйнованої інфраструктури. Тріаж будівель, розмінування, екологічна оцінка, пріоритезація ресурсів. На основі даних Маріуполя.', difficulty: 5, time: '90 хв', status: 'flagship' },
  { id: 'SIM-G01', name: 'Геомеханічний симулятор', icon: '⛏', desc: 'Моделювання стійкості гірничих виробок. Вибір кріплення, аналіз гірського тиску, прогноз деформацій. Реальні геологічні розрізи Донбасу.', difficulty: 4, time: '55 хв', status: 'open' },
];

const SimulationPage = ({ onNavigate }) => {
  const [af, setAf] = React.useState(62);
  const [fans, setFans] = React.useState(2);
  const [seal, setSeal] = React.useState(false);
  const [alarm, setAlarm] = React.useState(false);
  const [meth, setMeth] = React.useState(4.17);
  const [el, setEl] = React.useState(10);

  React.useEffect(() => {
    const iv = setInterval(() => {
      setEl(e => e + 1);
      setMeth(m => Math.max(0, Math.min(5, m + (Math.random() - 0.52) * 0.15)));
    }, 1000);
    return () => clearInterval(iv);
  }, []);

  const mc = meth > 4 ? 'var(--rust)' : meth > 3 ? 'var(--amber)' : 'var(--sage)';
  const mLbl = meth > 4 ? 'НЕБЕЗПЕЧНО' : meth > 3 ? 'ПІДВИЩЕНО' : 'НОРМА';

  return (
    <div className="page">
      <div className="sim-hdr">
        <div style={{display:'flex',gap:'0.75rem',alignItems:'center',flexWrap:'wrap'}}>
          <Badge status="flagship" label="LIVE · LAB-M01" />
          <span className="serif" style={{fontSize:'1.125rem'}}>Симулятор гірничої безпеки</span>
        </div>
        <div className="lbl lbl-dim">
          ШАХТА · DN-12 &nbsp; ГЛИБИНА · -742 М &nbsp; СЕСІЯ · 06 &nbsp;
          <span style={{color:mc}}>● {mLbl}</span>
        </div>
      </div>

      <div className="sim-bd">
        {/* Controls */}
        <div className="sim-ctrl">
          <span className="lbl">КЕРУВАННЯ</span>

          <div className="sim-cg">
            <div className="sim-cg-row"><span className="lbl">ПОВІТРОПОТІК · Л/С</span><span className="lbl">{af}</span></div>
            <input type="range" min="20" max="100" value={af} onChange={e => setAf(+e.target.value)} className="sim-sl" />
            <div className="sim-cg-row" style={{fontFamily:'var(--mono)',fontSize:'0.625rem',color:'var(--t3)'}}>
              <span>МІН 20</span><span>ЦІЛЬ 60</span><span>МАКС 100</span>
            </div>
          </div>

          <div className="sim-cg">
            <span className="lbl">ДОПОМ. ВЕНТИЛЯТОРИ</span>
            <div className="fan-btns">{[0,1,2,3].map(n =>
              <button key={n} className={`fan-b ${fans===n?'fan-a':''}`} onClick={() => setFans(n)}>{n}</button>
            )}</div>
          </div>

          <div className="sim-cg">
            <div className="sim-cg-row">
              <span className="lbl">ЗАКРИТИ ВТОРИННУ ШАХТУ</span>
              <button className={`sim-tog ${seal?'tog-on':''}`} onClick={() => setSeal(!seal)}><span className="tog-th"></span></button>
            </div>
            <span className="caption">Ізолює газову кишеню</span>
          </div>

          <div className="sim-cg">
            <div className="sim-cg-row">
              <span className="lbl">СИГНАЛ ТРИВОГИ</span>
              <button className={`sim-tog ${alarm?'tog-on':''}`} onClick={() => setAlarm(!alarm)}><span className="tog-th"></span></button>
            </div>
            <span className="caption">Сповіщає персонал</span>
          </div>

          <div className="sim-cg" style={{marginTop:'1rem'}}>
            <span className="lbl">ПРИЙНЯТТЯ РІШЕНЬ</span>
            <button className="btn btn-g btn-full" style={{marginTop:'0.5rem'}}>ЕВАКУАЦІЯ СЕКТОРА</button>
            <button className="btn btn-full" style={{marginTop:'0.5rem'}}>ВІДРЯДИТИ ІНСПЕКТОРА</button>
            <button className="btn btn-full" style={{marginTop:'0.5rem'}}>ЗАПИС РІШЕННЯ</button>
          </div>
        </div>

        {/* Shaft */}
        <div className="sim-shaft">
          <div style={{display:'flex',justifyContent:'space-between',marginBottom:'0.5rem'}}>
            <span className="lbl">ШАХТА DN-12 · ОСЬОВИЙ РОЗРІЗ</span>
            <span className="lbl lbl-dim">T+{String(el).padStart(4,'0')}с</span>
          </div>
          <div className="shaft-viz">
            <div className="shaft-gnd"><span className="lbl lbl-dim">ҐРУНТ · ▽ 0,00 м</span></div>
            <div className="shaft-col">
              <div className="shaft-lbl">ОСНОВНА ШАХТА</div>
              <div className="shaft-pipe"></div>
              <div className="shaft-sec lbl">·SEC</div>
            </div>
            <div className="shaft-gal">
              <div className="gal-nodes">{['F1','F2','F3','F4'].map((f,i) =>
                <div key={f} className="gal-node">
                  <span>{f}</span>
                  <div className={`nd ${i===0?'nd-cy':i===1?'nd-bl':''}`}></div>
                </div>
              )}</div>
              <div className="gal-line"></div>
              <div className="lbl lbl-dim" style={{marginTop:'0.25rem'}}>
                ШТРЕК <span style={{color:'var(--slate)'}}>●</span> ▽ -742 м
              </div>
            </div>
            <div className="shaft-face lbl lbl-dim">ВИБІЙ · CH₄</div>
            <div className="af-arr">{Array.from({length:6},(_,i) => <span key={i}>→</span>)}</div>
          </div>
          <div className="shaft-leg">
            <span className="leg-i"><span className="leg-l leg-cy"></span> ПОВІТРОПОТІК</span>
            <span className="leg-i"><span className="leg-c"></span> ЗОНА РИЗИКУ</span>
            <span className="leg-i">⌇ ҐРУНТ</span>
          </div>
        </div>

        {/* Feedback */}
        <div className="sim-fb">
          <span className="lbl">ВІДГУК</span>
          <div className="gc meth-card" style={{marginTop:'0.75rem'}}>
            <span className="lbl">МЕТАН · CH₄</span>
            <div className="meth-v" style={{color:mc}}>{meth.toFixed(2)}<span className="meth-pct">%</span></div>
            <div className="lbl" style={{color:mc}}>{mLbl}</div>
            <div className="meth-bw">
              <div className="meth-b" style={{width:(meth/5*100)+'%',background:mc}}></div>
              <div className="meth-lim" style={{left:'80%'}}></div>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'0.25rem'}}>
              <span className="caption">0%</span>
              <span className="caption">МЕЖА · 4%</span>
              <span className="caption">5%</span>
            </div>
          </div>

          <div style={{marginTop:'1rem'}}>
            <span className="lbl">ЖУРНАЛ СЕНСОРІВ</span>
            <div className="sens">
              <div>T+8 · CH₄ · {meth.toFixed(2)}% · ВИБІЙ</div>
              <div>T+6 · O₂ · 20,8% · ШТРЕК</div>
              <div>T+3 · ТЕМП · 31,4°C · СТАБ.</div>
              <div>T+1 · ВЕНТ. F1 · УВІМК.</div>
              <div>T-2 · ВОЛОГ. · 88% · ВИСОКА</div>
            </div>
          </div>

          <div style={{marginTop:'1rem'}}>
            <span className="lbl">СЕСІЯ</span>
            <div className="sess-st">
              <div style={{display:'flex',justifyContent:'space-between'}}><span>Рішень записано</span><span className="tg">14</span></div>
              <div style={{display:'flex',justifyContent:'space-between'}}><span>Загроз уникнуто</span><span className="tg">3</span></div>
              <div style={{display:'flex',justifyContent:'space-between'}}><span>Прогрес</span><span className="tg">62%</span></div>
            </div>
          </div>

          <button className="btn btn-g btn-full" onClick={() => onNavigate('assessment')} style={{marginTop:'1.25rem'}}>
            ЗАВЕРШИТИ ТА ОЦІНИТИ <span>→</span>
          </button>
        </div>
      </div>

      {/* Real Incidents */}
      <div className="div-row" style={{marginTop:'2.5rem'}}>
        <span className="lbl">РЕАЛЬНІ АВАРІЇ · НАВЧАННЯ НА ПОМИЛКАХ</span>
        <div className="div-line"></div>
      </div>
      <p className="body" style={{marginTop:'0.75rem',marginBottom:'1.25rem',maxWidth:'64ch',lineHeight:1.7}}>
        Сценарії симулятора базуються на реальних інцидентах шахтної промисловості Донбасу.
        Кожна аварія — урок, який врятує життя в майбутньому.
      </p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1rem'}}>
        {REAL_INCIDENTS.map(inc => (
          <div key={inc.id} className="gc" style={{padding:'1.25rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.75rem'}}>
              <span className="lbl" style={{color:'var(--rust)'}}>{inc.id}</span>
              <span className="mono" style={{fontSize:'0.75rem',color:'var(--t3)'}}>{inc.year}</span>
            </div>
            <h3 className="serif" style={{fontSize:'1rem',marginBottom:'0.5rem'}}>{inc.name}</h3>
            {inc.casualties > 0 && (
              <div style={{display:'inline-block',padding:'0.125rem 0.5rem',background:'rgba(180,60,40,.15)',borderRadius:'var(--r-sm)',marginBottom:'0.5rem'}}>
                <span className="mono" style={{fontSize:'0.6875rem',color:'var(--rust)'}}>{inc.casualties} загиблих</span>
              </div>
            )}
            <p className="caption" style={{lineHeight:1.6,marginBottom:'0.75rem'}}>{inc.desc}</p>
            <div style={{paddingTop:'0.625rem',borderTop:'1px solid var(--border)'}}>
              <span className="lbl lbl-dim" style={{fontSize:'0.5625rem'}}>УРОК</span>
              <p className="caption" style={{lineHeight:1.5,marginTop:'0.25rem',color:'var(--amber)'}}>{inc.lesson}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Simulators */}
      <div className="div-row" style={{marginTop:'2.5rem'}}>
        <span className="lbl">ДОДАТКОВІ СИМУЛЯТОРИ</span>
        <div className="div-line"></div>
      </div>
      <p className="body" style={{marginTop:'0.75rem',marginBottom:'1.25rem',maxWidth:'64ch',lineHeight:1.7}}>
        Окрім гірничої безпеки, DonNTU розробляє симулятори для суміжних інженерних дисциплін —
        від енергосистем до кібербезпеки та відбудови міст.
      </p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'1rem'}}>
        {ADDITIONAL_SIMULATORS.map(sim => (
          <div key={sim.id} className="gc" style={{padding:'1.25rem'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'0.75rem'}}>
              <span style={{fontSize:'1.5rem'}}>{sim.icon}</span>
              <Badge status={sim.status} label={sim.status === 'flagship' ? 'ФЛАГМАН' : 'ВІДКРИТО'} />
            </div>
            <span className="lbl" style={{color:'var(--t3)',marginBottom:'0.25rem',display:'block'}}>{sim.id}</span>
            <h3 className="serif" style={{fontSize:'1rem',marginBottom:'0.5rem'}}>{sim.name}</h3>
            <p className="caption" style={{lineHeight:1.6,marginBottom:'0.75rem'}}>{sim.desc}</p>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'0.625rem',borderTop:'1px solid var(--border)'}}>
              <div style={{display:'flex',alignItems:'center',gap:'0.5rem'}}>
                <PDots filled={sim.difficulty} />
                <span className="caption">{sim.time}</span>
              </div>
              <span className="lbl lbl-gold" style={{cursor:'pointer'}}>ЗАПУСТИТИ →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

window.SimulationPage = SimulationPage;
