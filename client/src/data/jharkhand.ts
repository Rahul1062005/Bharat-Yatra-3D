import type { StateData } from "../types/state"

export const jharkhandData: StateData = {
  id: "jharkhand",
  name: "Jharkhand",
  hindiName: "झारखंड",
  capital: "Ranchi",
  tagline: "The Land of Forests, Mineral Wealth & Tribal Chivalry",
  overview:
    "Etymologically meaning the 'Territory of Forests' (Jhar-Khand), Jharkhand is a majestic plateau of dense sal jungles, cascading rocky waterfalls, rich indigenous tribal cultures, and vast mineral reserves. Blessed with the sacred Shiva Jyotirlinga of Baba Baidyanath in Deoghar, the sacred Jain summit of Parasnath (Shikharji), and the heroic legacies of Bhagwan Birsa Munda, Jharkhand vibrates with primal natural harmony and courage.",
  ancientNames: ["Kukkuta Desa", "Pundrika", "Chhotanagpur", "Santhal Pargana"],
  keyStats: [
    { label: "Districts", value: "24" },
    { label: "Capital", value: "Ranchi (City of Waterfalls)" },
    { label: "Lifeline Rivers", value: "Subarnarekha, Damodar, Mayurakshi, Koel" },
    { label: "Spiritual Jyotirlinga", value: "Baba Baidyanath Dham (Deoghar)" },
    { label: "Jain Sacred Summit", value: "Parasnath / Shikharji (Highest Peak)" },
    { label: "Mineral Heart", value: "Accounts for Over 40% of India's Mineral Wealth" },
  ],
  quote: {
    text: "Ulgulan! — The great revolutionary rebellion for human dignity, sacred forest rights, and indigenous freedom.",
    author: "Dharti Aaba Bhagwan Birsa Munda",
  },
  districts: {
    "Ranchi": {
      name: "Ranchi",
      tagline: "City of Waterfalls & Summer Capital of Chhotanagpur",
      headquarters: "Ranchi",
      knownFor: "Hundru, Dassam and Jonha waterfalls, Tagores Hill, Jagannath Temple, Birsa Munda Memorial.",
      famousSpot: "Hundru Falls & Jagannath Temple",
    },
    "Deoghar": {
      name: "Deoghar",
      tagline: "Sacred Abode of Baba Baidyanath Jyotirlinga",
      headquarters: "Deoghar",
      knownFor: "Baidyanath Temple (one of the 12 Shiva Jyotirlingas), Shravani Mela, Trikut ropeway, Naulakha Temple.",
      famousSpot: "Baba Baidyanath Dham & Trikut Pahar",
    },
    "East Singhbhum": {
      name: "East Singhbhum",
      tagline: "Steel City of Jamshedpur & Industrial Pioneer",
      headquarters: "Jamshedpur",
      knownFor: "Tata Steel heritage, Jubilee Park, Dalma Wildlife Sanctuary (elephant haven), Dimna Lake.",
      famousSpot: "Jubilee Park & Dalma Elephant Sanctuary",
    },
    "Dhanbad": {
      name: "Dhanbad",
      tagline: "Coal Capital of India & IIT ISM Hub",
      headquarters: "Dhanbad",
      knownFor: "Jharia coalfields, Indian Institute of Technology (ISM), Maithon Dam, Topchanchi Lake.",
      famousSpot: "Maithon Dam & Topchanchi Lake",
    },
    "Giridih": {
      name: "Giridih",
      tagline: "Holy Summit of Parasnath (Shikharji)",
      headquarters: "Giridih",
      knownFor: "Parasnath Hill (highest mountain in Jharkhand at 1,365m, where 20 Jain Tirthankaras attained Moksha), Usri Falls.",
      famousSpot: "Parasnath Shikharji Shrine",
    },
    "Hazaribagh": {
      name: "Hazaribagh",
      tagline: "City of Thousand Gardens & Sohrai Murals",
      headquarters: "Hazaribagh",
      knownFor: "Hazaribagh National Park, Canary Hill, prehistoric rock art caves, indigenous Sohrai-Khovar paintings.",
      famousSpot: "Canary Hill & Sohrai Art Village",
    },
    "Bokaro": {
      name: "Bokaro",
      tagline: "Steel City & Planned Green Industrial Enclave",
      headquarters: "Bokaro Steel City",
      knownFor: "Bokaro Steel Plant (SAIL), Garga Dam, City Park, Jawaharlal Nehru Biological Park.",
      famousSpot: "Bokaro Steel Plant & Garga Dam",
    },
    "Dumka": {
      name: "Dumka",
      tagline: "Sub-Capital of Santhal Parganas & Maluti Temples",
      headquarters: "Dumka",
      knownFor: "Maluti terracotta temples (Village of Temples), Basukinath Dham, Massanjore Dam on Mayurakshi river.",
      famousSpot: "Maluti Terracotta Temples & Basukinath",
    },
  },
  landmarks: [
    {
      id: "baidyanath-temple",
      name: "Baba Baidyanath Jyotirlinga Temple",
      district: "Deoghar",
      lat: 24.4925,
      lon: 86.7001,
      category: "spiritual",
      description: "One of the twelve supreme Jyotirlingas of Lord Shiva where Ravana is believed to have sacrificed his nine heads to please Shiva, renowned for the world's longest pilgrimage festival—the 105-kilometer Kanwar Yatra from Sultanganj in Shravan.",
      image: "/images/jharkhand/baidyanath_temple.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Baba Baidyanath Jyotirlinga Temple.",
      gallery: [
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Front Elevation",
                caption: "Baba Baidyanath Jyotirlinga Temple — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Aerial Drone View",
                caption: "Baba Baidyanath Jyotirlinga Temple — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Baba Baidyanath Jyotirlinga Temple — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Baba Baidyanath Jyotirlinga Temple — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "hundru-falls",
      name: "Hundru Waterfalls",
      district: "Ranchi",
      lat: 23.4475,
      lon: 85.6481,
      category: "nature",
      description: "One of the most spectacular waterfalls in eastern India where the holy Subarnarekha River plunges 98 meters (322 feet) over sheer black rocks into an emerald-green foaming natural pool.",
      image: "/images/jharkhand/baidyanath_temple.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Hundru Waterfalls.",
      gallery: [
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Front Elevation",
                caption: "Hundru Waterfalls — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Aerial Drone View",
                caption: "Hundru Waterfalls — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Hundru Waterfalls — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Hundru Waterfalls — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "parasnath-temple",
      name: "Parasnath Hill (Shikharji)",
      district: "Giridih",
      lat: 23.9634,
      lon: 86.1309,
      category: "spiritual",
      description: "The highest mountain peak in Jharkhand rising to 1,365 meters, venerated as the holiest pilgrimage site in Jainism where twenty out of the twenty-four Tirthankaras, including Lord Parshvanatha, attained spiritual Nirvana.",
      image: "/images/jharkhand/baidyanath_temple.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Parasnath Hill (Shikharji).",
      gallery: [
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Front Elevation",
                caption: "Parasnath Hill (Shikharji) — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Aerial Drone View",
                caption: "Parasnath Hill (Shikharji) — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Parasnath Hill (Shikharji) — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Parasnath Hill (Shikharji) — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "jagannath-temple-ranchi",
      name: "Ranchi Jagannath Temple",
      district: "Ranchi",
      lat: 23.3323,
      lon: 85.2817,
      category: "spiritual",
      description: "17th-century hilltop temple built in 1691 by King Thakur Ani Nath Shahdeo resembling the Puri Jagannath Temple, offering panoramic vistas over the city and hosting a massive annual Ratha Yatra.",
      image: "/images/jharkhand/baidyanath_temple.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Ranchi Jagannath Temple.",
      gallery: [
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Front Elevation",
                caption: "Ranchi Jagannath Temple — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Aerial Drone View",
                caption: "Ranchi Jagannath Temple — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Ranchi Jagannath Temple — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Ranchi Jagannath Temple — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "dassam-falls",
      name: "Dassam Falls (Kanchi River)",
      district: "Ranchi",
      lat: 23.1425,
      lon: 85.4678,
      category: "nature",
      description: "Stunning natural cascade where the Kanchi River tumbles 44 meters down into ten distinct water streams over dark granite formations amidst dense sal forest canopies.",
      image: "/images/jharkhand/baidyanath_temple.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Dassam Falls (Kanchi River).",
      gallery: [
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Front Elevation",
                caption: "Dassam Falls (Kanchi River) — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Aerial Drone View",
                caption: "Dassam Falls (Kanchi River) — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Dassam Falls (Kanchi River) — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Dassam Falls (Kanchi River) — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "dalma-sanctuary",
      name: "Dalma Wildlife & Elephant Sanctuary",
      district: "East Singhbhum",
      lat: 22.9056,
      lon: 86.2089,
      category: "nature",
      description: "Dense deciduous forest sanctuary spanning the Dalma mountain range, world-famous as a pristine haven for herds of wild Asian elephants, barking deer, leopards, and giant squirrels.",
      image: "/images/jharkhand/baidyanath_temple.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Dalma Wildlife & Elephant Sanctuary.",
      gallery: [
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Front Elevation",
                caption: "Dalma Wildlife & Elephant Sanctuary — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Aerial Drone View",
                caption: "Dalma Wildlife & Elephant Sanctuary — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Dalma Wildlife & Elephant Sanctuary — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/jharkhand/baidyanath_temple.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Dalma Wildlife & Elephant Sanctuary — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
  ],
  cuisines: [
    {
      name: "Dhuska with Chana Aloo",
      hindiName: "धुस्का और चना आलू",
      tag: "The Golden Morning Anthem of Jharkhand",
      description:
        "Crisp, savory deep-fried golden pancakes crafted from a stone-ground batter of soaked rice and chana dal seasoned with cumin and hing, served hot with spicy black-chana potato curry.",
      origin: "Traditional Street Stalls of Ranchi & Dhanbad",
      image: "/images/jharkhand/dhuska.jpg",
      dietary: "veg",
    },
    {
      name: "Rugra Mushroom Curry",
      hindiName: "रुगड़ा करी",
      tag: "Wild Monsoon Truffle of Sal Forests",
      description:
        "A rare wild indigenous mushroom harvested exclusively from the damp roots of sal trees during monsoon rains, cooked into an earthy, thick spicy gravy prized for its meaty texture and natural forest aroma.",
      origin: "Sal Forest Belts of Chhotanagpur",
      image: "/images/jharkhand/rugra_curry.jpg",
      dietary: "veg",
    },
    {
      name: "Jharkhandi Dal Pittha",
      hindiName: "दाल पिठ्ठा",
      tag: "Steamed Protein Dumpling of Tribal Festivals",
      description:
        "Healthy steamed dumplings prepared from rice flour dough stuffed with a spicy filling of soaked and ground chana dal, green chilies, ginger, and garlic, enjoyed with fresh green coriander chutney.",
      origin: "Festive Harvest Tradition Statewide",
      image: "/images/jharkhand/pittha.jpg",
      dietary: "veg",
    },
    {
      name: "Coalfield Litti Chokha",
      hindiName: "लिट्टी चोखा",
      tag: "Rustic Baked Wheat Dough with Sattu",
      description:
        "Wheat balls filled with seasoned roasted gram flour (sattu), baked over hot coal embers and dipped into pure cow ghee, served alongside roasted mashed eggplant and tomato chokha.",
      origin: "Chhotanagpur & Mining Belts",
      image: "/images/jharkhand/litti_chokha.jpg",
      dietary: "veg",
    },
    {
      name: "Pua & Malpua with Rabri",
      hindiName: "पुआ और मालपुआ",
      tag: "Traditional Sweet of Festive Sarhul & Holi",
      description:
        "Sweet pancakes prepared from wheat flour, mashed ripe bananas, milk, and fennel seeds, fried golden in ghee and steeped in aromatic cardamom syrup.",
      origin: "Deoghar & Ranchi Sweetmakers",
      image: "/images/jharkhand/malpua.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Chhau Martial Dance (Seraikella)",
      type: "dance",
      description:
        "UNESCO-recognized classical masked dance drama from Seraikella, where performers wear exquisitely sculpted lightweight papier-mâché masks depicting gods, animals, and warriors, communicating profound mythic narratives through poetic body movements and acrobatic jumps.",
      significance:
        "Intangible Cultural Heritage of Humanity synthesizing martial agility with courtly classical elegance.",
      image: "/images/jharkhand/chhau_dance.jpg",
    },
    {
      name: "Sohrai & Khovar Mural Art",
      type: "art",
      description:
        "GI-tagged indigenous mural art practiced by Santhal, Munda, and Oraon women on mud house walls using wild river clays (red haematite, yellow ochre, black manganese, and white kaolin) and chewed twigs to depict forest animals, peacocks, and fertility symbols during harvest.",
      significance:
        "Prehistoric cave-art continuation celebrating agrarian harvest and matrimonial blessings.",
      image: "/images/jharkhand/sohrai_art.jpg",
    },
    {
      name: "Sarhul Spring Nature Festival",
      type: "festival",
      description:
        "The grandest tribal festival of Jharkhand celebrated in spring when the sacred Sal tree (Shorea robusta) bursts into fresh white fragrant blossoms, where villagers dance with dhol-mandar drums to celebrate the marriage of Mother Earth with the Sun.",
      significance:
        "Profound ecological festival honoring nature, ancestral spirits, and forest preservation.",
      image: "/images/jharkhand/sarhul_festival.jpg",
    },
  ],
  attires: [
    {
      name: "Santhali Panchi Parhan (Two-Piece Saree)",
      gender: "women",
      fabric: "Handwoven Cotton with Red & White Checkered Borders",
      description:
        "The iconic traditional two-piece handloom attire of Santhal tribal women, consisting of the lower wrap (Parhan) and upper drape (Panchi), woven in white cotton with bold red, black, and green striped geometric borders.",
      occasions: "Sarhul, Sohrai festivals, community tribal gatherings, and weddings.",
      image: "/images/jharkhand/santhali_panchi.jpg",
    },
    {
      name: "Kuchai Tussar Silk Saree",
      gender: "women",
      fabric: "Organic Wild Tussar Silk with Natural Mineral Dyes",
      description:
        "GI-tagged organic wild silk cultivated by indigenous farmers in the sal forests of Kharsawan, prized for its natural gold sheen, breathable thermal comfort, and handloom tribal tribal-motif embroidery.",
      occasions: "Formal celebrations, official state receptions, and weddings.",
      image: "/images/jharkhand/tussar_silk.jpg",
    },
    {
      name: "Kurta, Dhoti & Gamchha",
      gender: "men",
      fabric: "Handspun Khadi Cotton Fabric",
      description:
        "Traditional unstitched white cotton dhoti worn with a simple kurta and a distinctive red-checkered tribal gamchha draped over the shoulder or tied neatly around the head as a pagri.",
      occasions: "Village panchayats, festivals, and folk music recitals.",
      image: "/images/jharkhand/kurta_dhoti.jpg",
    },
  ],
  monuments: [
    {
      name: "Baba Baidyanath Dham",
      location: "Deoghar",
      era: "8th Century CE (Expanded by Chola & local Rajas)",
      unesco: false,
      description:
        "Pyramidal stone spire temple complex enclosing 22 sacred shrines dedicated to Shiva and Parvati, connected by red sacred ribbons, drawing millions of barefoot saffron-clad Kanwariyas every year.",
      image: "/images/jharkhand/baidyanath_temple.jpg",
      significance: "Supreme holy Jyotirlinga and Shakti Peetha in Eastern India.",
    },
    {
      name: "Parasnath Mountain Temples",
      location: "Giridih District",
      era: "Medieval Antiquity",
      unesco: false,
      description:
        "Cluster of ancient marble and sandstone Jain shrines crowning twenty distinct rocky peaks of the mountain ridge, reached by a scenic 27-kilometer pedestrian pilgrimage path through cloud forests.",
      image: "/images/jharkhand/parasnath_temple.jpg",
      significance: "Highest spiritual peak in Jharkhand and premier Jain pilgrimage destination.",
    },
    {
      name: "Hundru Falls Gorge",
      location: "Ranchi District",
      era: "Natural Geological Formation",
      unesco: false,
      description:
        "A dramatic rock-cut river canyon where the Subarnarekha river carves deep crevices and thunderous white spray through black basalt cliffs.",
      image: "/images/jharkhand/hundru_falls.jpg",
      significance: "Premier natural waterfall monument of the Chhotanagpur Plateau.",
    },
    {
      name: "Ranchi Jagannath Temple",
      location: "Dhurwa, Ranchi",
      era: "1691 CE (Barkagarh Dynasty)",
      unesco: false,
      description:
        "Fortress-like stone temple built atop an isolated green hillock, commanding sweeping views of the surrounding plateau and serving as a key regional Vaishnavite shrine.",
      image: "/images/jharkhand/jagannath_temple_ranchi.jpg",
      significance: "Historic architectural gem modeled directly after the Puri shrine.",
    },
  ],
  languages: [
    {
      name: "Hindi (Official State Language)",
      script: "Devanagari Script",
      speakers: "25+ Million",
      greeting: "Namaste / Johar (नमस्ते / जोहार)",
      meaning: "Universal respect and indigenous salutations of brotherhood",
      description:
        "Official language of governance, education, and commerce spoken across all districts.",
    },
    {
      name: "Santhali (संथाली / ᱥᱟᱱᱛᱟᱲᱤ)",
      script: "Ol Chiki Script (Invented by Pandit Raghunath Murmu)",
      speakers: "7+ Million",
      greeting: "Johar (ᱡᱚᱦᱟᱨ)",
      meaning: "Respectful greetings to nature, ancestors and people",
      description:
        "Major Austroasiatic language recognized in the Eighth Schedule of the Indian Constitution, rich in oral songs, proverbs, and folklore.",
    },
    {
      name: "Nagpuri / Sadri",
      script: "Devanagari Script",
      speakers: "5+ Million (Chhotanagpur Plateau)",
      greeting: "Johar / Ram Ram",
      meaning: "Peaceful greetings to all",
      description:
        "Lingua franca of the Chhotanagpur plateau connecting diverse tribal and non-tribal communities, celebrated for Jhumair folk songs and dance.",
    },
  ],
  luminaries: [
    {
      name: "Bhagwan Birsa Munda",
      image: "/images/luminaries/bhagwan_birsa_munda.jpg",
      era: "1875 – 1900 CE",
      title: "Dharti Aaba (Father of the Earth) & Freedom Revolutionary",
      contribution:
        "Fearless 25-year-old tribal visionary and folk hero who spearheaded the historic 'Ulgulan' armed rebellion against British land grabs, whose birth anniversary is celebrated nationwide as Janjatiya Gaurav Diwas.",
    },
    {
      name: "Sidho and Kanho Murmu",
      image: "/images/luminaries/sidho_and_kanho_murmu.jpg",
      era: "1815 – 1856 CE",
      title: "Leaders of the Great Santhal Hool Rebellion",
      contribution:
        "Brothers from Bhognadih who mobilized over 60,000 Santhal warriors in 1855 to launch the first mass armed uprising against British colonial exploitation and oppressive zamindari rule.",
    },
    {
      name: "Mahendra Singh Dhoni",
      image: "/images/luminaries/mahendra_singh_dhoni.jpg",
      era: "1981 – Present",
      title: "Legendary Indian Cricket Captain & World Cup Winner",
      contribution:
        "Hailing from Ranchi, Dhoni captained India to victory in the 2007 ICC T20 World Cup, 2011 ICC Cricket World Cup, and 2013 ICC Champions Trophy, becoming a global icon of composure, leadership, and athletic excellence.",
    },
  ],
}
