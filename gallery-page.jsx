/* Gallery Page v3 — fixed thumbnails (Wikimedia standard sizes), fully responsive */
/* Три ери: Донецьк 2005-2014 · Покровськ 2014-2022 · Переміщення 2022+ */

const WM  = 'https://upload.wikimedia.org/wikipedia/commons';
/* Wikimedia дозволяє лише стандартні розміри thumb (320/640/800/1024/1280/1600).
   Не всі генеруються наперед — 1280 працює для всіх. */
const WMthumb = (path, size = 1280) => {
  const fname = path.split('/').pop();
  return `${WM}/thumb/${path}/${size}px-${fname}`;
};
const DNU = 'https://donntu.edu.ua/wp-content/uploads';

/* ─── ЕРИ ─── */
const ERAS = [
  { id:'donetsk',  label:'ДОНЕЦЬК',          period:'1921–2014', color:'var(--amber)', width:65, desc:'93 роки · вул. Артема 58' },
  { id:'pokrovsk', label:'ПОКРОВСЬК',        period:'2014–2022', color:'var(--slate)', width:22, desc:'8 років · пл. Шибанкова 2' },
  { id:'modern',   label:'ЛУЦЬК / ДРОГОБИЧ', period:'2022–',     color:'var(--sage)',  width:13, desc:'гібридний кампус' },
];

/* helper для Wikimedia фото */
const wmPhoto = (path, meta) => ({
  src:   `${WM}/${path}`,
  thumb: WMthumb(path, 1280),
  ...meta,
});

/* helper для donntu.edu.ua */
const dnuPhoto = (year, file, meta) => ({
  src:   `${DNU}/${year}/${file}.jpg`,
  thumb: `${DNU}/${year}/${file}-250x200.jpg`,
  year:  String(year).slice(0,4),
  author:'donntu.edu.ua', license:'© DonNTU',
  ...meta,
});

