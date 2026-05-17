/* Alumni Page — network, careers, mentorship */
const NOTABLE_ALUMNI = [
  { name:'Георгій Береговий', grad:1956, specialty:'Гірнича інженерія', role:'Льотчик-космонавт СРСР',
    desc:'Двічі Герой Радянського Союзу. Єдиний космонавт — випускник DonNTU. Політ на «Союз-3» (1968). До космосу працював льотчиком-випробувачем. Почесний громадянин Донецька.',
    era:'soviet', highlight:true },
  { name:'Олексій Стаханов', grad:1935, specialty:'Гірнича справа', role:'Засновник стахановського руху',
    desc:'Шахтар-рекордсмен, ім\'я якого стало символом продуктивності. Навчався на робітничому факультеті DonNTU. Рекорд 1935 року — 102 тонни вугілля за зміну при нормі 7.',
    era:'soviet', highlight:true },
  { name:'Віктор Янукович', grad:1980, specialty:'Машинобудування', role:'Президент України (2010–2014)',
    desc:'Випускник заочного відділення. Кар\'єра від транспортника до президента. Втік з України у 2014 після Революції гідності.',
    era:'soviet', highlight:false },
  { name:'Андрій Шишацький', grad:1998, specialty:'Електротехніка', role:'CEO «Метінвест Діджитал»',
    desc:'Очолює цифрову трансформацію найбільшої гірничо-металургійної компанії України. Впровадив IoT на 12 підприємствах.',
    era:'modern', highlight:false },
  { name:'Олена Коваленко', grad:2005, specialty:'Комп\'ютерні науки', role:'VP Engineering, Grammarly',
    desc:'Одна з перших випускниць ФКНТ. Побудувала кар\'єру від розробника до VP Engineering у Grammarly. Менторка програми DonNTU Alumni Bridge.',
    era:'modern', highlight:true },
  { name:'Дмитро Петренко', grad:2010, specialty:'Кібербезпека', role:'Засновник CyberDonbas',
    desc:'Створив стартап з кіберзахисту критичної інфраструктури. Компанія обслуговує 40+ підприємств. Інвестиції — $2.5M від TA Ventures.',
    era:'modern', highlight:false },
  { name:'Марія Ткаченко', grad:2012, specialty:'Екологія', role:'ЮНЕП, координатор проектів',
    desc:'Працює в програмі ООН з навколишнього середовища. Координує проект екологічного моніторингу Донбасу. Співавтор звіту ООН про екологічні наслідки війни.',
    era:'displaced', highlight:false },
  { name:'Артем Бондаренко', grad:2018, specialty:'Гірнича інженерія', role:'Інженер-відбудовник, «Нафтогаз»',
    desc:'Перший випускник після переміщення. Працює над відновленням енергетичної інфраструктури. Волонтер програми «Будуємо разом».',
    era:'displaced', highlight:true },
];

const ALUMNI_PROGRAMS = [
  { name:'DonNTU Alumni Bridge', type:'Менторство', members:85,
    desc:'Менторська програма: випускники допомагають студентам. 85 менторів у 12 країнах. Від кар\'єрних консультацій до стажувань.',
    benefits:['Персональний ментор','Кар\'єрні консультації','Доступ до стажувань','Нетворкінг'] },
  { name:'Повернення знань', type:'Лекції', members:40,
    desc:'Випускники читають гостьові лекції та воркшопи. 40 лекторів на рік. Від CEO до інженерів на передовій.',
    benefits:['Гостьові лекції','Практичні воркшопи','Реальні кейси','Q&A сесії'] },
  { name:'Стипендіальний фонд випускників', type:'Фінансування', members:120,
    desc:'Фонд, що фінансує стипендії для найкращих студентів. 120 донорів. Щорічно — 15 стипендій по 12 000 грн.',
    benefits:['Стипендія 12 000 грн/міс','Оплата гуртожитку','Грант на дослідження','Підтримка переміщених'] },
  { name:'Alumni Startup Hub', type:'Підприємництво', members:30,
    desc:'Підтримка стартапів від випускників DonNTU. 30 менторів-підприємців. 5 стартапів отримали фінансування через мережу.',
    benefits:['Менторство від засновників','Доступ до інвесторів','Коворкінг','Юридична підтримка'] },
];

