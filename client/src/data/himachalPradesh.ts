import type { StateData } from "../types/state"

export const himachalPradeshData: StateData = {
  id: "himachal-pradesh",
  name: "Himachal Pradesh",
  hindiName: "हिमाचल प्रदेश",
  capital: "Shimla (Summer) / Dharamshala (Winter)",
  tagline: "Devbhoomi — The Abode of Gods & Land of Eternal Snows",
  overview:
    "Cradled by the soaring, snow-crowned peaks of the Great Himalayas, Dhauladhar, and Pir Panjal ranges, Himachal Pradesh is a sublime realm of alpine forests, turquoise glacial rivers, centuries-old wooden pagoda temples, and ancient Buddhist monasteries. From colonial summer capital Shimla and the apple orchards of Kinnaur to the spiritual sanctuary of the Dalai Lama in Dharamshala and the cold mountain desert of Spiti, Himachal is an enchanting mountain paradise.",
  ancientNames: ["Devbhoomi", "Trigarta", "Kuluta", "Jalandhara Kingdom"],
  keyStats: [
    { label: "Districts", value: "12" },
    { label: "Capitals", value: "Shimla (Summer) / Dharamshala (Winter)" },
    { label: "Sacred Himalayan Rivers", value: "Beas, Chenab, Ravi, Sutlej, Yamuna" },
    { label: "UNESCO World Heritage", value: "Kalka-Shimla Toy Train & Great Himalayan National Park" },
    { label: "Spiritual Seat", value: "Tsuglagkhang (Dharamshala) & Tabo (1,000+ Years)" },
    { label: "Apple State", value: "Produces Over 70% of India's Premium Apples" },
  ],
  quote: {
    text: "Here the mountains are not merely barriers of stone; they are the throne of the Divine, where the silence of the pines speaks the wisdom of the ages.",
    author: "Himalayan Lore of Devbhoomi",
  },
  districts: {
    "Shimla": {
      name: "Shimla",
      tagline: "Queen of the Hills & Historic Summer Capital",
      headquarters: "Shimla",
      knownFor: "The Ridge, Mall Road, Christ Church, Jakhu Hanuman Temple, colonial Viceregal Lodge.",
      famousSpot: "The Ridge & Jakhu Temple",
    },
    "Kullu": {
      name: "Kullu",
      tagline: "Valley of Gods & Apple Blossom Paradise",
      headquarters: "Kullu",
      knownFor: "Kullu Dussehra week-long congregation, Great Himalayan National Park, Manali, Rohtang Pass, Solang Valley.",
      famousSpot: "Manali & Hidimba Devi Temple",
    },
    "Kangra": {
      name: "Kangra",
      tagline: "Seat of the Dalai Lama & Ancient Kangra Fort",
      headquarters: "Dharamshala",
      knownFor: "McLeod Ganj (Residence of His Holiness the Dalai Lama), Kangra Fort, Masrur rock-cut temples, tea gardens.",
      famousSpot: "McLeod Ganj & Kangra Fort",
    },
    "Lahaul and Spiti": {
      name: "Lahaul and Spiti",
      tagline: "Mystic Cold Desert & Millennium Buddhist Monasteries",
      headquarters: "Keylong",
      knownFor: "Key Monastery, Tabo Monastery (Ajanta of the Himalayas), Chandratal glacial lake, Kunzum Pass.",
      famousSpot: "Key Monastery & Chandratal Lake",
    },
    "Kinnaur": {
      name: "Kinnaur",
      tagline: "Land of Fairytales & Sacred Kinner Kailash",
      headquarters: "Reckong Peo",
      knownFor: "Kinner Kailash sacred peak, Kalpa apple orchards, Sangla Valley, Chitkul (last village of India).",
      famousSpot: "Kalpa & Chitkul Village",
    },
    "Chamba": {
      name: "Chamba",
      tagline: "Valley of Milk and Honey & Chamba Rumaal",
      headquarters: "Chamba",
      knownFor: "Laxmi Narayan Temple, Dalhousie hill station, Khajjiar (Mini Switzerland of India), Minjar Mela.",
      famousSpot: "Khajjiar & Laxmi Narayan Temple",
    },
    "Mandi": {
      name: "Mandi",
      tagline: "Varanasi of the Hills on the Sacred Beas",
      headquarters: "Mandi",
      knownFor: "81 ancient stone Shiva temples, Rewalsar holy lake, Prashar Lake with floating island, Mandi Shivratri.",
      famousSpot: "Prashar Lake & Rewalsar Lake",
    },
    "Sirmaur": {
      name: "Sirmaur",
      tagline: "Peach Bowl of India & Renuka Sacred Lake",
      headquarters: "Nahan",
      knownFor: "Renuka Lake (largest natural lake in HP shaped like a reclining woman), Suketi Fossil Park, Churdhar Peak.",
      famousSpot: "Renuka Lake & Suketi Fossil Park",
    },
  },
  landmarks: [
    {
      id: "jakhu-temple",
      name: "Jakhu Temple & Colossal Hanuman Statue",
      district: "Shimla",
      lat: 31.1008,
      lon: 77.1852,
      category: "spiritual",
      description: "Perched atop Shimla's highest hill peak at 2,455 meters, this ancient shrine is dedicated to Lord Hanuman, who is believed to have rested here while searching for the Sanjeevani herb, crowned by a majestic 108-foot-tall vermillion statue towering above pine canopies.",
      image: "/images/landmarks/himachal-pradesh/jakhu-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Shimla",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Jakhu Temple & Colossal Hanuman Statue in Shimla.",
      gallery: [
        {
                url: "/images/landmarks/himachal-pradesh/jakhu-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Jakhu Temple & Colossal Hanuman Statue — Front elevation and iconic monumental facade in Shimla."
        },
        {
                url: "/images/landmarks/himachal-pradesh/jakhu-temple_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Jakhu Temple & Colossal Hanuman Statue — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/himachal-pradesh/jakhu-temple_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Jakhu Temple & Colossal Hanuman Statue — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/himachal-pradesh/jakhu-temple_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Jakhu Temple & Colossal Hanuman Statue — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "hidimba-temple",
      name: "Hidimba Devi Pagoda Temple",
      district: "Kullu",
      lat: 32.2483,
      lon: 77.1802,
      category: "spiritual",
      description: "Unique four-tiered wooden pagoda temple constructed in 1553 CE by Raja Bahadur Singh amidst a magnificent cedar (Deodar) forest in Manali, dedicated to Hidimba Devi, the forest goddess and wife of Pandava prince Bhima.",
      image: "/images/landmarks/himachal-pradesh/hidimba-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Kullu",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Hidimba Devi Pagoda Temple in Kullu.",
      gallery: [
        {
                url: "/images/landmarks/himachal-pradesh/hidimba-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Hidimba Devi Pagoda Temple — Front elevation and iconic monumental facade in Kullu."
        },
        {
                url: "/images/landmarks/himachal-pradesh/hidimba-temple_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Hidimba Devi Pagoda Temple — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/himachal-pradesh/hidimba-temple_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Hidimba Devi Pagoda Temple — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/himachal-pradesh/hidimba-temple_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Hidimba Devi Pagoda Temple — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "tabo-monastery",
      name: "Tabo Monastery (Ajanta of the Himalayas)",
      district: "Lahaul and Spiti",
      lat: 32.0911,
      lon: 78.3794,
      category: "spiritual",
      description: "Founded in 996 CE by Tibetan Buddhist translator Rinchen Zangpo, this historic mud-brick monastery preserves over a millennium of breathtaking stucco sculptures, Buddhist mandalas, and wall frescoes intact in cold dry desert air.",
      image: "/images/landmarks/himachal-pradesh/tabo-monastery_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Lahaul and Spiti",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Tabo Monastery (Ajanta of the Himalayas) in Lahaul and Spiti.",
      gallery: [
        {
                url: "/images/landmarks/himachal-pradesh/tabo-monastery_angle1.jpg",
                angle: "Front Elevation",
                caption: "Tabo Monastery (Ajanta of the Himalayas) — Front elevation and iconic monumental facade in Lahaul and Spiti."
        },
        {
                url: "/images/landmarks/himachal-pradesh/tabo-monastery_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Tabo Monastery (Ajanta of the Himalayas) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/himachal-pradesh/tabo-monastery_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Tabo Monastery (Ajanta of the Himalayas) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/himachal-pradesh/tabo-monastery_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Tabo Monastery (Ajanta of the Himalayas) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "kangra-fort",
      name: "Kangra Fort (Nagarkot)",
      district: "Kangra",
      lat: 32.0998,
      lon: 76.257,
      category: "monument",
      description: "One of the oldest documented forts in India built by the Katoch Rajput dynasty dating back to the Mahabharata era, perched dramatically on a narrow strip of land above the confluence of the Banganga and Majhi rivers.",
      image: "/images/landmarks/himachal-pradesh/kangra-fort_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Kangra",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Kangra Fort (Nagarkot) in Kangra.",
      gallery: [
        {
                url: "/images/landmarks/himachal-pradesh/kangra-fort_angle1.jpg",
                angle: "Front Elevation",
                caption: "Kangra Fort (Nagarkot) — Front elevation and iconic monumental facade in Kangra."
        },
        {
                url: "/images/landmarks/himachal-pradesh/kangra-fort_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Kangra Fort (Nagarkot) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/himachal-pradesh/kangra-fort_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kangra Fort (Nagarkot) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/himachal-pradesh/kangra-fort_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kangra Fort (Nagarkot) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "chandratal-lake",
      name: "Chandratal (Lake of the Moon)",
      district: "Lahaul and Spiti",
      lat: 32.4822,
      lon: 77.6163,
      category: "nature",
      description: "Crescent-shaped high-altitude glacial lake resting at 4,300 meters in the Spiti Valley, whose crystal-clear waters change colors from deep emerald to turquoise sapphire under pristine Himalayan starry skies.",
      image: "/images/landmarks/himachal-pradesh/chandratal-lake_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Lahaul and Spiti",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Chandratal (Lake of the Moon) in Lahaul and Spiti.",
      gallery: [
        {
                url: "/images/landmarks/himachal-pradesh/chandratal-lake_angle1.jpg",
                angle: "Front Elevation",
                caption: "Chandratal (Lake of the Moon) — Front elevation and iconic monumental facade in Lahaul and Spiti."
        },
        {
                url: "/images/landmarks/himachal-pradesh/chandratal-lake_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Chandratal (Lake of the Moon) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/himachal-pradesh/chandratal-lake_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Chandratal (Lake of the Moon) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/himachal-pradesh/chandratal-lake_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Chandratal (Lake of the Moon) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "kalka-shimla-railway",
      name: "Kalka-Shimla Mountain Toy Train",
      district: "Solan / Shimla",
      lat: 31.053,
      lon: 77.067,
      category: "monument",
      description: "UNESCO World Heritage narrow-gauge mountain railway built in 1903, traveling 96 kilometers through 103 tunnels, 864 arched stone viaduct bridges, and breathtaking pine-clad mountain ridges.",
      image: "/images/landmarks/himachal-pradesh/kalka-shimla-railway_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Solan / Shimla",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Kalka-Shimla Mountain Toy Train in Solan / Shimla.",
      gallery: [
        {
                url: "/images/landmarks/himachal-pradesh/kalka-shimla-railway_angle1.jpg",
                angle: "Front Elevation",
                caption: "Kalka-Shimla Mountain Toy Train — Front elevation and iconic monumental facade in Solan / Shimla."
        },
        {
                url: "/images/landmarks/himachal-pradesh/kalka-shimla-railway_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Kalka-Shimla Mountain Toy Train — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/himachal-pradesh/kalka-shimla-railway_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kalka-Shimla Mountain Toy Train — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/himachal-pradesh/kalka-shimla-railway_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kalka-Shimla Mountain Toy Train — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Siddu with Pure Ghee",
      hindiName: "सिड्डू और देसी घी",
      tag: "The Authentic Warm Soul of the Mountains",
      description:
        "Traditional steamed yeast-leavened wheat bun filled with a savory filling of crushed walnuts, poppy seeds, green chilies, and mountain herbs, sliced open hot and dipped generously in melted desi ghee.",
      origin: "Kullu, Manali & Shimla Valleys",
      image: "/images/himachalpradesh/siddu.jpg",
      dietary: "veg",
    },
    {
      name: "Himachali Dham",
      hindiName: "हिमाचली धाम",
      tag: "Traditional Sattvic Festive Banquet",
      description:
        "Royal multi-course vegetarian feast cooked by traditional hereditary chefs (Boti) in heavy brass vessels without onions or garlic, featuring Chana Madra, Sepu Badi, Mah ki Dal, and sweet Meethe Chawal.",
      origin: "Mandi, Kangra & Chamba",
      image: "/images/himachalpradesh/himachali_dham.jpg",
      dietary: "veg",
    },
    {
      name: "Babru (Himachali Kachori)",
      hindiName: "बाबरू",
      tag: "Stuffed Deep-Fried Mountain Bread",
      description:
        "A Himachali delicacy resembling a fluffy stuffed flatbread, made by stuffing whole wheat dough with a seasoned paste of black gram (urad dal) and deep-frying till golden and puffy, enjoyed with tamarind chutney.",
      origin: "Shimla & Kangra Hills",
      image: "/images/himachalpradesh/babru_kachori.jpg",
      dietary: "veg",
    },
    {
      name: "Chha Gosht",
      hindiName: "छा गोश्त",
      tag: "Yogurt-Simmered Mutton Delicacy",
      description:
        "Tender lamb cooked slowly in a rich, tangy yogurt and gram-flour gravy infused with cardamom, cloves, cinnamon, and asafoetida, imparting a gentle comforting warmth during harsh mountain winters.",
      origin: "Chamba & Kangra Valleys",
      image: "/images/himachalpradesh/chha_gosht.jpg",
      dietary: "non-veg",
    },
    {
      name: "Kinnaur Apples & Royal Platter",
      hindiName: "किन्नौर सेब और मेवे",
      tag: "Crisp Organic Jewels of the High Glaciers",
      description:
        "World-famous juicy, sweet, and crisp Royal and Golden apples grown organically at high altitudes in Kinnaur along with sun-dried apricots, walnuts, and wild pine nuts (chilgoza).",
      origin: "Kinnaur & Kotgarh Hills",
      image: "/images/himachalpradesh/kinnaur_apples.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Nati Folk Dance",
      type: "dance",
      description:
        "Guinness World Record-holding traditional folk dance of Himachal Pradesh where hundreds of men and women in embroidered traditional attire hold hands to form slow, swirling graceful serpentine chains, dancing to the tunes of the Shehnai, Karnal trumpet, and Dhol.",
      significance:
        "Celebration of community brotherhood, seasonal harvest festivals, and village deity welcomes.",
      image: "/images/himachalpradesh/nati_folk_dance.jpg",
    },
    {
      name: "Kullu International Dussehra",
      type: "festival",
      description:
        "Centuries-old festival beginning on Vijayadashami in Dhalpur Maidan in Kullu, where over 200 village deities (Devtas) arrive in ornate palanquins carried on the shoulders of villagers to pay homage to Lord Raghunath.",
      significance:
        "Living testament to Himachal's unique system of divine governance and Devta culture.",
      image: "/images/himachalpradesh/kullu_dussehra.jpg",
    },
    {
      name: "Kangra Miniature Paintings",
      type: "art",
      description:
        "Refined school of Pahari miniature painting that flourished under Raja Sansar Chand in the 18th century, famous for its delicate poetic lines, lyrical romantic naturalism, and brilliant natural mineral colors illustrating the love of Radha and Krishna.",
      significance:
        "Pinnacle of Indian miniature painting celebrated for emotional tenderness and botanical detail.",
      image: "/images/himachalpradesh/kangra_miniature.jpg",
    },
  ],
  attires: [
    {
      name: "Kullu Handwoven Shawl",
      gender: "unisex",
      fabric: "Pure Merino Wool or Angora with Geometric Borders",
      description:
        "Globally acclaimed handwoven woolen shawl originating from the Kullu valley, renowned for its soft warm weave and brilliant multi-colored geometric tapestry borders woven on handlooms using traditional wooden shuttles.",
      occasions: "Winter celebrations, festive welcomes, and prestigious cultural gifting.",
      image: "/images/himachalpradesh/kullu_shawl.jpg",
    },
    {
      name: "Himachali Cap (Bushahri / Kulluvi Topi)",
      gender: "unisex",
      fabric: "Woolen Felt with Colorful Embroidered Patti",
      description:
        "The unmistakable cultural emblem of Himachal Pradesh, a cylindrical woolen cap featuring a bright turned-up front flap decorated with colorful Kulluvi handloom brocade or velvet trim.",
      occasions: "Everyday pride, state ceremonies, and receiving honored guests.",
      image: "/images/himachalpradesh/himachali_cap.jpg",
    },
    {
      name: "Pattu & Dhaatu Headdress",
      gender: "women",
      fabric: "Heavy Woolen Weave with Silver Brooches (Boomani)",
      description:
        "Traditional woolen drape worn by Himachali hill women pinned at the shoulders with ornate antique silver pins, paired with a colorful square scarf (Dhaatu) tied gracefully around the head to shield from mountain winds.",
      occasions: "Harvest dances, weddings, and local village temple fairs.",
      image: "/images/himachalpradesh/pattu_traditional.jpg",
    },
  ],
  monuments: [
    {
      name: "Jakhu Hanuman Shrine",
      location: "Jakhu Peak, Shimla",
      era: "Ancient Antiquity (Statue Unveiled 2010)",
      unesco: false,
      description:
        "Revered hilltop sanctum nestled among towering deodar cedars overlooking Shimla, where footsteps believed to belong to Lord Hanuman are preserved inside the temple courtyard.",
      image: "/images/himachalpradesh/jakhu_temple.jpg",
      significance: "Highest point of Shimla and guardian spiritual deity of the capital.",
    },
    {
      name: "Hidimba Devi Temple",
      location: "Dhungri Van Vihar, Manali",
      era: "1553 CE (Maharaja Bahadur Singh)",
      unesco: false,
      description:
        "Exquisite multi-tiered wooden temple resting over an ancient sacred rock cave, adorned with detailed woodcarvings of animals, floral motifs, and mythic beasts.",
      image: "/images/himachalpradesh/hidimba_temple.jpg",
      significance: "Rare and masterly surviving example of indigenous Himalayan wooden architecture.",
    },
    {
      name: "Tabo Buddhist Monastery",
      location: "Tabo, Spiti Valley",
      era: "996 CE (Over 1,000 Years Old)",
      unesco: false,
      description:
        "Ancient mud-brick monastery compound containing nine temples, 23 chortens, and subterranean prayer cells preserving pristine millennium-old murals and clay statues of Buddhist deities.",
      image: "/images/himachalpradesh/tabo_monastery.jpg",
      significance: "Oldest continuously operating Buddhist enclave in India and the Himalayas.",
    },
    {
      name: "Kangra Fort",
      location: "Kangra",
      era: "4th Century BCE (Katoch Dynasty)",
      unesco: false,
      description:
        "Sprawling stone fortress perched over sheer cliffs above the Banganga River, containing carved gates, royal palaces, and the sacred Ambika Devi temple.",
      image: "/images/himachalpradesh/kangra_fort.jpg",
      significance: "Oldest standing fort in the Himalayas and ancient seat of the Katoch kings.",
    },
  ],
  languages: [
    {
      name: "Pahari / Himachali (पहाड़ी)",
      script: "Devanagari (Historically Tankri Script)",
      speakers: "5+ Million",
      greeting: "Namaste / Ram Ram Ji (नमस्ते)",
      meaning: "Respectful mountain greetings",
      description:
        "A group of Western Pahari Indo-Aryan languages including Kangri, Mandeali, Kulvi, and Mahasu Pahari, carrying rich oral folk songs, romantic legends, and proverbs.",
    },
    {
      name: "Hindi (Official State Language)",
      script: "Devanagari",
      speakers: "7+ Million",
      greeting: "Namaskar (नमस्कार)",
      meaning: "I bow to you in peace",
      description:
        "Standard language of administration, schools, and mountain tourism across the state.",
    },
    {
      name: "Tibetan & Spitian (Bhoti)",
      script: "Tibetan Script",
      speakers: "100,000+ (Dharamshala, Spiti, Kinnaur)",
      greeting: "Tashi Delek (བཀྲ་ཤིས་བདེ་ལེགས།)",
      meaning: "Blessings, good health and auspicious good fortune",
      description:
        "Classical language of Tibetan Buddhist philosophy, monastic prayer scriptures, and daily highland life.",
    },
  ],
  luminaries: [
    {
      name: "Major Somnath Sharma",
      image: "/images/luminaries/major_somnath_sharma.jpg",
      era: "1923 – 1947 CE",
      title: "First Recipient of the Param Vir Chakra",
      contribution:
        "Fearless army officer from Kangra who led the 4th Kumaon Regiment in defending the Srinagar airfield during the 1947 battle of Badgam, refusing to withdraw despite mortal wounds to protect the nation.",
    },
    {
      name: "14th Dalai Lama (Tenzin Gyatso)",
      image: "/images/luminaries/14th_dalai_lama_tenzin_gyatso.jpg",
      era: "1935 – Present",
      title: "Nobel Peace Laureate & Spiritual Leader",
      contribution:
        "Global champion of peace, compassion, and non-violence who established the Tibetan Government in Exile and spiritual headquarters in McLeod Ganj, Dharamshala, transforming the town into a global haven of Buddhist philosophy.",
    },
    {
      name: "Captain Vikram Batra",
      image: "/images/luminaries/captain_vikram_batra.jpg",
      era: "1974 – 1999 CE",
      title: "Sher Shah of Kargil & Param Vir Chakra",
      contribution:
        "Heroic young captain from Palampur, Kangra, whose legendary courage and famous signal 'Yeh Dil Maange More!' inspired the nation during the recapture of Point 5140 and Point 4875 in the 1999 Kargil War.",
    },
  ],
}
