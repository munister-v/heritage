/* Gallery Page — реальні фото з Wikimedia Commons, CC-ліцензія */
/* Зйомки: Донецьк 2005-2014, корпуси ДонНТУ, місто */

const WM = 'https://upload.wikimedia.org/wikipedia/commons';

const GALLERY_SECTIONS = [
  {
    id: 'campus-main',
    title: 'Головний корпус · вул. Артема 58',
    sub: 'Сталінський класицизм 1936–1958 · П-подібна будівля з вежею · ~42 000 м²',
    photos: [
      {
        src: `${WM}/6/6e/Donetsk-National-Technical-University_Ukraine.jpg`,
        thumb: `${WM}/thumb/6/6e/Donetsk-National-Technical-University_Ukraine.jpg/900px-Donetsk-National-Technical-University_Ukraine.jpg`,
        title: 'Головний корпус — вигляд з вул. Артема',
        year: '2005',
        author: 'Steschke',
        license: 'CC BY-SA 2.0 DE',
        desc: 'Парадний фасад ДонНТУ з боку вулиці Артема. Монументальна колонада, центральна вежа. Архітектурний стиль — соціалістичний класицизм (сталінська архітектура).',
        wide: true,
      },
      {
        src: `${WM}/5/51/Donetsk_DonNTU_01.jpg`,
        thumb: `${WM}/thumb/5/51/Donetsk_DonNTU_01.jpg/700px-Donetsk_DonNTU_01.jpg`,
        title: '1-й корпус · зимова зйомка',
        year: '2008',
        author: 'Andrew Butko',
        license: 'CC BY-SA 3.0',
        desc: 'Зимова панорама першого корпусу. Пам\'ятка архітектури України, реєстр. № 14-101-0012. Зйомка 21 лютого 2008 р.',
      },
      {
        src: `${WM}/2/25/Donetsk_DonNTU_02.jpg`,
        thumb: `${WM}/thumb/2/25/Donetsk_DonNTU_02.jpg/700px-Donetsk_DonNTU_02.jpg`,
        title: '1-й корпус · боковий фасад',
        year: '2008',
        author: 'Andrew Butko',
        license: 'CC BY-SA 3.0',
        desc: 'Бічний фасад першого корпусу ДонНТУ. Ліве крило П-подібної будівлі. Зйомка 21 лютого 2008 р.',
      },
      {
        src: `${WM}/5/52/Donetsk_DonNTU_03.jpg`,
        thumb: `${WM}/thumb/5/52/Donetsk_DonNTU_03.jpg/700px-Donetsk_DonNTU_03.jpg`,
        title: '2-й корпус ДонНТУ',
        year: '2008',
        author: 'Andrew Butko',
        license: 'CC BY-SA 3.0',
        desc: 'Другий навчальний корпус університету. Факультети автоматизації, електроенергетики. Зйомка 21 лютого 2008 р.',
      },
    ],
  },
  {
    id: 'campus-area',
    title: 'Студентський сквер та прилегла зона',
    sub: 'Кампус у центрі Донецька · між корпусами',
    photos: [
      {
        src: `${WM}/8/8c/%D0%A1%D0%BA%D0%B2%D0%B5%D1%80_%D1%83_3-%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0_-_panoramio.jpg`,
        thumb: `${WM}/thumb/8/8c/%D0%A1%D0%BA%D0%B2%D0%B5%D1%80_%D1%83_3-%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0_-_panoramio.jpg/900px-%D0%A1%D0%BA%D0%B2%D0%B5%D1%80_%D1%83_3-%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0_-_panoramio.jpg`,
        title: 'Сквер між 3-м корпусом і бібліотекою',
        year: '2013',
        author: 'Валерій Дед',
        license: 'CC BY 3.0',
        desc: 'Студентський сквер у серці кампусу. 48°0\'48.87"N, 37°48\'8.87"E. Місце відпочинку між парами. Літо 2013 — за рік до окупації.',
        wide: true,
      },
    ],
  },
  {
    id: 'library',
    title: 'Науково-технічна бібліотека ДонНТУ',
    sub: 'НТБ · понад 1 500 000 томів · 2 читальних зали',
    photos: [
      {
        src: `${WM}/2/29/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3_-_panoramio.jpg`,
        thumb: `${WM}/thumb/2/29/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3_-_panoramio.jpg/900px-%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3_-_panoramio.jpg`,
        title: 'Будівля бібліотеки ДонНТУ',
        year: '2011',
        author: 'Olya Usova',
        license: 'CC BY 3.0',
        desc: 'Науково-технічна бібліотека ДонНТУ — одна з найбільших технічних бібліотек України. Понад 1,5 млн томів. Зйомка 19 червня 2011 р.',
        wide: true,
      },
      {
        src: `${WM}/a/a4/%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3.jpg`,
        thumb: `${WM}/thumb/a/a4/%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3.jpg/700px-%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3.jpg`,
        title: 'НТБ — нова будівля',
        year: '2013',
        author: 'NatTkachen',
        license: 'CC BY-SA 3.0',
        desc: 'Нова будівля науково-технічної бібліотеки ДонНТУ. Завантажено 2 липня 2013 р. Через рік кампус буде залишено через окупацію.',
      },
    ],
  },
  {
    id: 'city',
    title: 'Донецьк · місто до 2014',
    sub: 'Центр · проспекти · архітектура · мільйонне місто',
    photos: [
      {
        src: `${WM}/3/32/Lenin_square_in_Donetsk_049.jpg`,
        thumb: `${WM}/thumb/3/32/Lenin_square_in_Donetsk_049.jpg/900px-Lenin_square_in_Donetsk_049.jpg`,
        title: 'Площа Леніна — центр Донецька',
        year: '2009',
        author: 'Andrew Butko',
        license: 'CC BY-SA 3.0',
        desc: 'Центральна площа Донецька, вул. Артема. 500 м від ДонНТУ. Культурна пам\'ятка Ворошиловського району. Зйомка 29 вересня 2009 р.',
        wide: true,
      },
      {
        src: `${WM}/5/59/Donetsk_titova_prospekt.jpg`,
        thumb: `${WM}/thumb/5/59/Donetsk_titova_prospekt.jpg/800px-Donetsk_titova_prospekt.jpg`,
        title: 'Проспект Тітова',
        year: '~2010',
        author: 'Wikimedia Commons',
        license: 'CC BY-SA',
        desc: 'Проспект Тітова — один з центральних проспектів. Широкі бульвари, сталінська і радянська архітектура.',
      },
      {
        src: `${WM}/f/fb/2011_%D0%90%D1%80%D1%82%D0%B5%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%83%D0%BB%D0%B8%D1%86%D0%B0_-_panoramio.jpg`,
        thumb: `${WM}/thumb/f/fb/2011_%D0%90%D1%80%D1%82%D0%B5%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%83%D0%BB%D0%B8%D1%86%D0%B0_-_panoramio.jpg/900px-2011_%D0%90%D1%80%D1%82%D0%B5%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%83%D0%BB%D0%B8%D1%86%D0%B0_-_panoramio.jpg`,
        title: 'Вул. Артема — 2011',
        year: '2011',
        author: 'Panoramio',
        license: 'CC BY 3.0',
        desc: 'Вулиця Артема 2011. Саме на цій вулиці, будинок 58 — ДонНТУ. Центральна магістраль Донецька.',
        wide: true,
      },
      {
        src: `${WM}/5/59/2012_%D0%BC%D0%B0%D0%B9_-_panoramio.jpg`,
        thumb: `${WM}/thumb/5/59/2012_%D0%BC%D0%B0%D0%B9_-_panoramio.jpg/800px-2012_%D0%BC%D0%B0%D0%B9_-_panoramio.jpg`,
        title: 'Бульвар Шевченка · травень 2012',
        year: '2012',
        author: 'Panoramio',
        license: 'CC BY 3.0',
        desc: 'Бульвар Шевченка у травні 2012 — за 2 роки до окупації. Місто виглядало живим і зеленим.',
      },
      {
        src: `${WM}/9/99/Gurova_avenue.JPG`,
        thumb: `${WM}/thumb/9/99/Gurova_avenue.JPG/800px-Gurova_avenue.JPG`,
        title: 'Проспект Гурова',
        year: '~2010',
        author: 'Wikimedia Commons',
        license: 'CC BY-SA',
        desc: 'Проспект Гурова — пострадянська архітектура, широкий бульвар з деревами, характерна забудова Донецька.',
      },
      {
        src: `${WM}/a/a8/Oficira_Avenuo_en_Donecko_02.jpg`,
        thumb: `${WM}/thumb/a/a8/Oficira_Avenuo_en_Donecko_02.jpg/800px-Oficira_Avenuo_en_Donecko_02.jpg`,
        title: 'Вулиця Офіцерська',
        year: '~2011',
        author: 'Wikimedia Commons',
        license: 'CC BY-SA',
        desc: 'Вулиця в центрі міста. Донецьк — мільйонне місто, розвинена міська інфраструктура до 2014 р.',
      },
      {
        src: `${WM}/b/bf/Post_office_at_Partizansky_Avenue_in_Donetsk.jpg`,
        thumb: `${WM}/thumb/b/bf/Post_office_at_Partizansky_Avenue_in_Donetsk.jpg/800px-Post_office_at_Partizansky_Avenue_in_Donetsk.jpg`,
        title: 'Пошта на проспекті Партизанському',
        year: '~2010',
        author: 'Wikimedia Commons',
        license: 'CC BY-SA',
        desc: 'Поштамт Донецька на Партизанському проспекті. Архітектура радянського модернізму.',
      },
      {
        src: `${WM}/2/22/2013._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_704.jpg`,
        thumb: `${WM}/thumb/2/22/2013._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_704.jpg/800px-2013._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_704.jpg`,
        title: 'Вулиця Куйбишева · 2013',
        year: '2013',
        author: 'Wikimedia Commons',
        license: 'CC BY-SA',
        desc: 'Вулиця Куйбишева, 2013 рік — останній рік мирного міста. Через рік університет залишить Донецьк.',
      },
      {
        src: `${WM}/7/72/2014._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_%2814024245593%29.jpg`,
        thumb: `${WM}/thumb/7/72/2014._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_%2814024245593%29.jpg/800px-2014._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_%2814024245593%29.jpg`,
        title: 'Бульвар Пушкіна · 2014',
        year: '2014',
        author: 'Wikimedia Commons',
        license: 'CC BY-SA',
        desc: 'Бульвар Пушкіна, 2014. Рік початку окупації. Навесні студенти ДонНТУ ще ходили на пари по цих вулицях.',
        wide: true,
      },
    ],
  },
  {
    id: 'pokrovsk',
    title: 'ДонНТУ в Покровську · 2014–2022',
    sub: 'Перше переміщення · університет у вигнанні',
    photos: [
      {
        src: `${WM}/0/0f/II_DonNTU.jpg`,
        thumb: `${WM}/thumb/0/0f/II_DonNTU.jpg/900px-II_DonNTU.jpg`,
        title: '1-й корпус ДонНТУ в Покровську',
        year: '2014',
        author: 'Sigors',
        license: 'Public domain',
        desc: '12 листопада 2014. 1-й корпус Красноармійського індустріального інституту (нині — ДонНТУ в Покровську). Університет відновив роботу вже через 2 місяці після евакуації.',
        wide: true,
      },
    ],
  },
];