const CAREER_PATHS = [
  { sector:'Гірнича промисловість', pct:22, companies:'ДТЕК, Метінвест, ArcelorMittal',
    desc:'Класичний шлях випускників. Від інженера до директора шахти. Попит зростає через відбудову.' },
  { sector:'IT та кібербезпека', pct:28, companies:'Grammarly, EPAM, CyberDonbas, SoftServe',
    desc:'Найшвидше зростаючий сектор. Випускники ФКНТ — одні з найзатребуваніших на ринку.' },
  { sector:'Енергетика', pct:18, companies:'Нафтогаз, ДТЕК, Укренерго, E.ON',
    desc:'Відновлення енергосистеми — ключовий напрямок. Випускники ЕТФ працюють на всіх рівнях.' },
  { sector:'Будівництво та архітектура', pct:12, companies:'KAN Development, Будівельний альянс',
    desc:'Відбудова зруйнованих міст — нова можливість для випускників ІБФ.' },
  { sector:'Наука та освіта', pct:10, companies:'НАН України, університети, дослідницькі центри',
    desc:'Академічна кар\'єра. 48 докторів наук — випускники DonNTU. Працюють у 15 країнах.' },
  { sector:'Екологія та довкілля', pct:6, companies:'ЮНЕП, WWF, Мінекології',
    desc:'Зростаючий сектор. Екологічні наслідки війни створюють попит на фахівців.' },
  { sector:'Державна служба', pct:4, companies:'Міністерства, ОВА, місцеве самоврядування',
    desc:'Управлінці, що розуміють промисловість та інженерію.' },
];

const ALUMNI_STATS = [
  { v:'~65 000', label:'Випускників', desc:'За 105 років історії' },
  { v:'42', label:'Країни', desc:'Де працюють випускники' },
  { v:'85', label:'Менторів', desc:'У програмі Alumni Bridge' },
  { v:'15', label:'Стипендій на рік', desc:'Від фонду випускників' },
  { v:'28%', label:'В IT', desc:'Найпопулярніший сектор' },
  { v:'5', label:'Стартапів', desc:'Профінансованих через мережу' },
];

const ERA_LABELS = { soviet:'РАДЯНСЬКА ЕРА', modern:'НЕЗАЛЕЖНІСТЬ', displaced:'ПЕРЕМІЩЕННЯ' };

