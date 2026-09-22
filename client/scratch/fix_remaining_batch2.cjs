const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const UA = 'BharatYatraApp/1.0 (https://github.com/Rahul1062005/Bharat-Yatra-3D; contact: dev@bharatyatra.local)';

const targets = [
  {
    dest: 'public/images/jharkhand/litti_chokha.jpg',
    copyFrom: 'public/images/bihar/litti_chokha.jpg',
  },
  {
    dest: 'public/images/chhattisgarh/chila.jpg',
    title: 'Cheela',
    fallback: 'Dosa_(food)',
  },
  {
    dest: 'public/images/sikkim/nathula_pass.jpg',
    title: 'Nathu_La',
    fallback: 'Mountain_pass',
  },
  {
    dest: 'public/images/meghalaya/umiam_lake.jpg',
    title: 'Umiam_Lake',
    fallback: 'Shillong',
  },
  {
    dest: 'public/images/manipur/ina_memorial.jpg',
    title: 'Moirang',
    fallback: 'Indian_National_Army',
  },
  {
    dest: 'public/images/manipur/govindaji_temple.jpg',
    title: 'Shri_Govindajee_Temple',
    fallback: 'Kangla_Palace',
  },
  {
    dest: 'public/images/nagaland/hornbill_festival.jpg',
    title: 'Hornbill_Festival',
    fallback: 'Kohima',
  },
  {
    dest: 'public/images/nagaland/moatsu_festival.jpg',
    title: 'Ao_Naga',
    fallback: 'Mokokchung',
  },
  {
    dest: 'public/images/tripura/kharchi_puja.jpg',
    title: 'Fourteen_Gods',
    fallback: 'Agartala',
  },
  {
    dest: 'public/images/mizoram/puanchei_wrap.jpg',
    copyFrom: 'public/images/mizoram/puan_traditional.jpg',
    title: 'Mizo_people',
  },
  {
    dest: 'public/images/mizoram/solomons_temple.jpg',
    title: 'Aizawl',
    fallback: 'Mizoram',
  },
  {
    dest: 'public/images/arunachalpradesh/pika_pila.jpg',
    copyFrom: 'public/images/arunachalpradesh/apatani_culture.jpg',
    title: 'Apatani_people',
  },
  {
    dest: 'public/images/arunachalpradesh/ita_fort.jpg',
    title: 'Itanagar',
    fallback: 'Arunachal_Pradesh',
  },
  {
    dest: 'public/images/delhi/dahi_bhalla.jpg',
    title: 'Dahi_vada',
    fallback: 'Chaat',
  },
  {
    dest: 'public/images/delhi/humayuns_tomb.jpg',
    title: "Humayun's_Tomb",
    fallback: 'Delhi',
  }
];

function getJson(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': UA } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { resolve(null); }
      });
    }).on('error', () => resolve(null));
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function run() {
  for (const item of targets) {
    if (fs.existsSync(item.dest) && fs.statSync(item.dest).size > 10000) {
      const b = fs.readFileSync(item.dest);
      if (b[0] === 0xFF && b[1] === 0xD8) {
        console.log('Already OK:', item.dest);
        continue;
      }
    }

    if (item.copyFrom && fs.existsSync(item.copyFrom)) {
      const srcBuf = fs.readFileSync(item.copyFrom);
      if (srcBuf[0] === 0xFF && srcBuf[1] === 0xD8) {
        fs.writeFileSync(item.dest, srcBuf);
        console.log(`Copied from ${item.copyFrom} -> ${item.dest} (${(srcBuf.length / 1024).toFixed(1)} KB)`);
        continue;
      }
    }

    let page = await getJson('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(item.title));
    let imgUrl = page && page.originalimage && page.originalimage.source;

    if (!imgUrl && item.fallback) {
      page = await getJson('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(item.fallback));
      imgUrl = page && page.originalimage && page.originalimage.source;
    }

    if (imgUrl) {
      try {
        execSync(`curl.exe -s -L -A "${UA}" -e "https://en.wikipedia.org/" -o "${item.dest}" "${imgUrl}"`);
        if (fs.existsSync(item.dest)) {
          const buf = fs.readFileSync(item.dest);
          if (buf[0] === 0xFF && buf[1] === 0xD8) {
            console.log('Saved JPEG:', item.dest, '(' + (buf.length / 1024).toFixed(1) + ' KB)');
          } else {
            console.log('Downloaded file is not JPEG:', item.dest);
          }
        }
      } catch (e) {
        console.log('Curl error for', item.dest, e.message);
      }
    } else {
      console.log('No image found for', item.title);
    }
    await sleep(950);
  }
}

run();