/* ── Lightbox ── */
const GalleryLightbox = ({ photo, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  React.useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [hasPrev, hasNext]);

  if (!photo) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.94)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '1rem',
        padding: '1rem',
      }}
    >
      {/* Nav prev */}
      {hasPrev && (
        <button
          onClick={e => { e.stopPropagation(); onPrev(); }}
          style={{
            position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            color: 'var(--t1)', fontSize: '1.5rem', width: '2.5rem', height: '2.5rem',
            cursor: 'pointer', borderRadius: '2px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >‹</button>
      )}
      {/* Nav next */}
      {hasNext && (
        <button
          onClick={e => { e.stopPropagation(); onNext(); }}
          style={{
            position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
            color: 'var(--t1)', fontSize: '1.5rem', width: '2.5rem', height: '2.5rem',
            cursor: 'pointer', borderRadius: '2px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >›</button>
      )}
      {/* Close */}
      <button
        onClick={e => { e.stopPropagation(); onClose(); }}
        style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'none', border: '1px solid rgba(255,255,255,0.2)',
          color: 'var(--t2)', fontSize: '0.875rem', width: '2rem', height: '2rem',
          cursor: 'pointer', borderRadius: '2px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>

      {/* Image */}
      <img
        src={photo.src}
        alt={photo.title}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw', maxHeight: '78vh',
          objectFit: 'contain', display: 'block',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        onError={e => { e.target.src = photo.thumb; }}
      />

      {/* Caption */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '680px', textAlign: 'center',
          display: 'flex', flexDirection: 'column', gap: '0.35rem',
        }}
      >
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--t1)' }}>
          {photo.title}
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--t3)' }}>
          {photo.year} · {photo.author} · {photo.license}
        </div>
        <div style={{ fontFamily: 'var(--ui)', fontSize: '0.75rem', color: 'var(--t2)', lineHeight: 1.55 }}>
          {photo.desc}
        </div>
      </div>
    </div>
  );
};

