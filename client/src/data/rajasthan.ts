import type { StateData } from "../types/state"

export const rajasthanData: StateData = {
  id: "rajasthan",
  name: "Rajasthan",
  hindiName: "राजस्थान",
  capital: "Jaipur (The Pink City)",
  tagline: "The Land of Kings, Desert Citadels & Immortal Valor",
  overview:
    "Celebrated as Rajputana—the Land of Kings—Rajasthan is India's largest state by land area, crowned by golden sand dunes of the Thar Desert, the ancient Aravalli Range, invincible hill fortresses, majestic royal palaces, and an incomparable legacy of valor, chivalry, vibrant arts, and grand festivities.",
  ancientNames: ["Rajputana", "Maru-desh", "Gurjaratra", "Matsya Kingdom"],
  keyStats: [
    { label: "Districts", value: "33" },
    { label: "Capital", value: "Jaipur" },
    { label: "Lifeline River", value: "Chambal & Banas" },
    { label: "Desert Kingdom", value: "Great Thar Desert" },
    { label: "UNESCO Sites", value: "Hill Forts & Jantar Mantar" },
    { label: "National Park", value: "Ranthambore Tiger Reserve" },
  ],
  quote: {
    text: "Padharo Mhare Des — Welcome to our land where stone speaks of honor and the desert glows with colors of courage.",
    author: "Timeless Rajasthani Greeting",
  },
  districts: {
    "Jaipur": {
      name: "Jaipur",
      tagline: "The Pink City & UNESCO World Heritage Capital",
      headquarters: "Jaipur",
      knownFor: "Hawa Mahal, Amber Fort, City Palace, Jantar Mantar, Johari Bazaar gems.",
      famousSpot: "Amber Fort & Hawa Mahal",
    },
    "Jodhpur": {
      name: "Jodhpur",
      tagline: "The Blue City & Gateway to Thar",
      headquarters: "Jodhpur",
      knownFor: "Mehrangarh Fort, Umaid Bhawan Palace, Jaswant Thada, blue-washed heritage lanes.",
      famousSpot: "Mehrangarh Fort Citadel",
    },
    "Udaipur": {
      name: "Udaipur",
      tagline: "City of Lakes & Venice of the East",
      headquarters: "Udaipur",
      knownFor: "Lake Pichola, City Palace Udaipur, Jag Mandir, Saheliyon-ki-Bari.",
      famousSpot: "Lake Pichola & City Palace",
    },
    "Jaisalmer": {
      name: "Jaisalmer",
      tagline: "The Golden City of the Thar",
      headquarters: "Jaisalmer",
      knownFor: "Jaisalmer Fort (Sonar Qila), Sam Sand Dunes, Patwon Ki Haveli, desert camel safari.",
      famousSpot: "Sonar Qila (Living Golden Fort)",
    },
    "Bikaner": {
      name: "Bikaner",
      tagline: "Citadel of Red Sandstone & Desert Camels",
      headquarters: "Bikaner",
      knownFor: "Junagarh Fort, Karni Mata Temple, Bikaneri Bhujia, National Camel Research Centre.",
      famousSpot: "Junagarh Fort",
    },
    "Ajmer": {
      name: "Ajmer",
      tagline: "Spiritual Oasis & Dargah Sharif",
      headquarters: "Ajmer",
      knownFor: "Ajmer Sharif Dargah, Ana Sagar Lake, Taragarh Fort, Mayo College.",
      famousSpot: "Hazrat Khwaja Moinuddin Chishti Dargah",
    },
    "Alwar": {
      name: "Alwar",
      tagline: "Gateway of Rajasthan & Tiger Corridors",
      headquarters: "Alwar",
      knownFor: "Sariska Tiger Reserve, Bhangarh Fort, Alwar City Palace, Siliserh Lake.",
      famousSpot: "Sariska National Park",
    },
    "Banswara": {
      name: "Banswara",
      tagline: "City of a Hundred Islands",
      headquarters: "Banswara",
      knownFor: "Mahi Bajaj Sagar Dam, Tripura Sundari Temple, lush tribal heritage.",
      famousSpot: "Tripura Sundari Temple",
    },
    "Baran": {
      name: "Baran",
      tagline: "Crown of Hadoti Heritage",
      headquarters: "Baran",
      knownFor: "Shergarh Fort, Shahabad Fort, Sitabari fair, dense teak forests.",
      famousSpot: "Shergarh Fort",
    },
    "Barmer": {
      name: "Barmer",
      tagline: "Heart of Thar Desert Folk Lore",
      headquarters: "Barmer",
      knownFor: "Kiradu Temples (Khajuraho of Rajasthan), wood carving, Barmer embroidery.",
      famousSpot: "Kiradu Ancient Temples",
    },
    "Bharatpur": {
      name: "Bharatpur",
      tagline: "Eastern Gateway & Bird Sanctuary",
      headquarters: "Bharatpur",
      knownFor: "Keoladeo National Park (UNESCO bird haven), Lohagarh Fort, Deeg Water Palace.",
      famousSpot: "Keoladeo Ghana Bird Sanctuary",
    },
    "Bhilwara": {
      name: "Bhilwara",
      tagline: "Textile Capital & Phad Painting Hub",
      headquarters: "Bhilwara",
      knownFor: "Traditional Phad scroll painting, cloth weaving, Menal Waterfalls.",
      famousSpot: "Menal Ancient Temple & Falls",
    },
    "Bundi": {
      name: "Bundi",
      tagline: "City of Stepwells & Royal Frescoes",
      headquarters: "Bundi",
      knownFor: "Taragarh Fort, Garh Palace miniature paintings, Raniji ki Baori stepwell.",
      famousSpot: "Taragarh Fort & Raniji ki Baori",
    },
    "Chittorgarh": {
      name: "Chittorgarh",
      tagline: "Cradle of Rajput Courage & Sacrifice",
      headquarters: "Chittorgarh",
      knownFor: "Chittor Fort (largest fort in India), Vijay Stambha, Rani Padmini Palace.",
      famousSpot: "Chittor Fort (Vijay Stambha)",
    },
    "Churu": {
      name: "Churu",
      tagline: "Gateway to the Thar & Tal Chhapar",
      headquarters: "Churu",
      knownFor: "Tal Chhapar Blackbuck Sanctuary, grand frescoed Havelis of Shekhawati.",
      famousSpot: "Tal Chhapar Blackbuck Sanctuary",
    },
    "Dausa": {
      name: "Dausa",
      tagline: "Land of Ancient Stepwells",
      headquarters: "Dausa",
      knownFor: "Chand Baori (world's deepest stepwell at Abhaneri), Mehandipur Balaji Temple.",
      famousSpot: "Chand Baori Stepwell (Abhaneri)",
    },
    "Dholpur": {
      name: "Dholpur",
      tagline: "Land of Red Sandstone & Chambal Ravines",
      headquarters: "Dholpur",
      knownFor: "Dholpur Palace, Chambal River Safari, Machkund pilgrimage.",
      famousSpot: "National Chambal Sanctuary",
    },
    "Dungarpur": {
      name: "Dungarpur",
      tagline: "City of Hills & Royal Juna Mahal",
      headquarters: "Dungarpur",
      knownFor: "Juna Mahal, Gaib Sagar Lake, intricate stone architecture.",
      famousSpot: "Juna Mahal 7-Storey Palace",
    },
    "Ganganagar": {
      name: "Ganganagar",
      tagline: "Food Basket of Rajasthan",
      headquarters: "Sri Ganganagar",
      knownFor: "Ganga Canal, lush agricultural fields, kinnow orchards.",
      famousSpot: "Ganga Canal Heritage",
    },
    "Hanumangarh": {
      name: "Hanumangarh",
      tagline: "Indus Valley Soil & Bhatner Fort",
      headquarters: "Hanumangarh",
      knownFor: "Bhatner Ancient Fort, Kalibangan Indus Valley archaeological site.",
      famousSpot: "Kalibangan Harappan Site",
    },
    "Jalore": {
      name: "Jalore",
      tagline: "The Granite City & Golden Mount",
      headquarters: "Jalore",
      knownFor: "Jalore Fort, Sundha Mata Temple ropeway, granite industries.",
      famousSpot: "Sundha Mata Temple",
    },
    "Jhalawar": {
      name: "Jhalawar",
      tagline: "Land of Water Forts & Mandarins",
      headquarters: "Jhalawar",
      knownFor: "Gagron Fort (UNESCO water fort), Jhalrapatan Sun Temple, citrus orchards.",
      famousSpot: "Gagron Water Fort",
    },
    "Jhunjhunu": {
      name: "Jhunjhunu",
      tagline: "Open-Air Art Gallery of Shekhawati",
      headquarters: "Jhunjhunu",
      knownFor: "Frescoed havelis, Rani Sati Temple, Khetri copper hills.",
      famousSpot: "Mandawa & Shekhawati Havelis",
    },
    "Karauli": {
      name: "Karauli",
      tagline: "Devotional Capital of Kaila Devi",
      headquarters: "Karauli",
      knownFor: "Kaila Devi Temple, Madan Mohan Ji Temple, City Palace Karauli.",
      famousSpot: "Kaila Devi Sanctuary & Temple",
    },
    "Kota": {
      name: "Kota",
      tagline: "Educational Hub & Chambal Riverfront",
      headquarters: "Kota",
      knownFor: "Kota Doria sarees, Seven Wonders Park, Chambal Riverfront, Garh Palace.",
      famousSpot: "Chambal Riverfront & Kota Barrage",
    },
    "Nagaur": {
      name: "Nagaur",
      tagline: "Citadel of Sufi Saints & Cattle Fairs",
      headquarters: "Nagaur",
      knownFor: "Nagaur Fort (Ahhichatragarh), famous Nagaur Cattle Fair, Meera Bai birthplace.",
      famousSpot: "Ahhichatragarh Fort",
    },
    "Pali": {
      name: "Pali",
      tagline: "Sanctuary of Marble Jain Temples",
      headquarters: "Pali",
      knownFor: "Ranakpur Jain Temple (1444 carved marble pillars), Jawai leopard hills.",
      famousSpot: "Ranakpur Sun & Jain Temples",
    },
    "Pratapgarh": {
      name: "Pratapgarh",
      tagline: "Home of Thewa Gold Glass Art",
      headquarters: "Pratapgarh",
      knownFor: "GI-tagged Thewa jewelry craft, Sita Mata Wildlife Sanctuary.",
      famousSpot: "Sita Mata Sanctuary (Flying Squirrels)",
    },
    "Rajsamand": {
      name: "Rajsamand",
      tagline: "Royal Lake & Great Wall of India",
      headquarters: "Rajsamand",
      knownFor: "Kumbhalgarh Fort (second longest wall in the world), Shrinathji Nathdwara Temple.",
      famousSpot: "Kumbhalgarh Fort Great Wall",
    },
    "Sawai Madhopur": {
      name: "Sawai Madhopur",
      tagline: "The Tiger Capital of India",
      headquarters: "Sawai Madhopur",
      knownFor: "Ranthambore National Park, Ranthambore UNESCO Hill Fort, Trinetra Ganesha.",
      famousSpot: "Ranthambore Tiger Reserve",
    },
    "Sikar": {
      name: "Sikar",
      tagline: "Historic Shekhawati & Khatu Dham",
      headquarters: "Sikar",
      knownFor: "Khatu Shyam Ji Temple, Jeen Mata Temple, Laxmangarh Fort.",
      famousSpot: "Khatu Shyam Ji Dham",
    },
    "Sirohi": {
      name: "Sirohi",
      tagline: "Only Hill Station & Dilwara Marble",
      headquarters: "Sirohi",
      knownFor: "Mount Abu, Dilwara Jain Temples, Guru Shikhar (highest peak in Aravallis), Nakki Lake.",
      famousSpot: "Dilwara Jain Temples (Mount Abu)",
    },
    "Tonk": {
      name: "Tonk",
      tagline: "The Nawab City of Music & Libraries",
      headquarters: "Tonk",
      knownFor: "Sunehri Kothi (Golden Mansion), Arabic & Persian Research Institute, Bisalpur Dam.",
      famousSpot: "Sunehri Kothi",
    },
  },
  landmarks: [
    {
      id: "hawa-mahal",
      name: "Hawa Mahal (Palace of Winds)",
      district: "Jaipur",
      lat: 26.9239,
      lon: 75.8267,
      category: "monument",
      description: "Crown jewel of Rajput architecture with 953 honeycombed jharokha windows built in 1799 by Maharaja Sawai Pratap Singh.",
      image: "/images/rajasthan/amber_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Hawa Mahal (Palace of Winds).",
      gallery: [
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Front Elevation",
                caption: "Hawa Mahal (Palace of Winds) — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Hawa Mahal (Palace of Winds) — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Hawa Mahal (Palace of Winds) — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Hawa Mahal (Palace of Winds) — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "mehrangarh-fort",
      name: "Mehrangarh Fort",
      district: "Jodhpur",
      lat: 26.298,
      lon: 73.0189,
      category: "monument",
      description: "One of India's largest and most imposing hill citadels rising 400 feet above the Blue City of Jodhpur, founded in 1459 by Rao Jodha.",
      image: "/images/rajasthan/amber_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Mehrangarh Fort.",
      gallery: [
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Front Elevation",
                caption: "Mehrangarh Fort — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Mehrangarh Fort — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Mehrangarh Fort — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Mehrangarh Fort — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "city-palace-udaipur",
      name: "Udaipur City Palace",
      district: "Udaipur",
      lat: 24.5764,
      lon: 73.6835,
      category: "monument",
      description: "Flamboyant lakeside palace complex built over 400 years by the rulers of the Mewar dynasty on the eastern bank of Lake Pichola.",
      image: "/images/rajasthan/amber_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Udaipur City Palace.",
      gallery: [
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Front Elevation",
                caption: "Udaipur City Palace — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Udaipur City Palace — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Udaipur City Palace — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Udaipur City Palace — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "kumbhalgarh-fort",
      name: "Kumbhalgarh Fort & Great Wall",
      district: "Rajsamand",
      lat: 25.1528,
      lon: 73.5872,
      category: "monument",
      description: "Birthplace of Maharana Pratap boasting a 36-kilometer continuous perimeter wall, the second longest defensive wall in the world.",
      image: "/images/rajasthan/amber_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Kumbhalgarh Fort & Great Wall.",
      gallery: [
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Front Elevation",
                caption: "Kumbhalgarh Fort & Great Wall — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Kumbhalgarh Fort & Great Wall — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kumbhalgarh Fort & Great Wall — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kumbhalgarh Fort & Great Wall — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "ranthambore",
      name: "Ranthambore Tiger Reserve",
      district: "Sawai Madhopur",
      lat: 26.0173,
      lon: 76.5026,
      category: "nature",
      description: "Renowned royal Bengal tiger kingdom where apex predators roam freely amidst thousand-year-old fortresses, lakes, and banyan trees.",
      image: "/images/rajasthan/amber_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Ranthambore Tiger Reserve.",
      gallery: [
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Front Elevation",
                caption: "Ranthambore Tiger Reserve — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Ranthambore Tiger Reserve — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Ranthambore Tiger Reserve — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Ranthambore Tiger Reserve — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "pushkar-brahma",
      name: "Pushkar Holy Lake & Brahma Temple",
      district: "Ajmer",
      lat: 26.4897,
      lon: 74.5511,
      category: "spiritual",
      description: "One of the few temples on Earth dedicated to Lord Brahma, situated beside the sacred Pushkar Sarovar with 52 bathing ghats.",
      image: "/images/rajasthan/amber_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Pushkar Holy Lake & Brahma Temple.",
      gallery: [
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Front Elevation",
                caption: "Pushkar Holy Lake & Brahma Temple — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Pushkar Holy Lake & Brahma Temple — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Pushkar Holy Lake & Brahma Temple — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/rajasthan/amber_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Pushkar Holy Lake & Brahma Temple — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
  ],
  cuisines: [
    {
      name: "Dal Baati Churma",
      hindiName: "दाल बाटी चूरमा",
      tag: "Culinary Soul of Rajasthan",
      description:
        "The quintessential royal Rajasthani dish consisting of crunchy baked wheat balls (baati) soaked generously in pure desi ghee, served with spicy mixed lentils (panchmel dal) and sweet crumbly powdered wheat dessert (churma).",
      image: "/images/rajasthan/dal_baati_churma.jpg",
      origin: "Mewar Kingdom",
      ingredients: ["Wheat flour", "Desi Ghee", "Panchmel Lentils", "Jaggery", "Green Chillies"],
    },
    {
      name: "Ker Sangri",
      hindiName: "केर सांगरी",
      tag: "Arid Desert Superfood",
      description:
        "A legendary desert delicacy born out of drought ingenuity, blending sun-dried desert caper berries (ker) with slender bean pods of the Khejri tree (sangri), slow-simmered in mustard oil, amchur, and aromatic spices.",
      image: "/images/rajasthan/ker_sangri.jpg",
      origin: "Thar Desert Oasis",
      ingredients: ["Ker berries", "Sangri beans", "Mustard oil", "Dry mango powder", "Whole red chillies"],
    },
    {
      name: "Laal Maas",
      hindiName: "लाल मांस",
      tag: "Royal Rajput Hunting Banquet",
      description:
        "An intense, deep red smoked royal curry cooked with tender meat, hot Mathania red chillies, garlic paste, and slow charcoal smoking (dungar technique) that fueled Rajput warriors across centuries.",
      image: "/images/rajasthan/laal_maas.jpg",
      origin: "Mewar Royal Court",
      ingredients: ["Mathania red chillies", "Garlic", "Desi ghee", "Curd", "Cloves & Cardamom"],
    },
    {
      name: "Ghevar",
      hindiName: "घेवर",
      tag: "Monsoon & Teej Festive Sweet",
      description:
        "A traditional disc-shaped honeycomb sweet made of refined flour, fried to crisp lattice perfection in desi ghee, soaked in saffron syrup, and garnished with silver foil (varak), rabdi, and crushed pistachios.",
      image: "/images/rajasthan/ghevar.jpg",
      origin: "Jaipur Royalty",
      ingredients: ["Desi ghee", "Milk rabdi", "Saffron", "Cardamom", "Pistachios"],
    },
    {
      name: "Pyaaz Kachori",
      hindiName: "प्याज़ कचौरी",
      tag: "Street Food Icon of Jodhpur",
      description:
        "Flaky, golden deep-fried pastry pocket bursting with a fiery, aromatic filling of caramelised onions, crushed coriander seeds, fennel, and garam masala, traditionally relished with sweet tamarind chutney.",
      image: "/images/rajasthan/pyaaz_kachori.jpg",
      origin: "Jodhpur",
      ingredients: ["Maida", "Caramelized onions", "Fennel seeds", "Coriander seeds", "Garam masala"],
    },
  ],
  traditions: [
    {
      title: "Ghoomar Folk Dance",
      category: "Traditional Folk Dance",
      period: "Bhil Tribe & Rajput Royalty",
      description:
        "Recognized worldwide for its graceful pirouettes, Ghoomar is performed by women in swirling, mirror-embroidered ghagras who veil their faces and rotate in circular cadences to the beat of dholak and folk ballads.",
      image: "/images/rajasthan/ghoomar_dance.jpg",
      highlights: ["Swirling ghagra skirts", "Veiled face choreography", "Royal celebration ritual"],
    },
    {
      title: "Kalbelia Gypsy Dance & Song",
      category: "UNESCO Intangible Cultural Heritage",
      period: "Ancient Nomadic Snake Charmers",
      description:
        "Inscribed on UNESCO's Intangible Cultural Heritage list, the hypnotic snake dance of the Kalbelia nomadic tribe mimics the serpentine movements of the cobra with fluid acrobatic flexibility and pulsating Poongi pipe rhythms.",
      image: "/images/rajasthan/kalbelia_dance.jpg",
      highlights: ["UNESCO Heritage inscribed", "Serpentine acrobatic movement", "Poongi and Khanjari instruments"],
    },
    {
      title: "Kathputli String Puppetry",
      category: "Ancient Narrative Folk Theatre",
      period: "Over 1,000 Years Old",
      description:
        "Carved out of single blocks of mango wood and dressed in glittering silk garments, Kathputli puppets recount heroic ballads of Amar Singh Rathore and legendary Rajput lore through whistling reeds and master string dexterity.",
      image: "/images/rajasthan/kathputli_puppets.jpg",
      highlights: ["Wood-carved string marionettes", "Heroic folk ballad storytelling", "Distinctive reed whistle acoustic"],
    },
  ],
  attires: [
    {
      name: "Bandhani & Leheriya Ghagra Choli",
      type: "Women's Festive Attire",
      description:
        "Vibrant hand-tied tie-dye fabrics featuring wave ripples (Leheriya) and dotted diamond knots (Bandhani) dyed in brilliant saffron, pink, and peacock greens, worn with mirror-worked odhnis.",
      image: "/images/rajasthan/bandhani_leheriya.jpg",
      specialty: "Centuries-old tie-and-dye resist technique practiced by the Khatri community.",
    },
    {
      name: "Rajasthani Pagri & Safah",
      type: "Men's Royal Turban",
      description:
        "A monumental 8-to-15 meter single length of vibrantly hand-twisted fabric wrapped with precision; the style, angle, and pattern of a Rajasthani turban traditionally identifies a person's clan, region, and social occasion.",
      image: "/images/rajasthan/rajasthani_pagri.jpg",
      specialty: "Protects against desert sun while serving as a timeless badge of honor and dignity.",
    },
    {
      name: "Rajput Poshak",
      type: "Royal Heritage Dress",
      description:
        "The ceremonial dress of Rajput women comprising four parts (Kanchali, Kurti, Ghagra, and Odhani) intricately hand-embroidered with pure zari, gota patti gold ribbons, and zardozi needlework.",
      image: "/images/rajasthan/rajput_poshak.jpg",
      specialty: "Royal court attire preserved through generations of Rajput families.",
    },
  ],
  monuments: [
    {
      name: "Hawa Mahal (Palace of Winds)",
      location: "Jaipur",
      era: "1799 CE (Maharaja Sawai Pratap Singh)",
      unesco: true,
      description:
        "A five-story pyramidal facade of pink and red sandstone with 953 delicately carved jharokhas that allowed royal women to observe street festivals without being seen from outside, while harnessing natural airflow cooling.",
      image: "/images/rajasthan/hawa_mahal.jpg",
      significance: "Jaipur's most recognizable architectural icon and masterpiece of Rajput airflow design.",
    },
    {
      name: "Mehrangarh Fort",
      location: "Jodhpur",
      era: "1459 CE (Rao Jodha)",
      unesco: false,
      description:
        "Towering 410 feet above Jodhpur on a perpendicular cliff, this massive citadel features burnished red sandstone walls up to 120 feet high, enclosing palaces renowned for intricate stone latticework.",
      image: "/images/rajasthan/mehrangarh_fort.jpg",
      significance: "Described by Rudyard Kipling as 'a palace that might have been built by Titans and colored by the morning sun'.",
    },
    {
      name: "Amber Palace & Fort",
      location: "Jaipur",
      era: "1592 CE (Raja Man Singh I)",
      unesco: true,
      description:
        "Perched atop Cheel ka Teela in the Aravalli hills, Amber blends Hindu and Mughal styles with the legendary Sheesh Mahal (Mirror Palace) where a single candle flame illuminates the entire chamber through convex mirrors.",
      image: "/images/rajasthan/amber_fort.jpg",
      significance: "UNESCO World Heritage Hill Fort of Rajasthan.",
    },
    {
      name: "Udaipur City Palace",
      location: "Udaipur",
      era: "1559 CE (Maharana Udai Singh II)",
      unesco: false,
      description:
        "The largest palace complex in Rajasthan, built in granite and marble along the edge of Lake Pichola with towering towers, cupolas, arches, and hanging gardens with panoramic views of the water.",
      image: "/images/rajasthan/city_palace_udaipur.jpg",
      significance: "Seat of the world's oldest surviving royal dynasty (Mewar).",
    },
  ],
  languages: [
    {
      name: "Marwari",
      script: "Devanagari / Historical Mahajani",
      speakers: "20+ Million (Rajasthan & Diasporas)",
      greeting: "Khamma Ghani (खम्मा घणी)",
      meaning: "May you be blessed with immense grace and peace",
      description:
        "The prominent Rajasthani language historically spoken across the ancient kingdom of Marwar, enriched by heroic battle poetry, devotional bhajans, and trade vernacular.",
    },
    {
      name: "Mewari",
      script: "Devanagari",
      speakers: "5+ Million (Udaipur, Rajsamand, Chittorgarh)",
      greeting: "Ram Ram Sa (राम राम सा)",
      meaning: "Supreme divine greetings to you",
      description:
        "The language of Maharana Pratap and the Mewar court, celebrated for its fierce chivalric literature and heartfelt devotion to Lord Shrinathji and Eklingji Shiva.",
    },
    {
      name: "Dhundhari",
      script: "Devanagari",
      speakers: "9+ Million (Jaipur, Dausa, Tonk)",
      greeting: "Jai Jinendra / Jai Shri Krishna",
      meaning: "Honor to the enlightened soul",
      description:
        "The sweet dialect of northeastern Rajasthan centered around Jaipur and the Dhundh river basin, known for folk theatre and classical music compositions.",
    },
  ],
  luminaries: [
    {
      name: "Maharana Pratap",
      image: "/images/luminaries/maharana_pratap.jpg",
      era: "1540 – 1597 CE",
      title: "Hero of Haldighati & Defender of Rajput Freedom",
      contribution:
        "The legendary 13th king of Mewar who defied Mughal hegemony, famously fighting the 1576 Battle of Haldighati with his faithful steed Chetak and surviving in the Aravalli forests rather than surrendering sovereign honor.",
    },
    {
      name: "Mirabai",
      image: "/images/luminaries/mirabai.jpg",
      era: "1498 – 1546 CE",
      title: "Mystic Saint-Poetess of Krishna Bhakti",
      contribution:
        "Born a Rajput princess in Merta, Mirabai renounced palace luxury and patriarchal norms to dedicate her entire life to Lord Krishna, composing immortal bhajans that continue to resonate across the subcontinent.",
    },
    {
      name: "Prithviraj Chauhan",
      image: "/images/luminaries/prithviraj_chauhan.jpg",
      era: "1166 – 1192 CE",
      title: "The Last Hindu Emperor of Delhi & Ajmer",
      contribution:
        "Chauhan king whose extraordinary archery skill, courage, and legendary resistance at the Battles of Tarain were immortalized in Chand Bardai's epic poem Prithviraj Raso.",
    },
  ],
}
