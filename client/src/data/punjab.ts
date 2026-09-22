import type { StateData } from "../types/state"

export const punjabData: StateData = {
  id: "punjab",
  name: "Punjab",
  hindiName: "पंजाब",
  capital: "Chandigarh (Shared Capital)",
  tagline: "Land of Five Rivers, Golden Shrines & Immortal Valor",
  overview:
    "Derived from the Persian words 'Panj' (five) and 'Aab' (water), Punjab is the fertile cradle of the Vedic hymns and the birthplace of Sikhism. Blessed by the sacred five rivers of the Indus basin, Punjab is the grain bowl of India, home to Sri Harmandir Sahib (The Golden Temple), the spirit of selfless service (Langar), high-spirited Bhangra rhythms, and legendary courage on the battlefield.",
  ancientNames: ["Panchanada", "Sapta Sindhu", "Trigarta", "Sikh Empire"],
  keyStats: [
    { label: "Districts", value: "23" },
    { label: "Capital", value: "Chandigarh" },
    { label: "Lifeline Rivers", value: "Sutlej, Beas, Ravi, Chenab, Jhelum" },
    { label: "Spiritual Crown", value: "Sri Harmandir Sahib (Golden Temple)" },
    { label: "Agrarian Pride", value: "Granary of India (Green Revolution)" },
    { label: "Tradition of Service", value: "24/7 Universal Free Langar" },
  ],
  quote: {
    text: "Bole So Nihal, Sat Sri Akal — Blessed is the soul who realizes the Timeless Supreme Truth.",
    author: "Universal Sikh Victory Clarion & Blessing",
  },
  districts: {
    "Amritsar": {
      name: "Amritsar",
      tagline: "The Pool of Nectar & Spiritual Seat of Sikhism",
      headquarters: "Amritsar",
      knownFor: "Sri Harmandir Sahib (Golden Temple), Jallianwala Bagh, Wagah Border retreat ceremony, Amritsari Kulcha.",
      famousSpot: "Sri Harmandir Sahib & Wagah Border",
    },
    "Ludhiana": {
      name: "Ludhiana",
      tagline: "Manchester of India & Hosiery Capital",
      headquarters: "Ludhiana",
      knownFor: "Bicycle and hosiery manufacturing, Punjab Agricultural University (pioneer of Green Revolution), Lodhi Fort.",
      famousSpot: "Punjab Agricultural University & Museum",
    },
    "Jalandhar": {
      name: "Jalandhar",
      tagline: "Sports Goods Capital of India",
      headquarters: "Jalandhar",
      knownFor: "World-class cricket bats and hockey equipment manufacturing, Devi Talab Mandir, Wonderland theme park.",
      famousSpot: "Devi Talab Mandir & Sports Market",
    },
    "Patiala": {
      name: "Patiala",
      tagline: "Royal Citadel of Qila Mubarak & Phulkari",
      headquarters: "Patiala",
      knownFor: "Qila Mubarak complex, Sheesh Mahal, Patiala Shahi Pagri, Patiala Salwar, Netaji Subhas National Institute of Sports.",
      famousSpot: "Qila Mubarak & Sheesh Mahal",
    },
    "Bathinda": {
      name: "Bathinda",
      tagline: "Citadel of Razia Sultan & Thermal Lakes",
      headquarters: "Bathinda",
      knownFor: "Qila Mubarak (ancient brick fort where Razia Sultana was imprisoned), thermal lakes, Takht Sri Damdama Sahib.",
      famousSpot: "Qila Mubarak Bathinda & Takht Damdama Sahib",
    },
    "Gurdaspur": {
      name: "Gurdaspur",
      tagline: "Crown of Dera Baba Nanak & Ravi Basin",
      headquarters: "Gurdaspur",
      knownFor: "Dera Baba Nanak (Kartarpur Corridor gateway), Gurdas Nangal historic battlefield, fish sanctuaries.",
      famousSpot: "Dera Baba Nanak Gurdwara",
    },
    "Pathankot": {
      name: "Pathankot",
      tagline: "Gateway to Jammu & Kashmir and Himachal",
      headquarters: "Pathankot",
      knownFor: "Nurpur Fort, Mukteshwar Mahadev Cave Temple (carved by Pandavas), Ranjit Sagar Dam on the Ravi River.",
      famousSpot: "Mukteshwar Caves & Ranjit Sagar Dam",
    },
    "Hoshiarpur": {
      name: "Hoshiarpur",
      tagline: "Land of Saints, Bhrigu Astrology & Wooden Inlay",
      headquarters: "Hoshiarpur",
      knownFor: "Ancient Bhrigu Samhita astrological records, Sheesham wooden furniture with brass and plastic inlay.",
      famousSpot: "Kamahi Devi Temple & Takhni-Rehmapur Sanctuary",
    },
    "Kapurthala": {
      name: "Kapurthala",
      tagline: "Paris of Punjab & French Architecture",
      headquarters: "Kapurthala",
      knownFor: "Jagatjit Palace (styled on Palace of Versailles), Moorish Mosque, Rail Coach Factory (RCF).",
      famousSpot: "Jagatjit Palace & Moorish Mosque",
    },
    "Fatehgarh Sahib": {
      name: "Fatehgarh Sahib",
      tagline: "Sacred Soil of the Chhote Sahibzade",
      headquarters: "Fatehgarh Sahib",
      knownFor: "Gurdwara Fatehgarh Sahib (site of martyrdom of Sahibzada Zorawar Singh and Fateh Singh), Aam Khas Bagh.",
      famousSpot: "Gurdwara Fatehgarh Sahib",
    },
    "Rupnagar": {
      name: "Rupnagar",
      tagline: "Indus Valley Soil & Bhakra Headworks",
      headquarters: "Rupnagar (Ropar)",
      knownFor: "Harappan archaeological excavation site, Ropar Wetland (Ramsar site), Gurdwara Bhatha Sahib.",
      famousSpot: "Ropar Wetland & Harappan Museum",
    },
    "S.A.S. Nagar": {
      name: "S.A.S. Nagar",
      tagline: "Mohali — IT Capital & Cricket Stadium",
      headquarters: "Mohali",
      knownFor: "PCA International Cricket Stadium, IT city hub, Baba Banda Singh Bahadur War Memorial at Chappar Chiri.",
      famousSpot: "Chappar Chiri Fateh Burj & PCA Stadium",
    },
    "Tarn Taran": {
      name: "Tarn Taran",
      tagline: "Sacred Sarovar of Guru Arjan Dev Ji",
      headquarters: "Tarn Taran Sahib",
      knownFor: "Sri Tarn Taran Sahib (has the largest sacred water sarovar among all Gurdwaras), Harike Wetland.",
      famousSpot: "Sri Tarn Taran Sahib Gurdwara & Harike Pattan",
    },
    "Ferozepur": {
      name: "Ferozepur",
      tagline: "Land of Martyrs on the Sutlej Border",
      headquarters: "Ferozepur",
      knownFor: "National Martyrs Memorial at Hussainiwala (cremation site of Bhagat Singh, Rajguru, and Sukhdev), Indo-Pak border retreat.",
      famousSpot: "Hussainiwala National Martyrs Memorial",
    },
    "Faridkot": {
      name: "Faridkot",
      tagline: "Abode of Sufi Mystic Baba Farid",
      headquarters: "Faridkot",
      knownFor: "Qila Mubarak Faridkot, Raj Mahal, Tilla Baba Farid spiritual sanctuary, agricultural universities.",
      famousSpot: "Tilla Baba Farid & Qila Mubarak",
    },
    "Sri Muktsar Sahib": {
      name: "Sri Muktsar Sahib",
      tagline: "Land of the Forty Liberated Souls (Chali Mukte)",
      headquarters: "Sri Muktsar Sahib",
      knownFor: "Gurdwara Tutti Gandi Sahib, Maghi Mela commemoration of the 40 immortal martyrs who fought for Guru Gobind Singh Ji.",
      famousSpot: "Gurdwara Tutti Gandi Sahib",
    },
    "Fazilka": {
      name: "Fazilka",
      tagline: "City of Toliya & Sadiqia Canal",
      headquarters: "Fazilka",
      knownFor: "Asafwala War Memorial (1971 war heroes), TV tower (second tallest in India), Tosha sweet.",
      famousSpot: "Asafwala War Memorial",
    },
    "Moga": {
      name: "Moga",
      tagline: "Birthplace of Lala Lajpat Rai",
      headquarters: "Moga",
      knownFor: "Dhudike village (birthplace of Freedom Lion Lala Lajpat Rai), Nestlé factory, fertile wheat-paddy belt.",
      famousSpot: "Lala Lajpat Rai Memorial (Dhudike)",
    },
    "Barnala": {
      name: "Barnala",
      tagline: "Malwa Heartland & Baba Ala Singh Heritage",
      headquarters: "Barnala",
      knownFor: "Historic base of Patiala royal dynasty founder Baba Ala Singh, Trident textile manufacturing.",
      famousSpot: "Qila Barnala & Trident Complex",
    },
    "Sangrur": {
      name: "Sangrur",
      tagline: "Jind Princely Seat & Baneshwar Shrines",
      headquarters: "Sangrur",
      knownFor: "Banasar Garden, Diwan-e-Khas marble palace, Gurdwara Nankiana Sahib, grain markets.",
      famousSpot: "Banasar Garden & Marble Baradari",
    },
    "Mansa": {
      name: "Mansa",
      tagline: "Area of White Gold (Cotton)",
      headquarters: "Mansa",
      knownFor: "Vast cotton belt, Samadhi of Baba Bhai Gurdas, Sardulgarh Indus archaeological mound.",
      famousSpot: "Baba Bhai Gurdas Shrine",
    },
    "Shahid Bhagat Singh Nagar": {
      name: "Shahid Bhagat Singh Nagar",
      tagline: "Ancestral Soil of Shaheed Bhagat Singh",
      headquarters: "Nawanshahr",
      knownFor: "Khatkar Kalan (ancestral home and memorial museum of revolutionary Shaheed Bhagat Singh).",
      famousSpot: "Khatkar Kalan Bhagat Singh Museum",
    },
  },
  landmarks: [
    {
      id: "golden-temple",
      name: "Sri Harmandir Sahib (The Golden Temple)",
      district: "Amritsar",
      lat: 31.62,
      lon: 74.8765,
      category: "spiritual",
      description: "Holiest gurdwara of Sikhism covered in 500 kilograms of pure 24-carat gold leaf, surrounded by the sacred Amrit Sarovar lake, serving free meals to over 100,000 visitors daily regardless of faith.",
      image: "/images/landmarks/punjab/golden-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Amritsar",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Sri Harmandir Sahib (The Golden Temple) in Amritsar.",
      gallery: [
        {
                url: "/images/landmarks/punjab/golden-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Sri Harmandir Sahib (The Golden Temple) — Front elevation and iconic monumental facade in Amritsar."
        },
        {
                url: "/images/landmarks/punjab/golden-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Sri Harmandir Sahib (The Golden Temple) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/punjab/golden-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Sri Harmandir Sahib (The Golden Temple) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/punjab/golden-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Sri Harmandir Sahib (The Golden Temple) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "jallianwala-bagh",
      name: "Jallianwala Bagh National Memorial",
      district: "Amritsar",
      lat: 31.6206,
      lon: 74.8801,
      category: "monument",
      description: "Sacred national memorial garden preserving the bullet-marked walls and martyr's well where hundreds of peaceful freedom demonstrators were massacred under General Dyer on Baisakhi in 1919.",
      image: "/images/landmarks/punjab/jallianwala-bagh_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Amritsar",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Jallianwala Bagh National Memorial in Amritsar.",
      gallery: [
        {
                url: "/images/landmarks/punjab/jallianwala-bagh_angle1.jpg",
                angle: "Front Elevation",
                caption: "Jallianwala Bagh National Memorial — Front elevation and iconic monumental facade in Amritsar."
        },
        {
                url: "/images/landmarks/punjab/jallianwala-bagh_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Jallianwala Bagh National Memorial — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/punjab/jallianwala-bagh_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Jallianwala Bagh National Memorial — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/punjab/jallianwala-bagh_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Jallianwala Bagh National Memorial — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "wagah-border",
      name: "Attari-Wagah Border Flag Lowering Ceremony",
      district: "Amritsar",
      lat: 31.6047,
      lon: 74.5731,
      category: "monument",
      description: "World-famous daily sunset military ceremony featuring high-stepping drill maneuvers and thunderous patriotic cheers conducted by the Indian Border Security Force (BSF).",
      image: "/images/landmarks/punjab/wagah-border_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Amritsar",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Attari-Wagah Border Flag Lowering Ceremony in Amritsar.",
      gallery: [
        {
                url: "/images/landmarks/punjab/wagah-border_angle1.jpg",
                angle: "Front Elevation",
                caption: "Attari-Wagah Border Flag Lowering Ceremony — Front elevation and iconic monumental facade in Amritsar."
        },
        {
                url: "/images/landmarks/punjab/wagah-border_angle1.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Attari-Wagah Border Flag Lowering Ceremony — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/punjab/wagah-border_angle1.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Attari-Wagah Border Flag Lowering Ceremony — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/punjab/wagah-border_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Attari-Wagah Border Flag Lowering Ceremony — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "qila-mubarak-bathinda",
      name: "Qila Mubarak of Bathinda",
      district: "Bathinda",
      lat: 30.211,
      lon: 74.9455,
      category: "monument",
      description: "One of the oldest surviving forts in India built of burnt clay bricks in the Kushan era (90–110 CE), where India's first female empress Razia Sultana was incarcerated in 1240 CE.",
      image: "/images/landmarks/punjab/qila-mubarak-bathinda_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Bathinda",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Qila Mubarak of Bathinda in Bathinda.",
      gallery: [
        {
                url: "/images/landmarks/punjab/qila-mubarak-bathinda_angle1.jpg",
                angle: "Front Elevation",
                caption: "Qila Mubarak of Bathinda — Front elevation and iconic monumental facade in Bathinda."
        },
        {
                url: "/images/landmarks/punjab/qila-mubarak-bathinda_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Qila Mubarak of Bathinda — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/punjab/qila-mubarak-bathinda_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Qila Mubarak of Bathinda — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/punjab/qila-mubarak-bathinda_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Qila Mubarak of Bathinda — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "anandpur-sahib",
      name: "Takht Sri Kesgarh Sahib (Anandpur)",
      district: "Rupnagar",
      lat: 31.2354,
      lon: 76.4984,
      category: "spiritual",
      description: "The birthplace of the Khalsa Panth established by Guru Gobind Singh Ji on Baisakhi in 1699, host to the electrifying martial arts festival of Hola Mohalla.",
      image: "/images/landmarks/punjab/anandpur-sahib_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Rupnagar",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Takht Sri Kesgarh Sahib (Anandpur) in Rupnagar.",
      gallery: [
        {
                url: "/images/landmarks/punjab/anandpur-sahib_angle1.jpg",
                angle: "Front Elevation",
                caption: "Takht Sri Kesgarh Sahib (Anandpur) — Front elevation and iconic monumental facade in Rupnagar."
        },
        {
                url: "/images/landmarks/punjab/anandpur-sahib_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Takht Sri Kesgarh Sahib (Anandpur) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/punjab/anandpur-sahib_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Takht Sri Kesgarh Sahib (Anandpur) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/punjab/anandpur-sahib_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Takht Sri Kesgarh Sahib (Anandpur) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "harike-wetland",
      name: "Harike Bird Sanctuary & Wetland",
      district: "Tarn Taran",
      lat: 31.155,
      lon: 74.96,
      category: "nature",
      description: "Largest freshwater wetland in northern India at the confluence of the Beas and Sutlej rivers, winter haven for over 200,000 migratory waterfowl from Siberia and Central Asia.",
      image: "/images/punjab/harike-wetland.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Tarn Taran",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Harike Bird Sanctuary & Wetland in Tarn Taran.",
      gallery: [
        {
                url: "/images/punjab/harike-wetland.jpg",
                angle: "Front Elevation",
                caption: "Harike Bird Sanctuary & Wetland — Front elevation and iconic monumental facade in Tarn Taran."
        },
        {
                url: "/images/punjab/harike-wetland.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Harike Bird Sanctuary & Wetland — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/punjab/harike-wetland.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Harike Bird Sanctuary & Wetland — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/punjab/harike-wetland.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Harike Bird Sanctuary & Wetland — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Makki di Roti & Sarson da Saag",
      hindiName: "मक्की दी रोटी और सरसों दा साग",
      tag: "Winter Soul of Rural Punjab",
      description:
        "The quintessential winter harvest delicacy—creamy, slow-simmered mustard greens (saag) blended with bathua, spinach, and ginger-garlic, served steaming with hand-patted yellow cornmeal flatbreads (makki di roti) and a big dollop of fresh white churned butter (makhan) and jaggery (gud).",
      image: "/images/punjab/makki_sarson_saag.jpg",
      origin: "Rural Punjab harvest fields",
      ingredients: ["Fresh mustard greens (Sarson)", "Cornmeal (Makki atta)", "Homemade white butter", "Jaggery (Gud)", "Green chillies & Ginger"],
    },
    {
      name: "Butter Chicken (Murgh Makhani)",
      hindiName: "बटर चिकन",
      tag: "Global Gastronomic Legend",
      description:
        "Tandoor-charred chicken morsels simmered in a velvety, satin-smooth sauce of ripe tomatoes, pure butter, fresh cream, honey, and aromatic dried fenugreek leaves (kasoori methi).",
      image: "/images/punjab/butter_chicken.jpg",
      origin: "Moti Mahal, Peshawar & Delhi (Punjabi diaspora)",
      ingredients: ["Tandoori roasted chicken", "Butter", "Ripe tomato puree", "Heavy cream", "Kasoori methi"],
    },
    {
      name: "Amritsari Kulcha",
      hindiName: "अमृतसरी कुल्चा",
      tag: "Layered Tandoori Masterpiece",
      description:
        "Multi-layered, flaky flatbread stuffed with spiced crushed potatoes, pomegranate seeds (anardana), and chopped green chillies, baked inside an intensely hot clay tandoor until blistered and crushed open with melted ghee, served with tangy chole.",
      image: "/images/punjab/amritsari_kulcha.jpg",
      origin: "Amritsar walled city lanes",
      ingredients: ["Refined flour", "Boiled spiced potatoes", "Anardana (pomegranate seed powder)", "Desi ghee", "Spicy chole"],
    },
    {
      name: "Dal Makhani",
      hindiName: "दाल मखनी",
      tag: "Slow-Simmered Black Lentil Velvet",
      description:
        "Whole black urad lentils and kidney beans (rajma) slow-cooked overnight for 12 to 18 hours over low charcoal embers with butter, fresh tomato puree, garlic, and cream until rich, smoky, and luxuriously creamy.",
      image: "/images/punjab/dal_makhani.jpg",
      origin: "Punjab hearths (Sanjha Chulha)",
      ingredients: ["Sabut urad dal", "Rajma", "Generous butter", "Fresh cream", "Smoked charcoal finish"],
    },
    {
      name: "Punjabi Malai Lassi",
      hindiName: "पंजाबी लस्सी",
      tag: "Nectar of Farm Refreshment",
      description:
        "Thick, velvety yogurt churned vigorously with a wooden madhani, sweetened and served in tall brass or terracotta tumblers topped with a thick, golden layer of fresh clotted milk cream (malai) and crushed pistachios.",
      image: "/images/punjab/punjabi_lassi.jpg",
      origin: "Rural Malwa and Majha",
      ingredients: ["Full-cream buffalo curd", "Sugar", "Cardamom powder", "Thick clotted cream (Malai)", "Pistachios"],
    },
  ],
  traditions: [
    {
      title: "Bhangra & Giddha Folk Dance",
      category: "Vibrant Harvest Celebrations",
      period: "Centuries-Old Baisakhi Harvest Lore",
      description:
        "High-octane, joyous celebratory dances performed to the thunderous beats of the dhol drum—Bhangra with high knee jumps and energetic arm flourishes, and Giddha with rhythmic clapping, bolicheering, and feminine grace.",
      image: "/images/punjab/bhangra_dance.jpg",
      highlights: ["Thunderous live Dhol and Chimta rhythm", "Energetic jumping steps celebrating harvest bounty", "Colorful silk attire and Turle Wali Pagri"],
    },
    {
      title: "Phulkari Folk Needle Embroidery",
      category: "Centuries-Old Floral Embroidery Art",
      period: "15th Century (Heer Ranjha era)",
      description:
        "Literally 'Flower Work', an exquisite needlecraft where women hand-embroider geometric floral motifs using untwisted silk floss (pat) onto coarse handspun khaddar cotton from the reverse side of the fabric without counting stitches.",
      image: "/images/punjab/phulkari_embroidery.jpg",
      highlights: ["Hand-embroidered using pure silk floss (Pat)", "Worked entirely from the reverse side of the fabric", "Symbol of love and bridal blessing passed through generations"],
    },
    {
      title: "Gatka Sikh Martial Art",
      category: "Ancient Weapon Fighting & Self-Defense",
      period: "17th Century (Guru Hargobind Ji)",
      description:
        "A fierce martial art weapon system utilizing wooden sticks (soti), curved talwars (swords), and buckler shields, performed with breathtaking rhythmic agility, spinning sword circles, and fearless discipline.",
      image: "/images/punjab/gatka_martial_art.jpg",
      highlights: ["Preserved by the Nihang warrior order", "Spinning swords and stick defense maneuvers", "Practiced during Hola Mohalla and Baisakhi"],
    },
  ],
  attires: [
    {
      name: "Phulkari Dupatta & Salwar Kameez",
      type: "Women's Classical Punjabi Dress",
      description:
        "A vibrant knee-length pleated kameez and generously gathered Patiala salwar, crowned by a breathtaking, heavy Phulkari dupatta glowing with yellow, orange, and crimson silk needlework.",
      image: "/images/punjab/salwar_suit_phulkari.jpg",
      specialty: "Timeless traditional attire of Punjabi women across festivals and weddings.",
    },
    {
      name: "Kurta-Chadhar with Turle Wali Pagri",
      type: "Men's Traditional Folk Attire",
      description:
        "A loose, comfortable cotton or silk kurta paired with a flowing unstitched ankle-length loincloth (Chadhar) and a fan-crested turban (Turle Wali Pagri) crowned by a pleated plume.",
      image: "/images/punjab/kurta_chadra_turban.jpg",
      specialty: "Traditional dance and harvest costume worn by Bhangra artists.",
    },
    {
      name: "Sikh Dastar (Turban)",
      type: "Sacred Crown of Identity & Equality",
      description:
        "A neatly wrapped turban worn by Sikhs as an essential article of faith, representing spiritual sovereignty, dignity, humility, and equality commanded by Guru Gobind Singh Ji.",
      image: "/images/punjab/turban_dastar.jpg",
      specialty: "Universal symbol of honor, righteousness, and service to humanity.",
    },
  ],
  monuments: [
    {
      name: "Sri Harmandir Sahib (The Golden Temple)",
      location: "Amritsar",
      era: "1588 – 1604 CE (Guru Arjan Dev Ji)",
      unesco: false,
      description:
        "The spiritual epicenter of Sikhism, designed with four open entrances welcoming people of all faiths from the four directions of the world, adorned with gold copper foil by Maharaja Ranjit Singh in 1830.",
      image: "/images/punjab/golden_temple.jpg",
      significance: "Holiest shrine of Sikhism and home to the Akal Takht.",
    },
    {
      name: "Jallianwala Bagh",
      location: "Amritsar",
      era: "1919 CE (National Memorial 1951)",
      unesco: false,
      description:
        "A walled public garden covering 6.5 acres, housing the eternal Flame of Liberty, the Martyrs' Well into which panic-stricken civilians jumped to escape gunfire, and bullet-pocked preservation walls.",
      image: "/images/punjab/jallianwala_bagh.jpg",
      significance: "Crucial watershed monument that catalyzed the final struggle for Indian Independence.",
    },
    {
      name: "Qila Mubarak of Bathinda",
      location: "Bathinda",
      era: "90 – 110 CE (Kushan Empire)",
      unesco: false,
      description:
        "A monumental red clay brick fortress rising over 100 feet above the surrounding plains, where Guru Gobind Singh Ji visited and where Empress Razia Sultana was held captive in 1240 CE.",
      image: "/images/punjab/qila_mubarak.jpg",
      significance: "Oldest standing brick fortress in India.",
    },
    {
      name: "Attari-Wagah Border",
      location: "Amritsar International Border",
      era: "Established 1959 CE",
      unesco: false,
      description:
        "The grand international border gate between India and Pakistan on the historic Grand Trunk (GT) Road, where thousands of spectators gather each evening in amphitheaters for the ceremonial flag retreat.",
      image: "/images/punjab/wagah_border.jpg",
      significance: "World's most famous daily military retreat spectacle and national pride.",
    },
  ],
  languages: [
    {
      name: "Punjabi (ਪੰਜਾਬੀ)",
      script: "Gurmukhi Script (Standardized by Guru Angad Dev Ji)",
      speakers: "125+ Million (Worldwide)",
      greeting: "Sat Sri Akal (ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ)",
      meaning: "The Supreme Timeless Truth is Immortal",
      description:
        "One of the most melodic and widely spoken languages in the world, carrying the divine poetry of the Sri Guru Granth Sahib, Sufi verses of Bulleh Shah and Waris Shah, and pulsating global pop music.",
    },
    {
      name: "Majhi Dialect",
      script: "Gurmukhi",
      speakers: "30+ Million (Amritsar, Gurdaspur, Lahore)",
      greeting: "Ki Haal Hai? / Sat Sri Akal",
      meaning: "How are you doing?",
      description:
        "The historical standard dialect of central Punjab spoken in the Majha region, considered the prestige dialect for Punjabi literature, theatre, news broadcasting, and formal administration.",
    },
    {
      name: "Malwai & Doabi Dialects",
      script: "Gurmukhi",
      speakers: "25+ Million (Ludhiana, Patiala, Jalandhar)",
      greeting: "Sat Sri Akal ji",
      meaning: "Timeless blessings with respect",
      description:
        "Spoken across the southern cotton belt (Malwa) and the fertile delta between Beas and Sutlej (Doaba), famous for oral storytelling and global diaspora contributions.",
    },
  ],
  luminaries: [
    {
      name: "Guru Nanak Dev Ji",
      image: "/images/luminaries/guru_nanak_dev_ji.jpg",
      era: "1469 – 1539 CE",
      title: "First Sikh Guru & Founder of Sikhism",
      contribution:
        "Traveled thousands of miles across Asia on foot (Udasis) preaching 'Ik Onkar' (One Universal Creator), gender equality, social justice, and the foundational pillars of honest living (Kirat Karo), sharing with the needy (Vand Chhako), and remembering the Divine (Naam Japna).",
    },
    {
      name: "Shaheed Bhagat Singh",
      image: "/images/luminaries/shaheed_bhagat_singh.jpg",
      era: "1907 – 1931 CE",
      title: "Immortal Revolutionary Patriot of India",
      contribution:
        "Fearless intellectual and freedom fighter from Banga/Khatkar Kalan who electrified India's youth, sacrificed his life on the gallows at age 23 with a smile, popularizing the rallying cry 'Inquilab Zindabad' (Long Live the Revolution).",
    },
    {
      name: "Maharaja Ranjit Singh",
      image: "/images/luminaries/maharaja_ranjit_singh.jpg",
      era: "1780 – 1839 CE",
      title: "Sher-e-Punjab (Lion of Punjab)",
      contribution:
        "Founder of the sovereign Sikh Empire, who unified Punjab, governed with secular fairness where Hindus, Muslims, and Sikhs held top ministerial posts, and covered the dome of Sri Harmandir Sahib in dazzling gold leaf.",
    },
  ],
}
