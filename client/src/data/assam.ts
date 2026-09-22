import type { StateData } from "../types/state"

export const assamData: StateData = {
  id: "assam",
  name: "Assam",
  hindiName: "असम",
  capital: "Dispur (Guwahati)",
  tagline: "The Gateway to Northeast & Land of the Red River and Blue Hills",
  overview:
    "Cradled by the mighty Brahmaputra River and surrounded by mist-shrouded green hills, Assam is a paradise of biodiversity, ancient Tantric mysticism, world-renowned single-estate teas, and golden Muga silk. Home to the great Indian one-horned rhinoceros in Kaziranga National Park and the venerated hilltop Shakti Peetha of Kamakhya, Assam is the heart and soul of Northeast India.",
  ancientNames: ["Pragjyotisha", "Kamarupa", "Ahom Kingdom", "Asom"],
  keyStats: [
    { label: "Districts", value: "35" },
    { label: "Capital", value: "Dispur (Guwahati)" },
    { label: "Mighty Lifeline", value: "Brahmaputra River (Luit / Borluit)" },
    { label: "UNESCO Sanctuary", value: "Kaziranga & Manas National Parks" },
    { label: "Riverine Wonder", value: "Majuli (World's Largest River Island)" },
    { label: "Golden Textile", value: "Muga Silk (Unique to Assam in the World)" },
  ],
  quote: {
    text: "Where the red waters of Brahmaputra roar with primeval vigor, Assam whispers the timeless songs of the dhol, pepa, and golden threads of Muga silk.",
    author: "Soul of Kamarupa",
  },
  districts: {
    "Kamrup Metropolitan": {
      name: "Kamrup Metropolitan",
      tagline: "Gateway of the Northeast & Seat of Kamakhya",
      headquarters: "Guwahati",
      knownFor: "Kamakhya Temple on Nilachal hill, Umananda peacock island, Srimanta Sankaradeva Kalakshetra, Brahmaputra river ropeway.",
      famousSpot: "Kamakhya Temple & Umananda Island",
    },
    "Golaghat": {
      name: "Golaghat",
      tagline: "Heartland of the One-Horned Rhinoceros & Tea Estates",
      headquarters: "Golaghat",
      knownFor: "Kaziranga National Park (UNESCO site), historic Numaligarh refinery, sprawling lush green tea plantations.",
      famousSpot: "Kaziranga National Park",
    },
    "Sivasagar": {
      name: "Sivasagar",
      tagline: "Historical Capital of the Ahom Kingdom",
      headquarters: "Sivasagar",
      knownFor: "Rang Ghar (Asia's oldest amphitheater), Talatal Ghar multi-level royal palace, Kareng Ghar, Shiva Dol.",
      famousSpot: "Rang Ghar & Talatal Ghar",
    },
    "Majuli": {
      name: "Majuli",
      tagline: "World's Largest Inhabited River Island & Satra Culture",
      headquarters: "Garamur",
      knownFor: "Vaishnavite Satras (monasteries), traditional bamboo mask-making, migratory bird watching on the Brahmaputra.",
      famousSpot: "Auniati Satra & Kamalabari Satra",
    },
    "Jorhat": {
      name: "Jorhat",
      tagline: "Tea Capital of the World & Cultural Capital",
      headquarters: "Jorhat",
      knownFor: "Tocklai Tea Research Institute (oldest tea research station), Gibbon Wildlife Sanctuary, Majuli river ferry point.",
      famousSpot: "Tocklai Tea Gardens & Gibbon Sanctuary",
    },
    "Dibrugarh": {
      name: "Dibrugarh",
      tagline: "Tea City of India & River Cruise Hub",
      headquarters: "Dibrugarh",
      knownFor: "Bogibeel Bridge (India's longest rail-cum-road bridge), sweeping tea gardens, Brahmaputra river excursions.",
      famousSpot: "Bogibeel Bridge & Tea Estates",
    },
    "Barpeta": {
      name: "Barpeta",
      tagline: "Land of Satras, Bell Metal & Firecrackers",
      headquarters: "Barpeta",
      knownFor: "Barpeta Satra, Manas National Park gateway, traditional Sarthebari bell-metal craft.",
      famousSpot: "Barpeta Satra & Manas Gateway",
    },
    "Cachar": {
      name: "Cachar",
      tagline: "Heart of Barak Valley & Khaspur Ruined Kingdom",
      headquarters: "Silchar",
      knownFor: "Khaspur Dimasa royal palace ruins, lush tea hills of Barak Valley, historic Bhubaneshwar temple.",
      famousSpot: "Khaspur Palace Ruins & Silchar",
    },
  },
  landmarks: [
    {
      id: "kamakhya-temple",
      name: "Maa Kamakhya Devalaya",
      district: "Kamrup Metropolitan",
      lat: 26.1664,
      lon: 91.7056,
      category: "spiritual",
      description: "One of the oldest and most revered of the 51 Shakti Peethas in India, situated atop Nilachal Hill in Guwahati, venerated as the sanctum of divine feminine creative power and famous for the annual Ambubachi Mela.",
      image: "/images/assam/assamese_gamosa.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Maa Kamakhya Devalaya.",
      gallery: [
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Front Elevation",
                caption: "Maa Kamakhya Devalaya — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Aerial Drone View",
                caption: "Maa Kamakhya Devalaya — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Maa Kamakhya Devalaya — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Maa Kamakhya Devalaya — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "kaziranga-park",
      name: "Kaziranga National Park",
      district: "Golaghat / Nagaon",
      lat: 26.5775,
      lon: 93.1711,
      category: "nature",
      description: "UNESCO World Heritage Site hosting two-thirds of the world's great one-horned rhinoceros population, alongside significant populations of Bengal tigers, wild water buffalo, Asian elephants, and diverse swamp deer in the Brahmaputra floodplains.",
      image: "/images/assam/assamese_gamosa.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Kaziranga National Park.",
      gallery: [
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Front Elevation",
                caption: "Kaziranga National Park — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Aerial Drone View",
                caption: "Kaziranga National Park — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kaziranga National Park — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kaziranga National Park — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "rang-ghar",
      name: "Rang Ghar Royal Pavilion",
      district: "Sivasagar",
      lat: 26.9639,
      lon: 94.6289,
      category: "monument",
      description: "Often considered Asia's oldest surviving royal sports pavilion, built in 1744–1750 CE by Ahom Swargadeo Pramatta Singha, with an inverted boat-shaped roof designed for royalty to observe buffalo fights and martial sports during Rongali Bihu.",
      image: "/images/assam/assamese_gamosa.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Rang Ghar Royal Pavilion.",
      gallery: [
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Front Elevation",
                caption: "Rang Ghar Royal Pavilion — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Aerial Drone View",
                caption: "Rang Ghar Royal Pavilion — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Rang Ghar Royal Pavilion — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Rang Ghar Royal Pavilion — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "talatal-ghar",
      name: "Talatal Ghar Subterranean Citadel",
      district: "Sivasagar",
      lat: 26.9744,
      lon: 94.6331,
      category: "monument",
      description: "A monumental seven-story 18th-century brick palace built by the Ahom kings, featuring three stories constructed below ground level with secret subterranean escape tunnels leading to the Dikhow River and Gargaon.",
      image: "/images/assam/assamese_gamosa.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Talatal Ghar Subterranean Citadel.",
      gallery: [
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Front Elevation",
                caption: "Talatal Ghar Subterranean Citadel — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Aerial Drone View",
                caption: "Talatal Ghar Subterranean Citadel — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Talatal Ghar Subterranean Citadel — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Talatal Ghar Subterranean Citadel — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "majuli-island",
      name: "Majuli River Island",
      district: "Majuli",
      lat: 26.9535,
      lon: 94.2185,
      category: "nature",
      description: "A serene, mystical river island formed by the Brahmaputra and Kherkutia Xuti channels, celebrated as the world epicenter of Neo-Vaishnavite culture, traditional mask crafts, and classical Sattriya dance monasteries.",
      image: "/images/assam/assamese_gamosa.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Majuli River Island.",
      gallery: [
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Front Elevation",
                caption: "Majuli River Island — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Aerial Drone View",
                caption: "Majuli River Island — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Majuli River Island — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Majuli River Island — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "bogibeel-bridge",
      name: "Bogibeel Brahmaputra Bridge",
      district: "Dibrugarh",
      lat: 27.4005,
      lon: 94.7578,
      category: "monument",
      description: "India's longest rail-cum-road bridge spanning 4.94 kilometers across the turbulent waters of the Brahmaputra River, connecting Assam with Arunachal Pradesh, engineered to withstand extreme seismic activity.",
      image: "/images/assam/assamese_gamosa.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Bogibeel Brahmaputra Bridge.",
      gallery: [
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Front Elevation",
                caption: "Bogibeel Brahmaputra Bridge — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Aerial Drone View",
                caption: "Bogibeel Brahmaputra Bridge — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Bogibeel Brahmaputra Bridge — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/assam/assamese_gamosa.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Bogibeel Brahmaputra Bridge — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
  ],
  cuisines: [
    {
      name: "Khaar with Mati Mah",
      hindiName: "खार और दाल",
      tag: "The Foundational Soul of Assamese Dining",
      description:
        "Unique alkaline dish prepared using water filtered through the ashes of sun-dried sun-burnt banana peels (Kol Khaar), cooked with black gram lentils and raw papaya, traditionally consumed at the very beginning of an Assamese meal.",
      origin: "Traditional Assamese Households",
      image: "/images/assam/khar_dal.jpg",
      dietary: "veg",
    },
    {
      name: "Masor Tenga",
      hindiName: "मासोर टेंगा",
      tag: "Refreshing Tangy Fish Curry of the Brahmaputra",
      description:
        "Light, golden fish curry prepared using fresh freshwater carp cooked in a delicate broth soured naturally with tomatoes, elephant apple (Ou Tenga), or lemon (Kazi Nemu), tempered with fenugreek and mustard seeds.",
      origin: "Riverside Delta Villages of Assam",
      image: "/images/assam/masor_tenga.jpg",
      dietary: "non-veg",
    },
    {
      name: "Til Pitha & Ghila Pitha",
      hindiName: "तिल पीठा",
      tag: "Crispy Sesame Delicacy of Magh Bihu",
      description:
        "Cylindrical rolls of sticky bora rice flour stuffed with a fragrant filling of roasted black sesame seeds and dark sugarcane jaggery, baked gently over a heated iron griddle without oil.",
      origin: "Festive Bihu Culinary Heritage",
      image: "/images/assam/til_pitha.jpg",
      dietary: "veg",
    },
    {
      name: "Assam Orthodox & CTC Tea",
      hindiName: "असम चाय",
      tag: "World's Most Celebrated Malty Brew",
      description:
        "Full-bodied, rich amber tea grown in the humid Brahmaputra valley lowlands, world-renowned for its brisk, malty flavor, bright color, and invigorating aroma enjoyed black or with boiled milk.",
      origin: "Upper Assam (Dibrugarh & Jorhat)",
      image: "/images/assam/assam_tea.jpg",
      dietary: "veg",
    },
    {
      name: "Assamese Thali with Kazi Nemu",
      hindiName: "असमिया पारंपरिक थाली",
      tag: "Complete Heritage Platter with Local Herbs",
      description:
        "Steamed Joha aromatic rice served with Pitika (mashed potatoes/eggplant with mustard oil and raw chilies), boiled greens, and a slice of GI-tagged elongated, highly fragrant Kazi Nemu lemon.",
      origin: "Statewide Cultural Tradition",
      image: "/images/assam/kazi_nemu_platter.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Bihu Folk Dance & Music",
      type: "dance",
      description:
        "The exuberant, pulsating folk dance of Assam performed during Rongali Bihu (spring), characterized by rapid hand movements, rhythmic hip swaying, and energetic footwork accompanied by the Dhol (drum), Pepa (buffalo horn flute), and Gogona (bamboo jaw harp).",
      significance:
        "Celebration of youthful vitality, the arrival of spring, and agrarian fertility across the Brahmaputra valley.",
      image: "/images/assam/bihu_dance.jpg",
    },
    {
      name: "Sattriya Classical Dance",
      type: "dance",
      description:
        "One of India's eight classical dance forms originated in the 15th century by great saint-reformer Mahapurush Srimanta Sankaradeva as an accompaniment to Ankiya Naat (one-act plays) in the monastic Satras of Majuli.",
      significance:
        "Sacred devotional art medium dedicated to Lord Krishna blending refined classical grammar with spiritual Bhakti.",
      image: "/images/assam/sattriya_dance.jpg",
    },
    {
      name: "Majuli Traditional Mask Making",
      type: "art",
      description:
        "Centuries-old craft practiced at Samaguri Satra in Majuli, where lightweight theatrical masks depicting gods, demons, and animals from epics are sculpted using bamboo armatures, clay from the riverbank, and natural organic pigments.",
      significance:
        "UNESCO-recognized living folk craft integral to the living Vaishnavite theater tradition of Assam.",
      image: "/images/assam/majuli_mask_making.jpg",
    },
  ],
  attires: [
    {
      name: "Mekhela Sador (Traditional Two-Piece)",
      gender: "women",
      fabric: "Pure Muga Silk or Paat Silk with Woven Motifs",
      description:
        "The graceful two-piece traditional attire of Assamese women, consisting of the cylindrical lower drape (Mekhela) folded into pleats and the upper drape (Sador) wrapped elegantly around the body, adorned with traditional Kingkhap and floral motifs.",
      occasions: "Bihu festivals, weddings, religious pujas, and official state events.",
      image: "/images/assam/mekhela_chador.jpg",
    },
    {
      name: "Muga Golden Silk",
      gender: "unisex",
      fabric: "Endemic Antheraea Assamensis Wild Silk",
      description:
        "Rare wild silk produced exclusively in Assam from silkworms feeding on Som and Soalu leaves, prized for its natural shimmering golden luster that increases in shine with every wash and lasts for over a century.",
      occasions: "Royal garments, wedding wear, and family heirlooms.",
      image: "/images/assam/muga_silk_saree.jpg",
    },
    {
      name: "Gamosa (Symbol of Love & Respect)",
      gender: "unisex",
      fabric: "White Woven Cotton with Red Floral Borders",
      description:
        "A rectangular white handwoven cotton cloth with intricate red woven borders on three sides and red traditional motifs on the fourth, offered as an emblem of highest respect, love, and cultural identity.",
      occasions: "Honoring guests, Bihu elders' blessings (Bihuwan), and temple rituals.",
      image: "/images/assam/assamese_gamosa.jpg",
    },
  ],
  monuments: [
    {
      name: "Maa Kamakhya Temple",
      location: "Nilachal Hill, Guwahati",
      era: "8th – 17th Century CE (Koch Dynasty Reconstruction)",
      unesco: false,
      description:
        "A monumental bee-hive shaped stone shikara temple complex rising above the Brahmaputra, housing the underground natural spring sanctum (garbhagriha) representing the sacred yoni of Goddess Sati.",
      image: "/images/assam/kamakhya_temple.jpg",
      significance: "Supreme tantric Shakti Peetha and spiritual landmark of Eastern India.",
    },
    {
      name: "Kaziranga National Park",
      location: "Golaghat & Nagaon",
      era: "Established 1905 CE (National Park 1974)",
      unesco: true,
      description:
        "Sprawling floodplain wetland wilderness stretching across 430 square kilometers along the southern bank of the Brahmaputra, universally celebrated as the greatest wildlife conservation success story in Asia.",
      image: "/images/assam/kaziranga_rhino.jpg",
      significance: "Global stronghold of the endangered Greater One-Horned Rhinoceros.",
    },
    {
      name: "Rang Ghar",
      location: "Sivasagar",
      era: "1744 – 1750 CE (Ahom Swargadeo Pramatta Singha)",
      unesco: false,
      description:
        "A two-storied red brick sports arena whose roof is shaped like an inverted Ahom royal longboat, decorated with terracotta tiles and animal representations, where Ahom royals gathered to celebrate Bihu sports.",
      image: "/images/assam/rang_ghar.jpg",
      significance: "One of the oldest surviving royal sports amphitheaters in all of Asia.",
    },
    {
      name: "Talatal Ghar",
      location: "Sivasagar",
      era: "1698 – 1769 CE (Ahom Dynasty)",
      unesco: false,
      description:
        "Intriguing fortified royal palace constructed with traditional mortar made from duck eggs and sticky bora rice, housing ammunition stores, secret subterranean tunnels, and royal living quarters.",
      image: "/images/assam/talatal_ghar.jpg",
      significance: "Peak military and structural achievement of the 600-year Ahom Kingdom.",
    },
  ],
  languages: [
    {
      name: "Assamese (অসমীয়া)",
      script: "Eastern Nagari / Assamese Script",
      speakers: "16+ Million",
      greeting: "Nomoskar (নমস্কাৰ)",
      meaning: "Respectful greetings to you",
      description:
        "The official language of Assam possessing a rich literary antiquity from the early Charyapada hymns and Sankaradeva's devotional Borgeets to modern romantic literature of Lakshminath Bezbaroa.",
    },
    {
      name: "Bodo (बर')",
      script: "Devanagari Script",
      speakers: "1.5+ Million (Bodoland Territorial Region)",
      greeting: "Khulumkha (खुलुमबाय)",
      meaning: "I greet you with folded hands",
      description:
        "Tibeto-Burman language of the indigenous Bodo people, officially recognized in the Eighth Schedule of the Indian Constitution, celebrated for its rich folklore and poetry.",
    },
    {
      name: "Sylheti / Bengali",
      script: "Bengali-Assamese Script",
      speakers: "4+ Million (Barak Valley)",
      greeting: "Nomoshkar / Assalamu Alaikum",
      meaning: "Peaceful and respectful greetings",
      description:
        "Spoken in the southern Barak valley districts of Cachar, Karimganj, and Hailakandi, carrying vibrant folk music and riverine poetry.",
    },
  ],
  luminaries: [
    {
      name: "Mahapurush Srimanta Sankaradeva",
      image: "/images/luminaries/mahapurush_srimanta_sankaradeva.jpg",
      era: "1449 – 1568 CE",
      title: "Polymath Saint-Reformer & Father of Assamese Culture",
      contribution:
        "Visionary Vaishnavite saint who united the diverse tribes of Assam, founded the egalitarian Satra monastery system, created classical Sattriya dance, authored the Borgeet devotional songs, and invented the Ankiya Naat theater.",
    },
    {
      name: "Lachit Borphukan",
      image: "/images/luminaries/lachit_borphukan.jpg",
      era: "1622 – 1672 CE",
      title: "Immortal General of the Battle of Saraighat",
      contribution:
        "Heroic Ahom military commander who defeated the massive invading Mughal army on the Brahmaputra River in the naval Battle of Saraighat in 1671 through brilliant guerrilla naval tactics, famously stating 'My uncle is not greater than my motherland.'",
    },
    {
      name: "Dr. Bhupen Hazarika",
      image: "/images/luminaries/dr_bhupen_hazarika.jpg",
      era: "1926 – 2011 CE",
      title: "Bard of the Brahmaputra & Bharat Ratna",
      contribution:
        "Legendary musician, poet, filmmaker, and humanist whose soulful, resonant baritone songs carried the pain, pride, and universal brotherhood of Assam and the Northeast to the world stage.",
    },
  ],
}
