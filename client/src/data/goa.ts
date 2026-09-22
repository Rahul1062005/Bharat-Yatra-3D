import type { StateData } from "../types/state"

export const goaData: StateData = {
  id: "goa",
  name: "Goa",
  hindiName: "गोवा",
  capital: "Panaji",
  tagline: "Pearl of the Orient, Sun-Kissed Coast & Konkan Splendor",
  overview:
    "Nestled between the lush emerald slopes of the Western Ghats and the sparkling Arabian Sea, Goa is a captivating blend of Indian Konkani traditions and Portuguese colonial heritage. World-famous for its golden palm-fringed beaches, UNESCO World Heritage basilicas of Old Goa, spice plantations, fiery vindaloo, sweet bebinca, and the high-spirited festivities of Shigmo and Carnival, Goa is India's sunshine capital.",
  ancientNames: ["Gomantak", "Gove", "Govapuri", "Aparanta"],
  keyStats: [
    { label: "Districts", value: "2 (North Goa & South Goa)" },
    { label: "Capital", value: "Panaji (on Mandovi River)" },
    { label: "Coastline", value: "105 km of Golden Arabian Sea Beaches" },
    { label: "UNESCO Monuments", value: "Churches and Convents of Old Goa (Velha Goa)" },
    { label: "Waterfalls", value: "Dudhsagar Falls (Sea of Milk on Mandovi)" },
    { label: "State Drink", value: "Heritage Cashew & Coconut Feni (GI Tagged)" },
  ],
  quote: {
    text: "Susegad — A tranquil state of mind where time slows down to the rhythm of sea waves and coconut palms.",
    author: "Goan Philosophy of Peaceful Living",
  },
  districts: {
    "North Goa": {
      name: "North Goa",
      tagline: "Vibrant Beaches, Historic Forts & Latin Quarter",
      headquarters: "Panaji",
      knownFor: "Fort Aguada, Chapora Fort (Dil Chahta Hai), Anjuna & Calangute beaches, Fontainhas Latin Quarter, Basilica of Bom Jesus.",
      famousSpot: "Fort Aguada & Fontainhas Panaji",
    },
    "South Goa": {
      name: "South Goa",
      tagline: "Serene White Sands, Heritage Mansions & Dudhsagar",
      headquarters: "Margao",
      knownFor: "Colva & Palolem beaches, Dudhsagar Waterfalls, Cabo de Rama Fort, ancestral Portuguese mansions in Chandor.",
      famousSpot: "Dudhsagar Falls & Palolem Beach",
    },
  },
  landmarks: [
    {
      id: "basilica-bom-jesus",
      name: "Basilica of Bom Jesus",
      district: "North Goa (Old Goa)",
      lat: 15.5008,
      lon: 73.9116,
      category: "spiritual",
      description: "UNESCO World Heritage Baroque church completed in 1605, famous for holding the mortal relics of Saint Francis Xavier in an ornate glass-sided silver casket, marking the beginning of Christianity in India.",
      image: "/images/landmarks/goa/basilica-bom-jesus_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of North Goa (Old Goa)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Basilica of Bom Jesus in North Goa (Old Goa).",
      gallery: [
        {
                url: "/images/landmarks/goa/basilica-bom-jesus_angle1.jpg",
                angle: "Front Elevation",
                caption: "Basilica of Bom Jesus — Front elevation and iconic monumental facade in North Goa (Old Goa)."
        },
        {
                url: "/images/landmarks/goa/basilica-bom-jesus_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Basilica of Bom Jesus — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/goa/basilica-bom-jesus_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Basilica of Bom Jesus — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/goa/basilica-bom-jesus_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Basilica of Bom Jesus — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "fort-aguada",
      name: "Fort Aguada & Historic Lighthouse",
      district: "North Goa",
      lat: 15.4925,
      lon: 73.7736,
      category: "monument",
      description: "A colossal 17th-century Portuguese coastal fortress built on Sinquerim beach overlooking the mouth of the Mandovi River, equipped with an immense freshwater cistern that replenished passing trade ships and a four-story lighthouse built in 1864.",
      image: "/images/landmarks/goa/fort-aguada_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of North Goa",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Fort Aguada & Historic Lighthouse in North Goa.",
      gallery: [
        {
                url: "/images/landmarks/goa/fort-aguada_angle1.jpg",
                angle: "Front Elevation",
                caption: "Fort Aguada & Historic Lighthouse — Front elevation and iconic monumental facade in North Goa."
        },
        {
                url: "/images/landmarks/goa/fort-aguada_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Fort Aguada & Historic Lighthouse — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/goa/fort-aguada_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Fort Aguada & Historic Lighthouse — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/goa/fort-aguada_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Fort Aguada & Historic Lighthouse — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "se-cathedral",
      name: "Sé Cathedral of Saint Catherine",
      district: "North Goa (Old Goa)",
      lat: 15.5036,
      lon: 73.9125,
      category: "spiritual",
      description: "One of the largest churches in all of Asia, built in Portuguese-Manueline architectural style between 1562 and 1619, renowned for its Golden Bell (Sino de Ouro) celebrated as one of the best-sounding bells in the world.",
      image: "/images/landmarks/goa/se-cathedral_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of North Goa (Old Goa)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Sé Cathedral of Saint Catherine in North Goa (Old Goa).",
      gallery: [
        {
                url: "/images/landmarks/goa/se-cathedral_angle1.jpg",
                angle: "Front Elevation",
                caption: "Sé Cathedral of Saint Catherine — Front elevation and iconic monumental facade in North Goa (Old Goa)."
        },
        {
                url: "/images/landmarks/goa/se-cathedral_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Sé Cathedral of Saint Catherine — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/goa/se-cathedral_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Sé Cathedral of Saint Catherine — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/goa/se-cathedral_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Sé Cathedral of Saint Catherine — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "chapora-fort",
      name: "Chapora Fort",
      district: "North Goa",
      lat: 15.6058,
      lon: 73.7369,
      category: "monument",
      description: "Iconic hilltop red-laterite fort constructed in 1717 by the Portuguese over an earlier Adil Shahi fortification, offering panoramic 360-degree sunset vistas over Vagator Beach and the Chapora River mouth.",
      image: "/images/landmarks/goa/chapora-fort_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of North Goa",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Chapora Fort in North Goa.",
      gallery: [
        {
                url: "/images/landmarks/goa/chapora-fort_angle1.jpg",
                angle: "Front Elevation",
                caption: "Chapora Fort — Front elevation and iconic monumental facade in North Goa."
        },
        {
                url: "/images/landmarks/goa/chapora-fort_angle3.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Chapora Fort — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/goa/chapora-fort_angle4.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Chapora Fort — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/goa/chapora-fort_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Chapora Fort — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "dudhsagar-falls",
      name: "Dudhsagar Waterfalls (Sea of Milk)",
      district: "South Goa",
      lat: 15.3144,
      lon: 74.3143,
      category: "nature",
      description: "A spectacular four-tiered waterfall cascading down 310 meters (1,017 feet) through the lush jungle of Bhagwan Mahaveer Sanctuary, where the historic South Western Railway viaduct cuts dramatically through the roaring white foam.",
      image: "/images/landmarks/goa/dudhsagar-falls_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of South Goa",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Dudhsagar Waterfalls (Sea of Milk) in South Goa.",
      gallery: [
        {
                url: "/images/landmarks/goa/dudhsagar-falls_angle1.jpg",
                angle: "Front Elevation",
                caption: "Dudhsagar Waterfalls (Sea of Milk) — Front elevation and iconic monumental facade in South Goa."
        },
        {
                url: "/images/landmarks/goa/dudhsagar-falls_angle3.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Dudhsagar Waterfalls (Sea of Milk) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/goa/dudhsagar-falls_angle4.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Dudhsagar Waterfalls (Sea of Milk) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/goa/dudhsagar-falls_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Dudhsagar Waterfalls (Sea of Milk) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "shanta-durga-temple",
      name: "Shree Shantadurga Temple",
      district: "South Goa (Kavlem, Ponda)",
      lat: 15.3619,
      lon: 73.9856,
      category: "spiritual",
      description: "Magnificent temple complex dedicated to Goddess Shantadurga who mediated peace between Lord Shiva and Lord Vishnu, featuring unique Goan-Hindu architecture with red-tiled sloping roofs and a multi-tiered Deepastambha lamp tower.",
      image: "/images/landmarks/goa/shanta-durga-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of South Goa (Kavlem, Ponda)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Shree Shantadurga Temple in South Goa (Kavlem, Ponda).",
      gallery: [
        {
                url: "/images/landmarks/goa/shanta-durga-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Shree Shantadurga Temple — Front elevation and iconic monumental facade in South Goa (Kavlem, Ponda)."
        },
        {
                url: "/images/landmarks/goa/shanta-durga-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Shree Shantadurga Temple — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/goa/shanta-durga-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Shree Shantadurga Temple — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/goa/shanta-durga-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Shree Shantadurga Temple — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Goan Fish Curry Rice",
      hindiName: "गोअन फिश करी चावल",
      tag: "The Everyday Soul of Goan Households",
      description:
        "Fresh kingfish (surmai) or pomfret simmered in a luscious golden-orange gravy crafted from freshly grated coconut, Kashmiri red chilies, coriander seeds, and tart dried mangosteen rind (Kokum), served with hot steamed rice.",
      origin: "Coastal Fisherfolk Villages of Goa",
      image: "/images/goa/goan_fish_curry.jpg",
      dietary: "non-veg",
    },
    {
      name: "Chicken Xacuti",
      hindiName: "चिकन शाकूती",
      tag: "Complex Roasted Spice & Coconut Curry",
      description:
        "Tender chicken pieces cooked in a rich, deeply fragrant gravy prepared by slow-roasting white poppy seeds, star anise, nutmeg, and grated coconut until dark golden, producing an intense, earthy aroma.",
      origin: "Ponda & North Goa",
      image: "/images/goa/chicken_xacuti.jpg",
      dietary: "non-veg",
    },
    {
      name: "Bebinca (Queen of Goan Desserts)",
      hindiName: "बेबिंका",
      tag: "GI-Tagged Seven-Layered Royal Pudding",
      description:
        "A glorious traditional Indo-Portuguese dessert painstakingly baked layer by individual layer, made from a rich batter of coconut milk, egg yolks, flour, sugar, and nutmeg, separated by generous brushes of pure ghee.",
      origin: "Convent of Santa Monica, Old Goa",
      image: "/images/goa/bebinca.jpg",
      dietary: "veg",
    },
    {
      name: "Pork Vindaloo",
      hindiName: "पोर्क विंदालू",
      tag: "World-Renowned Spicy & Tangy Sensation",
      description:
        "Iconic dish derived from Portuguese 'Carne de vinha d'alhos' (meat with wine and garlic), slow-cooked with tender pork, toddy vinegar, garlic cloves, and fiery Kashmiri dried chilies to create an irresistible sweet-sour tang.",
      origin: "Goan Catholic Culinary Heritage",
      image: "/images/goa/pork_vindaloo.jpg",
      dietary: "non-veg",
    },
    {
      name: "Goan Heritage Cashew Feni",
      hindiName: "गोअन फेनी",
      tag: "GI-Tagged Indigenous Triple-Distilled Spirit",
      description:
        "Ancient indigenous spirit distilled twice or thrice from the fermented juice of ripe cashew apples in traditional earthen pots (Bhatti), bearing a Geographical Indication and deep cultural heritage.",
      origin: "Valpoi & Sattari Orchards",
      image: "/images/goa/goan_feni.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Shigmo Spring Festival",
      type: "festival",
      description:
        "The vibrant 14-day spring festival celebrated by Goan Hindus across towns and villages, marked by colorful grand street parades, traditional Ghode Modni warrior dances, Romta Mell drumming, and elaborate mythological floats.",
      significance:
        "Folk celebration welcoming spring and honoring warriors returning from battles.",
      image: "/images/goa/shigmo_festival.jpg",
    },
    {
      name: "Dekhnni & Fugdi Folk Dance",
      type: "dance",
      description:
        "Traditional Konkani folk dances performed by women, featuring graceful hand gestures, clapping, and rhythmic steps to celebrate social events, accompanied by the Ghumat percussion drum crafted from an earthen pot.",
      significance:
        "Celebration of indigenous Konkani rhythm, feminine fellowship, and joyful village life.",
      image: "/images/goa/dekhnni_dance.jpg",
    },
    {
      name: "Goa Carnival (Viva Carnaval)",
      type: "festival",
      description:
        "A lively four-day pre-Lenten street extravaganza introduced by the Portuguese in the 18th century, led by the jolly King Momo with brass bands, elaborate mask parades, and colorful floats moving through Panaji, Margao, and Vasco.",
      significance:
        "Unique public festival celebrating joy, music, and the infectious spirit of Goan life.",
      image: "/images/goa/goan_carnival.jpg",
    },
  ],
  attires: [
    {
      name: "Kunbi Traditional Saree",
      gender: "women",
      fabric: "Handwoven Red & Yellow Cotton Checkered Fabric",
      description:
        "The ancient handloom saree worn by the indigenous Kunbi tribal women of Goa, woven in durable coarse cotton with distinctive red, black, and yellow checkered patterns, draped tied neatly over the right shoulder without an inner petticoat.",
      occasions: "Agricultural harvest dances, folk festivals, and heritage events.",
      image: "/images/goa/kunbi_saree.jpg",
    },
    {
      name: "Pano Bhaju (Indo-Portuguese Royal Wear)",
      gender: "women",
      fabric: "Velvet or Heavy Silk with Gold Zari Embroidery",
      description:
        "Aristocratic traditional dress evolved during Portuguese rule, combining a heavily embroidered long velvet or satin skirt (Pano) with a fitted short-sleeved blouse (Bhaju) and a gold-bordered stole.",
      occasions: "Traditional Mando ballroom dance performances and Christian weddings.",
      image: "/images/goa/pano_bhaju.jpg",
    },
    {
      name: "Kashti & Pudvem",
      gender: "men",
      fabric: "Handwoven Cotton Fabric",
      description:
        "Traditional loincloth and cotton waist drape (Kashti/Pudvem) worn by fishermen and agrarian workers along the coast, paired with a simple loose shirt or sleeveless vest.",
      occasions: "Fishing expeditions, rural temple festivities, and folk performances.",
      image: "/images/goa/kashti_loincloth.jpg",
    },
  ],
  monuments: [
    {
      name: "Basilica of Bom Jesus",
      location: "Old Goa (Velha Goa)",
      era: "1594 – 1605 CE",
      unesco: true,
      description:
        "Monumental unplastered laterite Baroque basilica showcasing exquisite carved basalt ornamentation, housing the silver casket of Saint Francis Xavier and gilded woodcarvings.",
      image: "/images/goa/basilica_bom_jesus.jpg",
      significance: "UNESCO World Heritage Site and premier landmark of Christian heritage in Asia.",
    },
    {
      name: "Fort Aguada",
      location: "Candolim, North Goa",
      era: "1612 CE (Portuguese Empire)",
      unesco: false,
      description:
        "Well-preserved sea-facing bastion extending into the Arabian Sea with dry moat, ammunition chambers, and an ancient four-story stone lighthouse.",
      image: "/images/goa/fort_aguada.jpg",
      significance: "Formidable coastal defense monument guarding the mouth of the Mandovi River.",
    },
    {
      name: "Sé Cathedral",
      location: "Old Goa",
      era: "1562 – 1619 CE",
      unesco: true,
      description:
        "Grand Tuscan-exterior church dedicated to Saint Catherine of Alexandria, famous for its magnificent altar gilded in gold leaf and housing the miraculous Cross of Miracles.",
      image: "/images/goa/se_cathedral.jpg",
      significance: "Largest cathedral in the entire Asian continent.",
    },
    {
      name: "Chapora Fort",
      location: "Vagator, North Goa",
      era: "1717 CE",
      unesco: false,
      description:
        "Historic red-laterite ramparts perched on a prominent bluff above Vagator Beach, offering sweeping views of the coastline, popularized in modern Indian cinema.",
      image: "/images/goa/chapora_fort.jpg",
      significance: "Strategic military watchpost overlooking northern Goan coastal waters.",
    },
  ],
  languages: [
    {
      name: "Konkani (कोंकणी / ಕೊಂಕಣಿ / कोंकणी)",
      script: "Devanagari (Official Script) & Roman Script",
      speakers: "2.5+ Million",
      greeting: "Dev Boro Dis Dium (देव बरें दीस दिंव)",
      meaning: "May God grant you a blessed and beautiful day",
      description:
        "The official state language of Goa, recognized in the Eighth Schedule of the Indian Constitution, celebrated for its rich proverbs, Konkani tiatr musical drama, and devotional poetry.",
    },
    {
      name: "Marathi & English",
      script: "Devanagari / Latin",
      speakers: "1+ Million",
      greeting: "Namaskar / Hello",
      meaning: "Respectful greetings to you",
      description:
        "Widely spoken across commerce, higher education, journalism, and tourist services.",
    },
    {
      name: "Portuguese (Heritage)",
      script: "Latin Script",
      speakers: "Elderly Population & Heritage Scholars",
      greeting: "Olá / Bom Dia",
      meaning: "Good morning / Hello",
      description:
        "Preserved in colonial architectural archives, historical land records, and traditional Catholic hymns.",
    },
  ],
  luminaries: [
    {
      name: "Dr. Ram Manohar Lohia",
      image: "/images/luminaries/dr_ram_manohar_lohia.jpg",
      era: "1910 – 1967 CE",
      title: "Catalyst of the Goa Liberation Movement",
      contribution:
        "Visionary socialist leader and freedom fighter who arrived in Margao on June 18, 1946, and boldly defied Portuguese bans on civil liberties, sparking the final mass revolution for Goa's liberation from colonial rule.",
    },
    {
      name: "Abbade Faria (José Custódio de Faria)",
      image: "/images/luminaries/abbade_faria_jos_cust_dio_de_faria.jpg",
      era: "1756 – 1819 CE",
      title: "Father of Modern Hypnotism & Scientific Suggestion",
      contribution:
        "Goan Catholic monk born in Candolim who moved to Paris and revolutionized psychology by proving that hypnotism was not animal magnetism or magic, but the power of mental suggestion.",
    },
    {
      name: "Lata Mangeshkar",
      image: "/images/luminaries/lata_mangeshkar.jpg",
      era: "1929 – 2022 CE",
      title: "Nightingale of India & Bharat Ratna",
      contribution:
        "Legendary playback singer whose family roots trace directly to the temple village of Mangeshi in Goa (originating from father Pandit Deenanath Mangeshkar), recording tens of thousands of songs across 36 languages.",
    },
  ],
}
