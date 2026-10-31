
const { PROFILE, PUBLICATIONS, PROJECTS, EXPERIENCE, LINKS } = window;

const T = {
  en: {
    language:"Switch to Japanese", publications:"Publications", projects:"Projects",
    experience:"Experience", education:"Education", present:"present", toggle_theme:"toggle theme",
  },
  ja: {
    language:"Switch to English", publications:"論文", projects:"プロジェクト",
    experience:"職歴", education:"学歴", present:"現在", toggle_theme:"テーマ切替",
  }
};

// ── Icons ─────────────────────────────────────────────────────────────────────
function Icon({ name, size = 16, style }) {
  const s = { width:size, height:size, display:"inline-block", verticalAlign:"middle", flexShrink:0, ...style };
  const svg = (paths) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={s}>
      {paths}
    </svg>
  );
  switch (name) {
    case "github":   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={s}><path d="M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.27.73-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.55 4.56-1.54 7.85-5.86 7.85-10.96C23.5 5.65 18.35.5 12 .5z"/></svg>;
    case "scholar":  return svg(<><path d="M12 3 2 9l10 6 7.5-4.5"/><path d="M19.5 10.5V15"/><path d="M6 12v3c0 1.5 3 3 6 3s6-1.5 6-3v-3"/></>);
    case "dblp":     return svg(<><rect x="4" y="4" width="16" height="6" rx="1.5"/><rect x="4" y="14" width="16" height="6" rx="1.5"/><circle cx="7.5" cy="7" r="0.8" fill="currentColor"/><circle cx="7.5" cy="17" r="0.8" fill="currentColor"/></>);
    case "twitter":  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style={s}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
    case "mail":     return svg(<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></>);
    case "paper":    return svg(<><path d="M7 3h7l5 5v13H7z"/><path d="M14 3v5h5"/><path d="M10 13h6M10 17h6"/></>);
    case "hammer":   return svg(<><path d="M14 4l6 6-3 3-2-2-8 8-3-3 8-8-2-2z"/></>);
    case "briefcase":return svg(<><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><path d="M3 13h18"/></>);
    case "grad":     return svg(<><path d="M12 3 2 8l10 5 10-5z"/><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/><path d="M22 8v6"/></>);
    case "sparkle":  return svg(<><path d="M12 3v6M12 15v6M3 12h6M15 12h6"/><path d="m6 6 3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></>);
    case "bot":      return svg(<><rect x="7" y="8" width="10" height="9" rx="2"/><path d="M12 3v3M9 17v2M15 17v2M4 11h3M17 11h3"/><circle cx="10" cy="12" r="1" fill="currentColor"/><circle cx="14" cy="12" r="1" fill="currentColor"/></>);
    case "search":   return svg(<><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>);
    case "tag":      return svg(<><path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8" r="1.3"/></>);
    case "question": return svg(<><circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7v.5"/><circle cx="12" cy="17" r="0.6" fill="currentColor"/></>);
    case "tree":     return svg(<><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M7.5 7.5 10.5 16.5M16.5 7.5 13.5 16.5"/></>);
    case "trophy":   return svg(<><path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 6H5v2a3 3 0 0 0 3 3M16 6h3v2a3 3 0 0 1-3 3"/><path d="M10 14h4v3h2v3H8v-3h2z"/></>);
    case "wine":     return svg(<><path d="M7 3h10l-1 7a4 4 0 0 1-8 0z"/><path d="M12 14v6M8 20h8"/></>);
    case "sticker":  return svg(<><path d="M4 4h12v12l-4 4H4z"/><path d="M16 16h-4v4"/></>);
    case "code":     return svg(<><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></>);
    case "moon":     return svg(<><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></>);
    case "sun":      return svg(<><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></>);
    default: return null;
  }
}

// ── Primitives ────────────────────────────────────────────────────────────────
function Chip({ children, style }) {
  return <span className="mono" style={{display:"inline-block",padding:"1px 8px",fontSize:11,background:"var(--bg-2)",color:"var(--fg-2)",border:"1px solid var(--border)",borderRadius:999,...style}}>{children}</span>;
}
// ── Section header ────────────────────────────────────────────────────────────
function SectionHeader({ title, href, seeAllLabel }) {
  return <div className="section-header" style={{display:"flex",alignItems:"center",gap:10}}>
    <h2>{title}</h2>
    {href && <a href={href} className="mono">{seeAllLabel}</a>}
  </div>;
}

// ── Publication card ──────────────────────────────────────────────────────────
function PubCard({ p, lang = "en", showSummary = false, headingLevel = "h3" }) {
  const Title = headingLevel;
  return <a className="research-row" href={p.url}>
    <span className="research-venue mono">{p.venue.replace(/\s+\d{4}$/, "")}<small>{p.year}</small></span>
    <span className="research-content"><Title>{p.title}</Title><span className="research-authors">{p.authors.map((a,i) => <React.Fragment key={a+i}>{i > 0 && ", "}{a === PROFILE.name.en ? <strong>{a}</strong> : a}</React.Fragment>)}</span>{showSummary && <span className="paper-summary">{lang === "ja" ? p.summary_ja : p.summary_en}</span>}</span>
    <span className="row-arrow" aria-hidden="true">↗</span>
  </a>;
}

function ProjectCard({ p, lang, headingLevel = "h3" }) {
  const Title = headingLevel;
  const content = <>
    <div className="project-meta mono"><span>{p.year} / {p.tag}</span><Icon name={p.icon || "code"} size={18} /></div>
    <Title>{lang === "en" ? p.title_en : p.title_ja}</Title>
    <p>{lang === "en" ? p.desc_en : p.desc_ja}</p>
    <span className="project-open">{lang === "en" ? "Explore project" : "プロジェクトを見る"}<span aria-hidden="true">↗</span></span>
  </>;
  return p.url ? <a className="project-tile" href={p.url} target={p.url.startsWith("http") ? "_blank" : undefined} rel="noopener">{content}</a> : <div className="project-tile">{content}</div>;
}

// ── Main ──────────────────────────────────────────────────────────────────────
function HomePage({ lang }) {
  const t = T[lang];
  const ja = lang === "ja";
  const featured = PROJECTS[0];
  return <main id="main-content" tabIndex={-1}>
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-portrait"><img src="/authors/admin/avatar.png" alt={PROFILE.name[lang]} width="128" height="128" /></div>
      <div className="hero-bio">
        <p className="hero-eyebrow">Researcher / Engineer <span>· {PROFILE.location}</span></p>
        <h1 id="hero-title">{PROFILE.name[lang]}</h1>
        <p className="hero-role">{PROFILE.role[lang]} · NEC</p>
        <p className="hero-description">{ja ? "人とAIの間の研究をし、社会で使えるシステムにしています。" : "I study how people interact with AI."}</p>
        <ul className="hero-specialties" aria-label={ja ? "専門分野" : "Research areas"}>{(ja ? ["自然言語処理", "情報検索", "Human–Computer Interaction"] : ["Natural language processing", "Information retrieval", "Human–Computer Interaction"]).map(area => <li key={area}>{area}</li>)}</ul>
        <p className="hero-mission">{ja ? "やりたい仕事に、集中できる世界に。" : "More room for work you love."}</p>
        <nav className="hero-links" aria-label={ja ? "研究活動と連絡先" : "Research and contact"}>
          <a className="hero-primary" href="#publications">{t.publications}<span aria-hidden="true">↓</span></a>
          {LINKS.filter(l => ["scholar","github","email"].includes(l.label)).map(l => <a key={l.label} href={l.url} target={l.url.startsWith("mailto") ? undefined : "_blank"} rel="noopener"><Icon name={l.icon} size={17}/>{l.label === "scholar" ? "Google Scholar" : l.label === "github" ? "GitHub" : ja ? "連絡先" : "Email"}<span aria-hidden="true">↗</span></a>)}
        </nav>
      </div>
    </section>

    <section className="featured-work" aria-labelledby="featured-title">
      <div className="featured-label">{ja ? "現在の仕事" : "Current work"}</div>
      <div className="featured-copy">
        <h2 id="featured-title">NEC cotomi Agent</h2>
        <p>{ja ? "プロダクトマネージャーとして、デジタル業務の継続的な自動化を実現するエージェントの開発に取り組んでいます。" : "As Product Manager, I work on agent technology for the continuous automation of digital operations."}</p>
        <div className="featured-links"><a href={featured.url} target="_blank" rel="noopener">{ja ? "NECの発表" : "NEC announcement"}<span aria-hidden="true">↗</span></a><a href="/publication/oyamada-2026-cais/">{ja ? "関連論文" : "Related publication"}<span aria-hidden="true">↗</span></a></div>
      </div>
    </section>

    <section id="projects" className="content-section">
      <SectionHeader title={ja ? "主なプロジェクト" : "Selected projects"} href="/project/" seeAllLabel={ja ? "すべてのプロジェクト →" : "All projects →"} />
      <p className="section-description">{ja ? "NECでの主な取り組みです。個人制作や過去の取り組みは、プロジェクト一覧にまとめています。" : "Selected work at NEC. Personal projects and earlier work are in the full archive."}</p>
      <div className="project-grid">{PROJECTS.slice(0,3).map(p => <ProjectCard key={p.id} p={p} lang={lang} />)}</div>
    </section>

    <section id="publications" className="content-section research-section">
      <SectionHeader title={ja ? "最近の論文" : "Recent publications"} href="/publication/" seeAllLabel={ja ? "すべての論文 →" : "All publications →"} />
      <div>{PUBLICATIONS.slice(0,5).map(p => <PubCard key={p.id} p={p} />)}</div>
    </section>

    <section id="about" className="content-section about-section">
      <div className="about-intro">
        <div className="mono about-label">{ja ? "プロフィール" : "ABOUT ME"}</div>
        <h2>{PROFILE.name[lang]}</h2><p className="about-role">{PROFILE.role[lang]}<br />{PROFILE.org[lang]}</p>
        <div className="interest-list">{PROFILE.interests[lang].map(i => <Chip key={i}>{i}</Chip>)}</div>
        <div className="contact-links">{LINKS.map(l => <a href={l.url} key={l.label} aria-label={l.label} target={l.url.startsWith("mailto") ? undefined : "_blank"} rel="noopener"><Icon name={l.icon} size={18} /><span>{l.label}</span></a>)}</div>
      </div>
      <div className="career"><h3>{t.experience}</h3>{EXPERIENCE.map((e,i) => <div className="career-row" key={i}>
        <div className="mono career-date">{e.start} — {e.end || t.present}</div>
        <div><h4>{e.url ? <a href={e.url} target="_blank" rel="noopener">{ja ? e.title_ja : e.title_en}<span aria-hidden="true"> ↗</span></a> : (ja ? e.title_ja : e.title_en)}</h4><span className="career-org">{e.org}</span><p>{ja ? e.notes_ja : e.notes_en}</p></div>
      </div>)}<h3 className="education-title">{t.education}</h3>{PROFILE.education.map(e => <div className="career-row" key={e.year}><div className="mono career-date">{e.year}</div><div><h4>{ja ? e.degree_ja : e.degree_en}</h4><p>{ja ? e.school_ja : e.school_en}</p></div></div>)}</div>
    </section>
  </main>;
}


// The same navigation, preferences, and footer are used on every page.
function usePreferences() {
  const read = (key, allowed, fallback) => {
    try { const value = localStorage.getItem(key); return allowed.includes(value) ? value : fallback; }
    catch (_) { return fallback; }
  };
  const [lang, setLang] = React.useState(() => read('kuni_lang', ['en', 'ja'], 'en'));
  const [theme, setTheme] = React.useState(() => read('kuni_theme', ['light', 'dark'], 'light'));
  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    try { localStorage.setItem('kuni_lang', lang); localStorage.setItem('kuni_theme', theme); } catch (_) {}
  }, [lang, theme]);
  return { lang, setLang, theme, setTheme };
}

function SiteHeader({ lang, setLang, theme, setTheme, section }) {
  const ja = lang === 'ja';
  const navigation = [
    { href: '/project/', label: ja ? 'プロジェクト' : 'Projects', section: 'projects' },
    { href: '/publication/', label: ja ? '論文' : 'Publications', section: 'publications' },
    { href: '/#about', label: ja ? 'プロフィール' : 'About', section: 'about' },
  ];
  return <header className="site-header">
    <a className="wordmark" href="/" aria-label={ja ? 'ホーム' : 'Home'}><span className="site-mark-image" aria-hidden="true" /><span>{PROFILE.name[lang]}</span></a>
    <nav className="header-nav" aria-label={ja ? 'メインナビゲーション' : 'Main navigation'}>
      {navigation.map(item => <a key={item.href} href={item.href} aria-current={section === item.section ? 'page' : undefined}>{item.label}</a>)}
    </nav>
    <div className="header-controls">
      <button aria-label={ja ? 'テーマ切替' : 'Toggle theme'} aria-pressed={theme === 'dark'} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></button>
      <button className="mono" aria-label={lang === 'en' ? 'Switch to Japanese' : 'Switch to English'} onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}>{lang === 'en' ? 'JA' : 'EN'}</button>
    </div>
  </header>;
}

function SiteFooter({ lang }) {
  return <footer className="page-footer"><span>© {new Date().getFullYear()} {PROFILE.name.en}</span><a href="#main-content">{lang === 'ja' ? 'ページの先頭へ ↑' : 'Back to top ↑'}</a></footer>;
}

function Breadcrumb({ lang, section }) {
  return <nav className="breadcrumbs" aria-label={lang === 'ja' ? 'パンくずリスト' : 'Breadcrumb'}>
    <a href="/">{lang === 'ja' ? 'ホーム' : 'Home'}</a>
    {section && <><span aria-hidden="true">/</span><a href={section === 'projects' ? '/project/' : '/publication/'}>{section === 'projects' ? (lang === 'ja' ? 'プロジェクト' : 'Projects') : (lang === 'ja' ? '論文' : 'Publications')}</a></>}
  </nav>;
}

function ProjectsPage({ lang }) {
  const ja = lang === 'ja';
  return <main id="main-content" tabIndex={-1} className="archive-page">
    <Breadcrumb lang={lang} />
    <header className="page-heading"><h1>{ja ? 'プロジェクト' : 'Projects'}</h1><p>{ja ? '研究開発から個人制作まで、これまでの取り組みを紹介します。' : 'Research, development, and personal projects.'}</p></header>
    <div className="project-grid">{PROJECTS.map(p => <ProjectCard key={p.id} p={p} lang={lang} headingLevel="h2" />)}</div>
  </main>;
}

function PublicationsPage({ lang }) {
  const ja = lang === 'ja';
  return <main id="main-content" tabIndex={-1} className="archive-page">
    <Breadcrumb lang={lang} />
    <header className="page-heading"><h1>{ja ? '論文' : 'Publications'}</h1></header>
    <div className="publication-archive">{PUBLICATIONS.map(p => <PubCard key={p.id} p={p} lang={lang} showSummary headingLevel="h2" />)}</div>
  </main>;
}

function Authors({ authors }) {
  return <div className="detail-authors">{authors.map((author, i) => <React.Fragment key={author + i}>{i > 0 && ', '}{author === PROFILE.name.en ? <strong>{author}</strong> : author}</React.Fragment>)}</div>;
}

function ActionLink({ href, children }) {
  const external = /^https?:/.test(href);
  return <a className="action-link" href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined}>{children}<span aria-hidden="true">{external ? '↗' : '→'}</span></a>;
}

