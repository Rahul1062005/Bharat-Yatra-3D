import type { StateData } from "../types/state"

export const chhattisgarhData: StateData = {
  id: "chhattisgarh",
  name: "Chhattisgarh",
  hindiName: "छत्तीसगढ़",
  capital: "Raipur",
  tagline: "Rice Bowl of Central India, Ancient Dakshina Kosala & Bastar Art",
  overview:
    "Endowed with over 44% forest cover, ancient rock shelters, and the mighty Mahanadi River, Chhattisgarh is the sacred ancient realm of Dakshina Kosala—the maternal homeland of Lord Rama (son of Mata Kaushalya). World-famous for the horse-shoe Chitrakote Falls (the Niagara of India), 75-day Bastar Dussehra, lost-wax Bell Metal (Dokra) art, and rich tribal biodiversity, Chhattisgarh is a land of vibrant folk traditions and peaceful forest kinship.",
  ancientNames: ["Dakshina Kosala", "Maha Kosala", "Dandakaranya", "Ratanpur Kingdom"],
  keyStats: [
    { label: "Districts", value: "33" },
    { label: "Capital", value: "Raipur / Nava Raipur (Smart City)" },
    { label: "Sacred Lifeline", value: "Mahanadi, Indravati, Shivnath, Hasdeo" },
    { label: "Water Wonder", value: "Chitrakote Falls (Niagara of India on Indravati)" },
    { label: "Tribal Festival", value: "75-Day Bastar Dussehra (World's Longest Festival)" },
    { label: "Living Metal Craft", value: "GI-Tagged Bastar Bell Metal (Dokra) & Iron Craft" },
  ],
  quote: {
    text: "Jai Johar, Mor Chhattisgarhiya Bhai-Bahini — Salutations to the pure heart of the forest and the sacred soil of Dakshina Kosala.",
    author: "Soul of Chhattisgarhi Folk Heritage",
  },
  districts: {
    "Raipur": {
      name: "Raipur",
      tagline: "Capital Hub, Ancient Dudhadhari Math & Swami Vivekananda Ashram",
      headquarters: "Raipur",
      knownFor: "Vivekananda Sarovar (Burha Talab), Dudhadhari Temple, Marine Drive Telibandha, Nandan Van Zoo.",
      famousSpot: "Vivekananda Sarovar & Dudhadhari Math",
    },
    "Bastar": {
      name: "Bastar",
      tagline: "World Epicenter of Tribal Art & 75-Day Dussehra",
      headquarters: "Jagdalpur",
      knownFor: "Chitrakote Falls, Tirathgarh Falls, Bastar Palace, Kanger Valley National Park (limestone caves), Dokra casting.",
      famousSpot: "Chitrakote Falls & Kanger Valley",
    },
    "Bilaspur": {
      name: "Bilaspur",
      tagline: "High Court City & Ancient Citadel of Ratanpur",
      headquarters: "Bilaspur",
      knownFor: "Maa Mahamaya Temple in historic Ratanpur, Kanan Pendari Zoological Garden, Malhar Buddhist ruins.",
      famousSpot: "Ratanpur Mahamaya Temple & Malhar",
    },
    "Durg": {
      name: "Durg",
      tagline: "Twin City of Bhilai Steel & Educational Hub",
      headquarters: "Durg",
      knownFor: "Bhilai Steel Plant (largest steel producer in India), Maitri Bagh friendship zoo, Uwasaggaharam Parshwa Teerth.",
      famousSpot: "Bhilai Steel Plant & Maitri Bagh",
    },
    "Kabirdham": {
      name: "Kabirdham",
      tagline: "Khajuraho of Chhattisgarh & Maikal Hills",
      headquarters: "Kawardha",
      knownFor: "Bhoramdeo 11th-century carved stone temple, Sarodha Dam, Chilphi Ghati mountain pass.",
      famousSpot: "Bhoramdeo Temple & Chilphi Ghati",
    },
    "Mahasamund": {
      name: "Mahasamund",
      tagline: "Historic Capital of Sirpur on the Mahanadi",
      headquarters: "Mahasamund",
      knownFor: "Sirpur archaeological monuments (Lakshman Temple, Gandheshwar Temple, Anandaprabhu Kuti Vihara).",
      famousSpot: "Sirpur Lakshman Temple",
    },
    "Dantewada": {
      name: "Dantewada",
      tagline: "Sacred Shakti Peetha of Maa Danteshwari",
      headquarters: "Dantewada",
      knownFor: "Danteshwari Temple at the confluence of Shankini and Dankini rivers, Bailadila iron ore mines.",
      famousSpot: "Maa Danteshwari Temple & Bailadila",
    },
    "Surguja": {
      name: "Surguja",
      tagline: "Gateway to the Prehistoric Ramgarh Hills",
      headquarters: "Ambikapur",
      knownFor: "Ramgarh caves (Sitabenga and Jogimara, world's oldest amphitheatres with Brahmi inscriptions), Mainpat (Shimla of CG).",
      famousSpot: "Ramgarh Caves & Mainpat Plateau",
    },
  },
  landmarks: [
    {
      id: "chitrakote-falls",
      name: "Chitrakote Horseshoe Falls",
      district: "Bastar",
      lat: 19.2064,
      lon: 81.7011,
      category: "nature",
      description: "Often hailed as the 'Niagara of India', this colossal horse-shoe shaped waterfall on the Indravati River expands to over 300 meters in width during monsoon rains, plunging 29 meters into a roaring, misty gorge.",
      image: "/images/chhattisgarh/bafauri.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Chitrakote Horseshoe Falls.",
      gallery: [
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Front Elevation",
                caption: "Chitrakote Horseshoe Falls — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Aerial Drone View",
                caption: "Chitrakote Horseshoe Falls — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Chitrakote Horseshoe Falls — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Chitrakote Horseshoe Falls — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "bhoramdeo-temple",
      name: "Bhoramdeo Temple (Khajuraho of Chhattisgarh)",
      district: "Kabirdham",
      lat: 22.1225,
      lon: 81.1542,
      category: "monument",
      description: "Exquisite 11th-century Nagar-style stone temple built by King Ramchandra of the Nagavanshi dynasty amidst the Maikal mountain range, embellished with detailed erotic and spiritual sculptures carved into ochre sandstone.",
      image: "/images/chhattisgarh/bafauri.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Bhoramdeo Temple (Khajuraho of Chhattisgarh).",
      gallery: [
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Front Elevation",
                caption: "Bhoramdeo Temple (Khajuraho of Chhattisgarh) — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Aerial Drone View",
                caption: "Bhoramdeo Temple (Khajuraho of Chhattisgarh) — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Bhoramdeo Temple (Khajuraho of Chhattisgarh) — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Bhoramdeo Temple (Khajuraho of Chhattisgarh) — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "sirpur-monuments",
      name: "Sirpur Archaeological Group",
      district: "Mahasamund",
      lat: 21.3431,
      lon: 82.1772,
      category: "spiritual",
      description: "7th-century architectural marvel on the Mahanadi River, featuring the red-brick Lakshman Temple (one of India's finest surviving brick temples) and extensive Buddhist monasteries visited by Chinese traveler Xuanzang in 639 CE.",
      image: "/images/chhattisgarh/bafauri.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Sirpur Archaeological Group.",
      gallery: [
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Front Elevation",
                caption: "Sirpur Archaeological Group — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Aerial Drone View",
                caption: "Sirpur Archaeological Group — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Sirpur Archaeological Group — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Sirpur Archaeological Group — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "danteshwari-temple",
      name: "Maa Danteshwari Shakti Peetha",
      district: "Dantewada",
      lat: 18.8953,
      lon: 81.3508,
      category: "spiritual",
      description: "One of the 52 sacred Shakti Peethas of Goddess Sati, situated at the sacred confluence of the Shankini and Dankini rivers, serving as the presiding guardian deity of the Bastar tribal region.",
      image: "/images/chhattisgarh/bafauri.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Maa Danteshwari Shakti Peetha.",
      gallery: [
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Front Elevation",
                caption: "Maa Danteshwari Shakti Peetha — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Aerial Drone View",
                caption: "Maa Danteshwari Shakti Peetha — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Maa Danteshwari Shakti Peetha — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Maa Danteshwari Shakti Peetha — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "tirathgarh-falls",
      name: "Tirathgarh Step Waterfalls",
      district: "Bastar",
      lat: 18.9133,
      lon: 81.8644,
      category: "nature",
      description: "A breathtaking tiered cascade situated inside Kanger Valley National Park where the Mugabahar River divides into multiple milky streams sliding down 91 meters across stepped jagged rock surfaces.",
      image: "/images/chhattisgarh/bafauri.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Tirathgarh Step Waterfalls.",
      gallery: [
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Front Elevation",
                caption: "Tirathgarh Step Waterfalls — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Aerial Drone View",
                caption: "Tirathgarh Step Waterfalls — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Tirathgarh Step Waterfalls — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Tirathgarh Step Waterfalls — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "kotumsar-cave",
      name: "Kotumsar Subterranean Cave",
      district: "Bastar",
      lat: 18.8872,
      lon: 81.9333,
      category: "nature",
      description: "Deep subterranean limestone cave extending 330 meters below ground in Kanger Valley, featuring spectacular naturally sculpted stalactites and stalagmites and a dark subterranean pool home to rare blind cave fish.",
      image: "/images/chhattisgarh/bafauri.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Kotumsar Subterranean Cave.",
      gallery: [
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Front Elevation",
                caption: "Kotumsar Subterranean Cave — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Aerial Drone View",
                caption: "Kotumsar Subterranean Cave — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kotumsar Subterranean Cave — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/chhattisgarh/bafauri.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kotumsar Subterranean Cave — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
  ],
  cuisines: [
    {
      name: "Chhattisgarhi Rice Chila",
      hindiName: "चावल का चीला",
      tag: "Crisp Breakfast Crepe of Every Household",
      description:
        "Soft and crispy fermented rice batter crepes cooked on a flat iron griddle (Tawa) with minimal oil, seasoned with chopped green chilies, coriander, and cumin seeds, traditionally accompanied by spicy red tomato-garlic chutney.",
      origin: "Paddy Heartland of Central Plains",
      image: "/images/chhattisgarh/chila.jpg",
      dietary: "veg",
    },
    {
      name: "Fara (Steamed Rice Dumplings)",
      hindiName: "फरा",
      tag: "Guilt-Free Protein Delicacy of Festivals",
      description:
        "Cylindrical dumplings prepared from leftover cooked rice kneaded into fresh rice flour, steamed to perfection and tempered vigorously in mustard oil with sesame seeds, curry leaves, and green chilies.",
      origin: "Traditional Chhattisgarhi Kitchens",
      image: "/images/chhattisgarh/fara_dumplings.jpg",
      dietary: "veg",
    },
    {
      name: "Dubki Kadhi with Urad Dal",
      hindiName: "डुबकी कढ़ी",
      tag: "Unique No-Fry Lentil Dumpling Gravy",
      description:
        "An ingenious village preparation where seasoned black gram (urad dal) paste is dropped raw directly into boiling sour buttermilk gravy, poaching the dumplings without deep-frying for a healthy comfort meal.",
      origin: "Rural Villages of Durg & Bilaspur",
      image: "/images/chhattisgarh/dubki_kadhi.jpg",
      dietary: "veg",
    },
    {
      name: "Bafauri (Healthy Steamed Pakora)",
      hindiName: "बफौरी",
      tag: "Nutritious Chana Dal Snack",
      description:
        "A healthy alternative to fried pakoras, crafted from coarsely ground chana dal blended with onions, garlic, coriander, and spices, steamed in a traditional steamer until soft, hot, and aromatic.",
      origin: "Tribal & Rural Heartland",
      image: "/images/chhattisgarh/bafauri.jpg",
      dietary: "veg",
    },
    {
      name: "Chhattisgarhi Muthia",
      hindiName: "मुठिया",
      tag: "Savory Steamed Rice Rolls",
      description:
        "Savory rice flour rolls shaped by clenching in the fist (muthi), steamed and crisped in a hot tempering of mustard seeds and dried red chilies, enjoyed during winter teatime.",
      origin: "Mahanadi Basin Settlements",
      image: "/images/chhattisgarh/muthia.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Bastar Bell Metal (Dokra) Art",
      type: "art",
      description:
        "Ancient lost-wax bronze and brass casting technique practiced by the Ghadwa tribal community for over 4,000 years, creating timeless figurative statues of forest deities, musicians, elephants, and lamps with intricate beeswax threads.",
      significance:
        "Living prehistoric metallurgical craft sharing direct unbroken lineage with the Dancing Girl of Mohenjo-Daro.",
      image: "/images/chhattisgarh/bastar_dokra.jpg",
    },
    {
      name: "Bastar Dussehra Festival",
      type: "festival",
      description:
        "The world's longest festival celebrated over 75 continuous days in Jagdalpur, dedicated entirely to Goddess Danteshwari rather than Rama's victory, where tribal leaders construct a massive multi-wheeled wooden chariot pulled by thousands of tribal devotees.",
      significance:
        "600-year-old egalitarian democratic festival honoring nature, village deities, and tribal solidarity.",
      image: "/images/chhattisgarh/bastar_dussehra.jpg",
    },
    {
      name: "Panthi Folk Dance of Satnamis",
      type: "dance",
      description:
        "A fast, high-energy devotional folk dance of the Satnami community founded by Saint Guru Ghasidas, where white-clad male dancers perform breathtaking human pyramids, rhythmic clanging of Jhanj cymbals, and acrobatic leaps to celebrate spiritual equality and truth.",
      significance:
        "Dynamic spiritual expression celebrating human equality, abolition of caste, and devotion to the formless Divine.",
      image: "/images/chhattisgarh/panthi_dance.jpg",
    },
  ],
  attires: [
    {
      name: "Champa Kosa Silk Saree",
      gender: "women",
      fabric: "Pure Wild Kosa Tussar Silk",
      description:
        "GI-tagged world-renowned wild silk cultivated in the forests of Champa and Raigarh from the Antheraea mylitta silkworm, celebrated for its rich natural honey-gold sheen, breathability, and hand-embroidered tribal temple borders.",
      occasions: "Royal weddings, festive ceremonies, and prestigious cultural gatherings.",
      image: "/images/chhattisgarh/kosa_silk_saree.jpg",
    },
    {
      name: "Lugda & Polkha (Tribal Saree)",
      gender: "women",
      fabric: "Coarse Handspun Cotton with Natural Dyes",
      description:
        "Traditional handwoven cotton saree (Lugda) worn knee-length by tribal and rural women to facilitate working in rice paddy fields, paired with a matching blouse (Polkha) and heavy silver jewelry like the Paijan anklets and Suta necklace.",
      occasions: "Paddy harvesting, weekly haat bazaars, and local festivals.",
      image: "/images/chhattisgarh/lugda_saree.jpg",
    },
    {
      name: "Dhoti, Kurta & Chhattisgarhi Gamchha",
      gender: "men",
      fabric: "Handloom Cotton Fabric",
      description:
        "Traditional drape of Chhattisgarhi farmers consisting of a comfortable white cotton dhoti, a sleeveless or short-sleeved kurta, and a signature red and yellow checkered cotton gamchha used as a sun shield, shoulder wrap, or head pagri.",
      occasions: "Harvest celebrations, village panchayats, and festive dance recitals.",
      image: "/images/chhattisgarh/dhoti_kurta.jpg",
    },
  ],
  monuments: [
    {
      name: "Chitrakote Waterfalls",
      location: "Bastar District",
      era: "Natural Geological Monument",
      unesco: false,
      description:
        "Magnificent natural amphitheater where the Indravati river forms the widest waterfall in India, creating a thunderous white curtain that glows golden during sunsets.",
      image: "/images/chhattisgarh/chitrakote_falls.jpg",
      significance: "Premier natural aquatic landmark of Central India.",
    },
    {
      name: "Bhoramdeo Temple Complex",
      location: "Chauragaon, Kabirdham",
      era: "11th Century CE (Phani Nagavanshi Dynasty)",
      unesco: false,
      description:
        "Stone temple constructed on a 5-foot plinth, containing an ornate mandapa with 16 carved stone pillars, a sanctum enshrining a sculpted Shiva lingam, and erotic wall reliefs.",
      image: "/images/chhattisgarh/bhoramdeo_temple.jpg",
      significance: "Pinnacle of medieval stone sculpture and temple architecture in Chhattisgarh.",
    },
    {
      name: "Sirpur Lakshman Temple",
      location: "Sirpur, Mahasamund",
      era: "7th Century CE (Queen Vasata / Panduvamshis)",
      unesco: false,
      description:
        "One of the finest surviving burnt-brick temples in India, adorned with exquisitely carved stone entrance door jambs depicting the incarnations of Vishnu and Krishna Leela.",
      image: "/images/chhattisgarh/sirpur_monuments.jpg",
      significance: "Crucial transitional milestone in Indian brick and temple architecture.",
    },
    {
      name: "Maa Danteshwari Temple",
      location: "Dantewada",
      era: "14th Century CE (Chalukya Kings)",
      unesco: false,
      description:
        "Ancient temple constructed of black granite stone housing a six-armed black stone idol of Goddess Danteshwari holding a sword, conch, and shield, set within a fortified courtyard.",
      image: "/images/chhattisgarh/danteshwari_temple.jpg",
      significance: "Supreme spiritual guardian shrine of the Bastar tribal region.",
    },
  ],
  languages: [
    {
      name: "Chhattisgarhi (छत्तीसगढ़ी)",
      script: "Devanagari Script",
      speakers: "18+ Million",
      greeting: "Jai Johar (जय जोहार)",
      meaning: "Salutations of deep respect and unity to all beings",
      description:
        "An Eastern Hindi Indo-Aryan language carrying sweet, melodious rural intonations, rich folk literature, and the famous Karma and Dadariya romantic songs.",
    },
    {
      name: "Gondi & Halbi",
      script: "Devanagari Script",
      speakers: "3+ Million (Bastar Region)",
      greeting: "Seva Johar (सेवा जोहार)",
      meaning: "Respectful service and fraternal greetings",
      description:
        "Ancient indigenous languages of the Gond and Halba tribes spoken across Bastar and Dandakaranya, preserving rich oral epics of forest ancestors.",
    },
  ],
  luminaries: [
    {
      name: "Guru Ghasidas",
      image: "/images/luminaries/guru_ghasidas.jpg",
      era: "1756 – 1850 CE",
      title: "Reformer Saint & Founder of the Satnami Panth",
      contribution:
        "Great egalitarian spiritual philosopher born in Girodpuri who championed monotheism, radical social equality, abolition of untouchability, and vegetarianism with his supreme doctrine 'Mankhe Mankhe Ek Samaan' (All human beings are born equal).",
    },
    {
      name: "Veer Narayan Singh",
      image: "/images/luminaries/veer_narayan_singh.jpg",
      era: "1795 – 1857 CE",
      title: "First Freedom Martyr of Chhattisgarh",
      contribution:
        "Courageous landlord of Sonakhan who opened his grain stores to save starving tribal peasants during the catastrophic 1856 famine and led an armed revolt against the British East India Company in the 1857 Uprising.",
    },
    {
      name: "Teejan Bai",
      image: "/images/luminaries/teejan_bai.jpg",
      era: "1956 – Present",
      title: "Grandmaster of Pandavani & Padma Vibhushan",
      contribution:
        "Legendary performing artist from Ganiyari, Durg, who popularized the Kapalik style of Pandavani (musical storytelling of the Mahabharata) across the globe, wielding her Tambura as Bhima's mace with electrifying vocal drama.",
    },
  ],
}