/* ─── СЕКЦІЇ З ФОТО ─── */
const GALLERY_SECTIONS = [
  /* ════════════ ДОНЕЦЬК ════════════ */
  {
    id:'campus-main', era:'donetsk',
    title:'Головний корпус · вул. Артема 58',
    sub:'Сталінський класицизм 1936–1958 · П-подібна будівля з вежею · ~42 000 м²',
    photos:[
      wmPhoto('6/6e/Donetsk-National-Technical-University_Ukraine.jpg', {
        title:'Головний корпус — вигляд з вул. Артема',
        year:'2005', author:'Steschke', license:'CC BY-SA 2.0 DE',
        desc:'Парадний фасад ДонНТУ з вул. Артема. Монументальна колонада, центральна вежа. Архітектурний стиль — соціалістичний класицизм.',
        wide:true,
      }),
      wmPhoto('5/51/Donetsk_DonNTU_01.jpg', {
        title:'1-й корпус · зима 2008',
        year:'2008', author:'Andrew Butko', license:'CC BY-SA 3.0',
        desc:'Перший корпус — пам\'ятка архітектури України № 14-101-0012. Зйомка 21 лютого 2008 р.',
      }),
      wmPhoto('2/25/Donetsk_DonNTU_02.jpg', {
        title:'1-й корпус · боковий фасад',
        year:'2008', author:'Andrew Butko', license:'CC BY-SA 3.0',
        desc:'Бічне крило П-подібної будівлі головного корпусу.',
      }),
      wmPhoto('5/52/Donetsk_DonNTU_03.jpg', {
        title:'2-й корпус ДонНТУ',
        year:'2008', author:'Andrew Butko', license:'CC BY-SA 3.0',
        desc:'Другий навчальний корпус. Факультети автоматизації та електроенергетики.',
      }),
    ],
  },
  {
    id:'city-donetsk', era:'donetsk',
    title:'Донецьк · місто до 2014',
    sub:'Центр · проспекти · архітектура · понад мільйон мешканців',
    photos:[
      wmPhoto('3/32/Lenin_square_in_Donetsk_049.jpg', {
        title:'Площа Леніна · 2009',
        year:'2009', author:'Andrew Butko', license:'CC BY-SA 3.0',
        desc:'Центральна площа Донецька на вул. Артема — тій самій, де ДонНТУ (будинок 58). 500 м від університету.',
        wide:true,
      }),
      wmPhoto('5/59/Donetsk_titova_prospekt.jpg', {
        title:'Проспект Тітова',
        year:'~2010', author:'Wikimedia Commons', license:'CC BY-SA',
        desc:'Один із головних проспектів Донецька. Широкі бульвари, радянська і пострадянська архітектура.',
      }),
    ],
  },

  /* ════════════ ПОКРОВСЬК ════════════ */
  {
    id:'pokrovsk-campus', era:'pokrovsk',
    title:'ДонНТУ у Покровську · корпуси',
    sub:'Індустріальний інститут · пл. Шибанкова 2 · 2014–2022',
    photos:[
      wmPhoto('7/71/DonNTU_%28Pokrovsk%29_2021.jpg', {
        title:'Головний корпус у Покровську · 2021',
        year:'2021', author:'Leon II', license:'CC BY-SA 4.0',
        desc:'Головна будівля ДонНТУ у Покровську — фасад. 31 серпня 2021. Будівля 1959 р. на центральній площі міста.',
        wide:true,
      }),
      wmPhoto('0/0f/II_DonNTU.jpg', {
        title:'1-й корпус · перші тижні 2014',
        year:'2014', author:'Sigors', license:'Public domain',
        desc:'12 листопада 2014. Університет відновив роботу через 2 місяці після евакуації з Донецька. Красноармійський індустріальний інститут.',
      }),
      wmPhoto('6/66/Students_of_DonNTU_on_21-03-2017.jpg', {
        title:'Студенти ДонНТУ з гуртом Антитіла · 2017',
        year:'21.03.2017', author:'Frikolor', license:'CC BY-SA 4.0',
        desc:'Зустріч студентів ДонНТУ у Покровську з гуртом Антитіла Тараса Тополі. 21 березня 2017 р.',
        wide:true,
      }),
    ],
  },
  {
    id:'pokrovsk-students', era:'pokrovsk',
    title:'Студентське життя · Дебют першокурсника 2019',
    sub:'Покровськ · 23 листопада 2019 · © donntu.edu.ua',
    photos:[
      dnuPhoto(2019, '11/IMG_0398', { title:'Дебют першокурсника 2019',
        desc:'Щорічний фестиваль талантів «Дебют першокурсника» у Покровську. Традиція, що народилась у Донецьку і продовжилась у вигнанні.' }),
      dnuPhoto(2019, '11/IMG_0419', { title:'Виступ на сцені',
        desc:'Студентський концерт у великому залі. Перший рік на новому місці — вже з повноцінною культурною програмою.' }),
      dnuPhoto(2019, '11/IMG_0464', { title:'Перший курс · таланти й ентузіазм',
        desc:'Першокурсники демонструють хореографічні та вокальні номери.' }),
      dnuPhoto(2019, '11/IMG_0477', { title:'Хореографічний номер',
        desc:'Хореографічний виступ студентів ДонНТУ. Традиція «Дебюту» з 1990-х.' }),
      dnuPhoto(2019, '11/IMG_0484', { title:'Сцена актового залу',
        desc:'Актовий зал ДонНТУ у Покровську. Студенти виступають перед товаришами, викладачами, батьками.' }),
      dnuPhoto(2019, '11/IMG_0501', { title:'Вокальні виступи',
        desc:'Вокальні номери. ДонНТУ — університет інженерний, зі справжнім мистецьким духом.' }),
      dnuPhoto(2019, '11/IMG_0525', { title:'Фінальна сцена',
        desc:'Фінальна частина Дебюту. Університет залишається живим і яскравим.' }),
      dnuPhoto(2019, '11/IMG_0537', { title:'Публіка та атмосфера',
        desc:'Повний зал. 2019 рік — університет пустив коріння у Покровську.' }),
      dnuPhoto(2019, '11/IMG_0544', { title:'Костюмований номер',
        desc:'Костюмовані виступи першокурсників — кожен факультет показує своє.' }),
      dnuPhoto(2019, '11/IMG_0569', { title:'Нагородження',
        desc:'Нагородження переможців. Журі оцінювало хореографію, вокал, акторську майстерність.' }),
      dnuPhoto(2019, '11/IMG_0570', { title:'Переможці Дебют 2019',
        desc:'Переможці Дебюту 2019. Університет виховує не лише інженерів, а й людей.', wide:true }),
      dnuPhoto(2019, '11/IMG_0582', { title:'Спільне фото · учасники і журі',
        desc:'Групове фото учасників та організаторів. Ці люди — обличчя ДонНТУ поза Донецьком.' }),
    ],
  },
  {
    id:'pokrovsk-city', era:'pokrovsk',
    title:'Покровськ · місто до війни',
    sub:'Раніше Красноармійськ · Донецька обл. · ~60 000 мешканців',
    photos:[
      wmPhoto('0/06/Chervonoarmijsk_city_center_%283%29.JPG', {
        title:'Центр Красноармійська (Покровська) · 2012',
        year:'2012', author:'Wikimedia Commons', license:'CC BY-SA',
        desc:'Центр міста влітку 2012. Сюди переїде ДонНТУ через 2 роки. Промисловий центр Донеччини.',
        wide:true,
      }),
      wmPhoto('2/2e/Krasnoarmeysk5.jpg', {
        title:'В\'їзд до Красноармійська · 2009',
        year:'2009', author:'Aleksandr Sidorchenko', license:'CC BY 3.0',
        desc:'В\'їзд до міста, 2009 рік. Невеличке промислове місто, де відкриється новий кампус ДонНТУ в 2014.',
      }),
      wmPhoto('b/b2/Triple-arch_ww2-manument_pokrvosk_ukraine2.jpg', {
        title:'Меморіал Другої світової · 2020',
        year:'2020', author:'Wikimedia Commons', license:'CC BY-SA 4.0',
        desc:'Тріумфальна арка — меморіал Другої світової на південній окраїні Покровська. 14 жовтня 2020. Через 2 роки місто знову стане прифронтовим.',
      }),
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   КОМПОНЕНТИ
═══════════════════════════════════════════════════════ */

/* ── Hook для адаптивності ── */
const useViewport = () => {
  const [w, setW] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  React.useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return { width: w, isMobile: w < 640, isTablet: w < 900 };
};

/* ── Таймлайн ── */
const GalleryTimeline = ({ activeEra, onEraClick, isMobile }) => (
  <div style={{ marginBottom:'1.5rem' }}>
    <span className="lbl" style={{ display:'block', marginBottom:'0.625rem' }}>
      ХРОНОЛОГІЯ · {isMobile ? 'ТАПНИ' : 'КЛІКНИ'} ДЛЯ ФІЛЬТРА
    </span>
    <div style={{
      display:'flex', gap:'3px',
      height: isMobile ? '44px' : '38px',
      borderRadius:'3px', overflow:'hidden',
    }}>
      {ERAS.map(era => (
        <div
          key={era.id}
          onClick={() => onEraClick(era.id === activeEra ? null : era.id)}
          title={era.label + ' · ' + era.period}
          style={{
            width: era.width + '%',
            background: activeEra === era.id
              ? era.color
              : activeEra ? era.color + '33' : era.color + '66',
            cursor:'pointer',
            display:'flex', flexDirection:'column',
            alignItems:'center', justifyContent:'center',
            padding:'0 0.4rem',
            transition:'background 0.25s',
            overflow:'hidden',
            minWidth: 0,
          }}
        >
          <span style={{
            fontFamily:'var(--mono)',
            fontSize: isMobile ? '0.42rem' : '0.48rem',
            fontWeight:700, letterSpacing:'0.08em', color:'#fff',
            textShadow:'0 1px 2px rgba(0,0,0,0.5)',
            whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
            maxWidth:'100%',
          }}>
            {era.label}
          </span>
          {!isMobile && (
            <span style={{
              fontFamily:'var(--mono)', fontSize:'0.4rem',
              color:'rgba(255,255,255,0.75)',
              whiteSpace:'nowrap',
            }}>
              {era.period}
            </span>
          )}
        </div>
      ))}
    </div>
    {/* Era detail row */}
    <div style={{ display:'flex', gap:'0.4rem', marginTop:'0.5rem', flexWrap:'wrap' }}>
      {ERAS.map(era => (
        <button
          key={era.id}
          onClick={() => onEraClick(era.id === activeEra ? null : era.id)}
          style={{
            fontFamily:'var(--mono)', fontSize:'0.45rem', letterSpacing:'0.07em',
            background: activeEra === era.id ? era.color + '22' : 'none',
            border:'1px solid ' + (activeEra === era.id ? era.color : 'var(--b2)'),
            color: activeEra === era.id ? era.color : 'var(--t3)',
            padding:'0.25rem 0.5rem', borderRadius:'2px', cursor:'pointer',
            transition:'all 0.15s',
          }}
        >
          {activeEra === era.id ? '✕ ' : ''}{era.period} · {era.desc}
        </button>
      ))}
    </div>
  </div>
);

/* ── Anchor nav — горизонтальний скрол на мобілі ── */
const GalleryAnchors = ({ sections, activeId }) => {
  const scrollTo = (id) => {
    const el = document.getElementById('gsec-' + id);
    if (el) el.scrollIntoView({ behavior:'smooth', block:'start' });
  };
  return (
    <div style={{
      display:'flex', gap:'0.4rem',
      padding:'0.75rem 0',
      marginBottom:'1.5rem',
      borderBottom:'1px solid var(--b1)',
      position:'sticky', top:0, zIndex:20,
      background:'var(--bg)',
      backdropFilter:'blur(8px)',
      WebkitBackdropFilter:'blur(8px)',
      overflowX:'auto', overflowY:'hidden',
      scrollbarWidth:'thin',
    }}>
      {sections.map(s => {
        const era = ERAS.find(e => e.id === s.era);
        const active = activeId === s.id;
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            style={{
              fontFamily:'var(--mono)', fontSize:'0.5rem', letterSpacing:'0.07em',
              background: active ? (era ? era.color + '22' : 'rgba(196,132,58,0.12)') : 'none',
              border:'1px solid ' + (active ? (era ? era.color : 'var(--amber)') : 'var(--b2)'),
              color: active ? (era ? era.color : 'var(--amber)') : 'var(--t3)',
              padding:'0.3rem 0.65rem', borderRadius:'2px', cursor:'pointer',
              transition:'all 0.2s',
              display:'flex', alignItems:'center', gap:'0.3rem',
              flexShrink:0,
              whiteSpace:'nowrap',
            }}
          >
            <span style={{ opacity:0.5 }}>#</span>{s.id}
          </button>
        );
      })}
    </div>
  );
};

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
    <div onClick={onClose} style={{
      position:'fixed', inset:0, zIndex:9999,
      background:'rgba(0,0,0,0.95)',
      display:'flex', alignItems:'center', justifyContent:'center',
      flexDirection:'column', gap:'1rem',
      padding:'1rem',
    }}>
      {hasPrev && (
        <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{
          position:'absolute', left:'0.5rem', top:'50%', transform:'translateY(-50%)',
          background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)',
          color:'var(--t1)', fontSize:'1.5rem', width:'2.5rem', height:'2.5rem',
          cursor:'pointer', borderRadius:'2px',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>&#8249;</button>
      )}
      {hasNext && (
        <button onClick={e => { e.stopPropagation(); onNext(); }} style={{
          position:'absolute', right:'0.5rem', top:'50%', transform:'translateY(-50%)',
          background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)',
          color:'var(--t1)', fontSize:'1.5rem', width:'2.5rem', height:'2.5rem',
          cursor:'pointer', borderRadius:'2px',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>&#8250;</button>
      )}
      <button onClick={e => { e.stopPropagation(); onClose(); }} style={{
        position:'absolute', top:'0.75rem', right:'0.75rem',
        background:'rgba(0,0,0,0.6)', border:'1px solid rgba(255,255,255,0.2)',
        color:'var(--t2)', fontSize:'0.875rem', width:'2rem', height:'2rem',
        cursor:'pointer', borderRadius:'2px',
        display:'flex', alignItems:'center', justifyContent:'center',
        zIndex:1,
      }}>&#10005;</button>

      <img
        src={photo.src}
        alt={photo.title}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth:'92vw', maxHeight:'70vh',
          objectFit:'contain', display:'block',
          border:'1px solid rgba(255,255,255,0.08)',
        }}
        onError={e => {
          if (e.target.src !== photo.thumb && photo.thumb) e.target.src = photo.thumb;
        }}
      />
      <div onClick={e => e.stopPropagation()} style={{
        maxWidth:'680px', textAlign:'center',
        display:'flex', flexDirection:'column', gap:'0.4rem',
        padding:'0 1rem',
      }}>
        <div style={{ fontFamily:'var(--serif)', fontSize:'1rem', color:'var(--t1)' }}>
          {photo.title}
        </div>
        <div style={{ fontFamily:'var(--mono)', fontSize:'0.5rem', letterSpacing:'0.08em', color:'var(--t3)' }}>
          {photo.year} &middot; {photo.author} &middot; {photo.license}
        </div>
        <div style={{ fontFamily:'var(--ui)', fontSize:'0.75rem', color:'var(--t2)', lineHeight:1.55 }}>
          {photo.desc}
        </div>
      </div>
    </div>
  );
};

