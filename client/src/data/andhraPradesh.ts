import type { StateData } from "../types/state"

export const andhraPradeshData: StateData = {
  id: "andhra-pradesh",
  name: "Andhra Pradesh",
  hindiName: "आंध्र प्रदेश",
  capital: "Amaravati",
  tagline: "The Sunrise State & Rice Bowl of India",
  overview:
    "Endowed with the second longest coastline in India and nourished by the sacred waters of Godavari and Krishna, Andhra Pradesh is a land of profound spiritual gravity, ancient Buddhist universities, rich classical Kuchipudi dance, and world-renowned handlooms. Home to the hill shrine of Tirumala Venkateswara—the most visited spiritual pilgrimage on Earth—Andhra blends majestic antiquity with visionary modern coastal vibrancy.",
  ancientNames: ["Andhra Desa", "Vengi", "Trilinga Desa", "Eastern Chalukyas"],
  keyStats: [
    { label: "Districts", value: "26" },
    { label: "Capital", value: "Amaravati (Historic Buddhist City)" },
    { label: "Sacred Rivers", value: "Godavari, Krishna, Penna, Tungabhadra" },
    { label: "Coastline", value: "974 km (Bay of Bengal)" },
    { label: "Spiritual Marvel", value: "Tirumala Venkateswara Temple (Tirupati)" },
    { label: "Classical Arts", value: "Kuchipudi Classical Dance & Kalamkari Craft" },
  ],
  quote: {
    text: "Desabhashalandu Telugu Lessa — Among all the beautiful languages of the nation, Telugu is the sweetest Italian of the East.",
    author: "Emperor Sri Krishnadevaraya",
  },
  districts: {
    "Tirupati": {
      name: "Tirupati",
      tagline: "Spiritual Capital of India & Abode of Lord Balaji",
      headquarters: "Tirupati",
      knownFor: "Tirumala Venkateswara Temple, Sri Kalahasteeswara (Vayu Linga), Chandragiri Fort, Silathoranam.",
      famousSpot: "Tirumala Temple & Chandragiri Fort",
    },
    "Visakhapatnam": {
      name: "Visakhapatnam",
      tagline: "City of Destiny & Jewel of the Coromandel Coast",
      headquarters: "Visakhapatnam",
      knownFor: "Kailasagiri, Submarine Museum (INS Kursura), Rushikonda Beach, Araku Valley coffee hills.",
      famousSpot: "INS Kursura & Araku Valley",
    },
    "Guntur": {
      name: "Guntur",
      tagline: "Land of Spices & Ancient Amaravati Stupa",
      headquarters: "Guntur",
      knownFor: "Amaravati Mahachaitya Stupa, Dhyana Buddha statue, Guntur red chilies, Kondaveedu Fort.",
      famousSpot: "Amaravati Stupa & Dhyana Buddha",
    },
    "Krishna": {
      name: "Krishna",
      tagline: "Delta Heart of Machilipatnam & Kuchipudi",
      headquarters: "Machilipatnam",
      knownFor: "Kuchipudi village (birthplace of the classical dance), Manginapudi beach, Machilipatnam Kalamkari.",
      famousSpot: "Kuchipudi Village & Manginapudi",
    },
    "NTR": {
      name: "NTR District",
      tagline: "Commercial Nerve Center of Vijayawada",
      headquarters: "Vijayawada",
      knownFor: "Kanaka Durga Temple atop Indrakeeladri, Prakasam Barrage across Krishna river, Undavalli Caves.",
      famousSpot: "Kanaka Durga Temple & Undavalli Caves",
    },
    "East Godavari": {
      name: "East Godavari",
      tagline: "Cultural Soul of Rajahmundry & Godavari Ghats",
      headquarters: "Rajahmundry",
      knownFor: "Historic Godavari Arch Bridge, Pushkar Ghat, Kadiam flower nurseries, Sir Arthur Cotton Barrage.",
      famousSpot: "Godavari Arch Bridge & Pushkar Ghat",
    },
    "Sri Sathya Sai": {
      name: "Sri Sathya Sai",
      tagline: "Abode of Peace & Lepakshi Architectural Miracle",
      headquarters: "Puttaparthi",
      knownFor: "Lepakshi Veerabhadra Temple (hanging pillar and monolithic Nandi), Prasanthi Nilayam.",
      famousSpot: "Lepakshi Hanging Pillar & Monolithic Nandi",
    },
    "Kurnool": {
      name: "Kurnool",
      tagline: "Gateway to Rayalaseema & Srisailam Jyotirlinga",
      headquarters: "Kurnool",
      knownFor: "Mallikarjuna Jyotirlinga Temple (Srisailam), Belum Caves (longest cave system), Konda Reddy Fort.",
      famousSpot: "Srisailam Mallikarjuna & Belum Caves",
    },
  },
  landmarks: [
    {
      id: "tirumala-temple",
      name: "Tirumala Venkateswara Temple",
      district: "Tirupati",
      lat: 13.6833,
      lon: 79.3472,
      category: "spiritual",
      description: "Perched atop the sacred Seven Hills of Seshachalam, this ancient Dravidian masterwork is dedicated to Lord Venkateswara (Balaji), attracting tens of millions of pilgrims annually who receive the world-renowned GI-tagged Tirupati Laddu Prasadam.",
      image: "/images/landmarks/andhra-pradesh/tirumala-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Tirupati",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Tirumala Venkateswara Temple in Tirupati.",
      gallery: [
        {
                url: "/images/landmarks/andhra-pradesh/tirumala-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Tirumala Venkateswara Temple — Front elevation and iconic monumental facade in Tirupati."
        },
        {
                url: "/images/landmarks/andhra-pradesh/tirumala-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Tirumala Venkateswara Temple — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/andhra-pradesh/tirumala-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Tirumala Venkateswara Temple — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/andhra-pradesh/tirumala-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Tirumala Venkateswara Temple — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "lepakshi-temple",
      name: "Veerabhadra Temple & Hanging Pillar",
      district: "Sri Sathya Sai",
      lat: 14.0339,
      lon: 77.6083,
      category: "monument",
      description: "16th-century Vijayanagara engineering marvel renowned for its miraculous hanging stone pillar that does not touch the ground, intricate ceiling fresco murals, and the magnificent monolithic colossal Nandi bull.",
      image: "/images/landmarks/andhra-pradesh/lepakshi-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Sri Sathya Sai",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Veerabhadra Temple & Hanging Pillar in Sri Sathya Sai.",
      gallery: [
        {
                url: "/images/landmarks/andhra-pradesh/lepakshi-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Veerabhadra Temple & Hanging Pillar — Front elevation and iconic monumental facade in Sri Sathya Sai."
        },
        {
                url: "/images/landmarks/andhra-pradesh/lepakshi-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Veerabhadra Temple & Hanging Pillar — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/andhra-pradesh/lepakshi-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Veerabhadra Temple & Hanging Pillar — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/andhra-pradesh/lepakshi-temple_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Veerabhadra Temple & Hanging Pillar — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "amaravati-stupa",
      name: "Great Amaravati Mahachaitya",
      district: "Guntur",
      lat: 16.5746,
      lon: 80.3577,
      category: "spiritual",
      description: "Dating from the 2nd century BCE to the 3rd century CE, this ancient Buddhist stupa was once larger than Sanchi, embellished with masterly limestone relief carvings depicting the life and miracles of Gautama Buddha.",
      image: "/images/landmarks/andhra-pradesh/amaravati-stupa_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Guntur",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Great Amaravati Mahachaitya in Guntur.",
      gallery: [
        {
                url: "/images/landmarks/andhra-pradesh/amaravati-stupa_angle1.jpg",
                angle: "Front Elevation",
                caption: "Great Amaravati Mahachaitya — Front elevation and iconic monumental facade in Guntur."
        },
        {
                url: "/images/landmarks/andhra-pradesh/amaravati-stupa_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Great Amaravati Mahachaitya — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/andhra-pradesh/amaravati-stupa_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Great Amaravati Mahachaitya — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/andhra-pradesh/amaravati-stupa_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Great Amaravati Mahachaitya — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "undavalli-caves",
      name: "Undavalli Rock-Cut Caves",
      district: "Guntur",
      lat: 16.4975,
      lon: 80.5815,
      category: "monument",
      description: "Four-story monolithic rock-cut cave temple carved out of solid sandstone in the 7th century CE by the Vishnukundina kings, famous for its massive 5-meter-long reclining statue of Lord Vishnu (Anantasayana).",
      image: "/images/landmarks/andhra-pradesh/undavalli-caves_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Guntur",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Undavalli Rock-Cut Caves in Guntur.",
      gallery: [
        {
                url: "/images/landmarks/andhra-pradesh/undavalli-caves_angle1.jpg",
                angle: "Front Elevation",
                caption: "Undavalli Rock-Cut Caves — Front elevation and iconic monumental facade in Guntur."
        },
        {
                url: "/images/landmarks/andhra-pradesh/undavalli-caves_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Undavalli Rock-Cut Caves — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/andhra-pradesh/undavalli-caves_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Undavalli Rock-Cut Caves — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/andhra-pradesh/undavalli-caves_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Undavalli Rock-Cut Caves — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "araku-valley",
      name: "Araku Valley & Borra Caves",
      district: "Alluri Sitharama Raju",
      lat: 18.3273,
      lon: 82.8775,
      category: "nature",
      description: "Pristine hill station in the Eastern Ghats blanketed by aromatic organic coffee plantations, waterfalls, and the million-year-old Borra Caves containing striking naturally formed limestone speleothems.",
      image: "/images/landmarks/andhra-pradesh/araku-valley_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Alluri Sitharama Raju",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Araku Valley & Borra Caves in Alluri Sitharama Raju.",
      gallery: [
        {
                url: "/images/landmarks/andhra-pradesh/araku-valley_angle1.jpg",
                angle: "Front Elevation",
                caption: "Araku Valley & Borra Caves — Front elevation and iconic monumental facade in Alluri Sitharama Raju."
        },
        {
                url: "/images/landmarks/andhra-pradesh/araku-valley_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Araku Valley & Borra Caves — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/andhra-pradesh/araku-valley_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Araku Valley & Borra Caves — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/andhra-pradesh/araku-valley_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Araku Valley & Borra Caves — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "srisailam-temple",
      name: "Mallikarjuna Jyotirlinga (Srisailam)",
      district: "Nandyal",
      lat: 16.074,
      lon: 78.8685,
      category: "spiritual",
      description: "One of only three sacred pilgrim shrines in India that is simultaneously one of the 12 Shiva Jyotirlingas and one of the 18 Shakti Peethas (Bhramaramba), nestled deep in the Nallamala tiger forests.",
      image: "/images/landmarks/andhra-pradesh/srisailam-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Nandyal",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Mallikarjuna Jyotirlinga (Srisailam) in Nandyal.",
      gallery: [
        {
                url: "/images/landmarks/andhra-pradesh/srisailam-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Mallikarjuna Jyotirlinga (Srisailam) — Front elevation and iconic monumental facade in Nandyal."
        },
        {
                url: "/images/landmarks/andhra-pradesh/srisailam-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Mallikarjuna Jyotirlinga (Srisailam) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/andhra-pradesh/srisailam-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Mallikarjuna Jyotirlinga (Srisailam) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/andhra-pradesh/srisailam-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Mallikarjuna Jyotirlinga (Srisailam) — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Gongura Pachadi",
      hindiName: "गोंगूरा चटनी",
      tag: "The Pride of Andhra Kitchens",
      description:
        "Signature spicy and tangy chutney prepared from fresh sorrel leaves (Gongura) sautéed with dried red chilies, garlic cloves, coriander seeds, and fenugreek, eaten hot mixed into steamed rice with a dollop of pure ghee.",
      origin: "Guntur & Rayalaseema",
      image: "/images/andhrapradesh/gongura_pachadi.jpg",
      dietary: "veg",
    },
    {
      name: "Pesarattu with Upma",
      hindiName: "पेसारट्टू उपमा",
      tag: "Nutritious Protein Crepe of Coastal Andhra",
      description:
        "Crisp golden green-gram (moong dal) crepe filled with savory semolina upma, studded with finely chopped ginger, cumin, and green chilies, served with zesty ginger chutney (Allam Pachadi).",
      origin: "Coastal Andhra (Vijayawada & Guntur)",
      image: "/images/andhrapradesh/pesarattu.jpg",
      dietary: "veg",
    },
    {
      name: "Atreyapuram Pootharekulu",
      hindiName: "पूथारेकुलु (पेपर स्वीट)",
      tag: "GI-Tagged Paper-Thin Sweet Miracle",
      description:
        "Feather-light paper sweet skillfully rolled from translucent rice-starch batter cooked over inverted heated earthen pots, layered generously with pure ghee, powdered jaggery, and crushed dry fruits.",
      origin: "Atreyapuram, East Godavari District",
      image: "/images/andhrapradesh/pootharekulu.jpg",
      dietary: "veg",
    },
    {
      name: "Andhra Kodi Kura (Chicken Curry)",
      hindiName: "आंध्र कोड़ी कुरा",
      tag: "Spicy Godavari Masterpiece",
      description:
        "Fiery chicken delicacy slow-cooked in a rich gravy of freshly ground roasted spices, Guntur red chilies, poppy seeds, and grated coconut, emitting an irresistible aroma of curry leaves and star anise.",
      origin: "Godavari & Guntur Regions",
      image: "/images/andhrapradesh/andhra_chicken_curry.jpg",
      dietary: "non-veg",
    },
    {
      name: "Ulavacharu & Royyala Biryani",
      hindiName: "उलवाचारु और बिरयानी",
      tag: "Royal Velama & Coastal Feasts",
      description:
        "Rich horsegram broth simmered for hours until concentrated, served alongside fragrant basmati rice cooked with fresh coastal bay prawns, cloves, and mint leaves.",
      origin: "Krishna & Godavari Deltas",
      image: "/images/andhrapradesh/andhra_biryani.jpg",
      dietary: "non-veg",
    },
  ],
  traditions: [
    {
      name: "Classical Kuchipudi Dance",
      type: "dance",
      description:
        "One of the major Indian classical dance forms born in Kuchipudi village in Krishna district, distinguished by its dynamic fusion of classical dance with dramatic acting (Natya), energetic footwork, and the breathtaking Tarangam where the dancer balances on the rim of a brass plate holding a water vessel on head.",
      significance:
        "Sacred Bhagavata Mela theatrical dance tradition popularized by Saint Siddhendra Yogi in the 14th century.",
      image: "/images/andhrapradesh/kuchipudi_dance.jpg",
    },
    {
      name: "Ugadi Telugu New Year",
      type: "festival",
      description:
        "The celebration of the astronomical Telugu New Year in Chaitra, marked by decorating doorsteps with mango leaves and consuming the symbolic Ugadi Pachadi—a unique preparation blending six tastes representing the six emotional phases of life.",
      significance:
        "Philosophical acceptance that life is a harmonious blend of joy, sorrow, anger, fear, disgust, and surprise.",
      image: "/images/andhrapradesh/ugadi_festival.jpg",
    },
    {
      name: "Kalamkari Hand-Painted Art",
      type: "art",
      description:
        "Ancient pen-drawn textile craft practiced in Srikalahasti and Machilipatnam using bamboo pens (kalam) and natural organic dyes derived from plants, madder roots, and pomegranate rinds, illustrating epics from the Mahabharata and Ramayana.",
      significance:
        "Preservation of centuries of temple narrative mural art traditions on handspun cotton fabric.",
      image: "/images/andhrapradesh/kalamkari_art.jpg",
    },
  ],
  attires: [
    {
      name: "Mangalagiri Cotton Saree",
      gender: "women",
      fabric: "Pure Combed Cotton with Nizam Zari Border",
      description:
        "Crisp handwoven textile produced in the temple town of Mangalagiri, known for its durable fine combed cotton body, absence of woven motifs on the main fabric, and its distinct gold Nizam zari border.",
      occasions: "Daily graceful wear, temple rituals, and family gatherings.",
      image: "/images/andhrapradesh/mangalagiri_saree.jpg",
    },
    {
      name: "Dharmavaram Silk Saree",
      gender: "women",
      fabric: "Mulberry Silk with Broad Brocade Borders",
      description:
        "Opulent silk sarees woven in the Rayalaseema region featuring broad contrasting borders, rich pallus adorned with gold zari peacocks and temple spires, resembling traditional bridal royal attire.",
      occasions: "Grand weddings, major religious festivals, and formal state receptions.",
      image: "/images/andhrapradesh/dharmavaram_saree.jpg",
    },
    {
      name: "Pancha & Kanduva",
      gender: "men",
      fabric: "Fine Handspun Khadi or Pure Silk with Zari Borders",
      description:
        "Traditional drape of Telugu men consisting of a pristine white or cream pancha (dhoti) worn wrapped around the waist and legs, paired with a matching kurta and an elegant kanduva (shoulder stole) draped over the left shoulder.",
      occasions: "Weddings, festive celebrations, and temple darshans.",
      image: "/images/andhrapradesh/pancha_dhoti.jpg",
    },
  ],
  monuments: [
    {
      name: "Tirumala Venkateswara Temple",
      location: "Tirumala Hills, Tirupati",
      era: "Dravidian Antiquity (Expanded by Cholas, Pallavas & Vijayanagara)",
      unesco: false,
      description:
        "A monumental temple complex crowned by the golden Ananda Nilayam vimana tower over the sanctum sanctorum, hosting the divine deity of Lord Venkateswara adorned in diamonds, rubies, and fragrant tulsi garlands.",
      image: "/images/andhrapradesh/tirupati_temple.jpg",
      significance: "Richest and most revered temple pilgrimage center on the planet.",
    },
    {
      name: "Lepakshi Veerabhadra Temple",
      location: "Lepakshi, Sri Sathya Sai District",
      era: "1530 CE (Vijayanagara Empire)",
      unesco: false,
      description:
        "Remarkable 16th-century stone temple complex built by brothers Virupanna and Veeranna, famous for its magnificent Natya Mandapa with 70 carved stone pillars, a colossal monolithic serpent-hooded Shiva linga, and ceiling murals.",
      image: "/images/andhrapradesh/lepakshi_temple.jpg",
      significance: "Masterpiece of late Vijayanagara sculpture and artistic engineering.",
    },
    {
      name: "Amaravati Stupa Memorial",
      location: "Amaravati, Guntur District",
      era: "3rd Century BCE – 2nd Century CE",
      unesco: false,
      description:
        "Sacred site where Buddhism flourished for over a millennium along the Krishna River, whose exquisite marble and limestone panels are celebrated globally in museums for their narrative mastery.",
      image: "/images/andhrapradesh/amaravati_stupa.jpg",
      significance: "Preeminent center of Buddhist art and higher learning in southern India.",
    },
    {
      name: "Borra Caves",
      location: "Ananthagiri Hills, Araku Valley",
      era: "Natural Karstic Formation (Million+ Years)",
      unesco: false,
      description:
        "One of the deepest cave formations in India, plunging over 80 meters deep into limestone rock carved by the subterranean Gosthani River, featuring naturally shaped stalactites and stalagmites that resemble Shiva-Parvati and Kamadhenu.",
      image: "/images/andhrapradesh/borra_caves.jpg",
      significance: "Spectacular natural geological wonder and ancient tribal pilgrimage site.",
    },
  ],
  languages: [
    {
      name: "Telugu (తెలుగు)",
      script: "Telugu Script (Rounded rhythmic Brahmic script)",
      speakers: "85+ Million",
      greeting: "Namaskaram (నమస్కారం)",
      meaning: "I bow to the divine presence within you",
      description:
        "Celebrated by Italian traveler Niccolò de' Conti as the 'Italian of the East' because every word ends in a musical vowel sound (Ajanta Bhasha), possessing an immortal classical literary canon by Nannaya, Tikkana, Yerrapragada, and Potana.",
    },
    {
      name: "Rayalaseema & Coastal Dialects",
      script: "Telugu",
      speakers: "40+ Million",
      greeting: "Bagunnara? (బాగున్నారా?)",
      meaning: "Are you doing well?",
      description:
        "Rich regional idioms characterized by swift cadence in coastal Godavari and warm, resonant tonalities in the Rayalaseema heartland.",
    },
  ],
  luminaries: [
    {
      name: "Sri Krishnadevaraya",
      image: "/images/luminaries/sri_krishnadevaraya.jpg",
      era: "1471 – 1529 CE",
      title: "Emperor of the Vijayanagara Empire & Patron of Arts",
      contribution:
        "Greatest ruler of the Vijayanagara Empire whose golden age saw religious harmony, architectural marvels across South India, and the literary flowering of the Ashtadiggajas (Eight Great Telugu Poets).",
    },
    {
      name: "Alluri Sitharama Raju",
      image: "/images/luminaries/alluri_sitharama_raju.jpg",
      era: "1897 – 1924 CE",
      title: "Manyam Veerudu (Hero of the Jungles)",
      contribution:
        "Legendary tribal revolutionary and freedom fighter who led the heroic Rampa Rebellion against the British colonial authorities using traditional guerrilla tactics to defend tribal rights in the Eastern Ghats.",
    },
    {
      name: "Saint Tyagaraja",
      image: "/images/luminaries/saint_tyagaraja.jpg",
      era: "1767 – 1847 CE",
      title: "Triratna of Carnatic Classical Music",
      contribution:
        "Immortal Telugu saint-composer whose devotional kirtanas dedicated to Lord Rama form the very foundation of the South Indian classical Carnatic music tradition.",
    },
  ],
}