/* ── Anchor nav bar ── */
const GalleryAnchors = ({ sections, activeId }) => {
  const scrollTo = (id) => {
    const el = document.getElementById('gsec-' + id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', gap: '0.4rem',
      padding: '0.75rem 0', marginBottom: '1.5rem',
      borderBottom: '1px solid var(--b1)',
      position: 'sticky', top: 0, zIndex: 20,
      background: 'var(--bg)',
      backdropFilter: 'blur(8px)',
    }}>
      {sections.map(s => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          style={{
            fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.07em',
            background: activeId === s.id ? 'rgba(196,132,58,0.12)' : 'none',
            border: '1px solid ' + (activeId === s.id ? 'var(--amber)' : 'var(--b2)'),
            color: activeId === s.id ? 'var(--amber)' : 'var(--t3)',
            padding: '0.3rem 0.65rem', borderRadius: '2px', cursor: 'pointer',
            transition: 'all 0.2s',
            display: 'flex', alignItems: 'center', gap: '0.3rem',
          }}
        >
          <span style={{ opacity: 0.5 }}>#</span>
          {s.id}
        </button>
      ))}
    </div>
  );
};

/* ── Photo card ── */
const GalleryCard = ({ photo, onClick }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  return (
    <div
      onClick={() => onClick(photo)}
      style={{
        cursor: 'pointer', position: 'relative', overflow: 'hidden',
        background: 'var(--s1)', borderRadius: '2px',
        border: '1px solid var(--b1)',
        gridColumn: photo.wide ? 'span 2' : 'span 1',
        aspectRatio: photo.wide ? '21/9' : '4/3',
        transition: 'border-color 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--amber)';
        e.currentTarget.style.transform = 'scale(1.005)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--b1)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {/* Shimmer */}
      {!loaded && !error && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, var(--s1) 0%, var(--s2) 50%, var(--s1) 100%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.4s ease infinite',
        }} />
      )}
      {!error && (
        <img
          src={photo.thumb}
          alt={photo.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => { setError(true); setLoaded(true); }}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
      )}
      {error && (
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '0.4rem',
        }}>
          <span style={{ fontSize: '1.5rem', opacity: 0.15 }}>⊡</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.45rem', color: 'var(--t4)', letterSpacing: '0.06em' }}>
            ФОТО НЕДОСТУПНЕ
          </span>
        </div>
      )}
      {/* Overlay */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
        padding: '1.25rem 0.75rem 0.5rem',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.4s',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '0.8125rem', color: '#fff', lineHeight: 1.3 }}>
          {photo.title}
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.45rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.07em', marginTop: '0.2rem' }}>
          {photo.year} · {photo.author} · {photo.license}
        </div>
      </div>
      {/* Zoom hint */}
      <div style={{
        position: 'absolute', top: '0.5rem', right: '0.5rem',
        background: 'rgba(0,0,0,0.6)', padding: '0.2rem 0.4rem',
        fontFamily: 'var(--mono)', fontSize: '0.4rem', color: 'rgba(255,255,255,0.5)',
        letterSpacing: '0.06em', borderRadius: '2px',
        opacity: loaded ? 0.7 : 0,
      }}>
        ⊞ ВІДКРИТИ
      </div>
    </div>
  );
};

