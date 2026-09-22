import type { StateData } from "../types/state"

export const sikkimData: StateData = {
  id: "sikkim",
  name: "Sikkim",
  hindiName: "सिक्किम",
  capital: "Gangtok",
  tagline: "Valley of Rice, Sacred Throne of Kanchenjunga & Organic Paradise",
  overview:
    "Crowned by the towering 8,586-meter snowy summit of Mount Kanchenjunga (the third highest peak on Earth and guardian deity of the state), Sikkim is an otherworldly Himalayan realm. Blessed with pristine alpine lakes like Tsomgo and Gurudongmar, centuries-old Buddhist monasteries vibrating with deep Tibetan horn chants, world-first 100% certified organic agriculture, and over 600 species of wild orchids, Sikkim is an enchanting mountain sanctuary.",
  ancientNames: ["Nye-mae-el", "Denjong (Valley of Rice)", "Mayel Lyang", "Sukhim"],
  keyStats: [
    { label: "Districts", value: "6" },
    { label: "Capital", value: "Gangtok" },
    { label: "Sacred Peak", value: "Mount Kanchenjunga (8,586 m — Guardian of Sikkim)" },
    { label: "High Glacial Lake", value: "Gurudongmar Lake (5,430 m — Holy Waters)" },
    { label: "Green Triumph", value: "World's First 100% Certified Organic State" },
    { label: "Monastic Crown", value: "Rumtek & Pemayangtse Monasteries" },
  ],
  quote: {
    text: "Kanchenjunga is not merely a mountain of rock and ice; it is the living spiritual guardian of our people, watching over every prayer flag fluttering in the wind.",
    author: "Himalayan Lore of Sikkim",
  },
  districts: {
    "Gangtok": {
      name: "Gangtok",
      tagline: "Hilltop Capital & Enchey Monastic Viewpoint",
      headquarters: "Gangtok",
      knownFor: "MG Marg pedestrian boulevard, Enchey Monastery, Do Drul Chorten stupa, Namgyal Institute of Tibetology.",
      famousSpot: "MG Marg & Do Drul Chorten",
    },
    "Pakyong": {
      name: "Pakyong",
      tagline: "Dharma Chakra Center & Gateway Airport",
      headquarters: "Pakyong",
      knownFor: "Rumtek Monastery (seat of the Karmapa Lama), Pakyong Greenfield Airport, Saramsa botanical garden.",
      famousSpot: "Rumtek Monastery & Saramsa Garden",
    },
    "Namchi": {
      name: "Namchi",
      tagline: "Sky High Shrines of Char Dham & Guru Padmasambhava",
      headquarters: "Namchi",
      knownFor: "Siddhesvara Dhaam (Char Dham replicas atop Solophok hill), Samdruptse (138-foot colossal statue of Guru Rinpoche), Temi Tea Garden.",
      famousSpot: "Samdruptse & Siddhesvara Dhaam",
    },
    "Gyalshing": {
      name: "Gyalshing",
      tagline: "Historic Capital & Sublime Monasteries of West Sikkim",
      headquarters: "Gyalshing",
      knownFor: "Pemayangtse Monastery (Perfect Sublime Lotus), Rabdentse palace ruins, Pelling skywalk, Khecheopalri sacred wish-fulfilling lake.",
      famousSpot: "Pemayangtse & Khecheopalri Lake",
    },
    "Mangan": {
      name: "Mangan",
      tagline: "Roof of Sikkim & Glacial High Passes",
      headquarters: "Mangan",
      knownFor: "Gurudongmar sacred lake (5,430m), Yumthang Valley of Flowers, Zero Point (Yumesamdong), Lachung & Lachen valleys.",
      famousSpot: "Gurudongmar Lake & Yumthang Valley",
    },
    "Soreng": {
      name: "Soreng",
      tagline: "Rhododendron Sanctuaries & Verdant Green Ridges",
      headquarters: "Soreng",
      knownFor: "Barsey Rhododendron Sanctuary, sweeping viewpoints of Kanchenjunga, cardamom plantations.",
      famousSpot: "Barsey Rhododendron Sanctuary",
    },
  },
  landmarks: [
    {
      id: "rumtek-monastery",
      name: "Rumtek Dharma Chakra Center",
      district: "Pakyong",
      lat: 27.3047,
      lon: 88.5492,
      category: "spiritual",
      description: "Magnificent four-story monastery complex built in the 1960s by the 16th Gyalwa Karmapa as the main seat of the Karma Kagyu lineage in exile, housing sacred Buddhist golden stupas, rare Tibetan manuscripts, and priceless silk thangkas.",
      image: "/images/landmarks/sikkim/rumtek-monastery_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Pakyong",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Rumtek Dharma Chakra Center in Pakyong.",
      gallery: [
        {
                url: "/images/landmarks/sikkim/rumtek-monastery_angle1.jpg",
                angle: "Front Elevation",
                caption: "Rumtek Dharma Chakra Center — Front elevation and iconic monumental facade in Pakyong."
        },
        {
                url: "/images/landmarks/sikkim/rumtek-monastery_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Rumtek Dharma Chakra Center — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/sikkim/rumtek-monastery_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Rumtek Dharma Chakra Center — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/sikkim/rumtek-monastery_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Rumtek Dharma Chakra Center — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "gurudongmar-lake",
      name: "Gurudongmar Holy Glacial Lake",
      district: "Mangan (North Sikkim)",
      lat: 27.9944,
      lon: 88.7119,
      category: "nature",
      description: "One of the highest lakes in the world situated at an elevation of 5,430 meters (17,800 feet) near the Tibetan border, considered sacred by Buddhists, Sikhs, and Hindus, whose central waters miraculously remain unfrozen even in sub-zero winter temperatures.",
      image: "/images/landmarks/sikkim/gurudongmar-lake_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Mangan (North Sikkim)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Gurudongmar Holy Glacial Lake in Mangan (North Sikkim).",
      gallery: [
        {
                url: "/images/landmarks/sikkim/gurudongmar-lake_angle1.jpg",
                angle: "Front Elevation",
                caption: "Gurudongmar Holy Glacial Lake — Front elevation and iconic monumental facade in Mangan (North Sikkim)."
        },
        {
                url: "/images/landmarks/sikkim/gurudongmar-lake_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Gurudongmar Holy Glacial Lake — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/sikkim/gurudongmar-lake_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Gurudongmar Holy Glacial Lake — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/sikkim/gurudongmar-lake_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Gurudongmar Holy Glacial Lake — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "nathula-pass",
      name: "Nathu La Himalayan Border Pass",
      district: "Gangtok",
      lat: 27.3867,
      lon: 88.8317,
      category: "monument",
      description: "Historic mountain pass on the ancient Old Silk Route at an altitude of 4,310 meters (14,140 feet), connecting India with the Tibet Autonomous Region of China, offering dramatic views of snow peaks and international border fences.",
      image: "/images/landmarks/sikkim/nathula-pass_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Gangtok",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Nathu La Himalayan Border Pass in Gangtok.",
      gallery: [
        {
                url: "/images/landmarks/sikkim/nathula-pass_angle1.jpg",
                angle: "Front Elevation",
                caption: "Nathu La Himalayan Border Pass — Front elevation and iconic monumental facade in Gangtok."
        },
        {
                url: "/images/landmarks/sikkim/nathula-pass_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Nathu La Himalayan Border Pass — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/sikkim/nathula-pass_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Nathu La Himalayan Border Pass — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/sikkim/nathula-pass_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Nathu La Himalayan Border Pass — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "pemayangtse-monastery",
      name: "Pemayangtse Monastery",
      district: "Gyalshing",
      lat: 27.3039,
      lon: 88.2525,
      category: "spiritual",
      description: "One of the oldest and most prestigious Nyingma Buddhist monasteries in Sikkim founded in 1705, renowned for housing the legendary seven-tiered intricately carved painted wooden model of Zandogpalri (the celestial abode of Guru Padmasambhava).",
      image: "/images/landmarks/sikkim/pemayangtse-monastery_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Gyalshing",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Pemayangtse Monastery in Gyalshing.",
      gallery: [
        {
                url: "/images/landmarks/sikkim/pemayangtse-monastery_angle1.jpg",
                angle: "Front Elevation",
                caption: "Pemayangtse Monastery — Front elevation and iconic monumental facade in Gyalshing."
        },
        {
                url: "/images/landmarks/sikkim/pemayangtse-monastery_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Pemayangtse Monastery — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/sikkim/pemayangtse-monastery_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Pemayangtse Monastery — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/sikkim/pemayangtse-monastery_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Pemayangtse Monastery — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "tsomgo-lake",
      name: "Tsomgo (Changu) Glacial Lake",
      district: "Gangtok",
      lat: 27.3742,
      lon: 88.7619,
      category: "nature",
      description: "Sacred oval-shaped high-altitude alpine lake at 3,753 meters fed by melting glaciers, whose surface reflects the surrounding jagged snowy peaks and changes colors with changing seasons, worshipped by local monks for prophecies.",
      image: "/images/landmarks/sikkim/tsomgo-lake_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Gangtok",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Tsomgo (Changu) Glacial Lake in Gangtok.",
      gallery: [
        {
                url: "/images/landmarks/sikkim/tsomgo-lake_angle1.jpg",
                angle: "Front Elevation",
                caption: "Tsomgo (Changu) Glacial Lake — Front elevation and iconic monumental facade in Gangtok."
        },
        {
                url: "/images/landmarks/sikkim/tsomgo-lake_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Tsomgo (Changu) Glacial Lake — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/sikkim/tsomgo-lake_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Tsomgo (Changu) Glacial Lake — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/sikkim/tsomgo-lake_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Tsomgo (Changu) Glacial Lake — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "khecheopalri-lake",
      name: "Khecheopalri Sacred Wish-Fulfilling Lake",
      district: "Gyalshing",
      lat: 27.3556,
      lon: 88.2003,
      category: "spiritual",
      description: "Holy lake nestled in pristine subtropical forest, revered by Buddhists as the footprint of Goddess Tara and by Hindus as Lord Shiva's footprint, famous for the folk phenomenon where birds immediately remove any fallen leaf from the water's surface.",
      image: "/images/landmarks/sikkim/khecheopalri-lake_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Gyalshing",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Khecheopalri Sacred Wish-Fulfilling Lake in Gyalshing.",
      gallery: [
        {
                url: "/images/landmarks/sikkim/khecheopalri-lake_angle1.jpg",
                angle: "Front Elevation",
                caption: "Khecheopalri Sacred Wish-Fulfilling Lake — Front elevation and iconic monumental facade in Gyalshing."
        },
        {
                url: "/images/landmarks/sikkim/khecheopalri-lake_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Khecheopalri Sacred Wish-Fulfilling Lake — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/sikkim/khecheopalri-lake_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Khecheopalri Sacred Wish-Fulfilling Lake — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/sikkim/khecheopalri-lake_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Khecheopalri Sacred Wish-Fulfilling Lake — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Authentic Steamed Momos",
      hindiName: "सिक्किमी मोमोज़",
      tag: "The Universal Comfort Food of the Himalayas",
      description:
        "Delicate steamed dumplings with thin wheat-flour wrappers filled with finely minced spiced chicken, pork, or mountain vegetables, served steaming hot with fiery local Dalle Khursani chili sauce and clear bone broth.",
      origin: "Traditional Homes & Cafes of Gangtok",
      image: "/images/sikkim/sikkimese_momos.jpg",
      dietary: "veg",
    },
    {
      name: "Himalayan Thukpa",
      hindiName: "थुकपा",
      tag: "Warming Noodle Broth of Mountain Passes",
      description:
        "A steaming, comforting bowl of hand-pulled wheat noodles immersed in a rich, delicately spiced broth packed with shredded cabbage, carrots, spring onions, and meat, topped with chopped fresh cilantro and chili oil.",
      origin: "Tibetan & Sikkimese Highland Heritage",
      image: "/images/sikkim/thukpa_noodle.jpg",
      dietary: "veg",
    },
    {
      name: "Gundruk & Sinki Soup",
      hindiName: "गुंद्रुक सूप",
      tag: "Fermented Leafy Superfood of the Nepalis",
      description:
        "Nutrient-dense fermented leafy mustard and radish greens sun-dried in earthen pots, cooked into an aromatic, slightly sour clear soup with tomatoes, ginger, and garlic, celebrated for its probiotic and digestive qualities.",
      origin: "Rural Villages Across Sikkim",
      image: "/images/sikkim/gundruk_soup.jpg",
      dietary: "veg",
    },
    {
      name: "Phagshapa (Pork with Radish)",
      hindiName: "फागशापा",
      tag: "Traditional Strip Stew of Winter",
      description:
        "Strips of pork fat and meat simmered gently with whole dried mountain radishes and spicy red chilies, cooked without added oil to yield a rich, warming stew enjoyed with steamed sticky rice.",
      origin: "Bhutia Community Festivities",
      image: "/images/sikkim/phagshapa.jpg",
      dietary: "non-veg",
    },
    {
      name: "Chhurpi Cheese & Dalle Khursani Soup",
      hindiName: "छुड़पी चीज़ सूप",
      tag: "High-Altitude Yak Milk Delicacy",
      description:
        "Traditional cheese prepared from high-altitude cow or yak milk, cooked into a creamy comforting curry with green vegetables and seasoned with Dalle Khursani (one of the hottest round cherry peppers in the world).",
      origin: "Highland Yak Herders of Lachen & Lachung",
      image: "/images/sikkim/chhurpi_cheese.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Cham Sacred Monastic Mask Dance",
      type: "dance",
      description:
        "Mystical religious dance performed by Buddhist lamas in monastery courtyards during Chaam festivals, dressed in opulent silk brocade robes and hand-carved painted wooden masks representing wrathful protector deities to cleanse negative karma.",
      significance:
        "Deeply spiritual ritual drama demonstrating the triumph of Buddhist compassion and dharma over demonic ego forces.",
      image: "/images/sikkim/cham_mask_dance.jpg",
    },
    {
      name: "Losar Tibetan New Year",
      type: "festival",
      description:
        "The grand celebration of the Tibetan New Year across monasteries and homes, marked by hoisting fresh five-colored prayer flags (Lungta), preparing auspicious Kapse pastries, offering Chang brew, and visiting family elders.",
      significance:
        "Celebration of spiritual renewal, family unity, and welcoming auspicious planetary energy.",
      image: "/images/sikkim/losar_festival.jpg",
    },
    {
      name: "Sacred Thangka Scroll Painting",
      type: "art",
      description:
        "Intricate Tibetan Buddhist scroll paintings executed on treated cotton canvas using ground mineral pigments, crushed lapis lazuli, malachite, and pure 24-carat gold leaf, depicting deities, mandalas, and the wheel of life.",
      significance:
        "Sacred meditative visual guides for Buddhist contemplation, prayers, and monastery halls.",
      image: "/images/sikkim/thangka_painting.jpg",
    },
  ],
  attires: [
    {
      name: "Bhutia Bakhu (Kho) & Honju",
      gender: "unisex",
      fabric: "Silk Brocade with Handwoven Wool",
      description:
        "The majestic traditional robe worn by Bhutia men and women, consisting of a sleeveless ankle-length gown (Kho) fastened at the neck and waist with a silk sash, worn over a loose-sleeved silk blouse (Honju) and paired with the Pangden apron by married women.",
      occasions: "Losar festival, monastic pujas, weddings, and formal state banquets.",
      image: "/images/sikkim/bakhu_dress.jpg",
    },
    {
      name: "Lepcha Dumvum (Dumdem)",
      gender: "women",
      fabric: "Handspun Cotton or Silk in Pastel Tones",
      description:
        "The graceful traditional dress of the indigenous Lepcha women, an ankle-length unstitched fabric pinned neatly over the shoulders with traditional silver brooches, worn over a contrasting long-sleeved silk shirt (Tago).",
      occasions: "Tendong Lho Rum Faat festival and sacred community celebrations.",
      image: "/images/sikkim/lepcha_dumvum.jpg",
    },
    {
      name: "Nepali Daura Suruwal & Dhaka Topi",
      gender: "men",
      fabric: "Fine Cotton or Wool with Intricate Dhaka Weave",
      description:
        "The traditional attire worn by Nepali men in Sikkim, consisting of an asymmetrical eight-string tunic (Daura), snug tapered trousers (Suruwal), and the geometric patterned woven Dhaka cotton cap (Dhaka Topi).",
      occasions: "Dashain festival, weddings, and cultural assemblies.",
      image: "/images/sikkim/traditional_silk.jpg",
    },
  ],
  monuments: [
    {
      name: "Rumtek Monastery",
      location: "Pakyong District",
      era: "1966 CE (16th Karmapa)",
      unesco: false,
      description:
        "Magnificent Tibetan Buddhist monastic citadel housing the main shrine hall with 10-foot gilded statues of the Buddha, surrounded by monastic colleges and the Golden Stupa containing the relics of the 16th Karmapa.",
      image: "/images/sikkim/rumtek_monastery.jpg",
      significance: "Premier international seat of the Karma Kagyu lineage in India.",
    },
    {
      id: "gurudongmar-lake-monument",
      name: "Gurudongmar Sacred Waters",
      location: "North Sikkim",
      era: "Natural Glacial Sanctum",
      unesco: false,
      description:
        "Glacial lake perched at 17,800 feet surrounded by jagged snow peaks, venerated as blessed by Guru Padmasambhava and Guru Nanak Dev Ji to provide fresh water to high-altitude travelers.",
      image: "/images/sikkim/gurudongmar_lake.jpg",
      significance: "One of the highest and most spiritually revered alpine lakes in the world.",
    },
    {
      name: "Nathu La Mountain Pass",
      location: "East Sikkim Border",
      era: "Ancient Silk Route Milestone",
      unesco: false,
      description:
        "Pivotal mountain pass cut through the eastern Himalayas at 14,140 feet, serving as an ancient trading artery and present-day international border checkpoint.",
      image: "/images/sikkim/nathula_pass.jpg",
      significance: "Historical Silk Route mountain crossing and national defense bastion.",
    },
    {
      name: "Pemayangtse Monastery",
      location: "Pelling, West Sikkim",
      era: "1705 CE (Lhatsun Chempo)",
      unesco: false,
      description:
        "Three-story stone monastery set against panoramic vistas of Mount Kanchenjunga, preserving precious historic sculptures, antique murals, and ancient Buddhist prayer instruments.",
      image: "/images/sikkim/pemayangtse_monastery.jpg",
      significance: "Supreme mother monastery of the Nyingma order in Sikkim.",
    },
  ],
  languages: [
    {
      name: "Nepali (नेपाली)",
      script: "Devanagari Script",
      speakers: "60% of Population",
      greeting: "Namaste / Kasto Chha? (नमस्ते)",
      meaning: "Warm greetings, how are you?",
      description:
        "The predominant lingua franca across Sikkim recognized in the Eighth Schedule of the Indian Constitution, carrying rich literature and folk traditions.",
    },
    {
      name: "Sikkimese / Bhutia (Drenjongke)",
      script: "Tibetan Script",
      speakers: "80,000+ (Bhutia Population)",
      greeting: "Kuzoozangpo La (སྐུ་གཟུགས་བཟང་པོ་ལགས།)",
      meaning: "May good health and auspicious blessings be with you",
      description:
        "Tibetic language of the Bhutia community carrying the courtly history and monastic traditions of the Namgyal dynasty.",
    },
    {
      name: "Lepcha (Róng)",
      script: "Lepcha Script (Róng Script)",
      speakers: "40,000+ (Indigenous Lepcha)",
      greeting: "Khamri (खामरी)",
      meaning: "Greetings of peace and kinship",
      description:
        "Ancient indigenous language of the first settlers of Sikkim, possessing its own unique native script and extensive botanical taxonomy of Himalayan plants.",
    },
  ],
  luminaries: [
    {
      name: "Chogyal Phuntsog Namgyal",
      image: "/images/luminaries/chogyal_phuntsog_namgyal.jpg",
      era: "1604 – 1670 CE",
      title: "First Chogyal (Spiritual & Temporal King) of Sikkim",
      contribution:
        "Consecrated as the first sovereign king of Sikkim in 1642 at Yuksom by three venerated Buddhist lamas, establishing the 333-year Namgyal dynasty and declaring Buddhism as the state religion.",
    },
    {
      name: "Lhatsun Chempo",
      image: "/images/luminaries/aryabhata.jpg",
      era: "1597 – 1654 CE",
      title: "Patron Saint & Spiritual Illuminator of Sikkim",
      contribution:
        "Great Tibetan Nyingma yogi and treasure revealer who crossed the treacherous snow passes of Kanchenjunga to open Sikkim as a sacred hidden land (Beyul) and founded historic monasteries like Dubdi.",
    },
    {
      name: "Bhaichung Bhutia",
      image: "/images/luminaries/bhaichung_bhutia.jpg",
      era: "1976 – Present",
      title: "Sikkimese Sniper & Indian Football Legend",
      contribution:
        "Pioneering international football captain born in Tinkitam, South Sikkim, who became the first Indian footballer to play professionally in Europe, inspiring generations of Indian youth in athletics.",
    },
  ],
}