/* ── Photo card ── */
const GalleryCard = ({ photo, onClick, span }) => {
  const [loaded, setLoaded] = React.useState(false);
  const [error,  setError]  = React.useState(false);
  const [retry,  setRetry]  = React.useState(0);

  /* при error — спробувати ще раз з оригіналом */
  const imgSrc = error && retry === 0 && photo.src ? photo.src : photo.thumb;

  return (
    <div
      onClick={() => onClick(photo)}
      style={{
        cursor:'pointer', position:'relative', overflow:'hidden',
        background:'var(--s1)', borderRadius:'2px',
        border:'1px solid var(--b1)',
        gridColumn: span > 1 ? `span ${span}` : 'auto',
        aspectRatio: span > 1 ? '21/9' : '4/3',
        transition:'border-color 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--amber)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--b1)'; }}
    >
      {!loaded && (
        <div style={{
          position:'absolute', inset:0,
          background:'linear-gradient(90deg, var(--s1) 0%, var(--s2) 50%, var(--s1) 100%)',
          backgroundSize:'200% 100%',
          animation:'shimmer 1.4s ease infinite',
        }} />
      )}
      <img
        key={retry + (error ? '_err' : '')}
        src={imgSrc}
        alt={photo.title}
        loading="lazy"
        decoding="async"
        onLoad={() => { setLoaded(true); setError(false); }}
        onError={() => {
          if (retry === 0 && photo.src && photo.src !== photo.thumb) {
            setRetry(1); setError(true);
          } else {
            setError(true); setLoaded(true);
          }
        }}
        style={{
          width:'100%', height:'100%',
          objectFit:'cover', display:'block',
          opacity: loaded && !error ? 1 : 0,
          transition:'opacity 0.5s ease',
        }}
      />
      {error && loaded && (
        <div style={{
          position:'absolute', inset:0,
          display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
          gap:'0.5rem', padding:'1rem', textAlign:'center',
        }}>
          <span style={{ fontSize:'1.5rem', opacity:0.2 }}>&#9633;</span>
          <span style={{ fontFamily:'var(--mono)', fontSize:'0.45rem', color:'var(--t3)', letterSpacing:'0.06em' }}>
            ФОТО НЕДОСТУПНЕ
          </span>
          <span style={{ fontFamily:'var(--serif)', fontSize:'0.65rem', color:'var(--t2)', lineHeight:1.4 }}>
            {photo.title}
          </span>
        </div>
      )}
      {!error && (
        <>
          <div style={{
            position:'absolute', bottom:0, left:0, right:0,
            background:'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
            padding:'1.25rem 0.75rem 0.55rem',
            opacity: loaded ? 1 : 0,
            transition:'opacity 0.4s',
            pointerEvents:'none',
          }}>
            <div style={{ fontFamily:'var(--serif)', fontSize:'0.8rem', color:'#fff', lineHeight:1.3 }}>
              {photo.title}
            </div>
            <div style={{
              fontFamily:'var(--mono)', fontSize:'0.42rem',
              color:'rgba(255,255,255,0.55)', letterSpacing:'0.07em',
              marginTop:'0.2rem',
            }}>
              {photo.year} &middot; {photo.author}
            </div>
          </div>
          <div style={{
            position:'absolute', top:'0.4rem', right:'0.4rem',
            background:'rgba(0,0,0,0.55)', padding:'0.18rem 0.4rem',
            fontFamily:'var(--mono)', fontSize:'0.4rem',
            color:'rgba(255,255,255,0.65)',
            letterSpacing:'0.06em', borderRadius:'2px',
            opacity: loaded ? 0.85 : 0,
            transition:'opacity 0.4s',
            pointerEvents:'none',
          }}>
            ⊕
          </div>
        </>
      )}
    </div>
  );
};