const AlumniPage = ({ onNavigate }) => {
  const [expandedAlumni, setExpandedAlumni] = React.useState(null);
  const [tab, setTab] = React.useState('notable');
  const [eraFilter, setEraFilter] = React.useState('all');

  const filteredAlumni = eraFilter === 'all' ? NOTABLE_ALUMNI : NOTABLE_ALUMNI.filter(a => a.era === eraFilter);

  return (
    <div className="page">
      <span className="lbl">24 · ВИПУСКНИКИ</span>

      <div style={{marginTop:'1.5rem'}}>
        <h1 className="h1" style={{fontSize:'2.25rem',lineHeight:1.15}}>
          65 000 <em>історій.</em>
        </h1>
        <p className="body" style={{marginTop:'1rem',maxWidth:'580px'}}>
          Від космонавта Берегового до стартаперів кібербезпеки. 105 років випускників у 42 країнах. Менторська мережа, стипендіальний фонд, гостьові лекції. Спільнота, що тримається разом попри все.
        </p>
      </div>

      {/* Stats */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(140px,1fr))',gap:'0.75rem',marginTop:'2rem'}}>
        {ALUMNI_STATS.map((s,i) => (
          <div key={i} className="gc" style={{padding:'1rem',textAlign:'center'}}>
            <div className="serif tg" style={{fontSize:'1.375rem',fontWeight:500}}>{s.v}</div>
            <div className="lbl" style={{marginTop:'0.5rem'}}>{s.label}</div>
            <div className="caption" style={{marginTop:'0.25rem',color:'var(--t3)'}}>{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{display:'flex',gap:'0.5rem',marginTop:'2.5rem'}}>
        {[{k:'notable',l:'Відомі випускники'},{k:'programs',l:'Програми'},{k:'careers',l:'Кар\'єрні шляхи'}].map(t => (
          <button key={t.k} className={`lbl ${tab===t.k?'lbl-gold':''}`} onClick={() => setTab(t.k)}
            style={{padding:'0.375rem 0.75rem',border:'1px solid var(--border)',borderRadius:'2px',background: tab===t.k ? 'rgba(196,132,52,0.1)' : 'transparent',cursor:'pointer',color: tab===t.k ? 'var(--amber)' : 'var(--t3)'}}>
            {t.l}
          </button>
        ))}
      </div>

      {/* Notable Alumni */}
      {tab==='notable' && (
        <div style={{marginTop:'1rem'}}>
          <div style={{display:'flex',gap:'0.5rem',marginBottom:'1rem',flexWrap:'wrap'}}>
            {[{k:'all',l:'Всі'},{k:'soviet',l:'Радянська ера'},{k:'modern',l:'Незалежність'},{k:'displaced',l:'Переміщення'}].map(f => (
              <button key={f.k} className={`lbl ${eraFilter===f.k?'lbl-gold':''}`} onClick={() => setEraFilter(f.k)}
                style={{padding:'0.25rem 0.5rem',border:'1px solid var(--border)',borderRadius:'2px',background: eraFilter===f.k ? 'rgba(196,132,52,0.1)' : 'transparent',cursor:'pointer',color: eraFilter===f.k ? 'var(--amber)' : 'var(--t3)',fontSize:'0.625rem'}}>
                {f.l}
              </button>
            ))}
          </div>
          <div style={{display:'grid',gap:'0.75rem'}}>
            {filteredAlumni.map((a,i) => (
              <div key={i} className="gc" style={{padding:'1.25rem',cursor:'pointer',borderColor: expandedAlumni===i ? 'var(--amber)' : a.highlight ? 'rgba(196,132,52,0.3)' : undefined}} onClick={() => setExpandedAlumni(expandedAlumni===i ? null : i)}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <div>
                    <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{a.name}</h4>
                    <span className="lbl" style={{marginTop:'0.25rem'}}>{a.role}</span>
                  </div>
                  <div style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:'0.25rem'}}>
                    <Badge status={a.highlight?'featured':'open'} label={ERA_LABELS[a.era]} />
                    <span className="mono" style={{fontSize:'0.6875rem',color:'var(--t3)'}}>Випуск {a.grad}</span>
                  </div>
                </div>
                {expandedAlumni===i && (
                  <div style={{marginTop:'0.75rem',borderTop:'1px solid var(--border)',paddingTop:'0.75rem'}}>
                    <p className="body" style={{fontSize:'0.8125rem'}}>{a.desc}</p>
                    <span className="mono" style={{fontSize:'0.6875rem',color:'var(--t3)',marginTop:'0.5rem',display:'block'}}>Спеціальність: {a.specialty}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Programs */}
      {tab==='programs' && (
        <div style={{marginTop:'1rem'}}>
          <div className="div-row">
            <span className="lbl">ПРОГРАМИ ДЛЯ ВИПУСКНИКІВ</span>
            <div className="div-line"></div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'1rem',marginTop:'1rem'}}>
            {ALUMNI_PROGRAMS.map((p,i) => (
              <div key={i} className="gc" style={{padding:'1.25rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                  <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{p.name}</h4>
                  <span className="mono" style={{fontSize:'0.6875rem',color:'var(--amber)'}}>{p.members} учасників</span>
                </div>
                <span className="lbl" style={{marginTop:'0.25rem',display:'block'}}>{p.type}</span>
                <p className="body" style={{marginTop:'0.75rem',fontSize:'0.8125rem',color:'var(--t2)'}}>{p.desc}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.375rem',marginTop:'0.75rem'}}>
                  {p.benefits.map((b,j) => (
                    <span key={j} className="mono" style={{fontSize:'0.625rem',padding:'0.25rem 0.5rem',border:'1px solid var(--border)',borderRadius:'2px',color:'var(--t2)'}}>{b}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Career Paths */}
      {tab==='careers' && (
        <div style={{marginTop:'1rem'}}>
          <div className="div-row">
            <span className="lbl">КАР'ЄРНІ ШЛЯХИ</span>
            <div className="div-line"></div>
          </div>
          <div style={{display:'grid',gap:'0.75rem',marginTop:'1rem'}}>
            {CAREER_PATHS.map((c,i) => (
              <div key={i} className="gc" style={{padding:'1.25rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
                  <h4 className="h3" style={{fontWeight:500,fontSize:'0.9375rem'}}>{c.sector}</h4>
                  <span className="serif tg" style={{fontSize:'1.125rem',fontWeight:600}}>{c.pct}%</span>
                </div>
                <Bar value={c.pct} max={30} />
                <p className="body" style={{marginTop:'0.75rem',fontSize:'0.8125rem',color:'var(--t2)'}}>{c.desc}</p>
                <span className="mono" style={{fontSize:'0.6875rem',color:'var(--t3)',marginTop:'0.5rem',display:'block'}}>Компанії: {c.companies}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call to action */}
      <div className="gc gc-gold" style={{marginTop:'2.5rem',padding:'2rem',textAlign:'center'}}>
        <span className="lbl lbl-gold">ПРИЄДНУЙСЯ ДО СПІЛЬНОТИ</span>
        <h3 className="serif tg" style={{fontSize:'1.25rem',marginTop:'0.75rem'}}>
          alumni@donntu.edu.ua
        </h3>
        <p className="body" style={{marginTop:'1rem',maxWidth:'480px',margin:'1rem auto 0',fontSize:'0.8125rem',color:'var(--t2)'}}>
          Стань ментором, лектором або донором. Допоможи наступному поколінню інженерів Донбасу. Мережа працює в 42 країнах — ти не один.
        </p>
      </div>
    </div>
  );
};
