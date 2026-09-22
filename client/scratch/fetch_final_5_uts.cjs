const fs = require('fs');
const path = require('path');
const https = require('https');
const { execSync } = require('child_process');

const UA = 'BharatYatraApp/1.0 (https://github.com/Rahul1062005/Bharat-Yatra-3D; contact: dev@bharatyatra.local)';

const items = [
  // Andaman & Nicobar
  { title: 'Curry', dest: 'public/images/andaman-nicobar/seafood_curry.jpg', fallback: 'Seafood' },
  { title: 'Lobster', dest: 'public/images/andaman-nicobar/grilled_lobster.jpg', fallback: 'Prawn' },
  { title: 'Prawn', dest: 'public/images/andaman-nicobar/coconut_prawn.jpg', fallback: 'Shrimp' },
  { title: 'Banana_chip', dest: 'public/images/andaman-nicobar/banana_chips.jpg', fallback: 'Plantain' },
  { title: 'Tropical_fruit', dest: 'public/images/andaman-nicobar/tropical_fruits.jpg', fallback: 'Fruit' },
  { title: 'Nicobarese_people', dest: 'public/images/andaman-nicobar/nicobarese_dance.jpg', fallback: 'Andaman_and_Nicobar_Islands' },
  { title: 'Shellcraft', dest: 'public/images/andaman-nicobar/shell_handicraft.jpg', fallback: 'Handicraft' },
  { title: 'Woodcarving', dest: 'public/images/andaman-nicobar/island_woodcraft.jpg', fallback: 'Carving' },
  { title: 'Sarong', dest: 'public/images/andaman-nicobar/nicobar_attire.jpg', fallback: 'Clothing' },
  { title: 'Jewellery', dest: 'public/images/andaman-nicobar/shell_ornaments.jpg', fallback: 'Necklace' },
  { title: 'Textile', dest: 'public/images/andaman-nicobar/island_weaves.jpg', fallback: 'Loom' },
  { title: 'Cellular_Jail', dest: 'public/images/andaman-nicobar/cellular_jail.jpg' },
  { title: 'Ross_Island_(South_Andaman)', dest: 'public/images/andaman-nicobar/ross_island.jpg', fallback: 'Port_Blair' },
  { title: 'Radhanagar_Beach', dest: 'public/images/andaman-nicobar/radhanagar_beach.jpg', fallback: 'Havelock_Island' },
  { title: 'Barren_Island_(Andaman_Islands)', dest: 'public/images/andaman-nicobar/barren_island.jpg', fallback: 'Andaman_Sea' },

  // Lakshadweep
  { title: 'Kebab', dest: 'public/images/lakshadweep/mus_kavaab.jpg', fallback: 'Tuna' },
  { title: 'Fish_curry', dest: 'public/images/lakshadweep/rayereha_curry.jpg', fallback: 'Curry' },
  { title: 'Parotta', dest: 'public/images/lakshadweep/malabar_parotta.jpg' },
  { title: 'Halva', dest: 'public/images/lakshadweep/coconut_halwa.jpg', fallback: 'Coconut' },
  { title: 'Coconut', dest: 'public/images/lakshadweep/tender_coconut.jpg' },
  { title: 'Folk_dance', dest: 'public/images/lakshadweep/lava_dance.jpg', fallback: 'Minicoy' },
  { title: 'Kolkali', dest: 'public/images/lakshadweep/kolkali_dance.jpg', fallback: 'Folk_dance' },
  { title: 'Atoll', dest: 'public/images/lakshadweep/lagoon_heritage.jpg', fallback: 'Lakshadweep' },
  { title: 'Lungi', dest: 'public/images/lakshadweep/minicoy_attire.jpg', fallback: 'Sarong' },
  { title: 'Costume', dest: 'public/images/lakshadweep/island_silk.jpg', fallback: 'Dress' },
  { title: 'Headdress', dest: 'public/images/lakshadweep/coral_jewelry.jpg', fallback: 'Jewellery' },
  { title: 'Minicoy_Island_Lighthouse', dest: 'public/images/lakshadweep/minicoy_lighthouse.jpg', fallback: 'Minicoy' },
  { title: 'Bangaram_Atoll', dest: 'public/images/lakshadweep/bangaram_atoll.jpg', fallback: 'Atoll' },
  { title: 'Kavaratti', dest: 'public/images/lakshadweep/kavaratti_island.jpg', fallback: 'Lakshadweep' },
  { title: 'Agatti_Island', dest: 'public/images/lakshadweep/agatti_lagoon.jpg', fallback: 'Lagoon' },

  // Puducherry
  { title: 'Cr%C3%AApe', dest: 'public/images/puducherry/french_crepes.jpg', fallback: 'Pancake' },
  { title: 'Fish_curry', dest: 'public/images/puducherry/pondicherry_fish_assad.jpg', fallback: 'Curry' },
  { title: 'Baguette', dest: 'public/images/puducherry/french_baguette.jpg', fallback: 'Bread' },
  { title: 'Samosa', dest: 'public/images/puducherry/franco_tamil_samosa.jpg' },
  { title: 'Filter_coffee', dest: 'public/images/puducherry/filter_coffee.jpg', fallback: 'Coffee' },
  { title: 'Auroville', dest: 'public/images/puducherry/auroville_community.jpg' },
  { title: 'Carnival', dest: 'public/images/puducherry/masquerade_festival.jpg', fallback: 'Festival' },
  { title: 'Colonial_architecture', dest: 'public/images/puducherry/french_heritage_walk.jpg', fallback: 'Pondicherry' },
  { title: 'Sari', dest: 'public/images/puducherry/franco_tamil_saree.jpg', fallback: 'Silk' },
  { title: 'Beret', dest: 'public/images/puducherry/french_beret_kurta.jpg', fallback: 'Costume' },
  { title: 'Cotton', dest: 'public/images/puducherry/auroville_cottons.jpg', fallback: 'Loom' },
  { title: 'Matrimandir', dest: 'public/images/puducherry/matrimandir_auroville.jpg', fallback: 'Auroville' },
  { title: 'Promenade_Beach', dest: 'public/images/puducherry/promenade_beach.jpg', fallback: 'Pondicherry' },
  { title: 'Basilica_of_the_Sacred_Heart_of_Jesus,_Pondicherry', dest: 'public/images/puducherry/sacred_heart_church.jpg', fallback: 'Church' },
  { title: 'French_Institute_of_Pondicherry', dest: 'public/images/puducherry/french_quarter.jpg', fallback: 'Pondicherry' },

  // Chandigarh
  { title: 'Dal_makhani', dest: 'public/images/chandigarh/dal_makhani_naan.jpg', fallback: 'Naan' },
  { title: 'Amritsari_kulcha', dest: 'public/images/chandigarh/amritsari_kulcha.jpg', fallback: 'Kulcha' },
  { title: 'Paneer_tikka', dest: 'public/images/chandigarh/paneer_tikka.jpg' },
  { title: 'Lassi', dest: 'public/images/chandigarh/punjabi_lassi.jpg' },
  { title: 'Chole_bhature', dest: 'public/images/chandigarh/chhole_bhature.jpg' },
  { title: 'Zakir_Hussain_Rose_Garden', dest: 'public/images/chandigarh/rose_festival.jpg', fallback: 'Rose_garden' },
  { title: 'Open_Hand_Monument', dest: 'public/images/chandigarh/open_hand_ceremony.jpg', fallback: 'Chandigarh' },
  { title: 'Rock_Garden_of_Chandigarh', dest: 'public/images/chandigarh/rock_garden_art.jpg', fallback: 'Sculpture' },
  { title: 'Kurta', dest: 'public/images/chandigarh/chandigarh_kurta.jpg' },
  { title: 'Phulkari', dest: 'public/images/chandigarh/phulkari_dupatta.jpg' },
  { title: 'Turban', dest: 'public/images/chandigarh/urban_punjabi_wear.jpg', fallback: 'Costume' },
  { title: 'Rock_Garden_of_Chandigarh', dest: 'public/images/chandigarh/rock_garden.jpg' },
  { title: 'Capitol_Complex,_Chandigarh', dest: 'public/images/chandigarh/capitol_complex.jpg', fallback: 'Le_Corbusier' },
  { title: 'Sukhna_Lake', dest: 'public/images/chandigarh/sukhna_lake.jpg', fallback: 'Lake' },
  { title: 'Open_Hand_Monument', dest: 'public/images/chandigarh/open_hand_monument.jpg' },

  // Dadra and Nagar Haveli and Daman and Diu
  { title: 'Patra_(food)', dest: 'public/images/dnh-dd/parsi_patra.jpg', fallback: 'Dhokla' },
  { title: 'Pakora', dest: 'public/images/dnh-dd/diu_prawn_koliwada.jpg', fallback: 'Prawn' },
  { title: 'Dhokla', dest: 'public/images/dnh-dd/gujarati_dhokla.jpg' },
  { title: 'Stew', dest: 'public/images/dnh-dd/cozido_portuguese.jpg', fallback: 'Curry' },
  { title: 'Toddy', dest: 'public/images/dnh-dd/coconut_toddy.jpg', fallback: 'Coconut' },
  { title: 'Warli', dest: 'public/images/dnh-dd/tarpa_dance.jpg', fallback: 'Folk_dance' },
  { title: 'Folk_dance', dest: 'public/images/dnh-dd/portuguese_folk_festival.jpg', fallback: 'Diu,_India' },
  { title: 'Warli', dest: 'public/images/dnh-dd/warli_painting.jpg', fallback: 'Tribal_art' },
  { title: 'Costume', dest: 'public/images/dnh-dd/warli_tribal_wear.jpg', fallback: 'Jewellery' },
  { title: 'Lace', dest: 'public/images/dnh-dd/daman_lace_embroidery.jpg', fallback: 'Embroidery' },
  { title: 'Textile', dest: 'public/images/dnh-dd/portuguese_gujarati_attire.jpg', fallback: 'Sari' },
  { title: 'Diu_Fort', dest: 'public/images/dnh-dd/diu_fort.jpg', fallback: 'Fort' },
  { title: 'Naida_Caves', dest: 'public/images/dnh-dd/naida_caves.jpg', fallback: 'Cave' },
  { title: 'St._Paul%27s_Church,_Diu', dest: 'public/images/dnh-dd/st_pauls_church.jpg', fallback: 'Church' },
  { title: 'Silvassa', dest: 'public/images/dnh-dd/dudhni_lake.jpg', fallback: 'Dadra_and_Nagar_Haveli' }
];

