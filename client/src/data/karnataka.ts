import type { StateData } from "../types/state"

export const karnatakaData: StateData = {
  id: "karnataka",
  name: "Karnataka",
  hindiName: "कर्नाटक",
  capital: "Bengaluru (Silicon Valley of India)",
  tagline: "Cradle of Stone Architecture & Southern Dynasties",
  overview:
    "Endowed with an extraordinary geographical diversity stretching from the palm-fringed Karavali coast and the coffee-carpeted Western Ghats to the ancient granite boulders of the Deccan Plateau, Karnataka is an empire of history and innovation. Home to the golden age of the Vijayanagara Empire at Hampi, Hoysala stone temples, Mysore royal pageantry, and India's booming aerospace and technology capital at Bengaluru.",
  ancientNames: ["Karunadu", "Kuntala", "Vijayanagara Empire", "Mysore Kingdom", "Kadamba Realm"],
  keyStats: [
    { label: "Districts", value: "31" },
    { label: "Capital", value: "Bengaluru" },
    { label: "Lifeline River", value: "Holy Cauvery & Krishna" },
    { label: "Tech Prowess", value: "Silicon Valley of Asia" },
    { label: "UNESCO Sites", value: "Hampi, Pattadakal, Hoysala Temples (Belur-Halebidu)" },
    { label: "Coffee Capital", value: "Produces 70% of India's Coffee" },
  ],
  quote: {
    text: "Sirigannadam Gelge, Sirigannadam Baazhge — May the glorious Kannada land and heritage triumph and prosper forever.",
    author: "Kavirajamarga (9th Century CE)",
  },
  districts: {
    "Bengaluru Urban": {
      name: "Bengaluru Urban",
      tagline: "Silicon Valley of India & Garden City",
      headquarters: "Bengaluru",
      knownFor: "Lalbagh Botanical Garden, Bengaluru Palace, Vidhana Soudha, ISRO headquarters, IT parks.",
      famousSpot: "Vidhana Soudha & Lalbagh Glass House",
    },
    "Bengaluru Rural": {
      name: "Bengaluru Rural",
      tagline: "Silk Weaving & Devanahalli Citadel",
      headquarters: "Devanahalli",
      knownFor: "Kempegowda International Airport, Devanahalli Fort (Tipu Sultan birthplace), mulberry silkworm rearing.",
      famousSpot: "Devanahalli Fort",
    },
    "Mysuru": {
      name: "Mysuru",
      tagline: "Cultural Capital & City of Royal Palaces",
      headquarters: "Mysuru",
      knownFor: "Mysore Palace (illuminated by 100,000 bulbs), Chamundi Hills, Mysore Dasara, Mysore Pak sweet.",
      famousSpot: "Mysore Palace & Chamundeshwari Temple",
    },
    "Ballari": {
      name: "Ballari",
      tagline: "Iron Citadel & Gateway to Hampi",
      headquarters: "Ballari",
      knownFor: "Ballari Fort perched on monolithic rock, iron ore mines, historical connection to the Vijayanagara realm.",
      famousSpot: "Ballari Rock Fort",
    },
    "Hassan": {
      name: "Hassan",
      tagline: "Epicenter of Hoysala Stone Temple Art",
      headquarters: "Hassan",
      knownFor: "Chennakeshava Temple (Belur, UNESCO), Hoysaleswara Temple (Halebidu), Shravanabelagola (57-ft Gommateshwara statue).",
      famousSpot: "Belur Chennakeshava & Shravanabelagola",
    },
    "Dakshina Kannada": {
      name: "Dakshina Kannada",
      tagline: "Port of Mangaluru & Karavali Coast",
      headquarters: "Mangaluru",
      knownFor: "Panambur Beach, Mangaladevi Temple, Mangalorean Ghee Roast, Kudroli Gokarnanatheshwara Temple.",
      famousSpot: "Panambur Beach & Kudroli Temple",
    },
    "Udupi": {
      name: "Udupi",
      tagline: "Cradle of Krishna Matha & World Dosa Capital",
      headquarters: "Udupi",
      knownFor: "Sri Krishna Temple (Kanakana Kindi window), Malpe Beach, St. Mary's Basaltic Hexagonal Islands.",
      famousSpot: "Udupi Sri Krishna Matha & St. Mary's Island",
    },
    "Kodagu": {
      name: "Kodagu",
      tagline: "Scotland of India & Birthplace of Cauvery",
      headquarters: "Madikeri",
      knownFor: "Talakaveri (source of Cauvery), Raja's Seat, Abbey Falls, coffee and cardamom plantations, brave Kodava warriors.",
      famousSpot: "Talakaveri & Raja's Seat Madikeri",
    },
    "Chikkamagaluru": {
      name: "Chikkamagaluru",
      tagline: "Coffee Land of India & Mullayanagiri Peak",
      headquarters: "Chikkamagaluru",
      knownFor: "First coffee seeds planted at Baba Budangiri (1670 CE), Mullayanagiri (highest peak in Karnataka), Hebbe Falls.",
      famousSpot: "Mullayanagiri Peak & Coffee Estates",
    },
    "Uttara Kannada": {
      name: "Uttara Kannada",
      tagline: "Beaches of Gokarna & Dandeli Rafting",
      headquarters: "Karwar",
      knownFor: "Gokarna Om Beach & Mahabaleshwar Temple, Dandeli white-water rafting, Murudeshwar (123-ft Shiva statue).",
      famousSpot: "Murudeshwar Shiva Temple & Gokarna Om Beach",
    },
    "Shivamogga": {
      name: "Shivamogga",
      tagline: "Gateway of Malnad & Jog Falls",
      headquarters: "Shivamogga",
      knownFor: "Jog Falls (second-highest plunge waterfall in India), Sharavathi river, Keladi Nayaka kingdom ruins.",
      famousSpot: "Jog Falls (Gerosoppa)",
    },
    "Vijayapura": {
      name: "Vijayapura",
      tagline: "City of Whispering Gallery & Gol Gumbaz",
      headquarters: "Vijayapura (Bijapur)",
      knownFor: "Gol Gumbaz (second largest dome in the world after St. Peter's, with acoustic whispering gallery), Ibrahim Rauza.",
      famousSpot: "Gol Gumbaz Whispering Gallery",
    },
    "Bagalkote": {
      name: "Bagalkote",
      tagline: "Cradle of Indian Temple Architecture",
      headquarters: "Bagalkote",
      knownFor: "Badami Cave Temples (rock-cut Chalukya caves), Aihole (125 stone temples), Pattadakal (UNESCO World Heritage).",
      famousSpot: "Badami Cave Temples & Pattadakal",
    },
    "Belagavi": {
      name: "Belagavi",
      tagline: "Kunda Sweet & Kittur Rani Chennamma",
      headquarters: "Belagavi",
      knownFor: "Belagavi Fort & Kamal Basti, Kittur Fort (Rani Chennamma's 1824 revolt against British), melting Belgaum Kunda.",
      famousSpot: "Belagavi Fort & Kittur Rani Chennamma Memorial",
    },
    "Bidar": {
      name: "Bidar",
      tagline: "Crown of Karnataka & Bidriware Craft",
      headquarters: "Bidar",
      knownFor: "Bidar Fort (Karez underground water system), Mahmud Gawan Madrasa, GI-tagged Bidriware silver-inlaid craft.",
      famousSpot: "Bidar Fort & Mahmud Gawan Madrasa",
    },
    "Kalaburagi": {
      name: "Kalaburagi",
      tagline: "Sufi Heritage & Tur Dal Bowl",
      headquarters: "Kalaburagi (Gulbarga)",
      knownFor: "Gulbarga Fort & Jama Masjid (completely roofed mosque), Hazrat Khwaja Bande Nawaz Dargah, GI-tagged red gram.",
      famousSpot: "Gulbarga Fort & Bande Nawaz Dargah",
    },
    "Dharwad": {
      name: "Dharwad",
      tagline: "Cultural Twin Cities & Dharwad Peda",
      headquarters: "Dharwad",
      knownFor: "GI-tagged milk sweet Dharwad Peda, Hindustani classical music maestros (Bhimsen Joshi, Kumar Gandharva).",
      famousSpot: "Dharwad Heritage Hub",
    },
    "Gadag": {
      name: "Gadag",
      tagline: "Kalyana Chalukya Temples & Printing Capital",
      headquarters: "Gadag-Betageri",
      knownFor: "Trikuteshwara Temple (intricately carved stone pillars of Saraswati), Veera Narayana Temple where poet Kumaravyasa wrote Mahabharata.",
      famousSpot: "Trikuteshwara Temple Complex",
    },
    "Chitradurga": {
      name: "Chitradurga",
      tagline: "Fort of Seven Walls (Kallina Kote)",
      headquarters: "Chitradurga",
      knownFor: "Chitradurga Fort (impenetrable seven-walled fort), legend of brave Onake Obavva defending the secret crevice.",
      famousSpot: "Chitradurga Seven-Walled Fort",
    },
    "Davanagere": {
      name: "Davanagere",
      tagline: "Butter Dosa (Benne Dosa) Capital of India",
      headquarters: "Davanagere",
      knownFor: "Crisp golden Davanagere Benne Dosa roasted in white homemade butter, textile mills on the banks of Tungabhadra.",
      famousSpot: "Traditional Benne Dosa Guilds",
    },
    "Koppal": {
      name: "Koppal",
      tagline: "Kinnal Wooden Toys & Jain Heritage",
      headquarters: "Koppal",
      knownFor: "GI-tagged Kinnal painted wooden craft, Mahadeva Temple at Itagi ('Emperor among Temples'), Anegundi ruins.",
      famousSpot: "Anegundi (Ancient Kishkindha) & Itagi Temple",
    },
    "Raichur": {
      name: "Raichur",
      tagline: "Doab of Krishna and Tungabhadra",
      headquarters: "Raichur",
      knownFor: "Raichur Fort with Persian & Sanskrit inscriptions, fertile cotton and rice doab, thermal power station.",
      famousSpot: "Raichur Historic Fort",
    },
    "Yadgir": {
      name: "Yadgir",
      tagline: "Land of Uranium Hills & Bheema River",
      headquarters: "Yadgir",
      knownFor: "Yadgir Hill Fort, Bheema river valley, traditional cement and natural stone quarrying.",
      famousSpot: "Yadgir Hill Fort",
    },
    "Mandya": {
      name: "Mandya",
      tagline: "Sugar Capital & Srirangapatna Citadel",
      headquarters: "Mandya",
      knownFor: "Srirangapatna (island fortress capital of Tipu Sultan & Sri Ranganatha temple), Krishna Raja Sagara Dam & Brindavan Gardens.",
      famousSpot: "Srirangapatna Island Fortress & KRS Dam",
    },
    "Chamarajanagara": {
      name: "Chamarajanagara",
      tagline: "Bandipur Tigers & BR Hills Biodiversity",
      headquarters: "Chamarajanagar",
      knownFor: "Bandipur National Park (Project Tiger haven), Biligirirangana (BR) Hills, Male Mahadeshwara Temple.",
      famousSpot: "Bandipur Tiger Reserve & BR Hills",
    },
    "Tumakuru": {
      name: "Tumakuru",
      tagline: "City of Education & Devarayanadurga Hills",
      headquarters: "Tumakuru",
      knownFor: "Siddaganga Mutt (philanthropic education for 10,000 children), Devarayanadurga hill temples, tender coconut production.",
      famousSpot: "Devarayanadurga Hill Temples",
    },
    "Kolar": {
      name: "Kolar",
      tagline: "Land of Gold Fields (KGF) & Silk",
      headquarters: "Kolar",
      knownFor: "Historic Kolar Gold Fields (KGF, once deepest gold mines in the world), Someshwara Temple, milk and tomato production.",
      famousSpot: "Kolar Gold Fields Heritage & Someshwara",
    },
    "Chikkaballapura": {
      name: "Chikkaballapura",
      tagline: "Nandi Hills & Sir M. Visvesvaraya Birthplace",
      headquarters: "Chikkaballapur",
      knownFor: "Nandi Hills (picturesque fortress hillock and sunrise viewpoint), Muddenahalli (birthplace of engineer Sir MV).",
      famousSpot: "Nandi Hills Sunrise & Muddenahalli",
    },
    "Ramanagara": {
      name: "Ramanagara",
      tagline: "Silk City & Sholay Ramadevara Betta",
      headquarters: "Ramanagara",
      knownFor: "Asia's largest cocoon silk market, granite boulder hills where the legendary movie Sholay was filmed, vulture sanctuary.",
      famousSpot: "Ramadevara Betta & Silk Cocoon Market",
    },
    "Haveri": {
      name: "Haveri",
      tagline: "Cardamom Garland City & Byadgi Chillies",
      headquarters: "Haveri",
      knownFor: "Byadgi red chillies (world-famous for deep red oleoresin color), Siddhesvara Temple, cardamom garland handicrafts.",
      famousSpot: "Siddhesvara Temple & Byadgi Spice Markets",
    },
  },
  landmarks: [
    {
      id: "hampi-stone-chariot",
      name: "Stone Chariot & Virupaksha Temple",
      district: "Ballari",
      lat: 15.335,
      lon: 76.46,
      category: "monument",
      description: "Iconic symbol of Karnataka and UNESCO World Heritage Site; a monolithic stone shrine carved in the form of an ornate temple car dedicated to Garuda inside the Vijayanagara ruins.",
      image: "/images/landmarks/karnataka/hampi-stone-chariot_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Ballari",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Stone Chariot & Virupaksha Temple in Ballari.",
      gallery: [
        {
                url: "/images/landmarks/karnataka/hampi-stone-chariot_angle1.jpg",
                angle: "Front Elevation",
                caption: "Stone Chariot & Virupaksha Temple — Front elevation and iconic monumental facade in Ballari."
        },
        {
                url: "/images/landmarks/karnataka/hampi-stone-chariot_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Stone Chariot & Virupaksha Temple — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/karnataka/hampi-stone-chariot_angle4.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Stone Chariot & Virupaksha Temple — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/karnataka/hampi-stone-chariot_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Stone Chariot & Virupaksha Temple — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "mysore-palace",
      name: "Mysuru Royal Palace (Amba Vilas)",
      district: "Mysuru",
      lat: 12.3051,
      lon: 76.6551,
      category: "monument",
      description: "One of India's most visited architectural landmarks, combining Indo-Saracenic, Rajput, and Gothic styles, glowing with 97,000 incandescent lamps on Dasara nights.",
      image: "/images/landmarks/karnataka/mysore-palace_angle1.jpg",
      era: "1897–1912 CE (Wodeyar Dynasty)",
      builtBy: "Architect Henry Irwin for Maharani Kempananjammanni Vani Vilasa Sannidhana",
      architecturalStyle: "Indo-Saracenic Revival Architecture with Rose-Pink Domes",
      significance: "One of India's most visited royal palaces, famous for illuminated Dasara celebrations.",
      gallery: [
        {
                url: "/images/landmarks/karnataka/mysore-palace_angle1.jpg",
                angle: "Front Elevation",
                caption: "Mysuru Royal Palace (Amba Vilas) — Front elevation and iconic monumental facade in Mysuru."
        },
        {
                url: "/images/landmarks/karnataka/mysore-palace_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Mysuru Royal Palace (Amba Vilas) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/karnataka/mysore-palace_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Mysuru Royal Palace (Amba Vilas) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/karnataka/mysore-palace_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Mysuru Royal Palace (Amba Vilas) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "belur-chennakeshava",
      name: "Chennakeshava Temple Belur (Hoysala)",
      district: "Hassan",
      lat: 13.1623,
      lon: 75.8596,
      category: "spiritual",
      description: "UNESCO World Heritage Hoysala soapstone temple constructed in 1117 CE by King Vishnuvardhana, renowned for 42 bracket figures of dancing damsels (Madanikas).",
      image: "/images/landmarks/karnataka/belur-chennakeshava_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Hassan",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Chennakeshava Temple Belur (Hoysala) in Hassan.",
      gallery: [
        {
                url: "/images/landmarks/karnataka/belur-chennakeshava_angle1.jpg",
                angle: "Front Elevation",
                caption: "Chennakeshava Temple Belur (Hoysala) — Front elevation and iconic monumental facade in Hassan."
        },
        {
                url: "/images/landmarks/karnataka/belur-chennakeshava_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Chennakeshava Temple Belur (Hoysala) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/karnataka/belur-chennakeshava_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Chennakeshava Temple Belur (Hoysala) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/karnataka/belur-chennakeshava_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Chennakeshava Temple Belur (Hoysala) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "gol-gumbaz",
      name: "Gol Gumbaz of Vijayapura",
      district: "Vijayapura",
      lat: 16.8306,
      lon: 75.736,
      category: "monument",
      description: "Mausoleum of Mohammed Adil Shah featuring a unsupported circular dome 44 meters in diameter, with an acoustic whispering gallery where even a soft whisper echoes 11 times.",
      image: "/images/landmarks/karnataka/gol-gumbaz_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Vijayapura",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Gol Gumbaz of Vijayapura in Vijayapura.",
      gallery: [
        {
                url: "/images/landmarks/karnataka/gol-gumbaz_angle1.jpg",
                angle: "Front Elevation",
                caption: "Gol Gumbaz of Vijayapura — Front elevation and iconic monumental facade in Vijayapura."
        },
        {
                url: "/images/landmarks/karnataka/gol-gumbaz_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Gol Gumbaz of Vijayapura — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/karnataka/gol-gumbaz_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Gol Gumbaz of Vijayapura — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/karnataka/gol-gumbaz_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Gol Gumbaz of Vijayapura — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "shravanabelagola",
      name: "Monolithic Gommateshwara Statue",
      district: "Hassan",
      lat: 12.8569,
      lon: 76.4851,
      category: "spiritual",
      description: "World's tallest monolithic free-standing statue (57 feet tall), carved out of a single block of granite atop Vindhyagiri hill in 981 CE by Ganga commander Chavundaraya.",
      image: "/images/landmarks/karnataka/shravanabelagola_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Hassan",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Monolithic Gommateshwara Statue in Hassan.",
      gallery: [
        {
                url: "/images/landmarks/karnataka/shravanabelagola_angle1.jpg",
                angle: "Front Elevation",
                caption: "Monolithic Gommateshwara Statue — Front elevation and iconic monumental facade in Hassan."
        },
        {
                url: "/images/landmarks/karnataka/shravanabelagola_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Monolithic Gommateshwara Statue — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/karnataka/shravanabelagola_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Monolithic Gommateshwara Statue — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/karnataka/shravanabelagola_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Monolithic Gommateshwara Statue — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "jog-falls",
      name: "Jog Falls (Gerosoppa)",
      district: "Shivamogga",
      lat: 14.2285,
      lon: 74.8114,
      category: "nature",
      description: "Spectacular natural wonder where the Sharavathi River plunges 253 meters in four distinct cascades named Raja, Roarer, Rocket, and Rani.",
      image: "/images/landmarks/karnataka/jog-falls_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Shivamogga",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Jog Falls (Gerosoppa) in Shivamogga.",
      gallery: [
        {
                url: "/images/landmarks/karnataka/jog-falls_angle1.jpg",
                angle: "Front Elevation",
                caption: "Jog Falls (Gerosoppa) — Front elevation and iconic monumental facade in Shivamogga."
        },
        {
                url: "/images/landmarks/karnataka/jog-falls_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Jog Falls (Gerosoppa) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/karnataka/jog-falls_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Jog Falls (Gerosoppa) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/karnataka/jog-falls_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Jog Falls (Gerosoppa) — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Bisi Bele Bath",
      hindiName: "बिसी बेले भात",
      tag: "Royal Rice Delicacy of Mysore",
      description:
        "Literally 'Hot Lentil Rice', this rich one-pot royal dish slow-cooks rice, toor dal, and assorted vegetables with a freshly ground aromatic spice blend (cinnamon, cloves, marathi mokku, dried coconut), fried cashews, and desi ghee.",
      image: "/images/karnataka/bisi_bele_bath.jpg",
      origin: "Mysore Palace kitchen",
      ingredients: ["Short-grain rice", "Toor dal", "Desi ghee", "Bisi Bele masala", "Cashews & Tamarind"],
    },
    {
      name: "Mysore Pak",
      hindiName: "मैसूर पाक",
      tag: "The Melt-in-the-Mouth Royal Sweet",
      description:
        "Invented in 1935 by royal royal chef Kakasura Madappa in the kitchens of the Mysore Palace, made by blending roasted gram flour (besan) with streaming hot pure desi ghee and sugar syrup until aerated and buttery.",
      image: "/images/karnataka/mysore_pak.jpg",
      origin: "Kakasura Madappa, Mysore Royal Palace",
      ingredients: ["Pure Desi Ghee", "Besan (gram flour)", "Sugar syrup", "Cardamom"],
    },
    {
      name: "Neer Dosa",
      hindiName: "नीर डोसा",
      tag: "Feather-Light Cloud Crepe of Karavali",
      description:
        "Literally 'Water Dosa', prepared from a watery unfermented batter of soaked raw rice and fresh grated coconut, cooked quickly without oil on a cast-iron skillet into delicate, paper-thin, handkerchief-soft folds.",
      image: "/images/karnataka/neer_dosa.jpg",
      origin: "Udupi & Mangaluru Coastal belt",
      ingredients: ["Raw rice", "Grated fresh coconut", "Water", "Salt"],
    },
    {
      name: "Kundapura Chicken Ghee Roast",
      hindiName: "चिकन घी रोस्ट",
      tag: "Fiery Coastal Coastal Masterpiece",
      description:
        "A legendary culinary export from Kundapura, where tender meat is pan-roasted dry in generous tablespoons of pure ghee with a fiery crimson paste of stone-ground Byadgi chillies, coriander, and spices.",
      image: "/images/karnataka/ghee_roast.jpg",
      origin: "Kundapura (Coastal Karnataka)",
      ingredients: ["Byadgi chillies", "Pure Desi Ghee", "Curd marinade", "Peppercorns & Fenugreek", "Curry leaves"],
    },
    {
      name: "Ragi Mudde with Saaru",
      hindiName: "रागी मुद्दे",
      tag: "Nutritional Superfood of Karnataka Farmers",
      description:
        "Steamed spherical dumplings of gluten-free finger millet (Ragi) flour cooked with water into a dense, smooth sphere, traditionally swallowed whole with spicy vegetable or mutton Bassaru / Soppina Saaru.",
      image: "/images/karnataka/ragi_mudde.jpg",
      origin: "Southern Karnataka plateau (Old Mysore)",
      ingredients: ["Ragi (finger millet) flour", "Water", "Ghee touch", "Served with hot leafy Saaru broth"],
    },
  ],
  traditions: [
    {
      title: "Yakshagana Dance Theatre",
      category: "Ancient Temple Theatrical Art",
      period: "15th Century Coastal Karnataka",
      description:
        "A vibrant dance-drama combining classical and folk elements, recognized for towering ornamented headgear (Pagade), elaborate face makeup, high-energy whirling spins, and impromptu extempore dialogues narrating epic puranic battles.",
      image: "/images/karnataka/yakshagana.jpg",
      highlights: ["Magnificent Pagade headgear and face paints", "Whirling circular pirouette leaps", "Live Chande drumming and Bhagavatha singing"],
    },
    {
      title: "Mysore Dasara Jumboo Savari",
      category: "State Festival of Karnataka (Nada Habba)",
      period: "1610 CE (Raja Wadiyar I)",
      description:
        "A 400-year-old royal state festival where the lead tusker elephant, decorated in ceremonial gold patterns, carries the 750-kilogram pure gold howdah containing Goddess Chamundeshwari through cheering crowds.",
      image: "/images/karnataka/mysore_dasara.jpg",
      highlights: ["750-kg pure gold Ambari howdah", "Decorated royal elephant procession", "100,000 illuminated palace light bulbs"],
    },
    {
      title: "Bidriware Metal Handicraft",
      category: "Royal Metal Inlay Craft",
      period: "14th Century (Bahmani Sultanate)",
      description:
        "A world-renowned craft where pure silver wire is delicately hammered into intricate floral grooves chiseled onto a blackened zinc-copper alloy, using special soil found only inside the ruins of Bidar Fort.",
      image: "/images/karnataka/bidriware.jpg",
      highlights: ["Pure silver inlay on blackened alloy", "Special unoxidized soil from Bidar Fort", "GI-tagged heritage craft"],
    },
  ],
  attires: [
    {
      name: "Mysore Silk Saree",
      type: "Royal Mulberry Silk",
      description:
        "Manufactured exclusively by the Karnataka Silk Industries Corporation (KSIC) using 100% pure silk and 0.65% pure gold and silver zari, celebrated for its smooth lustrous drape and embroidered code numbers.",
      image: "/images/karnataka/mysore_silk_saree.jpg",
      specialty: "Pioneered in 1912 by Maharaja Nalvadi Krishnaraja Wadiyar.",
    },
    {
      name: "Ilkal Saree & Kasuti Embroidery",
      type: "Heritage Handloom Saree",
      description:
        "Handwoven cotton and silk saree distinguished by its red and white Chikki Paras border and distinctive red silk pallu (Tope Teni) joined by a unique Kondi technique, often adorned with geometric Kasuti needlework.",
      image: "/images/karnataka/ilkal_saree.jpg",
      specialty: "Traditional attire of northern Karnataka women.",
    },
    {
      name: "Panche, Shalya & Mysore Peta",
      type: "Men's Royal Heritage Attire",
      description:
        "A pure cotton or silk dhoti (Panche) with golden border, paired with an over-the-shoulder stole (Shalya) and the iconic royal Mysore Peta turban made of silk and gold zari lace.",
      image: "/images/karnataka/panche_mysore_peta.jpg",
      specialty: "Highest ceremonial honor bestowed upon scholars, artists, and dignitaries.",
    },
  ],
  monuments: [
    {
      name: "Stone Chariot & Virupaksha Temple",
      location: "Hampi, Ballari / Vijayanagara",
      era: "7th – 16th Century CE (Vijayanagara Empire)",
      unesco: true,
      description:
        "Surreal ruins of the world's second-largest medieval city after Beijing, sprawling over 4,100 hectares of giant boulder-strewn hills, containing royal palaces, musical stone pillars, and the iconic stone chariot.",
      image: "/images/karnataka/hampi_stone_chariot.jpg",
      significance: "UNESCO World Heritage Site and featured on the Indian ₹50 banknote.",
    },
    {
      name: "Mysore Palace (Amba Vilas)",
      location: "Mysuru",
      era: "1912 CE (Designed by Henry Irwin)",
      unesco: false,
      description:
        "Three-story stone palace with marble domes, stained glass ceilings from Glasgow, ivory inlaid doors, and the golden royal throne, built for the Wadiyar dynasty.",
      image: "/images/karnataka/mysore_palace.jpg",
      significance: "Second most popular tourist site in India after the Taj Mahal.",
    },
    {
      name: "Chennakeshava Temple of Belur",
      location: "Belur, Hassan",
      era: "1117 CE (Hoysala King Vishnuvardhana)",
      unesco: true,
      description:
        "Carved out of soft chloritic schist soapstone that hardens over time, featuring star-shaped architectural plan, ceiling rosettes, and friezes depicting 650 caparisoned elephants no two of which are alike.",
      image: "/images/karnataka/belur_temple.jpg",
      significance: "Inscribed on UNESCO World Heritage list in 2023.",
    },
    {
      name: "Gol Gumbaz",
      location: "Vijayapura (Bijapur)",
      era: "1656 CE (Mohammed Adil Shah)",
      unesco: false,
      description:
        "The circular dome of Gol Gumbaz stands completely unsupported by pillars, covering an area of 1,700 square meters. The whispering gallery reproduces even the faintest rustle of paper across the central chasm.",
      image: "/images/karnataka/gol_gumbaz.jpg",
      significance: "Engineering triumph of Indo-Islamic Deccan Sultanate architecture.",
    },
  ],
  languages: [
    {
      name: "Kannada (ಕನ್ನಡ)",
      script: "Kannada Script (Kadamba lineage)",
      speakers: "50+ Million",
      greeting: "Namaskara (ನಮಸ್ಕಾರ)",
      meaning: "Reverential greetings to the divine soul",
      description:
        "Designated a Classical Language of India, Kannada holds the second-highest number of Jnanpith Awards (8) in India, with an unbroken literary tradition from the 450 CE Halmidi inscription to modern masterworks.",
    },
    {
      name: "Tulu (ತುಳು)",
      script: "Tigalari / Kannada Script",
      speakers: "2+ Million (Tulunadu Coastal Belt)",
      greeting: "Solmelu (ಸೊಲ್ಮೆಲು)",
      meaning: "Heartfelt gratitude and salute",
      description:
        "Ancient Dravidian language spoken across coastal Dakshina Kannada and Udupi, rich in oral epics (Paddanas) and spirit worship ritual poetry.",
    },
    {
      name: "Kodava Takk",
      script: "Kannada Script",
      speakers: "200,000+ (Kodagu Hills)",
      greeting: "Namaskara / Vanakkam",
      meaning: "Greetings with honor",
      description:
        "The unique spoken tongue of the martial Kodava community of Coorg, preserved through oral ballads celebrating ancestry and warfare.",
    },
  ],
  luminaries: [
    {
      name: "Basaveshwara (Lord Basava)",
      image: "/images/luminaries/basaveshwara_lord_basava.jpg",
      era: "1105 – 1167 CE",
      title: "Social Reformer, Philosopher & Pioneer of Democracy",
      contribution:
        "12th-century philosopher and statesman who established the 'Anubhava Mantapa'—the world's first open spiritual and democratic parliament—pioneered the Vachana literature movement, rejected caste hierarchies, and proclaimed 'Kayakave Kailasa' (Work is Worship).",
    },
    {
      name: "Sri Krishnadevaraya",
      image: "/images/luminaries/sri_krishnadevaraya.jpg",
      era: "1471 – 1529 CE",
      title: "Emperor of the Vijayanagara Empire",
      contribution:
        "The most powerful ruler of Vijayanagara, a patron of literature and architecture who authored the Telugu epic Amuktamalyada, constructed magnificent temple gopurams across India, and made Hampi a global trade capital.",
    },
    {
      name: "Sir M. Visvesvaraya",
      image: "/images/luminaries/sir_m_visvesvaraya.jpg",
      era: "1861 – 1962 CE",
      title: "Father of Modern Indian Engineering (Bharat Ratna)",
      contribution:
        "Chief Engineer of Mysore who built the Krishna Raja Sagara Dam, invented automated floodgates, founded the University of Mysore and state industries; his birthday (September 15) is celebrated as National Engineers' Day in India.",
    },
  ],
}
