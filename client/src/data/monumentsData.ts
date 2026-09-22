export interface MonumentPOI {
  name: string
  description: string
  position: [number, number, number] // local coordinate offset
}

export interface Monument3DData {
  id: string
  name: string
  hindiName?: string
  stateId: string
  stateName: string
  location: string
  era: string
  style: string
  material: string
  unesco: boolean
  description: string
  architecturalHighlights: string[]
  pointsOfInterest: MonumentPOI[]
  modelType: "taj-mahal" | "konark-chariot" | "kailasa-temple" | "hampi-chariot" | "mahabodhi-temple" | "gopuram" | "golden-temple" | "arch-gateway"
  primaryColor: string
  accentColor: string
}

export const MONUMENTS_3D_CATALOG: Monument3DData[] = [
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    hindiName: "ताज महल",
    stateId: "uttar-pradesh",
    stateName: "Uttar Pradesh",
    location: "Agra, Yamuna Riverbank",
    era: "1632–1653 CE (Mughal Dynasty)",
    style: "Indo-Islamic Mughal Architecture",
    material: "Makrana White Marble with Pietra Dura Inlay",
    unesco: true,
    description: "Commissioned by Emperor Shah Jahan as a mausoleum for his empress Mumtaz Mahal, the Taj Mahal is a masterpiece of bilateral symmetry, featuring an immense marble dome, four towering minarets, and intricate floral jade, lapis lazuli, and jasper inlays.",
    architecturalHighlights: [
      "Perfect mathematical symmetry and proportional balance",
      "Bulbous onion dome rising 35 meters with lotus finial",
      "Four minarets slightly tilted outward to protect the central dome in earthquakes",
      "Pietra dura floral inlay using semi-precious carnelian and lapis",
    ],
    pointsOfInterest: [
      { name: "Central Bulbous Dome", description: "A double-shell marble dome engineered with a high drum to dominate the skyline.", position: [0, 2.2, 0] },
      { name: "Four Corner Minarets", description: "Each standing 40m tall, angled subtly outwards for seismic safety.", position: [-2.2, 1.4, -2.2] },
      { name: "Grand Iwan (Archway)", description: "Towering vaulted gateway adorned with Quranic calligraphy and chevron inlays.", position: [0, 0.4, 1.25] },
      { name: "Elevated Marble Plinth", description: "Elevates the monument above the Yamuna floodwaters on an 8m high platform.", position: [0, -0.6, 0] },
    ],
    modelType: "taj-mahal",
    primaryColor: "#f8fafc",
    accentColor: "#f59e0b",
  },
  {
    id: "konark-chariot",
    name: "Konark Sun Temple",
    hindiName: "कोणार्क सूर्य मंदिर",
    stateId: "odisha",
    stateName: "Odisha",
    location: "Konark, Bay of Bengal Coast",
    era: "c. 1250 CE (Eastern Ganga Dynasty)",
    style: "Kalinga (Deula) Classical Architecture",
    material: "Khondalite Stone and Chlorite",
    unesco: true,
    description: "Designed in the grand shape of a colossal cosmic chariot for Surya the Sun God, the temple features 24 intricately carved stone wheels (functioning as precision sundials) pulled by seven galloping steeds representing the days of the week.",
    architecturalHighlights: [
      "24 Stone Chariot Wheels serving as astronomical sundials",
      "Seven rearing stone horses representing the colors of the solar spectrum",
      "Jagamohana (Audience Hall) with a pyramidally stepped pidha roof",
      "Interlocking iron clamps and magnet stones embedded in the superstructure",
    ],
    pointsOfInterest: [
      { name: "Astronomical Sun Dial Wheel", description: "3m wide wheels where spoke shadows calculate exact time down to minutes.", position: [1.6, -0.2, 0.6] },
      { name: "Pyramidal Jagamohana", description: "Three-tiered stepped roof crowned by the Amalaka and Kalasha stones.", position: [0, 1.4, -0.2] },
      { name: "Celestial Musicians (Alasa Kanyas)", description: "High-relief sculptures of apsaras playing drums, cymbals, and flutes.", position: [0, 0.6, 0.8] },
      { name: "Plinth Base of 7 Horses", description: "Dynamic galloping horses dynamically sculpted along the chariot front.", position: [-1.4, -0.6, 1.4] },
    ],
    modelType: "konark-chariot",
    primaryColor: "#d97706",
    accentColor: "#fbbf24",
  },
  {
    id: "kailasa-temple",
    name: "Kailasa Rock-Cut Temple",
    hindiName: "कैलाश मंदिर",
    stateId: "maharashtra",
    stateName: "Maharashtra",
    location: "Ellora Caves, Cave 16",
    era: "c. 756–774 CE (Rashtrakuta Dynasty)",
    style: "Dravidian Monolithic Rock-Cut",
    material: "Carved Top-Down from a Single Basalt Cliff",
    unesco: true,
    description: "The largest monolithic rock excavation in the world, carved vertically top-to-bottom from a single continuous volcanic basalt cliff. Over 200,000 tons of rock were manually chiseled away to reveal a two-story multi-court temple modeled after Mount Kailash.",
    architecturalHighlights: [
      "Excavated entirely top-down with zero margin for architectural error",
      "Two-story Nandi Mandapa connected to the sanctum by stone flyovers",
      "Life-sized monolithic elephants and 15-meter victory pillars (Dhwaja Stambhas)",
      "Vast narrative friezes depicting the Ramayana, Mahabharata, and Ravana shaking Kailash",
    ],
    pointsOfInterest: [
      { name: "Main Vimana (Shikhara)", description: "32-meter high Dravidian tower carved with intricate tier-upon-tier deities.", position: [0, 1.8, -0.8] },
      { name: "Monolithic Victory Pillar", description: "Free-standing stone column flanked by sculpted guardian elephants.", position: [-1.5, 0.3, 1.2] },
      { name: "Nandi Mandapa & Bridge", description: "Upper pavilion connected by an aerial bridge directly to the Great Hall.", position: [0, 0.4, 0.4] },
      { name: "Basalt Cliff Scarp", description: "The sheer 30m horseshoe trench carved by Rashtrakuta artisans.", position: [0, -0.7, 0] },
    ],
    modelType: "kailasa-temple",
    primaryColor: "#78716c",
    accentColor: "#f59e0b",
  },
  {
    id: "hampi-chariot",
    name: "Hampi Stone Chariot",
    hindiName: "हम्पी प्रस्तर रथ",
    stateId: "karnataka",
    stateName: "Karnataka",
    location: "Vittala Temple Complex, Hampi",
    era: "16th Century CE (King Krishnadevaraya)",
    style: "Vijayanagara Dravidian Temple Architecture",
    material: "Carved Chlorite Siltstone and Granite",
    unesco: true,
    description: "An iconic shrine dedicated to Garuda (the mount of Lord Vishnu), sculpted to simulate an ornate stone chariot. Built with multiple monolithic granite slabs interlocking so flawlessly that it appears carved from a single boulder, featuring rotating stone wheels.",
    architecturalHighlights: [
      "Flawlessly fitted modular granite slabs with hidden mortise joints",
      "Carved wheels with floral spokes originally designed to rotate on stone axles",
      "Two stone elephants standing sentry at the chariot entrance",
      "Surrounded by the musical pillar mandapa producing 7 melodic notes (Saptaswara)",
    ],
    pointsOfInterest: [
      { name: "Garuda Sanctum", description: "The inner shrine chamber that housed the consecrated idol of Garuda.", position: [0, 0.8, 0] },
      { name: "Concentric Stone Wheels", description: "Spoked wheels carved with floral hubs and lotus petal patterns.", position: [1.2, -0.4, 0.7] },
      { name: "Front Elephant Guardians", description: "Carved stone elephants added in modern restoration to guide the chariot.", position: [0, -0.5, 1.4] },
      { name: "Interlocking Superstructure", description: "Terraced tower mimicking a traveling temple car adorned with mythic beasts.", position: [0, 1.6, 0] },
    ],
    modelType: "hampi-chariot",
    primaryColor: "#ca8a04",
    accentColor: "#facc15",
  },
  {
    id: "mahabodhi-temple",
    name: "Mahabodhi Mahavihara",
    hindiName: "महाबोधि महाविहार",
    stateId: "bihar",
    stateName: "Bihar",
    location: "Bodh Gaya, Niranjana River",
    era: "3rd Century BCE (Ashoka) / 5th Century CE (Gupta)",
    style: "Classical Indian Brick Buddhist Architecture",
    material: "Stucco-Faced Baked Brick and Sandstone",
    unesco: true,
    description: "One of the earliest brick temple structures surviving in India, marking the sacred location where Siddhartha Gautama attained supreme enlightenment under the sacred Bodhi Tree. The 55-meter grand pyramid shikhara is adorned with niche statues of the Buddha.",
    architecturalHighlights: [
      "55-meter pyramidal central tower (sikhara) topped with stupa finial",
      "Vajrasana (Diamond Throne) carved from polished grey Chunar sandstone",
      "Sacred Bodhi Tree (Pepal) courtyard and circumambulatory path",
      "Ancient carved stone railings from Sunga and Gupta periods",
    ],
    pointsOfInterest: [
      { name: "Grand Pyramidal Shikhara", description: "Stepped soaring tower crowned with the gilded Amalaka and Chatra finial.", position: [0, 2.0, 0] },
      { name: "Corner Miniature Towers", description: "Four miniature replicas flanking the corners of the main terrace.", position: [-1.4, 0.7, -1.4] },
      { name: "Vajrasana (Diamond Throne)", description: "The diamond seat beneath the Bodhi tree marking the enlightenment spot.", position: [0, -0.5, -1.2] },
      { name: "Ancient Asokan Railing", description: "Historic stone posts carved with lotus medallions and celestial figures.", position: [0, -0.6, 1.2] },
    ],
    modelType: "mahabodhi-temple",
    primaryColor: "#b45309",
    accentColor: "#eab308",
  },
  {
    id: "golden-temple",
    name: "Harmandir Sahib (Golden Temple)",
    hindiName: "श्री हरिमंदिर साहिब",
    stateId: "punjab",
    stateName: "Punjab",
    location: "Amritsar, Holy Sarovar",
    era: "1581–1604 CE (Guru Arjan Dev Ji)",
    style: "Sikh Heritage Architecture",
    material: "Pure Gold Leaf Sheeting and White Marble",
    unesco: false,
    description: "The spiritual capital of Sikhism, Harmandir Sahib sits in the center of the sacred water tank (Amrit Sarovar). Its four entrances signify universal welcome to all castes, creeds, and faiths, crowned by a glorious gilded dome covered with hundreds of kilograms of pure gold.",
    architecturalHighlights: [
      "Four open doors facing north, south, east, and west welcoming all humanity",
      "Upper levels gilded with 500+ kg of 24-karat pure gold leaf by Maharaja Ranjit Singh",
      "Connected by the marble Guru's Bridge causeway spanning the holy Sarovar",
      "Ornate Pietra dura marble panels with gold leaf embossed floral friezes",
    ],
    pointsOfInterest: [
      { name: "Pure Gold Fluted Dome", description: "Gilded dome reflecting in the Sarovar waters crowned with a Kalasa pinnacle.", position: [0, 1.8, 0] },
      { name: "Amrit Sarovar Pool", description: "The sacred nectar pool sanctifying and cooling the central pavilion.", position: [0, -0.8, 0] },
      { name: "Four Cardinal Portals", description: "Four open arches symbolizing unreserved welcome to all human beings.", position: [0, 0.2, 1.2] },
      { name: "Marble Causeway", description: "202-foot long marble promenade leading from the Darshani Deori.", position: [-0.8, -0.5, 1.6] },
    ],
    modelType: "golden-temple",
    primaryColor: "#f59e0b",
    accentColor: "#fbbf24",
  },
]
