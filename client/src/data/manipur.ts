import type { StateData } from "../types/state"

export const manipurData: StateData = {
  id: "manipur",
  name: "Manipur",
  hindiName: "मणिपुर",
  capital: "Imphal",
  tagline: "Jeweled Land, Classical Dance Harmony & Birthplace of Modern Polo",
  overview:
    "Described by Lord Irwin as the 'Switzerland of India' and Pandit Jawaharlal Nehru as the 'Jewel of India', Manipur is an oval-shaped mountain valley of serene beauty. Blessed with the floating circular islands (Phumdis) of Loktak Lake—the only floating national park on Earth (Keibul Lamjao)—the classical, fluid devotion of Manipuri Raas Leela, the martial vigor of Thang-Ta, and the undisputed birthplace of modern polo (Sagol Kangjei), Manipur is a culturally rich frontier.",
  ancientNames: ["Kangleipak", "Meckley", "Sanaleibak", "Kathe"],
  keyStats: [
    { label: "Districts", value: "16" },
    { label: "Capital", value: "Imphal" },
    { label: "Aquatic Wonder", value: "Loktak Lake (Largest Freshwater Lake in Northeast)" },
    { label: "Floating Sanctuary", value: "Keibul Lamjao (Only Floating National Park on Earth)" },
    { label: "Dancing Deer", value: "Sangai (Endemic Brow-Antlered Deer)" },
    { label: "Sporting Glory", value: "Birthplace of Modern Polo (Sagol Kangjei)" },
  ],
  quote: {
    text: "Where the Sangai dances on floating phumdis and the sound of the pung drum echoes the cosmic dance of Radha-Krishna — this is the sacred soil of Kangleipak.",
    author: "Meitei Cultural Heritage",
  },
  districts: {
    "Imphal West": {
      name: "Imphal West",
      tagline: "Historic Heart of Kangla Fort & Ima Keithel",
      headquarters: "Lamphelpat",
      knownFor: "Kangla Fort (ancient royal seat), Ima Keithel (world's only all-women market with 5,000+ traders), Shri Govindaji Temple.",
      famousSpot: "Kangla Fort & Ima Keithel",
    },
    "Bishnupur": {
      name: "Bishnupur",
      tagline: "Land of Floating Loktak Lake & Ancient Vishnu Temple",
      headquarters: "Bishnupur",
      knownFor: "Loktak Lake (phumdis), Keibul Lamjao National Park (Sangai deer), 15th-century conical terracotta Vishnu Temple.",
      famousSpot: "Loktak Lake & Keibul Lamjao",
    },
    "Imphal East": {
      name: "Imphal East",
      tagline: "Cultural Valley & Sanamahi Holy Shrines",
      headquarters: "Porompat",
      knownFor: "Sanamahi Kiyong temple, Manipur State Museum, historic polo grounds, Mutua Museum heritage village.",
      famousSpot: "Sanamahi Kiyong & Andro Pottery Village",
    },
    "Ukhrul": {
      name: "Ukhrul",
      tagline: "Home of the Rare Shirui Lily & Tangkhul Highlands",
      headquarters: "Ukhrul",
      knownFor: "Shirui Kashong Peak (only place on Earth where the pink Shirui Lily blooms naturally), Khangkhui limestone caves.",
      famousSpot: "Shirui Peak & Khangkhui Cave",
    },
    "Churachandpur": {
      name: "Churachandpur (Lamka)",
      tagline: "Second Largest City & Tribal Handloom Center",
      headquarters: "Churachandpur",
      knownFor: "Vibrant tribal handlooms, Khuga Dam, tribal cultural festivals, scenic southern mountain valleys.",
      famousSpot: "Khuga Dam & Tribal Weaving Centers",
    },
    "Thoubal": {
      name: "Thoubal",
      tagline: "Agrarian Heart & Historic Khongjom War Memorial",
      headquarters: "Thoubal",
      knownFor: "Khongjom War Memorial (heroic Battle of Khongjom 1891), Waithou Lake, rice paddy fields.",
      famousSpot: "Khongjom War Memorial",
    },
  },
  landmarks: [
    {
      id: "loktak-lake",
      name: "Loktak Lake & Floating Phumdis",
      district: "Bishnupur",
      lat: 24.5516,
      lon: 93.8167,
      category: "nature",
      description: "Largest natural freshwater lake in Northeast India, famous worldwide for its floating circular masses of vegetation, soil, and organic matter called 'Phumdis', upon which local fishermen live in thatched huts called Phumsangs.",
      image: "/images/landmarks/manipur/loktak-lake_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Bishnupur",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Loktak Lake & Floating Phumdis in Bishnupur.",
      gallery: [
        {
                url: "/images/landmarks/manipur/loktak-lake_angle1.jpg",
                angle: "Front Elevation",
                caption: "Loktak Lake & Floating Phumdis — Front elevation and iconic monumental facade in Bishnupur."
        },
        {
                url: "/images/landmarks/manipur/loktak-lake_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Loktak Lake & Floating Phumdis — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/manipur/loktak-lake_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Loktak Lake & Floating Phumdis — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/manipur/loktak-lake_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Loktak Lake & Floating Phumdis — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "keibul-lamjao-park",
      name: "Keibul Lamjao Floating National Park",
      district: "Bishnupur",
      lat: 24.5028,
      lon: 93.8475,
      category: "nature",
      description: "The only floating national park in the entire world covering 40 square kilometers of floating phumdi swamp on Loktak Lake, preserving the last surviving natural habitat of the endangered, delicate Sangai (dancing brow-antlered deer).",
      image: "/images/landmarks/manipur/keibul-lamjao-park_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Bishnupur",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Keibul Lamjao Floating National Park in Bishnupur.",
      gallery: [
        {
                url: "/images/landmarks/manipur/keibul-lamjao-park_angle1.jpg",
                angle: "Front Elevation",
                caption: "Keibul Lamjao Floating National Park — Front elevation and iconic monumental facade in Bishnupur."
        },
        {
                url: "/images/landmarks/manipur/keibul-lamjao-park_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Keibul Lamjao Floating National Park — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/manipur/keibul-lamjao-park_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Keibul Lamjao Floating National Park — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/manipur/keibul-lamjao-park_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Keibul Lamjao Floating National Park — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "kangla-fort",
      name: "Kangla Palace Citadel",
      district: "Imphal West",
      lat: 24.8142,
      lon: 93.9439,
      category: "monument",
      description: "The ancient fortified royal seat of the Ningthouja dynasty who ruled Kangleipak for over two millennia, featuring sacred coronation halls, the Sanamahi temple, royal moats, and stone dragon-lion sculptures (Kangla Sha).",
      image: "/images/landmarks/manipur/kangla-fort_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Imphal West",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Kangla Palace Citadel in Imphal West.",
      gallery: [
        {
                url: "/images/landmarks/manipur/kangla-fort_angle1.jpg",
                angle: "Front Elevation",
                caption: "Kangla Palace Citadel — Front elevation and iconic monumental facade in Imphal West."
        },
        {
                url: "/images/landmarks/manipur/kangla-fort_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Kangla Palace Citadel — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/manipur/kangla-fort_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kangla Palace Citadel — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/manipur/kangla-fort_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kangla Palace Citadel — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "ima-keithel",
      name: "Ima Keithel (Mother",
      district: "Imphal West",
      lat: 24.8081,
      lon: 93.9356,
      category: "monument",
      description: "A 500-year-old commercial marvel and symbol of female empowerment, recognized as the world's largest all-women market where over 5,000 licensed female traders (Imas/Mothers) run all trade stalls.",
      image: "/images/landmarks/manipur/ima-keithel_angle2.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Imphal West",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Ima Keithel (Mother in Imphal West.",
      gallery: [
        {
                url: "/images/landmarks/manipur/ima-keithel_angle2.jpg",
                angle: "Front Elevation",
                caption: "Ima Keithel (Mother — Front elevation and iconic monumental facade in Imphal West."
        },
        {
                url: "/images/landmarks/manipur/ima-keithel_angle4.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Ima Keithel (Mother — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/manipur/ima-keithel_angle2.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Ima Keithel (Mother — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/manipur/ima-keithel_angle2.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Ima Keithel (Mother — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "ina-war-memorial",
      name: "INA War Memorial of Moirang",
      district: "Bishnupur",
      lat: 24.5019,
      lon: 93.7664,
      category: "monument",
      description: "Sacred national memorial where Colonel Shaukat Ali Malik of Netaji Subhas Chandra Bose's Indian National Army (INA) hoisted the Indian tricolor for the very first time on liberated Indian mainland soil on April 14, 1944.",
      image: "/images/landmarks/manipur/ina-war-memorial_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Bishnupur",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of INA War Memorial of Moirang in Bishnupur.",
      gallery: [
        {
                url: "/images/landmarks/manipur/ina-war-memorial_angle1.jpg",
                angle: "Front Elevation",
                caption: "INA War Memorial of Moirang — Front elevation and iconic monumental facade in Bishnupur."
        },
        {
                url: "/images/landmarks/manipur/ina-war-memorial_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "INA War Memorial of Moirang — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/manipur/ina-war-memorial_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "INA War Memorial of Moirang — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/manipur/ina-war-memorial_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "INA War Memorial of Moirang — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "govindaji-temple",
      name: "Shri Shri Govindaji Temple",
      district: "Imphal East",
      lat: 24.8133,
      lon: 93.9556,
      category: "spiritual",
      description: "Historic gold-domed royal Vaishnavite temple built in 1846 by Maharaja Nara Singh, serving as the cultural epicenter of classical Manipuri Raas Leela dance performances and devotional Vaishnavite festivals.",
      image: "/images/landmarks/manipur/govindaji-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Imphal East",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Shri Shri Govindaji Temple in Imphal East.",
      gallery: [
        {
                url: "/images/landmarks/manipur/govindaji-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Shri Shri Govindaji Temple — Front elevation and iconic monumental facade in Imphal East."
        },
        {
                url: "/images/landmarks/manipur/govindaji-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Shri Shri Govindaji Temple — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/manipur/govindaji-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Shri Shri Govindaji Temple — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/manipur/govindaji-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Shri Shri Govindaji Temple — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Manipuri Kangshoi (Clear Veg Stew)",
      hindiName: "कांगशोई",
      tag: "Wholesome Herbal Mountain Stew",
      description:
        "A comforting, nutritious oil-free soup prepared from seasonal green vegetables, mustard leaves, crushed ginger, garlic, and dried fermented fish (Ngari), served piping hot with steamed rice.",
      origin: "Traditional Meitei Households",
      image: "/images/manipur/kangshoi_stew.jpg",
      dietary: "veg",
    },
    {
      name: "Eromba with Ngari & Mash",
      hindiName: "एरोम्बा",
      tag: "Pungent & Fiery Mountain Mash",
      description:
        "A beloved staple prepared by boiling potatoes, tender bamboo shoots, and vegetables, mashed vigorously with toasted fermented fish (Ngari) and fiery King Chilies (U-Morok), garnished with fresh herbs.",
      origin: "Everyday Manipuri Family Feasts",
      image: "/images/manipur/eromba.jpg",
      dietary: "non-veg",
    },
    {
      name: "Singju (Crispy Herbal Herb Salad)",
      hindiName: "सिंगजू",
      tag: "Refreshing Spicy Street Salad",
      description:
        "Crisp, raw salad prepared from finely shredded lotus root, cabbage, ginger leaves, and stinging nettle, tossed with roasted perilla seeds (Thoiding), crushed pea powder, and fermented fish paste.",
      origin: "Street Vendors across Imphal",
      image: "/images/manipur/singju_salad.jpg",
      dietary: "veg",
    },
    {
      name: "Chak-hao Kheer (Black Rice Pudding)",
      hindiName: "चाक-हाओ खीर (काला चावल)",
      tag: "GI-Tagged Royal Purple Delicacy",
      description:
        "Exquisite dessert prepared from indigenous scented black rice (Chak-hao) simmered in sweetened milk with cardamom, bay leaves, and cashews, turning a regal deep-purple color with a delightful nutty flavor.",
      origin: "Royal Banquets of Kangleipak",
      image: "/images/manipur/chak_hao_kheer.jpg",
      dietary: "veg",
    },
    {
      name: "Morok Metpa (Chili Relish)",
      hindiName: "मोरोक मेतपा",
      tag: "Fiery Everyday Table Chutney",
      description:
        "Piquant spicy mash made by charring fresh green or dried red chilies, mashed with smoked or steamed fish, salt, and finely sliced spring onions, accompanying every meal to ignite the palate.",
      origin: "Universal Manipuri Table Staple",
      image: "/images/manipur/morok_metpa.jpg",
      dietary: "non-veg",
    },
  ],
  traditions: [
    {
      name: "Classical Manipuri Raas Leela Dance",
      type: "dance",
      description:
        "One of India's premier classical dance forms conceived by King Bhagyachandra in the 18th century, characterized by serpentine circular footwork, gentle swaying torsos without sharp angles, and stunning tubular stiffened skirts (Kumil) studded with mirrors depicting Radha and Krishna's divine love.",
      significance:
        "Sublime devotional classical dance combining transcendental Bhakti poetry with ethereal elegance.",
      image: "/images/manipur/manipuri_classical_dance.jpg",
    },
    {
      name: "Lai Haraoba Festival",
      type: "festival",
      description:
        "Ancient ritual festival celebrating the creation of the universe and honoring ancestral guardian forest spirits (Umang Lai), performed by sacred Maibis (priestesses) who re-enact the cosmic stages of human life through symbolic mime and dance.",
      significance:
        "Living pre-Hindu indigenous Sanamahism tradition preserving thousands of years of cosmogonic memory.",
      image: "/images/manipur/lai_haraoba.jpg",
    },
    {
      name: "Thang-Ta Martial Art (Huyen Langlon)",
      type: "dance",
      description:
        "Ancient martial art of Kangleipak dedicated to combat with the Thang (sword) and Ta (spear), requiring intense discipline, spiritual meditation, and lightning-fast weapon maneuvers practiced by Meitei warriors.",
      significance:
        "Sacred martial tradition preserving ancient physical self-defense and breathing techniques.",
      image: "/images/manipur/thang_ta_martial.jpg",
    },
  ],
  attires: [
    {
      name: "Innaphi & Phanek (Manipuri Traditional Dress)",
      gender: "women",
      fabric: "Fine Handwoven Cotton & Mulberry Silk",
      description:
        "The graceful traditional two-piece attire of Meitei women, consisting of a handwoven wraparound sarong (Phanek) with horizontal striped borders, paired with a delicate, translucent handwoven shawl (Innaphi) adorned with gossamer floral needlework.",
      occasions: "Festive ceremonies, Raas Leela recitals, weddings, and formal assemblies.",
      image: "/images/manipur/innaphi_phanek.jpg",
    },
    {
      name: "Mayek Naibi & Potloi (Bridal Dress)",
      gender: "women",
      fabric: "Stiffened Satin Brocade with Mirror Embroidery",
      description:
        "The opulent ceremonial bridal skirt (Potloi) designed as a stiff cylindrical drum embellished with gold sequins and mirrors, worn by Manipuri Hindu brides alongside ornate gold jewelry.",
      occasions: "Traditional Meitei Vaishnavite matrimonial ceremonies.",
      image: "/images/manipur/mayek_naibi.jpg",
    },
    {
      name: "Dhoti, Kurta & Kokyet (Turban)",
      gender: "men",
      fabric: "Fine Handspun Khadi Cotton with Gold Zari Border",
      description:
        "Traditional dress worn by Meitei men consisting of a pristine white cotton dhoti, paired with a high-necked kurta and an artfully tied white turban (Kokyet) that indicates social stature.",
      occasions: "Sacred temple rituals, royal festivals, and formal gatherings.",
      image: "/images/manipur/dhoti_pagri.jpg",
    },
  ],
  monuments: [
    {
      name: "Kangla Fort Citadel",
      location: "Imphal Center",
      era: "33 CE – 1891 CE",
      unesco: false,
      description:
        "Ancient moated royal complex sprawling over 237 acres on the Imphal River, housing the holy Govindaji Temple ruins, coronation enclosures, and the historic Kangla Sha dragon statues.",
      image: "/images/manipur/kangla_fort.jpg",
      significance: "Spiritual, political, and cultural heart of the Meitei kingdom for 2,000 years.",
    },
    {
      name: "Loktak Lake & Phumdi Islands",
      location: "Bishnupur District",
      era: "Natural Ramsar Wetland",
      unesco: false,
      description:
        "Ethereal aquatic landscape where natural floating circular islands support a vibrant ecosystem of birds, floating school rooms, and homestays.",
      image: "/images/manipur/loktak_lake.jpg",
      significance: "The only floating lake ecosystem in the world and lifeline of Manipur.",
    },
    {
      name: "INA War Memorial",
      location: "Moirang, Bishnupur",
      era: "1944 CE (Reconstructed Memorial 1968)",
      unesco: false,
      description:
        "Historic landmark preserving the exact spot where Netaji Subhas Chandra Bose's Azad Hind Fauj first raised the Indian flag, housing a museum of wartime uniforms, bayonets, and photographs.",
      image: "/images/manipur/ina_memorial.jpg",
      significance: "Hallowed pilgrimage site of the Indian freedom struggle.",
    },
    {
      name: "Shri Govindaji Temple",
      location: "Imphal East",
      era: "1846 CE (Maharaja Nara Singh)",
      unesco: false,
      description:
        "Twin-gold-domed temple featuring a spacious pillared mandapa where classical Raas Leela dances are performed before deities of Radha, Krishna, and Balarama.",
      image: "/images/manipur/govindaji_temple.jpg",
      significance: "Premier spiritual seat of Gaudiya Vaishnavism in Manipur.",
    },
  ],
  languages: [
    {
      name: "Meiteilon / Manipuri (মণিপুরী / ꯃꯤꯇꯩꯂꯣꯟ)",
      script: "Meetei Mayek Script (Revived Indigenous 27-Letter Script) & Eastern Nagari",
      speakers: "1.8+ Million",
      greeting: "Khurumjari (ꯈꯨꯔꯨꯝꯖꯔꯤ)",
      meaning: "I greet you with folded hands and deep respect",
      description:
        "Official language of Manipur recognized in the Eighth Schedule of the Indian Constitution, possessing its own unique ancient indigenous script (Meetei Mayek) dating back over a thousand years.",
    },
    {
      name: "Tangkhul, Kuki & Tribal Tongues",
      script: "Latin Script",
      speakers: "1+ Million (Hill Districts)",
      greeting: "Khangsak (Warm Greetings)",
      meaning: "Peace and goodwill to you",
      description:
        "Diverse Tibeto-Burman languages spoken across the hill districts of Ukhrul, Churachandpur, and Senapati.",
    },
  ],
  luminaries: [
    {
      name: "Maharaja Bhagyachandra (Jai Singh)",
      image: "/images/luminaries/maharaja_bhagyachandra_jai_singh.jpg",
      era: "1748 – 1799 CE",
      title: "Visionary King & Creator of Manipuri Raas Leela",
      contribution:
        "Devout monarch of Manipur who conceived and choreographed the classical Manipuri Raas Leela dance after a divine dream of Lord Krishna, carved the sacred Govindaji deity from a single jackfruit tree, and unified the kingdom.",
    },
    {
      name: "Major Paona Brajabashi",
      image: "/images/luminaries/major_paona_brajabashi.jpg",
      era: "1833 – 1891 CE",
      title: "Hero of the Battle of Khongjom",
      contribution:
        "Fearless warrior commander who chose death over dishonor during the 1891 Anglo-Manipur War, fighting to the last breath against superior British artillery and famously declining British royal bribes.",
    },
    {
      name: "Mary Kom (Mangte Chungneijang)",
      image: "/images/luminaries/mary_kom_mangte_chungneijang.jpg",
      era: "1982 – Present",
      title: "Magnificent Mary & Six-Time World Boxing Champion",
      contribution:
        "Olympic bronze medalist and historic six-time AIBA World Boxing Champion born in Kangathei, Churachandpur, who overcame poverty to become a global legend in women's sports and an inspiration to millions.",
    },
  ],
}
