/* ArchivePage — scientific works grid */

const PAPER_THUMBS = [
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
  'https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80',
  'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=600&q=80',
  'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
];

const PAPERS = [
  { cat: 'Гірнича справа', title: 'Геомеханіка та безпека вугільних шахт',                 author: 'Іваненко П.С.',     year: 1978, fac: 'Гірничий ф-т' },
  { cat: 'Гірнича справа', title: 'Методи кріплення виробок на великих глибинах',           author: 'Бондаренко О.М.',   year: 1985, fac: 'Гірничий ф-т' },
  { cat: 'Металургія',     title: 'Доменна плавка з вдуванням пиловугільного палива',       author: 'Левченко Т.Г.',     year: 1992, fac: 'Металургійний ф-т' },
  { cat: 'Металургія',     title: 'Технологія виробництва спеціальних сталей',              author: 'Соколов В.І.',      year: 1976, fac: 'Металургійний ф-т' },
  { cat: 'Енергетика',     title: 'Парогенератори надкритичних параметрів',                 author: 'Михайлюк С.А.',     year: 1981, fac: 'Енергетичний ф-т' },
  { cat: 'Енергетика',     title: 'Електропривід шахтних підйомних установок',              author: 'Григоренко О.Ю.',   year: 1989, fac: 'Електротехнічний ф-т' },
  { cat: 'Автоматизація',  title: 'Цифрове управління технологічними процесами',            author: 'Кравчук Н.В.',      year: 2003, fac: 'Ф-т автоматики' },
  { cat: 'Автоматизація',  title: 'АСУ збагачувальної фабрики',                              author: 'Прокопенко І.Б.',   year: 1995, fac: 'Ф-т автоматики' },
  { cat: 'Економіка',      title: 'Економічна ефективність відкритих гірничих робіт',       author: 'Тимошенко Л.К.',    year: 1987, fac: 'Інженерно-екон. ф-т' },
  { cat: 'Екологія',       title: 'Рекультивація порушених гірничими роботами земель',      author: 'Дяченко М.М.',      year: 2007, fac: 'Екологічний ф-т' },
  { cat: 'Машинобудування',title: 'Гірничі машини нового покоління',                        author: 'Семенов Р.А.',      year: 1999, fac: 'Машинобудівний ф-т' },
  { cat: 'Машинобудування',title: 'Розрахунок шахтних підйомних канатів',                   author: 'Литвин О.П.',       year: 1972, fac: 'Машинобудівний ф-т' },
  { cat: 'Хімія',          title: 'Коксохімія та побічні продукти коксування',              author: 'Карпенко Г.І.',     year: 1968, fac: 'Хіміко-технологічний' },
  { cat: 'Інформатика',    title: 'Моделювання процесів вуглевидобутку',                    author: 'Заєць В.С.',        year: 2011, fac: 'Ф-т ОТ та ПЗ' },
  { cat: 'Будівництво',    title: 'Проєктування промислових будівель в умовах підробки',    author: 'Романенко А.Ф.',    year: 1994, fac: 'Будівельний ф-т' },
  { cat: 'Гірнича справа', title: 'Дегазація вугільних пластів',                            author: 'Пономаренко Д.Г.',  year: 2002, fac: 'Гірничий ф-т' },
];

const CATS = ['Усі', 'Гірнича справа', 'Металургія', 'Енергетика', 'Автоматизація', 'Машинобудування', 'Економіка', 'Екологія', 'Хімія', 'Інформатика', 'Будівництво'];

const ArchivePage = () => {
  const [cat, setCat] = React.useState('Усі');
  const [q, setQ] = React.useState('');

  let papers = cat === 'Усі' ? PAPERS : PAPERS.filter(p => p.cat === cat);
  if (q.trim()) {
    const t = q.toLowerCase();
    papers = papers.filter(p =>
      p.title.toLowerCase().includes(t) ||
      p.author.toLowerCase().includes(t)
    );
  }

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">03 · Колекція</div>
          <h1 className="h1">Науковий<br/>архів</h1>
          <p className="lede">
            Дисертації, монографії та статті — наукова школа ДонНТУ за десятиліття.
            Більшість оцифрована у 2024–2026 рр.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="archive-toolbar">
          <input
            className="search-input"
            placeholder="Пошук за назвою або автором…"
            value={q}
            onChange={e => setQ(e.target.value)}
          />
          <div className="chips">
            {CATS.map(c => (
              <button key={c} className={'chip' + (cat === c ? ' active' : '')} onClick={() => setCat(c)}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="archive-grid">
          {papers.map((p, i) => (
            <div key={i} className="paper-card">
              <div className="paper-thumb" style={{backgroundImage: `url(${PAPER_THUMBS[i % PAPER_THUMBS.length]})`}} />
              <div className="paper-body">
                <div className="paper-cat">{p.cat}</div>
                <div className="paper-title">{p.title}</div>
                <div className="paper-meta">{p.author} · {p.year}<br/>{p.fac}</div>
                <a className="paper-link">Переглянути PDF →</a>
              </div>
            </div>
          ))}
        </div>

        {papers.length === 0 && (
          <p className="caption" style={{textAlign: 'center', padding: '3rem 0'}}>Нічого не знайдено.</p>
        )}
      </section>
    </div>
  );
};

Object.assign(window, { ArchivePage });
