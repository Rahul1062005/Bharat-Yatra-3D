import type { StateData } from "../types/state"

export const delhiData: StateData = {
  id: "delhi",
  name: "Delhi",
  hindiName: "दिल्ली",
  capital: "New Delhi",
  tagline: "Heart of the Republic, Timeless Heritage & Capital of Empires",
  overview:
    "Delhi, the National Capital Territory of India and seat of the world's largest democracy, has stood as the epicenter of Indian power, literature, and commerce for millennia. Layered over seven historic cities from Indraprastha of the Mahabharata to Shahjahanabad and Lutyens' New Delhi, it is a city where 800-year-old sandstone minarets stand alongside world-class metro networks, aromatic alleyways of Chandni Chowk, and soul-stirring Sufi music.",
  ancientNames: ["Indraprastha", "Dhillika", "Yoginipura", "Shahjahanabad"],
  keyStats: [
    { label: "Districts", value: "11 Revenue Districts" },
    { label: "National Capital", value: "New Delhi" },
    { label: "UNESCO World Heritage Sites", value: "3 (Qutb Minar, Humayun's Tomb, Red Fort)" },
    { label: "Historic Span", value: "Over 2,500 continuous years of urban history" },
    { label: "Green Cover", value: "Over 23% Urban Forest & Ridge Canopy" },
    { label: "Democracy Center", value: "Rashtrapati Bhavan, Parliament & Supreme Court" },
  ],
  quote: {
    text: "I asked my soul: What is Delhi? She answered: The world is the body and Delhi is the soul.",
    author: "Mirza Ghalib (1797–1869)",
  },
  districts: {
    "New Delhi": {
      name: "New Delhi",
      tagline: "Seat of the Sovereign Republic & Lutyens' Boulevards",
      headquarters: "Connaught Place",
      knownFor: "Rashtrapati Bhavan, Kartavya Path (India Gate), Parliament House, Connaught Place (Rajiv Chowk), National Museum.",
      famousSpot: "India Gate & Rashtrapati Bhavan",
    },
    "Central Delhi": {
      name: "Central Delhi",
      tagline: "Walled Citadel of Shahjahanabad & Aromatic Chawk",
      headquarters: "Daryaganj",
      knownFor: "Red Fort (Lal Qila), Jama Masjid, Chandni Chowk, Paranthe Wali Gali, Raj Ghat memorial.",
      famousSpot: "Red Fort & Jama Masjid",
    },
    "South Delhi": {
      name: "South Delhi",
      tagline: "Medieval Minarets, Hauz Khas & Lotus Temple",
      headquarters: "Saket",
      knownFor: "Qutub Minar complex, Hauz Khas Village & Lake, Lotus Temple, Mehrauli Archaeological Park, Siri Fort.",
      famousSpot: "Qutub Minar & Lotus Temple",
    },
    "South East Delhi": {
      name: "South East Delhi",
      tagline: "Mughal Garden Tombs & Nizamuddin Shrine",
      headquarters: "Lajpat Nagar",
      knownFor: "Humayun's Tomb, Hazrat Nizamuddin Dargah, Lotus Bahá'í House, Lajpat Nagar Central Market.",
      famousSpot: "Humayun's Tomb & Nizamuddin Dargah",
    },
    "South West Delhi": {
      name: "South West Delhi",
      tagline: "Aviation Gateway & Sub-City Modernity",
      headquarters: "Dwarka",
      knownFor: "Indira Gandhi International Airport, Dwarka sub-city, diplomatic enclaves.",
      famousSpot: "Bharat Vandana Park & Dwarka",
    },
    "West": {
      name: "West Delhi",
      tagline: "Vibrant Punjabi Bazaars & Culinary Hubs",
      headquarters: "Rajouri Garden",
      knownFor: "Rajouri Garden shopping hub, Tilak Nagar street cuisine, Pacific Mall, Punjabi Bagh gardens.",
      famousSpot: "Rajouri Garden & Pacific Mall",
    },
    "North Delhi": {
      name: "North Delhi",
      tagline: "Academic Corridor & Ridge Monuments",
      headquarters: "Civil Lines",
      knownFor: "Delhi University North Campus, Mutiny Memorial, Coronation Park, Kamla Nagar.",
      famousSpot: "Delhi University Ridge & Coronation Park",
    },
    "North West Delhi": {
      name: "North West Delhi",
      tagline: "Dilli Haat Pitampura & Historic Gates",
      headquarters: "Kanjhawala",
      knownFor: "Pitampura TV Tower, Dilli Haat Pitampura, Adventure Island, Rohini parks.",
      famousSpot: "Dilli Haat Pitampura",
    },
    "North East Delhi": {
      name: "North East Delhi",
      tagline: "Yamuna Floodplain Wetlands & Historic Bridges",
      headquarters: "Nand Nagri",
      knownFor: "Signature Bridge over Yamuna, Yamuna Biodiversity Park, artisanal brass and textile markets.",
      famousSpot: "Signature Bridge & Yamuna Park",
    },
    "East Delhi": {
      name: "East Delhi",
      tagline: "Akshardham Grandeur & Sanjay Lake",
      headquarters: "Preet Vihar",
      knownFor: "Swaminarayan Akshardham Temple complex, Sanjay Lake park, Laxmi Nagar.",
      famousSpot: "Swaminarayan Akshardham Temple",
    },
    "Shahdara": {
      name: "Shahdara",
      tagline: "Oldest Suburb & Historic Trading Depots",
      headquarters: "Shahdara",
      knownFor: "Historic Grand Trunk road route, grain markets, Shyam Lal heritage campus.",
      famousSpot: "Historic Shahdara Gate",
    },
  },
  landmarks: [
    {
        id: "delhi-red-fort",
        name: "Red Fort (Lal Qila)",
        district: "Central Delhi",
        lat: 28.6562,
        lon: 77.241,
        category: "monument",
        description: "UNESCO World Heritage imperial palace of the Mughal Empire and national symbol of Indian sovereignty.",
        image: "/images/landmarks/delhi/delhi-red-fort_angle1.jpg",
        era: "1638–1648 CE (Mughal Dynasty)",
        builtBy: "Emperor Shah Jahan & Ustad Ahmad Lahori",
        architecturalStyle: "Indo-Islamic Red Sandstone Fortification",
        significance: "UNESCO World Heritage imperial palace of the Mughal Empire and national symbol of Indian sovereignty.",
        gallery: [
            {
                url: "/images/landmarks/delhi/delhi-red-fort_angle1.jpg",
                angle: "Front Elevation",
                caption: "Red Fort (Lal Qila) — Front elevation and iconic monumental facade in Central Delhi."
            },
            {
                url: "/images/landmarks/delhi/delhi-red-fort_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Red Fort (Lal Qila) — Broad panoramic context and surrounding heritage grounds."
            },
            {
                url: "/images/landmarks/delhi/delhi-red-fort_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Red Fort (Lal Qila) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
            },
            {
                url: "/images/landmarks/delhi/delhi-red-fort_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Red Fort (Lal Qila) — Radiant sunset and evening twilight ambiance."
            }
        ]
    },
    {
        id: "delhi-qutub-minar",
        name: "Qutb Minar Complex",
        district: "South Delhi",
        lat: 28.5244,
        lon: 77.1855,
        category: "monument",
        description: "UNESCO World Heritage site with the world's tallest brick minaret (72.5m) and ancient rust-resistant Iron Pillar.",
        image: "/images/landmarks/delhi/delhi-qutub-minar_angle1.jpg",
        era: "1192–1368 CE (Delhi Sultanate)",
        builtBy: "Qutb-ud-din Aibak, Iltutmish & Firoz Shah Tughlaq",
        architecturalStyle: "Indo-Islamic Fluted Red Sandstone Minaret",
        significance: "UNESCO World Heritage site with the world's tallest brick minaret (72.5m) and ancient rust-resistant Iron Pillar.",
        gallery: [
            {
                url: "/images/landmarks/delhi/delhi-qutub-minar_angle1.jpg",
                angle: "Front Elevation",
                caption: "Qutb Minar Complex — Front elevation and iconic monumental facade in South Delhi."
            },
            {
                url: "/images/landmarks/delhi/delhi-qutub-minar_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Qutb Minar Complex — Broad panoramic context and surrounding heritage grounds."
            },
            {
                url: "/images/landmarks/delhi/delhi-qutub-minar_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Qutb Minar Complex — Intricate architectural motifs, craftsmanship, and historic stone masonry."
            },
            {
                url: "/images/landmarks/delhi/delhi-qutub-minar_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Qutb Minar Complex — Radiant sunset and evening twilight ambiance."
            }
        ]
    },
    {
        id: "delhi-humayuns-tomb",
        name: "Humayun's Tomb",
        district: "South East Delhi",
        lat: 28.5933,
        lon: 77.2507,
        category: "monument",
        description: "UNESCO World Heritage garden-tomb that pioneered the Charbagh layout and inspired the Taj Mahal.",
        image: "/images/landmarks/delhi/delhi-humayuns-tomb_angle1.jpg",
        era: "1565–1572 CE (Mughal Dynasty)",
        builtBy: "Empress Bega Begum & Architect Mirak Mirza Ghiyas",
        architecturalStyle: "Mughal Garden Tomb & Red Sandstone-Marble Architecture",
        significance: "UNESCO World Heritage garden-tomb that pioneered the Charbagh layout and inspired the Taj Mahal.",
        gallery: [
            {
                url: "/images/landmarks/delhi/delhi-humayuns-tomb_angle1.jpg",
                angle: "Front Elevation",
                caption: "Humayun's Tomb — Front elevation and iconic monumental facade in South East Delhi."
            },
            {
                url: "/images/landmarks/delhi/delhi-humayuns-tomb_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Humayun's Tomb — Broad panoramic context and surrounding heritage grounds."
            },
            {
                url: "/images/landmarks/delhi/delhi-humayuns-tomb_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Humayun's Tomb — Intricate architectural motifs, craftsmanship, and historic stone masonry."
            },
            {
                url: "/images/landmarks/delhi/delhi-humayuns-tomb_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Humayun's Tomb — Radiant sunset and evening twilight ambiance."
            }
        ]
    },
    {
        id: "delhi-india-gate",
        name: "India Gate & Kartavya Path",
        district: "New Delhi",
        lat: 28.6129,
        lon: 77.2295,
        category: "monument",
        description: "National war memorial honoring 13,300 fallen soldiers, anchored on the majestic ceremonial boulevard of Bharat.",
        image: "/images/landmarks/delhi/delhi-india-gate_angle1.jpg",
        era: "1921–1931 CE (British Era / Modern Republic)",
        builtBy: "Architect Sir Edwin Lutyens",
        architecturalStyle: "Classical Sandstone Triumphal Arch Architecture",
        significance: "National war memorial honoring 13,300 fallen soldiers, anchored on the majestic ceremonial boulevard of Bharat.",
        gallery: [
            {
                url: "/images/landmarks/delhi/delhi-india-gate_angle1.jpg",
                angle: "Front Elevation",
                caption: "India Gate & Kartavya Path — Front elevation and iconic monumental facade in New Delhi."
            },
            {
                url: "/images/landmarks/delhi/delhi-india-gate_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "India Gate & Kartavya Path — Broad panoramic context and surrounding heritage grounds."
            },
            {
                url: "/images/landmarks/delhi/delhi-india-gate_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "India Gate & Kartavya Path — Intricate architectural motifs, craftsmanship, and historic stone masonry."
            },
            {
                url: "/images/delhi/india_gate.jpg",
                angle: "Golden Hour & Sunset",
                caption: "India Gate & Kartavya Path — Radiant sunset and evening twilight ambiance."
            }
        ]
    },
    {
        id: "delhi-lotus-temple",
        name: "Lotus Temple (Bahá'í House of Worship)",
        district: "South East Delhi",
        lat: 28.5535,
        lon: 77.2588,
        category: "spiritual",
        description: "World-renowned temple formed of 27 free-standing marble petals welcoming all faiths in silent contemplation.",
        image: "/images/delhi/red_fort.jpg",
        era: "1986 CE (Modern Republic)",
        builtBy: "Architect Fariborz Sahba",
        architecturalStyle: "Expressionist Petal-Form White Marble Architecture",
        significance: "World-renowned temple formed of 27 free-standing marble petals welcoming all faiths in silent contemplation.",
        gallery: [
            {
                url: "/images/delhi/red_fort.jpg",
                angle: "Front Elevation",
                caption: "Lotus Temple (Bahá'í House of Worship) — Front elevation and iconic monumental facade in South East Delhi."
            },
            {
                url: "/images/landmarks/delhi/delhi-lotus-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Lotus Temple (Bahá'í House of Worship) — Broad panoramic context and surrounding heritage grounds."
            },
            {
                url: "/images/landmarks/delhi/delhi-lotus-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Lotus Temple (Bahá'í House of Worship) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
            },
            {
                url: "/images/landmarks/delhi/delhi-lotus-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Lotus Temple (Bahá'í House of Worship) — Radiant sunset and evening twilight ambiance."
            }
        ]
    },
    {
        id: "delhi-akshardham",
        name: "Swaminarayan Akshardham",
        district: "East Delhi",
        lat: 28.6127,
        lon: 77.2773,
        category: "spiritual",
        description: "Colossal Hindu cultural temple campus with 234 ornate pillars, 9 domes, and Gajendra Pith honoring Indian spirituality.",
        image: "/images/landmarks/delhi/delhi-akshardham_angle1.jpg",
        era: "2005 CE (Modern Era)",
        builtBy: "Pramukh Swami Maharaj & 11,000 Artisans",
        architecturalStyle: "Traditional Hindu Sandstone & Carrara Marble Vastu Architecture",
        significance: "Colossal Hindu cultural temple campus with 234 ornate pillars, 9 domes, and Gajendra Pith honoring Indian spirituality.",
        gallery: [
            {
                url: "/images/landmarks/delhi/delhi-akshardham_angle1.jpg",
                angle: "Front Elevation",
                caption: "Swaminarayan Akshardham — Front elevation and iconic monumental facade in East Delhi."
            },
            {
                url: "/images/landmarks/delhi/delhi-akshardham_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Swaminarayan Akshardham — Broad panoramic context and surrounding heritage grounds."
            },
            {
                url: "/images/delhi/red_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Swaminarayan Akshardham — Intricate architectural motifs, craftsmanship, and historic stone masonry."
            },
            {
                url: "/images/landmarks/delhi/delhi-akshardham_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Swaminarayan Akshardham — Radiant sunset and evening twilight ambiance."
            }
        ]
    },
    {
        id: "delhi-jama-masjid",
        name: "Jama Masjid (Masjid-i-Jahan-Numa)",
        district: "Central Delhi",
        lat: 28.6507,
        lon: 77.2334,
        category: "spiritual",
        description: "One of India's largest congregational mosques built by Shah Jahan commanding the historic skyline of Old Delhi.",
        image: "/images/landmarks/delhi/delhi-jama-masjid_angle1.jpg",
        era: "1650–1656 CE (Mughal Dynasty)",
        builtBy: "Emperor Shah Jahan",
        architecturalStyle: "Classical Mughal Striped Marble & Sandstone Mosque",
        significance: "One of India's largest congregational mosques built by Shah Jahan commanding the historic skyline of Old Delhi.",
        gallery: [
            {
                url: "/images/landmarks/delhi/delhi-jama-masjid_angle1.jpg",
                angle: "Front Elevation",
                caption: "Jama Masjid (Masjid-i-Jahan-Numa) — Front elevation and iconic monumental facade in Central Delhi."
            },
            {
                url: "/images/landmarks/delhi/delhi-jama-masjid_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Jama Masjid (Masjid-i-Jahan-Numa) — Broad panoramic context and surrounding heritage grounds."
            },
            {
                url: "/images/landmarks/delhi/delhi-jama-masjid_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Jama Masjid (Masjid-i-Jahan-Numa) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
            },
            {
                url: "/images/landmarks/delhi/delhi-jama-masjid_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Jama Masjid (Masjid-i-Jahan-Numa) — Radiant sunset and evening twilight ambiance."
            }
        ]
    }
],

  cuisines: [
    {
      name: "Old Delhi Paranthe (Paranthe Wali Gali)",
      image: "/images/delhi/paranthe_wali_gali.jpg",
      description: "Crispy, shallow-fried stuffed flatbreads in legendary Chandni Chowk varieties like rabri, kaju, khoya, paneer, and crushed green peas.",
      ingredients: ["Wheat dough", "Spiced fillings (paneer, peas, nuts)", "Pure desi ghee", "Mint chutney", "Sweet tamarind dip"],
      dietary: "Vegetarian",
    },
    {
      name: "Delhi Butter Chicken (Murgh Makhani)",
      image: "/images/delhi/butter_chicken.jpg",
      description: "Tandoori grilled chicken chunks simmered in a velvety, buttery tomato and cashew gravy infused with dried fenugreek leaves (kasoori methi).",
      ingredients: ["Tandoori chicken", "Ripe tomatoes", "Fresh cream", "White butter", "Cashews", "Kasoori methi"],
      dietary: "Non-Veg",
    },
    {
      name: "Delhi Chole Bhature",
      image: "/images/delhi/chole_bhature.jpg",
      description: "Piping hot balloon-like fried bread (bhatura) paired with dark, tangy chickpeas stewed in anar dana (pomegranate seeds) and garam masala.",
      ingredients: ["Chickpeas", "Pomegranate seeds", "Flour bhature", "Pickled carrot & green chili", "Mint onion salad"],
      dietary: "Vegetarian",
    },
    {
      name: "Dahi Bhalla / Chaat",
      image: "/images/delhi/dahi_bhalla.jpg",
      description: "Spongy lentil fritters dunked in chilled sweetened yogurt, ladled with zesty mint-coriander and sweet sonth chutneys, and dusted with roasted cumin.",
      ingredients: ["Urad dal dumplings", "Thick chilled yogurt", "Tamarind chutney", "Mint chutney", "Roasted jeera", "Pomegranate arils"],
      dietary: "Vegetarian",
    },
    {
      name: "Old Delhi Nihari",
      image: "/images/delhi/old_delhi_nihari.jpg",
      description: "Slow-simmered overnight royal meat stew infused with over 30 fragrant spices, garnished with julienned ginger, green chilies, and fresh lime.",
      ingredients: ["Tender shanks", "Kewra water", "Mace", "Cardamom", "Bone marrow", "Fresh ginger", "Lime"],
      dietary: "Non-Veg",
    },
  ],
  traditions: [
    {
      name: "Hazrat Nizamuddin Sufi Qawwali",
      image: "/images/delhi/nizamuddin_qawwali.jpg",
      category: "Spiritual Musical Tradition",
      description: "Seven-century-old Thursday evening mystical gatherings at the Dargah of Nizamuddin Auliya and Amir Khusro, where ecstatic Sufi poetry echoes through courtyard marble.",
      season: "Every Thursday Evening & Urs",
    },
    {
      name: "Dilli Haat Craft & Food Bazaar",
      image: "/images/delhi/dilli_haat.jpg",
      category: "Artisan & Folk Heritage",
      description: "An open-air thatched craft village presenting master weavers, brassworkers, and folk artists from all 28 states alongside authentic regional delicacies.",
      season: "Year-Round",
    },
    {
      name: "Phool Walon Ki Sair",
      image: "/images/delhi/phool_walon_ki_sair.jpg",
      category: "Communal Harmony Festival",
      description: "Historic 3-day autumn festival where flower-sellers carry large floral fans (pankhas) in procession to Yogmaya Temple and the shrine of Qutbuddin Bakhtiyar Kaki.",
      season: "October / Autumn",
    },
  ],
  attire: [
    {
      name: "Chandni Chowk Zardozi Lehenga",
      image: "/images/delhi/chandni_chowk_lehenga.jpg",
      type: "Imperial Bridal Wear",
      description: "Heavy silk and velvet bridal skirts embroidered with real metallic wires (zardozi), dabka, sequins, and pearls, perfected in Old Delhi karkhanas.",
      gender: "Women",
    },
    {
      name: "Classic Delhi Achkan & Sherwani",
      image: "/images/delhi/delhi_sherwani.jpg",
      type: "Formal Royal Attire",
      description: "A tailored knee-length structured coat worn over churidar with embroidered collars and jeweled buttons, representing Delhi's Mughal-Lutyens sartorial elegance.",
      gender: "Men",
    },
    {
      name: "Delhi Khadi Kurta & Dupatta",
      image: "/images/delhi/khadi_kurta.jpg",
      type: "Capital Intellectual & Daily Wear",
      description: "Breathable hand-spun khadi cotton kurtas paired with handloom stoles or dupattas, the hallmark of Delhi's university campus and arts district style.",
      gender: "Unisex",
    },
  ],
  monuments: [
    {
      name: "Red Fort (Lal Qila)",
      image: "/images/delhi/red_fort.jpg",
      location: "Netaji Subhash Marg, Chandni Chowk",
      period: "1638–1648 AD (Emperor Shah Jahan)",
      significance: "UNESCO World Heritage red sandstone citadel of the Mughal Empire, site of India's annual Independence Day Prime Ministerial address from the Lahori Gate.",
    },
    {
      name: "Qutb Minar Complex",
      image: "/images/delhi/qutub_minar.jpg",
      location: "Mehrauli, South Delhi",
      period: "1192 AD (Qutb-ud-din Aibak)",
      significance: "UNESCO World Heritage Site featuring the world's tallest brick minaret (72.5 meters) and the 1,600-year-old rust-resistant Iron Pillar of Chandragupta II.",
    },
    {
      name: "Humayun's Tomb",
      image: "/images/delhi/humayuns_tomb.jpg",
      location: "Nizamuddin East, South East Delhi",
      period: "1570 AD (Empress Bega Begum)",
      significance: "UNESCO World Heritage garden-tomb, the earliest grand Mughal mausoleum in India that directly inspired the architectural design of the Taj Mahal.",
    },
    {
      name: "India Gate & Kartavya Path",
      image: "/images/delhi/india_gate.jpg",
      location: "Kartavya Path, New Delhi",
      period: "1931 (Sir Edwin Lutyens)",
      significance: "Monumental 42-meter triumphal arch war memorial bearing names of 13,300 soldiers, fronted by the National War Memorial and Amar Jawan Jyoti flame.",
    },
  ],
}
