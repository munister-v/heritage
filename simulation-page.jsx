/* Simulation Page v3 — Ukrainian */
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

  const mc = meth > 4 ? 'var(--red)' : meth > 3 ? 'var(--gold)' : 'var(--green)';
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
                ШТРЕК <span style={{color:'var(--cyan)'}}>●</span> ▽ -742 м
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
    </div>
  );
};

window.SimulationPage = SimulationPage;
