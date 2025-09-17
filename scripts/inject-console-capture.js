const fs = require('fs');
const path = require('path');
const glob = require('glob');

function injectConsoleScript() {
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  const htmlFiles = glob.sync('.next/**/*.html', { ignore: '.next/cache/**' });
  
  htmlFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    if (!content.includes('dashboard-console-capture.js')) {
      content = content.replace('</head>', `  ${scriptTag}\n</head>`);
      fs.writeFileSync(file, content);
      console.log(`Injected console capture script into ${file}`);
    }
  });
  
  console.log(`Processed ${htmlFiles.length} HTML files`);
}

if (require.main === module) {
  injectConsoleScript();
}

module.exports = injectConsoleScript;