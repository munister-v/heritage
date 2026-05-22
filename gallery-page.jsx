/* Gallery Page v2 — Wikimedia Commons CC + donntu.edu.ua */
/* Три ери: Донецьк 2005-2014 · Покровськ 2014-2022 · Переміщення 2022+ */

const WM  = 'https://upload.wikimedia.org/wikipedia/commons';
const DNU = 'https://donntu.edu.ua/wp-content/uploads';

/* ─── ЕРИ ─── */
const ERAS = [
  {
    id: 'donetsk',
    label: 'ДОНЕЦЬК',
    period: '1921–2014',
    years: [1921, 2014],
    color: 'var(--amber)',
    width: 65,
    desc: '93 роки · вул. Артема 58',
  },
  {
    id: 'pokrovsk',
    label: 'ПОКРОВСЬК',
    period: '2014–2022',
    years: [2014, 2022],
    color: 'var(--slate)',
    width: 22,
    desc: '8 років · пл. Шибанкова 2',
  },
  {
    id: 'modern',
    label: 'ЛУЦЬК / ДРОГОБИЧ',
    period: '2022–',
    years: [2022, 2026],
    color: 'var(--sage)',
    width: 13,
    desc: 'гібридний кампус',
  },
];

/* ─── ФОТО ─── */
const GALLERY_SECTIONS = [
  /* ════════════ ДОНЕЦЬК ════════════ */
  {
    id: 'campus-main',
    era: 'donetsk',
    title: 'Головний корпус · вул. Артема 58',
    sub: 'Сталінський класицизм 1936–1958 · П-подібна будівля з вежею · ~42 000 м²',
    photos: [
      {
        src:   `${WM}/6/6e/Donetsk-National-Technical-University_Ukraine.jpg`,
        thumb: `${WM}/thumb/6/6e/Donetsk-National-Technical-University_Ukraine.jpg/900px-Donetsk-National-Technical-University_Ukraine.jpg`,
        title: 'Головний корпус — вигляд з вул. Артема',
        year: '2005', author: 'Steschke', license: 'CC BY-SA 2.0 DE',
        desc: 'Парадний фасад ДонНТУ з вул. Артема. Монументальна колонада, центральна вежа. Архітектурний стиль — соціалістичний класицизм.',
        wide: true,
      },
      {
        src:   `${WM}/5/51/Donetsk_DonNTU_01.jpg`,
        thumb: `${WM}/thumb/5/51/Donetsk_DonNTU_01.jpg/700px-Donetsk_DonNTU_01.jpg`,
        title: '1-й корпус · зима 2008',
        year: '2008', author: 'Andrew Butko', license: 'CC BY-SA 3.0',
        desc: 'Перший корпус — пам\'ятка архітектури України № 14-101-0012. Зйомка 21 лютого 2008 р.',
      },
      {
        src:   `${WM}/2/25/Donetsk_DonNTU_02.jpg`,
        thumb: `${WM}/thumb/2/25/Donetsk_DonNTU_02.jpg/700px-Donetsk_DonNTU_02.jpg`,
        title: '1-й корпус · боковий фасад',
        year: '2008', author: 'Andrew Butko', license: 'CC BY-SA 3.0',
        desc: 'Бічне крило П-подібної будівлі головного корпусу.',
      },
      {
        src:   `${WM}/5/52/Donetsk_DonNTU_03.jpg`,
        thumb: `${WM}/thumb/5/52/Donetsk_DonNTU_03.jpg/700px-Donetsk_DonNTU_03.jpg`,
        title: '2-й корпус ДонНТУ',
        year: '2008', author: 'Andrew Butko', license: 'CC BY-SA 3.0',
        desc: 'Другий навчальний корпус. Факультети автоматизації та електроенергетики.',
      },
    ],
  },
  {
    id: 'campus-area',
    era: 'donetsk',
    title: 'Студентський сквер та прилегла зона',
    sub: 'Серце кампусу · між корпусами · Донецьк',
    photos: [
      {
        src:   `${WM}/8/8c/%D0%A1%D0%BA%D0%B2%D0%B5%D1%80_%D1%83_3-%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0_-_panoramio.jpg`,
        thumb: `${WM}/thumb/8/8c/%D0%A1%D0%BA%D0%B2%D0%B5%D1%80_%D1%83_3-%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0_-_panoramio.jpg/900px-%D0%A1%D0%BA%D0%B2%D0%B5%D1%80_%D1%83_3-%D0%B3%D0%BE_%D0%BA%D0%BE%D1%80%D0%BF%D1%83%D1%81%D0%B0_-_panoramio.jpg`,
        title: 'Сквер біля 3-го корпусу · 2013',
        year: '2013', author: 'Валерій Дед', license: 'CC BY 3.0',
        desc: 'Студентський сквер у серці кампусу. Літо 2013 — за рік до окупації. 48°0\'49"N 37°48\'9"E.',
        wide: true,
      },
    ],
  },
  {
    id: 'library',
    era: 'donetsk',
    title: 'Науково-технічна бібліотека ДонНТУ',
    sub: 'НТБ · понад 1 500 000 томів · 2 читальних зали · залишилась в окупації',
    photos: [
      {
        src:   `${WM}/2/29/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3_-_panoramio.jpg`,
        thumb: `${WM}/thumb/2/29/%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3_-_panoramio.jpg/900px-%D0%91%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3_-_panoramio.jpg`,
        title: 'Бібліотека ДонНТУ · 2011',
        year: '2011', author: 'Olya Usova', license: 'CC BY 3.0',
        desc: 'НТБ ДонНТУ. Одна з найбільших технічних бібліотек України. Понад 1,5 млн томів залишились у Донецьку після 2014.',
        wide: true,
      },
      {
        src:   `${WM}/a/a4/%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3.jpg`,
        thumb: `${WM}/thumb/a/a4/%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3.jpg/700px-%D0%91%D1%96%D0%B1%D0%BB%D1%96%D0%BE%D1%82%D0%B5%D0%BA%D0%B0_%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3.jpg`,
        title: 'НТБ — нова будівля · 2013',
        year: '2013', author: 'NatTkachen', license: 'CC BY-SA 3.0',
        desc: 'Нова будівля НТБ. Завантажено 2 липня 2013 р. Останній рік до окупації.',
      },
    ],
  },
  {
    id: 'city-donetsk',
    era: 'donetsk',
    title: 'Донецьк · місто до 2014',
    sub: 'Центр · проспекти · архітектура · понад мільйон мешканців',
    photos: [
      {
        src:   `${WM}/3/32/Lenin_square_in_Donetsk_049.jpg`,
        thumb: `${WM}/thumb/3/32/Lenin_square_in_Donetsk_049.jpg/900px-Lenin_square_in_Donetsk_049.jpg`,
        title: 'Площа Леніна — 500 м від ДонНТУ · 2009',
        year: '2009', author: 'Andrew Butko', license: 'CC BY-SA 3.0',
        desc: 'Центральна площа Донецька на вул. Артема — тій самій, де ДонНТУ (будинок 58).',
        wide: true,
      },
      {
        src:   `${WM}/f/fb/2011_%D0%90%D1%80%D1%82%D0%B5%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%83%D0%BB%D0%B8%D1%86%D0%B0_-_panoramio.jpg`,
        thumb: `${WM}/thumb/f/fb/2011_%D0%90%D1%80%D1%82%D0%B5%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%83%D0%BB%D0%B8%D1%86%D0%B0_-_panoramio.jpg/900px-2011_%D0%90%D1%80%D1%82%D0%B5%D0%BC%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%83%D0%BB%D0%B8%D1%86%D0%B0_-_panoramio.jpg`,
        title: 'Вул. Артема — 2011 · вулиця університету',
        year: '2011', author: 'Panoramio', license: 'CC BY 3.0',
        desc: 'Вулиця Артема — ДонНТУ за будинком 58. Головна магістраль міста.',
        wide: true,
      },
      {
        src:   `${WM}/5/59/2012_%D0%BC%D0%B0%D0%B9_-_panoramio.jpg`,
        thumb: `${WM}/thumb/5/59/2012_%D0%BC%D0%B0%D0%B9_-_panoramio.jpg/800px-2012_%D0%BC%D0%B0%D0%B9_-_panoramio.jpg`,
        title: 'Бульвар Шевченка · травень 2012',
        year: '2012', author: 'Panoramio', license: 'CC BY 3.0',
        desc: 'Травень 2012. За 2 роки до окупації студенти гуляли цими бульварами.',
      },
      {
        src:   `${WM}/2/22/2013._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_704.jpg`,
        thumb: `${WM}/thumb/2/22/2013._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_704.jpg/800px-2013._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_704.jpg`,
        title: 'Вулиця Куйбишева · 2013',
        year: '2013', author: 'Wikimedia Commons', license: 'CC BY-SA',
        desc: '2013 — останній рік мирного міста. Наступного 2014-го університет залишить Донецьк назавжди.',
      },
      {
        src:   `${WM}/7/72/2014._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_%2814024245593%29.jpg`,
        thumb: `${WM}/thumb/7/72/2014._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_%2814024245593%29.jpg/800px-2014._%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA_%2814024245593%29.jpg`,
        title: 'Бульвар Пушкіна · весна 2014',
        year: '2014', author: 'Wikimedia Commons', license: 'CC BY-SA',
        desc: 'Весна 2014 — останні тижні мирного Донецька. Влітку почнеться окупація.',
        wide: true,
      },
      {
        src:   `${WM}/5/59/Donetsk_titova_prospekt.jpg`,
        thumb: `${WM}/thumb/5/59/Donetsk_titova_prospekt.jpg/800px-Donetsk_titova_prospekt.jpg`,
        title: 'Проспект Тітова · широкі бульвари',
        year: '~2010', author: 'Wikimedia Commons', license: 'CC BY-SA',
        desc: 'Один з головних проспектів Донецька. Широкі бульвари, радянська і пострадянська архітектура.',
      },
    ],
  },

  /* ════════════ ПОКРОВСЬК ════════════ */
  {
    id: 'pokrovsk-campus',
    era: 'pokrovsk',
    title: 'ДонНТУ у Покровську · корпуси',
    sub: 'Індустріальний інститут · пл. Шибанкова 2 · 2014–2022',
    photos: [
      {
        src:   `${WM}/7/71/DonNTU_%28Pokrovsk%29_2021.jpg`,
        thumb: `${WM}/thumb/7/71/DonNTU_%28Pokrovsk%29_2021.jpg/900px-DonNTU_%28Pokrovsk%29_2021.jpg`,
        title: 'Головний корпус у Покровську · 2021',
        year: '2021', author: 'Leon II', license: 'CC BY-SA 4.0',
        desc: 'Головна будівля ДонНТУ у Покровську — фасад. 31 серпня 2021. Будівля 1959 р. на центральній площі міста. 48°16\'41"N 37°10\'42"E.',
        wide: true,
      },
      {
        src:   `${WM}/0/0f/II_DonNTU.jpg`,
        thumb: `${WM}/thumb/0/0f/II_DonNTU.jpg/700px-II_DonNTU.jpg`,
        title: '1-й корпус · перші тижні 2014',
        year: '2014', author: 'Sigors', license: 'Public domain',
        desc: '12 листопада 2014. Університет відновив роботу через 2 місяці після евакуації з Донецька. Красноармійський індустріальний інститут.',
      },
      {
        src:   `${WM}/6/66/Students_of_DonNTU_on_21-03-2017.jpg`,
        thumb: `${WM}/thumb/6/66/Students_of_DonNTU_on_21-03-2017.jpg/900px-Students_of_DonNTU_on_21-03-2017.jpg`,
        title: 'Студенти ДонНТУ з гуртом Антитіла · 2017',
        year: '21.03.2017', author: 'Frikolor', license: 'CC BY-SA 4.0',
        desc: 'Зустріч студентів ДонНТУ у Покровську з гуртом Антитіла Тараса Тополі. 21 березня 2017 р. Університет — активний культурний осередок, попри вимушене переміщення.',
        wide: true,
      },
    ],
  },
  {
    id: 'pokrovsk-students',
    era: 'pokrovsk',
    title: 'Студентське життя · Дебют першокурсника 2019',
    sub: 'Покровськ · 23 листопада 2019 · ДонНТУ · © donntu.edu.ua',
    photos: [
      {
        src:   `${DNU}/2019/11/IMG_0398.jpg`,
        thumb: `${DNU}/2019/11/IMG_0398-250x200.jpg`,
        title: 'Дебют першокурсника 2019',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Щорічний фестиваль талантів «Дебют першокурсника» у Покровську. Традиція, що народилась у Донецьку і продовжилась у вигнанні.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0419.jpg`,
        thumb: `${DNU}/2019/11/IMG_0419-250x200.jpg`,
        title: 'Виступ на сцені · Покровськ 2019',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Студентський концерт у великому залі. Перший рік на новому місці — вже з повноцінною культурною програмою.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0464.jpg`,
        thumb: `${DNU}/2019/11/IMG_0464-250x200.jpg`,
        title: 'Перший курс · таланти й ентузіазм',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Першокурсники демонструють хореографічні та вокальні номери. Університет живе.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0477.jpg`,
        thumb: `${DNU}/2019/11/IMG_0477-250x200.jpg`,
        title: 'Хореографічний номер',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Хореографічний виступ студентів ДонНТУ. Традиція «Дебюту» продовжується з 1990-х.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0484.jpg`,
        thumb: `${DNU}/2019/11/IMG_0484-250x200.jpg`,
        title: 'Сцена актового залу · 2019',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Актовий зал ДонНТУ у Покровську. Студенти виступають перед товаришами, викладачами, батьками.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0501.jpg`,
        thumb: `${DNU}/2019/11/IMG_0501-250x200.jpg`,
        title: 'Вокальні виступи',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Вокальні номери. ДонНТУ — університет інженерний, але зі справжнім мистецьким духом.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0525.jpg`,
        thumb: `${DNU}/2019/11/IMG_0525-250x200.jpg`,
        title: 'Фінальна сцена · 2019',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Фінальна частина Дебюту. Незважаючи на 5 років поза домом — університет залишається живим і яскравим.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0537.jpg`,
        thumb: `${DNU}/2019/11/IMG_0537-250x200.jpg`,
        title: 'Публіка та атмосфера',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Повний зал. 2019 рік — університет вже пустив коріння у Покровську.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0544.jpg`,
        thumb: `${DNU}/2019/11/IMG_0544-250x200.jpg`,
        title: 'Костюмований номер',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Костюмовані виступи першокурсників — кожен факультет показує своє.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0569.jpg`,
        thumb: `${DNU}/2019/11/IMG_0569-250x200.jpg`,
        title: 'Нагородження переможців',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Нагородження переможців. Журі оцінювало хореографію, вокал, акторську майстерність.',
      },
      {
        src:   `${DNU}/2019/11/IMG_0570.jpg`,
        thumb: `${DNU}/2019/11/IMG_0570-250x200.jpg`,
        title: 'Переможці · Дебют 2019',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Переможці Дебюту 2019. Попри всі труднощі — університет виховує не лише інженерів, а й людей.',
        wide: true,
      },
      {
        src:   `${DNU}/2019/11/IMG_0582.jpg`,
        thumb: `${DNU}/2019/11/IMG_0582-250x200.jpg`,
        title: 'Спільне фото · учасники і журі',
        year: '2019', author: 'donntu.edu.ua', license: '© DonNTU',
        desc: 'Групове фото учасників та організаторів. Ці люди — обличчя ДонНТУ поза Донецьком.',
      },
    ],
  },
  {
    id: 'pokrovsk-city',
    era: 'pokrovsk',
    title: 'Покровськ · місто',
    sub: 'Раніше Красноармійськ · Донецька обл. · до 2022 р.',
    photos: [
      {
        src:   `${WM}/0/06/Chervonoarmijsk_city_center_%283%29.JPG`,
        thumb: `${WM}/thumb/0/06/Chervonoarmijsk_city_center_%283%29.JPG/900px-Chervonoarmijsk_city_center_%283%29.JPG`,
        title: 'Центр міста Красноармійськ (нині Покровськ) · 2012',
        year: '2012', author: 'Wikimedia Commons', license: 'CC BY-SA',
        desc: 'Центр міста влітку 2012. Сюди переїде ДонНТУ через 2 роки. Місто 60 000 мешканців, промисловий центр Донеччини.',
        wide: true,
      },
      {
        src:   `${WM}/2/2e/Krasnoarmeysk5.jpg`,
        thumb: `${WM}/thumb/2/2e/Krasnoarmeysk5.jpg/250px-Krasnoarmeysk5.jpg`,
        title: 'В\'їзд до Красноармійська · 2009',
        year: '2009', author: 'Aleksandr Sidorchenko', license: 'CC BY 3.0',
        desc: 'В\'їзд до міста Красноармійськ, 2009 рік. Невеличке промислове місто, де відкриється новий кампус ДонНТУ в 2014.',
      },
      {
        src:   `${WM}/b/b2/Triple-arch_ww2-manument_pokrvosk_ukraine2.jpg`,
        thumb: `${WM}/thumb/b/b2/Triple-arch_ww2-manument_pokrvosk_ukraine2.jpg/800px-Triple-arch_ww2-manument_pokrvosk_ukraine2.jpg`,
        title: 'Меморіал Другої світової · Покровськ 2020',
        year: '2020', author: 'Wikimedia Commons', license: 'CC BY-SA 4.0',
        desc: 'Тріумфальна арка — меморіал Другої світової на південній окраїні Покровська. Зйомка 14 жовтня 2020 р. Через 2 роки місто знову стане прифронтовим.',
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════
   КОМПОНЕНТИ
══════════════════════════════════════════════════════════ */

/* ── Таймлайн ── */
const GalleryTimeline = ({ activeEra, onEraClick }) => (
  <div style={{ marginBottom: '2rem' }}>
    <span className="lbl" style={{ display: 'block', marginBottom: '0.625rem' }}>
      ХРОНОЛОГІЯ УНІВЕРСИТЕТУ · КЛІКАМИ ФІЛЬТРУЙ ЕРИ
    </span>
    <div style={{ display: 'flex', gap: '3px', height: '36px', borderRadius: '3px', overflow: 'hidden' }}>
      {ERAS.map(era => (
        <div
          key={era.id}
          onClick={() => onEraClick(era.id)}
          title={era.label + ' · ' + era.period}
          style={{
            width: era.width + '%',
            background: activeEra === era.id
              ? era.color
              : activeEra
                ? era.color + '33'
                : era.color + '66',
            cursor: 'pointer',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '0 0.5rem',
            transition: 'background 0.25s',
            overflow: 'hidden',
          }}
        >
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '0.45rem', fontWeight: 700,
            letterSpacing: '0.1em', color: '#fff',
            textShadow: '0 1px 2px rgba(0,0,0,0.5)',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {era.label}
          </span>
          <span style={{
            fontFamily: 'var(--mono)', fontSize: '0.4rem',
            color: 'rgba(255,255,255,0.7)',
            whiteSpace: 'nowrap',
          }}>
            {era.period}
          </span>
        </div>
      ))}
    </div>
    {/* Era detail row */}
    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
      {ERAS.map(era => (
        <button
          key={era.id}
          onClick={() => onEraClick(era.id === activeEra ? null : era.id)}
          style={{
            fontFamily: 'var(--mono)', fontSize: '0.45rem', letterSpacing: '0.07em',
            background: activeEra === era.id ? era.color + '22' : 'none',
            border: '1px solid ' + (activeEra === era.id ? era.color : 'var(--b2)'),
            color: activeEra === era.id ? era.color : 'var(--t3)',
            padding: '0.2rem 0.5rem', borderRadius: '2px', cursor: 'pointer',
            transition: 'all 0.15s',
          }}
        >
          {activeEra === era.id ? '✕ ' : ''}{era.period} {era.desc}
        </button>
      ))}
    </div>
  </div>
);

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
      {sections.map(s => {
        const era = ERAS.find(e => e.id === s.era);
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            style={{
              fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.07em',
              background: activeId === s.id
                ? (era ? era.color + '22' : 'rgba(196,132,58,0.12)')
                : 'none',
              border: '1px solid ' + (activeId === s.id
                ? (era ? era.color : 'var(--amber)')
                : 'var(--b2)'),
              color: activeId === s.id
                ? (era ? era.color : 'var(--amber)')
                : 'var(--t3)',
              padding: '0.3rem 0.65rem', borderRadius: '2px', cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: '0.3rem',
            }}
          >
            <span style={{ opacity: 0.5 }}>#</span>
            {s.id}
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
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: '1rem',
        padding: '1rem',
      }}
    >
      {hasPrev && (
        <button onClick={e => { e.stopPropagation(); onPrev(); }} style={{
          position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
          color: 'var(--t1)', fontSize: '1.5rem', width: '2.5rem', height: '2.5rem',
          cursor: 'pointer', borderRadius: '2px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>&#8249;</button>
      )}
      {hasNext && (
        <button onClick={e => { e.stopPropagation(); onNext(); }} style={{
          position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
          color: 'var(--t1)', fontSize: '1.5rem', width: '2.5rem', height: '2.5rem',
          cursor: 'pointer', borderRadius: '2px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>&#8250;</button>
      )}
      <button onClick={e => { e.stopPropagation(); onClose(); }} style={{
        position: 'absolute', top: '1rem', right: '1rem',
        background: 'none', border: '1px solid rgba(255,255,255,0.2)',
        color: 'var(--t2)', fontSize: '0.875rem', width: '2rem', height: '2rem',
        cursor: 'pointer', borderRadius: '2px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>&#10005;</button>

      <img
        src={photo.src}
        alt={photo.title}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw', maxHeight: '78vh',
          objectFit: 'contain', display: 'block',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
        onError={e => { if (e.target.src !== photo.thumb) e.target.src = photo.thumb; }}
      />

      <div onClick={e => e.stopPropagation()} style={{
        maxWidth: '680px', textAlign: 'center',
        display: 'flex', flexDirection: 'column', gap: '0.35rem',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '1rem', color: 'var(--t1)' }}>
          {photo.title}
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.5rem', letterSpacing: '0.08em', color: 'var(--t3)' }}>
          {photo.year} &middot; {photo.author} &middot; {photo.license}
        </div>
        <div style={{ fontFamily: 'var(--ui)', fontSize: '0.75rem', color: 'var(--t2)', lineHeight: 1.55 }}>
          {photo.desc}
        </div>
      </div>
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
          <span style={{ fontSize: '1.5rem', opacity: 0.15 }}>&#9633;</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: '0.45rem', color: 'var(--t4)', letterSpacing: '0.06em' }}>
            ФОТО НЕДОСТУПНЕ
          </span>
        </div>
      )}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, transparent 100%)',
        padding: '1.25rem 0.75rem 0.5rem',
        opacity: loaded && !error ? 1 : 0,
        transition: 'opacity 0.4s',
      }}>
        <div style={{ fontFamily: 'var(--serif)', fontSize: '0.8125rem', color: '#fff', lineHeight: 1.3 }}>
          {photo.title}
        </div>
        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.45rem', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.07em', marginTop: '0.2rem' }}>
          {photo.year} &middot; {photo.author} &middot; {photo.license}
        </div>
      </div>
      <div style={{
        position: 'absolute', top: '0.5rem', right: '0.5rem',
        background: 'rgba(0,0,0,0.6)', padding: '0.2rem 0.4rem',
        fontFamily: 'var(--mono)', fontSize: '0.4rem', color: 'rgba(255,255,255,0.5)',
        letterSpacing: '0.06em', borderRadius: '2px',
        opacity: loaded && !error ? 0.7 : 0,
      }}>
        &#9635; ВІДКРИТИ
      </div>
    </div>
  );
};

/* ── Section era badge ── */
const EraBadge = ({ eraId }) => {
  const era = ERAS.find(e => e.id === eraId);
  if (!era) return null;
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: '0.45rem', letterSpacing: '0.1em',
      color: era.color, background: era.color + '18',
      border: '1px solid ' + era.color + '44',
      padding: '0.15rem 0.5rem', borderRadius: '2px',
      verticalAlign: 'middle', marginRight: '0.5rem',
    }}>
      {era.period}
    </span>
  );
};

/* ═══ Main Gallery Page ═══ */
const GalleryPage = ({ onNavigate }) => {
  const [lightbox, setLightbox] = React.useState(null);
  const [activeSection, setActiveSection] = React.useState(null);
  const [activeEra, setActiveEra] = React.useState(null);

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
      { threshold: 0.15 }
    );
    GALLERY_SECTIONS.forEach(s => {
      const el = document.getElementById('gsec-' + s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const totalPhotos = GALLERY_SECTIONS.reduce((n, s) => n + s.photos.length, 0);

  return (
    <div className="page">
      {/* Header */}
      <div style={{ marginBottom: '1.5rem' }}>
        <span className="lbl">ФОТОАРХІВ · ХРОНОЛОГІЯ · 2005–2021</span>
        <h2 className="serif" style={{ fontSize: '1.75rem', fontWeight: 400, marginTop: '0.5rem' }}>
          ДонНТУ у фотографіях
        </h2>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.75rem', flexWrap: 'wrap' }}>
          <Stat v={String(totalPhotos)} label="фотографій" />
          <Stat v={String(GALLERY_SECTIONS.length)} label="розділів" />
          <Stat v="3" label="ери" />
          <Stat v="2005–2021" label="часовий діапазон" />
        </div>
      </div>

      {/* Timeline filter */}
      <GalleryTimeline activeEra={activeEra} onEraClick={setActiveEra} />

      {/* Anchor nav */}
      <GalleryAnchors sections={visibleSections} activeId={activeSection} />

      {/* Sections */}
      {visibleSections.map(section => (
        <div
          key={section.id}
          id={'gsec-' + section.id}
          style={{ marginBottom: '3rem', scrollMarginTop: '3rem' }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
              <EraBadge eraId={section.era} />
              <span className="lbl" style={{ color: 'var(--t3)' }}>
                {section.photos.length} фото
              </span>
              <span style={{
                fontFamily: 'var(--mono)', fontSize: '0.45rem', color: 'var(--t4)',
                letterSpacing: '0.08em', opacity: 0.6,
              }}>
                #{section.id}
              </span>
            </div>
            <h3 style={{
              fontFamily: 'var(--serif)', fontSize: '1.25rem', fontWeight: 400,
              color: 'var(--t1)', margin: '0 0 0.25rem',
            }}>
              {section.title}
            </h3>
            <p style={{ fontFamily: 'var(--ui)', fontSize: '0.75rem', color: 'var(--t3)', margin: 0 }}>
              {section.sub}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
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
        <span className="lbl" style={{ color: 'var(--t3)' }}>АТРИБУЦІЯ · ДЖЕРЕЛА</span>
        <p style={{ fontFamily: 'var(--ui)', fontSize: '0.6875rem', color: 'var(--t3)', margin: '0.5rem 0 0', lineHeight: 1.6 }}>
          Wikimedia Commons (CC BY/CC BY-SA/Public domain):
          Andrew Butko, Steschke, Olya Usova, NatTkachen, Валерій Дед, Sigors, Leon II, Frikolor, Aleksandr Sidorchenko.
          Студентські фото: <a
            href="https://donntu.edu.ua/main/debyut-pershokursnika-2019-studenti-donntu-vkotre-vrazili-svo%D1%97mi-chislennimi-talantami.html"
            target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--amber)' }}
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
