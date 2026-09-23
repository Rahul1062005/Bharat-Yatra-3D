export interface BharatFestival {
  id: string
  name: string
  hindiName: string
  states: string[]
  month: string
  monthNum: number
  season: "Vasant" | "Grishma" | "Varsha" | "Sharad" | "Hemant" | "Shishir"
  category: "Spiritual" | "Harvest & Folk" | "Classical Art & Music" | "Desert & Fair"
  tagline: string
  highlights: string[]
  traditionalFood: string
  travelTip: string
  color: string
}

export interface BharatSeason {
  name: string
  sanskritName: string
  gregorianMonths: string
  element: string
  poeticDesc: string
  climate: string
  idealDestinations: string[]
  accentColor: string
}

export interface StateTravelWindow {
  stateId: string
  stateName: string
  bestTime: string
  peakMonths: string[]
  temperature: string
  whyVisit: string
  signatureFestival: string
}

export const BHARAT_SEASONS: BharatSeason[] = [
  {
    name: "Vasant (Spring)",
    sanskritName: "वसन्तः",
    gregorianMonths: "March – April",
    element: "Blooming Flora & Fragrance",
    poeticDesc: "The King of Seasons (Rituraja). Nature awakens with flowering palash, sweet mango blossoms, and vibrant festive colors.",
    climate: "Pleasant days, crisp breezy evenings (20°C - 30°C)",
    idealDestinations: [
      "Braj / Mathura & Vrindavan (Lathmar & Phoolon Ki Holi)",
      "Kashmir Valley (Tulip & Almond Blossoms)",
      "Khajuraho, MP (Dance Festival)",
      "Varanasi, UP (Gulab Bari & Ghat walks)",
      "Jaipur & Udaipur, Rajasthan (Gangaur)"
    ],
    accentColor: "#f59e0b"
  },
  {
    name: "Grishma (Summer)",
    sanskritName: "ग्रीष्मः",
    gregorianMonths: "May – June",
    element: "Sun & Golden Daylight",
    poeticDesc: "Luminous sun and ripening golden mangoes. A time to ascend into sacred Himalayan heights and misty hill plantations.",
    climate: "Warm in plains (32°C - 42°C); cool & refreshing in mountain belts (14°C - 24°C)",
    idealDestinations: [
      "Ladakh (Pangong Tso & Monastery Festivals)",
      "Himachal Pradesh (Spiti, Manali, Dharamshala)",
      "Uttarakhand (Valley of Flowers, Char Dham)",
      "Sikkim (Gurudongmar Lake, Yumthang)",
      "Nilgiris & Munnar (Tea mist & hill breeze)"
    ],
    accentColor: "#ea580c"
  },
  {
    name: "Varsha (Monsoon)",
    sanskritName: "वर्षा",
    gregorianMonths: "July – August",
    element: "Life-Giving Rain & Fresh Earth",
    poeticDesc: "The petrichor of rain on parched soil. Waterfalls plunge in emerald splendor as peacock dances celebrate the clouds.",
    climate: "Lush tropical rains, high humidity, dramatic cloudscapes (24°C - 30°C)",
    idealDestinations: [
      "Western Ghats, Maharashtra (Lonavala waterfalls, Sahyadri forts)",
      "Kerala (Ayurvedic rejuvenation, backwater houseboats)",
      "Meghalaya (Cherrapunji & living root bridges)",
      "Udaipur, Rajasthan (The City of Lakes overflowing)",
      "Mandu, Madhya Pradesh (Monsoon romantic architecture)"
    ],
    accentColor: "#0284c7"
  },
  {
    name: "Sharad (Autumn)",
    sanskritName: "शरद्",
    gregorianMonths: "September – October",
    element: "Clear Azure Skies & Moonlight",
    poeticDesc: "Skies clear into deep cobalt blue. White lotus blossoms float on ponds, and the cosmic celebration of Durga Puja and Navratri begins.",
    climate: "Crisp, crystal clear skies and pleasant weather (22°C - 31°C)",
    idealDestinations: [
      "Kolkata, West Bengal (Spectacular Durga Puja pandals)",
      "Gujarat (9 Nights of Garba & Dandiya)",
      "Mysore, Karnataka (Mysore Dasara palace illumination)",
      "Kullu, Himachal Pradesh (International Dussehra festival)",
      "Bodh Gaya, Bihar (Peaceful Buddhist pilgrimage season)"
    ],
    accentColor: "#ec4899"
  },
  {
    name: "Hemant (Pre-Winter)",
    sanskritName: "हेमन्तः",
    gregorianMonths: "November – December",
    element: "Morning Dew & Radiant Diyas",
    poeticDesc: "Crisp golden mornings with shimmering dew. The sacred festival of lights (Diwali) and desert melas light up India.",
    climate: "Chilly mornings, warm sunlit afternoons (15°C - 26°C)",
    idealDestinations: [
      "Pushkar, Rajasthan (World's largest Camel Fair)",
      "Rann of Kutch, Gujarat (Rann Utsav white desert under full moon)",
      "Kohima, Nagaland (Iconic Hornbill Festival)",
      "Varanasi, UP (Dev Deepawali - 1 million lamps on ghats)",
      "Hampi, Karnataka (Temples under glorious winter skies)"
    ],
    accentColor: "#b45309"
  },
  {
    name: "Shishir (Winter)",
    sanskritName: "शिशिरः",
    gregorianMonths: "January – February",
    element: "Mist, Snow & Bonfires",
    poeticDesc: "Frosty mornings, warming bonfire gatherings, festive kite battles, and rich winter sweets made with fresh jaggery and sesame.",
    climate: "Chilly to cold (10°C - 22°C in plains; snow in high Himalayas)",
    idealDestinations: [
      "Rajasthan (Jaisalmer Desert Festival, Jaipur Lit Fest)",
      "Punjab (Lohri bonfires, golden mustard sarson fields)",
      "Assam (Magh Bihu, Kaziranga Rhino safaris)",
      "Odisha (Konark Dance Festival, Chilika migratory birds)",
      "Tamil Nadu (Pongal celebrations in heritage villages)"
    ],
    accentColor: "#6366f1"
  }
]

