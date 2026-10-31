const fs = require('node:fs');
const path = require('node:path');
const babel = require('@babel/standalone');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'js/site-app.jsx'), 'utf8');
const output = '// Generated from site-app.jsx. Run npm run build after editing.\n' +
  babel.transform(source, { presets: ['react'], comments: false }).code + '\n';
const target = path.join(root, 'js/site-app.js');
if (process.argv.includes('--check')) {
  if (!fs.existsSync(target) || fs.readFileSync(target, 'utf8') !== output) {
    throw new Error('Shared UI build is stale. Run npm run build.');
  }
  console.log('Shared UI syntax and generated asset: PASS');
} else {
  fs.writeFileSync(target, output);
  console.log('Built js/site-app.js');
}

for (const [source, destination] of [
  ['react/umd/react.production.min.js', 'js/vendor/react.production.min.js'],
  ['react-dom/umd/react-dom.production.min.js', 'js/vendor/react-dom.production.min.js'],
  ['react/LICENSE', 'js/vendor/react.LICENSE.txt'],
  ['react-dom/LICENSE', 'js/vendor/react-dom.LICENSE.txt'],
]) {
  const asset = fs.readFileSync(path.join(root, 'node_modules', source));
  const target = path.join(root, destination);
  if (process.argv.includes('--check')) {
    if (!fs.existsSync(target) || !fs.readFileSync(target).equals(asset)) throw new Error('Stale vendor asset: ' + destination);
  } else {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, asset);
  }
}
