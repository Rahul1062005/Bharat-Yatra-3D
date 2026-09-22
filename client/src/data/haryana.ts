import type { StateData } from "../types/state"

export const haryanaData: StateData = {
  id: "haryana",
  name: "Haryana",
  hindiName: "हरियाणा",
  capital: "Chandigarh (Shared Capital)",
  tagline: "The Land of the Bhagavad Gita, Vedic Epics & Athletic Valor",
  overview:
    "Etymologically meaning the 'Abode of God' (Hari-Ayana), Haryana is one of the oldest cultural crucibles of human civilization where the sacred Saraswati River once flowed. It is the sacred battlefield of Kurukshetra where Lord Krishna delivered the timeless wisdom of the Bhagavad Gita to Arjuna, the cradle of the ancient Indus Valley cities like Rakhigarhi, India's leading dairy hub, and the undisputed powerhouse of Olympic and wrestling champions.",
  ancientNames: ["Brahmavarta", "Kurukshetra", "Kuru Kingdom", "Haritana"],
  keyStats: [
    { label: "Districts", value: "22" },
    { label: "Capital", value: "Chandigarh" },
    { label: "Sacred Grounds", value: "Kurukshetra (Battlefield of Mahabharata)" },
    { label: "Prehistoric Wonder", value: "Rakhigarhi (Largest Indus Valley Site)" },
    { label: "Dairy & Agro Hub", value: "Land of Murrah Buffalo & Basmati Rice" },
    { label: "Sports Capital", value: "Produces Over 30% of India's Olympic Medals" },
  ],
  quote: {
    text: "Karmanye Vadhikaraste Ma Phaleshu Kadachana — You have a right only to work, never to its fruits.",
    author: "Shrimad Bhagavad Gita (Delivered at Jyotisar, Kurukshetra)",
  },
  districts: {
    "Kurukshetra": {
      name: "Kurukshetra",
      tagline: "Holy Land of the Gita & Brahma Sarovar",
      headquarters: "Thanesar",
      knownFor: "Brahma Sarovar, Jyotisar (Gita birthplace banyan tree), Sannihit Sarovar, Sheikh Chilli's Tomb.",
      famousSpot: "Brahma Sarovar & Jyotisar",
    },
    "Gurugram": {
      name: "Gurugram",
      tagline: "Millennium Tech City of Guru Dronacharya",
      headquarters: "Gurugram",
      knownFor: "Cyber Hub corporate skyline, Sheetla Mata Mandir, Sultanpur National Park (bird haven), Kingdom of Dreams.",
      famousSpot: "Cyber Hub & Sultanpur Bird Sanctuary",
    },
    "Hisar": {
      name: "Hisar",
      tagline: "City of Firoz Shah Tughlaq & Steel Capital",
      headquarters: "Hisar",
      knownFor: "Firoz Shah Palace complex & Lat ki Masjid, Rakhigarhi Harappan excavation, Central Sheep Breeding Farm.",
      famousSpot: "Firoz Shah Fort & Rakhigarhi",
    },
    "Ambala": {
      name: "Ambala",
      tagline: "Twin City of Scientific Instruments & Air Base",
      headquarters: "Ambala",
      knownFor: "Major military airbase (Rafale squadron), scientific and surgical instruments manufacturing, cloth market.",
      famousSpot: "Patel Park & Air Force Heritage",
    },
    "Panipat": {
      name: "Panipat",
      tagline: "City of Three Historic Battles & Handloom Textiles",
      headquarters: "Panipat",
      knownFor: "Battlefield of three historic Panipat battles, Kabuli Bagh Mosque, Tomb of Bu Ali Shah Qalandar, textile recyclers.",
      famousSpot: "Kala Amb Battle Memorial & Kabuli Bagh",
    },
    "Faridabad": {
      name: "Faridabad",
      tagline: "Industrial Giant & Surajkund Crafts Haven",
      headquarters: "Faridabad",
      knownFor: "Surajkund ancient sun reservoir and International Crafts Mela, Badkhal lake, Raja Nahar Singh Palace.",
      famousSpot: "Surajkund Reservoir & Crafts Mela",
    },
    "Panchkula": {
      name: "Panchkula",
      tagline: "Gateway to the Morni Hills & Pinjore Gardens",
      headquarters: "Panchkula",
      knownFor: "Yadavindra (Pinjore) Mughal Gardens, Mansa Devi temple, Morni Hills (only hill station in Haryana).",
      famousSpot: "Pinjore Gardens & Mansa Devi",
    },
    "Rohtak": {
      name: "Rohtak",
      tagline: "Cultural Heartland of Haryanvi Sports & Rewari",
      headquarters: "Rohtak",
      knownFor: "Tilyar Lake, Rohtak Revdi sweet makers, Pandit Neki Ram Sharma Government College, wrestling akharas.",
      famousSpot: "Tilyar Lake & Traditional Akharas",
    },
  },
  landmarks: [
    {
      id: "brahma-sarovar",
      name: "Brahma Sarovar of Kurukshetra",
      district: "Kurukshetra",
      lat: 29.9634,
      lon: 76.8335,
      category: "spiritual",
      description: "A colossal sacred water reservoir measuring 1,800 feet by 1,400 feet, believed in Hindu cosmology to be the cradle where Lord Brahma created the universe, surrounded by grand stepped bathing ghats that host millions of pilgrims during solar eclipses.",
      image: "/images/haryana/asigarh_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Brahma Sarovar of Kurukshetra.",
      gallery: [
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Front Elevation",
                caption: "Brahma Sarovar of Kurukshetra — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Brahma Sarovar of Kurukshetra — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Brahma Sarovar of Kurukshetra — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Brahma Sarovar of Kurukshetra — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "jyotisar",
      name: "Jyotisar Sacred Banyan Tree",
      district: "Kurukshetra",
      lat: 29.957,
      lon: 76.7725,
      category: "spiritual",
      description: "The hallowed site where Lord Krishna is believed to have revealed the 700 verses of the Bhagavad Gita and his cosmic Vishwaroopa form to the grief-stricken warrior Arjuna under an immortal banyan tree on the eve of the Kurukshetra war.",
      image: "/images/haryana/asigarh_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Jyotisar Sacred Banyan Tree.",
      gallery: [
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Front Elevation",
                caption: "Jyotisar Sacred Banyan Tree — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Jyotisar Sacred Banyan Tree — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Jyotisar Sacred Banyan Tree — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Jyotisar Sacred Banyan Tree — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "pinjore-gardens",
      name: "Yadavindra (Pinjore) Mughal Gardens",
      district: "Panchkula",
      lat: 30.7937,
      lon: 76.9152,
      category: "monument",
      description: "A 17th-century terraced Mughal pleasure garden built by architect Fidai Khan under Aurangzeb and restored by Maharaja Yadavindra Singh of Patiala, cascading through seven ascending terraces of fountains, water pavilions, and manicured orchards.",
      image: "/images/haryana/asigarh_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Yadavindra (Pinjore) Mughal Gardens.",
      gallery: [
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Front Elevation",
                caption: "Yadavindra (Pinjore) Mughal Gardens — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Yadavindra (Pinjore) Mughal Gardens — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Yadavindra (Pinjore) Mughal Gardens — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Yadavindra (Pinjore) Mughal Gardens — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "sheikh-chilli-tomb",
      name: "Tomb of Sheikh Chilli",
      district: "Kurukshetra",
      lat: 29.9806,
      lon: 76.8285,
      category: "monument",
      description: "An elegant white marble-domed mausoleum built in Persian Mughal architectural style resting on an octagonal sandstone terrace, dedicated to the Sufi saint Abd-ur-Rahim (Sheikh Chilli), the spiritual mentor of Mughal Prince Dara Shikoh.",
      image: "/images/haryana/asigarh_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Tomb of Sheikh Chilli.",
      gallery: [
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Front Elevation",
                caption: "Tomb of Sheikh Chilli — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Tomb of Sheikh Chilli — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Tomb of Sheikh Chilli — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Tomb of Sheikh Chilli — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "rakhigarhi",
      name: "Rakhigarhi Harappan Archaeological Site",
      district: "Hisar",
      lat: 29.2894,
      lon: 76.1136,
      category: "monument",
      description: "The largest known city of the ancient Indus Valley (Harappan) Civilization sprawling across 350 hectares on the dried-up bed of the paleo-Saraswati River, revealing 5,000-year-old planned drainage systems, terracotta kilns, and bronze artifacts.",
      image: "/images/haryana/asigarh_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Rakhigarhi Harappan Archaeological Site.",
      gallery: [
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Front Elevation",
                caption: "Rakhigarhi Harappan Archaeological Site — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Rakhigarhi Harappan Archaeological Site — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Rakhigarhi Harappan Archaeological Site — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Rakhigarhi Harappan Archaeological Site — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
    {
      id: "surajkund",
      name: "Surajkund Ancient Sun Reservoir",
      district: "Faridabad",
      lat: 28.4891,
      lon: 77.2831,
      category: "monument",
      description: "A semicircular 10th-century stone step-reservoir built by Tomar King Suraj Pal with stepped stone embankments resembling a Roman amphitheater, host to the annual Surajkund International Crafts Mela celebrating rural global artisans.",
      image: "/images/haryana/asigarh_fort.jpg",
      era: "Historical & Living Heritage Era",
      builtBy: "Historic Rulers & Architects of the Region",
      architecturalStyle: "Indigenous Classical Indian Architecture",
      significance: "Iconic monument embodying the timeless civilizational heritage of Surajkund Ancient Sun Reservoir.",
      gallery: [
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Front Elevation",
                caption: "Surajkund Ancient Sun Reservoir — Iconic grand facade and architectural overview."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Aerial Drone View",
                caption: "Surajkund Ancient Sun Reservoir — Expansive panoramic perspective capturing the surrounding heritage landscape."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Surajkund Ancient Sun Reservoir — Intricate heritage craftsmanship and authentic design motifs."
        },
        {
                url: "/images/haryana/asigarh_fort.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Surajkund Ancient Sun Reservoir — Bathed in radiant golden twilight showcasing its timeless cultural majesty."
        }
]
    },
  ],
  cuisines: [
    {
      name: "Bajra Khichdi with Desi Ghee",
      hindiName: "बाजरे की खिचड़ी",
      tag: "Rustic Winter Superfood of Rural Haryana",
      description:
        "Nutritious, slow-simmered porridge of coarsely pounded pearl millet (bajra) and split green gram (moong dal), cooked in clay pots and topped with generous ladles of fresh home-churned white butter (makkhan) or pure cow ghee.",
      origin: "Rural Villages of Hisar & Rohtak",
      image: "/images/haryana/bajra_khichdi.jpg",
      dietary: "veg",
    },
    {
      name: "Sarson Ka Saag with Makki Roti",
      hindiName: "सरसों का साग और मक्की की रोटी",
      tag: "Hearty Winter Platter of Agrarian Pride",
      description:
        "Tender mustard greens slow-cooked with bathua, spinach, and green chilies, mashed to a velvety consistency with cornmeal, and served alongside thick cornmeal rotis and sweet sugarcane jaggery (gud).",
      origin: "Agricultural Heartland of Haryana",
      image: "/images/haryana/sarson_ka_saag.jpg",
      dietary: "veg",
    },
    {
      name: "Malpua & Rohtak Churma",
      hindiName: "रोहतक का चूरमा",
      tag: "Rich Energy Feast of Traditional Wrestlers",
      description:
        "Whole-wheat rotis mashed hot by hand and kneaded with generous quantities of pure desi ghee and bura sugar or crushed jaggery, packed with energy for athletes and wrestlers (pehlwans).",
      origin: "Akharas of Rohtak, Jhajjar & Sonipat",
      image: "/images/haryana/churma.jpg",
      dietary: "veg",
    },
    {
      name: "Haryanvi Kadhi Pakora",
      hindiName: "हरियाणवी कढ़ी पकोड़ा",
      tag: "Tangy Spiced Buttermilk Comfort",
      description:
        "Crisp, fluffy gram-flour fritters (pakoras) simmered in a luscious tangy gravy of fermented sour buttermilk and chickpea flour tempered with cumin, fenugreek seeds, and whole dried red chilies.",
      origin: "Traditional Domestic Kitchens",
      image: "/images/haryana/kadhi_pakora.jpg",
      dietary: "veg",
    },
    {
      name: "Haryanvi Makkhan Lassi",
      hindiName: "हरियाणवी मीठी लस्सी",
      tag: "Frothy Dairy Elixir of the Murrah Belt",
      description:
        "Thick, creamy churned sweet curd served in large earthen kulhads, crowned with a thick dollop of fresh yellow clotted cream (malai) and home-churned butter from Murrah buffalo milk.",
      origin: "Statewide Dairy Hub",
      image: "/images/haryana/haryanvi_lassi.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Saang Folk Theatre",
      type: "art",
      description:
        "Traditional open-air folk theatre performed on elevated wooden platforms (Rangmanch), where actors dramatize mythological tales and historic ballads of chivalry through poetic verse, comedic interludes, and folk melodies accompanied by the harmonium and dholak.",
      significance:
        "Pioneering secular folk performance art popularized by legendary masters Pandit Deep Chand Bahman and Lakhmi Chand.",
      image: "/images/haryana/saang_folk_theatre.jpg",
    },
    {
      name: "Ragini Folk Ballad Tradition",
      type: "music",
      description:
        "Narrative storytelling musical form sung in high-pitched resonant voices, detailing historical heroism, moral duties, and philosophy, drawing thousands of rapt listeners at village chaupals across Haryana.",
      significance:
        "The heartbeat of Haryanvi rural oral literature and philosophical folk transmission.",
      image: "/images/haryana/ragini_singers.jpg",
    },
    {
      name: "Phag & Dhamal Dance",
      type: "dance",
      description:
        "Energetic folk dance performed by farmers during the month of Phalgun to celebrate the ripening of the rabi crop and arrival of Holi, marked by synchronized rhythmic jumps, clapping, and thunderous beats of the Daf and Dhol.",
      significance:
        "Vibrant agricultural thanksgiving celebration dating back to the antiquity of the Mahabharata era.",
      image: "/images/haryana/phag_dance.jpg",
    },
  ],
  attires: [
    {
      name: "Daaman, Kurti & Chunder",
      gender: "women",
      fabric: "Heavy Flared Cotton with Gota Work & Bandhani",
      description:
        "The striking traditional attire of Haryanvi women featuring the 'Daaman'—an immensely voluminous flared skirt crafted from up to 52 yards of heavy fabric, paired with a fitted cotton shirt (Kurti) and an ornate red or blue odhni (Chunder).",
      occasions: "Harvest festivals, weddings, and village gatherings.",
      image: "/images/haryana/daaman_kurti.jpg",
    },
    {
      name: "Dhoti, Kurta & Haryanvi Pagri (Khandwa)",
      gender: "men",
      fabric: "Handspun Khadi Cotton",
      description:
        "Dignified attire of rural Haryanvi elders consisting of a loose, breathable white cotton dhoti, a collared kurta, and a crisp white or printed cotton turban (Khandwa/Pagri) worn as an unmistakable emblem of honor and village brotherhood.",
      occasions: "Chaupal panchayats, weddings, and formal ceremonial councils.",
      image: "/images/haryana/haryanvi_pagri.jpg",
    },
    {
      name: "Phulkari Embroidered Shawl",
      gender: "women",
      fabric: "Khaddar with Silk Floss Embroidery",
      description:
        "Intricate geometric hand embroidery done on coarse handspun cotton cloth using untwisted silk floss (pat) in bright yellow, crimson, and gold, traditionally gifted by maternal grandmothers to brides.",
      occasions: "Auspicious matrimonial ceremonies and festival celebrations.",
      image: "/images/haryana/phulkari_dupatta.jpg",
    },
  ],
  monuments: [
    {
      name: "Brahma Sarovar Ghats",
      location: "Thanesar, Kurukshetra",
      era: "Antiquity (Ancient Sacred Reservoir)",
      unesco: false,
      description:
        "Majestic geometric water sanctum with stepped red-stone walkways and arched pavilions surrounding an island shrine dedicated to Lord Shiva, reflecting centuries of royal and imperial restoration.",
      image: "/images/haryana/brahma_sarovar.jpg",
      significance: "One of the most sacred pilgrimage water bodies mentioned in the Mahabharata.",
    },
    {
      name: "Pinjore Mughal Gardens",
      location: "Pinjore, Panchkula District",
      era: "17th Century CE",
      unesco: false,
      description:
        "Terraced pleasure garden built according to classic Charbagh principles, with water channels flowing along a central axis through pavilions like Shish Mahal and Hawa Mahal against the Shivalik hills.",
      image: "/images/haryana/pinjore_gardens.jpg",
      significance: "Outstanding example of terraced Mughal garden architecture in northern India.",
    },
    {
      name: "Sheikh Chilli's Tomb Complex",
      location: "Thanesar, Kurukshetra",
      era: "1650 CE (Mughal Era)",
      unesco: false,
      description:
        "Pristine white marble dome and octagonal chamber rising over a red sandstone terrace, housing the tomb of Sufi saint Sheikh Chilli and an adjacent madrasa complex with an Archaeological Museum.",
      image: "/images/haryana/sheikh_chilli_tomb.jpg",
      significance: "Exquisite gem of Persian Mughal funerary architecture in Haryana.",
    },
    {
      name: "Asigarh Fort (Hansi)",
      location: "Hansi, Hisar District",
      era: "7th – 12th Century CE (Prithviraj Chauhan)",
      unesco: false,
      description:
        "Historic fortress built atop a prominent ancient mound by Tomar and Chauhan kings, later used by British adventurer George Thomas as his sovereign capital and mint in the late 18th century.",
      image: "/images/haryana/asigarh_fort.jpg",
      significance: "Strategically pivotal stronghold in northern Indian medieval warfare.",
    },
  ],
  languages: [
    {
      name: "Haryanvi (हरियाणवी)",
      script: "Devanagari Script",
      speakers: "18+ Million",
      greeting: "Ram Ram Ji (राम राम जी)",
      meaning: "Warm and respectful greetings invoking the Divine",
      description:
        "A robust, direct, and humorous Indo-Aryan language closely related to Western Hindi and Braj Bhasha, famous for its witty proverbs, energetic cadence, and rural warmth.",
    },
    {
      name: "Bangar & Ahirwati Dialects",
      script: "Devanagari",
      speakers: "8+ Million (Southern & Central Haryana)",
      greeting: "Ram Ram Bhai (राम राम भाई)",
      meaning: "Greetings brother",
      description:
        "Dialects spoken in the historic Ahirwal belt (Rewari, Mahendragarh) and Bangar plateau, renowned for traditional martial folklore and pastoral songs.",
    },
  ],
  luminaries: [
    {
      name: "Pandit Lakhmi Chand",
      image: "/images/luminaries/aryabhata.jpg",
      era: "1903 – 1945 CE",
      title: "Kalidas of Haryana & Grandmaster of Saang",
      contribution:
        "Legendary folk poet and composer who revolutionized Haryanvi folk theater and Ragini music, creating timeless verse plays addressing social justice, philosophy, and human ethics.",
    },
    {
      name: "Sir Chhotu Ram",
      image: "/images/luminaries/sir_chhotu_ram.jpg",
      era: "1881 – 1945 CE",
      title: "Rahbar-e-Azam (Savior of the Farmers)",
      contribution:
        "Visionary peasant leader, jurist, and statesman from Rohtak who championed agrarian rights, abolished predatory rural moneylending debts, and conceived the monumental Bhakra Nangal Dam project.",
    },
    {
      name: "Kalpana Chawla",
      image: "/images/luminaries/kalpana_chawla.jpg",
      era: "1962 – 2003 CE",
      title: "First Indian Woman in Space & Aerospace Pioneer",
      contribution:
        "Inspirational astronaut born in Karnal, Haryana, who studied aeronautical engineering and completed two historic NASA space missions aboard Space Shuttle Columbia, inspiring millions of girls globally.",
    },
  ],
}