console.log('Final 5 UTs items to download:', items.length);

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
  let okCount = 0;
  for (const item of items) {
    const dir = path.dirname(item.dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    if (fs.existsSync(item.dest) && fs.statSync(item.dest).size > 10000) {
      const buf = fs.readFileSync(item.dest);
      if (buf[0] === 0xFF && buf[1] === 0xD8) {
        console.log('Already valid:', item.dest);
        okCount++;
        continue;
      }
    }

    let page = await getJson('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(item.title));
    let imgUrl = page && page.originalimage && page.originalimage.source;

    if (!imgUrl && item.fallback) {
      page = await getJson('https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(item.fallback));
      imgUrl = page && page.originalimage && page.originalimage.source;
    }

    if (!imgUrl) {
      console.log('No image for:', item.title);
      continue;
    }

    try {
      execSync(`curl.exe -s -L -A "${UA}" -e "https://en.wikipedia.org/" -o "${item.dest}" "${imgUrl}"`);
      if (fs.existsSync(item.dest)) {
        const buf = fs.readFileSync(item.dest);
        if (buf[0] === 0xFF && buf[1] === 0xD8) {
          console.log('Saved:', item.dest, '(' + (buf.length / 1024).toFixed(1) + ' KB)');
          okCount++;
        } else {
          console.log('Not JPEG:', item.dest);
        }
      }
    } catch (e) {
      console.log('Error downloading', item.title, e.message);
    }
    await sleep(900);
  }
  console.log(`\nFinal 5 UTs Download Complete: Successfully verified ${okCount}/${items.length} images.`);
}

run();
