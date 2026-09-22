const fs = require('fs');
const path = require('path');

const slugs = [
  'jharkhand', 'chhattisgarh', 'sikkim', 'meghalaya',
  'manipur', 'nagaland', 'tripura', 'mizoram',
  'arunachalpradesh', 'ladakh', 'delhi'
];

let totalValid = 0;
let invalid = [];

slugs.forEach(slug => {
  const dir = path.join('public', 'images', slug);
  if (!fs.existsSync(dir)) {
    console.log(`Directory missing: ${dir}`);
    return;
  }
  const files = fs.readdirSync(dir);
  console.log(`[${slug}] total files in dir: ${files.length}`);
  files.forEach(f => {
    const full = path.join(dir, f);
    const buf = fs.readFileSync(full);
    const isJpeg = buf[0] === 0xFF && buf[1] === 0xD8;
    const isPng = buf[0] === 0x89 && buf[1] === 0x50;
    if ((isJpeg || isPng) && buf.length > 5000) {
      totalValid++;
    } else {
      console.log(`  Invalid/small image: ${full} (${buf.length} bytes)`);
      invalid.push(full);
    }
  });
});

console.log(`\nAudit Complete: ${totalValid} valid authentic images.`);
