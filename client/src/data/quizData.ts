import { statesRegistry } from "./states"

export interface QuizQuestion {
  id: string
  category: "Cuisine" | "Heritage" | "Traditions" | "Greeting" | "Geography" | "Identity"
  prompt: string
  clueImage?: string
  correctStateId: string
  correctStateName: string
  options: {
    stateId: string
    stateName: string
  }[]
  explanation: string
  regionHint: string
  capitalHint: string
}

// Curated pool of high-quality, authentic questions with verified images
const BASE_QUESTIONS: Omit<QuizQuestion, "options">[] = [
  {
    id: "bihar-litti",
    category: "Cuisine",
    prompt: "Which state is celebrated for its iconic dish 'Litti Chokha', paired with sattu and roasted eggplant?",
    clueImage: "/images/bihar/litti_chokha.jpg",
    correctStateId: "bihar",
    correctStateName: "Bihar",
    explanation: "Litti Chokha is the quintessential soul food of Bihar, made with roasted whole wheat dough balls stuffed with spiced gram flour (sattu).",
    regionHint: "Located in Eastern India along the sacred Ganges river basin.",
    capitalHint: "Its capital is ancient Pataliputra, now known as Patna.",
  },
  {
    id: "rajasthan-greeting",
    category: "Greeting",
    prompt: "In which royal desert state do locals warmly welcome you with 'Khamma Ghani'?",
    clueImage: "/images/rajasthan/hawa_mahal.jpg",
    correctStateId: "rajasthan",
    correctStateName: "Rajasthan",
    explanation: "'Khamma Ghani' is the timeless greeting of Rajputana, wishing boundless joy, divine protection, and auspicious peace.",
    regionHint: "Located in Western India, bordering the Thar Desert.",
    capitalHint: "Its capital is the famous 'Pink City' of Jaipur.",
  },
  {
    id: "punjab-golden-temple",
    category: "Heritage",
    prompt: "Which state is home to Sri Harmandir Sahib (The Golden Temple) and celebrated for the Baisakhi harvest festival?",
    clueImage: "/images/punjab/golden_temple.jpg",
    correctStateId: "punjab",
    correctStateName: "Punjab",
    explanation: "Sri Harmandir Sahib in Amritsar, Punjab, serves free sacred meals (Langar) to over 100,000 pilgrims daily, embodying universal equality.",
    regionHint: "Located in Northern India, known as the Land of Five Rivers.",
    capitalHint: "It shares its planned capital Chandigarh with Haryana.",
  },
  {
    id: "kerala-kathakali",
    category: "Traditions",
    prompt: "Which coastal state is the birthplace of the classical dance drama Kathakali and famous backwater houseboats?",
    clueImage: "/images/kerala/kathakali.jpg",
    correctStateId: "kerala",
    correctStateName: "Kerala",
    explanation: "Kathakali is renowned for its elaborate makeup, vibrant costumes, and intricate facial expressions depicted across God's Own Country.",
    regionHint: "Situated on the tropical southwestern Malabar Coast of India.",
    capitalHint: "Its capital is Thiruvananthapuram.",
  },
  {
    id: "odisha-konark",
    category: "Heritage",
    prompt: "Which state hosts the 13th-century Sun Temple of Konark, designed as a colossal stone chariot of the Sun God Surya?",
    clueImage: "/images/odisha/konark_sun_temple.jpg",
    correctStateId: "odisha",
    correctStateName: "Odisha",
    explanation: "The Konark Sun Temple features 24 meticulously carved granite wheels and 7 horses, celebrated as a UNESCO World Heritage marvel.",
    regionHint: "Located on the eastern coast along the Bay of Bengal.",
    capitalHint: "Its capital is the Temple City of Bhubaneswar.",
  },
  {
    id: "ladakh-julley",
    category: "Greeting",
    prompt: "In which high-altitude Himalayan territory do people greet with a warm smile saying 'Julley!'?",
    clueImage: "/images/ladakh/thiksey_monastery.jpg",
    correctStateId: "ladakh",
    correctStateName: "Ladakh",
    explanation: "'Julley' is the versatile Ladakhi greeting used for hello, welcome, respect, and peace across high mountain passes.",
    regionHint: "A Union Territory nestled in the trans-Himalayan rain-shadow region.",
    capitalHint: "Its primary joint capital cities are Leh and Kargil.",
  },
  {
    id: "meghalaya-clouds",
    category: "Geography",
    prompt: "Known as the 'Abode of Clouds', which state is famous for living root bridges and receiving the highest rainfall on Earth?",
    clueImage: "/images/meghalaya/double_decker_bridge.jpg",
    correctStateId: "meghalaya",
    correctStateName: "Meghalaya",
    explanation: "Meghalaya is home to Mawsynram and Cherrapunji, as well as ancient bio-engineering marvels: the living root bridges of the Khasi hills.",
    regionHint: "Located in Northeast India, bordering Assam and Bangladesh.",
    capitalHint: "Its capital is the scenic hill city of Shillong.",
  },
  {
    id: "gujarat-garba",
    category: "Traditions",
    prompt: "Which state hosts the world's longest dance festival with nine nights of vibrant Garba and Dandiya Raas?",
    clueImage: "/images/gujarat/garba_dance.jpg",
    correctStateId: "gujarat",
    correctStateName: "Gujarat",
    explanation: "Garba is celebrated during Navratri across Gujarat and was inscribed onto UNESCO's Intangible Cultural Heritage list in 2023.",
    regionHint: "Situated on India's western coast with the longest coastline of any Indian state.",
    capitalHint: "Its capital is Gandhinagar, adjacent to Ahmedabad.",
  },
  {
    id: "tamilnadu-chola",
    category: "Heritage",
    prompt: "Which state is home to the UNESCO Great Living Chola Temples, including the majestic Brihadisvara Temple of Thanjavur?",
    clueImage: "/images/tamilnadu/brihadeeswarar_temple.jpg",
    correctStateId: "tamil-nadu",
    correctStateName: "Tamil Nadu",
    explanation: "Built by Emperor Raja Raja Chola I over 1,000 years ago, the Brihadisvara Temple's monolithic granite tower (vimana) is an architectural wonder.",
    regionHint: "Situated in the southernmost part of the Indian subcontinent.",
    capitalHint: "Its capital is Chennai on the Coromandel Coast.",
  },
  {
    id: "assam-kaziranga",
    category: "Identity",
    prompt: "Which state produces world-renowned golden Muga silk and shelters the world's largest population of great one-horned rhinos?",
    clueImage: "/images/assam/kaziranga_rhino.jpg",
    correctStateId: "assam",
    correctStateName: "Assam",
    explanation: "Kaziranga National Park in Assam holds two-thirds of the world's great one-horned rhinoceroses and is fed by the mighty Brahmaputra river.",
    regionHint: "Located in the heart of Northeast India's Brahmaputra valley.",
    capitalHint: "Its capital is Dispur (Guwahati).",
  },
  {
    id: "maharashtra-ajanta",
    category: "Heritage",
    prompt: "In which state are the ancient rock-cut cave temples of Ajanta and Ellora, including the monolithic Kailasa Temple, located?",
    clueImage: "/images/maharashtra/kailasa_temple.jpg",
    correctStateId: "maharashtra",
    correctStateName: "Maharashtra",
    explanation: "The Kailasa Temple at Ellora (Cave 16) is the largest monolithic rock-cut monument in the world, carved from top to bottom from a single cliff.",
    regionHint: "Located in Western-Central India spanning the Western Ghats and Deccan Plateau.",
    capitalHint: "Its financial capital is Mumbai.",
  },
  {
    id: "karnataka-hampi",
    category: "Heritage",
    prompt: "The ruins of the Vijayanagara Empire with its iconic Stone Chariot and grand bazaars are situated in which state?",
    clueImage: "/images/karnataka/hampi_stone_chariot.jpg",
    correctStateId: "karnataka",
    correctStateName: "Karnataka",
    explanation: "Hampi in Karnataka was the 14th-century capital of the Vijayanagara Empire and was described by medieval travelers as one of the world's grandest cities.",
    regionHint: "Located in Southwestern India along the Arabian Sea.",
    capitalHint: "Its capital is the silicon hub Bengaluru.",
  },
  {
    id: "westbengal-durga",
    category: "Traditions",
    prompt: "Which state hosts the world-famous UNESCO Intangible Cultural Heritage street festival of Durga Puja?",
    clueImage: "/images/westbengal/durga_puja.jpg",
    correctStateId: "west-bengal",
    correctStateName: "West Bengal",
    explanation: "Durga Puja in West Bengal transforms entire cities into open-air contemporary art installations celebrating divine motherly energy.",
    regionHint: "Located in Eastern India, spanning from the Himalayas to the Sundarbans mangrove delta.",
    capitalHint: "Its capital is the cultural hub Kolkata.",
  },
  {
    id: "jharkhand-johar",
    category: "Greeting",
    prompt: "In which mineral-rich state do indigenous tribal communities greet one another with the sacred word 'Johar'?",
    clueImage: "/images/jharkhand/sarhul_festival.jpg",
    correctStateId: "jharkhand",
    correctStateName: "Jharkhand",
    explanation: "'Johar' represents deep reverence for nature, ancestral spirits, and universal human brotherhood among Santali, Ho, and Munda peoples.",
    regionHint: "Located in Eastern India, carved out of the southern Chota Nagpur plateau.",
    capitalHint: "Its capital is Ranchi, famous for its waterfalls.",
  },
  {
    id: "goa-beaches",
    category: "Identity",
    prompt: "Which coastal state blends vibrant Konkani culture with Portuguese colonial baroque basilicas and is famous for Bebinca?",
    clueImage: "/images/goa/basilica_bom_jesus.jpg",
    correctStateId: "goa",
    correctStateName: "Goa",
    explanation: "Goa is home to the Basilica of Bom Jesus (UNESCO), fragrant spice plantations, and the layered dessert Bebinca.",
    regionHint: "India's smallest state by area, located along the Konkan coast.",
    capitalHint: "Its capital is the charming riverside city of Panaji.",
  },
  {
    id: "uttarakhand-devbhoomi",
    category: "Identity",
    prompt: "Known as 'Devbhoomi' (Land of the Gods), which state is the source of the sacred rivers Ganga and Yamuna?",
    clueImage: "/images/uttarakhand/kedarnath_temple.jpg",
    correctStateId: "uttarakhand",
    correctStateName: "Uttarakhand",
    explanation: "Uttarakhand houses the Char Dham pilgrimage sites: Gangotri, Yamunotri, Kedarnath, and Badrinath amidst high Himalayan peaks.",
    regionHint: "A northern Himalayan state bordering Tibet and Nepal.",
    capitalHint: "Its winter capital is Dehradun and summer capital is Gairsain.",
  },
  {
    id: "sikkim-kanchenjunga",
    category: "Geography",
    prompt: "Which northeastern state is home to Mt. Kanchenjunga (India's highest peak) and is 100% certified organic?",
    clueImage: "/images/sikkim/rumtek_monastery.jpg",
    correctStateId: "sikkim",
    correctStateName: "Sikkim",
    explanation: "Sikkim became the world's first 100% organic state in 2016 and is framed by sacred monasteries under Mt. Kanchenjunga.",
    regionHint: "Nestled in the Eastern Himalayas, bordered by Bhutan, Nepal, and Tibet.",
    capitalHint: "Its capital is the hill town of Gangtok.",
  },
  {
    id: "chhattisgarh-falls",
    category: "Geography",
    prompt: "Which state boasts the breathtaking Chitrakote Falls, often affectionately hailed as the 'Niagara of India'?",
    clueImage: "/images/chhattisgarh/chitrakote_falls.jpg",
    correctStateId: "chhattisgarh",
    correctStateName: "Chhattisgarh",
    explanation: "Chitrakote Falls on the Indravati river in Bastar, Chhattisgarh, spans nearly 300 meters wide during monsoons.",
    regionHint: "Located in Central-Eastern India, historically known for 36 ancient forts.",
    capitalHint: "Its capital is Raipur.",
  },
  {
    id: "andhra-kuchipudi",
    category: "Traditions",
    prompt: "Which southern state is the birthplace of the classical dance form Kuchipudi and famous for Tirupati Balaji Temple?",
    clueImage: "/images/andhrapradesh/kuchipudi_dance.jpg",
    correctStateId: "andhra-pradesh",
    correctStateName: "Andhra Pradesh",
    explanation: "Kuchipudi originated in the Krishna district of Andhra Pradesh, and the Sri Venkateswara Temple atop the Tirumala hills is one of the world's most visited spiritual centers.",
    regionHint: "Located along India's southeastern coast with a long coastal corridor.",
    capitalHint: "Its riverfront capital is Amaravati.",
  },
  {
    id: "mizoram-bamboo",
    category: "Traditions",
    prompt: "Which state is famous for the Cheraw (Bamboo Dance), where dancers step rhythmically between clapped bamboo poles?",
    clueImage: "/images/mizoram/cheraw_bamboo_dance.jpg",
    correctStateId: "mizoram",
    correctStateName: "Mizoram",
    explanation: "Cheraw is an ancient traditional folk dance of Mizoram performed during Chapchar Kut, requiring agility, rhythm, and grace.",
    regionHint: "Located in the southernmost tip of Northeast India.",
    capitalHint: "Its capital is the ridge-top city of Aizawl.",
  },
  {
    id: "puducherry-french",
    category: "Identity",
    prompt: "Which Union Territory is famous for its French colonial quarter, Promenade Beach, and the universal township of Auroville?",
    clueImage: "/images/puducherry/french_quarter.jpg",
    correctStateId: "puducherry",
    correctStateName: "Puducherry",
    explanation: "Puducherry preserves a unique blend of French boulevard architecture with ancient Tamil spiritual heritage.",
    regionHint: "Located along the Coromandel Coast of the Bay of Bengal.",
    capitalHint: "Its administrative seat is the city of Puducherry.",
  },
]

