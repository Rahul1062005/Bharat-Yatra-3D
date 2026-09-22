import type { StateData } from "../types/state"

export const mizoramData: StateData = {
  id: "mizoram",
  name: "Mizoram",
  hindiName: "मिज़ोरम",
  capital: "Aizawl",
  tagline: "Land of the Hill People, Cheraw Bamboo Dance & High Literacy",
  overview:
    "Meaning the 'Land of the Mizo Hill People' (Mi-Zo-Ram), Mizoram is a captivating realm of rolling emerald ridges, deep cloud-filled river gorges, and tranquil bamboo forests bordering Myanmar and Bangladesh. Renowned for achieving one of India's highest literacy rates (over 91%), the intricate rapid footwork of the Cheraw bamboo dance, the egalitarian social code of 'Tlawmngaihna' (selfless service to community), and peaceful hill towns like Aizawl, Mizoram is an oasis of calm and harmony.",
  ancientNames: ["Lushai Hills", "Land of the Zo", "Chhinlung Homeland"],
  keyStats: [
    { label: "Districts", value: "11" },
    { label: "Capital", value: "Aizawl (Ridge City at 1,132 m)" },
    { label: "High Literacy", value: "Over 91.33% (Second Highest in India)" },
    { label: "Forest Cover", value: "Over 85% of Land Area is Pristine Forest" },
    { label: "Bamboo Wonder", value: "Cheraw (World-Famous Bamboo Dance)" },
    { label: "Social Ethos", value: "Tlawmngaihna (Duty of Selfless Community Help)" },
  ],
  quote: {
    text: "Tlawmngaihna — To be hospitable, kind, unselfish, and always ready to serve one's fellow beings without expecting anything in return.",
    author: "Core Ethical Code of the Mizo People",
  },
  districts: {
    "Aizawl": {
      name: "Aizawl",
      tagline: "Spectacular Ridge Capital & Solomon's Temple",
      headquarters: "Aizawl",
      knownFor: "Aizawl ridge skyline, Solomon's Temple, Durtlang Hills, Mizoram State Museum, Bara Bazar.",
      famousSpot: "Solomon's Temple & Durtlang Hills",
    },
    "Lunglei": {
      name: "Lunglei",
      tagline: "Bridge of Rock & Peaceful Southern Hill Capital",
      headquarters: "Lunglei",
      knownFor: "Natural rock bridge over Nghasih stream, Khawnglung Wildlife Sanctuary, Saikuti Hall cultural center.",
      famousSpot: "Lunglei Bridge of Rock",
    },
    "Champhai": {
      name: "Champhai",
      tagline: "Rice Bowl of Mizoram & Myanmar Border Trade",
      headquarters: "Champhai",
      knownFor: "Expansive fertile rice valley, Zokhawthar international border gate, Rih Dil heart-shaped lake, Lianchhiari cliff.",
      famousSpot: "Rih Dil Lake & Zokhawthar Gate",
    },
    "Serchhip": {
      name: "Serchhip",
      tagline: "Land of Vantawng Falls & Paragliding Hills",
      headquarters: "Serchhip",
      knownFor: "Vantawng Falls (highest waterfall in Mizoram), Tuirihiau falls, Thenzawl handloom weaving town.",
      famousSpot: "Vantawng Falls & Thenzawl",
    },
    "Kolasib": {
      name: "Kolasib",
      tagline: "Northern Gateway & Serene Tamdil Lake",
      headquarters: "Kolasib",
      knownFor: "Tamdil Lake (sacred natural lake surrounded by evergreen forests), Tlawng River, bamboo agro-forestry.",
      famousSpot: "Tamdil Lake & Tlawng River",
    },
    "Mamit": {
      name: "Mamit",
      tagline: "Haven of Dampa Tiger Reserve & Reiek Tlang",
      headquarters: "Mamit",
      knownFor: "Dampa Tiger Reserve (largest sanctuary in Mizoram), Reiek Peak heritage village, Lengteng wildlife sanctuary.",
      famousSpot: "Reiek Tlang & Dampa Tiger Reserve",
    },
  },
  landmarks: [
    {
      id: "vantawng-falls",
      name: "Vantawng Waterfalls",
      district: "Serchhip",
      lat: 23.2842,
      lon: 92.8319,
      category: "nature",
      description: "The highest two-tiered waterfall in Mizoram cascading down 229 meters (751 feet) amidst dense bamboo and tropical evergreen forests near Thenzawl on the Vanva river, surrounded by mist and rainbow halos.",
    },
    {
      id: "reiek-peak",
      name: "Reiek Tlang & Heritage Village",
      district: "Mamit",
      lat: 23.6842,
      lon: 92.6033,
      category: "nature",
      description: "A dramatic rocky mountain ridge rising to 1,548 meters with sheer vertical cliffs, housing an authentic recreated Mizo model village showcasing traditional chiefs' houses (Lal In) and bachelor quarters (Zawlbuk).",
    },
    {
      id: "solomons-temple",
      name: "Solomon's Temple of Aizawl",
      district: "Aizawl",
      lat: 23.7086,
      lon: 92.7303,
      category: "spiritual",
      description: "A magnificent white marble cathedral built in Kidron Valley on the outskirts of Aizawl by Kohhran Thianghlim church, featuring four towering spires, 12 grand entry gates, and seating for 3,000 worshippers inside an ornate hall.",
    },
    {
      id: "tamdil-lake",
      name: "Tamdil (Lake of Mustard)",
      district: "Saitual / Kolasib",
      lat: 23.7317,
      lon: 92.9511,
      category: "nature",
      description: "Serene natural freshwater lake surrounded by pristine tropical evergreen forests and rolling green hills, celebrated as a peaceful boating retreat and rich habitat for endemic fish and prawns.",
    },
    {
      id: "rih-dil-lake",
      name: "Rih Dil Heart-Shaped Lake",
      district: "Champhai Border (Near Zokhawthar)",
      lat: 23.3444,
      lon: 93.3853,
      category: "spiritual",
      description: "A natural heart-shaped lake situated just across the international border near Champhai, revered in ancient Mizo mythology as the mystical passage through which all human souls must journey to reach the celestial afterlife (Pialral).",
    },
    {
      id: "durtlang-hills",
      name: "Durtlang Hills Viewpoint",
      district: "Aizawl",
      lat: 23.7719,
      lon: 92.7231,
      category: "nature",
      description: "A high mountain ridge overlooking the entire bowl-shaped capital of Aizawl, offering breathtaking sunset and nighttime vistas of glittering lights cascading across the terraced mountain slopes.",
    },
  ],
  cuisines: [
    {
      name: "Mizo Bai (Herbal Veg Stew)",
      hindiName: "मिज़ो बाई",
      tag: "Nutritious Oil-Free Everyday Broth",
      description:
        "Wholesome traditional stew prepared without added oil by boiling seasonal vegetables like mustard greens, pumpkin florets, and tender bamboo shoots with sodium bicarbonate (Ching) and fermented pork or pork fat for a comforting aroma.",
      origin: "Traditional Mizo Kitchens",
      image: "/images/mizoram/mizo_bai.jpg",
      dietary: "veg",
    },
    {
      name: "Vawksa Rep (Smoked Pork & Chilies)",
      hindiName: "वाव्कसा रेप",
      tag: "Savory Wood-Smoked Pork Delicacy",
      description:
        "Tender pork slow-smoked over the kitchen hearth fire for weeks until rich and dark, sliced and stir-fried with mustard leaves, whole ginger slices, and fresh fiery green bird's-eye chilies.",
      origin: "Hillside Village Hearths",
      image: "/images/mizoram/vawksa_rep.jpg",
      dietary: "non-veg",
    },
    {
      name: "Koat Pitha (Sweet Banana Fritters)",
      hindiName: "कोट पीठा",
      tag: "Delicate Golden Festive Tea Snack",
      description:
        "Delicious, crispy sweet fritters made from a batter of mashed ripe local hill bananas, rice flour, and dark jaggery, deep-fried in hot mustard oil until golden brown on the outside and soft inside.",
      origin: "Festive Evening Tea Tradition",
      image: "/images/mizoram/koat_pitha.jpg",
      dietary: "veg",
    },
    {
      name: "Mizo Sawhchiar (Fragrant Meat Rice)",
      hindiName: "सावचियार",
      tag: "Festive Porridge of Community Feasts",
      description:
        "Traditional hearty rice porridge cooked slowly with tender pork or chicken, bay leaves, ginger, and garlic, prepared in giant cauldrons during Chapchar Kut community celebrations.",
      origin: "Community Celebrations Across Mizoram",
      image: "/images/mizoram/sawhchiar.jpg",
      dietary: "non-veg",
    },
    {
      name: "Panch Phoron Mizo Pork",
      hindiName: "मिज़ो पोर्क करी",
      tag: "Mild Spiced Mountain Pork",
      description:
        "Lean pork simmered gently with boiled potatoes, local mountain garlic, and mild spices, highlighting the natural tenderness and rich flavor of free-range hill pork.",
      origin: "Modern Mizo Culinary Fusion",
      image: "/images/mizoram/mizo_pork.jpg",
      dietary: "non-veg",
    },
  ],
  traditions: [
    {
      name: "Cheraw Bamboo Dance",
      type: "dance",
      description:
        "The world-famous traditional dance of Mizoram performed by men holding four to eight horizontal bamboo staves and clapping them together rhythmically in rapid patterns, while graceful women in colorful handwoven skirts step in and out between the bamboos with breathtaking agility.",
      significance:
        "Guinness World Record folk dance symbolizing skill, rhythmic harmony, and celebration of nature.",
      image: "/images/mizoram/cheraw_bamboo_dance.jpg",
    },
    {
      name: "Chapchar Kut Spring Festival",
      type: "festival",
      description:
        "The most joyous cultural festival of the Mizo people held in March upon completing the clearing of jhum forest fields, where entire communities gather in Aizawl dressed in heritage attire to dance the Chai and enjoy grand communal feasts.",
      significance:
        "Ancient celebration of agrarian life, brotherhood, reconciliation, and welcoming the spring planting cycle.",
      image: "/images/mizoram/chapchar_kut.jpg",
    },
    {
      name: "Khuallam Traditional Welcome Dance",
      type: "dance",
      description:
        "Traditional group dance performed by male dancers draped in traditional red-and-white striped Puandum shawls, swaying gracefully to the rhythmic resonance of brass gongs (Darbu) to welcome honored guests into the village.",
      significance:
        "Living emblem of Mizo hospitality and social respect for distinguished visitors.",
      image: "/images/mizoram/khuallam_dance.jpg",
    },
  ],
  attires: [
    {
      name: "Puan Handwoven Wraparound (Puanchei)",
      gender: "women",
      fabric: "Pure Handspun Cotton with Intricate Weft Motifs",
      description:
        "The glorious traditional handwoven wraparound skirt worn by Mizo women, featuring bold black, red, and white geometric stripes and woven motifs, accompanied by the matching Kawrchei blouse.",
      occasions: "Chapchar Kut festival, weddings, church services, and official state occasions.",
      image: "/images/mizoram/puan_traditional.jpg",
    },
    {
      name: "Kawrchei & Ngotekherh",
      gender: "women",
      fabric: "Fine Handwoven Cotton on Backstrap Looms",
      description:
        "A festive short blouse (Kawrchei) beautifully embroidered with cotton threads, worn paired with the traditional Ngotekherh—a black-and-white checkered puan with bold horizontal stripes.",
      occasions: "Traditional dance performances and family celebrations.",
      image: "/images/mizoram/kawrchei_blouse.jpg",
    },
    {
      name: "Puandum & Mizo Turban",
      gender: "men",
      fabric: "Heavy Handwoven Cotton with Black & Red Stripes",
      description:
        "A distinguished handwoven wrap (Puandum) featuring deep black, red, and yellow stripes worn draped over the shoulders by men, signifying bravery, maturity, and cultural honor.",
      occasions: "Village ceremonies, welcome dances, and formal cultural festivals.",
      image: "/images/mizoram/puanchei_wrap.jpg",
    },
  ],
  monuments: [
    {
      name: "Reiek Tlang Ridge & Heritage Village",
      location: "Reiek, Mamit District",
      era: "Ancestral Heritage Site",
      unesco: false,
      description:
        "Towering limestone cliff peak offering panoramic views reaching down to the plains of Bangladesh, featuring authentic replica huts of Mizo chieftains and warriors.",
      image: "/images/mizoram/reiek_tlang.jpg",
      significance: "Premier natural and cultural heritage monument of the Mizo people.",
    },
    {
      name: "Solomon's Temple",
      location: "Chawlhhmun, Aizawl",
      era: "1996 – 2017 CE",
      unesco: false,
      description:
        "Monumental modern religious cathedral constructed of white marble with natural stone cladding, surrounded by peaceful pine groves and garden courtyards.",
      image: "/images/mizoram/solomons_temple.jpg",
      significance: "Largest and most iconic Christian cathedral structure in Mizoram.",
    },
    {
      name: "Vantawng Falls Canyon",
      location: "Near Thenzawl, Serchhip",
      era: "Natural Geological Monument",
      unesco: false,
      description:
        "A 751-foot vertical canyon plunge surrounded by untouched tropical bamboo wilderness, visible from a protected viewpoint pavilion across the ravine.",
      image: "/images/mizoram/vantawng_falls.jpg",
      significance: "Highest waterfall in Mizoram and natural pride of the state.",
    },
    {
      name: "Tamdil Sacred Lake",
      location: "Near Saitual",
      era: "Natural Lake Basin",
      unesco: false,
      description:
        "Pristine oval lake nestled amidst thick forests, rich in biodiversity, providing ecological sanctuary for mountain waterfowl and aquatic flora.",
      image: "/images/mizoram/tamdil_lake.jpg",
      significance: "Sacred legendary lake deeply entwined with early Mizo migration tales.",
    },
  ],
  languages: [
    {
      name: "Mizo ṭawng (मिज़ो)",
      script: "Latin Script (Hunterian Orthography)",
      speakers: "1+ Million (90%+ of Population)",
      greeting: "Chibai (चिबाई)",
      meaning: "Warm greetings and good wishes to you",
      description:
        "The official language of Mizoram, a musical Tibeto-Burman language famous for its rich tonal system, poetic imagery, and widespread high literacy.",
    },
    {
      name: "English (Official Language)",
      script: "Latin Script",
      speakers: "Statewide Administration & Youth",
      greeting: "Hello / Good Morning",
      meaning: "Standard greeting",
      description:
        "Widely spoken across education, state governance, media, and church congregations.",
    },
  ],
  luminaries: [
    {
      name: "Pu Laldenga",
      era: "1927 – 1990 CE",
      title: "First Chief Minister of the State of Mizoram & Peace Architect",
      contribution:
        "Leader who signed the historic Mizo Peace Accord in 1986 with the Government of India, transforming Mizoram from an era of insurgency into one of the most peaceful, literate, and stable states in India.",
    },
    {
      name: "Ropuiliani",
      era: "1840 – 1895 CE",
      title: "Fearless Female Chieftain & Freedom Heroine",
      contribution:
        "Courageous woman chief of Denlung who fiercely resisted British colonial annexation of the Lushai Hills, refusing to pay colonial tributes or submit to foreign rule until her capture in 1893.",
    },
    {
      name: "Jeremy Lalrinnunga",
      era: "2002 – Present",
      title: "Commonwealth Games Gold Medalist & Youth Olympic Champion",
      contribution:
        "Weightlifting sensation from Aizawl who won India's first-ever gold medal at the Youth Olympics in 2018 in Buenos Aires and captured gold at the 2022 Commonwealth Games, bringing global athletic honor to Mizoram.",
    },
  ],
}