function PublicationPage({ lang, publication: p }) {
  const ja = lang === 'ja';
  const summary = (ja ? p.summary_ja : p.summary_en) || p.summary_en;
  return <main id="main-content" tabIndex={-1} className="detail-page">
    <Breadcrumb lang={lang} section="publications" />
    <article>
      <header className="detail-heading">
        <div className="detail-meta"><span className="mono">{p.venue.replace(/\s+\d{4}$/, '')}</span><time dateTime={String(p.year)}>{p.month} {p.year}</time><Chip>{p.tag}</Chip></div>
        <h1>{p.title}</h1>
        <Authors authors={p.authors} />
      </header>
      {p.image && <figure className="detail-image"><img src={p.image} alt={p.title} decoding="async" /></figure>}
      {summary && <p className="detail-copy">{summary}</p>}
      <div className="detail-actions">
        {p.pdf_url && <ActionLink href={p.pdf_url}>{ja ? '論文を読む' : 'Read paper'}</ActionLink>}
        {p.doi_url && p.doi_url !== p.pdf_url && <ActionLink href={p.doi_url}>DOI</ActionLink>}
        {p.bib && <ActionLink href={'/publication/' + p.slug + '/cite.bib'}>{ja ? '引用情報（BibTeX）' : 'Cite (BibTeX)'}</ActionLink>}
      </div>
      <a className="back-link" href="/publication/">← {ja ? '論文一覧へ' : 'All publications'}</a>
    </article>
  </main>;
}

