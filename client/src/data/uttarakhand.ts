import type { StateData } from "../types/state"

export const uttarakhandData: StateData = {
  id: "uttarakhand",
  name: "Uttarakhand",
  hindiName: "उत्तराखंड",
  capital: "Dehradun (Winter) / Gairsain (Summer)",
  tagline: "Devbhoomi — Land of the Gods, Yoga Capital & Origin of Ganga",
  overview:
    "Crowned by the sacred heights of Nanda Devi and Trishul, Uttarakhand is the eternal Devbhoomi of Sanatan Dharma where the divine rivers Ganga and Yamuna descend from glacial heavens onto earth. From the Himalayan Char Dham shrines of Kedarnath, Badrinath, Gangotri, and Yamunotri to the world yoga capital of Rishikesh, the evening aartis of Haridwar, and the UNESCO Valley of Flowers, Uttarakhand is the spiritual crown of India.",
  ancientNames: ["Kedar Khanda", "Manas Khanda", "Uttarakuru", "Uttaranchal"],
  keyStats: [
    { label: "Districts", value: "13" },
    { label: "Capitals", value: "Dehradun (Winter) / Gairsain (Summer)" },
    { label: "Sacred Glacial Rivers", value: "Bhagirathi, Alaknanda, Mandakini, Yamuna" },
    { label: "Spiritual Crown", value: "Chhota Char Dham (Kedarnath, Badrinath, Gangotri, Yamunotri)" },
    { label: "World Yoga Capital", value: "Rishikesh (Gateway to the Garhwal Himalayas)" },
    { label: "UNESCO Wonder", value: "Nanda Devi & Valley of Flowers National Parks" },
  ],
  quote: {
    text: "Har Har Gange — Where the sky meets the snow and rivers descend as nectar, human devotion finds its highest liberation.",
    author: "Eternal Himalayan Chant of Uttarakhand",
  },
  districts: {
    "Dehradun": {
      name: "Dehradun",
      tagline: "Educational Hub of the Doon Valley & Rishikesh Gateway",
      headquarters: "Dehradun",
      knownFor: "Rishikesh (World Yoga Capital), Robber's Cave (Guchhupani), Forest Research Institute, Sahastradhara.",
      famousSpot: "Rishikesh Ram Jhula & Forest Research Institute",
    },
    "Haridwar": {
      name: "Haridwar",
      tagline: "Gateway of the Gods & Sacred Har Ki Pauri Ghats",
      headquarters: "Haridwar",
      knownFor: "Har Ki Pauri evening Ganga Aarti, Kumbh Mela congregation, Mansa Devi temple, Chandi Devi temple.",
      famousSpot: "Har Ki Pauri & Ganga Aarti",
    },
    "Rudraprayag": {
      name: "Rudraprayag",
      tagline: "Holy Seat of Kedarnath Jyotirlinga & River Confluence",
      headquarters: "Rudraprayag",
      knownFor: "Kedarnath Temple (high-altitude Jyotirlinga), Madhyamaheshwar, confluence of Mandakini and Alaknanda rivers.",
      famousSpot: "Kedarnath Temple & Prayag Confluence",
    },
    "Chamoli": {
      name: "Chamoli",
      tagline: "Abode of Badrinath, Valley of Flowers & Hemkund Sahib",
      headquarters: "Gopeshwar",
      knownFor: "Badrinath Temple, Valley of Flowers (UNESCO site), Hemkund Sahib, Auli ski slopes, Mana (First Indian Village).",
      famousSpot: "Badrinath Shrine & Valley of Flowers",
    },
    "Uttarkashi": {
      name: "Uttarkashi",
      tagline: "Cradle of Gangotri & Yamunotri Sacred Sources",
      headquarters: "Uttarkashi",
      knownFor: "Gangotri Temple (origin of Bhagirathi), Yamunotri Temple, Gaumukh glacier, Nehru Institute of Mountaineering.",
      famousSpot: "Gangotri & Gaumukh Glacier",
    },
    "Nainital": {
      name: "Nainital",
      tagline: "City of Shimmering Lakes & Naini Devi Temple",
      headquarters: "Nainital",
      knownFor: "Naini Lake boat rides, Naina Devi temple, Snow View Point, Jim Corbett National Park gateway.",
      famousSpot: "Naini Lake & Naina Devi Temple",
    },
    "Almora": {
      name: "Almora",
      tagline: "Cultural Capital of Kumaon & Bal Mithai",
      headquarters: "Almora",
      knownFor: "Kasai Devi temple (cosmic magnetic field), Jageshwar Dham cluster of 124 stone temples, Bal Mithai sweet makers.",
      famousSpot: "Jageshwar Dham & Kasar Devi",
    },
    "Pithoragarh": {
      name: "Pithoragarh",
      tagline: "Little Kashmir & Kailash Mansarovar Gateway",
      headquarters: "Pithoragarh",
      knownFor: "Pithoragarh Fort, Munsiyari Himalayan viewpoints (Panchachuli peaks), gateway to Kailash Mansarovar yatra.",
      famousSpot: "Munsiyari Panchachuli View",
    },
  },
  landmarks: [
    {
      id: "kedarnath-temple",
      name: "Kedarnath Jyotirlinga Temple",
      district: "Rudraprayag",
      lat: 30.7352,
      lon: 79.0669,
      category: "spiritual",
      description: "One of the twelve revered Jyotirlingas of Lord Shiva standing at 3,583 meters above sea level near the Mandakini River against the snow-bound Kedarnath mountain peak, built of massive interlocking grey stone slabs by Adi Shankaracharya in the 8th century CE.",
      image: "/images/uttarakhand/aipan_folk_art.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Kedarnath Jyotirlinga Temple.",
      gallery: [
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Front Elevation",
                caption: "Kedarnath Jyotirlinga Temple — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Aerial Drone View",
                caption: "Kedarnath Jyotirlinga Temple — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kedarnath Jyotirlinga Temple — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kedarnath Jyotirlinga Temple — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "badrinath-temple",
      name: "Badrinath Dham Temple",
      district: "Chamoli",
      lat: 30.7448,
      lon: 79.4938,
      category: "spiritual",
      description: "One of the four supreme Char Dham pilgrimage destinations in India, situated along the Alaknanda River between the Nar and Narayana mountain ranges, enshrining a black stone deity of Lord Badrinarayan under a brightly colored traditional facade.",
      image: "/images/uttarakhand/aipan_folk_art.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Badrinath Dham Temple.",
      gallery: [
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Front Elevation",
                caption: "Badrinath Dham Temple — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Aerial Drone View",
                caption: "Badrinath Dham Temple — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Badrinath Dham Temple — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Badrinath Dham Temple — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "laxman-jhula-rishikesh",
      name: "Laxman Jhula & Rishikesh Ghats",
      district: "Dehradun / Pauri Garhwal",
      lat: 30.1342,
      lon: 78.3308,
      category: "monument",
      description: "Historic iron suspension bridge spanning the emerald waters of the holy Ganga in Rishikesh, surrounded by ashrams, yoga meditation schools, and temples where spiritual seekers from across the globe gather at Triveni Ghat.",
      image: "/images/uttarakhand/aipan_folk_art.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Laxman Jhula & Rishikesh Ghats.",
      gallery: [
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Front Elevation",
                caption: "Laxman Jhula & Rishikesh Ghats — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Aerial Drone View",
                caption: "Laxman Jhula & Rishikesh Ghats — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Laxman Jhula & Rishikesh Ghats — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Laxman Jhula & Rishikesh Ghats — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "har-ki-pauri",
      name: "Har Ki Pauri Ghats & Ganga Aarti",
      district: "Haridwar",
      lat: 29.9575,
      lon: 78.172,
      category: "spiritual",
      description: "The most sacred bathing ghat in Haridwar where the Ganga enters the Indo-Gangetic plains, believed to bear the divine footprint of Lord Vishnu on a stone wall, renowned for its daily sunset Ganga Aarti where thousands of floating leaf lamps illuminate the river.",
      image: "/images/uttarakhand/aipan_folk_art.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Har Ki Pauri Ghats & Ganga Aarti.",
      gallery: [
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Front Elevation",
                caption: "Har Ki Pauri Ghats & Ganga Aarti — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Aerial Drone View",
                caption: "Har Ki Pauri Ghats & Ganga Aarti — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Har Ki Pauri Ghats & Ganga Aarti — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Har Ki Pauri Ghats & Ganga Aarti — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "valley-of-flowers",
      name: "Valley of Flowers National Park",
      district: "Chamoli",
      lat: 30.728,
      lon: 79.6053,
      category: "nature",
      description: "UNESCO World Heritage high-altitude alpine meadow nestled in the Garhwal Himalayas, carpeted with over 500 varieties of endemic alpine blooms including the rare Blue Poppy and Brahma Kamal during the monsoon months.",
      image: "/images/uttarakhand/aipan_folk_art.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Valley of Flowers National Park.",
      gallery: [
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Front Elevation",
                caption: "Valley of Flowers National Park — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Aerial Drone View",
                caption: "Valley of Flowers National Park — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Valley of Flowers National Park — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Valley of Flowers National Park — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "tungnath-temple",
      name: "Tungnath (Highest Shiva Shrine)",
      district: "Rudraprayag",
      lat: 30.4883,
      lon: 79.2172,
      category: "spiritual",
      description: "The highest of the five sacred Panch Kedar temples, perched at an altitude of 3,680 meters (12,073 feet) just below the Chandrashila peak, with thousand-year-old stone architecture offering panoramic views of the Garhwal Himalayas.",
      image: "/images/uttarakhand/aipan_folk_art.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Tungnath (Highest Shiva Shrine).",
      gallery: [
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Front Elevation",
                caption: "Tungnath (Highest Shiva Shrine) — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Aerial Drone View",
                caption: "Tungnath (Highest Shiva Shrine) — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Tungnath (Highest Shiva Shrine) — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/uttarakhand/aipan_folk_art.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Tungnath (Highest Shiva Shrine) — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
  ],
  cuisines: [
    {
      name: "Kafuli (Green Leaf Stew)",
      hindiName: "कफूली",
      tag: "Nutrient-Rich Mountain Green Elixir",
      description:
        "Wholesome, thick green stew prepared from fresh wild spinach and fenugreek leaves slow-cooked with rice paste (Aalan) and curd, tempered in mustard oil with aromatic mountain cumin (Jambhoo) and garlic.",
      origin: "Garhwal & Kumaon Valleys",
      image: "/images/uttarakhand/kafuli.jpg",
      dietary: "veg",
    },
    {
      name: "Almora Bal Mithai",
      hindiName: "बाल मिठाई",
      tag: "GI-Tagged Chocolate Fudge of Kumaon",
      description:
        "Fabulous brown fudge prepared by roasting khoya (milk solids) for hours until it turns a deep chocolate color, formed into neat cubes and rolled generously in tiny white sugar globules (sugar balls).",
      origin: "Almora, Kumaon",
      image: "/images/uttarakhand/bal_mithai.jpg",
      dietary: "veg",
    },
    {
      name: "Singori",
      hindiName: "सिंगोड़ी",
      tag: "Fragrant Cone Sweet Wrapped in Malu Leaves",
      description:
        "A delicate sweet prepared from fresh khoya, sugar, and grated coconut, wrapped neatly in the fresh green triangular leaf of the wild Malu creeper, which imparts a subtle natural forest aroma to the confection.",
      origin: "Tehri Garhwal & Almora",
      image: "/images/uttarakhand/singori.jpg",
      dietary: "veg",
    },
    {
      name: "Chainsoo Dal",
      hindiName: "चैंसूं दाल",
      tag: "Roasted Black Gram Mountain Comfort",
      description:
        "Fragrant black gram (urad dal) dry-roasted on an iron griddle, ground coarsely on a stone silbatta, and simmered slowly in an iron wok (kadhai) with ginger, garlic, and wild herbs, imparting a dark color and earthy flavor.",
      origin: "Traditional Garhwali Kitchens",
      image: "/images/uttarakhand/chainsoo_dal.jpg",
      dietary: "veg",
    },
    {
      name: "Mandua (Finger Millet) Roti with Ghee",
      hindiName: "मंडुवे की रोटी",
      tag: "Wholesome Gluten-Free Mountain Staple",
      description:
        "Dark, rustic flatbread made from organic finger millet (Koda/Mandua) flour grown on mountain terrace farms, served hot slathered with pure cow ghee and paired with spicy homemade Bhang ki Chutney.",
      origin: "Terraced Himalayan Farms Statewide",
      image: "/images/uttarakhand/mandua_roti.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Haridwar & Rishikesh Ganga Aarti",
      type: "festival",
      description:
        "Daily spiritual evening ceremony performed at sunset on the banks of the sacred river at Har Ki Pauri and Parmarth Niketan, where priests in traditional robes chant Vedic hymns while swinging massive multi-tiered brass oil lamps in sync with devotional bells and conches.",
      significance:
        "Supreme devotional thanksgiving ritual venerating the mother river for sustaining millions of lives across India.",
      image: "/images/uttarakhand/haridwar_ganga_aarti.jpg",
    },
    {
      name: "Choliya Sword Folk Dance",
      type: "dance",
      description:
        "A thousand-year-old martial folk dance of the Kumaon region performed during wedding processions and religious festivals by male dancers dressed in colorful warrior tunics, wielding swords and brass shields to energetic beats of the Turi, Ransingha horn, and Dhol-Damau.",
      significance:
        "Historic warrior Rajput tradition performed to ward off evil spirits during matrimonial journeys.",
      image: "/images/uttarakhand/choliya_dance.jpg",
    },
    {
      name: "Aipan Folk Art of Kumaon",
      type: "art",
      description:
        "Sacred ritual floor and wall painting practiced by Kumaoni women using natural red ochre clay (Geru) as a canvas base and drawing intricate geometric motifs, lotus blossoms, and footprints of Goddess Lakshmi with white rice-paste batter (Biswar).",
      significance:
        "Ancient ritual decorative tradition inviting auspicious cosmic blessings into the home during Diwali, weddings, and pujas.",
      image: "/images/uttarakhand/aipan_folk_art.jpg",
    },
  ],
  attires: [
    {
      name: "Kumaoni Pichora (Rangwali Pichora)",
      gender: "women",
      fabric: "Silk or Fine Muslin in Sacred Saffron-Yellow & Red",
      description:
        "The sacred, auspicious ceremonial veil of Kumaoni brides and married women, dyed in bright saffron-yellow and printed by hand with auspicious red motifs including the Sun, Moon, Conch, Bell, and central Swastika medallion.",
      occasions: "Weddings, Namkaran baby naming, and sacred religious pujas.",
      image: "/images/uttarakhand/kumaoni_pichora.jpg",
    },
    {
      name: "Garhwali Ghagri, Kurti & Dhaatu",
      gender: "women",
      fabric: "Cotton or Wool with Silver Ornaments",
      description:
        "Traditional dress worn by Garhwali women consisting of a flared skirt (Ghagri), long-sleeved tunic (Kurti), and a matching headscarf (Dhaatu), accessorized with the magnificent oversized gold nose ring (Nath) and Hansli collar necklace.",
      occasions: "Village festivals, fairs, and community dances.",
      image: "/images/uttarakhand/garhwali_ghagra.jpg",
    },
    {
      name: "Pahadi Topi, Kurta & Sadri (Waistcoat)",
      gender: "men",
      fabric: "Handspun Wool or Tweed Fabric",
      description:
        "Dignified attire of Uttarakhand men consisting of a wool or tweed Nehru waistcoat (Sadri) worn over a kurta-pyjama, crowned by the traditional round black or grey Pahadi wool cap adorned with a Brahma Kamal feather or pin.",
      occasions: "Social gatherings, formal ceremonies, and state festivities.",
      image: "/images/uttarakhand/pahadi_topi.jpg",
    },
  ],
  monuments: [
    {
      name: "Kedarnath Temple",
      location: "Kedarnath, Rudraprayag District",
      era: "8th Century CE (Adi Shankaracharya)",
      unesco: false,
      description:
        "A monumental granite stone temple perched high in the Himalayas at 3,583 meters, built of heavy interlocking stone blocks that miraculously survived the catastrophic 2013 flash floods.",
      image: "/images/uttarakhand/kedarnath_temple.jpg",
      significance: "Supreme Himalayan Jyotirlinga and pinnacle of Shiva devotion in India.",
    },
    {
      name: "Badrinath Temple",
      location: "Badrinath, Chamoli District",
      era: "8th Century CE",
      unesco: false,
      description:
        "Ancient temple sanctuary dedicated to Lord Vishnu in his meditative posture, standing beside the natural hot sulfur spring of Tapt Kund along the Alaknanda River.",
      image: "/images/uttarakhand/badrinath_temple.jpg",
      significance: "Foremost pilgrimage shrine among the revered all-India Char Dham.",
    },
    {
      name: "Laxman Jhula & Suspension Bridges",
      location: "Rishikesh, Dehradun",
      era: "1929 CE",
      unesco: false,
      description:
        "Historic 450-foot-long iron suspension bridge suspended across the sacred Ganga River, connecting iconic multi-storied temples like Tera Manzil (Trimbakeshwar).",
      image: "/images/uttarakhand/laxman_jhula_rishikesh.jpg",
      significance: "Global visual symbol of Rishikesh as the World Capital of Yoga.",
    },
    {
      name: "Tungnath Mahadev Temple",
      location: "Tungnath, Rudraprayag District",
      era: "Over 1,000 Years Old (Panch Kedar)",
      unesco: false,
      description:
        "Ancient stone temple dedicated to Lord Shiva situated at 12,073 feet, holding the distinction of being the highest Hindu temple dedicated to Shiva in the world.",
      image: "/images/uttarakhand/tungnath_temple.jpg",
      significance: "Highest Shiva shrine in the world and revered Panch Kedar site.",
    },
  ],
  languages: [
    {
      name: "Garhwali (गढ़वाली)",
      script: "Devanagari Script",
      speakers: "2.5+ Million (Garhwal Region)",
      greeting: "Namaskar (नमस्कार)",
      meaning: "Respectful greetings to you",
      description:
        "An ancient Central Pahari language spoken across Chamoli, Pauri, Tehri, and Uttarkashi, possessing an extensive heritage of oral ballads (Jagar), folk tales, and mountain songs.",
    },
    {
      name: "Kumaoni (कुमाऊँनी)",
      script: "Devanagari Script",
      speakers: "2+ Million (Kumaon Region)",
      greeting: "Pailag (पैलाग)",
      meaning: "I touch your feet in deep reverence",
      description:
        "Central Pahari language of Almora, Nainital, and Pithoragarh, renowned for the devotional Jagar spirit invocations and the poetry of Lokratna Gumani Pant.",
    },
    {
      name: "Hindi (Official Language)",
      script: "Devanagari",
      speakers: "10+ Million",
      greeting: "Namaste (नमस्ते)",
      meaning: "Universal peace and greetings",
      description:
        "Official language of state education, administrative governance, and pilgrim interaction.",
    },
  ],
  luminaries: [
    {
      name: "Adi Shankaracharya",
      image: "/images/luminaries/adi_shankaracharya.jpg",
      era: "788 – 820 CE",
      title: "Supreme Philosopher of Advaita Vedanta",
      contribution:
        "Great philosopher-monk who traveled to the Himalayas, established the northern spiritual seat Jyotirmath (Badrinath), renovated Kedarnath and Badrinath temples, and attained Mahasamadhi in the sacred heights of Kedarnath at age 32.",
    },
    {
      name: "Gaura Devi & Sundarlal Bahuguna",
      image: "/images/luminaries/gaura_devi_sundarlal_bahuguna.jpg",
      era: "1925 – 2021 CE",
      title: "Pioneers of the Historic Chipko Ecological Movement",
      contribution:
        "Courageous mountain activists from Reni village and Tehri who hugged ancient trees to prevent commercial logging in the 1970s, inspiring ecological conservation movements worldwide.",
    },
    {
      name: "Govind Ballabh Pant",
      image: "/images/luminaries/govind_ballabh_pant.jpg",
      era: "1887 – 1961 CE",
      title: "Bharat Ratna & Premier of United Provinces",
      contribution:
        "Statesman and freedom fighter from Almora who served as India's Union Home Minister, established Hindi as an official language, and spearheaded land abolition reforms.",
    },
  ],
}
