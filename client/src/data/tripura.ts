import type { StateData } from "../types/state"

export const tripuraData: StateData = {
  id: "tripura",
  name: "Tripura",
  hindiName: "त्रिपुरा",
  capital: "Agartala",
  tagline: "The Realm of Royal Palaces, Rock-Cut Unakoti & Sacred Fourteen Gods",
  overview:
    "Surrounded on three sides by Bangladesh, Tripura is an ancient princely kingdom ruled continuously by the Manikya dynasty for over five centuries. Renowned for the classical white marble Ujjayanta Palace, the water palace of Neermahal floating in Rudrasagar Lake, the colossal 8th-century bas-relief rock carvings of Shiva at Unakoti, the balancing Hojagiri dance on brass pitchers, and the sacred Kharchi Puja worshipping fourteen deities, Tripura is a magnificent cultural jewel.",
  ancientNames: ["Kirat Desh", "Twipra", "Tripura Kingdom", "Hill Tippera"],
  keyStats: [
    { label: "Districts", value: "8" },
    { label: "Capital", value: "Agartala" },
    { label: "Water Palace", value: "Neermahal (Only Water Palace in Eastern India)" },
    { label: "Rock Art Wonder", value: "Unakoti (Bas-Relief Rock Carvings of Shiva)" },
    { label: "Royal Dynasty", value: "Manikya Dynasty (Over 180 Historic Kings)" },
    { label: "Folk Marvel", value: "Hojagiri Dance (Balancing on Brass Pitchers)" },
  ],
  quote: {
    text: "Unakoti — One less than a crore, where stone whispers the timeless legends of Lord Shiva amidst the dense bamboo forests of Tripura.",
    author: "Ancient Lore of Twipra",
  },
  districts: {
    "West Tripura": {
      name: "West Tripura",
      tagline: "Royal Capital of Agartala & Ujjayanta Palace",
      headquarters: "Agartala",
      knownFor: "Ujjayanta Palace, Chaturdasha Devata Temple (Fourteen Gods), Heritage Park, Akhaura Integrated Check Post.",
      famousSpot: "Ujjayanta Palace & Fourteen Gods Temple",
    },
    "Sepahijala": {
      name: "Sepahijala",
      tagline: "Water Palace of Neermahal & Clouded Leopards",
      headquarters: "Bishramganj",
      knownFor: "Neermahal Palace in Rudrasagar Lake, Sepahijala Wildlife Sanctuary (Clouded Leopard breeding center), rubber plantations.",
      famousSpot: "Neermahal Water Palace & Sepahijala Zoo",
    },
    "Gomati": {
      name: "Gomati",
      tagline: "Holy Seat of Mata Tripura Sundari Shakti Peetha",
      headquarters: "Udaipur",
      knownFor: "Tripura Sundari Temple (Matabari, 51 Shakti Peethas), Kalyan Sagar lake, Bhuvaneswari Temple, Tepania Eco Park.",
      famousSpot: "Tripura Sundari Temple (Matabari)",
    },
    "Unakoti": {
      name: "Unakoti",
      tagline: "Sublime Rock-Cut Colossi of Lord Shiva",
      headquarters: "Kailashahar",
      knownFor: "Unakoti rock carvings (30-foot head of Shiva / Unakotiswara Kal Bhairava), tea estates, historic Kailashahar royal heritage.",
      famousSpot: "Unakoti Rock-Cut Reliefs",
    },
    "North Tripura": {
      name: "North Tripura",
      tagline: "Jampui Hills & Orange Blossom Valleys",
      headquarters: "Dharmanagar",
      knownFor: "Jampui Hills (highest mountain range in Tripura with panoramic sunrise views), orange orchards, Rowa Wildlife Sanctuary.",
      famousSpot: "Jampui Hills & Betlingchhip Peak",
    },
    "Dhalai": {
      name: "Dhalai",
      tagline: "Verdant Forest Heartland & Dumbur Lake Islands",
      headquarters: "Ambassa",
      knownFor: "Dumbur Lake with 48 green islands, Tirthamukh pilgrimage site, Kamalpur border, indigenous Reang villages.",
      famousSpot: "Dumbur Lake & Tirthamukh",
    },
    "South Tripura": {
      name: "South Tripura",
      tagline: "Ancient Buddhist Stupas of Pilak",
      headquarters: "Belonia",
      knownFor: "Pilak 8th-century Buddhist and Hindu archaeological site, Trishna Wildlife Sanctuary (Bison haven), Maitri Setu.",
      famousSpot: "Pilak Archaeological Site & Trishna Sanctuary",
    },
    "Khowai": {
      name: "Khowai",
      tagline: "Rolling Green Hills & Tribal Craft Centers",
      headquarters: "Khowai",
      knownFor: "Khowai river, tea gardens, indigenous Tripuri weaving and bamboo craft centers, Baramura eco-park.",
      famousSpot: "Baramura Eco Park & Tea Estates",
    },
  },
  landmarks: [
    {
      id: "ujjayanta-palace",
      name: "Ujjayanta Royal Palace",
      district: "West Tripura (Agartala)",
      lat: 23.8344,
      lon: 91.2828,
      category: "monument",
      description: "Magnificent neoclassical white palace built between 1899 and 1901 by Maharaja Radha Kishore Manikya, featuring soaring domes, Mughal-style reflecting pools with fountains, and tiled floors, now housing the State Museum.",
      image: "/images/landmarks/tripura/ujjayanta-palace_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of West Tripura (Agartala)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Ujjayanta Royal Palace in West Tripura (Agartala).",
      gallery: [
        {
                url: "/images/landmarks/tripura/ujjayanta-palace_angle1.jpg",
                angle: "Front Elevation",
                caption: "Ujjayanta Royal Palace — Front elevation and iconic monumental facade in West Tripura (Agartala)."
        },
        {
                url: "/images/landmarks/tripura/ujjayanta-palace_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Ujjayanta Royal Palace — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tripura/ujjayanta-palace_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Ujjayanta Royal Palace — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tripura/ujjayanta-palace_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Ujjayanta Royal Palace — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "neermahal-palace",
      name: "Neermahal (Twijilikma Water Palace)",
      district: "Sepahijala",
      lat: 23.5042,
      lon: 91.3197,
      category: "monument",
      description: "One of only two water palaces in India, built in 1930 by Maharaja Bir Bikram Kishore Manikya in the center of the vast Rudrasagar Lake, fusing Hindu and Islamic architectural styles with domed balconies and floodlit night reflections.",
      image: "/images/landmarks/tripura/neermahal-palace_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Sepahijala",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Neermahal (Twijilikma Water Palace) in Sepahijala.",
      gallery: [
        {
                url: "/images/landmarks/tripura/neermahal-palace_angle1.jpg",
                angle: "Front Elevation",
                caption: "Neermahal (Twijilikma Water Palace) — Front elevation and iconic monumental facade in Sepahijala."
        },
        {
                url: "/images/landmarks/tripura/neermahal-palace_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Neermahal (Twijilikma Water Palace) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tripura/neermahal-palace_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Neermahal (Twijilikma Water Palace) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tripura/neermahal-palace_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Neermahal (Twijilikma Water Palace) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "unakoti-carvings",
      name: "Unakoti Rock-Cut Relief Sculptures",
      district: "Unakoti",
      lat: 24.3167,
      lon: 92.0167,
      category: "spiritual",
      description: "Ancient 8th–9th century Saivite pilgrimage site hidden in a forested ravine, featuring massive rock-cut bas-reliefs carved directly into the cliff-face, centered around the 30-foot-tall head of Shiva (Unakotiswara Kal Bhairava) with an ornate 10-foot headdress.",
      image: "/images/landmarks/tripura/unakoti-carvings_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Unakoti",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Unakoti Rock-Cut Relief Sculptures in Unakoti.",
      gallery: [
        {
                url: "/images/landmarks/tripura/unakoti-carvings_angle1.jpg",
                angle: "Front Elevation",
                caption: "Unakoti Rock-Cut Relief Sculptures — Front elevation and iconic monumental facade in Unakoti."
        },
        {
                url: "/images/landmarks/tripura/unakoti-carvings_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Unakoti Rock-Cut Relief Sculptures — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tripura/unakoti-carvings_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Unakoti Rock-Cut Relief Sculptures — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tripura/unakoti-carvings_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Unakoti Rock-Cut Relief Sculptures — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "tripura-sundari-temple",
      name: "Maa Tripura Sundari Temple (Matabari)",
      district: "Gomati (Udaipur)",
      lat: 23.5119,
      lon: 91.4981,
      category: "spiritual",
      description: "One of the 51 sacred Shakti Peethas built in 1501 CE by Maharaja Dhanya Manikya, shaped in a tortoise-shell (Kurmapitha) style along the tortoise-filled Kalyan Sagar lake, dedicated to Goddess Kali as Soroshi.",
      image: "/images/landmarks/tripura/tripura-sundari-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Gomati (Udaipur)",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Maa Tripura Sundari Temple (Matabari) in Gomati (Udaipur).",
      gallery: [
        {
                url: "/images/landmarks/tripura/tripura-sundari-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Maa Tripura Sundari Temple (Matabari) — Front elevation and iconic monumental facade in Gomati (Udaipur)."
        },
        {
                url: "/images/landmarks/tripura/tripura-sundari-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Maa Tripura Sundari Temple (Matabari) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tripura/tripura-sundari-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Maa Tripura Sundari Temple (Matabari) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tripura/tripura-sundari-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Maa Tripura Sundari Temple (Matabari) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "pilak-archaeology",
      name: "Pilak Buddhist & Hindu Ruins",
      district: "South Tripura",
      lat: 23.1678,
      lon: 91.4167,
      category: "monument",
      description: "Historical archaeological site dating back to the 8th to 12th centuries, showcasing terracotta plaques, colossal stone statues of Avalokiteshvara and Surya, and remains of brick stupas reflecting the syncretic Buddhist-Hindu culture of the Samatata kingdom.",
      image: "/images/tripura/pilak-archaeology.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of South Tripura",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Pilak Buddhist & Hindu Ruins in South Tripura.",
      gallery: [
        {
                url: "/images/tripura/pilak-archaeology.jpg",
                angle: "Front Elevation",
                caption: "Pilak Buddhist & Hindu Ruins — Front elevation and iconic monumental facade in South Tripura."
        },
        {
                url: "/images/tripura/pilak-archaeology.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Pilak Buddhist & Hindu Ruins — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/tripura/pilak-archaeology.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Pilak Buddhist & Hindu Ruins — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/tripura/pilak-archaeology.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Pilak Buddhist & Hindu Ruins — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "dumbur-lake",
      name: "Dumbur Lake & Tirthamukh",
      district: "Dhalai / Gomati",
      lat: 23.4736,
      lon: 91.8028,
      category: "nature",
      description: "Picturesque 41-square-kilometer freshwater lake shaped like the sacred drum (Damru) of Lord Shiva, studded with 48 undulating green islands and serving as the confluence source of the sacred Gomati River.",
      image: "/images/tripura/dumbur-lake.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Dhalai / Gomati",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Dumbur Lake & Tirthamukh in Dhalai / Gomati.",
      gallery: [
        {
                url: "/images/tripura/dumbur-lake.jpg",
                angle: "Front Elevation",
                caption: "Dumbur Lake & Tirthamukh — Front elevation and iconic monumental facade in Dhalai / Gomati."
        },
        {
                url: "/images/tripura/dumbur-lake.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Dumbur Lake & Tirthamukh — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/tripura/dumbur-lake.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Dumbur Lake & Tirthamukh — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/tripura/dumbur-lake.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Dumbur Lake & Tirthamukh — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Mui Borok with Berma",
      hindiName: "मुई बोरोक",
      tag: "The Authentic Fermented Fish Soul of Tripura",
      description:
        "Traditional indigenous dish cooked without oil, centering on the umami-rich pungent fermented fish (Berma) simmered with fresh mountain vegetables, seasonal herbs, and hot green chilies.",
      origin: "Indigenous Tripuri Households",
      image: "/images/tripura/mui_borok.jpg",
      dietary: "non-veg",
    },
    {
      name: "Tripuri Chakhwi (Bamboo Shoot Stew)",
      hindiName: "चाखवी",
      tag: "Alkaline Delicacy of Wild Greens",
      description:
        "A healthy, traditional alkaline stew prepared using filtered wood ash water (Khar), cooked with tender young bamboo shoots, jackfruit seeds, green papaya, and aromatic herbs.",
      origin: "Rural Villages of Twipra",
      image: "/images/tripura/chakhwi.jpg",
      dietary: "veg",
    },
    {
      name: "Mosdeng Serma (Tomato Chili Relish)",
      hindiName: "मोसदेंग सेरमा",
      tag: "Fiery Fire-Roasted Chutney",
      description:
        "Fiery chutney made by roasting fresh tomatoes over open flames, mashed by hand with grilled fermented fish, charred red chilies, garlic cloves, and freshly chopped coriander.",
      origin: "Everyday Table Accompaniment",
      image: "/images/tripura/mosdeng_serma.jpg",
      dietary: "non-veg",
    },
    {
      name: "Bangui Rice (Aromatic Sticky Rice)",
      hindiName: "बांगुई चावल",
      tag: "Fragrant Steamed Rice in Lairu Leaves",
      description:
        "Indigenous sun-dried sticky rice blended with ginger, onions, and cashews, packed neatly into cone-shaped wild Lairu leaves and boiled gently until the leaves impart a subtle grassy herbal fragrance to the rice.",
      origin: "Festive Banquets & Harvest Feasts",
      image: "/images/tripura/bangui_rice.jpg",
      dietary: "veg",
    },
    {
      name: "Tripuri Panch Phoron Curry",
      hindiName: "पंच फोड़न करी",
      tag: "Aromatic Five-Spice Fish Curry",
      description:
        "Fresh freshwater fish cooked in a golden turmeric gravy tempered with the royal five-spice blend (mustard, cumin, fenugreek, aniseed, and nigella seeds), emitting a rich comforting aroma.",
      origin: "Syncretic Indo-Tripuri Cuisine",
      image: "/images/tripura/panch_phoron_curry.jpg",
      dietary: "non-veg",
    },
  ],
  traditions: [
    {
      name: "Hojagiri Reang Folk Dance",
      type: "dance",
      description:
        "Breathtaking acrobatic folk dance of the Reang (Bru) community performed by young women, who balance precariously on the rim of a brass water pitcher with a burning oil lamp on their head while undulating their torso and hips gracefully to indigenous flute melodies.",
      significance:
        "Celebration of agricultural abundance, exquisite physical balance, and devotion to Goddess Lakshmi (Mailuma).",
      image: "/images/tripura/hojagiri_dance.jpg",
    },
    {
      name: "Kharchi Puja of the Fourteen Gods",
      type: "festival",
      description:
        "Centuries-old royal festival held in July at Puran Agartala, where the sacred deities of the Fourteen Gods (Chaturdasha Devata) are carried in a grand royal procession to the holy Howrah River for ceremonial bathing before week-long community worship.",
      significance:
        "Sacred ritual purification of the Earth after the menstrual cycle of Mother Earth during Ambubachi.",
      image: "/images/tripura/kharchi_puja.jpg",
    },
    {
      name: "Bamboo & Cane Mastercraft",
      type: "art",
      description:
        "World-renowned handcrafting of delicate screens, floor mats, bamboo furniture, and intricate fishing baskets by indigenous artisans using diverse species of mature local bamboo treated with smoke and natural herbal preservatives.",
      significance:
        "Timeless sustainable craft forming the economic backbone and aesthetic heritage of rural Tripura.",
      image: "/images/tripura/cane_bamboo_craft.jpg",
    },
  ],
  attires: [
    {
      name: "Rignai & Risa (Traditional Handwoven Attire)",
      gender: "women",
      fabric: "Handwoven Cotton or Endi Silk on Backstrap Looms",
      description:
        "The striking traditional two-piece attire of indigenous Tripuri women consisting of the wraparound lower skirt (Rignai) woven in complex geometric patterns, and the ornate chest wrap (Risa) adorned with delicate needlecraft motifs.",
      occasions: "Kharchi Puja, Hojagiri performances, weddings, and state ceremonies.",
      image: "/images/tripura/risa_rignai.jpg",
    },
    {
      name: "Tripuri Handwoven Silk Saree",
      gender: "women",
      fabric: "Pure Mulberry & Muga Silk with Traditional Tribal Borders",
      description:
        "Heritage handloom silk sarees woven in Agartala combining Bengali drape aesthetics with ancient Tripuri tribal warp motifs, prized for their luxurious luster and durability.",
      occasions: "Royal palace functions, formal receptions, and weddings.",
      image: "/images/tripura/handwoven_silk.jpg",
    },
    {
      name: "Dhoti, Kurta & Kamchwlwi Borok",
      gender: "men",
      fabric: "White Handloom Cotton Fabric",
      description:
        "Traditional attire of Tripuri men consisting of an unstitched cotton dhoti worn with a kurta and an ornate handwoven shoulder scarf (Kamchwlwi Borok) or a traditional pagri turban.",
      occasions: "Royal ceremonies, village councils, and festive assemblies.",
      image: "/images/tripura/tripuri_dhoti.jpg",
    },
  ],
  monuments: [
    {
      name: "Ujjayanta Palace",
      location: "Agartala City Center",
      era: "1901 CE (Maharaja Radha Kishore Manikya)",
      unesco: false,
      description:
        "Magnificent palace set within 800 acres of sprawling gardens and lakes, featuring neoclassical tiled halls, high central domes, and housing the largest museum in Northeast India.",
      image: "/images/tripura/ujjayanta_palace.jpg",
      significance: "Grandest royal residence and cultural monument of the Manikya Kingdom.",
    },
    {
      name: "Neermahal (Water Palace)",
      location: "Melaghar, Sepahijala",
      era: "1930 CE (Maharaja Bir Bikram Kishore Manikya)",
      unesco: false,
      description:
        "Picturesque red and white marble palace floating in the middle of Rudrasagar Lake, featuring open-air pavilions, floodlit towers, and motorboat arrival gates.",
      image: "/images/tripura/neermahal_palace.jpg",
      significance: "Only floating water palace in Eastern India and engineering triumph.",
    },
    {
      name: "Unakoti Rock Sculptures",
      location: "Unakoti District",
      era: "8th – 9th Century CE",
      unesco: false,
      description:
        "A monumental stone carving complex in a forested mountain valley with thirty-foot stone faces of Lord Shiva, Ganesha, and Ganga carved into perpendicular rocky hillsides.",
      image: "/images/tripura/unakoti_carvings.jpg",
      significance: "Peak artistic and religious rock-cut monument in Eastern India.",
    },
    {
      name: "Tripura Sundari Temple",
      location: "Udaipur, Gomati",
      era: "1501 CE (Maharaja Dhanya Manikya)",
      unesco: false,
      description:
        "Ancient tortoise-shaped brick temple perched on a hillock overlooking Kalyan Sagar Lake, where large tortoises are venerated alongside the black stone idol of Soroshi.",
      image: "/images/tripura/tripura_sundari_temple.jpg",
      significance: "Foremost Shakti Peetha and spiritual landmark of Tripura.",
    },
  ],
  languages: [
    {
      name: "Bengali (বাংলা)",
      script: "Bengali Script",
      speakers: "65% of Population",
      greeting: "Nomoshkar (নমস্কার)",
      meaning: "Respectful greetings to you",
      description:
        "Widely spoken official state language carrying the illustrious literary heritage of Nobel laureate Rabindranath Tagore, who shared a deep creative bond with the royal family of Tripura.",
    },
    {
      name: "Kokborok (कॉकबोरोक / ᱠᱚᱠᱵᱚᱨᱚᱠ)",
      script: "Latin & Bengali Scripts",
      speakers: "30% of Population (Indigenous Tripuris)",
      greeting: "Khulumkha (खुलुमखा)",
      meaning: "I bow to you with folded hands",
      description:
        "The ancient Tibeto-Burman mother tongue of the indigenous Borok people of Tripura, carrying centuries of oral folk epics, songs, and royal chronicles.",
    },
  ],
  luminaries: [
    {
      name: "Maharaja Bir Bikram Kishore Manikya",
      image: "/images/luminaries/maharaja_bir_bikram_kishore_manikya.jpg",
      era: "1908 – 1947 CE",
      title: "Modern Architect of Tripura & Visionary King",
      contribution:
        "Progressive monarch who built modern Agartala, commissioned the iconic Neermahal palace, established the state's first airport, planned colleges, and facilitated Tripura's smooth accession to the Indian Union.",
    },
    {
      name: "Sachin Dev Burman (S.D. Burman)",
      image: "/images/luminaries/sachin_dev_burman_s_d_burman.jpg",
      era: "1906 – 1975 CE",
      title: "Musical Maestro of Indian Cinema & Royal Prince",
      contribution:
        "Royal prince of the Tripura Manikya dynasty who revolutionized Indian cinema music, blending rich Bengali-Folk and Tripuri riverine folk tunes with classical ragas in hundreds of immortal film compositions.",
    },
    {
      name: "Dipa Karmakar",
      image: "/images/luminaries/dipa_karmakar.jpg",
      era: "1993 – Present",
      title: "First Indian Female Olympic Gymnast",
      contribution:
        "Trailblazing gymnast from Agartala who successfully performed the death-defying Produnova vault at the 2016 Rio Olympics, finishing fourth in the world and proving that world-class excellence can emerge from any corner of India.",
    },
  ],
}
