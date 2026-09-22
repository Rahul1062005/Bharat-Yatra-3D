import type { StateData } from "../types/state"

export const meghalayaData: StateData = {
  id: "meghalaya",
  name: "Meghalaya",
  hindiName: "मेघालय",
  capital: "Shillong",
  tagline: "Abode of Clouds, Living Root Bridges & Scotland of the East",
  overview:
    "Named from the Sanskrit words 'Megha' (cloud) and 'Aalaya' (abode), Meghalaya is a lush, mist-draped mountain plateau of thundering waterfalls, deep limestone caves, and ancient sacred groves. Famous for the double-decker living root bridges bio-engineered by indigenous Khasi villagers from Ficus elastica trees, the wettest places on earth (Mawsynram and Cherrapunji), the matrilineal traditions of the Khasi, Jaintia, and Garo tribes, and the vibrant music culture of Shillong, Meghalaya is an ecological marvel.",
  ancientNames: ["Abode of Clouds", "Khasi & Jaintia Hills", "Garo Hills", "Pragjyotisha Borders"],
  keyStats: [
    { label: "Districts", value: "12" },
    { label: "Capital", value: "Shillong (Scotland of the East)" },
    { label: "Rainfall Record", value: "Mawsynram & Cherrapunji (Wettest Places on Earth)" },
    { label: "Bio-Engineering Wonder", value: "Living Root Bridges (Ficus Elastica Aerial Roots)" },
    { label: "Social System", value: "World's Largest Matrilineal Society (Khasi, Garo, Jaintia)" },
    { label: "Crystal Clear River", value: "Umngot River at Dawki (Boats Float on Glass)" },
  ],
  quote: {
    text: "Here human hands do not conquer nature; we guide living tree roots across misty river gorges to grow bridges that strengthen with every passing century.",
    author: "Khasi Indigenous Wisdom",
  },
  districts: {
    "East Khasi Hills": {
      name: "East Khasi Hills",
      tagline: "Shillong Music Capital & Sohra (Cherrapunji) Cascades",
      headquarters: "Shillong",
      knownFor: "Nohkalikai Falls, Double Decker Living Root Bridge (Nongriat), Shillong Peak, Elephant Falls, Police Bazar.",
      famousSpot: "Nohkalikai Falls & Nongriat Root Bridge",
    },
    "West Jaintia Hills": {
      name: "West Jaintia Hills",
      tagline: "Crystal Waters of Dawki & Krang Shuri Falls",
      headquarters: "Jowai",
      knownFor: "Dawki Umngot River (crystal clear boating), Krang Shuri turquoise waterfall, Nartiang monoliths (tallest megaliths in India).",
      famousSpot: "Dawki Umngot River & Krang Shuri",
    },
    "Ri-Bhoi": {
      name: "Ri-Bhoi",
      tagline: "Gateway of Pine Hills & Tranquil Umiam Lake",
      headquarters: "Nongpoh",
      knownFor: "Umiam Lake (Barapani water sports), Lum Nehru Park, organic pineapple and ginger farming.",
      famousSpot: "Umiam Lake & Water Sports",
    },
    "West Garo Hills": {
      name: "West Garo Hills",
      tagline: "Cultural Heartland of Tura & Nokrek Biosphere",
      headquarters: "Tura",
      knownFor: "Nokrek National Park (Biosphere reserve & mother of Citrus indica), Tura Peak, Pelga Falls, Wangala festival.",
      famousSpot: "Nokrek Biosphere & Tura Peak",
    },
    "East Garo Hills": {
      name: "East Garo Hills",
      tagline: "Verdant Simsang River Basin & Tribal Legends",
      headquarters: "Williamnagar",
      knownFor: "Simsang River, historic battlegrounds of Pa Togan Sangma, orange orchards, Rongreng Baite.",
      famousSpot: "Simsang River & Togan Nengminza Memorial",
    },
    "South West Khasi Hills": {
      name: "South West Khasi Hills",
      tagline: "Hot Springs of Jakrem & Green Canyons",
      headquarters: "Mawkyrwat",
      knownFor: "Jakrem hot sulfur springs, Synrang Mawrin stone structures, Ranikor angling river haven.",
      famousSpot: "Jakrem Hot Springs & Ranikor",
    },
  },
  landmarks: [
    {
      id: "double-decker-root-bridge",
      name: "Nongriat Double Decker Living Root Bridge",
      district: "East Khasi Hills (Sohra)",
      lat: 25.2508,
      lon: 91.6719,
      category: "nature",
      description: "A miracle of indigenous bio-engineering grown by the Khasi people over centuries in Nongriat village, where living aerial roots of the rubber fig tree (Ficus elastica) are guided through hollow betel-nut trunks across roaring mountain streams into a two-tiered living suspension bridge.",
      image: "/images/landmarks/meghalaya/double-decker-root-bridge_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of East Khasi Hills (Sohra)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Nongriat Double Decker Living Root Bridge in East Khasi Hills (Sohra).",
      gallery: [
        {
                url: "/images/landmarks/meghalaya/double-decker-root-bridge_angle1.jpg",
                angle: "Front Elevation",
                caption: "Nongriat Double Decker Living Root Bridge — Front elevation and iconic monumental facade in East Khasi Hills (Sohra)."
        },
        {
                url: "/images/landmarks/meghalaya/double-decker-root-bridge_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Nongriat Double Decker Living Root Bridge — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/meghalaya/double-decker-root-bridge_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Nongriat Double Decker Living Root Bridge — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/meghalaya/double-decker-root-bridge_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Nongriat Double Decker Living Root Bridge — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "nohkalikai-falls",
      name: "Nohkalikai Waterfalls",
      district: "East Khasi Hills (Cherrapunji)",
      lat: 25.2756,
      lon: 91.6853,
      category: "nature",
      description: "The tallest plunge waterfall in India dropping 340 meters (1,115 feet) straight off the cloud-shrouded Cherrapunji plateau into an ethereal turquoise-green mountain plunge pool amidst deep rainforests.",
      image: "/images/landmarks/meghalaya/nohkalikai-falls_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of East Khasi Hills (Cherrapunji)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Nohkalikai Waterfalls in East Khasi Hills (Cherrapunji).",
      gallery: [
        {
                url: "/images/landmarks/meghalaya/nohkalikai-falls_angle1.jpg",
                angle: "Front Elevation",
                caption: "Nohkalikai Waterfalls — Front elevation and iconic monumental facade in East Khasi Hills (Cherrapunji)."
        },
        {
                url: "/images/landmarks/meghalaya/nohkalikai-falls_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Nohkalikai Waterfalls — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/meghalaya/nohkalikai-falls_angle4.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Nohkalikai Waterfalls — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/meghalaya/nohkalikai-falls_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Nohkalikai Waterfalls — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "umngot-river-dawki",
      name: "Umngot River of Dawki",
      district: "West Jaintia Hills",
      lat: 25.1953,
      lon: 92.0169,
      category: "nature",
      description: "World-famous border river whose crystal-clear transparent waters make wooden boats appear as if they are floating in mid-air over the colorful pebbled riverbed, nestled along the India-Bangladesh border.",
      image: "/images/landmarks/meghalaya/umngot-river-dawki_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of West Jaintia Hills",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Umngot River of Dawki in West Jaintia Hills.",
      gallery: [
        {
                url: "/images/landmarks/meghalaya/umngot-river-dawki_angle1.jpg",
                angle: "Front Elevation",
                caption: "Umngot River of Dawki — Front elevation and iconic monumental facade in West Jaintia Hills."
        },
        {
                url: "/images/landmarks/meghalaya/umngot-river-dawki_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Umngot River of Dawki — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/meghalaya/umngot-river-dawki_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Umngot River of Dawki — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/meghalaya/umngot-river-dawki_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Umngot River of Dawki — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "umiam-lake",
      name: "Umiam Lake (Barapani)",
      district: "Ri-Bhoi",
      lat: 25.6669,
      lon: 91.8953,
      category: "nature",
      description: "A sprawling reservoir framed by rolling pine-covered hills just outside Shillong, offering scenic boating, kayaking, and tranquil sunset reflections across 220 square kilometers of freshwater catchment.",
      image: "/images/landmarks/meghalaya/umiam-lake_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Ri-Bhoi",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Umiam Lake (Barapani) in Ri-Bhoi.",
      gallery: [
        {
                url: "/images/landmarks/meghalaya/umiam-lake_angle1.jpg",
                angle: "Front Elevation",
                caption: "Umiam Lake (Barapani) — Front elevation and iconic monumental facade in Ri-Bhoi."
        },
        {
                url: "/images/landmarks/meghalaya/umiam-lake_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Umiam Lake (Barapani) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/meghalaya/umiam-lake_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Umiam Lake (Barapani) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/meghalaya/umiam-lake_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Umiam Lake (Barapani) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "mawlynnong-village",
      name: "Mawlynnong (Cleanest Village in Asia)",
      district: "East Khasi Hills",
      lat: 25.2019,
      lon: 91.9161,
      category: "nature",
      description: "Award-winning eco-friendly village celebrated for 100% literacy, immaculate cobbled lanes lined with flowering orchids, bamboo dustbins (Khohs) placed every few paces, and community-wide environmental stewardship.",
      image: "/images/landmarks/meghalaya/mawlynnong-village_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of East Khasi Hills",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Mawlynnong (Cleanest Village in Asia) in East Khasi Hills.",
      gallery: [
        {
                url: "/images/landmarks/meghalaya/mawlynnong-village_angle1.jpg",
                angle: "Front Elevation",
                caption: "Mawlynnong (Cleanest Village in Asia) — Front elevation and iconic monumental facade in East Khasi Hills."
        },
        {
                url: "/images/landmarks/meghalaya/mawlynnong-village_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Mawlynnong (Cleanest Village in Asia) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/meghalaya/mawlynnong-village_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Mawlynnong (Cleanest Village in Asia) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/meghalaya/mawlynnong-village_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Mawlynnong (Cleanest Village in Asia) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "nartiang-monoliths",
      name: "Nartiang Megalithic Garden",
      district: "West Jaintia Hills",
      lat: 25.5769,
      lon: 92.2158,
      category: "monument",
      description: "A historic ceremonial park housing the tallest standing stone monoliths (Moo Shynrang) in India erected between 1500 and 1835 CE by the Jaintia kings to commemorate martial victories and royal lineage.",
      image: "/images/landmarks/meghalaya/nartiang-monoliths_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of West Jaintia Hills",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Nartiang Megalithic Garden in West Jaintia Hills.",
      gallery: [
        {
                url: "/images/landmarks/meghalaya/nartiang-monoliths_angle1.jpg",
                angle: "Front Elevation",
                caption: "Nartiang Megalithic Garden — Front elevation and iconic monumental facade in West Jaintia Hills."
        },
        {
                url: "/images/landmarks/meghalaya/nartiang-monoliths_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Nartiang Megalithic Garden — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/meghalaya/nartiang-monoliths_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Nartiang Megalithic Garden — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/meghalaya/nartiang-monoliths_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Nartiang Megalithic Garden — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Khasi Jadoh (Spiced Rice with Meat)",
      hindiName: "जादोह",
      tag: "The Authentic Soul Food of the Khasis",
      description:
        "Signature Khasi dish prepared by cooking red hill rice in rich meat broth with tender pork or chicken, black sesame seeds, ginger, onions, and bay leaves, yielding an intensely flavorful, aromatic meal.",
      origin: "Traditional Khasi Stalls & Celebrations",
      image: "/images/meghalaya/jadoh_rice.jpg",
      dietary: "non-veg",
    },
    {
      name: "Dohneiiong (Pork in Black Sesame)",
      hindiName: "दोहनेइओंग",
      tag: "Velvety Dark Pork Gravy of Sohra",
      description:
        "Tender pork cubes slow-cooked in a dark, nutty sauce made from freshly roasted and ground black sesame seeds (Neiiong), green chilies, and garlic, imparting a deep umami flavor unique to Meghalaya.",
      origin: "East Khasi Hills & Cherrapunji",
      image: "/images/meghalaya/dohneiiong_pork.jpg",
      dietary: "non-veg",
    },
    {
      name: "Tungrymbai (Fermented Soybean Mash)",
      hindiName: "तुंगरिम्बाई",
      tag: "Hearty Probiotic Paste of the Hills",
      description:
        "Nutrient-dense fermented soybeans mashed and sautéed in mustard oil with black sesame paste, ginger, garlic, and shredded pork or dried fish, delivering an earthy, pungent, deeply satisfying mountain flavor.",
      origin: "Everyday Khasi & Jaintia Homes",
      image: "/images/meghalaya/tungrymbai.jpg",
      dietary: "veg",
    },
    {
      name: "Nakham Bitchi (Smoked Fish Soup)",
      hindiName: "नाखम बिच्ची",
      tag: "Garo Fiery Digestive Broth",
      description:
        "A steaming hot, fiery soup prepared by boiling sun-dried and wood-smoked fish (Nakham) with abundant fresh green chilies, ginger, and local alkaline soda, served as an appetizing prelude to Garo meals.",
      origin: "Garo Hills Communities",
      image: "/images/meghalaya/nakham_bitchi.jpg",
      dietary: "non-veg",
    },
    {
      name: "Pumaloi (Steamed Rice Cake)",
      hindiName: "पुमलोई",
      tag: "Delicate Steamed Tea-Time Bread",
      description:
        "Soft powdered red rice steamed inside a unique earthen pot called a 'Khiew Ranei' over boiling water, resulting in fluffy, moist rice cakes enjoyed with hot tea or savory gravies during breakfast.",
      origin: "Rural Khasi Kitchens",
      image: "/images/meghalaya/pumaloi.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Wangala Hundred Drums Festival",
      type: "festival",
      description:
        "The grand post-harvest thanksgiving festival of the Garo tribe celebrating the Sun God of Fertility (Saljong) in Asanang near Tura, where 100 male drummers in feathered headgear play long oval Dama drums in synchronized thunder while women dance in colorful rows.",
      significance:
        "Celebration of agricultural abundance, tribal unity, and gratitude to nature for the autumn harvest.",
      image: "/images/meghalaya/wangala_drums.jpg",
    },
    {
      name: "Shad Suk Mynsiem (Dance of Joyful Hearts)",
      type: "dance",
      description:
        "The annual spring thanksgiving dance of the Khasi people held at Weiking Ground in Shillong, where unmarried maidens in gold crowns (Pansngiat) dance in dignified graceful circular patterns surrounded by male warriors with silver quivers and swords.",
      significance:
        "Celebration of female purity, male protection, and divine gratitude to God for life and health.",
      image: "/images/meghalaya/shad_suk_mynsiem.jpg",
    },
    {
      name: "Living Root Bridge Bio-Engineering",
      type: "art",
      description:
        "An ancient indigenous practice of guiding the aerial roots of the Ficus elastica tree across rivers using bamboo scaffolds and hollowed betel-nut trunks, allowing root systems to entwine and strengthen over generations into living suspension structures.",
      significance:
        "World Heritage bio-engineering tradition embodying human partnership with the living biosphere.",
      image: "/images/meghalaya/living_root_craft.jpg",
    },
  ],
  attires: [
    {
      name: "Khasi Jainsem & Tapmohkhlieh",
      gender: "women",
      fabric: "Mulberry Silk or Fine Muga Fabric",
      description:
        "The graceful traditional dress of Khasi women consisting of two matching lengths of silk fabric (Jainsem) tied loosely around each shoulder and falling to the ankles, worn over an inner blouse and paired with a warm woolen shawl or headscarf (Tapmohkhlieh).",
      occasions: "Church services, weddings, Shad Suk Mynsiem, and official gatherings.",
      image: "/images/meghalaya/jainsem_dress.jpg",
    },
    {
      name: "Garo Dakmanda & Kotip",
      gender: "women",
      fabric: "Handwoven Cotton with Diamond (Muphul) Motifs",
      description:
        "Traditional wraparound skirt worn by Garo women, woven on backstrap looms with intricate diamond-shaped and geometric floral motifs (Muphul) along the lower border, paired with a matching head turban (Kotip).",
      occasions: "Wangala festival, community dancing, and festive village assemblies.",
      image: "/images/meghalaya/dakmanda_garo.jpg",
    },
    {
      name: "Jaintia Dhara & Jainkup",
      gender: "women",
      fabric: "Heavy Raw Mulberry Silk (Ryndia)",
      description:
        "The ceremonial dress of Pnar (Jaintia) women made from heavy pure silk (Dhara) worn draped around the shoulders with gold ornamental pins, accessorized with the Kynjri Ksiar cylindrical pure gold bead necklaces.",
      occasions: "Behdienkhlam festival and traditional wedding ceremonies.",
      image: "/images/meghalaya/dhara_silk.jpg",
    },
  ],
  monuments: [
    {
      name: "Nongriat Double Decker Living Root Bridge",
      location: "Nongriat Village, Sohra",
      era: "Over 250 Years of Continuous Growth",
      unesco: false,
      description:
        "Two-tiered living suspension bridge spanning 20 meters across the Umshiang River, engineered by generations of Khasi villagers whose living root anchors grow stronger with every passing monsoon flood.",
      image: "/images/meghalaya/double_decker_bridge.jpg",
      significance: "World-renowned triumph of indigenous environmental bio-engineering.",
    },
    {
      name: "Nohkalikai Falls Canyon",
      location: "Cherrapunji (Sohra)",
      era: "Natural Geological Landmark",
      unesco: false,
      description:
        "Dramatic mountain gorge where rainwater collected across the Sohra tableland plunges 1,115 feet into a jade-colored natural pool, framed by mist-wreathed cliffs.",
      image: "/images/meghalaya/nohkalikai_falls.jpg",
      significance: "Tallest plunge waterfall in India and premier scenic icon of Meghalaya.",
    },
    {
      name: "Umiam Lake Waters",
      location: "Ri-Bhoi District",
      era: "Constructed 1965 CE",
      unesco: false,
      description:
        "A vast sparkling blue reservoir nestled amidst rolling pine-clad hills, serving as an idyllic scenic retreat and water sports hub on the Guwahati-Shillong corridor.",
      image: "/images/meghalaya/umiam_lake.jpg",
      significance: "Premier freshwater scenic reservoir and recreation haven of Meghalaya.",
    },
    {
      name: "Mawlynnong Village Sanctuary",
      location: "East Khasi Hills",
      era: "Indigenous Heritage Settlement",
      unesco: false,
      description:
        "Immaculate eco-village featuring tree houses (Sky Walk) overlooking the plains of Bangladesh, lush flowering stone gardens, and community recycling systems.",
      image: "/images/meghalaya/mawlynnong_village.jpg",
      significance: "International symbol of rural community cleanliness and ecological living.",
    },
  ],
  languages: [
    {
      name: "Khasi (Ka Ktien Khasi)",
      script: "Latin Script (Historically Bengali Script)",
      speakers: "1.4+ Million",
      greeting: "Kumno (कम्नो)",
      meaning: "How are you? Warm greetings",
      description:
        "Austroasiatic language belonging to the Mon-Khmer branch, spoken across the Khasi and Jaintia hills, carrying rich oral poetry (Phawar) and folk fables.",
    },
    {
      name: "Garo (A·chik Ku·sik)",
      script: "Latin Script",
      speakers: "1+ Million",
      greeting: "Namgimin / Isor Na·simangko Mittam (ईश्वर आपका भला करे)",
      meaning: "May God bless you with peace and well-being",
      description:
        "Tibeto-Burman language of the Garo community spoken in western Meghalaya, possessing an extensive vocabulary of botanical and wildlife knowledge.",
    },
    {
      name: "English (Official Language)",
      script: "Latin Script",
      speakers: "Statewide Official & Youth Lingua Franca",
      greeting: "Hello / Good Morning",
      meaning: "Universal friendly greeting",
      description:
        "The official state language of governance, higher education, rock music, and administration.",
    },
  ],
  luminaries: [
    {
      name: "U Tirot Sing Syiem",
      image: "/images/luminaries/u_tirot_sing_syiem.jpg",
      era: "1802 – 1835 CE",
      title: "Heroic Freedom King of the Khasi Hills",
      contribution:
        "Syiem (King) of Nongkhlaw who led the historic Anglo-Khasi War (1829–1833) against the British East India Company using guerrilla mountain warfare, declaring famously 'Better to die as a free man than live as a puppet king.'",
    },
    {
      name: "Pa Togan Nengminza Sangma",
      image: "/images/luminaries/aryabhata.jpg",
      era: "1830 – 1872 CE",
      title: "Legendary Garo Warrior & Martyr",
      contribution:
        "Fearless warrior from the Garo Hills who led Garo resistance against British forces armed only with traditional shields (Mil·am) and swords in 1872 to protect tribal freedom.",
    },
    {
      name: "Lou Majaw",
      image: "/images/luminaries/lou_majaw.jpg",
      era: "1947 – Present",
      title: "Bob Dylan of India & Rock Pioneer",
      contribution:
        "Iconic rock musician and songwriter from Shillong who organized annual Bob Dylan birthday concerts since 1972 and helped cement Shillong's reputation as the Rock Music Capital of India.",
    },
  ],
}
