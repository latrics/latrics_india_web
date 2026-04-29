const fs = require('fs');
const path = require('path');

const srcDir = path.join('c:', 'Users', 'paula', 'OneDrive', 'Documents', 'Latrics', 'Latrics Webdev', 'latrics_website', 'frontend', 'src');

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(filePath));
    } else if (filePath.endsWith('.jsx') || filePath.endsWith('.js')) {
      results.push(filePath);
    }
  });
  return results;
}

const files = walk(srcDir);

let updatedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace lib -> utils
  content = content.replace(/from "([^"]*)\/lib\/([^"]*)"/g, 'from "$1/utils/$2"');
  // Handle relative imports starting with ./ or ../ but not necessarily having /lib/ in the middle
  // Basically if it ends with /lib/cn or /lib/utils we change to /utils/cn
  content = content.replace(/from '([^']*)\/lib\/([^']*)'/g, "from '$1/utils/$2'");
  
  // Also handle exact matches like: import { cn } from "../lib/cn"
  // The regex above handles it: `from "../../lib/cn"` becomes `from "../../utils/cn"`

  // Replace data -> constants
  content = content.replace(/from "([^"]*)\/data\/([^"]*)"/g, 'from "$1/constants/$2"');
  content = content.replace(/from '([^']*)\/data\/([^']*)'/g, "from '$1/constants/$2'");

  // Replace sections -> home
  content = content.replace(/from "([^"]*)\/sections\/([^"]*)"/g, 'from "$1/home/$2"');
  content = content.replace(/from '([^']*)\/sections\/([^']*)'/g, "from '$1/home/$2'");
  content = content.replace(/import (.*) from "([^"]*)\/sections"/g, 'import $1 from "$2/home"');
  content = content.replace(/import (.*) from "\.\/sections\/([^"]*)"/g, 'import $1 from "./home/$2"');
  
  // Specific fix for App.jsx importing from ./components/sections
  content = content.replace(/components\/sections/g, 'components/home');

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    updatedCount++;
    console.log(`Updated imports in: ${path.basename(file)}`);
  }
});

console.log(`Fixed imports in ${updatedCount} files.`);