// Deduplicate states strictly by stateName so no alias duplicates ever occur
const UNIQUE_STATE_MAP = new Map<string, { stateId: string; stateName: string }>()
Object.entries(statesRegistry).forEach(([slug, bundle]) => {
  if (!UNIQUE_STATE_MAP.has(bundle.data.name)) {
    UNIQUE_STATE_MAP.set(bundle.data.name, {
      stateId: slug,
      stateName: bundle.data.name,
    })
  }
})

const DEDUPED_STATE_LIST = Array.from(UNIQUE_STATE_MAP.values())

/**
 * Generate a randomized quiz round with realistic, strictly unique options
 */
export function generateQuizRound(count: number = 5): QuizQuestion[] {
  // Shuffle base questions
  const shuffled = [...BASE_QUESTIONS].sort(() => 0.5 - Math.random())
  const selected = shuffled.slice(0, count)

  return selected.map((q) => {
    // Pick 3 distractors whose stateName is strictly DIFFERENT from the correct state name
    const distractors = DEDUPED_STATE_LIST.filter(
      (s) => s.stateName !== q.correctStateName
    )
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)

    // Combine correct answer with distractors and shuffle
    const options = [
      { stateId: q.correctStateId, stateName: q.correctStateName },
      ...distractors,
    ].sort(() => 0.5 - Math.random())

    return {
      ...q,
      options,
    }
  })
}