/* ── Era badge ── */
const EraBadge = ({ eraId }) => {
  const era = ERAS.find(e => e.id === eraId);
  if (!era) return null;
  return (
    <span style={{
      fontFamily:'var(--mono)', fontSize:'0.45rem', letterSpacing:'0.1em',
      color: era.color, background: era.color + '18',
      border:'1px solid ' + era.color + '44',
      padding:'0.18rem 0.5rem', borderRadius:'2px',
      whiteSpace:'nowrap',
    }}>
      {era.label} · {era.period}
    </span>
  );
};

/* ═══ Main Gallery Page ═══ */
const GalleryPage = ({ onNavigate }) => {
  const { width, isMobile, isTablet } = useViewport();
  const [lightbox,      setLightbox]      = React.useState(null);
  const [activeSection, setActiveSection] = React.useState(null);
  const [activeEra,     setActiveEra]     = React.useState(null);

  const visibleSections = activeEra
    ? GALLERY_SECTIONS.filter(s => s.era === activeEra)
    : GALLERY_SECTIONS;

  const allPhotos = visibleSections.flatMap(s => s.photos);

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

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActiveSection(e.target.id.replace('gsec-', ''));
        });
      },
      { threshold: 0.15, rootMargin:'-100px 0px -50% 0px' }
    );
    GALLERY_SECTIONS.forEach(s => {
      const el = document.getElementById('gsec-' + s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [visibleSections.length]);

  const totalPhotos = GALLERY_SECTIONS.reduce((n, s) => n + s.photos.length, 0);

  /* Адаптивна сітка: на мобілі 1 колонка, планшет 2, десктоп auto-fill */
  const gridCols = isMobile ? 1 : isTablet ? 2 : 0;
  const gridTemplate = gridCols
    ? `repeat(${gridCols}, 1fr)`
    : 'repeat(auto-fill, minmax(260px, 1fr))';

  return (
    <div className="page" style={{ paddingLeft: isMobile ? '0.75rem' : undefined, paddingRight: isMobile ? '0.75rem' : undefined }}>
      {/* Header */}
      <div style={{ marginBottom:'1.5rem' }}>
        <span className="lbl">ФОТОАРХІВ · 2005–2021</span>
        <h2 className="serif" style={{
          fontSize: isMobile ? '1.4rem' : '1.75rem',
          fontWeight:400, marginTop:'0.5rem', lineHeight:1.2,
        }}>
          ДонНТУ у фотографіях
        </h2>
        <div style={{
          display:'flex', gap: isMobile ? '0.75rem' : '1.5rem',
          marginTop:'0.75rem', flexWrap:'wrap',
        }}>
          <Stat v={String(totalPhotos)} label="фото" />
          <Stat v={String(GALLERY_SECTIONS.length)} label="розділів" />
          <Stat v="3" label="ери" />
          {!isMobile && <Stat v="2005–2021" label="часовий діапазон" />}
        </div>
      </div>

      {/* Timeline filter */}
      <GalleryTimeline activeEra={activeEra} onEraClick={setActiveEra} isMobile={isMobile} />

      {/* Anchor nav */}
      <GalleryAnchors sections={visibleSections} activeId={activeSection} />

      {/* Sections */}
      {visibleSections.map(section => (
        <div
          key={section.id}
          id={'gsec-' + section.id}
          style={{ marginBottom:'2.5rem', scrollMarginTop:'4rem' }}
        >
          <div style={{ marginBottom:'0.9rem' }}>
            <div style={{
              display:'flex', alignItems:'center', gap:'0.5rem',
              flexWrap:'wrap', marginBottom:'0.35rem',
            }}>
              <EraBadge eraId={section.era} />
              <span className="lbl" style={{ color:'var(--t3)' }}>
                {section.photos.length} фото
              </span>
              <span style={{
                fontFamily:'var(--mono)', fontSize:'0.42rem',
                color:'var(--t4)', letterSpacing:'0.08em', opacity:0.6,
              }}>
                #{section.id}
              </span>
            </div>
            <h3 style={{
              fontFamily:'var(--serif)',
              fontSize: isMobile ? '1.05rem' : '1.25rem',
              fontWeight:400, color:'var(--t1)',
              margin:'0 0 0.25rem', lineHeight:1.25,
            }}>
              {section.title}
            </h3>
            <p style={{
              fontFamily:'var(--ui)', fontSize:'0.72rem',
              color:'var(--t3)', margin:0, lineHeight:1.45,
            }}>
              {section.sub}
            </p>
          </div>

          <div style={{
            display:'grid',
            gridTemplateColumns: gridTemplate,
            gap:'0.75rem',
          }}>
            {section.photos.map((photo, i) => (
              <GalleryCard
                key={i}
                photo={photo}
                onClick={openPhoto}
                span={isMobile ? 1 : (photo.wide ? 2 : 1)}
              />
            ))}
          </div>
        </div>
      ))}

      {/* Attribution footer */}
      <div style={{
        marginTop:'2rem', padding:'1rem',
        border:'1px solid var(--b1)', borderRadius:'2px',
        background:'var(--s1)',
      }}>
        <span className="lbl" style={{ color:'var(--t3)' }}>АТРИБУЦІЯ · ДЖЕРЕЛА</span>
        <p style={{
          fontFamily:'var(--ui)', fontSize:'0.68rem',
          color:'var(--t3)', margin:'0.5rem 0 0', lineHeight:1.6,
        }}>
          Wikimedia Commons (CC BY/CC BY-SA/Public domain):
          Andrew Butko, Steschke, Sigors, Leon II, Frikolor, Aleksandr Sidorchenko.
          Студентські фото: <a
            href="https://donntu.edu.ua/main/debyut-pershokursnika-2019-studenti-donntu-vkotre-vrazili-svo%D1%97mi-chislennimi-talantami.html"
            target="_blank" rel="noopener noreferrer"
            style={{ color:'var(--amber)' }}
          >donntu.edu.ua</a> &copy; ДонНТУ, 2019.
        </p>
      </div>

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

window.GalleryPage = GalleryPage;
