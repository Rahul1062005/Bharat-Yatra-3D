import type { StateData } from "../types/state"

export const biharData: StateData = {
  id: "bihar",
  name: "Bihar",
  hindiName: "बिहार",
  capital: "Patna (Ancient Pataliputra)",
  tagline: "The Cradle of Empires, Enlightenment & Living Traditions",
  overview:
    "Derived from the Sanskrit word 'Vihara' meaning Buddhist monastery, Bihar is the sacred land where Prince Siddhartha attained enlightenment under the Bodhi tree to become the Buddha, where Lord Mahavira taught Jainism, where the world's first university flourished at Nalanda, and where the majestic Maurya and Gupta empires unified ancient India.",
  ancientNames: ["Magadha", "Mithila", "Anga", "Vajji"],
  keyStats: [
    { label: "Districts", value: "38" },
    { label: "Capital", value: "Patna" },
    { label: "Lifeline River", value: "Holy Ganga" },
    { label: "Literary Heritage", value: "Maithili & Magadhi" },
    { label: "UNESCO Sites", value: "2 (Bodh Gaya, Nalanda)" },
    { label: "Forest Reserve", value: "Valmiki National Park" },
  ],
  quote: {
    text: "Here the world came to learn, the seekers came for peace, and the great empires set the foundation of Bharat.",
    author: "Historical Proverb",
  },
  districts: {
    "Patna": {
      name: "Patna",
      tagline: "Heart of Ancient Magadha & State Capital",
      headquarters: "Patna",
      knownFor: "Golghar, Takht Sri Patna Sahib, Bihar Museum, Kumhrar archaeological ruins.",
      famousSpot: "Takht Sri Patna Sahib & Ganga Ghats",
    },
    "Gaya": {
      name: "Gaya",
      tagline: "Cradle of World Buddhism & Spiritual Liberation",
      headquarters: "Gaya",
      knownFor: "Mahabodhi Temple, Bodhi Tree, Vishnupad Temple, Falgu River Pind Daan.",
      famousSpot: "Mahabodhi Temple Complex (Bodh Gaya)",
    },
    "Nalanda": {
      name: "Nalanda",
      tagline: "Ancient Seat of Global Knowledge & Monasteries",
      headquarters: "Bihar Sharif",
      knownFor: "Ancient Nalanda University ruins, Xuanzang Memorial Hall, Silao Khaja.",
      famousSpot: "Nalanda Mahavihara Ruins",
    },
    "Madhubani": {
      name: "Madhubani",
      tagline: "World Capital of Mithila Folk Painting",
      headquarters: "Madhubani",
      knownFor: "Madhubani art, Saurath Sabha, Kapileshwar Temple, Makhana farming.",
      famousSpot: "Ranti Village Art Guilds",
    },
    "Bhagalpur": {
      name: "Bhagalpur",
      tagline: "The Silk City & Vikramshila Ruins",
      headquarters: "Bhagalpur",
      knownFor: "Bhagalpuri Tussar Silk, Vikramshila University, Vikramshila Gangetic Dolphin Sanctuary.",
      famousSpot: "Vikramshila Ancient University",
    },
    "Vaishali": {
      name: "Vaishali",
      tagline: "World's First Republic (Licchavi)",
      headquarters: "Hajipur",
      knownFor: "Birthplace of Lord Mahavira, Buddha's Last Sermon, Ashokan Pillar.",
      famousSpot: "Ashokan Pillar & Relic Stupa",
    },
    "Rohtas": {
      name: "Rohtas",
      tagline: "Citadel of Waterfalls & Hill Fortresses",
      headquarters: "Sasaram",
      knownFor: "Tomb of Sher Shah Suri, Rohtasgarh Fort, Dhua Kund Waterfalls.",
      famousSpot: "Sher Shah Suri Mausoleum",
    },
    "West Champaran": {
      name: "West Champaran",
      tagline: "Satyagraha Soil & Valmiki Tiger Terai",
      headquarters: "Bettiah",
      knownFor: "Gandhiji's 1917 Satyagraha, Valmiki Tiger Reserve, Someshwar Hills.",
      famousSpot: "Valmiki National Park",
    },
    "East Champaran": {
      name: "East Champaran",
      tagline: "Land of Kesariya Buddha Stupa",
      headquarters: "Motihari",
      knownFor: "Kesariya Stupa (tallest Buddhist stupa in the world), George Orwell birthplace.",
      famousSpot: "Kesariya World Stupa",
    },
    "Muzaffarpur": {
      name: "Muzaffarpur",
      tagline: "Land of Royal Shahi Litchi",
      headquarters: "Muzaffarpur",
      knownFor: "GI-tagged Shahi Litchi, Baba Garibnath Temple, Lac bangles.",
      famousSpot: "Shahi Litchi Orchards",
    },
    "Darbhanga": {
      name: "Darbhanga",
      tagline: "Cultural Crown of Mithila & Royal Palaces",
      headquarters: "Darbhanga",
      knownFor: "Raj Darbhanga Fort, Shyama Mai Temple, classical Dhrupad music tradition.",
      famousSpot: "Raj Darbhanga Palace",
    },
    "Munger": {
      name: "Munger",
      tagline: "Ancient Capital of Anga & World Yoga School",
      headquarters: "Munger",
      knownFor: "Bihar School of Yoga, Munger Fort, Kastaharni Ghat on the Ganga.",
      famousSpot: "Bihar Yoga Bharati",
    },
  },
  landmarks: [
    {
      id: "bodhgaya",
      name: "Mahabodhi Temple",
      district: "Gaya",
      lat: 24.6959,
      lon: 84.9914,
      category: "spiritual",
      description: "UNESCO World Heritage site where Gautama Buddha attained supreme enlightenment under the sacred Bodhi Tree.",
      image: "/images/landmarks/bihar/bodhgaya_angle1.jpg",
      era: "3rd Century BCE – 6th Century CE",
      builtBy: "Emperor Ashoka & Gupta Dynasty",
      architecturalStyle: "Classical Indian Brick Temple Architecture",
      significance: "UNESCO World Heritage site where Gautama Buddha attained supreme enlightenment.",
      gallery: [
        {
                url: "/images/landmarks/bihar/bodhgaya_angle1.jpg",
                angle: "Front Elevation",
                caption: "Mahabodhi Temple — Front elevation and iconic monumental facade in Gaya."
        },
        {
                url: "/images/landmarks/bihar/bodhgaya_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Mahabodhi Temple — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/bihar/bodhgaya_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Mahabodhi Temple — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/bihar/bodhgaya_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Mahabodhi Temple — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "nalanda",
      name: "Nalanda Mahavihara",
      district: "Nalanda",
      lat: 25.1357,
      lon: 85.4452,
      category: "university",
      description: "The world's earliest global residential university that housed over 10,000 scholars and 2,000 teachers in antiquity.",
      image: "/images/landmarks/bihar/nalanda_angle1.jpg",
      era: "5th – 12th Century CE",
      builtBy: "Gupta Emperor Kumaragupta I & King Harshavardhana",
      architecturalStyle: "Ancient Buddhist Monastic Architecture (Vihara & Chaitya)",
      significance: "World's foremost ancient residential university that housed 10,000 scholars.",
      gallery: [
        {
                url: "/images/landmarks/bihar/nalanda_angle1.jpg",
                angle: "Front Elevation",
                caption: "Nalanda Mahavihara — Front elevation and iconic monumental facade in Nalanda."
        },
        {
                url: "/images/landmarks/bihar/nalanda_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Nalanda Mahavihara — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/bihar/nalanda_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Nalanda Mahavihara — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/bihar/nalanda_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Nalanda Mahavihara — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "rajgir",
      name: "Rajgir & Glass Bridge",
      district: "Nalanda",
      lat: 25.0306,
      lon: 85.4217,
      category: "nature",
      description: "Ancient Magadhan hill retreat featuring Vishwa Shanti Stupa, hot sulfur springs, Vulture's Peak, and modern Glass Skywalk.",
      image: "/images/landmarks/bihar/rajgir_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Nalanda",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Rajgir & Glass Bridge in Nalanda.",
      gallery: [
        {
                url: "/images/landmarks/bihar/rajgir_angle1.jpg",
                angle: "Front Elevation",
                caption: "Rajgir & Glass Bridge — Front elevation and iconic monumental facade in Nalanda."
        },
        {
                url: "/images/landmarks/bihar/rajgir_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Rajgir & Glass Bridge — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/bihar/rajgir_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Rajgir & Glass Bridge — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/bihar/rajgir_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Rajgir & Glass Bridge — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "patna-sahib",
      name: "Takht Sri Patna Sahib",
      district: "Patna",
      lat: 25.5941,
      lon: 85.2289,
      category: "spiritual",
      description: "Birthplace of Sri Guru Gobind Singh Ji, the tenth Sikh Guru, and one of the five holy Takhts of Sikhism.",
      image: "/images/landmarks/bihar/patna-sahib_angle1.jpg",
      era: "1666 CE / 1839 CE",
      builtBy: "Maharaja Ranjit Singh (Original shrine)",
      architecturalStyle: "Sikh Gurdwara Architecture with marble domes and gold accents",
      significance: "Birthplace of Sri Guru Gobind Singh Ji, tenth Sikh Guru, and one of the five holy Takhts.",
      gallery: [
        {
                url: "/images/landmarks/bihar/patna-sahib_angle1.jpg",
                angle: "Front Elevation",
                caption: "Takht Sri Patna Sahib — Front elevation and iconic monumental facade in Patna."
        },
        {
                url: "/images/landmarks/bihar/patna-sahib_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Takht Sri Patna Sahib — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/bihar/patna-sahib_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Takht Sri Patna Sahib — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/bihar/patna-sahib_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Takht Sri Patna Sahib — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "vaishali",
      name: "Vaishali Ashokan Pillar",
      district: "Vaishali",
      lat: 25.9922,
      lon: 85.1275,
      category: "monument",
      description: "A monumental monolithic lion pillar erected by Emperor Ashoka near Buddha's Relic Stupa in the world's first republic.",
      image: "/images/landmarks/bihar/vaishali_angle1.jpg",
      era: "3rd Century BCE",
      builtBy: "Emperor Ashoka the Great",
      architecturalStyle: "Mauryan Monolithic Chunar Sandstone Column",
      significance: "Intact monolithic pillar crowned with a seated lion facing north.",
      gallery: [
        {
                url: "/images/landmarks/bihar/vaishali_angle1.jpg",
                angle: "Front Elevation",
                caption: "Vaishali Ashokan Pillar — Front elevation and iconic monumental facade in Vaishali."
        },
        {
                url: "/images/landmarks/bihar/vaishali_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Vaishali Ashokan Pillar — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/bihar/vaishali_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Vaishali Ashokan Pillar — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/bihar/vaishali_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Vaishali Ashokan Pillar — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "sasaram",
      name: "Sher Shah Suri Tomb",
      district: "Rohtas",
      lat: 24.9547,
      lon: 84.0163,
      category: "monument",
      description: "An architectural marvel of Indo-Islamic red sandstone rising serenely from the center of an artificial lake.",
      image: "/images/landmarks/bihar/sasaram_angle1.jpg",
      era: "1545 CE",
      builtBy: "Architect Aliwal Khan for Emperor Sher Shah Suri",
      architecturalStyle: "Indo-Islamic Octagonal Sandstone Mausoleum",
      significance: "Masterpiece of medieval civil engineering rising 122 feet from an artificial lake.",
      gallery: [
        {
                url: "/images/landmarks/bihar/sasaram_angle1.jpg",
                angle: "Front Elevation",
                caption: "Sher Shah Suri Tomb — Front elevation and iconic monumental facade in Rohtas."
        },
        {
                url: "/images/landmarks/bihar/sasaram_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Sher Shah Suri Tomb — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/bihar/sasaram_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Sher Shah Suri Tomb — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/bihar/sasaram_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Sher Shah Suri Tomb — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Litti Chokha",
      hindiName: "लिट्टी चोखा",
      tag: "Iconic Heritage Dish",
      origin: "Bhojpur & Magadh",
      description:
        "Hand-kneaded whole wheat dough balls stuffed with roasted gram flour (sattu) infused with ajwain, kalonji, mustard oil, garlic, and mango pickle masala. Roasted over dried cow-dung or charcoal embers and generously submerged in aromatic pure desi ghee. Served with smoky roasted brinjal and tomato chokha.",
      image: "/images/bihar/litti_chokha.jpg",
      ingredients: ["Sattu", "Whole Wheat", "Mustard Oil", "Desi Ghee", "Smoked Eggplant", "Garlic & Green Chillies"],
    },
    {
      name: "Dal Pitha",
      hindiName: "दाल पीठा",
      tag: "Steamed Delicacy",
      origin: "Mithila & Bhojpuri Heartland",
      description:
        "Often called the traditional dumpling of Bihar, Dal Pitha consists of steamed rice-flour parcels filled with coarsely ground spiced chana dal, ginger, and green chillies. Light, healthy, and deeply comforting, typically relished during monsoon and winter gatherings.",
      image: "/images/bihar/dal_pitha.jpg",
      ingredients: ["Rice Flour", "Chana Dal", "Cumin", "Ginger", "Hing (Asafoetida)"],
    },
    {
      name: "Silao Ka Khaja",
      hindiName: "सिलाव का खाजा",
      tag: "GI-Tagged Royal Sweet",
      origin: "Silao (Nalanda)",
      description:
        "A legendary crisp multi-layered pastry consisting of up to 52 fragile, paper-thin flaky layers soaked lightly in sugar syrup. Mentioned in Buddhist lore, Silao Khaja has received the prestigious Geographical Indication (GI) tag.",
      image: "/images/bihar/silao_khaja.jpg",
      ingredients: ["Refined Wheat Flour", "Pure Ghee", "Cardamom Syrup", "Water from Silao springs"],
    },
    {
      name: "Thekua (Khajuria)",
      hindiName: "ठेकुआ",
      tag: "Sacred Prasad of Chhath Puja",
      origin: "Statewide Sacred Heritage",
      description:
        "Crispy cookies crafted from whole wheat flour, organic sugarcane jaggery (gur), crushed green cardamom, and dry coconut slices, shaped on wooden engraved moulds called Saancha and fried in desi ghee.",
      image: "/images/bihar/thekua_prasad.jpg",
      ingredients: ["Whole Wheat Flour", "Sugarcane Jaggery", "Dry Coconut", "Green Cardamom", "Desi Ghee"],
    },
    {
      name: "Mithila Makhana Dishes",
      hindiName: "मिथिला मखाना",
      tag: "GI-Tagged Foxnuts",
      origin: "Mithila Waterlands (Darbhanga & Madhubani)",
      description:
        "Bihar produces over 90% of the world's lotus seeds (Makhana). Hand-harvested from wetland ponds by fishermen, they are transformed into royal Makhana Kheer, spiced roasted makhana, and rich cashew-makhana curries.",
      image: "/images/bihar/mithila_makhana.jpg",
      ingredients: ["Popped Lotus Seeds (Makhana)", "Whole Milk", "Saffron", "Dry Fruits", "Jaggery"],
    },
  ],
  traditions: [
    {
      title: "Madhubani (Mithila) Painting",
      category: "Living Folk Art",
      period: "Centuries-old Epic Era",
      description:
        "Originated when King Janaka commissioned artists to capture Princess Sita's wedding to Lord Rama. Traditionally executed with fingers, twigs, brushes, nib-pens, and matchsticks using natural mineral and botanical dyes, characterized by eye-catching geometrical patterns, fish, birds, and divine motifs.",
      image: "/images/bihar/madhubani_art.jpg",
      highlights: ["Kohbar & Aripan rituals", "Zero chemical colors", "GI Tagged art form"],
    },
    {
      title: "Chhath Mahaparva",
      category: "Most Sacred River Ritual",
      period: "Vedic Antiquity",
      description:
        "The four-day thanksgiving festival dedicated to Surya Dev (Sun God) and Chhathi Maiyya (Usha), celebrated at the riverbanks of Ganga and Kosi with deep devotion, purity, and eco-consciousness, worshiping both the setting and rising sun without any priestly hierarchy.",
      image: "/images/bihar/chhath_puja.jpg",
      highlights: ["Nahay Khay & Kharna", "Worship of setting & rising sun", "Riverbank community bonding"],
    },
    {
      title: "Manjusha Art (Angika)",
      category: "Scroll & Snake Motif Painting",
      period: "Anga Dynasty",
      description:
        "Rooted in the ancient Anga kingdom (Bhagalpur), Manjusha art depicts the epic legend of Bihula-Bishari. It is crafted primarily using three distinct sacred colors—pink, green, and yellow—framed by traditional snake, fish, and temple borders.",
      image: "/images/bihar/manjusha_art.jpg",
      highlights: ["Three-color palette", "Tricolor borders", "Folkloric scroll storytelling"],
    },
  ],
  attires: [
    {
      name: "Bhagalpuri Tussar Silk Saree",
      type: "Handloom Heritage",
      specialty: "Queen of Natural Wild Silk",
      description:
        "Woven for over a millennium in Bhagalpur, this natural textured Tussar silk is famed for its porous breathe-ability, natural gold sheen, and delicate zari borders. Favored across India for royal ceremonies.",
      image: "/images/bihar/tussar_silk.jpg",
    },
    {
      name: "Traditional Dhoti, Kurta & Gamchha",
      type: "Men's Classic Attire",
      specialty: "Cultural Pride & Utilitarian Elegance",
      description:
        "Crisp cotton or khadi dhoti paired with an embroidered kurta and draped with the iconic red-checked or floral Gamchha across the shoulders, representing agrarian humility, warmth, and resilience.",
      image: "/images/bihar/dhoti_gamchha.jpg",
    },
    {
      name: "Mithila Painted Bridal Saree",
      type: "Ceremonial Silk",
      specialty: "Wearable Handpainted Artistry",
      description:
        "Fine mulberry and tussar silk sarees hand-painted by women artisans of Madhubani depicting peacocks, lotus blossoms, and river motifs, preserving hereditary blessings for brides.",
      image: "/images/bihar/mithila_saree.jpg",
    },
  ],
  monuments: [
    {
      name: "Mahabodhi Temple Complex",
      location: "Bodh Gaya",
      era: "3rd Century BCE (Ashokan Foundation)",
      unesco: true,
      description:
        "The sanctified epicenter of world Buddhism containing the Diamond Throne (Vajrasana) erected by Emperor Ashoka and the sacred descendant of the original Bodhi Tree where Buddha reached enlightenment.",
      image: "/images/bihar/mahabodhi_temple.jpg",
      significance: "Spiritual beacon for hundreds of millions of pilgrims worldwide.",
    },
    {
      name: "Ruins of Nalanda Mahavihara",
      location: "Nalanda",
      era: "5th Century CE (Gupta Empire)",
      unesco: true,
      description:
        "Red brick monastic dormitories, stupas, meditation cells, and libraries (Dharmaganja) that drew scholars from China, Korea, Japan, Tibet, and Persia.",
      image: "/images/bihar/nalanda_ruins.jpg",
      significance: "Testament to ancient India's scientific and philosophical leadership.",
    },
    {
      name: "Tomb of Sher Shah Suri",
      location: "Sasaram (Rohtas)",
      era: "1545 CE",
      unesco: false,
      description:
        "A magnificent 122-foot red sandstone octagonal mausoleum engineered in the middle of an expansive artificial lake, celebrated as one of the finest gems of medieval architecture.",
      image: "/images/bihar/sher_shah_tomb.jpg",
      significance: "Memorial to the great reformer who constructed the Grand Trunk Road.",
    },
    {
      name: "Takht Sri Patna Sahib",
      location: "Patna",
      era: "1666 CE (Birthplace of Guru Gobind Singh Ji)",
      unesco: false,
      description:
        "One of the five revered Takhts of Sikhism, situated on the sacred banks of the Ganga in Patna, enshrining historical relics, handwritten scriptures, and sacred armaments.",
      image: "/images/bihar/patna_sahib.jpg",
      significance: "Sacred pilgrimage celebrating the legacy of courage, egalitarianism, and spiritual sovereignty.",
    },
  ],
  languages: [
    {
      name: "Maithili",
      script: "Mithilakshar & Devanagari",
      speakers: "35+ Million",
      greeting: "प्रणाम (Pranaam) / जय मिथिला (Jai Mithila)",
      meaning: "May auspiciousness touch your journey",
      description: "One of the 22 constitutional languages of India, celebrated for the devotional poetry of Mahakavi Vidyapati and sweet melodic cadence.",
    },
    {
      name: "Bhojpuri",
      script: "Kaithi & Devanagari",
      speakers: "50+ Million worldwide",
      greeting: "राउरे के गोड़ लागत बानी (Raure ke god laagat baani)",
      meaning: "I bow respectfully at your feet",
      description: "Vibrant and expressive dialect spoken throughout western Bihar and across international diasporas in Mauritius, Fiji, and the Caribbean.",
    },
    {
      name: "Magahi",
      script: "Devanagari",
      speakers: "20+ Million",
      greeting: "प्रणाम, कुशल-क्षेम सब ठीक बा? (Pranaam, sab theek ba?)",
      meaning: "Greetings, is all well with your spirit?",
      description: "Direct descendant of the ancient Magadhi Prakrit spoken in the imperial courts of the Maurya and Gupta dynasties.",
    },
    {
      name: "Angika & Bajjika",
      script: "Devanagari",
      speakers: "15+ Million",
      greeting: "गोड़ लगाय छी (God lagay chhi)",
      meaning: "Humble heartfelt salutations",
      description: "Lyrical dialects flourishing in the Bhagalpur and Vaishali-Muzaffarpur belts, rich in oral folklore and regional songs.",
    },
  ],
  luminaries: [
    {
      name: "Aryabhata",
      image: "/images/luminaries/aryabhata.jpg",
      era: "476–550 CE",
      title: "Pioneer Astronomer & Mathematician",
      contribution: "Invented the concept of zero, computed the value of Pi to 4 decimal places, and calculated that the Earth rotates on its own axis.",
    },
    {
      name: "Chanakya (Kautilya)",
      image: "/images/luminaries/chanakya_kautilya.jpg",
      era: "375–283 BCE",
      title: "Master Strategist & Prime Minister",
      contribution: "Authored the Arthashastra (ancient treatise on statecraft, economics, and military strategy) and guided Chandragupta Maurya.",
    },
    {
      name: "Emperor Ashoka the Great",
      image: "/images/luminaries/emperor_ashoka_the_great.jpg",
      era: "304–232 BCE",
      title: "Maurya Emperor & Patron of Peace",
      contribution: "Unified the subcontinent, championed Dhamma, erected Ashokan edicts, and adopted the Lion Capital which became India's National Emblem.",
    },
    {
      name: "Guru Gobind Singh Ji",
      image: "/images/luminaries/guru_gobind_singh_ji.jpg",
      era: "1666–1708 CE",
      title: "Tenth Sikh Guru & Spiritual Luminary",
      contribution: "Born at Patna Sahib on the banks of Ganga; poet, philosopher, and founder of the Khalsa panth standing for justice and equality.",
    },
    {
      name: "Dr. Rajendra Prasad",
      image: "/images/luminaries/dr_rajendra_prasad.jpg",
      era: "1884–1963 CE",
      title: "First President of the Republic of India",
      contribution: "Steered the Constituent Assembly that drafted the Constitution of India; beloved statesman of simplicity and integrity.",
    },
  ],
}