export const BHARAT_FESTIVALS: BharatFestival[] = [
  {
    id: "diwali",
    name: "Diwali & Dev Deepawali",
    hindiName: "दीपावली एवं देव दीपावली",
    states: ["Pan-India", "Uttar Pradesh", "Bihar", "Rajasthan", "Maharashtra"],
    month: "October – November",
    monthNum: 10,
    season: "Hemant",
    category: "Spiritual",
    tagline: "The Cosmic Triumph of Divine Light over Darkness",
    highlights: [
      "Millions of earthen diyas glowing across rooftops, ghats, and courtyards",
      "Spectacular Ganga aartis with 84 ghats illuminated in Varanasi on Kartik Purnima",
      "Traditional Rangoli patterns made with floral petals and rice powder"
    ],
    traditionalFood: "Mawa Gujiya, Kaju Katli, Besan Ladoo & Mysore Pak",
    travelTip: "Book Varanasi or Ayodhya ghat boat rides 2 months in advance for the world's most breathtaking night illumination.",
    color: "#f59e0b"
  },
  {
    id: "durga-puja",
    name: "Durga Puja & Navratri",
    hindiName: "दुर्गा पूजा एवं नवरात्रि",
    states: ["West Bengal", "Gujarat", "Assam", "Tripura", "Delhi"],
    month: "September – October",
    monthNum: 9,
    season: "Sharad",
    category: "Spiritual",
    tagline: "UNESCO Intangible Cultural Heritage of Humanity",
    highlights: [
      "Grand artistic marquee pandals in Kolkata displaying sublime clay sculptures",
      "Hypnotic Dhunuchi dance performed to the rhythmic beats of Dhaak drums",
      "9 nights of joyous Garba circles in vibrant Chaniya Cholis in Gujarat"
    ],
    traditionalFood: "Khichuri Bhog, Labra, Sandesh, Mishti Doi & Jalebi Fafda",
    travelTip: "Explore Kolkata pandals on late night heritage walks between 10 PM and 4 AM when crowds are lively and lighting is majestic.",
    color: "#e11d48"
  },
  {
    id: "chhath-puja",
    name: "Chhath Puja",
    hindiName: "महापर्व छठ पूजा",
    states: ["Bihar", "Jharkhand", "Uttar Pradesh", "Delhi"],
    month: "October – November",
    monthNum: 11,
    season: "Hemant",
    category: "Spiritual",
    tagline: "Ancient Vedic Homage to Sun God Surya & Chhathi Maiya",
    highlights: [
      "Pristine devotion without priests; offering Arghya directly to setting and rising Sun",
      "Devotees standing knee-deep in sacred river waters holding bamboo Soop baskets",
      "Melodious traditional folk hymns echoing across river banks at dawn"
    ],
    traditionalFood: "Thekua (wheat & jaggery prasad fried in pure ghee), Kasar & Fresh Fruits",
    travelTip: "Visit the riverbanks of Ganga in Patna or Sun Temples in Deo (Aurangabad) for an unforgettable spiritual sunrise experience.",
    color: "#ea580c"
  },
  {
    id: "hornbill",
    name: "Hornbill Festival",
    hindiName: "हॉर्नबिल महोत्सव",
    states: ["Nagaland"],
    month: "December 1 – 10",
    monthNum: 12,
    season: "Hemant",
    category: "Harvest & Folk",
    tagline: "The Festival of Festivals of the Naga Tribes",
    highlights: [
      "Gathering of 17 indigenous Naga tribes at Kisama Heritage Village",
      "Spectacular feathered war headgears, warrior dances, and bamboo archery",
      "Traditional folk songs, indigenous Naga cuisine, and rock music concerts"
    ],
    traditionalFood: "Bamboo shoot delicacies, roasted rice cakes & Naga spiced smoked herbs",
    travelTip: "Book homestays near Kohima or Kisama village months ahead; winter nights are chilly, so pack warm woolens.",
    color: "#b45309"
  },
  {
    id: "pushkar-mela",
    name: "Pushkar Camel & Cultural Fair",
    hindiName: "पुष्कर मेला",
    states: ["Rajasthan"],
    month: "November (Kartik Purnima)",
    monthNum: 11,
    season: "Hemant",
    category: "Desert & Fair",
    tagline: "World's Most Colorful Desert Spectacle on Sacred Lake Sands",
    highlights: [
      "Over 50,000 camels, horses, and cattle adorned with colorful tassels and bells",
      "Spiritual dip in the sacred Brahma Lake under the full moon",
      "Rajasthani Kalbelia dances, mustache competitions, and hot air ballooning"
    ],
    traditionalFood: "Malpua soaked in rabdi, Dal Baati Churma & Ker Sangri",
    travelTip: "Wake up at 5:30 AM to witness sunrise over the dunes as camel herders light morning chai fires.",
    color: "#d97706"
  },
  {
    id: "holi",
    name: "Holi & Lathmar Holi",
    hindiName: "होली एवं लठमार होली",
    states: ["Uttar Pradesh", "Rajasthan", "Madhya Pradesh", "Pan-India"],
    month: "March (Phalguna Purnima)",
    monthNum: 3,
    season: "Vasant",
    category: "Harvest & Folk",
    tagline: "The Ecstatic Spring Festival of Colors, Love & Renewal",
    highlights: [
      "Barsana & Nandgaon Lathmar Holi celebrating Radha-Krishna playfulness",
      "Vrindavan Banke Bihari temple drenched in herbal Gulal and flower petals",
      "Royal Holika Dahan bonfire processions by the Maharana in Udaipur"
    ],
    traditionalFood: "Thandai with saffron and pistachios, Puran Poli & Gujiya",
    travelTip: "Wear organic cotton clothes you don't mind discarding; apply coconut oil to skin and hair before joining the festivities.",
    color: "#db2777"
  },
  {
    id: "onam",
    name: "Onam & Vallam Kali",
    hindiName: "ओणम एवं वल्लम कली",
    states: ["Kerala"],
    month: "August – September (Chingam)",
    monthNum: 8,
    season: "Sharad",
    category: "Harvest & Folk",
    tagline: "The Grand Harvest Feast Welcoming King Mahabali",
    highlights: [
      "Nehru Trophy Snake Boat Races (Chundan Vallam) surging through Punnamada Lake",
      "Intricate floral carpet mandalas (Pookkalam) adorning every house front",
      "Graceful Pulikkali (tiger dance) and Thiruvathira folk performances"
    ],
    traditionalFood: "Grand Onasadya feast with 26 vegetarian dishes served on banana leaf with Payasam",
    travelTip: "Book boat race pavilion tickets in Alappuzha well in advance to hear thousands of rowers chanting Vanchipattu in unison.",
    color: "#059669"
  },
  {
    id: "bihu",
    name: "Rongali & Magh Bihu",
    hindiName: "रोंगाली एवं माघ बिहू",
    states: ["Assam"],
    month: "April (Rongali) & January (Magh)",
    monthNum: 4,
    season: "Vasant",
    category: "Harvest & Folk",
    tagline: "The Joyous Soul & Rhythm of the Brahmaputra Valley",
    highlights: [
      "Electrifying Bihu folk dances accompanied by Dhol, Pepa (buffalo horn flute), and Gogona",
      "Wearing traditional ivory Muga silk and red Gamusa",
      "Community bonfires (Meji) built of bamboo and thatch to thank Agni"
    ],
    traditionalFood: "Pitha (rice rolls with sesame & jaggery), Laru, Chira with curd & Masor Tenga",
    travelTip: "Pair your Bihu visit with an early morning jeep safari in Kaziranga National Park to view the One-Horned Rhinoceros.",
    color: "#ca8a04"
  },
  {
    id: "rann-utsav",
    name: "Rann Utsav (White Desert Festival)",
    hindiName: "रण उत्सव",
    states: ["Gujarat"],
    month: "November – February",
    monthNum: 12,
    season: "Shishir",
    category: "Desert & Fair",
    tagline: "Ethereal Salt Flats Glowing Under the Desert Moonlight",
    highlights: [
      "Vast endless white salt desert shimmering like silver beneath the full moon",
      "Tent City luxury stays with authentic Kutchi embroidery and music",
      "Paramotoring, camel safaris, and visits to Kala Dungar (Black Hill)"
    ],
    traditionalFood: "Kutchi Dabeli, Bajra no Rotlo with garlic chutney & creamy Gulab Pak",
    travelTip: "Schedule your visit during the 3 days of the full moon cycle (Purnima) for the most magical surreal landscape views.",
    color: "#0891b2"
  },
  {
    id: "pongal",
    name: "Pongal & Jallikattu",
    hindiName: "पोंगल एवं जल्लीकट्टू",
    states: ["Tamil Nadu"],
    month: "January (Thai)",
    monthNum: 1,
    season: "Shishir",
    category: "Harvest & Folk",
    tagline: "Four-Day Thanksgiving Harvest to Sun, Earth & Cattle",
    highlights: [
      "Boiling fresh milk and newly harvested rice in earthen pots until it overflows ('Pongalo Pongal!')",
      "Mattu Pongal honoring sacred bulls with painted horns and floral garlands",
      "Madurai Jallikattu traditional bull-taming valor showcase in Alanganallur"
    ],
    traditionalFood: "Sweet Sakkarai Pongal, Ven Pongal, Medu Vada & Sugarcane stalks",
    travelTip: "Visit rural Chettinad heritage mansions or Thanjavur during Pongal to experience authentic village community celebrations.",
    color: "#b91c1c"
  },
  {
    id: "hemis",
    name: "Hemis Festival & Cham Dances",
    hindiName: "हेमिस महोत्सव",
    states: ["Ladakh"],
    month: "June – July",
    monthNum: 6,
    season: "Grishma",
    category: "Spiritual",
    tagline: "Tibetan Sacred Masked Dances in High Himalayan Monasteries",
    highlights: [
      "Birth anniversary celebration of Guru Padmasambhava at Hemis Monastery courtyard",
      "Lamas in vibrant silk robes and tantric masks performing sacred Cham dances",
      "Unfurling of the giant two-storey Thangka painting every 12 years"
    ],
    traditionalFood: "Tibetan Thukpa, Steamed Tingmo, Momos & Hot Butter Tea (Gur Gur Chai)",
    travelTip: "Arrive in Leh at least 2 days prior to acclimatize to high altitude (3,500m) before attending all-day monastery festivals.",
    color: "#7c3aed"
  },
  {
    id: "mysore-dasara",
    name: "Mysore Dasara & Nada Habba",
    hindiName: "मैसूर दसरा",
    states: ["Karnataka"],
    month: "October",
    monthNum: 10,
    season: "Sharad",
    category: "Classical Art & Music",
    tagline: "400-Year-Old Royal Pageantry of the Wadiyar Dynasty",
    highlights: [
      "Mysore Palace glowing with 100,000 golden incandescent bulbs at nightfall",
      "Jumbo Savari grand procession carrying Chamundeshwari idol on a 750kg golden howdah",
      "Torchlight Parade and classical Carnatic concerts in palace courtyards"
    ],
    traditionalFood: "Original Mysore Pak, Mysore Masala Dosa & Maddur Vada",
    travelTip: "Secure palace arena seating passes early; view the lighting switch-on right at 7:00 PM for the ultimate royal spectacle.",
    color: "#9333ea"
  }
]

