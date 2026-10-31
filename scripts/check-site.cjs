const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'js/site-data.js'), 'utf8'), sandbox);
const { PUBLICATIONS, PROJECTS } = sandbox.window;
const exists = url => {
  const file = url.split(/[?#]/)[0];
  if (file.startsWith('/') && !file.startsWith('//') && !fs.existsSync(path.join(root, file))) throw new Error('Missing local resource: ' + url);
};
for (const p of [...PUBLICATIONS, ...PROJECTS]) {
  for (const value of [p.url, p.image]) if (value) exists(value);
  if (p.bib) exists('/publication/' + p.slug + '/cite.bib');
}
const pages = ['index.html', '404.html', 'project/index.html', 'publication/index.html'];
for (const dir of ['project', 'publication']) {
  for (const entry of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    const file = dir + '/' + entry.name + '/index.html';
    if (entry.isDirectory() && fs.existsSync(path.join(root, file))) pages.push(file);
  }
}
for (const file of pages) {
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  for (const match of html.matchAll(/(?:src|href)="([^"<>]*)"/g)) exists(match[1]);
  if (!html.includes('src="/js/site-app.js?') || !html.includes('href="/css/site.css?')) throw new Error('Page does not use the shared UI: ' + file);
  if (html.includes('text/babel') || html.includes('className="sidebar"')) throw new Error('Legacy UI remains: ' + file);
  const pubId = html.match(/data-pub-id="([^"]+)"/)?.[1];
  const projectId = html.match(/data-project-id="([^"]+)"/)?.[1];
  if (pubId && !PUBLICATIONS.some(p => p.id === pubId)) throw new Error('Unknown publication: ' + pubId);
  if (projectId && !PROJECTS.some(p => p.id === projectId)) throw new Error('Unknown project: ' + projectId);
}
console.log('Shared UI coverage, page IDs, assets, citation files, and internal routes: PASS (' + pages.length + ' pages)');
