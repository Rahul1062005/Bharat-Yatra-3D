import type { StateData } from "../types/state"

export const westBengalData: StateData = {
  id: "west-bengal",
  name: "West Bengal",
  hindiName: "पश्चिम बंगाल",
  capital: "Kolkata (City of Joy)",
  tagline: "Cultural Heart of the East & Bengal Renaissance",
  overview:
    "Stretching from the snow-capped Himalayan peaks of Kanchenjunga in Darjeeling down to the mangrove delta of the Sundarbans on the Bay of Bengal, West Bengal is the intellectual and artistic crucible of India. Home to the Bengal Renaissance, Nobel laureates Rabindranath Tagore and Amartya Sen, cinema maestro Satyajit Ray, grand Durga Puja celebrations, and exquisite terracotta temples.",
  ancientNames: ["Vanga", "Gauda", "Pundravardhana", "Suhma"],
  keyStats: [
    { label: "Districts", value: "23" },
    { label: "Capital", value: "Kolkata" },
    { label: "Lifeline River", value: "Holy Bhagirathi-Hooghly & Teesta" },
    { label: "Nobel Laureates", value: "5 Nobel Connections" },
    { label: "UNESCO Sites", value: "Sundarbans, Shantiniketan, DHR, Durga Puja" },
    { label: "Natural Wonder", value: "World's Largest Mangrove Delta" },
  ],
  quote: {
    text: "Where the mind is without fear and the head is held high — let this soil ignite the lamp of knowledge across humanity.",
    author: "Rabindranath Tagore",
  },
  districts: {
    "Kolkata": {
      name: "Kolkata",
      tagline: "City of Joy & Cultural Capital of India",
      headquarters: "Kolkata",
      knownFor: "Victoria Memorial, Howrah Bridge, Dakshineswar Kali Temple, College Street book market, trams.",
      famousSpot: "Victoria Memorial & Howrah Bridge",
    },
    "Howrah": {
      name: "Howrah",
      tagline: "Gateway of Railways & Botanical Wonders",
      headquarters: "Howrah",
      knownFor: "Howrah Railway Terminus, Acharya Jagadish Chandra Bose Indian Botanic Garden (The Great Banyan Tree).",
      famousSpot: "Great Banyan Tree & Howrah Station",
    },
    "Darjeeling": {
      name: "Darjeeling",
      tagline: "Queen of the Hills & World's Finest Tea",
      headquarters: "Darjeeling",
      knownFor: "Champagne of teas (Darjeeling tea), Tiger Hill Kanchenjunga sunrise, Toy Train (UNESCO DHR).",
      famousSpot: "Tiger Hill Sunrise & Himalayan Toy Train",
    },
    "Kalimpong": {
      name: "Kalimpong",
      tagline: "Land of Orchids, Monasteries & Mist",
      headquarters: "Kalimpong",
      knownFor: "Durpin Dara Monastery, exotic gladioli and orchid nurseries, Deolo Hill panoramic viewpoints.",
      famousSpot: "Deolo Hill & Durpin Monastery",
    },
    "Jalpaiguri": {
      name: "Jalpaiguri",
      tagline: "Dooars Teagardens & Gorumara Rhinos",
      headquarters: "Jalpaiguri",
      knownFor: "Gorumara National Park (one-horned rhinos), lush tea estates, Teesta river barrage.",
      famousSpot: "Gorumara National Park",
    },
    "Alipurduar": {
      name: "Alipurduar",
      tagline: "Tiger Foothills & Buxa Citadel",
      headquarters: "Alipurduar",
      knownFor: "Buxa Tiger Reserve, Buxa Fort (British prison for revolutionaries), Jaldapara elephant rides.",
      famousSpot: "Buxa Fort & Jaldapara National Park",
    },
    "Cooch Behar": {
      name: "Cooch Behar",
      tagline: "Royal City of Victor Jubilee Palace",
      headquarters: "Cooch Behar",
      knownFor: "Cooch Behar Palace (modeled on Buckingham Palace), Madan Mohan Temple, royal heritage.",
      famousSpot: "Cooch Behar Royal Palace",
    },
    "South 24 Parganas": {
      name: "South 24 Parganas",
      tagline: "Realm of Royal Bengal Tigers & Sundarbans",
      headquarters: "Alipore",
      knownFor: "Sundarbans National Park (UNESCO mangrove habitat of Royal Bengal Tigers), Gangasagar Mela.",
      famousSpot: "Sundarbans Mangrove Tiger Delta & Gangasagar",
    },
    "North 24 Parganas": {
      name: "North 24 Parganas",
      tagline: "Historic Border Lands & Mango Orchards",
      headquarters: "Barasat",
      knownFor: "Chandraketugarh ancient archaeological port (3rd century BCE), border trade with Bangladesh.",
      famousSpot: "Chandraketugarh Archaeological Ruins",
    },
    "Hooghly": {
      name: "Hooghly",
      tagline: "Cradle of European Settlements & Ramakrishna",
      headquarters: "Chinsurah",
      knownFor: "Kamarpukur (Sri Ramakrishna birthplace), Bandel Portuguese Church, Hooghly Imambara.",
      famousSpot: "Kamarpukur & Hooghly Imambara",
    },
    "Nadia": {
      name: "Nadia",
      tagline: "Seat of Chaitanya Mahaprabhu & Saree Looms",
      headquarters: "Krishnanagar",
      knownFor: "Mayapur ISKCON World Headquarters, birthplace of Chaitanya Mahaprabhu, Shantipur-Phulia sarees.",
      famousSpot: "Mayapur ISKCON Temple of Vedic Planetarium",
    },
    "Birbhum": {
      name: "Birbhum",
      tagline: "Tagore's Shantiniketan & Baul Song Lands",
      headquarters: "Suri",
      knownFor: "Visva-Bharati Shantiniketan (UNESCO), Tarapith Tantric temple, red soil (Rarh), Baul singers.",
      famousSpot: "Shantiniketan Ashram & Tarapith",
    },
    "Bankura": {
      name: "Bankura",
      tagline: "Terracotta Temples of Bishnupur & Horses",
      headquarters: "Bankura",
      knownFor: "Bishnupur 17th-century terracotta temples, Bankura horse figurines, Baluchari silk sarees.",
      famousSpot: "Bishnupur Terracotta Temples",
    },
    "Purulia": {
      name: "Purulia",
      tagline: "Land of Chhau Mask Dance & Ayodhya Hills",
      headquarters: "Purulia",
      knownFor: "UNESCO-recognized Purulia Chhau masked dance, Ayodhya Hills, palash red blooms.",
      famousSpot: "Ayodhya Hills & Charida Chhau Mask Village",
    },
    "Murshidabad": {
      name: "Murshidabad",
      tagline: "Historic Capital of the Nawabs of Bengal",
      headquarters: "Baharampur",
      knownFor: "Hazarduari Palace (Palace of 1,000 Doors), Katra Mosque, Battle of Plassey site (1757).",
      famousSpot: "Hazarduari Palace & Museum",
    },
    "Malda": {
      name: "Malda",
      tagline: "Ancient Seat of Gauda & Fazli Mangoes",
      headquarters: "English Bazar",
      knownFor: "Medieval ruins of Gauda and Pandua, Adina Mosque, GI-tagged Fazli and Himsagar mangoes.",
      famousSpot: "Adina Mosque & Gauda Ruins",
    },
    "Uttar Dinajpur": {
      name: "Uttar Dinajpur",
      tagline: "Gateway of North Bengal & Raiganj Birds",
      headquarters: "Raiganj",
      knownFor: "Raiganj Wildlife Sanctuary (Kulik Bird Sanctuary, one of Asia's largest bird breeding areas).",
      famousSpot: "Kulik Bird Sanctuary",
    },
    "Dakshin Dinajpur": {
      name: "Dakshin Dinajpur",
      tagline: "Pala Dynasty Citadel of Bangarh",
      headquarters: "Balurghat",
      knownFor: "Bangarh historical site, Tapan Dighi, rural terracotta arts.",
      famousSpot: "Bangarh Ancient Excavation Site",
    },
    "Purba Bardhaman": {
      name: "Purba Bardhaman",
      tagline: "Granary of Bengal & Curzon Gate",
      headquarters: "Bardhaman",
      knownFor: "108 Shiva Temples of Kalna, Curzon Gate, Bardhaman Mihidana and Sitabhog sweets.",
      famousSpot: "Kalna 108 Terracotta Shiva Temples",
    },
    "Paschim Bardhaman": {
      name: "Paschim Bardhaman",
      tagline: "Industrial Steel & Coal Heartland",
      headquarters: "Asansol",
      knownFor: "Durgapur Steel Plant, Asansol railway hub, Maithon Dam, Kalyaneshwari Temple.",
      famousSpot: "Maithon Dam & Reservoir",
    },
    "Purba Medinipur": {
      name: "Purba Medinipur",
      tagline: "Golden Coast of Digha & Tamralipta",
      headquarters: "Tamluk",
      knownFor: "Digha and Mandarmani beaches, ancient port of Tamralipta, Matarani temple.",
      famousSpot: "Digha Beach & Marine Aquarium",
    },
    "Paschim Medinipur": {
      name: "Paschim Medinipur",
      tagline: "Forest Lands of Junglemahal",
      headquarters: "Medinipur",
      knownFor: "Kurumbera Fort ruins, Gongoni Grand Canyon of Bengal on Silabati river, Vidyasagar legacy.",
      famousSpot: "Gongoni Red Rock Canyon",
    },
    "Jhargram": {
      name: "Jhargram",
      tagline: "Sal Forest Palaces & Santhali Heritage",
      headquarters: "Jhargram",
      knownFor: "Jhargram Palace, Chilkigarh Raj Palace, dense Sal tree forests, tribal folk arts.",
      famousSpot: "Jhargram Palace & Chilkigarh",
    },
  },
  landmarks: [
    {
      id: "victoria-memorial",
      name: "Victoria Memorial Hall",
      district: "Kolkata",
      lat: 22.5448,
      lon: 88.3426,
      category: "monument",
      description: "Iconic white Makrana marble palace constructed between 1906 and 1921, set in 64 acres of landscaped gardens, housing rare art galleries.",
      image: "/images/westbengal/baul_music.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Victoria Memorial Hall.",
      gallery: [
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Front Elevation",
                caption: "Victoria Memorial Hall — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Aerial Drone View",
                caption: "Victoria Memorial Hall — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Victoria Memorial Hall — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Victoria Memorial Hall — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "howrah-bridge",
      name: "Howrah Bridge (Rabindra Setu)",
      district: "Howrah",
      lat: 22.5851,
      lon: 88.3468,
      category: "monument",
      description: "Engineering marvel and one of the busiest cantilever bridges on Earth, spanning 1,500 feet over the Hooghly River without a single pylon in the water.",
      image: "/images/westbengal/baul_music.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Howrah Bridge (Rabindra Setu).",
      gallery: [
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Front Elevation",
                caption: "Howrah Bridge (Rabindra Setu) — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Aerial Drone View",
                caption: "Howrah Bridge (Rabindra Setu) — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Howrah Bridge (Rabindra Setu) — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Howrah Bridge (Rabindra Setu) — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "sundarbans",
      name: "Sundarbans UNESCO Biosphere Reserve",
      district: "South 24 Parganas",
      lat: 21.9497,
      lon: 88.8893,
      category: "nature",
      description: "The world's largest contiguous halophytic mangrove forest and global refuge of the swimming Royal Bengal Tiger, estuarine crocodiles, and river dolphins.",
      image: "/images/westbengal/baul_music.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Sundarbans UNESCO Biosphere Reserve.",
      gallery: [
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Front Elevation",
                caption: "Sundarbans UNESCO Biosphere Reserve — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Aerial Drone View",
                caption: "Sundarbans UNESCO Biosphere Reserve — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Sundarbans UNESCO Biosphere Reserve — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Sundarbans UNESCO Biosphere Reserve — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "shantiniketan",
      name: "Shantiniketan (Visva-Bharati)",
      district: "Birbhum",
      lat: 23.6806,
      lon: 87.689,
      category: "university",
      description: "UNESCO World Heritage residential school founded by Gurudev Rabindranath Tagore, where learning takes place open-air under sacred mango and banyan trees.",
      image: "/images/westbengal/baul_music.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Shantiniketan (Visva-Bharati).",
      gallery: [
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Front Elevation",
                caption: "Shantiniketan (Visva-Bharati) — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Aerial Drone View",
                caption: "Shantiniketan (Visva-Bharati) — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Shantiniketan (Visva-Bharati) — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Shantiniketan (Visva-Bharati) — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "bishnupur-temples",
      name: "Bishnupur Terracotta Temples",
      district: "Bankura",
      lat: 23.0754,
      lon: 87.3204,
      category: "monument",
      description: "Stunning 17th-century brick temples built by the Malla kings, completely encrusted with intricate terracotta panels illustrating Mahabharata episodes.",
      image: "/images/westbengal/baul_music.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Bishnupur Terracotta Temples.",
      gallery: [
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Front Elevation",
                caption: "Bishnupur Terracotta Temples — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Aerial Drone View",
                caption: "Bishnupur Terracotta Temples — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Bishnupur Terracotta Temples — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Bishnupur Terracotta Temples — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "darjeeling-toy-train",
      name: "Darjeeling Himalayan Railway (Toy Train)",
      district: "Darjeeling",
      lat: 27.041,
      lon: 88.2663,
      category: "monument",
      description: "UNESCO World Heritage narrow-gauge steam train climbing from 100 meters at New Jalpaiguri to 2,258 meters at Ghoom, circling loops and Batasia zig-zags.",
      image: "/images/westbengal/baul_music.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Darjeeling Himalayan Railway (Toy Train).",
      gallery: [
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Front Elevation",
                caption: "Darjeeling Himalayan Railway (Toy Train) — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Aerial Drone View",
                caption: "Darjeeling Himalayan Railway (Toy Train) — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Darjeeling Himalayan Railway (Toy Train) — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/westbengal/baul_music.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Darjeeling Himalayan Railway (Toy Train) — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
  ],
  cuisines: [
    {
      name: "Machher Jhol",
      hindiName: "माछेर झोल",
      tag: "Everyday Soul of Bengal",
      description:
        "A light, soul-nourishing freshwater fish curry (Rohu or Katla) simmered in a fragrant broth seasoned with five-spice (panch phoron), green chillies, potatoes, and pointed gourd (potol).",
      image: "/images/westbengal/machher_jhol.jpg",
      origin: "Bengal river basins",
      ingredients: ["Freshwater Rohu fish", "Mustard oil", "Panch phoron", "Potatoes", "Turmeric & green chillies"],
    },
    {
      name: "Shorshe Ilish",
      hindiName: "शॉरशे इलिश",
      tag: "Monsoon Royalty of Padma & Hooghly",
      description:
        "The undisputed king of Bengali celebrations—steamed Hilsa fish immersed in an intensely pungent, yellow and black mustard seed paste, green chillies, and raw cold-pressed mustard oil.",
      image: "/images/westbengal/shorshe_ilish.jpg",
      origin: "East & West Bengal delta",
      ingredients: ["Hilsa (Ilish) fish", "Mustard seed paste", "Mustard oil", "Slit green chillies", "Turmeric"],
    },
    {
      name: "Kosha Mangsho",
      hindiName: "कोशा मांश",
      tag: "Slow-Cooked Sunday Delight",
      description:
        "A velvety, deep-brown slow-braised mutton curry where marinated goat meat is caramelized with mustard oil, onions, ginger-garlic paste, and whole garam masala until melt-in-the-mouth tender.",
      image: "/images/westbengal/kosha_mangsho.jpg",
      origin: "Golbari, Shyambazar Kolkata",
      ingredients: ["Tender goat meat", "Mustard oil", "Fried onions", "Ginger-garlic", "Yogurt & Whole spices"],
    },
    {
      name: "Kolkata Rasgulla",
      hindiName: "रसगुल्ला",
      tag: "World-Renowned Spongy Sweet",
      description:
        "Light, spherical dumplings of fresh cottage cheese (chhena) kneaded meticulously and boiled in clarifying light sugar syrup until puffed into feather-light spongy perfection.",
      image: "/images/westbengal/rasgulla.jpg",
      origin: "Nobin Chandra Das, Bagbazar (1868)",
      ingredients: ["Fresh cow milk chhena", "Semolina (suji)", "Sugar syrup", "Cardamom infusion"],
    },
    {
      name: "Mishti Doi",
      hindiName: "मिष्टी दोई",
      tag: "Caramelized Clay-Pot Yogurt",
      description:
        "A thick, luscious sweetened curd prepared by slowly boiling rich milk with caramelized jaggery or sugar, set in porous terracotta earthen bowls that absorb moisture and infuse an earthy aroma.",
      image: "/images/westbengal/mishti_doi.jpg",
      origin: "Nabadwip & Kolkata",
      ingredients: ["Full-cream milk", "Caramelized sugar/Nolen Gur", "Yogurt starter culture", "Terracotta clay pot"],
    },
  ],
  traditions: [
    {
      title: "Durga Puja Carnival",
      category: "UNESCO Intangible Cultural Heritage",
      period: "Centuries-Old Autumn Festival",
      description:
        "Inscribed on UNESCO's Representative List of Intangible Cultural Heritage, Kolkata's Durga Puja transforms the metropolis into an open-air art gallery of thousands of architectural pandals, dhak drummers, and Sindoor Khela.",
      image: "/images/westbengal/durga_puja.jpg",
      highlights: ["UNESCO Cultural Heritage recognition", "Immense temporary architectural pandals", "Dhunuchi dance and Dhak percussion beats"],
    },
    {
      title: "Baul Mystic Folk Music",
      category: "UNESCO Masterpiece of Oral Heritage",
      period: "Centuries-Old Wandering Mystics",
      description:
        "A spiritual folk musical tradition performed by wandering minstrels who play the single-stringed Ektara, Dubki, and ankle bells while singing soul-stirring philosophy seeking the 'Man of the Heart' (Moner Manush).",
      image: "/images/westbengal/baul_music.jpg",
      highlights: ["UNESCO Masterpiece of Oral Heritage", "Ektara and Dotara string instruments", "Lalon Shah philosophical lineage"],
    },
    {
      title: "Purulia Chhau Masked Dance",
      category: "UNESCO Martial Dance Art",
      period: "Ancient Tribal Warfare & Epic Dramas",
      description:
        "A vigorous acrobatic dance featuring somersaults and mock battles, performed by dancers wearing enormous hand-painted clay and papier-mâché masks representing gods, demons, and celestial beings.",
      image: "/images/westbengal/chhau_dance.jpg",
      highlights: ["Acrobatic aerial jumps and spins", "Handcrafted clay masks from Charida", "Dhol and Shehnai martial accompaniment"],
    },
  ],
  attires: [
    {
      name: "Tant & Baluchari Silk Saree",
      type: "Women's Classical Heritage Saree",
      description:
        "Crisp, lightweight cotton Tant sarees famous for their airy breathability, and royal Baluchari silk sarees whose pallus depict intricate narrative scenes from the Ramayana and Mahabharata.",
      image: "/images/westbengal/tant_saree.jpg",
      specialty: "Phulia and Bishnupur handloom weaving tradition.",
    },
    {
      name: "Dhoti-Kurta with Uttoriyo",
      type: "Men's Classical Intellectual Attire",
      description:
        "A finely pleated white cotton or muga silk dhoti paired with an embroidered Punjabi (kurta) and an artfully draped scarf (uttoriyo) over the shoulder, immortalized by the stalwarts of the Bengal Renaissance.",
      image: "/images/westbengal/dhoti_kurta.jpg",
      specialty: "Quintessential formal attire for pujas, literature conferences, and weddings.",
    },
    {
      name: "Lal-Par Sada Saree",
      type: "Ceremonial Red-Border Saree",
      description:
        "The iconic white or off-white silk/cotton saree with a rich crimson-red border, worn by women across Bengal during Durga Puja Ashtami pushpanjali and Sindoor Khela.",
      image: "/images/westbengal/baluchari_saree.jpg",
      specialty: "Embodiment of feminine strength and sacred devotion to Goddess Durga.",
    },
  ],
  monuments: [
    {
      name: "Victoria Memorial",
      location: "Kolkata",
      era: "1921 CE (Architect William Emerson)",
      unesco: false,
      description:
        "Built of pristine white Makrana marble from the same quarries as the Taj Mahal, this Indo-Saracenic monument houses 25 galleries containing historic oil paintings, royal artifacts, and manuscripts.",
      image: "/images/westbengal/victoria_memorial.jpg",
      significance: "Kolkata's most visited and iconic architectural landmark.",
    },
    {
      name: "Howrah Bridge (Rabindra Setu)",
      location: "Kolkata – Howrah",
      era: "1943 CE (Engineered by Cleveland Bridge & Engineering Co)",
      unesco: false,
      description:
        "A cantilever suspension marvel constructed with 26,500 tons of high-tensile alloy steel (Tata Steel), without any bolts or nuts, held together entirely by hot steel rivets.",
      image: "/images/westbengal/howrah_bridge.jpg",
      significance: "Lifeline bridge carrying over 100,000 vehicles and 150,000 pedestrians every day.",
    },
    {
      name: "Dakshineswar Kali Temple",
      location: "Kolkata (Hooghly river bank)",
      era: "1855 CE (Rani Rashmoni)",
      unesco: false,
      description:
        "A monumental nine-spire (Navaratna) temple complex dedicated to Goddess Bhavatarini Kali, where spiritual master Sri Ramakrishna Paramahamsa had his divine visions.",
      image: "/images/westbengal/dakshineswar_temple.jpg",
      significance: "Epicenter of the 19th-century spiritual revival and Ramakrishna-Vivekananda movement.",
    },
    {
      name: "Hazarduari Palace",
      location: "Murshidabad",
      era: "1837 CE (Nawab Nazim Humayun Jah)",
      unesco: false,
      description:
        "Grand Greek-Doric style palace featuring 1,000 doors (of which 900 are real and 100 false to confuse invaders), housing the royal armory with swords used by Siraj-ud-Daulah.",
      image: "/images/westbengal/hazarduari_palace.jpg",
      significance: "Monumental testament to the wealthy Nawabs of Bengal and Nizamat era.",
    },
  ],
  languages: [
    {
      name: "Bengali (Bangla)",
      script: "Eastern Nagari / Bengali Script",
      speakers: "230+ Million (7th Most Spoken in the World)",
      greeting: "Nomoshkar (নমস্কার)",
      meaning: "I bow respectfully to your noble self",
      description:
        "Designated a Classical Language of India, Bengali gave birth to India's National Anthem ('Jana Gana Mana') and National Song ('Vande Mataram'), renowned for melodic cadence and poetic philosophy.",
    },
    {
      name: "Rarhi & Varendri Dialects",
      script: "Bengali Script",
      speakers: "15+ Million",
      greeting: "Bhalo Achhen? (Are you well?)",
      meaning: "Warm personal inquiry of health and spirit",
      description:
        "Standard colloquial Bengali is rooted in the Rarhi dialect spoken across the Bhagirathi river basin, central to contemporary literature, theatre, and films.",
    },
    {
      name: "Rajbanshi (Kamtapuri)",
      script: "Bengali Script",
      speakers: "4+ Million (North Bengal)",
      greeting: "Nomoskar / Ram Ram",
      meaning: "Greetings of peace and fraternity",
      description:
        "Indigenous spoken language of Cooch Behar and Jalpaiguri, carrying rich agricultural ballads (Bhawaiya songs) and oral wisdom.",
    },
  ],
  luminaries: [
    {
      name: "Rabindranath Tagore",
      image: "/images/luminaries/rabindranath_tagore.jpg",
      era: "1861 – 1941 CE",
      title: "The Bard of Bengal & Nobel Laureate",
      contribution:
        "First non-European Nobel laureate in Literature (1913, Gitanjali), polymath who reshaped Bengali literature and music with over 2,230 Rabindrasangeet songs, and composed the national anthems of both India and Bangladesh.",
    },
    {
      name: "Swami Vivekananda",
      image: "/images/luminaries/swami_vivekananda.jpg",
      era: "1863 – 1902 CE",
      title: "Prophet of Modern India & Advaita Vedanta",
      contribution:
        "Foremost disciple of Sri Ramakrishna who represented Hinduism at the 1893 World's Parliament of Religions in Chicago, introducing Vedanta and Yoga to the Western world and establishing the Ramakrishna Mission.",
    },
    {
      name: "Netaji Subhas Chandra Bose",
      image: "/images/luminaries/netaji_subhas_chandra_bose.jpg",
      era: "1897 – 1945 CE",
      title: "Supreme Commander of the Indian National Army",
      contribution:
        "Revolutionary freedom fighter from Bengal who formed the Azad Hind Fauj (INA) to liberate India by force, coining immortal national slogans: 'Jai Hind' and 'Give me blood, and I shall give you freedom!'.",
    },
  ],
}
