import type { StateData } from "../types/state"

export const madhyaPradeshData: StateData = {
  id: "madhya-pradesh",
  name: "Madhya Pradesh",
  hindiName: "मध्य प्रदेश",
  capital: "Bhopal",
  tagline: "The Heart of Incredible India & Cradle of Ancient Epics",
  overview:
    "Situated at the geographic center of India, Madhya Pradesh is a land of timeless empires, prehistoric cave sanctuaries, sacred rivers, and dense tiger forests. From the erotic sculpted temples of Khajuraho to the serene Buddhist stupas of Sanchi and the impregnable ramparts of Gwalior Fort, MP preserves thousands of years of art, architecture, and spiritual wisdom.",
  ancientNames: ["Avanti", "Malwa", "Chedi", "Jejejabhukti", "Central Provinces"],
  keyStats: [
    { label: "Districts", value: "55" },
    { label: "Capital", value: "Bhopal (City of Lakes)" },
    { label: "Sacred Lifeline", value: "Narmada, Tapti, Betwa, Chambal" },
    { label: "UNESCO Wonders", value: "Khajuraho, Sanchi & Bhimbetka" },
    { label: "Wildlife Sanctuary", value: "Tiger Capital of India (Kanha, Bandhavgarh)" },
    { label: "Handloom Heritage", value: "Chanderi & Maheshwari Silk" },
  ],
  quote: {
    text: "Madhya Pradesh is not merely the geographical heart of India; it is the spiritual and cultural pulse where stone sings and history whispers through sacred teak forests.",
    author: "Cultural Heritage of Central India",
  },
  districts: {
    "Bhopal": {
      name: "Bhopal",
      tagline: "City of Lakes & Modern Cultural Capital",
      headquarters: "Bhopal",
      knownFor: "Upper Lake (Bhojtal), Taj-ul-Masajid, Bharat Bhavan, Van Vihar National Park.",
      famousSpot: "Bhojtal & Taj-ul-Masajid",
    },
    "Indore": {
      name: "Indore",
      tagline: "Cleanest City of India & Culinary Mecca",
      headquarters: "Indore",
      knownFor: "Rajwada Palace, Sarafa Night Food Bazaar, Chappan Dukan, Lal Bagh Palace.",
      famousSpot: "Rajwada Palace & Sarafa Bazaar",
    },
    "Ujjain": {
      name: "Ujjain",
      tagline: "Ancient Seat of Time & Mahakaleshwar Jyotirlinga",
      headquarters: "Ujjain",
      knownFor: "Mahakaleshwar Temple, Simhastha Kumbh Mela, Shipra River Ghats, Jantar Mantar observatory.",
      famousSpot: "Mahakaleshwar Jyotirlinga & Ram Ghat",
    },
    "Gwalior": {
      name: "Gwalior",
      tagline: "Pearl in the Necklace of Hind Fortresses",
      headquarters: "Gwalior",
      knownFor: "Gwalior Fort, Jai Vilas Palace, Tansen's Tomb, Sas Bahu Temple, Scindia royal heritage.",
      famousSpot: "Gwalior Fort & Jai Vilas Palace",
    },
    "Jabalpur": {
      name: "Jabalpur",
      tagline: "City of Marble Rocks & Narmada Waterfalls",
      headquarters: "Jabalpur",
      knownFor: "Bhedaghat Marble Rocks, Dhuandhar Falls, Madan Mahal Fort, Chausath Yogini Temple.",
      famousSpot: "Bhedaghat & Dhuandhar Falls",
    },
    "Chhatarpur": {
      name: "Chhatarpur",
      tagline: "Home to the Khajuraho UNESCO Temples",
      headquarters: "Chhatarpur",
      knownFor: "Khajuraho Group of Monuments, Chandela dynasty sculptures, Panna Tiger Reserve gateway.",
      famousSpot: "Kandariya Mahadeva Temple",
    },
    "Raisen": {
      name: "Raisen",
      tagline: "Cradle of Sanchi Stupa & Bhimbetka Caves",
      headquarters: "Raisen",
      knownFor: "Great Stupa of Sanchi (Emperor Ashoka), Bhimbetka Rock Shelters (prehistoric art), Raisen Fort.",
      famousSpot: "Sanchi Buddhist Stupa & Bhimbetka",
    },
    "Rewa": {
      name: "Rewa",
      tagline: "Land of White Tigers & Waterfalls",
      headquarters: "Rewa",
      knownFor: "Govindgarh Palace, white tiger sanctuary, Keoti and Chachai waterfalls.",
      famousSpot: "Govindgarh & White Tiger Sanctuary",
    },
    "Panna": {
      name: "Panna",
      tagline: "City of Diamond Mines & Royal Tigers",
      headquarters: "Panna",
      knownFor: "Asia's only active diamond mines, Panna National Park, Pandav Falls.",
      famousSpot: "Panna National Park & Diamond Mines",
    },
    "Hoshangabad": {
      name: "Narmadapuram",
      tagline: "Holy Ghats of Narmada & Pachmarhi Hills",
      headquarters: "Narmadapuram",
      knownFor: "Pachmarhi hill station (Queen of Satpura), Sethani Ghat, Satpura National Park.",
      famousSpot: "Pachmarhi & Sethani Ghat",
    },
  },
  landmarks: [
    {
      id: "khajuraho-temples",
      name: "Khajuraho Group of Monuments",
      district: "Chhatarpur",
      lat: 24.8318,
      lon: 79.9199,
      category: "monument",
      description: "Magnificent UNESCO World Heritage sandstone temples built by the Chandela dynasty between 950 and 1050 CE, renowned for their architectural perfection and celebration of human life, spiritual union, and love.",
    },
    {
      id: "sanchi-stupa",
      name: "Great Stupa at Sanchi",
      district: "Raisen",
      lat: 23.4795,
      lon: 77.7397,
      category: "spiritual",
      description: "One of the oldest stone structures in India commissioned by Emperor Ashoka in the 3rd century BCE, enshrining sacred Buddhist relics behind carved ceremonial Torana gateways depicting Jataka tales.",
    },
    {
      id: "gwalior-fort",
      name: "Gwalior Fort (Gopachal)",
      district: "Gwalior",
      lat: 26.2307,
      lon: 78.1695,
      category: "monument",
      description: "Described by Mughal Emperor Babur as 'the pearl amongst fortresses in Hind', this hilltop citadel houses the 8th-century Teli Ka Mandir, ornate Man Mandir Palace, and monolithic rock-cut Jain statues.",
    },
    {
      id: "bhimbetka-shelters",
      name: "Bhimbetka Rock Shelters",
      district: "Raisen",
      lat: 22.9372,
      lon: 77.6128,
      category: "nature",
      description: "Prehistoric UNESCO archaeological site showcasing over 750 rock shelters spanning from the Paleolithic to the Mesolithic era, adorned with vibrant cave paintings depicting early human life.",
    },
    {
      id: "mahakaleshwar-temple",
      name: "Mahakaleshwar Jyotirlinga",
      district: "Ujjain",
      lat: 23.1827,
      lon: 75.7682,
      category: "spiritual",
      description: "One of the twelve revered Jyotirlingas of Lord Shiva situated on the holy banks of the Shipra River, famous for its daily sunrise Bhasma Aarti and as the spiritual nucleus of the ancient prime meridian.",
    },
    {
      id: "bhedaghat-marble-rocks",
      name: "Bhedaghat & Dhuandhar Falls",
      district: "Jabalpur",
      lat: 23.1315,
      lon: 79.8005,
      category: "nature",
      description: "Breathtaking gorge where the holy Narmada River narrows between soaring 100-foot white marble cliffs before plunging into the thundering mist of the Dhuandhar (smoke-cascade) waterfall.",
    },
  ],
  cuisines: [
    {
      name: "Indori Poha & Jalebi",
      hindiName: "इन्दोरी पोहा और जलेबी",
      tag: "Iconic Morning Anthem of Malwa",
      description:
        "Fluffy flattened rice steamed with fennel seeds and turmeric, garnished with spicy Ratlami sev, chopped onions, and fresh coriander, traditionally paired with piping-hot crispy saffron jalebis.",
      origin: "Indore & Ujjain (Malwa Region)",
      image: "/images/madhyapradesh/poha_jalebi.jpg",
      dietary: "veg",
    },
    {
      name: "Dal Bafla",
      hindiName: "दाल बाफला",
      tag: "Royal Feast of Madhya Pradesh",
      description:
        "Wheat dough balls boiled first in water then baked to golden perfection over cow-dung ember cakes, drowned in pure desi ghee and served with fragrant spiced tuvar dal and spicy coriander chutney.",
      origin: "Malwa & Nimad Regions",
      image: "/images/madhyapradesh/dal_bafla.jpg",
      dietary: "veg",
    },
    {
      name: "Bhutte Ka Kees",
      hindiName: "भुट्टे का कीस",
      tag: "Street Food Delicacy of Sarafa",
      description:
        "Fresh tender sweet corn grated and gently simmered in spiced milk with mustard seeds, green chilies, and asafoetida, crowned with grated fresh coconut and lime juice.",
      origin: "Sarafa Night Bazaar, Indore",
      image: "/images/madhyapradesh/bhutte_ka_kees.jpg",
      dietary: "veg",
    },
    {
      name: "Mawa Bati",
      hindiName: "मावा बाटी",
      tag: "Rich Sweet of Central India",
      description:
        "A grand royal sweet resembling oversized gulab jamun, crafted from reduced milk solids (khoya) packed with nuts and cardamom, fried in desi ghee and steeped in aromatic saffron sugar syrup.",
      origin: "Bhopal & Central MP",
      image: "/images/madhyapradesh/mawa_bati.jpg",
      dietary: "veg",
    },
    {
      name: "Malpua with Rabri",
      hindiName: "मालपुआ और रबड़ी",
      tag: "Traditional Festive Confection",
      description:
        "Pancake-like dessert prepared from thickened milk and flour, shallow fried in desi ghee, soaked in cardamon syrup, and generously topped with creamy thickened rabri and slivered pistachios.",
      origin: "Jabalpur & Ujjain",
      image: "/images/madhyapradesh/malpua.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Gond Folk Painting",
      type: "art",
      description:
        "World-renowned tribal art form of the Gond tribe of Dindori and Mandla, featuring intricate dot-and-line geometric patterns depicting spirits of nature, sacred trees, animals, and tribal mythology.",
      significance:
        "Ancient belief that beholding good images brings prosperity and warding off misfortune.",
      image: "/images/madhyapradesh/gond_painting.jpg",
    },
    {
      name: "Bhagoria Haat Festival",
      type: "festival",
      description:
        "Vibrant spring festival celebrated with immense enthusiasm by the Bhil and Bhilala tribal communities in Jhabua and Alirajpur preceding Holi, featuring traditional brass flutes, dhol drumming, and joyful courting dances.",
      significance:
        "Celebration of agricultural harvest, agrarian love, and tribal community kinship.",
      image: "/images/madhyapradesh/bhagoria_dance.jpg",
    },
    {
      name: "Rai Folk Dance of Bundelkhand",
      type: "dance",
      description:
        "Lively, spirited folk dance from the Bundelkhand region performed during joyous social celebrations, marked by rapid footwork, rhythmic clanging of majira cymbals, and musical duels between the drummer and dancers.",
      significance:
        "Century-old celebratory folk expression of community resilience and royal court traditions.",
      image: "/images/madhyapradesh/rai_folk_dance.jpg",
    },
  ],
  attires: [
    {
      name: "Chanderi Silk Saree",
      gender: "women",
      fabric: "Pure Silk & Fine Cotton with Zari Weave",
      description:
        "Centuries-old royal handloom textile originating from the historic town of Chanderi, famous for its feather-light sheer texture, glossy transparency, and gold zari motifs inspired by nature.",
      occasions: "Royal weddings, classical recitals, and prestigious ceremonial gatherings.",
      image: "/images/madhyapradesh/chanderi_saree.jpg",
    },
    {
      name: "Maheshwari Saree",
      gender: "women",
      fabric: "Silk-Cotton Blend with Reversible Border",
      description:
        "Handloom weave patronized and popularized by Queen Ahilyabai Holkar in the 18th century in Maheshwar on the banks of the Narmada, distinguished by its unique reversible borders and geometric temple motifs.",
      occasions: "Spiritual pujas, festivals, and celebratory gatherings.",
      image: "/images/madhyapradesh/maheshwari_saree.jpg",
    },
    {
      name: "Dhoti, Kurta & Safa (Turban)",
      gender: "men",
      fabric: "Handwoven Khadi Cotton & Chanderi Fabric",
      description:
        "Traditional attire of central Indian men consisting of a pristine white or beige cotton dhoti paired with a knee-length kurta and an ornate colorful safa turban that signifies regional honor and lineage.",
      occasions: "Rural panchayats, weddings, and harvest festivities.",
      image: "/images/madhyapradesh/dhoti_kurta.jpg",
    },
  ],
  monuments: [
    {
      name: "Khajuraho Temples",
      location: "Chhatarpur District",
      era: "950 – 1050 CE (Chandela Dynasty)",
      unesco: true,
      description:
        "World Heritage masterwork of nagara-style temple architecture, featuring exquisite stone carvings celebrating cosmic spirituality, music, courtly pageantry, and human intimacy.",
      image: "/images/madhyapradesh/khajuraho_temple.jpg",
      significance: "Peak artistic zenith of medieval Indian temple architecture.",
    },
    {
      name: "Great Stupa of Sanchi",
      location: "Raisen District",
      era: "3rd Century BCE (Emperor Ashoka)",
      unesco: true,
      description:
        "Venerable hemispherical stone dome crowning a sacred hill, featuring four intricately carved ceremonial Torana gateways that narrate the Buddha's previous lives without figurative depiction.",
      image: "/images/madhyapradesh/sanchi_stupa.jpg",
      significance: "Oldest surviving stone monumental sanctuary in Indian subcontinent.",
    },
    {
      name: "Gwalior Fort",
      location: "Gwalior City",
      era: "8th – 15th Century CE",
      unesco: false,
      description:
        "Towering sandstone bastion dominating the skyline, with brilliant blue-glazed ceramic tilework on the facade of the Man Mandir Palace and immense rock-cut statues of Jain Tirthankaras.",
      image: "/images/madhyapradesh/gwalior_fort.jpg",
      significance: "Strategically unconquerable northern gate fortress praised across centuries.",
    },
    {
      name: "Bhimbetka Rock Shelters",
      location: "Raisen District (Near Bhopal)",
      era: "Up to 100,000 BCE (Early Stone Age)",
      unesco: true,
      description:
        "Archaeological treasure hidden in the Vindhyan sandstone hills, preserving genuine prehistoric ochre and white mineral cave paintings depicting elephants, hunting rituals, and ancient dances.",
      image: "/images/madhyapradesh/bhimbetka_caves.jpg",
      significance: "Earliest recorded traces of human artistic expression in South Asia.",
    },
  ],
  languages: [
    {
      name: "Hindi (Standard)",
      script: "Devanagari",
      speakers: "70+ Million (Statewide)",
      greeting: "Namaste (नमस्ते)",
      meaning: "I bow to the divine within you",
      description:
        "Official language of governance, education, and commerce across Madhya Pradesh, spoken with distinctive regional cadence and literary elegance.",
    },
    {
      name: "Malwi Dialect",
      script: "Devanagari",
      speakers: "10+ Million (Indore, Ujjain, Dewas, Dhar)",
      greeting: "Ram Ram Sa (राम राम सा)",
      meaning: "Respectful greetings in the name of the Divine",
      description:
        "Melodious Indo-Aryan tongue of the Malwa plateau closely related to Rajasthani, carrying rich oral traditions, proverbs, and folk theater.",
    },
    {
      name: "Bundeli Dialect",
      script: "Devanagari",
      speakers: "8+ Million (Gwalior, Jhansi, Sagar, Chhatarpur)",
      greeting: "Jai Ram Ji Ki (जय राम जी की)",
      meaning: "Victory and peace of the Lord",
      description:
        "Historic warrior tongue of Bundelkhand renowned for the epic folk ballad of Alha-Udal and the poetry of Keshavdas and Padmakar.",
    },
  ],
  luminaries: [
    {
      name: "Rani Ahilyabai Holkar",
      era: "1725 – 1795 CE",
      title: "Philosopher Queen of Malwa & Great Builder",
      contribution:
        "Visionary ruler of the Holkar dynasty who governed with compassion from Maheshwar, patronized the handloom industry, and rebuilt hundreds of destroyed sacred temples, ghats, and pilgrim resthouses across the entire length of India.",
    },
    {
      name: "Tansen (Ramtanu Pandey)",
      era: "1506 – 1589 CE",
      title: "Father of Hindustani Classical Music",
      contribution:
        "Legendary court musician of Emperor Akbar who originated from Gwalior, father of the Gwalior Gharana, and maestro believed to bring rains with Raga Megh Malhar and light oil lamps with Raga Deepak.",
    },
    {
      name: "Kalidasa",
      era: "4th – 5th Century CE",
      title: "Greatest Sanskrit Poet & Dramatist",
      contribution:
        "Court poet of Ujjain under Vikramaditya, author of immortal masterworks 'Abhijnanasakuntalam' and 'Meghaduta', celebrating the romantic beauty and sacred rivers of central India.",
    },
  ],
}
