/* CertifyPage — certification center */

const MODULES = [
  { id: 'mining',  icon: 'Г', title: 'Гірнича безпека',         desc: 'Принципи безпеки у підземних виробках, вентиляція, дегазація, евакуація.', diff: '●●●○○', dur: '45 хв' },
  { id: 'energy',  icon: 'Е', title: 'Енергетичні системи',      desc: 'Електропостачання промислових об\'єктів, надійність, енергоефективність.',  diff: '●●●●○', dur: '50 хв' },
  { id: 'metal',   icon: 'М', title: 'Металургія',               desc: 'Виплавка чорних та кольорових металів, спецсталі, контроль якості.',        diff: '●●●○○', dur: '45 хв' },
  { id: 'autom',   icon: 'А', title: 'Промислова автоматизація', desc: 'АСУ ТП, ПЛК, SCADA, цифрові двійники виробництва.',                          diff: '●●●●○', dur: '55 хв' },
  { id: 'eco',     icon: 'Х', title: 'Екологічна інженерія',     desc: 'Рекультивація, очищення стічних вод, моніторинг промислових викидів.',       diff: '●●○○○', dur: '40 хв' },
  { id: 'digital', icon: 'Ц', title: 'Цифрове виробництво',      desc: 'Індустрія 4.0, IIoT, машинне навчання у виробничих процесах.',               diff: '●●●●●', dur: '60 хв' },
];

const CertifyPage = ({ onNavigate }) => {
  const [certs, setCerts] = React.useState([]);

  React.useEffect(() => {
    const found = [];
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith('donntu_cert_')) {
          const d = JSON.parse(localStorage.getItem(k) || 'null');
          if (d) found.push(d);
        }
      }
    } catch (e) {}
    found.sort((a, b) => new Date(b.issued || 0) - new Date(a.issued || 0));
    setCerts(found);
  }, []);

  const startModule = (mod) => {
    try { sessionStorage.setItem('donntu_pending_module', JSON.stringify(mod)); } catch(e) {}
    onNavigate && onNavigate('assessment');
  };

  const goCert = (cert) => {
    const url = window.location.pathname + '?cert=' + cert.id;
    window.history.pushState({}, '', url);
    window.location.reload();
  };

  const copyLink = (cert) => {
    const url = window.location.origin + window.location.pathname + '?cert=' + cert.id;
    try { navigator.clipboard.writeText(url); } catch(e) {}
  };

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">06 · Освіта</div>
          <h1 className="h1">Центр<br/>сертифікації</h1>
          <p className="lede">
            Пройдіть тест у віртуальних стінах університету. Отримайте сертифікат
            із персональним посиланням — посилання можна поділитися або роздрукувати.
          </p>
        </div>
      </section>

      <section className="section" style={{paddingTop: '2rem'}}>
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Доступні модулі</h2>
            <p className="body">Шість сертифікаційних напрямів — від традиційного гірництва до цифрового виробництва.</p>
          </div>
          <div className="modules-grid">
            {MODULES.map(m => (
              <button key={m.id} className="module-card" onClick={() => startModule(m)}>
                <div className="module-icon">{m.icon}</div>
                <div className="module-title">{m.title}</div>
                <div className="module-desc">{m.desc}</div>
                <div className="module-meta">
                  <span>{m.dur}</span>
                  <span>{m.diff}</span>
                </div>
                <div className="module-cta">Розпочати →</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <div className="section-head">
            <h2 className="h2">Мої сертифікати</h2>
            <p className="body">Сертифікати зберігаються локально у вашому браузері.</p>
          </div>
          {certs.length === 0 ? (
            <div className="card card-pad" style={{textAlign: 'center', padding: '3rem'}}>
              <p className="body">Сертифікатів поки що немає. Виберіть модуль вище, щоб отримати перший.</p>
            </div>
          ) : (
            <div className="my-certs">
              {certs.map(c => (
                <div key={c.id} className="my-cert">
                  <div className="my-cert-row">
                    <div>
                      <div className="my-cert-module">{c.module}</div>
                      <div className="caption">{c.student}</div>
                    </div>
                    <div className="my-cert-score">{c.score}</div>
                  </div>
                  <div className="my-cert-row" style={{marginTop: '0.75rem'}}>
                    <div className="my-cert-id">{c.id}</div>
                    <div className="caption">{c.date}</div>
                  </div>
                  <div className="my-cert-actions">
                    <button className="btn btn-sm" onClick={() => goCert(c)}>Переглянути</button>
                    <button className="btn btn-sm" onClick={() => copyLink(c)}>Копіювати посилання</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container-narrow">
          <h2 className="h2" style={{marginBottom: '1rem'}}>Стандарти</h2>
          <p className="body-lg">
            Сертифікаційні модулі побудовані на основі навчальних програм ДонНТУ та
            галузевих стандартів України. Кожен тест містить п'ять питань з обраної дисципліни;
            прохідний бал — 60 з 100. Бал нижче 60 не блокує повторну спробу.
          </p>
          <p className="body" style={{marginTop: '1rem'}}>
            Сертифікат містить унікальний ідентифікатор формату <span className="mono">DONNTU-YYYY-XXX-XXXX</span>
            та публічне посилання для верифікації. Дані зберігаються у локальному сховищі браузера.
          </p>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { CertifyPage });
