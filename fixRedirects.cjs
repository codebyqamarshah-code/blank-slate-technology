const fs = require('fs');
const path = require('path');

function fixRedirects(filePath) {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/return\s+\{\(\(\)\s*=>\s*\{\s*redirect\((['"].*?['"])\);\s*return null;\s*\}\)\(\)\};/g, 'return redirect($1);');
    
    // Some other files might have the plain replace without return. Let's fix that too just in case.
    content = content.replace(/\{\(\(\)\s*=>\s*\{\s*redirect\((['"].*?['"])\);\s*return null;\s*\}\)\(\)\}/g, 'redirect($1)');
    
    fs.writeFileSync(filePath, content);
  }
}

fixRedirects('src/app/blog/[slug]/page.jsx');
fixRedirects('src/app/services/[slug]/page.jsx');
