const fs = require('fs');
const path = require('path');
const src = 'src/app';
const depth1 = ['about', 'services', 'work', 'institute', 'insights', 'contact', 'apply', 'terms', 'privacy'];
depth1.forEach(d => {
  const p = path.join(src, d, 'page.jsx');
  if(fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/from '(\.\.\/)+/g, (match) => {
      // It had 1 level of '../' originally (from pages/). Now it needs 2.
      return "from '../../";
    });
    c = c.replace(/from "(\.\.\/)+/g, (match) => {
      return 'from "../../';
    });
    fs.writeFileSync(p, c);
  }
});
const depth2 = ['services/[slug]', 'blog/[slug]'];
depth2.forEach(d => {
  const p = path.join(src, d, 'page.jsx');
  if(fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(/from '(\.\.\/)+/g, (match) => {
      return "from '../../../";
    });
    c = c.replace(/from "(\.\.\/)+/g, (match) => {
      return 'from "../../../';
    });
    fs.writeFileSync(p, c);
  }
});