function ProjectPage({ lang, project: p }) {
  const ja = lang === 'ja';
  const title = ja ? p.title_ja : p.title_en;
  const body = (ja ? p.body_ja : p.body_en) || (ja ? p.desc_ja : p.desc_en);
  const projectHref = p.external_url || p.url;
  const url = projectHref ? new URL(projectHref, location.href) : null;
  const normalizePath = path => path.replace(/\/(?:index\.html)?$/, '');
  const isSelfLink = url && url.origin === location.origin && normalizePath(url.pathname) === normalizePath(location.pathname);
  return <main id="main-content" tabIndex={-1} className="detail-page">
    <Breadcrumb lang={lang} section="projects" />
    <article>
      <header className="detail-heading"><div className="detail-meta"><time className="mono" dateTime={String(p.year)}>{p.year}</time><Chip>{p.tag}</Chip></div><h1>{title}</h1></header>
      {p.image && <figure className="detail-image"><img src={p.image} alt={title} decoding="async" /></figure>}
      {body && <p className="detail-copy">{body}</p>}
      <div className="detail-actions">
        {p.video_url && <ActionLink href={p.video_url}>{ja ? '動画を見る' : 'Watch video'}</ActionLink>}
        {projectHref && !isSelfLink && <ActionLink href={projectHref}>{ja ? 'プロジェクトを見る' : 'View project'}</ActionLink>}
      </div>
      <a className="back-link" href="/project/">← {ja ? 'プロジェクト一覧へ' : 'All projects'}</a>
    </article>
  </main>;
}

