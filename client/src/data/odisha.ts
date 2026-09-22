import type { StateData } from "../types/state"

export const odishaData: StateData = {
  id: "odisha",
  name: "Odisha",
  hindiName: "ओडिशा",
  capital: "Bhubaneswar",
  tagline: "India's Best Kept Secret & Soul of Ancient Kalinga",
  overview:
    "Graced by over 480 kilometers of golden Bay of Bengal coastline, Odisha is the ancient land of Kalinga—where Emperor Ashoka renounced warfare to embrace Buddhism. Renowned for the colossal Sun Temple of Konark designed as a celestial chariot, the sacred Jagannath Temple in Puri, classical Odissi dance, and magnificent silver filigree, Odisha is a timeless sanctuary of spiritual bliss and artistic grandeur.",
  ancientNames: ["Kalinga", "Utkala", "Udra", "Tosali", "Orissa"],
  keyStats: [
    { label: "Districts", value: "30" },
    { label: "Capital", value: "Bhubaneswar (Temple City)" },
    { label: "Sacred Coast", value: "Puri, Konark, Gopalpur, Chandipur" },
    { label: "Lagoon Wonder", value: "Chilika Lake (Asia's Largest Brackish Lagoon)" },
    { label: "Spiritual Epicenter", value: "Jagannath Temple (Char Dham Shrine)" },
    { label: "Classical Heritage", value: "Odissi Dance & Classical Odia Language" },
  ],
  quote: {
    text: "Where the stone speaks and language becomes dance — Odisha is the serene poetry of devotion etched into sandstone on the shores of the infinite sea.",
    author: "Soul of Utkala",
  },
  districts: {
    "Puri": {
      name: "Puri",
      tagline: "Holy Abode of Lord Jagannath & Golden Sands",
      headquarters: "Puri",
      knownFor: "Jagannath Temple, world-famous Ratha Yatra, Golden Beach, Raghurajpur heritage crafts village.",
      famousSpot: "Jagannath Temple & Raghurajpur",
    },
    "Khordha": {
      name: "Khordha",
      tagline: "Temple City Capital & Paika Rebellion Seat",
      headquarters: "Bhubaneswar",
      knownFor: "Lingaraj Temple, Mukteshvara Temple, Khandagiri & Udayagiri caves, Nandankanan Zoological Park.",
      famousSpot: "Lingaraj Temple & Udayagiri Caves",
    },
    "Cuttack": {
      name: "Cuttack",
      tagline: "Millennium City of Silver Filigree (Tarakasi)",
      headquarters: "Cuttack",
      knownFor: "Barabati Fort, Cuttack silver filigree, Bali Yatra maritime trade festival on the Mahanadi.",
      famousSpot: "Barabati Fort & Mahanadi Ghats",
    },
    "Ganjam": {
      name: "Ganjam",
      tagline: "Haven of Olive Ridley Turtles & Chilika Mouth",
      headquarters: "Chhatrapur",
      knownFor: "Rushikulya mass nesting beach, Gopalpur sea beach, Tara Tarini hill shrine.",
      famousSpot: "Rushikulya Rookery & Gopalpur",
    },
    "Mayurbhanj": {
      name: "Mayurbhanj",
      tagline: "Land of Similipal Tigers & Mayurbhanj Chhau",
      headquarters: "Baripada",
      knownFor: "Similipal National Park (Tiger Reserve & biosphere), Barehipani Falls, Chhau martial dance.",
      famousSpot: "Similipal Biosphere Reserve",
    },
    "Sambalpur": {
      name: "Sambalpur",
      tagline: "Heart of Sambalpuri Ikat & Hirakud Dam",
      headquarters: "Sambalpur",
      knownFor: "Hirakud Dam (longest earthen dam in the world), Sambalpuri handloom sarees, Samaleswari Temple.",
      famousSpot: "Hirakud Dam & Samaleswari Temple",
    },
    "Balasore": {
      name: "Baleswar",
      tagline: "Maritime Coast of Chandipur Hide & Seek Beach",
      headquarters: "Baleswar",
      knownFor: "Chandipur beach (sea recedes up to 5 km daily), missile testing range at Wheeler Island, Khirachora Gopinatha Temple.",
      famousSpot: "Chandipur Beach & Remuna Shrine",
    },
    "Koraput": {
      name: "Koraput",
      tagline: "Tribal Highlands & Majestic Deomali Peak",
      headquarters: "Koraput",
      knownFor: "Deomali (highest peak in Odisha), Duduma waterfall, indigenous tribal weekly haats, coffee plantations.",
      famousSpot: "Deomali Peak & Duduma Falls",
    },
  },
  landmarks: [
    {
      id: "konark-sun-temple",
      name: "Konark Sun Temple (Black Pagoda)",
      district: "Puri",
      lat: 19.8876,
      lon: 86.0945,
      category: "monument",
      description: "UNESCO World Heritage 13th-century stone architectural miracle built by King Narasimhadeva I, shaped as a colossal chariot of Surya with 24 exquisitely sculpted stone wheels functioning as sundials and pulled by seven straining stone horses.",
      image: "/images/landmarks/odisha/konark-sun-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Puri",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Konark Sun Temple (Black Pagoda) in Puri.",
      gallery: [
        {
                url: "/images/landmarks/odisha/konark-sun-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Konark Sun Temple (Black Pagoda) — Front elevation and iconic monumental facade in Puri."
        },
        {
                url: "/images/landmarks/odisha/konark-sun-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Konark Sun Temple (Black Pagoda) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/odisha/konark-sun-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Konark Sun Temple (Black Pagoda) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/odisha/konark-sun-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Konark Sun Temple (Black Pagoda) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "jagannath-temple-puri",
      name: "Shree Jagannath Temple of Puri",
      district: "Puri",
      lat: 19.8049,
      lon: 85.8179,
      category: "spiritual",
      description: "One of the sacred Char Dham pilgrimage centers of India built in the 12th century, housing Lord Jagannath, Balabhadra, and Subhadra, celebrated worldwide for its grand annual Ratha Yatra and the world's largest traditional temple kitchen.",
      image: "/images/landmarks/odisha/jagannath-temple-puri_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Puri",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Shree Jagannath Temple of Puri in Puri.",
      gallery: [
        {
                url: "/images/landmarks/odisha/jagannath-temple-puri_angle1.jpg",
                angle: "Front Elevation",
                caption: "Shree Jagannath Temple of Puri — Front elevation and iconic monumental facade in Puri."
        },
        {
                url: "/images/landmarks/odisha/jagannath-temple-puri_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Shree Jagannath Temple of Puri — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/odisha/jagannath-temple-puri_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Shree Jagannath Temple of Puri — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/odisha/jagannath-temple-puri_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Shree Jagannath Temple of Puri — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "lingaraj-temple",
      name: "Lingaraj Temple",
      district: "Khordha",
      lat: 20.2382,
      lon: 85.8336,
      category: "spiritual",
      description: "The crown jewel of Kalinga temple architecture in Bhubaneswar dating to the 11th century, dedicated to Harihara (combined form of Shiva and Vishnu), featuring a soaring 180-foot deula tower adorned with intricate stone sculptures.",
      image: "/images/landmarks/odisha/lingaraj-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Khordha",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Lingaraj Temple in Khordha.",
      gallery: [
        {
                url: "/images/landmarks/odisha/lingaraj-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Lingaraj Temple — Front elevation and iconic monumental facade in Khordha."
        },
        {
                url: "/images/landmarks/odisha/lingaraj-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Lingaraj Temple — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/odisha/lingaraj-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Lingaraj Temple — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/odisha/lingaraj-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Lingaraj Temple — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "udayagiri-khandagiri-caves",
      name: "Udayagiri & Khandagiri Rock Caves",
      district: "Khordha",
      lat: 20.2631,
      lon: 85.7865,
      category: "monument",
      description: "Partly natural and partly artificial rock-cut caves carved out in the 2nd century BCE by King Kharavela of the Mahameghavahana dynasty, containing the famous 17-line Hathigumpha Brahmi inscription.",
      image: "/images/landmarks/odisha/udayagiri-khandagiri-caves_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Khordha",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Udayagiri & Khandagiri Rock Caves in Khordha.",
      gallery: [
        {
                url: "/images/landmarks/odisha/udayagiri-khandagiri-caves_angle1.jpg",
                angle: "Front Elevation",
                caption: "Udayagiri & Khandagiri Rock Caves — Front elevation and iconic monumental facade in Khordha."
        },
        {
                url: "/images/landmarks/odisha/udayagiri-khandagiri-caves_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Udayagiri & Khandagiri Rock Caves — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/odisha/udayagiri-khandagiri-caves_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Udayagiri & Khandagiri Rock Caves — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/odisha/udayagiri-khandagiri-caves_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Udayagiri & Khandagiri Rock Caves — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "chilika-lake",
      name: "Chilika Lake & Bird Sanctuary",
      district: "Puri / Khordha / Ganjam",
      lat: 19.7163,
      lon: 85.3228,
      category: "nature",
      description: "Asia's largest brackish water lagoon spreading over 1,100 square kilometers, designated as India's first Ramsar wetland, sheltering endangered Irrawaddy dolphins and over a million migratory birds each winter.",
      image: "/images/landmarks/odisha/chilika-lake_angle2.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Puri / Khordha / Ganjam",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Chilika Lake & Bird Sanctuary in Puri / Khordha / Ganjam.",
      gallery: [
        {
                url: "/images/landmarks/odisha/chilika-lake_angle2.jpg",
                angle: "Front Elevation",
                caption: "Chilika Lake & Bird Sanctuary — Front elevation and iconic monumental facade in Puri / Khordha / Ganjam."
        },
        {
                url: "/images/landmarks/odisha/chilika-lake_angle3.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Chilika Lake & Bird Sanctuary — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/odisha/chilika-lake_angle4.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Chilika Lake & Bird Sanctuary — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/odisha/chilika-lake_angle2.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Chilika Lake & Bird Sanctuary — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "hirakud-dam",
      name: "Hirakud Dam on the Mahanadi",
      district: "Sambalpur",
      lat: 21.5273,
      lon: 83.8706,
      category: "nature",
      description: "One of the first major multipurpose river valley projects initiated after Indian independence, forming a vast 55-kilometer-long earthen embankment across the mighty Mahanadi River.",
      image: "/images/odisha/hirakud-dam.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Sambalpur",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Hirakud Dam on the Mahanadi in Sambalpur.",
      gallery: [
        {
                url: "/images/odisha/hirakud-dam.jpg",
                angle: "Front Elevation",
                caption: "Hirakud Dam on the Mahanadi — Front elevation and iconic monumental facade in Sambalpur."
        },
        {
                url: "/images/odisha/hirakud-dam.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Hirakud Dam on the Mahanadi — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/odisha/hirakud-dam.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Hirakud Dam on the Mahanadi — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/odisha/hirakud-dam.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Hirakud Dam on the Mahanadi — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Chhena Poda",
      hindiName: "छेना पोड़ा",
      tag: "The Baked Cheese Jewel of Nayagarh",
      description:
        "India's original baked cheesecake made by kneading fresh cottage cheese (chhena) with sugar, cardamom, and semolina, then baking wrapped in sal leaves in wood-fired ovens until the crust is richly caramelized.",
      origin: "Nayagarh & Puri, Odisha",
      image: "/images/odisha/chhena_poda.jpg",
      dietary: "veg",
    },
    {
      name: "Dalma",
      hindiName: "डालमा",
      tag: "Sacred Stew of Lentils & Root Vegetables",
      description:
        "A wholesome sattvic dish of split pigeon peas cooked with raw banana, pumpkin, eggplant, and colocasia, tempered gently in pure ghee with roasted cumin-chili powder (bhaja moshla) and fresh coconut.",
      origin: "Puri & Coastal Odisha (Mahaprasad tradition)",
      image: "/images/odisha/dalma.jpg",
      dietary: "veg",
    },
    {
      name: "Puri Khaja & Odia Rasagola",
      hindiName: "पूरी खाजा और रसगोला",
      tag: "Centuries-Old Divine Confections",
      description:
        "Crisp multilayered golden pastry (Khaja) steeped in sugar syrup offered to Lord Jagannath, alongside the GI-tagged soft brown melt-in-mouth Odia Rasagola served warm in earthen pots.",
      origin: "Puri & Pahala, Odisha",
      image: "/images/odisha/puri_khaja_rasagola.jpg",
      dietary: "veg",
    },
    {
      name: "Pakhala Bhata",
      hindiName: "पखाला भात",
      tag: "Fermented Cooling Rice of Summer",
      description:
        "Cooked rice lightly fermented in water with curd, roasted cumin, green chilies, and tempered mustard seeds, served with fried fish, roasted badi chura, and sautéed greens (saga).",
      origin: "Statewide (Celebrated on Pakhala Dibasa, March 20)",
      image: "/images/odisha/pakhala_bhata.jpg",
      dietary: "veg",
    },
    {
      name: "Chhena Gaja",
      hindiName: "छेना गजा",
      tag: "Rectangular Delicacy of Pahala",
      description:
        "Dense sweet rectangular blocks of fresh chhena and semolina fried golden in ghee and soaked in thick cardamom syrup, famous along the historic Cuttack-Bhubaneswar sweet highway.",
      origin: "Pahala, Khordha District",
      image: "/images/odisha/chhena_gaja.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Classical Odissi Dance",
      type: "dance",
      description:
        "Ancient Indian classical dance form originating in the temples of Odisha as the sacred ritual dance of Maharis, characterized by fluid torso movements, Tribhanga postures (three-bend stance), and expressive facial Abhinaya.",
      significance:
        "Recognized among India's eight classical dances, celebrating the devotional love of Radha and Krishna through the Gita Govinda.",
      image: "/images/odisha/odissi_dance.jpg",
    },
    {
      name: "Puri Ratha Yatra",
      type: "festival",
      description:
        "The world-renowned annual chariot festival of Puri where Lord Jagannath, Lord Balabhadra, and Devi Subhadra emerge from the sanctum to ride grand monumental wooden chariots (Nandighosha, Taladhwaja, and Darpadalana) pulled by hundreds of thousands of devoted pilgrims.",
      significance:
        "Universal egalitarian festival where the Divine travels out to meet all people on the Grand Road (Bada Danda).",
      image: "/images/odisha/puri_rath_yatra.jpg",
    },
    {
      name: "Pattachitra Scroll Painting",
      type: "art",
      description:
        "Traditional cloth-based scroll painting practiced by Chitrakar artists in Raghurajpur heritage village, crafted using natural stone minerals, lampblack, conch shell white, and tamarind glue on hand-treated cotton canvas.",
      significance:
        "Thousands of years of uninterrupted visual storytelling portraying Jagannath Leela and Ramayana episodes.",
      image: "/images/odisha/pattachitra_art.jpg",
    },
  ],
  attires: [
    {
      name: "Sambalpuri Ikat Saree",
      gender: "women",
      fabric: "Handwoven Cotton & Tussar Silk with Bandha Technique",
      description:
        "World-renowned tie-dye (Bandha) handloom weave from western Odisha, where warp and weft threads are tied and dyed before weaving to produce sharp geometric motifs like conch shells, wheels, and fish.",
      occasions: "Formal state celebrations, weddings, and national cultural occasions.",
      image: "/images/odisha/sambalpuri_saree.jpg",
    },
    {
      name: "Bomkai Saree (Sonepuri)",
      gender: "women",
      fabric: "Fine Silk with Jala Handloom Work",
      description:
        "Heritage handloom textile from Ganjam and Subarnapur featuring extraordinary extra-weft borders depicting peacocks, bitter gourd flowers, and tribal wall motifs using the traditional Jala system.",
      occasions: "Festivals, auspicious ceremonies, and temple visits.",
      image: "/images/odisha/bomkai_saree.jpg",
    },
    {
      name: "Odia Dhoti, Kurta & Uttariya",
      gender: "men",
      fabric: "Pure Cotton Handloom with Sambalpuri Borders",
      description:
        "Pristine handwoven cotton dhoti worn draped in traditional Odia style with a crisp kurta and an elegant Ikat uttariya (stole) featuring sacred tribal or temple borders.",
      occasions: "Ratha Yatra, spiritual pujas, and weddings.",
      image: "/images/odisha/odia_dhoti.jpg",
    },
  ],
  monuments: [
    {
      name: "Konark Sun Temple",
      location: "Konark, Puri District",
      era: "1250 CE (Ganga Dynasty)",
      unesco: true,
      description:
        "Colossal black granite chariot of the Sun God standing amidst sea sands, designed with 24 carved stone wheels that measure time accurately down to minutes, and covered in thousands of relief sculptures of celestial musicians.",
      image: "/images/odisha/konark_sun_temple.jpg",
      significance: "Grandest architectural achievement of the Kalinga style of architecture.",
    },
    {
      id: "jagannath-temple",
      name: "Puri Jagannath Temple",
      location: "Puri City",
      era: "1161 CE (King Anantavarman Chodaganga)",
      unesco: false,
      description:
        "Monumental 214-foot stone temple rising above the sacred town of Puri, featuring the sacred Nilachakra wheel atop the spire, an enclosure containing over 100 subsidiary shrines, and the legendary Anandabazar.",
      image: "/images/odisha/jagannath_temple.jpg",
      significance: "One of the Four Holiest Char Dham pilgrim sites in Sanatan Dharma.",
    },
    {
      name: "Lingaraj Temple",
      location: "Old Town, Bhubaneswar",
      era: "11th Century CE (Somavamsi Dynasty)",
      unesco: false,
      description:
        "The oldest and largest temple in the city of Bhubaneswar, set within a spacious laterite compound of 50 acres, exhibiting the finest mature expression of Kalinga architectural canons.",
      image: "/images/odisha/lingaraj_temple.jpg",
      significance: "Supreme monument of medieval Saiva and Vaishnava syncretism in eastern India.",
    },
    {
      name: "Udayagiri & Khandagiri Caves",
      location: "Bhubaneswar",
      era: "2nd Century BCE",
      unesco: false,
      description:
        "Series of rock-cut monastic caves including Rani Gumpha (Queen's Cave) and Tiger Cave, carved on twin hills as residential retreats for Jain monks during the reign of King Kharavela.",
      image: "/images/odisha/khandagiri_caves.jpg",
      significance: "Crucial early rock-cut architectural milestone bearing historic royal inscriptions.",
    },
  ],
  languages: [
    {
      name: "Odia (ଓଡ଼ିଆ)",
      script: "Odia Script (Circular cursive script written on palm leaves)",
      speakers: "45+ Million",
      greeting: "Namaskar (ନମସ୍କାର)",
      meaning: "Respectful greetings to you",
      description:
        "One of India's six Classical Languages, Odia possesses an unbroken literary heritage dating back over 2,500 years, celebrated through the Charyapada poetry, Sarala Mahabharata, and Jagannatha Dasa's Odia Bhagavata.",
    },
    {
      name: "Sambalpuri / Kosali",
      script: "Odia Script",
      speakers: "10+ Million (Western Odisha)",
      greeting: "Johar (ଜୋହାର)",
      meaning: "Salutations of deep respect and unity",
      description:
        "Vibrant western variety of Odia spoken across Sambalpur, Bargarh, and Balangir, carrying the high-spirited folk songs of Rangabati and the festive spirit of Nuakhai.",
    },
    {
      name: "Desia & Tribal Tongues",
      script: "Odia / Devanagari",
      speakers: "4+ Million (Koraput, Rayagada)",
      greeting: "Johar / Namaskar",
      meaning: "Reverence to elders and ancestors",
      description:
        "Lingua franca spoken among the rich diversity of 62 indigenous tribes of southern Odisha, preserving rich folklore of forest conservation and harmony with Mother Earth.",
    },
  ],
  luminaries: [
    {
      name: "Utkalmani Gopabandhu Das",
      image: "/images/luminaries/utkalmani_gopabandhu_das.jpg",
      era: "1877 – 1928 CE",
      title: "Gem of Odisha & Freedom Fighter",
      contribution:
        "Noble reformer, poet, and pioneer of the Satyabadi open-air schooling movement who devoted his entire life to famine relief and national freedom, founding 'The Samaja' newspaper.",
    },
    {
      name: "Biju Patnaik",
      image: "/images/luminaries/biju_patnaik.jpg",
      era: "1916 – 1997 CE",
      title: "Legendary Aviator & Modern Architect of Odisha",
      contribution:
        "Daring aviator who rescued Indonesian leaders during their war of independence, twice Chief Minister of Odisha, and founder of the Paradip Port, Rourkela Steel City, and the Kalinga Prize under UNESCO.",
    },
    {
      name: "Jayadeva",
      image: "/images/luminaries/jayadeva.jpg",
      era: "12th Century CE",
      title: "Immortal Sanskrit Poet of Gita Govinda",
      contribution:
        "Celebrated Sanskrit poet born in Kenduli Sasan near Puri whose lyrical masterpiece 'Gita Govinda' revolutionized Indian bhakti literature, music, and the sacred temple dance of Lord Jagannath.",
    },
  ],
}
