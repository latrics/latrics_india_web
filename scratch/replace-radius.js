const fs = require('fs');
const path = require('path');

const dir = path.join('c:', 'Users', 'paula', 'OneDrive', 'Documents', 'Latrics', 'Latrics Webdev', 'latrics_website', 'frontend', 'src', 'components');

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (filePath.endsWith('.jsx')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk(dir);
// Only replace border radius classes that are larger than xl
// e.g., rounded-2xl, rounded-3xl, rounded-[2rem], etc.
const radiusRegex = /(?<!-)rounded(?:-[trblxy]|-[tr][lr]|-[bl][lr])?-(?:2xl|3xl|4xl|5xl|6xl|\[\d+(?:\.\d+)?(?:rem|px)\])/g;

let totalReplacements = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let matched = false;
  
  const newContent = content.replace(radiusRegex, (match) => {
    // If it's a specific directional rounded like rounded-t-3xl -> rounded-t-xl
    // If it's general rounded-3xl -> rounded-xl
    const prefixMatch = match.match(/(rounded(?:-[trblxy]|-[tr][lr]|-[bl][lr])?)-/);
    if (prefixMatch) {
      matched = true;
      return `${prefixMatch[1]}-xl`;
    }
    return match;
  });

  if (matched) {
    fs.writeFileSync(file, newContent, 'utf8');
    totalReplacements++;
    console.log('Updated: ' + file);
  }
});

console.log('Total files updated: ' + totalReplacements);