function NotFoundPage({ lang }) {
  const ja = lang === 'ja';
  return <main id="main-content" tabIndex={-1} className="not-found-page">
    <span className="mono">404</span><h1>{ja ? 'ページが見つかりません。' : 'Page not found.'}</h1>
    <p>{ja ? 'ページが移動したか、URLが変更された可能性があります。' : 'This page may have moved or the URL may have changed.'}</p>
    <div className="detail-actions"><ActionLink href="/">{ja ? 'ホームへ' : 'Home'}</ActionLink><ActionLink href="/publication/">{ja ? '論文' : 'Publications'}</ActionLink><ActionLink href="/project/">{ja ? 'プロジェクト' : 'Projects'}</ActionLink></div>
  </main>;
}

function App() {
  const preferences = usePreferences();
  const { lang } = preferences;
  const page = document.body.dataset.page || 'home';
  const section = page.startsWith('project') ? 'projects' : page.startsWith('publication') ? 'publications' : undefined;
  const publication = PUBLICATIONS.find(p => p.id === document.body.dataset.pubId);
  const project = PROJECTS.find(p => p.id === document.body.dataset.projectId);
  const missing = page === 'publication-detail' && !publication || page === 'project-detail' && !project;
  React.useEffect(() => {
    const titles = { home: PROFILE.name[lang] + ' — Researcher / Engineer', projects: lang === 'ja' ? 'プロジェクト' : 'Projects', publications: lang === 'ja' ? '論文' : 'Publications', 'not-found': lang === 'ja' ? 'ページが見つかりません' : 'Page not found' };
    const title = page === 'publication-detail' && publication ? publication.title : page === 'project-detail' && project ? (lang === 'ja' ? project.title_ja : project.title_en) : titles[missing ? 'not-found' : page] || titles['not-found'];
    document.title = page === 'home' ? title : title + ' — ' + PROFILE.name[lang];
  }, [lang, page, publication, project, missing]);
  React.useEffect(() => {
    // React renders after the initial document load; restore deep links once content exists.
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }, []);
  let content;
  if (missing) content = <NotFoundPage lang={lang} />;
  else if (page === 'home') content = <HomePage lang={lang} />;
  else if (page === 'projects') content = <ProjectsPage lang={lang} />;
  else if (page === 'publications') content = <PublicationsPage lang={lang} />;
  else if (page === 'publication-detail') content = <PublicationPage lang={lang} publication={publication} />;
  else if (page === 'project-detail') content = <ProjectPage lang={lang} project={project} />;
  else content = <NotFoundPage lang={lang} />;
  return <div className="layout"><a className="skip-link" href="#main-content">{lang === 'ja' ? '本文へ移動' : 'Skip to content'}</a><SiteHeader {...preferences} section={section} />{content}<SiteFooter lang={lang} /></div>;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
