/* Assessment + Archive Pages v3 — Ukrainian */
const AssessmentPage = ({ onNavigate }) => {
  const sc = [
    { l:'РЕАКЦІЯ НА СЦЕНАРІЙ', v:91 },
    { l:'ДОТРИМАННЯ ПРОТОКОЛУ', v:86 },
    { l:'ШВИДКІСТЬ РІШЕНЬ', v:78 },
    { l:'КОМУНІКАЦІЯ РИЗИКУ', v:94 },
  ];
  const ov = Math.round(sc.reduce((s,c) => s+c.v, 0) / sc.length);

  return (
    <div className="page">
      <div className="as-hdr">
        <div>
          <span className="lbl">06 · РЕЗУЛЬТАТ ОЦІНЮВАННЯ</span>
          <h1 className="h1" style={{marginTop:'0.75rem'}}>Гірнича безпека.</h1>
          <p className="body" style={{marginTop:'0.5rem'}}>Сесія 06 · завершено 24 квітня 2026</p>
        </div>
        <div className="as-ov">
          <span className="lbl lbl-gold">ЗАГАЛЬНИЙ БАЛ</span>
          <div className="as-score">{ov}</div>
          <Badge status="featured" label="ВІДМІННО" />
        </div>
      </div>

      <div className="sc-cards">
        {sc.map(s => (
          <div key={s.l} className="gc">
            <span className="lbl">{s.l}</span>
            <div className="sc-v serif">{s.v}</div>
            <Bar value={s.v} />
          </div>
        ))}
      </div>

      <div className="as-bot">
        <div className="gc cert">
          <div className="cert-in">
            <span className="lbl">СЕРТИФІКАТ ЗАВЕРШЕННЯ</span>
            <div className="cert-nm">Ірина Гринько</div>
            <div className="serif-i" style={{color:'var(--t3)',fontSize:'0.875rem'}}>підтверджує засвоєння модуля</div>
            <div className="cert-co">Гірнича безпека · <em>рівень II</em></div>
            <div className="caption">DonNTU OS · Ректорат · 24.04.2026</div>
          </div>
        </div>

        <div style={{display:'flex',flexDirection:'column'}}>
          <span className="lbl">ЗДОБУТО</span>
          <div className="gc gc-static" style={{marginTop:'0.75rem'}}>
            <div className="bdg-row">
              <div className="bdg-ic"><span className="bdg-rm">II</span></div>
              <div>
                <div className="serif" style={{fontSize:'1.0625rem',fontWeight:500}}>Інженер з безпеки II</div>
                <span className="caption">SAFETY ENGINEER II</span>
                <div className="lbl lbl-gold" style={{marginTop:'0.375rem'}}>+120 XP · НОВИЙ РІВЕНЬ</div>
              </div>
            </div>
          </div>

          <span className="lbl" style={{marginTop:'1.5rem'}}>ДАЛІ</span>
          <button className="btn btn-full" style={{marginTop:'0.625rem'}} onClick={() => onNavigate('achievements')}>
            УСІ ДОСЯГНЕННЯ <span>→</span>
          </button>
          <button className="btn btn-full" style={{marginTop:'0.5rem'}} onClick={() => onNavigate('labs')}>
            НАСТУПНА ЛАБОРАТОРІЯ <span>→</span>
          </button>
          <button className="btn btn-full" style={{marginTop:'0.5rem'}}>
            ЗАВАНТАЖИТИ PDF <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ARC_F = [
  { id:'all',   ua:'ВСІ' },
  { id:'PHOTOGRAPH', ua:'ФОТО' },
  { id:'PLAN',  ua:'ПЛАНИ' },
  { id:'ORAL',  ua:'УСНІ' },
  { id:'DOCUMENT', ua:'ДОКУМЕНТИ' },
];

const ARC_I = [
  { tp:'DOCUMENT', st:'УСТАНОВЧИЙ СТАТУТ', yr:1921, en:'Установчий статут', ua:'Засновницький документ Донецького гірничого технікуму',
    desc:'Оригінальний статут 1921 року, транскрибовано та звірено з документами розширення 1976 року. Активація цього артефакту відкриває рідкісну відзнаку «Спадкоємець».',
    feat:true, img:'https://images.unsplash.com/photo-1568667256549-094345857637?w=600&h=800&fit=crop' },
  { tp:'PHOTOGRAPH', yr:2013, en:'Інженерний корпус', ua:'Головний фасад · до переміщення', img:'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop' },
  { tp:'PHOTOGRAPH', yr:2008, en:'Головний кампус', ua:'Аерофотозйомка · Донецьк', img:'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&h=400&fit=crop' },
  { tp:'ORAL', yr:2024, en:'Інтерв\'ю проф. Коваленко', ua:'42 роки в інституції · 38 хв', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop' },
  { tp:'PLAN', yr:1976, en:'План розширення кампусу', ua:'Креслення нових корпусів', img:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop' },
  { tp:'DOCUMENT', yr:2014, en:'Запис переміщення', ua:'Протокол евакуації · Покровськ', img:'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop' },
  { tp:'PHOTOGRAPH', yr:2022, en:'Відкриття кампусу в Луцьку', ua:'Перший день нової адреси', img:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop' },
  { tp:'ORAL', yr:2023, en:'Свідчення студентів', ua:'12 голосів · збірка', img:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop' },
  { tp:'PLAN', yr:2025, en:'Карта відновлення', ua:'Інфраструктура Донбасу · робочий план', img:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop' },
];

const ArchivePage = ({ onNavigate }) => {
  const [fi, setFi] = React.useState('all');
  const flt = fi === 'all' ? ARC_I : ARC_I.filter(it => it.tp === fi);

  return (
    <div className="page">
      <span className="lbl">08 · АРХІВ</span>
      <div className="arc-hero">
        <div>
          <h1 className="arc-h1">Пам'ять — це <em>акт</em>,<br/>а не сховище.</h1>
          <p className="body" style={{marginTop:'1.25rem',fontSize:'1rem',maxWidth:'48ch'}}>
            Не музей. Активна система пам'яті: фотографічний запис, усні свідчення,
            реконструйовані плани, наукові джерела — кожна одиниця повʼязана з
            корпусом, дисципліною та живим свідком.
          </p>
        </div>
        <div className="ov-stats" style={{gridTemplateColumns:'repeat(2,1fr)',gap:'0.75rem'}}>
          <Stat v="4 832" label="Одиниці" />
          <Stat v="412" label="Усні свідчення" />
          <Stat v="89" label="Плани" />
          <Stat v="105" label="Років охоплено" />
        </div>
      </div>

      <div className="arc-filt">
        <div className="arc-tabs">
          {ARC_F.map(f => (
            <button key={f.id} className={`arc-tab ${fi===f.id?'act':''}`} onClick={() => setFi(f.id)}>
              {f.ua}
            </button>
          ))}
        </div>
        <span className="lbl lbl-dim">ПОКАЗАНО {flt.length} З {ARC_I.length}</span>
      </div>

      <div className="arc-grid">
        {flt.map((it,i) => (
          <div key={i} className={`arc-item ${it.feat?'arc-feat':''}`}>
            <div className="arc-img">
              <img src={it.img} alt={it.en} loading="lazy" />
              <div className="arc-img-ov"></div>
              {it.feat && <div style={{position:'absolute',top:'1rem',left:'1rem',zIndex:2}}>
                <Badge status="featured" label="ПОКАЗОВИЙ" />
              </div>}
              <div style={{position:'absolute',bottom:'1rem',left:'1rem',zIndex:2}}>
                <span className="lbl" style={{color:'rgba(255,255,255,.7)'}}>{it.tp} · {it.yr}</span>
              </div>
            </div>
            <div className="arc-info">
              <span className="lbl">{it.tp}{it.st ? ' · ' + it.st : ''}</span>
              <h3 className="serif" style={{fontSize:it.feat?'1.75rem':'1.125rem',fontWeight:500,marginTop:'0.5rem',lineHeight:1.25}}>
                {it.en}
              </h3>
              <p className="caption" style={{marginTop:'0.25rem'}}>{it.ua}</p>
              {it.desc && <p className="body" style={{fontSize:'0.875rem',marginTop:'0.75rem'}}>{it.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Object.assign(window, { AssessmentPage, ArchivePage });