/* ── Main Gallery Page ── */
const GalleryPage = ({ onNavigate }) => {
  const [lightbox, setLightbox] = React.useState(null); // { photo, globalIndex }
  const [activeSection, setActiveSection] = React.useState(null);

  // Flatten all photos for lightbox prev/next
  const allPhotos = GALLERY_SECTIONS.flatMap(s => s.photos);

  const openPhoto = (photo) => {
    const idx = allPhotos.findIndex(p => p.src === photo.src);
    setLightbox({ photo, idx });
  };

  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () => {
    if (!lightbox || lightbox.idx <= 0) return;
    const idx = lightbox.idx - 1;
    setLightbox({ photo: allPhotos[idx], idx });
  };
  const nextPhoto = () => {
    if (!lightbox || lightbox.idx >= allPhotos.length - 1) return;
    const idx = lightbox.idx + 1;
    setLightbox({ photo: allPhotos[idx], idx });
  };

  // Intersection observer for active section highlight
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.replace('gsec-', ''));
          }
        });
      },
      { threshold: 0.2 }
    );
    GALLERY_SECTIONS.forEach(s => {
      const el = document.getElementById('gsec-' + s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const totalPhotos = allPhotos.length;

  return (
    <div className="page">
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <span className="lbl">ФОТОГАЛЕРЕЯ · WIKIMEDIA COMMONS · CC</span>
        <h2 className="serif" style={{ fontSize: '1.75rem', fontWeight: 400, marginTop: '0.5rem' }}>
          Фотоархів ДонНТУ та Донецька
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <Stat v={String(totalPhotos)} label="фотографій" />
          <Stat v={GALLERY_SECTIONS.length} label="розділів" />
          <Stat v="2005–2014" label="основний період" />
          <Stat v="CC" label="вільна ліцензія" />
        </div>
        <p className="body" style={{ marginTop: '0.75rem', maxWidth: '52ch', color: 'var(--t2)' }}>
          Реальні фото з Wikimedia Commons — університетські корпуси, бібліотека,
          студентський сквер, вулиці Донецька до окупації. Клікніть на фото для перегляду
          у повному розмірі та опису.
        </p>
      </div>

      {/* Anchor nav */}
      <GalleryAnchors sections={GALLERY_SECTIONS} activeId={activeSection} />

      {/* Sections */}
      {GALLERY_SECTIONS.map(section => (
        <div
          key={section.id}
          id={'gsec-' + section.id}
          style={{ marginBottom: '3rem', scrollMarginTop: '3rem' }}
        >
          {/* Section header */}
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.45rem', color: 'var(--amber)',
                letterSpacing: '0.08em', opacity: 0.7,
              }}>
                #{section.id}
              </span>
              <span className="lbl" style={{ color: 'var(--t3)' }}>
                {section.photos.length} фото
              </span>
            </div>
            <h3 style={{
              fontFamily: 'var(--serif)', fontSize: '1.25rem', fontWeight: 400,
              color: 'var(--t1)', margin: '0.25rem 0 0.25rem',
            }}>
              {section.title}
            </h3>
            <p style={{
              fontFamily: 'var(--ui)', fontSize: '0.75rem', color: 'var(--t3)',
              margin: 0,
            }}>
              {section.sub}
            </p>
          </div>

          {/* Photo grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.75rem',
          }}>
            {section.photos.map((photo, i) => (
              <GalleryCard key={i} photo={photo} onClick={openPhoto} />
            ))}
          </div>
        </div>
      ))}

      {/* Attribution footer */}
      <div style={{
        marginTop: '2rem', padding: '1rem',
        border: '1px solid var(--b1)', borderRadius: '2px',
        background: 'var(--s1)',
      }}>
        <span className="lbl" style={{ color: 'var(--t3)' }}>АТРИБУЦІЯ · WIKIMEDIA COMMONS</span>
        <p style={{ fontFamily: 'var(--ui)', fontSize: '0.6875rem', color: 'var(--t3)', margin: '0.5rem 0 0', lineHeight: 1.6 }}>
          Усі фото з{' '}
          <a
            href="https://commons.wikimedia.org/wiki/Category:Donetsk_National_Technical_University"
            target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--amber)' }}
          >
            Wikimedia Commons
          </a>{' '}
          під вільними ліцензіями CC BY / CC BY-SA / Public Domain.
          Авторство: Andrew Butko (CC BY-SA 3.0), Steschke (CC BY-SA 2.0 DE),
          Olya Usova (CC BY 3.0), NatTkachen (CC BY-SA 3.0), Валерій Дед (CC BY 3.0),
          Sigors (Public domain) та інші.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <GalleryLightbox
          photo={lightbox.photo}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
          hasPrev={lightbox.idx > 0}
          hasNext={lightbox.idx < allPhotos.length - 1}
        />
      )}
    </div>
  );
};
