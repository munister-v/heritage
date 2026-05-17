/* VoicesPage — oral history grid */

const VOICES = [
  { name: 'Микола Петрович Литвиненко', role: 'Професор, кафедра гірництва', years: '1962–2014', dur: '42 хв',
    avatar: 'https://images.unsplash.com/photo-1559548331-f9cb98280344?w=400&q=80',
    quote: 'Перший раз я зайшов до А-1 студентом-першокурсником у вересні 1962-го. Запах паркету, мармурові сходи — це залишилося назавжди.' },
  { name: 'Світлана Іванівна Бойко',  role: 'Доцент, кафедра металургії', years: '1978–2014', dur: '38 хв',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    quote: 'Ми готували сталеварів для всього басейну. Випускники працювали на «Азовсталі», на «Криворіжсталі» — скрізь.' },
  { name: 'Олег Володимирович Дяченко', role: 'Випускник 1989, енергетик', years: '1984–1989', dur: '51 хв',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'У В-302 була найкраща акустика в усьому корпусі. Лекції Корнєєва слухалися як концерт — без єдиного шуму.' },
  { name: 'Тетяна Григорівна Сорока',  role: 'Бібліотекар, 1971–2014', years: '43 роки',  dur: '36 хв',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'Книжки залишили там, у Донецьку. Понад мільйон томів. Хтось з них уцілів — не знаємо. Це найбільша втрата.' },
  { name: 'Андрій Сергійович Кравцов', role: 'Декан гірничого факультету', years: '1995–2014', dur: '57 хв',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    quote: 'Я зачинив свій кабінет у червні 2014-го, думав — на тиждень. Не повернувся більше ніколи.' },
  { name: 'Олена Михайлівна Гаврилова', role: 'Студентка 2010–2014', years: '4 роки',  dur: '29 хв',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote: 'Ми склали останню сесію 2014-го у Красноармійську, у школі. Дипломи вже друкували в Покровську.' },
  { name: 'Віктор Андрійович Гриценко', role: 'Завкафедри енергетики', years: '1988–2014', dur: '44 хв',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'Лабораторне обладнання вивезти не змогли. Кожен прилад — це десятиліття роботи інженерів-настройників.' },
  { name: 'Ірина Володимирівна Шевчук', role: 'Аспірантка, автоматизація', years: '2008–2013', dur: '33 хв',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    quote: 'У креслярській Г-401 ми сиділи до десятої вечора. Вахтерка тітка Зіна нас тихенько випускала через задні двері.' },
];

const Waveform = ({ seed = 1 }) => {
  const bars = React.useMemo(() => {
    const out = [];
    for (let i = 0; i < 48; i++) {
      const r = Math.abs(Math.sin((i + seed) * 1.3)) * 0.85 + 0.15;
      out.push(r);
    }
    return out;
  }, [seed]);
  return (
    <div className="waveform">
      {bars.map((b, i) => (
        <span key={i} style={{height: `${b * 100}%`, background: i < bars.length * 0.3 ? 'var(--accent)' : 'var(--text-3)'}} />
      ))}
    </div>
  );
};

const VoicesPage = () => (
  <div>
    <section className="page-head">
      <div className="container">
        <div className="eyebrow">04 · Колекція</div>
        <h1 className="h1">Усна<br/>історія</h1>
        <p className="lede">
          Голоси людей, що пам'ятають. Випускники, викладачі, працівники —
          їхні свідчення про повсякдення університету, який існував до 2014 року.
        </p>
      </div>
    </section>

    <section className="container">
      <div className="voices-grid">
        {VOICES.map((v, i) => (
          <div key={i} className="voice-card">
            <img className="voice-avatar" src={v.avatar} alt={v.name} loading="lazy" />
            <div>
              <div className="voice-name">{v.name}</div>
              <div className="voice-role">{v.role} · {v.years}</div>
              <div className="voice-quote">«{v.quote}»</div>
              <div className="voice-controls">
                <button className="btn btn-sm">▶ Слухати · {v.dur}</button>
                <Waveform seed={i + 1} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
);

Object.assign(window, { VoicesPage });
