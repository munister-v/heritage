/* AssessmentPage — 3-step test: intro → questions → result */

const QUESTIONS_BY_MODULE = {
  mining: [
    { q: 'Який мінімальний вміст кисню в рудничній атмосфері за чинними нормами?', opts: ['17%', '20%', '21%', '23%'], correct: 1 },
    { q: 'Як називається вибухонебезпечна суміш метану з повітрям у шахті?', opts: ['Рудничний газ', 'Гримучий газ', 'Сірководень', 'Чадний газ'], correct: 1 },
    { q: 'Основний засіб боротьби з вугільним пилом у виробках?', opts: ['Сланцювання', 'Зрошення водою', 'Вентиляція', 'Усе перераховане'], correct: 3 },
    { q: 'Що таке "людська ходка" у термінах шахтної безпеки?', opts: ['Зміна персоналу', 'Аварійний вихід', 'Окремий шлях для пересування людей', 'Перевірка стану'], correct: 2 },
    { q: 'Як часто проводиться газовий заміри у газовій шахті III категорії?', opts: ['1 раз на зміну', '2 рази на зміну', '3 рази на зміну', 'Безперервно'], correct: 2 },
  ],
  energy: [
    { q: 'Номінальна напруга шахтної дільничної мережі за ПУЕ?', opts: ['380 В', '660 В', '1140 В', '6000 В'], correct: 2 },
    { q: 'Що означає скорочення АВР?', opts: ['Автоматичне ввімкнення резерву', 'Автоматичний вимикач реактивний', 'Автоматичний регулятор', 'Аналогова система'], correct: 0 },
    { q: 'Косинус φ характеризує:', opts: ['Опір', 'Коефіцієнт потужності', 'Потужність', 'Енергію'], correct: 1 },
    { q: 'Найпоширеніший тип ізоляції в шахтних кабелях?', opts: ['Паперова', 'ПВХ', 'Гумова', 'Поліетиленова'], correct: 2 },
    { q: 'Що таке "глуха заземлена нейтраль"?', opts: ['Тип трансформатора', 'Режим нейтралі мережі', 'Тип захисту', 'Спосіб монтажу'], correct: 1 },
  ],
  metal: [
    { q: 'Основна сировина доменного процесу?', opts: ['Кокс і руда', 'Сталь', 'Чавун', 'Феросплав'], correct: 0 },
    { q: 'Температура доменної плавки досягає:', opts: ['1200°C', '1500°C', '2000°C', '2500°C'], correct: 2 },
    { q: 'Конвертерний процес — це:', opts: ['Виплавка чавуну', 'Переробка чавуну на сталь', 'Лиття', 'Прокат'], correct: 1 },
    { q: 'Що додають для розкислення сталі?', opts: ['Феросиліцій', 'Кокс', 'Известняк', 'Глинозем'], correct: 0 },
    { q: 'Безперервне розливання сталі дає:', opts: ['Зливки', 'Заготовки', 'Прокат', 'Виливки'], correct: 1 },
  ],
  autom: [
    { q: 'Що таке ПЛК?', opts: ['Промисловий лічильник', 'Програмований логічний контролер', 'Прилад лабораторний', 'Пускова лінія'], correct: 1 },
    { q: 'SCADA — це система:', opts: ['Контролю та збору даних', 'Електропостачання', 'Захисту', 'Зв\'язку'], correct: 0 },
    { q: 'ПІД-регулятор має складові:', opts: ['П, І, Д', 'А, В, С', 'X, Y, Z', 'Ф, Т, U'], correct: 0 },
    { q: 'Промисловий протокол Modbus працює:', opts: ['Тільки по Ethernet', 'По RS-485 та TCP', 'Тільки бездротово', 'Тільки оптоволокном'], correct: 1 },
    { q: 'Цифровий двійник — це:', opts: ['Резервний сервер', 'Віртуальна модель об\'єкта', 'Друга копія ПЛК', 'Дублююча мережа'], correct: 1 },
  ],
  eco: [
    { q: 'Рекультивація земель — це:', opts: ['Видобуток', 'Відновлення порушених територій', 'Будівництво', 'Геологорозвідка'], correct: 1 },
    { q: 'ГДК — це:', opts: ['Гранично допустима концентрація', 'Глобальний дозвіл', 'Геологічна категорія', 'Газовий датчик'], correct: 0 },
    { q: 'Основний забруднювач кар\'єрного повітря?', opts: ['Метан', 'Пил', 'Сірководень', 'Озон'], correct: 1 },
    { q: 'Очищення шахтних вод найчастіше включає:', opts: ['Відстоювання та фільтрацію', 'Випарювання', 'Електроліз', 'Сублімацію'], correct: 0 },
    { q: 'Біологічний етап рекультивації — це:', opts: ['Планування рельєфу', 'Висадження рослин', 'Будівництво доріг', 'Закладка фундаментів'], correct: 1 },
  ],
  digital: [
    { q: 'Індустрія 4.0 базується на:', opts: ['Паровій тязі', 'Електриці', 'IIoT та цифровізації', 'Конвеєрі'], correct: 2 },
    { q: 'IIoT — це:', opts: ['Інтернет для дому', 'Промисловий інтернет речей', 'Інфрачервоний термометр', 'Інженерна оптика'], correct: 1 },
    { q: 'Edge computing означає:', opts: ['Обробка даних на межі мережі', 'Хмарне зберігання', 'Передача файлів', 'Захист периметру'], correct: 0 },
    { q: 'Машинне навчання у виробництві найчастіше використовують для:', opts: ['Бухгалтерії', 'Прогнозу відмов обладнання', 'Дизайну', 'PR'], correct: 1 },
    { q: 'OPC UA — це:', opts: ['Стандарт промислового обміну даними', 'Тип кабелю', 'Метод управління', 'Назва ПЗ'], correct: 0 },
  ],
};