export const STATE_TRAVEL_WINDOWS: Record<string, StateTravelWindow> = {
  rajasthan: {
    stateId: "rajasthan",
    stateName: "Rajasthan",
    bestTime: "October to March",
    peakMonths: ["November", "December", "January", "February"],
    temperature: "12°C – 26°C",
    whyVisit: "Pleasant desert days, cool starry nights, royal fort festivals, and the Pushkar Camel Fair.",
    signatureFestival: "Pushkar Fair & Desert Festival"
  },
  bihar: {
    stateId: "bihar",
    stateName: "Bihar",
    bestTime: "October to March",
    peakMonths: ["October", "November", "December", "February"],
    temperature: "14°C – 27°C",
    whyVisit: "Spiritual weather for Nalanda ruins, Mahabodhi Temple in Bodh Gaya, and Chhath Puja riverside devotion.",
    signatureFestival: "Chhath Puja & Rajgir Mahotsav"
  },
  kerala: {
    stateId: "kerala",
    stateName: "Kerala",
    bestTime: "September to March (or July-Aug for Monsoon Ayurveda)",
    peakMonths: ["November", "December", "January"],
    temperature: "22°C – 31°C",
    whyVisit: "Gentle breezes across backwaters, Kathakali dances, spice garden walks, and Onam feast season.",
    signatureFestival: "Onam & Thrissur Pooram"
  },
  ladakh: {
    stateId: "ladakh",
    stateName: "Ladakh",
    bestTime: "May to September",
    peakMonths: ["June", "July", "August"],
    temperature: "10°C – 24°C",
    whyVisit: "High mountain passes open, crystal blue Pangong & Tso Moriri lakes, and vibrant monastery Hemis Cham festivals.",
    signatureFestival: "Hemis Festival & Ladakh Festival"
  },
  "uttar-pradesh": {
    stateId: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    bestTime: "October to March",
    peakMonths: ["November", "December", "January", "February"],
    temperature: "11°C – 25°C",
    whyVisit: "Comfortable cool weather to visit Taj Mahal at sunrise, sacred Ayodhya, Mathura Holi, and Varanasi ghats.",
    signatureFestival: "Dev Deepawali & Barsana Holi"
  },
  "west-bengal": {
    stateId: "west-bengal",
    stateName: "West Bengal",
    bestTime: "October to March",
    peakMonths: ["October", "November", "December"],
    temperature: "15°C – 28°C",
    whyVisit: "World-famous Durga Puja pandals in Kolkata, Darjeeling tea mist with Kanchenjunga views, and Sundarbans safaris.",
    signatureFestival: "Durga Puja & Poush Mela"
  },
  maharashtra: {
    stateId: "maharashtra",
    stateName: "Maharashtra",
    bestTime: "October to March (or July-Sept for Monsoon trekking)",
    peakMonths: ["November", "December", "January"],
    temperature: "18°C – 30°C",
    whyVisit: "Ajanta & Ellora caves exploration, pleasant sea breezes in Mumbai, and Sahyadri fort heritage trails.",
    signatureFestival: "Ganesh Chaturthi & Elephanta Fest"
  },
  gujarat: {
    stateId: "gujarat",
    stateName: "Gujarat",
    bestTime: "October to March",
    peakMonths: ["November", "December", "January"],
    temperature: "14°C – 29°C",
    whyVisit: "The White Desert Rann Utsav under full moon, Gir Lion safari season, and vibrant Navratri Garba nights.",
    signatureFestival: "Rann Utsav & Navratri Garba"
  },
  "tamil-nadu": {
    stateId: "tamil-nadu",
    stateName: "Tamil Nadu",
    bestTime: "November to March",
    peakMonths: ["December", "January", "February"],
    temperature: "20°C – 30°C",
    whyVisit: "Comfortable temple hopping across Madurai, Thanjavur, and Mahabalipuram shore temples, plus Pongal festivities.",
    signatureFestival: "Pongal & Natyanjali Dance Fest"
  },
  karnataka: {
    stateId: "karnataka",
    stateName: "Karnataka",
    bestTime: "October to March",
    peakMonths: ["October", "November", "December"],
    temperature: "17°C – 29°C",
    whyVisit: "Cool weather across Hampi boulder ruins, illuminated Mysore Palace, and Coorg coffee hill plantations.",
    signatureFestival: "Mysore Dasara & Hampi Utsav"
  },
  punjab: {
    stateId: "punjab",
    stateName: "Punjab",
    bestTime: "October to March",
    peakMonths: ["December", "January", "February"],
    temperature: "8°C – 22°C",
    whyVisit: "Golden Temple reflected under cool winter night skies, mustard field blossoms, and festive Lohri bonfires.",
    signatureFestival: "Lohri, Baisakhi & Hola Mohalla"
  },
  assam: {
    stateId: "assam",
    stateName: "Assam",
    bestTime: "November to April",
    peakMonths: ["December", "January", "February", "April"],
    temperature: "12°C – 25°C",
    whyVisit: "Brahmaputra river cruises, Kaziranga Rhino safaris, green tea gardens, and Rongali Bihu celebrations.",
    signatureFestival: "Rongali Bihu & Magh Bihu"
  },
  "himachal-pradesh": {
    stateId: "himachal-pradesh",
    stateName: "Himachal Pradesh",
    bestTime: "March to June (Summer) or Dec-Feb (Snow)",
    peakMonths: ["April", "May", "June", "December"],
    temperature: "5°C – 22°C",
    whyVisit: "Pleasant pine forests, apple blossoms, mountain trekking in Spiti, or winter snowfall in Shimla & Manali.",
    signatureFestival: "Kullu Dussehra & Minjar Fair"
  },
  uttarakhand: {
    stateId: "uttarakhand",
    stateName: "Uttarakhand",
    bestTime: "March to June & September to November",
    peakMonths: ["April", "May", "October"],
    temperature: "8°C – 24°C",
    whyVisit: "Char Dham pilgrimage season, Rishikesh Ganga rafting & aartis, and Jim Corbett wildlife safaris.",
    signatureFestival: "Ganga Dussehra & Nanda Devi Mela"
  },
  goa: {
    stateId: "goa",
    stateName: "Goa",
    bestTime: "November to March",
    peakMonths: ["December", "January", "February"],
    temperature: "21°C – 32°C",
    whyVisit: "Sun-drenched beaches, Portuguese colonial cathedrals, fresh seafood shacks, and vibrant night bazaars.",
    signatureFestival: "Goa Carnival & Shigmo"
  },
  nagaland: {
    stateId: "nagaland",
    stateName: "Nagaland",
    bestTime: "October to May",
    peakMonths: ["November", "December"],
    temperature: "10°C – 22°C",
    whyVisit: "Experiencing the legendary Hornbill Festival, Dzukou Valley trekking, and rich tribal heritage villages.",
    signatureFestival: "Hornbill Festival (Dec 1-10)"
  },
  odisha: {
    stateId: "odisha",
    stateName: "Odisha",
    bestTime: "October to March",
    peakMonths: ["November", "December", "January", "February"],
    temperature: "15°C – 28°C",
    whyVisit: "Konark Sun Temple wheel carvings, Puri Jagannath Rath Yatra heritage, and Chilika migratory flamingos.",
    signatureFestival: "Puri Rath Yatra & Konark Dance Fest"
  },
  "madhya-pradesh": {
    stateId: "madhya-pradesh",
    stateName: "Madhya Pradesh",
    bestTime: "October to March",
    peakMonths: ["November", "December", "January", "February"],
    temperature: "12°C – 26°C",
    whyVisit: "World-heritage Khajuraho temples, Sanchi stupas, tiger safaris in Kanha & Bandhavgarh, and Mandu.",
    signatureFestival: "Khajuraho Dance Fest & Lokrang"
  },
  delhi: {
    stateId: "delhi",
    stateName: "Delhi (NCT)",
    bestTime: "October to March",
    peakMonths: ["November", "December", "February"],
    temperature: "10°C – 24°C",
    whyVisit: "Heritage monuments (Red Fort, Qutub Minar, Humayun's Tomb), Mughal street foods, and vibrant cultural expos.",
    signatureFestival: "Qutub Festival & Republic Day"
  },
  "jammu-kashmir": {
    stateId: "jammu-kashmir",
    stateName: "Jammu & Kashmir",
    bestTime: "March to October (Valley) & Dec-Feb (Gulmarg Skiing)",
    peakMonths: ["April", "May", "June", "September"],
    temperature: "4°C – 23°C",
    whyVisit: "Dal Lake Shikara rides, Gulmarg snow slopes, Pahalgam pine meadows, and spring Mughal gardens.",
    signatureFestival: "Tulip Festival & Shikara Festival"
  },
  sikkim: {
    stateId: "sikkim",
    stateName: "Sikkim",
    bestTime: "March to May & October to December",
    peakMonths: ["April", "May", "October", "November"],
    temperature: "8°C – 20°C",
    whyVisit: "Jaw-dropping views of Mount Kanchenjunga, Rumtek monastery chants, and alpine rhododendron valleys.",
    signatureFestival: "Losar & Pang Lhabsol"
  }
}
