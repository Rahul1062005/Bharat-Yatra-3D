const fs = require('fs');
const path = require('path');

const states = [
  'bihar', 'maharashtra', 'uttar-pradesh', 'rajasthan', 'kerala', 'gujarat',
  'west-bengal', 'tamil-nadu', 'karnataka', 'punjab', 'madhya-pradesh',
  'odisha', 'andhra-pradesh', 'telangana', 'assam', 'haryana',
  'himachal-pradesh', 'uttarakhand', 'goa', 'jammu-kashmir',
  'jharkhand', 'chhattisgarh', 'sikkim', 'meghalaya',
  'manipur', 'nagaland', 'tripura', 'mizoram',
  'arunachal-pradesh', 'ladakh', 'delhi'
];

console.log(`Verifying all ${states.length} states/UTs...`);

let issues = 0;

states.forEach(slug => {
  const geojson = path.join('public', 'data', `${slug}-districts.geojson`);
  if (!fs.existsSync(geojson)) {
    console.log(`[FAIL] GeoJSON missing: ${geojson}`);
    issues++;
  } else {
    const stat = fs.statSync(geojson);
    if (stat.size < 1000) {
      console.log(`[WARN] GeoJSON suspiciously small: ${geojson} (${stat.size} bytes)`);
    }
  }

  // Check image directory
  const imageDirSlug = slug === 'arunachal-pradesh' ? 'arunachalpradesh' : (slug === 'jammu-kashmir' ? 'jammu_kashmir' : (slug === 'west-bengal' ? 'westbengal' : (slug === 'tamil-nadu' ? 'tamilnadu' : (slug === 'uttar-pradesh' ? 'up' : slug.replace(/-/g, '')))));
  
  // Also check if public/images/<imageDirSlug> or public/images/<slug> exists
  let resolvedDir = path.join('public', 'images', imageDirSlug);
  if (!fs.existsSync(resolvedDir)) {
    resolvedDir = path.join('public', 'images', slug);
  }
  if (!fs.existsSync(resolvedDir)) {
    console.log(`[FAIL] Images dir missing: ${resolvedDir}`);
    issues++;
  } else {
    const files = fs.readdirSync(resolvedDir);
    if (files.length < 5) {
      console.log(`[WARN] Low photo count for ${slug}: ${files.length} photos`);
    }
  }
});

if (issues === 0) {
  console.log(`\nALL ${states.length} STATES & UTS PASSED VALIDATION!`);
} else {
  console.log(`\nFound ${issues} issues.`);
}
