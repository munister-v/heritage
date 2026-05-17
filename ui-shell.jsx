/* Shell: TopNav + Footer for the heritage platform */

const NAV = [
  { id: 'gallery',  ua: 'Архів' },
  { id: 'campus3d', ua: '3D Кампус' },
  { id: 'archive',  ua: 'Наука' },
  { id: 'voices',   ua: 'Голоси' },
  { id: 'timeline', ua: 'Хронологія' },
  { id: 'certify',  ua: 'Сертифікація' },
];

const TopNav = ({ cur, nav }) => {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={'topnav' + (scrolled ? ' scrolled' : '')}>
      <div className="topnav-inner">
        <button className="brand" onClick={() => nav('home')} aria-label="На головну">
          <span className="brand-mark">Д</span>
          <span>онНТУ</span>
          <span className="brand-sep">·</span>
          <span className="brand-sub">Цифрова Спадщина</span>
        </button>
        <nav className="navlinks">
          {NAV.map(item => (
            <button
              key={item.id}
              className={'navlink' + (cur === item.id ? ' active' : '')}
              onClick={() => nav(item.id)}
            >
              {item.ua}
            </button>
          ))}
        </nav>
        <div className="nav-right">
          <button className="lang-toggle" title="Мова">UA / EN</button>
        </div>
      </div>
    </header>
  );
};

const Footer = ({ nav }) => (
  <footer className="site-footer">
    <div className="site-footer-inner">
      <div>
        Цифрова спадщина Донецького НТУ · <span className="muted">© 2026</span>
      </div>
      <div className="site-footer-links">
        <a onClick={() => nav && nav('home')}>Про проєкт</a>
        <a href="mailto:archive@donntu.heritage">Зв'язатися</a>
        <a href="https://github.com/munister-v/heritage" target="_blank" rel="noopener">GitHub</a>
      </div>
    </div>
  </footer>
);

const Shell = ({ cur, nav, children }) => (
  <>
    <TopNav cur={cur} nav={nav} />
    <main>{children}</main>
    <Footer nav={nav} />
  </>
);

Object.assign(window, { Shell, TopNav, Footer });
