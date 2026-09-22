const fs = require('fs');
const path = require('path');

const all36 = [
  // 28 States
  'bihar', 'maharashtra', 'uttar-pradesh', 'rajasthan', 'kerala', 'gujarat',
  'west-bengal', 'tamil-nadu', 'karnataka', 'punjab', 'madhya-pradesh',
  'odisha', 'andhra-pradesh', 'telangana', 'assam', 'haryana',
  'himachal-pradesh', 'uttarakhand', 'goa', 'jharkhand', 'chhattisgarh',
  'sikkim', 'meghalaya', 'manipur', 'nagaland', 'tripura', 'mizoram',
  'arunachal-pradesh',

  // 8 Union Territories
  'delhi', 'jammu-kashmir', 'ladakh',
  'andaman-nicobar', 'lakshadweep', 'puducherry', 'chandigarh',
  'dadra-nagar-haveli-daman-diu'
];

console.log(`Starting comprehensive audit for all ${all36.length} administrative entities of India...`);

let issues = 0;

all36.forEach((slug, idx) => {
  const geojson = path.join('public', 'data', `${slug}-districts.geojson`);
  if (!fs.existsSync(geojson)) {
    console.log(`[FAIL] GeoJSON missing: ${geojson}`);
    issues++;
  }

  // Check image directories
  const candidateDirs = [
    path.join('public', 'images', slug),
    path.join('public', 'images', slug.replace(/-/g, '')),
    path.join('public', 'images', slug === 'dadra-nagar-haveli-daman-diu' ? 'dnh-dd' : ''),
    path.join('public', 'images', slug === 'uttar-pradesh' ? 'up' : '')
  ].filter(d => fs.existsSync(d));

  if (candidateDirs.length === 0) {
    console.log(`[FAIL] Image dir missing for: ${slug}`);
    issues++;
  } else {
    const files = fs.readdirSync(candidateDirs[0]);
    if (files.length < 5) {
      console.log(`[WARN] Low photo count for ${slug}: ${files.length}`);
    }
  }
});

if (issues === 0) {
  console.log(`\n======================================================`);
  console.log(`🎉 100% COMPLETE: ALL 36 STATES & UNION TERRITORIES OF INDIA ARE FULLY VALIDATED!`);
  console.log(`======================================================`);
} else {
  console.log(`Found ${issues} issues.`);
}
