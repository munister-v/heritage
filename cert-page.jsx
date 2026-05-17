/* CertPage — printable certificate display */

const CertPage = ({ certId, certData, onBack }) => {
  const [copied, setCopied] = React.useState(false);

  if (!certId) {
    return (
      <div className="cert-page-wrap">
        <div className="container" style={{textAlign:'center', padding: '5rem 0'}}>
          <div className="eyebrow">Сертифікат</div>
          <h2 className="h2" style={{marginTop:'1rem', marginBottom:'1.5rem'}}>Ідентифікатор не вказано</h2>
          <button className="btn btn-primary" onClick={onBack}>← Повернутись</button>
        </div>
      </div>
    );
  }

  if (!certData) {
    return (
      <div className="cert-page-wrap">
        <div className="container" style={{textAlign:'center', padding: '5rem 0', maxWidth: 640}}>
          <div className="eyebrow">404 · Сертифікат не знайдено</div>
          <h2 className="h2" style={{marginTop:'1rem', marginBottom: '1rem'}}>
            Сертифікат <span className="mono" style={{color: 'var(--accent)'}}>{certId}</span> не існує
          </h2>
          <p className="body" style={{marginBottom:'2rem'}}>
            Можливо, він не був збережений у цьому браузері, або посилання є невірним.
            Сертифікати зберігаються локально у браузері, в якому проводилось оцінювання.
          </p>
          <button className="btn btn-primary" onClick={onBack}>← На головну</button>
        </div>
      </div>
    );
  }

  const certUrl = window.location.origin + window.location.pathname + '?cert=' + certData.id;
  const scoreLabel = certData.score >= 90 ? 'Відмінно' : certData.score >= 75 ? 'Добре' : certData.score >= 60 ? 'Задовільно' : 'Завершено';

  const handleCopy = () => {
    try { navigator.clipboard.writeText(certUrl); } catch(e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="cert-page-wrap">
      <div className="cert-back-row">
        <button className="btn btn-sm" onClick={onBack}>← Повернутись</button>
        <span className="mono caption">{certData.id}</span>
      </div>

      <div className="cert-card-v2">
        <div className="cert-corner tl">Donetsk National Technical University</div>
        <div className="cert-corner tr">est. 1921</div>
        <div className="cert-corner bl">{certData.id}</div>
        <div className="cert-corner br">verified · digital archive</div>

        <div className="cert-institution">Донецький національний технічний університет</div>

        <div className="cert-kicker">Сертифікат завершення · Certificate of completion</div>

        <div className="cert-divider" />

        <div className="cert-kicker" style={{marginTop: '1.5rem'}}>цей сертифікат підтверджує, що</div>
        <div className="cert-name">{certData.student}</div>
        <div className="cert-kicker">успішно завершив(ла) навчальний модуль</div>
        <div className="cert-module-v2">«{certData.module}»</div>

        <div className="cert-seal-v2">ДонНТУ<br/>2026</div>

        <div className="cert-row">
          <div className="cert-row-item">
            <div className="cert-row-v">{certData.score}</div>
            <div className="cert-row-l">Загальний бал</div>
          </div>
          <div className="cert-row-item">
            <div className="cert-row-v">{scoreLabel}</div>
            <div className="cert-row-l">Оцінка</div>
          </div>
          <div className="cert-row-item">
            <div className="cert-row-v" style={{fontSize: '1.25rem', paddingTop: '0.5rem'}}>{certData.date}</div>
            <div className="cert-row-l">Дата видачі</div>
          </div>
        </div>

        <div className="cert-divider" />

        <div className="cert-kicker">посилання для перевірки</div>
        <div className="cert-verify">{certUrl}</div>
      </div>

      <div className="cert-actions-v2">
        <button className="btn btn-accent" onClick={handleCopy}>
          {copied ? '✓ Скопійовано' : 'Копіювати посилання'}
        </button>
        <button className="btn" onClick={() => window.print()}>Друкувати сертифікат</button>
        <button className="btn" onClick={onBack}>На головну</button>
      </div>
    </div>
  );
};

const CertsListPage = ({ onNavigate }) => {
  // redirect into certify page (which already shows the list)
  React.useEffect(() => { onNavigate && onNavigate('certify'); }, []);
  return null;
};

Object.assign(window, { CertPage, CertsListPage });
