const fs = require('fs');
const path = require('path');

const stateFiles = [
  'jharkhand.ts', 'chhattisgarh.ts', 'sikkim.ts', 'meghalaya.ts',
  'manipur.ts', 'nagaland.ts', 'tripura.ts', 'mizoram.ts',
  'arunachalPradesh.ts', 'ladakh.ts', 'delhi.ts'
];

const missing = [];

stateFiles.forEach(f => {
  const content = fs.readFileSync(path.join('src', 'data', f), 'utf8');
  const matches = content.match(/\/images\/[a-z0-9_\-\/]+\.(jpg|jpeg|png)/gi) || [];
  matches.forEach(img => {
    const diskPath = path.join('public', img.replace(/^\//, ''));
    if (!fs.existsSync(diskPath) || fs.statSync(diskPath).size < 3000) {
      missing.push({ stateFile: f, img, diskPath });
    }
  });
});

console.log(`Total missing image references in Batch 2: ${missing.length}`);
missing.forEach(m => console.log(`  ${m.stateFile} -> ${m.img}`));

fs.writeFileSync('scratch/missing_batch2.json', JSON.stringify(missing, null, 2));