const MODULE_NAMES = {
  mining: 'Гірнича безпека',
  energy: 'Енергетичні системи',
  metal:  'Металургія',
  autom:  'Промислова автоматизація',
  eco:    'Екологічна інженерія',
  digital:'Цифрове виробництво',
};

const randomId = () => {
  const yr = new Date().getFullYear();
  const r = Math.random().toString(36).slice(2, 6).toUpperCase();
  const mod = Math.random().toString(36).slice(2, 5).toUpperCase();
  return `DONNTU-${yr}-${mod}-${r}`;
};

const AssessmentPage = ({ onCertGenerated, onNavigate }) => {
  // load pending module from sessionStorage
  const [mod, setMod] = React.useState(() => {
    try {
      const raw = sessionStorage.getItem('donntu_pending_module');
      return raw ? JSON.parse(raw) : { id: 'mining', title: 'Гірнича безпека', dur: '45 хв', diff: '●●●○○' };
    } catch (e) { return { id: 'mining', title: 'Гірнича безпека', dur: '45 хв', diff: '●●●○○' }; }
  });
  const [step, setStep] = React.useState('intro'); // intro | quiz | result | done
  const questions = QUESTIONS_BY_MODULE[mod.id] || QUESTIONS_BY_MODULE.mining;
  const [idx, setIdx] = React.useState(0);
  const [answers, setAnswers] = React.useState({});
  const [name, setName] = React.useState('');
  const [cert, setCert] = React.useState(null);
  const [copied, setCopied] = React.useState(false);

  const correctCount = questions.reduce((s, q, i) => s + (answers[i] === q.correct ? 1 : 0), 0);
  const score = Math.round((correctCount / questions.length) * 100);

  const submitCert = () => {
    if (!name.trim()) return;
    const id = randomId();
    const data = {
      id,
      student: name.trim(),
      module: mod.title || MODULE_NAMES[mod.id],
      score,
      date: new Date().toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' }),
      issued: new Date().toISOString(),
    };
    try { localStorage.setItem('donntu_cert_' + id, JSON.stringify(data)); } catch (e) {}
    setCert(data);
    setStep('done');
  };

  const copyUrl = () => {
    if (!cert) return;
    const u = window.location.origin + window.location.pathname + '?cert=' + cert.id;
    try { navigator.clipboard.writeText(u); } catch (e) {}
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (step === 'intro') {
    return (
      <div>
        <section className="page-head">
          <div className="container">
            <div className="eyebrow">Модуль · {mod.dur || '45 хв'} · {mod.diff || '●●●○○'}</div>
            <h1 className="h1">{mod.title || MODULE_NAMES[mod.id]}</h1>
            <p className="lede">
              П'ять питань з обраної дисципліни. Прохідний бал — 60 з 100.
              Після завершення ви зможете отримати персональний сертифікат.
            </p>
          </div>
        </section>
        <section className="container" style={{paddingBottom: '4rem'}}>
          <div className="assess-card">
            <p className="body" style={{marginBottom: '2rem'}}>
              Натисніть «Розпочати», щоб перейти до першого питання.
              Ви можете повертатися до попередніх питань під час сесії.
            </p>
            <div style={{display: 'flex', gap: '0.75rem'}}>
              <button className="btn btn-primary btn-lg" onClick={() => setStep('quiz')}>Розпочати →</button>
              <button className="btn btn-lg" onClick={() => onNavigate && onNavigate('certify')}>← Інші модулі</button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (step === 'quiz') {
    const q = questions[idx];
    const selected = answers[idx];
    return (
      <div>
        <section className="page-head">
          <div className="container">
            <div className="eyebrow">{mod.title || MODULE_NAMES[mod.id]} · Питання {idx + 1} з {questions.length}</div>
            <h1 className="h2" style={{marginTop: '0.5rem'}}>Сертифікаційне оцінювання</h1>
          </div>
        </section>
        <section className="container" style={{paddingBottom: '4rem'}}>
          <div className="assess-card">
            <div className="assess-progress">
              {questions.map((_, i) => (
                <span key={i} className={i <= idx ? 'done' : ''} />
              ))}
            </div>
            <div className="assess-q">{q.q}</div>
            <div className="assess-options">
              {q.opts.map((o, i) => (
                <button
                  key={i}
                  className={'assess-opt' + (selected === i ? ' selected' : '')}
                  onClick={() => setAnswers({...answers, [idx]: i})}
                >
                  <span className="assess-opt-bullet" />
                  <span>{o}</span>
                </button>
              ))}
            </div>
            <div className="assess-nav">
              <button className="btn" onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0}>← Назад</button>
              {idx < questions.length - 1 ? (
                <button className="btn btn-primary" onClick={() => setIdx(idx + 1)} disabled={selected === undefined}>Далі →</button>
              ) : (
                <button className="btn btn-primary" onClick={() => setStep('result')} disabled={selected === undefined}>Завершити →</button>
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (step === 'result') {
    return (
      <div>
        <section className="page-head">
          <div className="container">
            <div className="eyebrow">Результат</div>
            <h1 className="h1">{score >= 60 ? 'Завершено' : 'Спробуйте ще'}</h1>
          </div>
        </section>
        <section className="container" style={{paddingBottom: '4rem'}}>
          <div className="assess-card">
            <div className="score-display">{score}</div>
            <div className="score-label">{correctCount} з {questions.length} правильних</div>

            <div className="hr" />

            {score >= 60 ? (
              <>
                <p className="body" style={{marginBottom: '1rem'}}>
                  Введіть ваше ім'я для сертифіката (українською або латиницею):
                </p>
                <input
                  className="input"
                  placeholder="Прізвище та ім'я"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{marginBottom: '1.5rem'}}
                />
                <button className="btn btn-accent btn-lg" disabled={!name.trim()} onClick={submitCert}>
                  Згенерувати сертифікат →
                </button>
              </>
            ) : (
              <>
                <p className="body" style={{marginBottom: '1.5rem'}}>
                  Прохідний бал — 60. Перегляньте матеріали та повторіть спробу.
                </p>
                <div style={{display: 'flex', gap: '0.75rem'}}>
                  <button className="btn btn-primary" onClick={() => { setStep('intro'); setIdx(0); setAnswers({}); }}>
                    Повторити
                  </button>
                  <button className="btn" onClick={() => onNavigate && onNavigate('certify')}>До центру</button>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    );
  }

  // done
  if (step === 'done' && cert) {
    const url = window.location.origin + window.location.pathname + '?cert=' + cert.id;
    return (
      <div>
        <section className="page-head">
          <div className="container">
            <div className="eyebrow">Сертифікат згенеровано</div>
            <h1 className="h1">Готово.</h1>
            <p className="lede">Сертифікат збережено у вашому браузері й доступний за персональним посиланням.</p>
          </div>
        </section>
        <section className="container" style={{paddingBottom: '5rem'}}>
          <div className="cert-result">
            <div className="caption">ID сертифіката</div>
            <div className="cert-result-id">{cert.id}</div>
            <div className="caption" style={{marginTop: '1rem'}}>Посилання для перевірки</div>
            <div className="cert-result-url">{url}</div>

            <div style={{display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap'}}>
              <button className="btn btn-accent" onClick={copyUrl}>
                {copied ? '✓ Скопійовано' : 'Копіювати посилання'}
              </button>
              <button className="btn btn-primary" onClick={() => onCertGenerated && onCertGenerated(cert.id)}>
                Переглянути сертифікат →
              </button>
              <button className="btn" onClick={() => onNavigate && onNavigate('certify')}>
                До центру сертифікації
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null;
};

Object.assign(window, { AssessmentPage });
