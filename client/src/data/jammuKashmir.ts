import type { StateData } from "../types/state"

export const jammuKashmirData: StateData = {
  id: "jammu-kashmir",
  name: "Jammu & Kashmir",
  hindiName: "जम्मू और कश्मीर",
  capital: "Srinagar (Summer) / Jammu (Winter)",
  tagline: "Paradise on Earth — Crown of the Himalayas & Valley of Flowers",
  overview:
    "Celebrated by Mughal Emperor Jahangir as 'Paradise on Earth' (Agar firdous bar roo-e zameen ast, hameen ast-o hameen ast-o hameen ast), Jammu and Kashmir is a land of otherworldly alpine beauty, sacred temple shrines, turquoise rivers, and ancient Sufi-Rishi syncretism. From the holy cave shrine of Vaishno Devi in the Trikuta hills of Jammu to the floating gardens of Dal Lake in Srinagar, the saffron fields of Pampore, and the snow slopes of Gulmarg, J&K is a crown of breathtaking grandeur.",
  ancientNames: ["Kashyapa-Mir", "Sharada Peeth", "Madra", "Duggar", "Kashmir"],
  keyStats: [
    { label: "Districts", value: "20" },
    { label: "Capitals", value: "Srinagar (Summer) / Jammu (Winter)" },
    { label: "Lifeline Rivers", value: "Jhelum (Vyath), Tawi, Chenab, Indus" },
    { label: "Sacred Shrines", value: "Mata Vaishno Devi & Amarnath Cave" },
    { label: "Highland Lakes", value: "Dal Lake, Wular Lake, Manasbal Lake" },
    { label: "World-Renowned Crafts", value: "Pashmina Shawls, Walnut Wood Carving, Paper Mâché" },
  ],
  quote: {
    text: "Agar firdous bar roo-e zameen ast, Hameen ast-o hameen ast-o hameen ast — If there be paradise on earth, it is this, it is this, it is this.",
    author: "Mughal Imperial Inscription on the Shalimar Bagh",
  },
  districts: {
    "Srinagar": {
      name: "Srinagar",
      tagline: "Venice of the East & City of Dal Lake Shikaras",
      headquarters: "Srinagar",
      knownFor: "Dal Lake with wooden houseboats and shikaras, Mughal Gardens (Shalimar & Nishat), Shankaracharya Temple, Hazratbal Shrine.",
      famousSpot: "Dal Lake & Shalimar Bagh",
    },
    "Jammu": {
      name: "Jammu",
      tagline: "City of Temples on the Banks of River Tawi",
      headquarters: "Jammu",
      knownFor: "Raghunath Temple, Bahu Fort and Bagh-e-Bahu, Mubarak Mandi Palace, Amar Mahal Museum.",
      famousSpot: "Raghunath Temple & Bahu Fort",
    },
    "Reasi": {
      name: "Reasi",
      tagline: "Holy Foothills of Shri Mata Vaishno Devi Shrine",
      headquarters: "Reasi",
      knownFor: "Shri Mata Vaishno Devi Cave Shrine (Katra), Chenab Railway Bridge (world's highest rail bridge), Shiv Khori cave shrine.",
      famousSpot: "Vaishno Devi Katra & Chenab Bridge",
    },
    "Anantnag": {
      name: "Anantnag",
      tagline: "Land of Countless Springs & Gateway to Pahalgam",
      headquarters: "Anantnag",
      knownFor: "Martand Sun Temple ruins, Pahalgam (Valley of Shepherds), Betaab Valley, Aru Valley, Amarnath Yatra base.",
      famousSpot: "Martand Sun Temple & Pahalgam",
    },
    "Baramulla": {
      name: "Baramulla",
      tagline: "Meadow of Flowers & Asia's Ski Capital (Gulmarg)",
      headquarters: "Baramulla",
      knownFor: "Gulmarg Gondola (world's second-highest cable car), Apharwat peak ski slopes, Wular Lake edge.",
      famousSpot: "Gulmarg Gondola & Apharwat Peak",
    },
    "Pulwama": {
      name: "Pulwama",
      tagline: "Saffron Bowl of India & Rice Heartland",
      headquarters: "Pulwama",
      knownFor: "Pampore saffron fields (Kesar), Avantishwar 9th-century temple ruins, apple and almond orchards.",
      famousSpot: "Pampore Saffron Fields & Avantipur",
    },
    "Ganderbal": {
      name: "Ganderbal",
      tagline: "Meadow of Gold (Sonamarg) & Sind River",
      headquarters: "Ganderbal",
      knownFor: "Sonamarg (Meadow of Gold), Thajiwas Glacier, Manasbal Lake (deepest lake in India), Kheer Bhawani Temple.",
      famousSpot: "Sonamarg & Kheer Bhawani Shrine",
    },
    "Kathua": {
      name: "Kathua",
      tagline: "Gateway of Jammu and Kashmir",
      headquarters: "Kathua",
      knownFor: "Basohli miniature paintings, Ranjit Sagar Dam lake, Jasrota Fort ruins, Mata Bala Sundari temple.",
      famousSpot: "Basohli Miniature School & Ranjit Sagar",
    },
  },
  landmarks: [
    {
      id: "dal-lake-srinagar",
      name: "Dal Lake & Shikara Gondolas",
      district: "Srinagar",
      lat: 34.0837,
      lon: 74.837,
      category: "nature",
      description: "Iconic alpine urban lake spreading over 18 square kilometers, renowned for its cedar wood houseboats, colorful carved shikara boats, floating vegetable markets, and the shoreline Boulevard Road lined with chinar trees.",
      image: "/images/landmarks/jammu-kashmir/dal-lake-srinagar_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Srinagar",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Dal Lake & Shikara Gondolas in Srinagar.",
      gallery: [
        {
                url: "/images/landmarks/jammu-kashmir/dal-lake-srinagar_angle1.jpg",
                angle: "Front Elevation",
                caption: "Dal Lake & Shikara Gondolas — Front elevation and iconic monumental facade in Srinagar."
        },
        {
                url: "/images/landmarks/jammu-kashmir/dal-lake-srinagar_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Dal Lake & Shikara Gondolas — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/jammu-kashmir/dal-lake-srinagar_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Dal Lake & Shikara Gondolas — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/jammu-kashmir/dal-lake-srinagar_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Dal Lake & Shikara Gondolas — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "vaishno-devi-shrine",
      name: "Shri Mata Vaishno Devi Shrine",
      district: "Reasi (Katra)",
      lat: 33.0308,
      lon: 74.949,
      category: "spiritual",
      description: "One of the most visited Hindu pilgrimage cave shrines in the world, located at an altitude of 5,200 feet inside the Trikuta mountain range, enshrining the natural rock formations (Pindies) representing Mahakali, Mahalakshmi, and Mahasaraswati.",
      image: "/images/landmarks/jammu-kashmir/vaishno-devi-shrine_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Reasi (Katra)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Shri Mata Vaishno Devi Shrine in Reasi (Katra).",
      gallery: [
        {
                url: "/images/landmarks/jammu-kashmir/vaishno-devi-shrine_angle1.jpg",
                angle: "Front Elevation",
                caption: "Shri Mata Vaishno Devi Shrine — Front elevation and iconic monumental facade in Reasi (Katra)."
        },
        {
                url: "/images/landmarks/jammu-kashmir/vaishno-devi-shrine_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Shri Mata Vaishno Devi Shrine — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/jammu-kashmir/vaishno-devi-shrine_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Shri Mata Vaishno Devi Shrine — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/jammu-kashmir/vaishno-devi-shrine_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Shri Mata Vaishno Devi Shrine — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "shankaracharya-temple",
      name: "Shankaracharya Shiva Temple",
      district: "Srinagar",
      lat: 34.0722,
      lon: 74.8458,
      category: "spiritual",
      description: "Ancient stone temple perched at 1,100 feet atop Gopadari Hill overlooking Srinagar and Dal Lake, dedicated to Lord Shiva and visited by philosopher Adi Shankaracharya in the 9th century during his philosophical travels.",
      image: "/images/landmarks/jammu-kashmir/shankaracharya-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Srinagar",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Shankaracharya Shiva Temple in Srinagar.",
      gallery: [
        {
                url: "/images/landmarks/jammu-kashmir/shankaracharya-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Shankaracharya Shiva Temple — Front elevation and iconic monumental facade in Srinagar."
        },
        {
                url: "/images/landmarks/jammu-kashmir/shankaracharya-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Shankaracharya Shiva Temple — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/jammu-kashmir/shankaracharya-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Shankaracharya Shiva Temple — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/jammu-kashmir/shankaracharya-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Shankaracharya Shiva Temple — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "martand-sun-temple",
      name: "Martand Sun Temple Ruins",
      district: "Anantnag",
      lat: 33.7461,
      lon: 75.2208,
      category: "monument",
      description: "A monumental 8th-century stone temple built by King Lalitaditya Muktapida of the Karkota dynasty, synthesizing Kashmiri, Roman, and Gandharan architectural elements with soaring fluted colonnades resting on a plateau overlooking the entire Kashmir Valley.",
      image: "/images/landmarks/jammu-kashmir/martand-sun-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Anantnag",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Martand Sun Temple Ruins in Anantnag.",
      gallery: [
        {
                url: "/images/landmarks/jammu-kashmir/martand-sun-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Martand Sun Temple Ruins — Front elevation and iconic monumental facade in Anantnag."
        },
        {
                url: "/images/landmarks/jammu-kashmir/martand-sun-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Martand Sun Temple Ruins — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/jammu-kashmir/martand-sun-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Martand Sun Temple Ruins — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/jammu-kashmir/martand-sun-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Martand Sun Temple Ruins — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "gulmarg-gondola",
      name: "Gulmarg Gondola & Apharwat Peak",
      district: "Baramulla",
      lat: 34.0537,
      lon: 74.3789,
      category: "nature",
      description: "World's second-highest operating cable car carrying visitors up to 3,950 meters onto Apharwat Peak, providing world-class powdery ski slopes during winter and sweeping views of Nanga Parbat and the Pir Panjal range.",
      image: "/images/landmarks/jammu-kashmir/gulmarg-gondola_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Baramulla",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Gulmarg Gondola & Apharwat Peak in Baramulla.",
      gallery: [
        {
                url: "/images/landmarks/jammu-kashmir/gulmarg-gondola_angle1.jpg",
                angle: "Front Elevation",
                caption: "Gulmarg Gondola & Apharwat Peak — Front elevation and iconic monumental facade in Baramulla."
        },
        {
                url: "/images/landmarks/jammu-kashmir/gulmarg-gondola_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Gulmarg Gondola & Apharwat Peak — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/jammu-kashmir/gulmarg-gondola_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Gulmarg Gondola & Apharwat Peak — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/jammu-kashmir/gulmarg-gondola_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Gulmarg Gondola & Apharwat Peak — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "hari-parbat-fort",
      name: "Hari Parbat Fort (Koh-e-Maran)",
      district: "Srinagar",
      lat: 34.1017,
      lon: 74.8153,
      category: "monument",
      description: "Historic hill fort dominating the skyline of old Srinagar, originally walled by Mughal Emperor Akbar in 1590 CE, sacred to Hindus as the abode of Goddess Sharika, to Muslims for the shrine of Sheikh Hamza Makhdoom, and to Sikhs for Gurdwara Chatti Padshahi.",
      image: "/images/landmarks/jammu-kashmir/hari-parbat-fort_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Srinagar",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Hari Parbat Fort (Koh-e-Maran) in Srinagar.",
      gallery: [
        {
                url: "/images/landmarks/jammu-kashmir/hari-parbat-fort_angle1.jpg",
                angle: "Front Elevation",
                caption: "Hari Parbat Fort (Koh-e-Maran) — Front elevation and iconic monumental facade in Srinagar."
        },
        {
                url: "/images/landmarks/jammu-kashmir/hari-parbat-fort_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Hari Parbat Fort (Koh-e-Maran) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/jammu-kashmir/hari-parbat-fort_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Hari Parbat Fort (Koh-e-Maran) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/jammu-kashmir/hari-parbat-fort_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Hari Parbat Fort (Koh-e-Maran) — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Kashmiri Rogan Josh",
      hindiName: "रोगन जोश",
      tag: "The Aromatic Crown of Kashmiri Cuisine",
      description:
        "Tender lamb slow-cooked in an aromatic gravy infused with dry ginger powder (Saunth), fennel seeds (Mawal), and the vibrant scarlet essence of dried Kashmiri red chilies and ratan jot (alkanet root), without onions or garlic in the Pandit style.",
      origin: "Royal Banquets of the Kashmir Valley",
      image: "/images/jammuandkashmir/rogan_josh.jpg",
      dietary: "non-veg",
    },
    {
      name: "Royal Kashmiri Wazwan",
      hindiName: "कश्मीरी वाज़वान",
      tag: "36-Course Master Feast of Master Chefs (Wazas)",
      description:
        "The supreme culinary feast of Kashmir, prepared by hereditary master chefs (Waza) overnight, featuring tender hand-pounded meat delicacies like Rista, Gushtaba, Tabak Maaz, and Daniwal Korma served ceremoniously on a communal engraved copper platter (Traami).",
      origin: "Traditional Kashmiri Celebrations",
      image: "/images/jammuandkashmir/kashmiri_wazwan.jpg",
      dietary: "non-veg",
    },
    {
      name: "Kashmiri Saffron Kahwah",
      hindiName: "कश्मीरी कहवा",
      tag: "Golden Saffron & Green Tea Elixir",
      description:
        "Fragrant green tea brewed in a traditional brass samovar, infused with pure Pampore saffron strands, green cardamom, cinnamon, and cloves, garnished with crushed almonds and sweetened with wild mountain honey.",
      origin: "Everyday Warmth of Kashmiri Homes",
      image: "/images/jammuandkashmir/kashmiri_kahwa.jpg",
      dietary: "veg",
    },
    {
      name: "Kashmiri Dum Aloo",
      hindiName: "कश्मीरी दम आलू",
      tag: "Velvety Pandit Spiced Potato Comfort",
      description:
        "Baby potatoes pierced and fried golden, then slow-cooked under tight steam (dum) in a thick, fragrant gravy made from whisked yogurt, fennel powder, ginger, and mild Kashmiri deghi mirch.",
      origin: "Kashmiri Pandit Vegetarian Tradition",
      image: "/images/jammuandkashmir/kashmiri_dum_aloo.jpg",
      dietary: "veg",
    },
    {
      name: "Gushtaba (Meatball in Velvety Gravy)",
      hindiName: "गुश्ताबा",
      tag: "The Grand Finale of the Wazwan",
      description:
        "Large, velvety meatballs prepared by vigorously pounding boneless mutton with wooden mallets on stone until it reaches an emulsified texture, simmered gently in a fragrant yogurt-based gravy seasoned with cardamom.",
      origin: "Elite Waza Kitchens of Srinagar",
      image: "/images/jammuandkashmir/gushtaba.jpg",
      dietary: "non-veg",
    },
  ],
  traditions: [
    {
      name: "Rouf Folk Dance",
      type: "dance",
      description:
        "Graceful, rhythmic folk dance performed by Kashmiri women facing each other in two linear rows with arms interlaced around each other's waists, gliding forwards and backwards to gentle melodic songs celebrating spring and festive occasions.",
      significance:
        "Century-old poetic celebratory dance welcoming spring and Eid festivities in the valley.",
      image: "/images/jammuandkashmir/rouf_dance.jpg",
    },
    {
      name: "Sufiyana Kalam & Santoor Music",
      type: "music",
      description:
        "Classical music tradition of Kashmir blending Central Asian, Persian, and Indian classical modes (Muqam), played on the 100-stringed wooden hammer-dulcimer Santoor, accompanied by the Kashmiri Saaz, Sehtar, and Tabla.",
      significance:
        "Spiritual musical tradition bridging Sufi poetry of Lal Ded and Nund Rishi with divine transcendentalism.",
      image: "/images/jammuandkashmir/sufiyana_kalam.jpg",
    },
    {
      name: "Bhand Pather Folk Theatre",
      type: "art",
      description:
        "Centuries-old satirical street theatre performed by traveling actors (Bhands) in open village squares, combining slapstick comedy, music on the Surnai and Dhol, and sharp social satire critiquing bureaucracy and inequality.",
      significance:
        "Vital historical medium of democratic social critique and community entertainment in Kashmir.",
      image: "/images/jammuandkashmir/bhand_pather.jpg",
    },
  ],
  attires: [
    {
      name: "Kashmiri Pheran with Tilla Embroidery",
      gender: "unisex",
      fabric: "Pure Wool or Cashmere with Golden Tilla Threadwork",
      description:
        "The quintessential traditional long, loose woolen cloak worn by men and women in Kashmir to shield against winter chill, often accessorized inside with a Kangri (clay wicker-basket brazier with live embers) and adorned around the neck with delicate gold or silver Tilla needlework.",
      occasions: "Winter everyday comfort, weddings, and festive celebrations.",
      image: "/images/jammuandkashmir/kashmiri_pheran.jpg",
    },
    {
      name: "Pashmina & Kani Shawl",
      gender: "unisex",
      fabric: "Ultra-Fine Cashmere Down from Changthangi Goat",
      description:
        "World-renowned ultra-soft luxury shawl handwoven from the fine underfleece of Himalayan mountain goats, requiring months of intricate loom work using wooden spools (Tujis) to weave floral Jamawar tapestries.",
      occasions: "Royal heirlooms, high-status celebrations, and international diplomatic gifting.",
      image: "/images/jammuandkashmir/pashmina_shawl.jpg",
    },
    {
      name: "Taranga & Kasaba Headgear",
      gender: "women",
      fabric: "Silk or Fine Muslin with Embroidered Cap and Silver Pins",
      description:
        "The regal traditional headdress of Kashmiri women, consisting of a brightly embroidered velvet cap (Kasaba/Taranga) wrapped with fine muslin scarves and fastened with ornate silver pins and turquoise ornaments.",
      occasions: "Weddings, bride's trousseau, and traditional family rituals.",
      image: "/images/jammuandkashmir/taranga_headgear.jpg",
    },
  ],
  monuments: [
    {
      name: "Martand Sun Temple",
      location: "Kehribal, Anantnag District",
      era: "8th Century CE (King Lalitaditya)",
      unesco: false,
      description:
        "A monumental classical temple complex featuring a massive central sanctum surrounded by a courtyard of 84 colonnaded arched chambers, exhibiting masterly stone symmetry against the snowy Pir Panjal mountains.",
      image: "/images/jammuandkashmir/martand_sun_temple.jpg",
      significance: "Grandest surviving architectural achievement of ancient Kashmir.",
    },
    {
      name: "Shankaracharya Temple",
      location: "Gopadari Hill, Srinagar",
      era: "9th Century CE",
      unesco: false,
      description:
        "Stone temple standing atop an octagonal high plinth reached by 243 steps, overlooking the entire Srinagar valley, housing a sacred Shiva lingam worshipped for over two millennia.",
      image: "/images/jammuandkashmir/shankaracharya_temple.jpg",
      significance: "One of the oldest stone shrines in the Kashmir Valley.",
    },
    {
      name: "Hari Parbat Citadel",
      location: "Srinagar",
      era: "1590 CE (Mughal) / 1808 CE (Durrani)",
      unesco: false,
      description:
        "High stone rampart crowning the sacred hill of Hari Parbat, offering panoramic vistas across Dal Lake, housing centuries-old shrines venerated by multiple spiritual communities.",
      image: "/images/jammuandkashmir/hari_parbat_fort.jpg",
      significance: "Symbol of religious harmony and military fortitude overlooking Srinagar.",
    },
    {
      name: "Dal Lake Heritage Waters",
      location: "Srinagar",
      era: "Mughal & Post-Medieval Era",
      unesco: false,
      description:
        "Scenic water body featuring terraced Mughal water gardens along its shores, an interconnected labyrinth of canals, floating lotus gardens, and traditional cedarwood houseboats.",
      image: "/images/jammuandkashmir/dal_lake_shikara.jpg",
      significance: "The undisputed scenic jewel and aquatic cultural heritage of Kashmir.",
    },
  ],
  languages: [
    {
      name: "Kashmiri (کٲشُر / कॉशुर)",
      script: "Perso-Arabic (Official) & Devanagari / Sharada",
      speakers: "7+ Million",
      greeting: "Adaab / As-salamu Alaykum / Namaskar",
      meaning: "May peace and divine blessings be upon you",
      description:
        "Dardic Indo-Aryan language carrying the profound mystical Vakhs of 14th-century mystic Lal Ded and Shrukhs of Sheikh Noor-ud-Din Noorani (Nund Rishi).",
    },
    {
      name: "Dogri (डोगरी)",
      script: "Devanagari Script (Historically Dogra Akkhar)",
      speakers: "2.6+ Million (Jammu Region)",
      greeting: "Jai Deva / Ram Ram Ji (जय देवा)",
      meaning: "Victory and peace to the Divine",
      description:
        "Melodious language of the Duggar region recognized in the Eighth Schedule of the Indian Constitution, celebrated for its sweet cadence and heroic war ballads.",
    },
    {
      name: "Urdu",
      script: "Nastaliq Script",
      speakers: "Official Language of Governance & Education",
      greeting: "Aadaab (آداب)",
      meaning: "Respectful greetings of courtesy",
      description:
        "Widely spoken across administration, judiciary, commerce, and media throughout Jammu and Kashmir.",
    },
  ],
  luminaries: [
    {
      name: "Lalleshwari (Lal Ded)",
      image: "/images/luminaries/aryabhata.jpg",
      era: "1320 – 1392 CE",
      title: "Mother Mystic of Kashmir & Creator of Vakhs",
      contribution:
        "Revered woman saint-poet whose mystical four-line verses (Vakhs) synthesized Kashmir Shaivism with Sufism, establishing the foundation of Kashmiri vernacular literature and syncretic harmony.",
    },
    {
      name: "King Lalitaditya Muktapida",
      image: "/images/luminaries/king_lalitaditya_muktapida.jpg",
      era: "699 – 736 CE",
      title: "Alexander of Kashmir & Empire Builder",
      contribution:
        "Great ruler of the Karkota dynasty who established Kashmir as a dominant imperial power across northern India and Central Asia, and commissioned the monumental Martand Sun Temple.",
    },
    {
      name: "Sheikh Noor-ud-Din Noorani (Nund Rishi)",
      image: "/images/luminaries/sheikh_noor_ud_din_noorani_nund_rishi.jpg",
      era: "1377 – 1440 CE",
      title: "Alamdar-e-Kashmir (Flag Bearer of Kashmir)",
      contribution:
        "Beloved patron saint of Kashmir who founded the indigenous Rishi spiritual order, championing vegetarianism, environmental stewardship, and universal love across religions.",
    },
  ],
}
