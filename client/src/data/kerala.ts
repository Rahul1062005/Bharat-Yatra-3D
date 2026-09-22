import type { StateData } from "../types/state"

export const keralaData: StateData = {
  id: "kerala",
  name: "Kerala",
  hindiName: "केरल",
  capital: "Thiruvananthapuram (Trivandrum)",
  tagline: "God's Own Country, Malabar Coast & Backwater Eden",
  overview:
    "Sandwiched between the Arabian Sea and the rainforest-cloaked Western Ghats, Kerala is celebrated globally as 'God's Own Country'. Famous for its labyrinthine emerald backwaters, spice-laden hills, Ayurvedic healing heritage, 100% literacy rate, and captivating classical arts like Kathakali and Theyyam.",
  ancientNames: ["Chera Kingdom", "Malabar", "Keralaputra", "Travancore"],
  keyStats: [
    { label: "Districts", value: "14" },
    { label: "Capital", value: "Thiruvananthapuram" },
    { label: "Lifeline River", value: "Periyar & Bharathapuzha" },
    { label: "Literacy Rate", value: "96.2% (India's Highest)" },
    { label: "Ayurveda Heritage", value: "Global Healing Hub" },
    { label: "Coastline", value: "590 km Malabar Coast" },
  ],
  quote: {
    text: "Where the backwaters mirror the sky, where the spices fragrance the ocean wind, and every rhythm of the chenda drum honors divinity.",
    author: "Malabar Heritage Verse",
  },
  districts: {
    "Thiruvananthapuram": {
      name: "Thiruvananthapuram",
      tagline: "The City of Lord Anantha & State Capital",
      headquarters: "Thiruvananthapuram",
      knownFor: "Sree Padmanabhaswamy Temple, Kovalam Beach, Napier Museum, Ponmudi hill station.",
      famousSpot: "Sree Padmanabhaswamy Temple & Kovalam",
    },
    "Ernakulam": {
      name: "Ernakulam",
      tagline: "Commercial Capital & Historic Fort Kochi",
      headquarters: "Kakkanad (Kochi)",
      knownFor: "Fort Kochi, Chinese Fishing Nets, Mattancherry Dutch Palace, marine drive waterfront.",
      famousSpot: "Fort Kochi & Chinese Fishing Nets",
    },
    "Alappuzha": {
      name: "Alappuzha",
      tagline: "Venice of the East & Houseboat Backwaters",
      headquarters: "Alappuzha",
      knownFor: "Vembanad Lake houseboats, Nehru Trophy Boat Race, Punnamada lake, coir weaving.",
      famousSpot: "Vembanad Backwaters & Houseboats",
    },
    "Idukki": {
      name: "Idukki",
      tagline: "Spice Garden & Mountain Arch Dam",
      headquarters: "Painavu",
      knownFor: "Munnar tea plantations, Idukki Arch Dam, Eravikulam National Park (Nilgiri Tahr).",
      famousSpot: "Munnar Tea Hills & Eravikulam",
    },
    "Kozhikode": {
      name: "Kozhikode",
      tagline: "City of Spices, Truth & Malabar Biryani",
      headquarters: "Kozhikode",
      knownFor: "Kappad beach (Vasco da Gama landing 1498), Malabar Halwa, Sweet Meat Street (S.M. Street).",
      famousSpot: "S.M. Street & Kappad Historic Beach",
    },
    "Thrissur": {
      name: "Thrissur",
      tagline: "Cultural Capital & Spectacular Thrissur Pooram",
      headquarters: "Thrissur",
      knownFor: "Vadakkumnathan Temple, Thrissur Pooram elephant pageant, Kerala Kalamandalam.",
      famousSpot: "Vadakkumnathan Temple & Pooram Grounds",
    },
    "Wayanad": {
      name: "Wayanad",
      tagline: "Land of Misty Peaks, Caves & Waterfalls",
      headquarters: "Kalpetta",
      knownFor: "Edakkal Caves (Neolithic petroglyphs), Chembra Peak, Banasura Sagar Dam, coffee estates.",
      famousSpot: "Edakkal Ancient Caves & Chembra",
    },
    "Kottayam": {
      name: "Kottayam",
      tagline: "Land of Letters, Latex & Lakes",
      headquarters: "Kottayam",
      knownFor: "Kumarakom bird sanctuary, rubber plantations, Syrian Christian heritage churches.",
      famousSpot: "Kumarakom Bird Sanctuary",
    },
    "Kannur": {
      name: "Kannur",
      tagline: "Land of Theyyam, Looms & Lore",
      headquarters: "Kannur",
      knownFor: "Theyyam ritual dances, Muzhappilangad drive-in beach, handloom textiles, St. Angelo Fort.",
      famousSpot: "Muzhappilangad Drive-in Beach & Theyyams",
    },
    "Kollam": {
      name: "Kollam",
      tagline: "Cashew Capital & Ashtamudi Lake Gateway",
      headquarters: "Kollam",
      knownFor: "Ashtamudi Lake (8-armed backwater lake), Munroe Island, cashew export, Tangasseri lighthouse.",
      famousSpot: "Ashtamudi Lake & Munroe Island",
    },
    "Palakkad": {
      name: "Palakkad",
      tagline: "Granary of Kerala & Silent Valley",
      headquarters: "Palakkad",
      knownFor: "Palakkad Gap, Silent Valley National Park, Tipu Sultan Fort, paddy fields.",
      famousSpot: "Silent Valley National Park & Fort",
    },
    "Malappuram": {
      name: "Malappuram",
      tagline: "Cradle of Mappila Songs & Football Passion",
      headquarters: "Malappuram",
      knownFor: "Kottakkal Arya Vaidya Sala (world Ayurveda center), Teak Museum Nilambur, Thirunavaya.",
      famousSpot: "Kottakkal Arya Vaidya Sala & Nilambur",
    },
    "Pathanamthitta": {
      name: "Pathanamthitta",
      tagline: "Spiritual Capital & Pilgrim Forest Hills",
      headquarters: "Pathanamthitta",
      knownFor: "Sabarimala Temple pilgrimage, Gavi ecotourism forests, Aranmula metal mirror (Kannadi).",
      famousSpot: "Sabarimala Ayyappa Shrine & Aranmula",
    },
    "Kasaragod": {
      name: "Kasaragod",
      tagline: "Land of Seven Languages & Coastal Citadels",
      headquarters: "Kasaragod",
      knownFor: "Bekal Fort (coastal keyhole fort), Ananthapura Lake Temple, Chandragiri Fort.",
      famousSpot: "Bekal Fort & Beach",
    },
  },
  landmarks: [
    {
      id: "padmanabhaswamy-temple",
      name: "Sree Padmanabhaswamy Temple",
      district: "Thiruvananthapuram",
      lat: 8.4828,
      lon: 76.9436,
      category: "spiritual",
      description: "One of the 108 Divya Desams, an opulent Dravidian-Kerala gold-plated temple dedicated to Lord Vishnu resting on the serpent Anantha.",
      image: "/images/kerala/appam_stew.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Sree Padmanabhaswamy Temple.",
      gallery: [
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Front Elevation",
                caption: "Sree Padmanabhaswamy Temple — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Aerial Drone View",
                caption: "Sree Padmanabhaswamy Temple — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Sree Padmanabhaswamy Temple — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Sree Padmanabhaswamy Temple — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "chinese-fishing-nets",
      name: "Chinese Fishing Nets Fort Kochi",
      district: "Ernakulam",
      lat: 9.9674,
      lon: 76.2428,
      category: "monument",
      description: "Iconic shore-operated cantilever lift nets introduced in the 14th century by Chinese explorer Zheng He's court, framing Kochi sunsets.",
      image: "/images/kerala/appam_stew.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Chinese Fishing Nets Fort Kochi.",
      gallery: [
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Front Elevation",
                caption: "Chinese Fishing Nets Fort Kochi — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Aerial Drone View",
                caption: "Chinese Fishing Nets Fort Kochi — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Chinese Fishing Nets Fort Kochi — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Chinese Fishing Nets Fort Kochi — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "bekal-fort",
      name: "Bekal Fort",
      district: "Kasaragod",
      lat: 12.3927,
      lon: 75.0334,
      category: "monument",
      description: "Kerala's largest and most magnificent coastal citadel, featuring keyhole ramparts rising directly out of the Arabian Sea waves.",
      image: "/images/kerala/appam_stew.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Bekal Fort.",
      gallery: [
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Front Elevation",
                caption: "Bekal Fort — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Aerial Drone View",
                caption: "Bekal Fort — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Bekal Fort — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Bekal Fort — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "munnar-hills",
      name: "Munnar & Eravikulam National Park",
      district: "Idukki",
      lat: 10.0889,
      lon: 77.0595,
      category: "nature",
      description: "Misty Western Ghats tea kingdom situated at 5,200 ft elevation, habitat of the endangered Nilgiri Tahr and the blooming Neelakurinji flower.",
      image: "/images/kerala/appam_stew.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Munnar & Eravikulam National Park.",
      gallery: [
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Front Elevation",
                caption: "Munnar & Eravikulam National Park — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Aerial Drone View",
                caption: "Munnar & Eravikulam National Park — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Munnar & Eravikulam National Park — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Munnar & Eravikulam National Park — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "alappuzha-backwaters",
      name: "Alappuzha Vembanad Backwaters",
      district: "Alappuzha",
      lat: 9.4981,
      lon: 76.3388,
      category: "nature",
      description: "Serene world of palm-fringed canals, paddy fields cultivated below sea level, and traditional thatched Kettuvallam houseboats.",
      image: "/images/kerala/appam_stew.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Alappuzha Vembanad Backwaters.",
      gallery: [
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Front Elevation",
                caption: "Alappuzha Vembanad Backwaters — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Aerial Drone View",
                caption: "Alappuzha Vembanad Backwaters — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Alappuzha Vembanad Backwaters — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Alappuzha Vembanad Backwaters — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "vadakkumnathan-temple",
      name: "Vadakkumnathan Shiva Temple",
      district: "Thrissur",
      lat: 10.5243,
      lon: 76.2135,
      category: "spiritual",
      description: "Ancient 1,000-year-old temple complex recognized by UNESCO for architectural conservation, venue for the magnificent Thrissur Pooram.",
      image: "/images/kerala/appam_stew.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Vadakkumnathan Shiva Temple.",
      gallery: [
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Front Elevation",
                caption: "Vadakkumnathan Shiva Temple — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Aerial Drone View",
                caption: "Vadakkumnathan Shiva Temple — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Vadakkumnathan Shiva Temple — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/kerala/appam_stew.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Vadakkumnathan Shiva Temple — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
  ],
  cuisines: [
    {
      name: "Kerala Onam Sadya",
      hindiName: "केरल सद्या",
      tag: "The Grand Royal Vegetarian Feast",
      description:
        "A grand vegetarian multi-course feast served on a fresh plantain leaf, featuring over 24 traditional dishes including Avial, Thoran, Olan, Sambar, Pachadi, and concluding with sweet warm Payasam.",
      image: "/images/kerala/kerala_sadya.jpg",
      origin: "Travancore Royal Court",
      ingredients: ["Red matta rice", "Coconut", "Drumsticks", "Curry leaves", "Plantain banana"],
    },
    {
      name: "Appam with Stew",
      hindiName: "अप्पम और इस्टू",
      tag: "Breakfast of God's Own Country",
      description:
        "Fluffy, fermented rice batter pancakes with crisp lacy edges and a soft pillowy center, paired with a mild, coconut milk-infused vegetable or chicken stew flavored with cardamom and cinnamon.",
      image: "/images/kerala/appam_stew.jpg",
      origin: "Central Kerala & Syrian Christian tradition",
      ingredients: ["Fermented rice batter", "Coconut milk", "Potatoes", "Cardamom", "Curry leaves"],
    },
    {
      name: "Malabar Parotta",
      hindiName: "मालाबार परोटा",
      tag: "Culinary Pride of the Coast",
      description:
        "Multi-layered, flaky, golden flatbread masterfully kneaded, beaten, and spiraled before being griddled with ghee, creating feather-light buttery layers that tear apart effortlessly.",
      image: "/images/kerala/malabar_parotta.jpg",
      origin: "Malabar Coast",
      ingredients: ["Refined flour", "Ghee", "Milk", "Coconut oil", "Salt"],
    },
    {
      name: "Karimeen Pollichathu",
      hindiName: "करीमीन पोल्लिचतु",
      tag: "Backwater Delicacy",
      description:
        "Pearl spot fish (Karimeen) fresh from the backwaters, marinated in spicy shallots, green chillies, and kudampuli (pot tamarind), wrapped in a banana leaf and pan-roasted to smoky aromatic perfection.",
      image: "/images/kerala/karimeen_pollichathu.jpg",
      origin: "Alappuzha & Kottayam Lake Basins",
      ingredients: ["Karimeen fish", "Shallots", "Kudampuli", "Banana leaf", "Coconut oil"],
    },
    {
      name: "Palada Payasam",
      hindiName: "पालदा पायसम",
      tag: "Nectar of Temples",
      description:
        "An intensely rich, pinkish-creamy dessert made by slow-simmering rice batter flakes (ada) in fresh whole milk and sugar for hours until caramelized, infused with crushed green cardamom.",
      image: "/images/kerala/palada_payasam.jpg",
      origin: "Ambalappuzha Sri Krishna Temple",
      ingredients: ["Rice ada flakes", "Whole cow milk", "Sugar", "Green cardamom", "Ghee"],
    },
  ],
  traditions: [
    {
      title: "Kathakali Classical Dance Drama",
      category: "Classical Performing Art",
      period: "17th Century Temple Courts",
      description:
        "World-renowned dance-drama distinguished by its vivid green face makeup (Paccha), towering headgear (Kireedam), dramatic eye movements, and intricate mudras (hand gestures) depicting epic stories from the Ramayana and Mahabharata.",
      image: "/images/kerala/kathakali.jpg",
      highlights: ["Intricate Paccha and Kathi makeup", "Complex facial and eye expressions (Navarasas)", "Maddalam and Chenda percussion accompaniment"],
    },
    {
      title: "Theyyam Divine Ritual Theatre",
      category: "Ancient Temple Ritual Dance",
      period: "Over 1,500 Years Old (North Malabar)",
      description:
        "A sacred shamanic dance tradition wherein performers embody divine ancestral spirits, wearing awe-inspiring red wooden headpieces rising up to 50 feet and dancing across embers of sacred bonfires.",
      image: "/images/kerala/theyyam.jpg",
      highlights: ["Performers venerated as living deities", "Spectacular towering headdresses", "Fire-walking and hypnotic drumming"],
    },
    {
      title: "Kalaripayattu Martial Art",
      category: "Mother of All Martial Arts",
      period: "3rd Century BCE (Dhanurveda)",
      description:
        "One of the oldest fighting systems in existence, blending breathtaking acrobatic leaps, flexible sword (Urumi) combat, body massage (Uzhichil), and energy meridian point strikes (Marmam).",
      image: "/images/kerala/kalaripayattu.jpg",
      highlights: ["Ancient Indian martial lineage", "Flexible Urumi sword techniques", "Marmam vital-point pressure knowledge"],
    },
  ],
  attires: [
    {
      name: "Kasavu Mundu & Neriyathu",
      type: "Women's Classical Dress (Kerala Saree)",
      description:
        "An elegant two-piece unstitched garment of handwoven off-white unbleached cotton, framed by shimmering pure gold zari (Kasavu) borders, worn during Onam and temple rites.",
      image: "/images/kerala/kasavu_saree.jpg",
      specialty: "Balaramapuram and Chendamangalam handloom weaving heritage.",
    },
    {
      name: "Traditional Mundu & Jubba",
      type: "Men's Traditional Dress",
      description:
        "A pure cotton white or cream fabric wrapped around the waist and secured with a golden border (Kara), frequently folded in half (Mundu Madikkuthal) when walking or working.",
      image: "/images/kerala/traditional_mundu.jpg",
      specialty: "Breathable natural handloom perfect for Kerala's tropical humid climate.",
    },
    {
      name: "Settu Mundu",
      type: "Festival & Temple Attire",
      description:
        "The traditional twin-piece attire of Kerala women retaining the ancient classical silhouette, featuring delicate handwoven motifs of temple lamps and peacocks.",
      image: "/images/kerala/settu_mundu.jpg",
      specialty: "Timeless simplicity embodying Malayali cultural grace.",
    },
  ],
  monuments: [
    {
      name: "Sree Padmanabhaswamy Temple",
      location: "Thiruvananthapuram",
      era: "8th Century CE (Chera & Travancore Kings)",
      unesco: false,
      description:
        "A majestic fusion of Kerala and Dravidian temple styles with a 100-foot 7-tier gopuram, housing the idol of Lord Vishnu in Anantha Shayana posture, renowned as the wealthiest temple treasury in the world.",
      image: "/images/kerala/padmanabhaswamy_temple.jpg",
      significance: "Spiritual sanctuary of the Travancore Royal Family and one of India's richest shrines.",
    },
    {
      name: "Mattancherry Dutch Palace",
      location: "Kochi",
      era: "1555 CE (Portuguese, renovated by Dutch)",
      unesco: false,
      description:
        "Palace gifted by the Portuguese to King Veera Kerala Varma, featuring some of India's best-preserved Hindu temple mural paintings depicting scenes from the Ramayana in natural vegetable dyes.",
      image: "/images/kerala/mattancherry_palace.jpg",
      significance: "Rare blend of European medieval architecture with traditional Kerala Nalukettu woodwork.",
    },
    {
      name: "Bekal Fort",
      location: "Kasaragod",
      era: "1650 CE (Shivappa Nayaka of Keladi)",
      unesco: false,
      description:
        "A giant coastal fort spreading over 40 acres of green headland, engineered primarily for defense with observation towers, underground tunnels, and wave-lapped red laterite ramparts.",
      image: "/images/kerala/bekal_fort.jpg",
      significance: "Largest and best-preserved coastal fortress in Kerala.",
    },
    {
      name: "Chinese Fishing Nets of Fort Kochi",
      location: "Kochi Harbour",
      era: "14th Century CE (Zheng He / Kublai Khan era)",
      unesco: false,
      description:
        "Massive teak wood and bamboo cantilever fishing contraptions with counterweights, lowered into the incoming Arabian sea tide by teams of six fishermen.",
      image: "/images/kerala/chinese_fishing_nets.jpg",
      significance: "Living symbol of Kochi's maritime trade connections across the ancient silk route.",
    },
  ],
  languages: [
    {
      name: "Malayalam",
      script: "Malayalam Script (Grantha lineage)",
      speakers: "38+ Million",
      greeting: "Namaskaram (നമസ്കാരം)",
      meaning: "I bow to the divine within you",
      description:
        "Designated a Classical Language of India, Malayalam boasts an extraordinary literary heritage dating back to Ramacharitam and Thunchath Ezhuthachan, enriched by Sanskrit and Dravidian roots.",
    },
    {
      name: "Arabi Malayalam",
      script: "Arabic Alphabet modified",
      speakers: "1+ Million (Malabar Mappila community)",
      greeting: "Salam Alaikum / Namaskaram",
      meaning: "Peace be upon you",
      description:
        "A historic literary linguistic blend of Malayalam and Arabic, producing the soulful Mappila Pattu musical tradition across Malabar coastal ports.",
    },
    {
      name: "Beary",
      script: "Kannada & Malayalam script",
      speakers: "1.5 Million (Kasaragod & Tulunadu)",
      greeting: "Ullara (Are you well?)",
      meaning: "Warm fraternal inquiry of wellness",
      description:
        "A rich regional spoken tongue of northern Kerala and coastal Karnataka influenced by Tulu, Malayalam, and Arabic maritime trade contacts.",
    },
  ],
  luminaries: [
    {
      name: "Adi Shankaracharya",
      image: "/images/luminaries/adi_shankaracharya.jpg",
      era: "788 – 820 CE",
      title: "Master of Advaita Vedanta Philosophy",
      contribution:
        "Born in Kalady on the banks of the Periyar, Shankaracharya unified Indian spiritual philosophy, authored immortal commentaries on the Upanishads, Bhagavad Gita, and Brahma Sutras, and established four monastic seats (Mathas) across India.",
    },
    {
      name: "Raja Ravi Varma",
      image: "/images/luminaries/raja_ravi_varma.jpg",
      era: "1848 – 1906 CE",
      title: "Father of Modern Indian Art",
      contribution:
        "Travancore prince and visionary painter who fused European academic realism with Indian mythological subjects, bringing depictions of Hindu deities and epics into ordinary Indian homes through lithographic presses.",
    },
    {
      name: "Sree Narayana Guru",
      image: "/images/luminaries/sree_narayana_guru.jpg",
      era: "1856 – 1928 CE",
      title: "Social Reformer & Spiritual Philosopher",
      contribution:
        "Pioneered Kerala's Renaissance by establishing temples open to all castes, famously proclaiming the universal doctrine: 'One Caste, One Religion, One God for Humanity' (Oru Jathi, Oru Matham, Oru Daivam Manushyanu).",
    },
  ],
}
