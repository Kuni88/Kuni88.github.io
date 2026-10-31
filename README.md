# Kunihiro Takeoka — personal website

The repository contains the static files served by GitHub Pages.

All content pages, including the home page, project and publication archives,
detail pages, and 404 page, use the same React application and stylesheet.
The HTML files retain their individual metadata and identify the page to render
with `data-page`, `data-project-id`, or `data-pub-id`.

- Edit content in `js/site-data.js`.
- Edit shared components and page layouts in `js/site-app.jsx`.
- Edit layout and typography in `css/site.css`, and shared colors in `css/brand.css`.

After editing JSX or upgrading React:

```sh
npm ci
npm run build
npm run check
```

Commit the generated `js/site-app.js` and React browser assets together with the
source. GitHub Pages serves the generated assets directly; no runtime JSX
compiler or server-side build is required.

To preview locally:

```sh
python3 -m http.server 8091 --bind 127.0.0.1
```

Open <http://127.0.0.1:8091/>. Language and theme preferences are shared across
all pages.
