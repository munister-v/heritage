/* GalleryPage — masonry photo archive + lightbox */

const GALLERY_PHOTOS = [
  { id: 1,  src: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=1200&q=80', cat: 'Документи',    date: '1958',    title: 'Архівні справи кафедри гірництва',    src_lg: 'https://images.unsplash.com/photo-1568667256549-094345857637?w=2000&q=85' },
  { id: 2,  src: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&q=80', cat: 'Бібліотека',   date: '1965',    title: 'Зал бібліотеки головного корпусу',     src_lg: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=2000&q=85' },
  { id: 3,  src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80', cat: 'Аудиторії',    date: '1974',    title: 'Велика лекційна аудиторія А-1',        src_lg: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=2000&q=85' },
  { id: 4,  src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80', cat: 'Документи',    date: '1949',    title: 'Технічна література, читальний зал',   src_lg: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=2000&q=85' },
  { id: 5,  src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80', cat: 'Студенти',     date: '1982',    title: 'Заняття на кафедрі металургії',        src_lg: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=2000&q=85' },
  { id: 6,  src: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=1200&q=80', cat: 'Архітектура', date: '1958',    title: 'Деталь фасаду головного корпусу',      src_lg: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?w=2000&q=85' },
  { id: 7,  src: 'https://images.unsplash.com/photo-1545972154-9bb223aac798?w=1200&q=80',    cat: 'Архітектура', date: '1960',    title: 'Південне крило, вул. Артема, 58',      src_lg: 'https://images.unsplash.com/photo-1545972154-9bb223aac798?w=2000&q=85' },
  { id: 8,  src: 'https://images.unsplash.com/photo-1517160770490-b0eb52a90947?w=1200&q=80', cat: 'Архітектура', date: '1972',    title: 'Лабораторний корпус Б',                src_lg: 'https://images.unsplash.com/photo-1517160770490-b0eb52a90947?w=2000&q=85' },
  { id: 9,  src: 'https://images.unsplash.com/photo-1535952548088-1ec4a04dde9d?w=1200&q=80', cat: 'Архітектура', date: '1989',    title: 'Кампус, вид з вул. Челюскінців',       src_lg: 'https://images.unsplash.com/photo-1535952548088-1ec4a04dde9d?w=2000&q=85' },
  { id: 10, src: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=1200&q=80', cat: 'Архітектура', date: '1995',    title: 'Кампус з висоти пташиного польоту',    src_lg: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=2000&q=85' },
  { id: 11, src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200&q=80', cat: 'Архітектура', date: '2010',    title: 'Інженерний корпус, головний вхід',     src_lg: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=2000&q=85' },
  { id: 12, src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80', cat: 'Лабораторії', date: '1968',    title: 'Лабораторія опору матеріалів',         src_lg: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=2000&q=85' },
  { id: 13, src: 'https://images.unsplash.com/photo-1486520299386-6d106b22014b?w=1200&q=80', cat: 'Лабораторії', date: '1970',    title: 'Креслярська майстерня',                src_lg: 'https://images.unsplash.com/photo-1486520299386-6d106b22014b?w=2000&q=85' },
  { id: 14, src: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=1200&q=80', cat: 'Студенти',    date: '1985',    title: 'Випуск гірничого факультету',          src_lg: 'https://images.unsplash.com/photo-1518733057094-95b53143d2a7?w=2000&q=85' },
  { id: 15, src: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1200&q=80', cat: 'Бібліотека',  date: '2008',    title: 'Читальна зала, відділ періодики',      src_lg: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=2000&q=85' },
  { id: 16, src: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=1200&q=80', cat: 'Аудиторії',   date: '1991',    title: 'Аудиторія В-302, кафедра енергетики',  src_lg: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=2000&q=85' },
  { id: 17, src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&q=80', cat: 'Студенти',    date: '2005',    title: 'Студентська група, дипломні роботи',   src_lg: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=2000&q=85' },
  { id: 18, src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=80', cat: 'Документи',   date: '1937',    title: 'Креслення головного корпусу',          src_lg: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=2000&q=85' },
];

const FILTERS = ['Усі', 'Архітектура', 'Студенти', 'Лабораторії', 'Аудиторії', 'Бібліотека', 'Документи'];

const GalleryPage = () => {
  const [filter, setFilter] = React.useState('Усі');
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const items = filter === 'Усі' ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter(p => p.cat === filter);

  return (
    <div>
      <section className="page-head">
        <div className="container">
          <div className="eyebrow">01 · Колекція</div>
          <h1 className="h1">Архів<br/>фотографій</h1>
          <p className="lede">
            Понад чотири тисячі знімків з періоду 1921–2014 років та матеріалів після переміщень.
            Натисніть на знімок, щоб переглянути деталі та джерело.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="gallery-toolbar">
          <div className="chips">
            {FILTERS.map(f => (
              <button key={f} className={'chip' + (filter === f ? ' active' : '')} onClick={() => setFilter(f)}>
                {f}
              </button>
            ))}
          </div>
          <div className="caption">{items.length} знімків</div>
        </div>

        <div className="masonry">
          {items.map(p => (
            <div key={p.id} className="m-item" onClick={() => setLightbox(p)}>
              <img src={p.src} alt={p.title} loading="lazy" />
              <div className="m-item-cap">
                <div className="mono" style={{color: 'var(--accent)'}}>{p.date}</div>
                <div>{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {lightbox && (
        <div className="modal-backdrop" onClick={() => setLightbox(null)}>
          <button className="modal-close" onClick={() => setLightbox(null)}>×</button>
          <div className="lb-wrap" onClick={(e) => e.stopPropagation()}>
            <img className="lb-img" src={lightbox.src_lg} alt={lightbox.title} />
            <div className="lb-meta">
              <div className="lb-meta-title">{lightbox.title}</div>
              <div className="caption">{lightbox.cat} · {lightbox.date} · Архів ДонНТУ</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Object.assign(window, { GalleryPage });
