const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');
const pagesDir = path.join(srcDir, 'pages');
const appDir = path.join(srcDir, 'app');

// 1. Create app directories
const routes = {
  'Home.jsx': 'page.jsx',
  'About.jsx': 'about/page.jsx',
  'Services.jsx': 'services/page.jsx',
  'ServiceDetail.jsx': 'services/[slug]/page.jsx',
  'Work.jsx': 'work/page.jsx',
  'Institute.jsx': 'institute/page.jsx',
  'Insights.jsx': 'insights/page.jsx',
  'BlogDetail.jsx': 'blog/[slug]/page.jsx',
  'Contact.jsx': 'contact/page.jsx',
  'Apply.jsx': 'apply/page.jsx',
  'Terms.jsx': 'terms/page.jsx',
  'Privacy.jsx': 'privacy/page.jsx'
};

if (!fs.existsSync(appDir)) fs.mkdirSync(appDir, { recursive: true });

for (const [oldFile, newPath] of Object.entries(routes)) {
  const oldPath = path.join(pagesDir, oldFile);
  const newFullPath = path.join(appDir, newPath);
  if (fs.existsSync(oldPath)) {
    fs.mkdirSync(path.dirname(newFullPath), { recursive: true });
    fs.renameSync(oldPath, newFullPath);
  }
}

// 2. Process Layout.jsx
const layoutPath = path.join(srcDir, 'components', 'layout', 'Layout.jsx');
if (fs.existsSync(layoutPath)) {
  let layoutContent = fs.readFileSync(layoutPath, 'utf8');
  layoutContent = layoutContent.replace(/import\s+\{\s*Outlet[^\}]*\}\s+from\s+['"]react-router-dom['"];?/, '');
  layoutContent = layoutContent.replace(/const\s+Layout\s*=\s*\(\)\s*=>\s*\{/, 'const Layout = ({ children }) => {');
  layoutContent = layoutContent.replace(/<Outlet\s*\/>/, '{children}');
  // Remove scroll to top useEffect
  layoutContent = layoutContent.replace(/const\s+location\s*=\s*useLocation\(\);/g, '');
  layoutContent = layoutContent.replace(/useEffect\(\(\)\s*=>\s*\{\s*window\.scrollTo\(0,\s*0\);\s*\},\s*\[location\.pathname\]\);/g, '');
  fs.writeFileSync(layoutPath, layoutContent);
}

// 3. Process all JSX files to update imports, add "use client", etc.
function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      // Replace react-router-dom Link with next/link
      content = content.replace(/import\s+\{([^}]*)\}\s+from\s+['"]react-router-dom['"];?/g, (match, imports) => {
        let newImports = [];
        let nextImports = [];
        let rrdImports = imports.split(',').map(i => i.trim());

        if (rrdImports.includes('Link')) {
          newImports.push(`import Link from 'next/link';`);
          rrdImports = rrdImports.filter(i => i !== 'Link');
        }
        if (rrdImports.includes('useNavigate') || rrdImports.includes('useLocation') || rrdImports.includes('useParams') || rrdImports.includes('Navigate')) {
          let navImports = [];
          if (rrdImports.includes('useNavigate')) { navImports.push('useRouter'); rrdImports = rrdImports.filter(i => i !== 'useNavigate'); }
          if (rrdImports.includes('useLocation')) { navImports.push('usePathname'); rrdImports = rrdImports.filter(i => i !== 'useLocation'); }
          if (rrdImports.includes('useParams')) { navImports.push('useParams'); rrdImports = rrdImports.filter(i => i !== 'useParams'); }
          if (rrdImports.includes('Navigate')) { navImports.push('redirect'); rrdImports = rrdImports.filter(i => i !== 'Navigate'); }
          if (navImports.length > 0) {
            newImports.push(`import { ${navImports.join(', ')} } from 'next/navigation';`);
          }
        }
        if (rrdImports.length > 0) {
          // If there are leftovers, we just comment them or leave them to fail visibly so we can fix, 
          // but mostly it's just the above.
          // newImports.push(`import { ${rrdImports.join(', ')} } from 'react-router-dom';`);
        }
        return newImports.join('\n');
      });

      // Navigate component replacement (redirect)
      content = content.replace(/<Navigate\s+to=(['"])(.*?)\1\s*replace\s*\/>/g, (match, quote, path) => {
         return `{(() => { redirect(${quote}${path}${quote}); return null; })()}`;
      });

      // Replace navigate() with router.push() if useNavigate was used
      content = content.replace(/const\s+navigate\s*=\s*useNavigate\(\)/g, 'const router = useRouter()');
      content = content.replace(/navigate\(/g, 'router.push(');

      // Replace Link to with Link href
      content = content.replace(/<Link([^>]*)to=/g, '<Link$1href=');
      // Some Links might have 'to' on a new line
      content = content.replace(/<Link\s+to=/g, '<Link href=');

      // Add "use client" if not present
      if (!content.includes('"use client"') && !content.includes("'use client'")) {
         content = `"use client";\n` + content;
      }

      fs.writeFileSync(fullPath, content);
    }
  }
}

processDirectory(path.join(srcDir, 'components'));
processDirectory(path.join(srcDir, 'app'));

// 4. Create root layout.jsx
const layoutContent = `
import { ReactLenis } from 'lenis/react';
import { ThemeProvider } from '../context/ThemeContext';
import CustomCursor from '../components/ui/CustomCursor';
import Layout from '../components/layout/Layout';
import '../index.css';

export const metadata = {
  title: 'Blank Slate Technology',
  description: 'We design and build digital products, intelligent systems, and technology solutions.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <ThemeProvider>
          <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
            <CustomCursor />
            <Layout>
              {children}
            </Layout>
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
`;
fs.writeFileSync(path.join(appDir, 'layout.jsx'), layoutContent);

// Add "use client" to contexts if missing
const themeContextPath = path.join(srcDir, 'context', 'ThemeContext.jsx');
if (fs.existsSync(themeContextPath)) {
  let themeContent = fs.readFileSync(themeContextPath, 'utf8');
  if (!themeContent.includes('"use client"')) {
    fs.writeFileSync(themeContextPath, '"use client";\n' + themeContent);
  }
}

// 5. Update package.json
const pkgPath = path.join(process.cwd(), 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.scripts.dev = "next dev";
pkg.scripts.build = "next build";
pkg.scripts.start = "next start";
pkg.scripts.lint = "next lint";
delete pkg.scripts.preview;
pkg.dependencies.next = "^15.0.0";
delete pkg.dependencies['react-router-dom'];
delete pkg.devDependencies['@vitejs/plugin-react'];
delete pkg.devDependencies.vite;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

// Delete unneeded vite files
const filesToDelete = ['index.html', 'vite.config.js', 'src/App.jsx', 'src/main.jsx'];
filesToDelete.forEach(f => {
  const p = path.join(process.cwd(), f);
  if (fs.existsSync(p)) fs.unlinkSync(p);
});

console.log("Migration script complete.");
