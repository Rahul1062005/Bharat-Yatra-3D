import type { StateData } from "../types/state"

export const nagalandData: StateData = {
  id: "nagaland",
  name: "Nagaland",
  hindiName: "नागालैंड",
  capital: "Kohima",
  tagline: "Land of Festivals, Warrior Heritage & Breathtaking Dzukou Valley",
  overview:
    "Perched on the rugged northeastern frontier bordering Myanmar, Nagaland is a mystical land of 16 recognized major indigenous tribes, each distinguished by its own unique language, intricate handwoven shawls, and ancestral warrior customs. Celebrated for the world-famous Hornbill Festival, the pristine emerald bamboo carpets of the Dzukou Valley, the fiery Raja Mircha (Bhut Jolokia), and the heroic World War II Battle of Kohima (the 'Stalingrad of the East'), Nagaland is a mountain realm of courage and fellowship.",
  ancientNames: ["Naga Hills", "Land of the Angamis & Aos", "Eastern Patkai Hills"],
  keyStats: [
    { label: "Districts", value: "16" },
    { label: "Capital", value: "Kohima" },
    { label: "Tribal Mosaic", value: "16 Major Indigenous Tribes (Ao, Angami, Konyak, Sumi...)" },
    { label: "Cultural Extravaganza", value: "Hornbill Festival (Festival of Festivals in December)" },
    { label: "Valley of Flowers", value: "Dzukou Valley (Emerald Bamboo Ridge)" },
    { label: "Fiery Pepper", value: "Naga Raja Mircha (GI-Tagged Ghost Pepper)" },
  ],
  quote: {
    text: "When you go home, tell them of us and say, for your tomorrow, we gave our today.",
    author: "Kohima War Memorial Epitaph",
  },
  districts: {
    "Kohima": {
      name: "Kohima",
      tagline: "Highland Capital & World War II Battleground",
      headquarters: "Kohima",
      knownFor: "Kohima War Cemetery, Kisama Heritage Village (Hornbill Festival venue), Dzukou Valley trek base, State Museum.",
      famousSpot: "Kisama Heritage Village & War Cemetery",
    },
    "Dimapur": {
      name: "Dimapur",
      tagline: "Commercial Gateway & Ancient Kachari Ruins",
      headquarters: "Dimapur",
      knownFor: "13th-century mushroom-domed Kachari Ruins, Dimapur airport and railhead, Diezephe craft village, Green Park.",
      famousSpot: "Kachari Ruins & Triple Falls",
    },
    "Mokokchung": {
      name: "Mokokchung",
      tagline: "Cultural Heartland of the Ao Nagas & Pioneer Towns",
      headquarters: "Mokokchung",
      knownFor: "Ungma heritage village (oldest and largest Ao village), Chuchuyimlang village (Moatsu festival), Longkhum eagle peak.",
      famousSpot: "Ungma Village & Longkhum Viewpoint",
    },
    "Mon": {
      name: "Mon",
      tagline: "Land of the Anghs & Konyak Tattooed Warriors",
      headquarters: "Mon",
      knownFor: "Longwa village (straddling the India-Myanmar international border), hereditary Angh palaces, gunsmith and woodcraft artisans.",
      famousSpot: "Longwa Border Village & Angh Palace",
    },
    "Wokha": {
      name: "Wokha",
      tagline: "Falcon Capital of the World on Doyang Lake",
      headquarters: "Wokha",
      knownFor: "Doyang River reservoir (winter stopover for millions of migratory Amur Falcons), Mount Tiyi, Lotha tribal culture.",
      famousSpot: "Doyang Amur Falcon Sanctuary",
    },
    "Phek": {
      name: "Phek",
      tagline: "Orchid Country of the Chakhesang Nagas",
      headquarters: "Phek",
      knownFor: "Shilloi Lake (footprint-shaped sacred lake), Pfutsero (coldest town in Nagaland), terrace rice farming.",
      famousSpot: "Shilloi Lake & Pfutsero Ridge",
    },
    "Tuensang": {
      name: "Tuensang",
      tagline: "Land of Mount Saramati on the Myanmar Frontier",
      headquarters: "Tuensang",
      knownFor: "Mount Saramati (highest peak in Nagaland at 3,841m), Chang and Yimkhiung tribal festivals, ancient living caves.",
      famousSpot: "Mount Saramati & Chang Heritage",
    },
    "Zunheboto": {
      name: "Zunheboto",
      tagline: "Warrior Seat of the Sumi Nagas & Asia's Largest Church",
      headquarters: "Zunheboto",
      knownFor: "Zunheboto Baptist Church (one of the largest church buildings in Asia), Satoi cloud forest, Ahuna post-harvest festival.",
      famousSpot: "Zunheboto Church & Satoi Ridge",
    },
  },
  landmarks: [
    {
      id: "kohima-war-cemetery",
      name: "Kohima War Cemetery & Memorial",
      district: "Kohima",
      lat: 25.6669,
      lon: 94.1036,
      category: "monument",
      description: "A beautifully landscaped terraced war cemetery maintained by the Commonwealth War Graves Commission on Garrison Hill, honoring the soldiers of the Allied forces who halted the Japanese advance into India during the brutal 1944 Battle of Kohima, featuring the famous tennis court battleground.",
      image: "/images/landmarks/nagaland/kohima-war-cemetery_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Kohima",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Kohima War Cemetery & Memorial in Kohima.",
      gallery: [
        {
                url: "/images/landmarks/nagaland/kohima-war-cemetery_angle1.jpg",
                angle: "Front Elevation",
                caption: "Kohima War Cemetery & Memorial — Front elevation and iconic monumental facade in Kohima."
        },
        {
                url: "/images/landmarks/nagaland/kohima-war-cemetery_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Kohima War Cemetery & Memorial — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/nagaland/kohima-war-cemetery_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kohima War Cemetery & Memorial — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/nagaland/kohima-war-cemetery_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kohima War Cemetery & Memorial — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "dzukou-valley",
      name: "Dzukou Valley & Emerald Ridges",
      district: "Kohima (Bordering Manipur)",
      lat: 25.5667,
      lon: 94.0667,
      category: "nature",
      description: "A breathtaking high-altitude valley resting at 2,452 meters, carpeted with rolling emerald-green dwarf bamboo hills and meandering crystal streams, home to the rare endemic Dzukou Lily blooming in monsoon months.",
      image: "/images/landmarks/nagaland/dzukou-valley_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Kohima (Bordering Manipur)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Dzukou Valley & Emerald Ridges in Kohima (Bordering Manipur).",
      gallery: [
        {
                url: "/images/landmarks/nagaland/dzukou-valley_angle1.jpg",
                angle: "Front Elevation",
                caption: "Dzukou Valley & Emerald Ridges — Front elevation and iconic monumental facade in Kohima (Bordering Manipur)."
        },
        {
                url: "/images/landmarks/nagaland/dzukou-valley_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Dzukou Valley & Emerald Ridges — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/nagaland/dzukou-valley_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Dzukou Valley & Emerald Ridges — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/nagaland/dzukou-valley_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Dzukou Valley & Emerald Ridges — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "kisama-heritage-village",
      name: "Naga Heritage Village at Kisama",
      district: "Kohima",
      lat: 25.5978,
      lon: 94.1169,
      category: "monument",
      description: "A permanent cultural village built 12 kilometers from Kohima, featuring authentic traditional tribal Morungs (bachelor dormitories) constructed by all 16 major Naga tribes, serving as the grand open-air stage for the annual Hornbill Festival.",
      image: "/images/landmarks/nagaland/kisama-heritage-village_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Kohima",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Naga Heritage Village at Kisama in Kohima.",
      gallery: [
        {
                url: "/images/landmarks/nagaland/kisama-heritage-village_angle1.jpg",
                angle: "Front Elevation",
                caption: "Naga Heritage Village at Kisama — Front elevation and iconic monumental facade in Kohima."
        },
        {
                url: "/images/landmarks/nagaland/kisama-heritage-village_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Naga Heritage Village at Kisama — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/nagaland/kisama-heritage-village_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Naga Heritage Village at Kisama — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/nagaland/kisama-heritage-village_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Naga Heritage Village at Kisama — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "kachari-ruins",
      name: "Kachari Megalithic Ruins",
      district: "Dimapur",
      lat: 25.9142,
      lon: 93.7317,
      category: "monument",
      description: "Mysterious 13th-century archaeological stone pillars carved into distinctive mushroom and chess-piece shapes by the Dimasa Kachari kingdom before the Ahom invasion, standing in a protected park in Dimapur.",
      image: "/images/landmarks/nagaland/kachari-ruins_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Dimapur",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Kachari Megalithic Ruins in Dimapur.",
      gallery: [
        {
                url: "/images/landmarks/nagaland/kachari-ruins_angle1.jpg",
                angle: "Front Elevation",
                caption: "Kachari Megalithic Ruins — Front elevation and iconic monumental facade in Dimapur."
        },
        {
                url: "/images/landmarks/nagaland/kachari-ruins_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Kachari Megalithic Ruins — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/nagaland/kachari-ruins_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kachari Megalithic Ruins — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/nagaland/kachari-ruins_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kachari Megalithic Ruins — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "khonoma-village",
      name: "Khonoma (India",
      district: "Kohima",
      lat: 25.6481,
      lon: 94.0208,
      category: "nature",
      description: "A 700-year-old historic Angami warrior village that led legendary resistance against British expeditions, later creating history by voluntarily banning all hunting and commercial logging to establish the Khonoma Nature Conservation and Tragopan Sanctuary.",
      image: "/images/landmarks/nagaland/khonoma-village_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Kohima",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Khonoma (India in Kohima.",
      gallery: [
        {
                url: "/images/landmarks/nagaland/khonoma-village_angle1.jpg",
                angle: "Front Elevation",
                caption: "Khonoma (India — Front elevation and iconic monumental facade in Kohima."
        },
        {
                url: "/images/landmarks/nagaland/khonoma-village_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Khonoma (India — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/nagaland/khonoma-village_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Khonoma (India — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/nagaland/khonoma-village_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Khonoma (India — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "doyang-reservoir",
      name: "Doyang Lake & Amur Falcon Sanctuary",
      district: "Wokha",
      lat: 26.1369,
      lon: 94.2817,
      category: "nature",
      description: "A massive scenic reservoir that welcomes over one million Amur Falcons every autumn migrating from Siberia to South Africa, earning Nagaland the international title of the 'Falcon Capital of the World'.",
      image: "/images/landmarks/nagaland/doyang-reservoir_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Wokha",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Doyang Lake & Amur Falcon Sanctuary in Wokha.",
      gallery: [
        {
                url: "/images/landmarks/nagaland/doyang-reservoir_angle1.jpg",
                angle: "Front Elevation",
                caption: "Doyang Lake & Amur Falcon Sanctuary — Front elevation and iconic monumental facade in Wokha."
        },
        {
                url: "/images/landmarks/nagaland/doyang-reservoir_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Doyang Lake & Amur Falcon Sanctuary — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/nagaland/doyang-reservoir_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Doyang Lake & Amur Falcon Sanctuary — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/nagaland/doyang-reservoir_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Doyang Lake & Amur Falcon Sanctuary — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Smoked Pork with Fermented Bamboo Shoot",
      hindiName: "स्मोक्ड पोर्क और बांस के अंकुर",
      tag: "The Unmistakable Soul of Naga Cuisine",
      description:
        "Wood-smoked pork pieces slow-cooked with pungent fermented bamboo shoot (Bastenga), fresh garlic, and whole Raja Mircha chilies, yielding an intensely flavorful, smoky, and tender meat dish.",
      origin: "Traditional Hearth Kitchens Statewide",
      image: "/images/nagaland/smoked_pork_bamboo.jpg",
      dietary: "non-veg",
    },
    {
      name: "Axone (Akhuni) Pork Stew",
      hindiName: "अखोनी करी",
      tag: "Pungent Fermented Soya Bean Wonder",
      description:
        "Boiled and naturally fermented soybeans mashed and wrapped in banana leaves, simmered with dried smoked meats, local wild ginger, and king chilies to create a deeply savory umami gravy.",
      origin: "Sumi Naga Tribal Tradition",
      image: "/images/nagaland/axone_paste.jpg",
      dietary: "non-veg",
    },
    {
      name: "Naga Galho (Nutritious Rice Stew)",
      hindiName: "गालहो",
      tag: "Comforting Khichdi of the Hills",
      description:
        "A wholesome, soul-warming rice porridge cooked with seasonal indigenous herbs, spinach, tender bamboo shoots, and cured meat scraps, seasoned simply with salt and fresh green chilies.",
      origin: "Angami & Ao Household Staple",
      image: "/images/nagaland/galho_porridge.jpg",
      dietary: "veg",
    },
    {
      name: "Raja Mircha (Ghost Pepper) Chutney",
      hindiName: "राजा मिर्चा चटनी",
      tag: "World-Renowned Fiery Hot Relish",
      description:
        "An intensely hot mash made from fresh or smoked King Chilies (Naga Morich / Bhut Jolokia) pounded with roasted tomatoes, garlic cloves, and fermented fish or roasted soybeans.",
      origin: "Universal Naga Table Relish",
      image: "/images/nagaland/raja_mircha.jpg",
      dietary: "veg",
    },
    {
      name: "Zutho (Traditional Fermented Rice Brew)",
      hindiName: "जुथो",
      tag: "Sweet & Frothy Heritage Beverage",
      description:
        "A cloudy, sweet-sour beverage brewed by fermenting steamed sticky rice with indigenous herbal yeast cakes, served frothy in polished bamboo mugs during harvest celebrations.",
      origin: "Angami & Chakhesang Festive Banquets",
      image: "/images/nagaland/zutho_brew.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "The Hornbill Festival (Festival of Festivals)",
      type: "festival",
      description:
        "A premier 10-day cultural extravaganza organized every December at Kisama Heritage Village near Kohima, bringing together all 16 major Naga tribes in their full traditional warrior regalia for synchronized drumming, archery, indigenous wrestling, and fire-making competitions.",
      significance:
        "Grand national celebration showcasing tribal unity, intercultural harmony, and living Naga folklore.",
      image: "/images/nagaland/hornbill_festival.jpg",
    },
    {
      name: "Moatsu Spring Sowing Festival",
      type: "festival",
      description:
        "The vibrant post-sowing festival of the Ao Naga tribe celebrated in early May after clearing and planting rice fields, marked by rhythmic Sangpangtu community feasts, fire building, and men singing melodious heroic ballads.",
      significance:
        "Thanksgiving ritual praying for bountiful harvests, social peace, and community solidarity.",
      image: "/images/nagaland/moatsu_festival.jpg",
    },
    {
      name: "Naga Wood Carving & Pillar Art",
      type: "art",
      description:
        "Ancient tribal craft where master woodworkers carve heavy wooden village gates and ceremonial Morung pillars out of single tree trunks, depicting stylized hornbill birds, human heads, tigers, and mithun horns as symbols of prosperity and valor.",
      significance:
        "Sacred monumental architectural craft symbolizing village defense and warrior prestige.",
      image: "/images/nagaland/naga_wood_carving.jpg",
    },
  ],
  attires: [
    {
      name: "Naga Warrior Shawl (Tsungkotepsu / Rongsu)",
      gender: "men",
      fabric: "Thick Handwoven Cotton with Animal Motifs",
      description:
        "The legendary warrior shawl of the Ao Nagas featuring a black base with broad red and white bands, hand-painted on a median white band with figures of tigers, elephants, Mithun, and human heads, traditionally earned only through brave deeds or noble community feasts (Feasts of Merit).",
      occasions: "Hornbill festival, tribal summits, and honorific state receptions.",
      image: "/images/nagaland/naga_warrior_shawl.jpg",
    },
    {
      name: "Angami Mekhela & Vachhe Wrap",
      gender: "women",
      fabric: "Backstrap Woven Cotton in Bold Black, Red & Yellow",
      description:
        "The striking traditional wraparound skirt (Mekhela) woven by Angami women on loin looms with geometric cross-stitch borders, worn with a matching shawl and heavy necklaces of carnelian and glass beads.",
      occasions: "Sekrenyi festival, weddings, and community dance assemblies.",
      image: "/images/nagaland/mekhela_wrap.jpg",
    },
    {
      name: "Hornbill Feather Headgear & Boar Tusk Ornaments",
      gender: "men",
      fabric: "Cane Crown, Great Hornbill Tail Feathers & Boar Tusks",
      description:
        "The regal ceremonial headdress worn by Naga male dancers consisting of a conical woven cane cap crowned by black and white feathers of the Great Indian Hornbill, paired with curved wild boar tusk collars and bear-hair armbands.",
      occasions: "Traditional warrior dances and Hornbill festival parades.",
      image: "/images/nagaland/hornbill_feather_headdress.jpg",
    },
  ],
  monuments: [
    {
      name: "Kohima War Memorial",
      location: "Garrison Hill, Kohima",
      era: "1944 CE (Battle of Kohima)",
      unesco: false,
      description:
        "Terraced hillside memorial marking the turning point of World War II in Asia, preserving the historic tennis court where hand-to-hand combat took place, and the famous bronze Kohima Epitaph.",
      image: "/images/nagaland/kohima_war_cemetery.jpg",
      significance: "Global historic military memorial commemorating valor and peace.",
    },
    {
      name: "Dzukou Valley Ridges",
      location: "Southern Kohima Border",
      era: "Natural Alpine Wonder",
      unesco: false,
      description:
        "Undulating high-altitude bamboo basin offering otherworldly panoramic ridge hiking and floral sanctuaries against mist-shrouded mountain skies.",
      image: "/images/nagaland/dzukou_valley.jpg",
      significance: "Premier pristine trekking and botanical sanctuary in Northeast India.",
    },
    {
      name: "Khonoma Fortified Village",
      location: "Kohima District",
      era: "Centuries of Indigenous Angami History",
      unesco: false,
      description:
        "Terraced stone village with historic fortress gates (Khurus) and traditional Morungs, serving as a shining model of community-driven biodiversity conservation.",
      image: "/images/nagaland/khonoma_village.jpg",
      significance: "India's first recognized green village and symbol of ecological stewardship.",
    },
    {
      name: "Dimapur Kachari Ruins",
      location: "Dimapur City",
      era: "13th Century CE (Dimasa Kingdom)",
      unesco: false,
      description:
        "Mysterious monolithic stone pillars with intricate carved decorations standing in a grove, testifying to advanced medieval metallurgical and stone masonry traditions.",
      image: "/images/nagaland/kachari_ruins.jpg",
      significance: "Crucial archaeological stone monument of the pre-Ahom medieval era.",
    },
  ],
  languages: [
    {
      name: "Nagamese (Creole Lingua Franca)",
      script: "Latin Script",
      speakers: "Widely Spoken Across All Tribes",
      greeting: "Kine ase? (How are you?)",
      meaning: "Warm friendly greeting of brotherhood",
      description:
        "The vibrant Assamese-based creole language spoken as the primary common market and inter-tribal tongue connecting all 16 distinct linguistic tribes across Nagaland.",
    },
    {
      name: "English (Official Language)",
      script: "Latin Script",
      speakers: "Statewide Administration & Education",
      greeting: "Hello / Good Morning",
      meaning: "Standard respectful greeting",
      description:
        "The official state language of governance, judiciary, high-level debate, and higher education in Nagaland.",
    },
    {
      name: "Ao, Angami, Sumi, Lotha & Tribal Tongues",
      script: "Latin Script",
      speakers: "Respective Tribal Populations",
      greeting: "Kerünyü / Aji (Tribal Greetings)",
      meaning: "Peace and good health to you",
      description:
        "Rich family of Tibeto-Burman languages possessing unique tonal nuances, heroic war poetry, and ancient tribal oral histories.",
    },
  ],
  luminaries: [
    {
      name: "Rani Gaidinliu",
      image: "/images/luminaries/rani_gaidinliu.jpg",
      era: "1915 – 1993 CE",
      title: "Rani of the Nagas & Fearless Freedom Fighter",
      contribution:
        "Heroic Rongmei Naga spiritual and political leader who led the Heraka religious movement and launched an armed rebellion against British colonial rule at age 16, imprisoned for 14 years until Indian independence, honored with the title 'Rani' by Jawaharlal Nehru.",
    },
    {
      name: "A.Z. Phizo (Angami Zapu Phizo)",
      image: "/images/luminaries/a_z_phizo_angami_zapu_phizo.jpg",
      era: "1904 – 1990 CE",
      title: "Pioneer of Modern Naga Identity",
      contribution:
        "Prominent historical leader who unified diverse tribes under the Naga National Council (NNC) in the 1940s, helping forge a unified modern political identity among the Naga people.",
    },
    {
      name: "Chekrovolu Swuro",
      image: "/images/luminaries/chekrovolu_swuro.jpg",
      era: "1982 – Present",
      title: "Olympic Archer & Arjuna Awardee",
      contribution:
        "Trailblazing archer from Dzulhami, Phek district, who represented India at the 2012 London Olympics and won silver medals at the World Archery Championships, putting Nagaland on the global sporting map.",
    },
  ],
}
