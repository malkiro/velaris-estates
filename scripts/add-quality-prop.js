const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, fileList);
    } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = findFiles(srcDir);
let changedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  // Check if it has PrismicNextImage
  if (content.includes('<PrismicNextImage')) {
    // Regex to add quality={60} if it doesn't already have it
    const newContent = content.replace(/(<PrismicNextImage\b(?![^>]*\bquality=))/g, '$1 quality={60}');
    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      changedFiles++;
    }
  }
}

console.log(`Updated ${changedFiles} files with quality={60} for PrismicNextImage.`);
