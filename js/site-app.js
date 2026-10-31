// Generated from site-app.jsx. Run npm run build after editing.
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PROFILE,
  PUBLICATIONS,
  PROJECTS,
  EXPERIENCE,
  LINKS
} = window;
const T = {
  en: {
    language: "Switch to Japanese",
    publications: "Publications",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    present: "present",
    toggle_theme: "toggle theme"
  },
  ja: {
    language: "Switch to English",
    publications: "論文",
    projects: "プロジェクト",
    experience: "職歴",
    education: "学歴",
    present: "現在",
    toggle_theme: "テーマ切替"
  }
};
function Icon({
  name,
  size = 16,
  style
}) {
  const s = {
    width: size,
    height: size,
    display: "inline-block",
    verticalAlign: "middle",
    flexShrink: 0,
    ...style
  };
  const svg = paths => React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: s
  }, paths);
  switch (name) {
    case "github":
      return React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        style: s
      }, React.createElement("path", {
        d: "M12 .5C5.65.5.5 5.65.5 12.02c0 5.1 3.29 9.42 7.86 10.96.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.27.73-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.55 4.56-1.54 7.85-5.86 7.85-10.96C23.5 5.65 18.35.5 12 .5z"
      }));
    case "scholar":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M12 3 2 9l10 6 7.5-4.5"
      }), React.createElement("path", {
        d: "M19.5 10.5V15"
      }), React.createElement("path", {
        d: "M6 12v3c0 1.5 3 3 6 3s6-1.5 6-3v-3"
      })));
    case "dblp":
      return svg(React.createElement(React.Fragment, null, React.createElement("rect", {
        x: "4",
        y: "4",
        width: "16",
        height: "6",
        rx: "1.5"
      }), React.createElement("rect", {
        x: "4",
        y: "14",
        width: "16",
        height: "6",
        rx: "1.5"
      }), React.createElement("circle", {
        cx: "7.5",
        cy: "7",
        r: "0.8",
        fill: "currentColor"
      }), React.createElement("circle", {
        cx: "7.5",
        cy: "17",
        r: "0.8",
        fill: "currentColor"
      })));
    case "twitter":
      return React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        style: s
      }, React.createElement("path", {
        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      }));
    case "mail":
      return svg(React.createElement(React.Fragment, null, React.createElement("rect", {
        x: "2",
        y: "4",
        width: "20",
        height: "16",
        rx: "2"
      }), React.createElement("path", {
        d: "m2 7 10 7 10-7"
      })));
    case "paper":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M7 3h7l5 5v13H7z"
      }), React.createElement("path", {
        d: "M14 3v5h5"
      }), React.createElement("path", {
        d: "M10 13h6M10 17h6"
      })));
    case "hammer":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M14 4l6 6-3 3-2-2-8 8-3-3 8-8-2-2z"
      })));
    case "briefcase":
      return svg(React.createElement(React.Fragment, null, React.createElement("rect", {
        x: "3",
        y: "7",
        width: "18",
        height: "13",
        rx: "2"
      }), React.createElement("path", {
        d: "M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
      }), React.createElement("path", {
        d: "M3 13h18"
      })));
    case "grad":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M12 3 2 8l10 5 10-5z"
      }), React.createElement("path", {
        d: "M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"
      }), React.createElement("path", {
        d: "M22 8v6"
      })));
    case "sparkle":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M12 3v6M12 15v6M3 12h6M15 12h6"
      }), React.createElement("path", {
        d: "m6 6 3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"
      })));
    case "bot":
      return svg(React.createElement(React.Fragment, null, React.createElement("rect", {
        x: "7",
        y: "8",
        width: "10",
        height: "9",
        rx: "2"
      }), React.createElement("path", {
        d: "M12 3v3M9 17v2M15 17v2M4 11h3M17 11h3"
      }), React.createElement("circle", {
        cx: "10",
        cy: "12",
        r: "1",
        fill: "currentColor"
      }), React.createElement("circle", {
        cx: "14",
        cy: "12",
        r: "1",
        fill: "currentColor"
      })));
    case "search":
      return svg(React.createElement(React.Fragment, null, React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "7"
      }), React.createElement("path", {
        d: "m20 20-4-4"
      })));
    case "tag":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M3 12V4h8l10 10-8 8z"
      }), React.createElement("circle", {
        cx: "7.5",
        cy: "8",
        r: "1.3"
      })));
    case "question":
      return svg(React.createElement(React.Fragment, null, React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }), React.createElement("path", {
        d: "M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.7v.5"
      }), React.createElement("circle", {
        cx: "12",
        cy: "17",
        r: "0.6",
        fill: "currentColor"
      })));
    case "tree":
      return svg(React.createElement(React.Fragment, null, React.createElement("circle", {
        cx: "6",
        cy: "6",
        r: "2"
      }), React.createElement("circle", {
        cx: "18",
        cy: "6",
        r: "2"
      }), React.createElement("circle", {
        cx: "12",
        cy: "18",
        r: "2"
      }), React.createElement("path", {
        d: "M7.5 7.5 10.5 16.5M16.5 7.5 13.5 16.5"
      })));
    case "trophy":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M8 4h8v5a4 4 0 0 1-8 0V4z"
      }), React.createElement("path", {
        d: "M8 6H5v2a3 3 0 0 0 3 3M16 6h3v2a3 3 0 0 1-3 3"
      }), React.createElement("path", {
        d: "M10 14h4v3h2v3H8v-3h2z"
      })));
    case "wine":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M7 3h10l-1 7a4 4 0 0 1-8 0z"
      }), React.createElement("path", {
        d: "M12 14v6M8 20h8"
      })));
    case "sticker":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M4 4h12v12l-4 4H4z"
      }), React.createElement("path", {
        d: "M16 16h-4v4"
      })));
    case "code":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"
      })));
    case "moon":
      return svg(React.createElement(React.Fragment, null, React.createElement("path", {
        d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      })));
    case "sun":
      return svg(React.createElement(React.Fragment, null, React.createElement("circle", {
        cx: "12",
        cy: "12",
        r: "5"
      }), React.createElement("path", {
        d: "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
      })));
    default:
      return null;
  }
}
function Chip({
  children,
  style
}) {
  return React.createElement("span", {
    className: "mono",
    style: {
      display: "inline-block",
      padding: "1px 8px",
      fontSize: 11,
      background: "var(--bg-2)",
      color: "var(--fg-2)",
      border: "1px solid var(--border)",
      borderRadius: 999,
      ...style
    }
  }, children);
}
function SectionHeader({
  title,
  href,
  seeAllLabel
}) {
  return React.createElement("div", {
    className: "section-header",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, React.createElement("h2", null, title), href && React.createElement("a", {
    href: href,
    className: "mono"
  }, seeAllLabel));
}
function PubCard({
  p,
  lang = "en",
  showSummary = false,
  headingLevel = "h3"
}) {
  const Title = headingLevel;
  return React.createElement("a", {
    className: "research-row",
    href: p.url
  }, React.createElement("span", {
    className: "research-venue mono"
  }, p.venue.replace(/\s+\d{4}$/, ""), React.createElement("small", null, p.year)), React.createElement("span", {
    className: "research-content"
  }, React.createElement(Title, null, p.title), React.createElement("span", {
    className: "research-authors"
  }, p.authors.map((a, i) => React.createElement(React.Fragment, {
    key: a + i
  }, i > 0 && ", ", a === PROFILE.name.en ? React.createElement("strong", null, a) : a))), showSummary && React.createElement("span", {
    className: "paper-summary"
  }, lang === "ja" ? p.summary_ja : p.summary_en)), React.createElement("span", {
    className: "row-arrow",
    "aria-hidden": "true"
  }, "\u2197"));
}
function ProjectCard({
  p,
  lang,
  headingLevel = "h3"
}) {
  const Title = headingLevel;
  const content = React.createElement(React.Fragment, null, React.createElement("div", {
    className: "project-meta mono"
  }, React.createElement("span", null, p.year, " / ", p.tag), React.createElement(Icon, {
    name: p.icon || "code",
    size: 18
  })), React.createElement(Title, null, lang === "en" ? p.title_en : p.title_ja), React.createElement("p", null, lang === "en" ? p.desc_en : p.desc_ja), React.createElement("span", {
    className: "project-open"
  }, lang === "en" ? "Explore project" : "プロジェクトを見る", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197")));
  return p.url ? React.createElement("a", {
    className: "project-tile",
    href: p.url,
    target: p.url.startsWith("http") ? "_blank" : undefined,
    rel: "noopener"
  }, content) : React.createElement("div", {
    className: "project-tile"
  }, content);
}
function HomePage({
  lang
}) {
  const t = T[lang];
  const ja = lang === "ja";
  const featured = PROJECTS[0];
  return React.createElement("main", {
    id: "main-content",
    tabIndex: -1
  }, React.createElement("section", {
    className: "hero",
    "aria-labelledby": "hero-title"
  }, React.createElement("div", {
    className: "hero-portrait"
  }, React.createElement("img", {
    src: "/authors/admin/avatar.png",
    alt: PROFILE.name[lang],
    width: "128",
    height: "128"
  })), React.createElement("div", {
    className: "hero-bio"
  }, React.createElement("p", {
    className: "hero-eyebrow"
  }, "Researcher / Engineer ", React.createElement("span", null, "\xB7 ", PROFILE.location)), React.createElement("h1", {
    id: "hero-title"
  }, PROFILE.name[lang]), React.createElement("p", {
    className: "hero-role"
  }, PROFILE.role[lang], " \xB7 NEC"), React.createElement("p", {
    className: "hero-description"
  }, ja ? "人とAIの間の研究をし、社会で使えるシステムにしています。" : "I study how people interact with AI."), React.createElement("ul", {
    className: "hero-specialties",
    "aria-label": ja ? "専門分野" : "Research areas"
  }, (ja ? ["自然言語処理", "情報検索", "Human–Computer Interaction"] : ["Natural language processing", "Information retrieval", "Human–Computer Interaction"]).map(area => React.createElement("li", {
    key: area
  }, area))), React.createElement("p", {
    className: "hero-mission"
  }, ja ? "やりたい仕事に、集中できる世界に。" : "More room for work you love."), React.createElement("nav", {
    className: "hero-links",
    "aria-label": ja ? "研究活動と連絡先" : "Research and contact"
  }, React.createElement("a", {
    className: "hero-primary",
    href: "#publications"
  }, t.publications, React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2193")), LINKS.filter(l => ["scholar", "github", "email"].includes(l.label)).map(l => React.createElement("a", {
    key: l.label,
    href: l.url,
    target: l.url.startsWith("mailto") ? undefined : "_blank",
    rel: "noopener"
  }, React.createElement(Icon, {
    name: l.icon,
    size: 17
  }), l.label === "scholar" ? "Google Scholar" : l.label === "github" ? "GitHub" : ja ? "連絡先" : "Email", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197")))))), React.createElement("section", {
    className: "featured-work",
    "aria-labelledby": "featured-title"
  }, React.createElement("div", {
    className: "featured-label"
  }, ja ? "現在の仕事" : "Current work"), React.createElement("div", {
    className: "featured-copy"
  }, React.createElement("h2", {
    id: "featured-title"
  }, "NEC cotomi Agent"), React.createElement("p", null, ja ? "プロダクトマネージャーとして、デジタル業務の継続的な自動化を実現するエージェントの開発に取り組んでいます。" : "As Product Manager, I work on agent technology for the continuous automation of digital operations."), React.createElement("div", {
    className: "featured-links"
  }, React.createElement("a", {
    href: featured.url,
    target: "_blank",
    rel: "noopener"
  }, ja ? "NECの発表" : "NEC announcement", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197")), React.createElement("a", {
    href: "/publication/oyamada-2026-cais/"
  }, ja ? "関連論文" : "Related publication", React.createElement("span", {
    "aria-hidden": "true"
  }, "\u2197"))))), React.createElement("section", {
    id: "projects",
    className: "content-section"
  }, React.createElement(SectionHeader, {
    title: ja ? "主なプロジェクト" : "Selected projects",
    href: "/project/",
    seeAllLabel: ja ? "すべてのプロジェクト →" : "All projects →"
  }), React.createElement("p", {
    className: "section-description"
  }, ja ? "NECでの主な取り組みです。個人制作や過去の取り組みは、プロジェクト一覧にまとめています。" : "Selected work at NEC. Personal projects and earlier work are in the full archive."), React.createElement("div", {
    className: "project-grid"
  }, PROJECTS.slice(0, 3).map(p => React.createElement(ProjectCard, {
    key: p.id,
    p: p,
    lang: lang
  })))), React.createElement("section", {
    id: "publications",
    className: "content-section research-section"
  }, React.createElement(SectionHeader, {
    title: ja ? "最近の論文" : "Recent publications",
    href: "/publication/",
    seeAllLabel: ja ? "すべての論文 →" : "All publications →"
  }), React.createElement("div", null, PUBLICATIONS.slice(0, 5).map(p => React.createElement(PubCard, {
    key: p.id,
    p: p
  })))), React.createElement("section", {
    id: "about",
    className: "content-section about-section"
  }, React.createElement("div", {
    className: "about-intro"
  }, React.createElement("div", {
    className: "mono about-label"
  }, ja ? "プロフィール" : "ABOUT ME"), React.createElement("h2", null, PROFILE.name[lang]), React.createElement("p", {
    className: "about-role"
  }, PROFILE.role[lang], React.createElement("br", null), PROFILE.org[lang]), React.createElement("div", {
    className: "interest-list"
  }, PROFILE.interests[lang].map(i => React.createElement(Chip, {
    key: i
  }, i))), React.createElement("div", {
    className: "contact-links"
  }, LINKS.map(l => React.createElement("a", {
    href: l.url,
    key: l.label,
    "aria-label": l.label,
    target: l.url.startsWith("mailto") ? undefined : "_blank",
    rel: "noopener"
  }, React.createElement(Icon, {
    name: l.icon,
    size: 18
  }), React.createElement("span", null, l.label))))), React.createElement("div", {
    className: "career"
  }, React.createElement("h3", null, t.experience), EXPERIENCE.map((e, i) => React.createElement("div", {
    className: "career-row",
    key: i
  }, React.createElement("div", {
    className: "mono career-date"
  }, e.start, " \u2014 ", e.end || t.present), React.createElement("div", null, React.createElement("h4", null, e.url ? React.createElement("a", {
    href: e.url,
    target: "_blank",
    rel: "noopener"
  }, ja ? e.title_ja : e.title_en, React.createElement("span", {
    "aria-hidden": "true"
  }, " \u2197")) : ja ? e.title_ja : e.title_en), React.createElement("span", {
    className: "career-org"
  }, e.org), React.createElement("p", null, ja ? e.notes_ja : e.notes_en)))), React.createElement("h3", {
    className: "education-title"
  }, t.education), PROFILE.education.map(e => React.createElement("div", {
    className: "career-row",
    key: e.year
  }, React.createElement("div", {
    className: "mono career-date"
  }, e.year), React.createElement("div", null, React.createElement("h4", null, ja ? e.degree_ja : e.degree_en), React.createElement("p", null, ja ? e.school_ja : e.school_en)))))));
}
function usePreferences() {
  const read = (key, allowed, fallback) => {
    try {
      const value = localStorage.getItem(key);
      return allowed.includes(value) ? value : fallback;
    } catch (_) {
      return fallback;
    }
  };
  const [lang, setLang] = React.useState(() => read('kuni_lang', ['en', 'ja'], 'en'));
  const [theme, setTheme] = React.useState(() => read('kuni_theme', ['light', 'dark'], 'light'));
  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('kuni_lang', lang);
      localStorage.setItem('kuni_theme', theme);
    } catch (_) {}
  }, [lang, theme]);
  return {
    lang,
    setLang,
    theme,
    setTheme
  };
}
function SiteHeader({
  lang,
  setLang,
  theme,
  setTheme,
  section
}) {
  const ja = lang === 'ja';
  const navigation = [{
    href: '/project/',
    label: ja ? 'プロジェクト' : 'Projects',
    section: 'projects'
  }, {
    href: '/publication/',
    label: ja ? '論文' : 'Publications',
    section: 'publications'
  }, {
    href: '/#about',
    label: ja ? 'プロフィール' : 'About',
    section: 'about'
  }];
  return React.createElement("header", {
    className: "site-header"
  }, React.createElement("a", {
    className: "wordmark",
    href: "/",
    "aria-label": ja ? 'ホーム' : 'Home'
  }, React.createElement("span", {
    className: "site-mark-image",
    "aria-hidden": "true"
  }), React.createElement("span", null, PROFILE.name[lang])), React.createElement("nav", {
    className: "header-nav",
    "aria-label": ja ? 'メインナビゲーション' : 'Main navigation'
  }, navigation.map(item => React.createElement("a", {
    key: item.href,
    href: item.href,
    "aria-current": section === item.section ? 'page' : undefined
  }, item.label))), React.createElement("div", {
    className: "header-controls"
  }, React.createElement("button", {
    "aria-label": ja ? 'テーマ切替' : 'Toggle theme',
    "aria-pressed": theme === 'dark',
    onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark')
  }, React.createElement(Icon, {
    name: theme === 'dark' ? 'sun' : 'moon'
  })), React.createElement("button", {
    className: "mono",
    "aria-label": lang === 'en' ? 'Switch to Japanese' : 'Switch to English',
    onClick: () => setLang(lang === 'en' ? 'ja' : 'en')
  }, lang === 'en' ? 'JA' : 'EN')));
}
function SiteFooter({
  lang
}) {
  return React.createElement("footer", {
    className: "page-footer"
  }, React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " ", PROFILE.name.en), React.createElement("a", {
    href: "#main-content"
  }, lang === 'ja' ? 'ページの先頭へ ↑' : 'Back to top ↑'));
}
function Breadcrumb({
  lang,
  section
}) {
  return React.createElement("nav", {
    className: "breadcrumbs",
    "aria-label": lang === 'ja' ? 'パンくずリスト' : 'Breadcrumb'
  }, React.createElement("a", {
    href: "/"
  }, lang === 'ja' ? 'ホーム' : 'Home'), section && React.createElement(React.Fragment, null, React.createElement("span", {
    "aria-hidden": "true"
  }, "/"), React.createElement("a", {
    href: section === 'projects' ? '/project/' : '/publication/'
  }, section === 'projects' ? lang === 'ja' ? 'プロジェクト' : 'Projects' : lang === 'ja' ? '論文' : 'Publications')));
}
function ProjectsPage({
  lang
}) {
  const ja = lang === 'ja';
  return React.createElement("main", {
    id: "main-content",
    tabIndex: -1,
    className: "archive-page"
  }, React.createElement(Breadcrumb, {
    lang: lang
  }), React.createElement("header", {
    className: "page-heading"
  }, React.createElement("h1", null, ja ? 'プロジェクト' : 'Projects'), React.createElement("p", null, ja ? '研究開発から個人制作まで、これまでの取り組みを紹介します。' : 'Research, development, and personal projects.')), React.createElement("div", {
    className: "project-grid"
  }, PROJECTS.map(p => React.createElement(ProjectCard, {
    key: p.id,
    p: p,
    lang: lang,
    headingLevel: "h2"
  }))));
}
function PublicationsPage({
  lang
}) {
  const ja = lang === 'ja';
  return React.createElement("main", {
    id: "main-content",
    tabIndex: -1,
    className: "archive-page"
  }, React.createElement(Breadcrumb, {
    lang: lang
  }), React.createElement("header", {
    className: "page-heading"
  }, React.createElement("h1", null, ja ? '論文' : 'Publications')), React.createElement("div", {
    className: "publication-archive"
  }, PUBLICATIONS.map(p => React.createElement(PubCard, {
    key: p.id,
    p: p,
    lang: lang,
    showSummary: true,
    headingLevel: "h2"
  }))));
}
function Authors({
  authors
}) {
  return React.createElement("div", {
    className: "detail-authors"
  }, authors.map((author, i) => React.createElement(React.Fragment, {
    key: author + i
  }, i > 0 && ', ', author === PROFILE.name.en ? React.createElement("strong", null, author) : author)));
}
function ActionLink({
  href,
  children
}) {
  const external = /^https?:/.test(href);
  return React.createElement("a", {
    className: "action-link",
    href: href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener' : undefined
  }, children, React.createElement("span", {
    "aria-hidden": "true"
  }, external ? '↗' : '→'));
}
function PublicationPage({
  lang,
  publication: p
}) {
  const ja = lang === 'ja';
  const summary = (ja ? p.summary_ja : p.summary_en) || p.summary_en;
  return React.createElement("main", {
    id: "main-content",
    tabIndex: -1,
    className: "detail-page"
  }, React.createElement(Breadcrumb, {
    lang: lang,
    section: "publications"
  }), React.createElement("article", null, React.createElement("header", {
    className: "detail-heading"
  }, React.createElement("div", {
    className: "detail-meta"
  }, React.createElement("span", {
    className: "mono"
  }, p.venue.replace(/\s+\d{4}$/, '')), React.createElement("time", {
    dateTime: String(p.year)
  }, p.month, " ", p.year), React.createElement(Chip, null, p.tag)), React.createElement("h1", null, p.title), React.createElement(Authors, {
    authors: p.authors
  })), p.image && React.createElement("figure", {
    className: "detail-image"
  }, React.createElement("img", {
    src: p.image,
    alt: p.title,
    decoding: "async"
  })), summary && React.createElement("p", {
    className: "detail-copy"
  }, summary), React.createElement("div", {
    className: "detail-actions"
  }, p.pdf_url && React.createElement(ActionLink, {
    href: p.pdf_url
  }, ja ? '論文を読む' : 'Read paper'), p.doi_url && p.doi_url !== p.pdf_url && React.createElement(ActionLink, {
    href: p.doi_url
  }, "DOI"), p.bib && React.createElement(ActionLink, {
    href: '/publication/' + p.slug + '/cite.bib'
  }, ja ? '引用情報（BibTeX）' : 'Cite (BibTeX)')), React.createElement("a", {
    className: "back-link",
    href: "/publication/"
  }, "\u2190 ", ja ? '論文一覧へ' : 'All publications')));
}
function ProjectPage({
  lang,
  project: p
}) {
  const ja = lang === 'ja';
  const title = ja ? p.title_ja : p.title_en;
  const body = (ja ? p.body_ja : p.body_en) || (ja ? p.desc_ja : p.desc_en);
  const projectHref = p.external_url || p.url;
  const url = projectHref ? new URL(projectHref, location.href) : null;
  const normalizePath = path => path.replace(/\/(?:index\.html)?$/, '');
  const isSelfLink = url && url.origin === location.origin && normalizePath(url.pathname) === normalizePath(location.pathname);
  return React.createElement("main", {
    id: "main-content",
    tabIndex: -1,
    className: "detail-page"
  }, React.createElement(Breadcrumb, {
    lang: lang,
    section: "projects"
  }), React.createElement("article", null, React.createElement("header", {
    className: "detail-heading"
  }, React.createElement("div", {
    className: "detail-meta"
  }, React.createElement("time", {
    className: "mono",
    dateTime: String(p.year)
  }, p.year), React.createElement(Chip, null, p.tag)), React.createElement("h1", null, title)), p.image && React.createElement("figure", {
    className: "detail-image"
  }, React.createElement("img", {
    src: p.image,
    alt: title,
    decoding: "async"
  })), body && React.createElement("p", {
    className: "detail-copy"
  }, body), React.createElement("div", {
    className: "detail-actions"
  }, p.video_url && React.createElement(ActionLink, {
    href: p.video_url
  }, ja ? '動画を見る' : 'Watch video'), projectHref && !isSelfLink && React.createElement(ActionLink, {
    href: projectHref
  }, ja ? 'プロジェクトを見る' : 'View project')), React.createElement("a", {
    className: "back-link",
    href: "/project/"
  }, "\u2190 ", ja ? 'プロジェクト一覧へ' : 'All projects')));
}
function NotFoundPage({
  lang
}) {
  const ja = lang === 'ja';
  return React.createElement("main", {
    id: "main-content",
    tabIndex: -1,
    className: "not-found-page"
  }, React.createElement("span", {
    className: "mono"
  }, "404"), React.createElement("h1", null, ja ? 'ページが見つかりません。' : 'Page not found.'), React.createElement("p", null, ja ? 'ページが移動したか、URLが変更された可能性があります。' : 'This page may have moved or the URL may have changed.'), React.createElement("div", {
    className: "detail-actions"
  }, React.createElement(ActionLink, {
    href: "/"
  }, ja ? 'ホームへ' : 'Home'), React.createElement(ActionLink, {
    href: "/publication/"
  }, ja ? '論文' : 'Publications'), React.createElement(ActionLink, {
    href: "/project/"
  }, ja ? 'プロジェクト' : 'Projects')));
}
function App() {
  const preferences = usePreferences();
  const {
    lang
  } = preferences;
  const page = document.body.dataset.page || 'home';
  const section = page.startsWith('project') ? 'projects' : page.startsWith('publication') ? 'publications' : undefined;
  const publication = PUBLICATIONS.find(p => p.id === document.body.dataset.pubId);
  const project = PROJECTS.find(p => p.id === document.body.dataset.projectId);
  const missing = page === 'publication-detail' && !publication || page === 'project-detail' && !project;
  React.useEffect(() => {
    const titles = {
      home: PROFILE.name[lang] + ' — Researcher / Engineer',
      projects: lang === 'ja' ? 'プロジェクト' : 'Projects',
      publications: lang === 'ja' ? '論文' : 'Publications',
      'not-found': lang === 'ja' ? 'ページが見つかりません' : 'Page not found'
    };
    const title = page === 'publication-detail' && publication ? publication.title : page === 'project-detail' && project ? lang === 'ja' ? project.title_ja : project.title_en : titles[missing ? 'not-found' : page] || titles['not-found'];
    document.title = page === 'home' ? title : title + ' — ' + PROFILE.name[lang];
  }, [lang, page, publication, project, missing]);
  React.useEffect(() => {
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView();
  }, []);
  let content;
  if (missing) content = React.createElement(NotFoundPage, {
    lang: lang
  });else if (page === 'home') content = React.createElement(HomePage, {
    lang: lang
  });else if (page === 'projects') content = React.createElement(ProjectsPage, {
    lang: lang
  });else if (page === 'publications') content = React.createElement(PublicationsPage, {
    lang: lang
  });else if (page === 'publication-detail') content = React.createElement(PublicationPage, {
    lang: lang,
    publication: publication
  });else if (page === 'project-detail') content = React.createElement(ProjectPage, {
    lang: lang,
    project: project
  });else content = React.createElement(NotFoundPage, {
    lang: lang
  });
  return React.createElement("div", {
    className: "layout"
  }, React.createElement("a", {
    className: "skip-link",
    href: "#main-content"
  }, lang === 'ja' ? '本文へ移動' : 'Skip to content'), React.createElement(SiteHeader, _extends({}, preferences, {
    section: section
  })), content, React.createElement(SiteFooter, {
    lang: lang
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));
