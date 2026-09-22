import type { StateData } from "../types/state"

export const uttarPradeshData: StateData = {
  id: "uttar-pradesh",
  name: "Uttar Pradesh",
  hindiName: "उत्तर प्रदेश",
  capital: "Lucknow (The City of Nawabs & Adab)",
  tagline: "The Sacred Heart of Aryavarta, Epics & Ganga-Jamuni Tehzeeb",
  overview:
    "Uttar Pradesh is the spiritual, cultural, and philosophical epicenter of Indian civilization. Embraced by the sacred rivers Ganga and Yamuna, this eternal land is the birthplace of Lord Rama in Ayodhya, Lord Krishna in Mathura, and the eternal city of Lord Shiva in Kashi (Varanasi). Here, Lord Buddha preached his first sermon at Sarnath and attained Mahaparinirvana at Kushinagar. Blending ancient Vedic wisdom with the exquisite refinement of Awadhi Ganga-Jamuni Tehzeeb and timeless Mughal architecture like the Taj Mahal, Uttar Pradesh has shaped India's destiny across millennia.",
  ancientNames: ["Aryavarta", "Madhyadesha", "Kosala", "Kashi", "Braj", "Awadh", "Panchala"],
  keyStats: [
    { label: "Districts", value: "75" },
    { label: "Capital", value: "Lucknow" },
    { label: "Spiritual Capital", value: "Varanasi (Kashi)" },
    { label: "Lifeline Rivers", value: "Holy Ganga & Yamuna" },
    { label: "UNESCO Sites", value: "3 (Taj Mahal, Agra Fort, Fatehpur Sikri)" },
    { label: "Sacred Sangam", value: "Triveni Sangam, Prayagraj" },
  ],
  quote: {
    text: "There is no river like Ganga, no pilgrimage like Kashi, and no virtue like universal truth.",
    author: "Goswami Tulsidas",
  },
  districts: {
    "Varanasi": {
      name: "Varanasi",
      tagline: "Kashi — The World's Oldest Living City & Abode of Shiva",
      headquarters: "Varanasi",
      knownFor: "Kashi Vishwanath Jyotirlinga, 84 Ganga Ghats, Sarnath Buddhist Stupa, Banarasi Silk, Ganga Aarti.",
      famousSpot: "Kashi Vishwanath Corridor & Dashashwamedh Ghat",
    },
    "Lucknow": {
      name: "Lucknow",
      tagline: "City of Nawabs, Adab & Architectural Marvels",
      headquarters: "Lucknow",
      knownFor: "Bara Imambara, Chhota Imambara, Rumi Darwaza, Chikankari embroidery, Awadhi Galouti kebabs.",
      famousSpot: "Bara Imambara & Rumi Darwaza",
    },
    "Agra": {
      name: "Agra",
      tagline: "Home to the Taj Mahal & Royal Mughal Splendor",
      headquarters: "Agra",
      knownFor: "UNESCO Taj Mahal, Agra Fort, Mehtab Bagh, Petha sweet, marble inlay craft.",
      famousSpot: "The Taj Mahal & Agra Fort",
    },
    "Ayodhya": {
      name: "Ayodhya",
      tagline: "Sacred Birthplace of Lord Rama & Kosala Capital",
      headquarters: "Ayodhya",
      knownFor: "Shri Ram Janmabhoomi Mandir, Saryu River Ghats, Hanumangarhi, Kanak Bhavan, Deepotsav.",
      famousSpot: "Shri Ram Janmabhoomi Mandir & Saryu Ghat",
    },
    "Prayagraj": {
      name: "Prayagraj",
      tagline: "King of Pilgrimages & Holy Triveni Sangam",
      headquarters: "Prayagraj",
      knownFor: "Triveni Sangam (Ganga-Yamuna-Saraswati), Maha Kumbh Mela, Allahabad Fort, Anand Bhavan.",
      famousSpot: "Triveni Sangam & Akbar's Fort",
    },
    "Mathura": {
      name: "Mathura",
      tagline: "Sacred Brajbhoomi & Birthplace of Lord Krishna",
      headquarters: "Mathura",
      knownFor: "Shri Krishna Janmasthan, Dwarkadhish Temple, Vishram Ghat, Mathura Peda, Lathmar Holi.",
      famousSpot: "Krishna Janmabhoomi & Vishram Ghat",
    },
    "Jhansi": {
      name: "Jhansi",
      tagline: "Citadel of Rani Lakshmibai & Bundelkhand Valor",
      headquarters: "Jhansi",
      knownFor: "Historic Jhansi Fort, Rani Mahal museum, Bundelkhand freedom struggle heritage.",
      famousSpot: "Jhansi Fort & Rani Mahal",
    },
    "Gorakhpur": {
      name: "Gorakhpur",
      tagline: "Seat of Gorakhnath Peeth & Gita Press",
      headquarters: "Gorakhpur",
      knownFor: "Gorakhnath Temple, Gita Press (world's largest publisher of Hindu texts), Ramgarh Tal lake.",
      famousSpot: "Gorakhnath Temple & Ramgarh Tal",
    },
    "Kanpur Nagar": {
      name: "Kanpur Nagar",
      tagline: "Manchester of the East & Industrial Pioneer",
      headquarters: "Kanpur",
      knownFor: "Leather and textile industries, historic Bithoor (Nana Sahib revolt HQ), Allen Forest Zoo.",
      famousSpot: "Bithoor Ganga Ghats & JK Temple",
    },
    "Kanpur Dehat": {
      name: "Kanpur Dehat",
      tagline: "Rural Heartland & Ancient Brick Architecture",
      headquarters: "Akbarpur",
      knownFor: "Gupta-era brick temples of Bhitargaon, Yamuna river basin agriculture.",
      famousSpot: "Ancient Bhitargaon Gupta Temple",
    },
    "Meerut": {
      name: "Meerut",
      tagline: "Sports Capital & Spark of the 1857 Revolution",
      headquarters: "Meerut",
      knownFor: "Origin of 1857 First War of Independence, world-renowned cricket bat manufacturing, Augharnath Mandir.",
      famousSpot: "Augharnath Temple & Sports Goods Cluster",
    },
    "Aligarh": {
      name: "Aligarh",
      tagline: "City of Locks & Historic Educational Seat",
      headquarters: "Aligarh",
      knownFor: "Aligarh Muslim University (AMU), brass lock industry, Aligarh Fort, Shekha Jheel bird sanctuary.",
      famousSpot: "AMU Victoria Gate & Aligarh Fort",
    },
    "Bareilly": {
      name: "Bareilly",
      tagline: "Jhumka City & Zari-Zardozi Craft Center",
      headquarters: "Bareilly",
      knownFor: "Intricate Zari-Zardozi embroidery, cane and bamboo furniture, Ahichchhatra ancient ruins.",
      famousSpot: "Alakhnath Temple & Zari Markets",
    },
    "Moradabad": {
      name: "Moradabad",
      tagline: "The Brass City (Peetal Nagari)",
      headquarters: "Moradabad",
      knownFor: "Global export of handcrafted brassware, Ramganga river, Jama Masjid heritage.",
      famousSpot: "Brass Handicrafts Guild & Ramganga Ghats",
    },
    "Saharanpur": {
      name: "Saharanpur",
      tagline: "Wood Carving Capital & Shivalik Gateway",
      headquarters: "Saharanpur",
      knownFor: "World-famous hand-carved wooden furniture, Shakumbhari Devi Temple, mango orchards.",
      famousSpot: "Shakumbhari Devi Peeth & Woodcraft Markets",
    },
    "Muzaffarnagar": {
      name: "Muzaffarnagar",
      tagline: "The Sugar Bowl of India",
      headquarters: "Muzaffarnagar",
      knownFor: "Largest jaggery (Gur) market in Asia, fertile Doab agriculture, Shukratal sacred pilgrimage.",
      famousSpot: "Shukratal Holy Vat Vriksha",
    },
    "Ghaziabad": {
      name: "Ghaziabad",
      tagline: "Gateway of Uttar Pradesh to NCR",
      headquarters: "Ghaziabad",
      knownFor: "Rapid industrial and urban expansion, historic Hindon river, Mohan Nagar temple.",
      famousSpot: "Dudheshwar Nath Mandir",
    },
    "Gautam Buddha Nagar": {
      name: "Gautam Buddha Nagar",
      tagline: "Noida — High-Tech Cyber & Expressway Hub",
      headquarters: "Greater Noida",
      knownFor: "Noida IT/electronics corridor, Buddh International Circuit, Okhla Bird Sanctuary.",
      famousSpot: "Okhla Bird Sanctuary & DLF Hub",
    },
    "Firozabad": {
      name: "Firozabad",
      tagline: "The Glass City & Bangle Capital (Suhag Nagari)",
      headquarters: "Firozabad",
      knownFor: "Century-old glassblowing industry, colorful glass bangles, chandeliers and glass art.",
      famousSpot: "Glass Handicraft Bazaars",
    },
    "Mainpuri": {
      name: "Mainpuri",
      tagline: "Tarkashi Woodwork & Sarus Crane Sanctuary",
      headquarters: "Mainpuri",
      knownFor: "Tarkashi brass-wire inlaid woodwork, Saman Bird Sanctuary (Sarus Crane haven).",
      famousSpot: "Saman Bird Sanctuary",
    },
    "Etawah": {
      name: "Etawah",
      tagline: "Yamuna-Chambal Confluence & Safari Reserve",
      headquarters: "Etawah",
      knownFor: "Etawah Safari Park, Chambal river ghariyal sanctuary, historic Pachnada confluence.",
      famousSpot: "Etawah Safari Park & Chambal Ravines",
    },
    "Kannauj": {
      name: "Kannauj",
      tagline: "The Perfume Capital of India (Attar City)",
      headquarters: "Kannauj",
      knownFor: "Traditional deg-bhapka hydro-distillation of pure herbal Attar (perfumes), King Harshavardhana capital.",
      famousSpot: "Ancient Attar Distilleries & Gauri Shankar Mandir",
    },
    "Farrukhabad": {
      name: "Farrukhabad",
      tagline: "Textile Block Printing & Sankisa Buddhist Site",
      headquarters: "Fatehgarh",
      knownFor: "Zari and wooden block printing, Sankisa (sacred site where Buddha descended from heaven).",
      famousSpot: "Sankisa Buddhist Stupa",
    },
    "Lalitpur": {
      name: "Lalitpur",
      tagline: "Devgarh Gupta Temples & Jain Rock Art",
      headquarters: "Lalitpur",
      knownFor: "Devgarh Dashavatara Temple (5th-century Gupta masterpiece), Betwa river valley Jain caves.",
      famousSpot: "Dashavatara Gupta Temple, Devgarh",
    },
    "Jalaun": {
      name: "Jalaun",
      tagline: "Kalpi Handmade Paper & Birbal's Birthplace",
      headquarters: "Orai",
      knownFor: "Eco-friendly Kalpi handmade paper craft, historic Chaurasi Gumbad, Yamuna riverfront.",
      famousSpot: "Chaurasi Gumbad & Kalpi Paper Mills",
    },
    "Hamirpur": {
      name: "Hamirpur",
      tagline: "Land of Confluences & Bundeli Traditions",
      headquarters: "Hamirpur",
      knownFor: "Betwa-Yamuna confluence, Meher Baba's Meherastana, Bundeli folk culture.",
      famousSpot: "Sangam of Yamuna & Betwa",
    },
    "Mahoba": {
      name: "Mahoba",
      tagline: "Land of Alha-Udal & Chandela Dynasty Lakes",
      headquarters: "Mahoba",
      knownFor: "Sun Temple Rahila, Chandela granite stone-cut lakes, heroic ballads of Alha and Udal.",
      famousSpot: "Rahila Sun Temple & Kirat Sagar",
    },
    "Banda": {
      name: "Banda",
      tagline: "Shajar Stone & Ken River Fortresses",
      headquarters: "Banda",
      knownFor: "GI-tagged scenic Shajar dendrite agate stone, Kalinjar Fort, Bamaveshwar Temple.",
      famousSpot: "Kalinjar Fort & Shajar Stone Works",
    },
    "Chitrakoot": {
      name: "Chitrakoot",
      tagline: "Sacred Forest Exile of Lord Rama & Mandakini",
      headquarters: "Chitrakoot",
      knownFor: "Ramghat on Mandakini river, Kamadgiri hill parikrama, Gupt Godavari, Bharat Milap temple.",
      famousSpot: "Ramghat & Gupt Godavari Caves",
    },
    "Fatehpur": {
      name: "Fatehpur",
      tagline: "Between Ganga & Yamuna Doab",
      headquarters: "Fatehpur",
      knownFor: "Historic Bawani Imli martyr monument, Asni Ghat on Ganga, Renh archaeological site.",
      famousSpot: "Bawani Imli Freedom Memorial",
    },
    "Pratapgarh": {
      name: "Pratapgarh",
      tagline: "Amla Capital of India & Belha Devi",
      headquarters: "Pratapgarh",
      knownFor: "Massive Amla (Indian gooseberry) farming, Maa Belha Devi Temple on Sai river, historic forts.",
      famousSpot: "Maa Belha Devi Mandir",
    },
    "Kaushambi": {
      name: "Kaushambi",
      tagline: "Ancient Capital of Vatsa Mahajanapada",
      headquarters: "Manjhanpur",
      knownFor: "Ancient ruins of Kaushambi, Ashoka Pillar, sacred Ghoshitarama Buddhist monastery.",
      famousSpot: "Ghoshitarama Monastery Ruins",
    },
    "Mirzapur": {
      name: "Mirzapur",
      tagline: "Vindhyavasini Shaktipeeth & Handmade Carpets",
      headquarters: "Mirzapur",
      knownFor: "Maa Vindhyavasini Temple, GI-tagged hand-knotted woollen carpets, Chunar Fort, waterfalls.",
      famousSpot: "Vindhyachal Shaktipeeth & Chunar Fort",
    },
    "Sonbhadra": {
      name: "Sonbhadra",
      tagline: "Energy Capital of India & Prehistoric Rock Art",
      headquarters: "Robertsganj",
      knownFor: "Thermal power plants, Rihand Dam (Govind Ballabh Pant Sagar), Salkhan Fossil Park (1.4 billion years old).",
      famousSpot: "Salkhan Fossil Park & Rihand Dam",
    },
    "Bhadohi": {
      name: "Bhadohi",
      tagline: "The Carpet City of South Asia",
      headquarters: "Gyanpur",
      knownFor: "World's most celebrated hub of handwoven silk and wool carpets, export to 70+ countries.",
      famousSpot: "Carpet Weaving Guilds & Chakwa Mahaveer",
    },
    "Jaunpur": {
      name: "Jaunpur",
      tagline: "Shiraz-e-Hind & Sharqi Architectural Gem",
      headquarters: "Jaunpur",
      knownFor: "Shahi Bridge (Akbar's era), Atala Mosque, Jama Masjid, Jaunpuri radish, perfume oils.",
      famousSpot: "Shahi Bridge & Atala Mosque",
    },
    "Ghazipur": {
      name: "Ghazipur",
      tagline: "Gateway to Eastern UP & Rose Water Hub",
      headquarters: "Ghazipur",
      knownFor: "Opium Factory (Asia's oldest), Lord Cornwallis Tomb, fragrant rose water and perfume distilling.",
      famousSpot: "Lord Cornwallis Tomb & Ganga Ghats",
    },
    "Chandauli": {
      name: "Chandauli",
      tagline: "Rice Bowl of UP & Chandraprabha Falls",
      headquarters: "Chandauli",
      knownFor: "Rajdari and Devdari waterfalls in Chandraprabha Wildlife Sanctuary, high paddy yields.",
      famousSpot: "Rajdari & Devdari Waterfalls",
    },
    "Ballia": {
      name: "Ballia",
      tagline: "Bagi Ballia — Land of Mangal Pandey & Chittu Pandey",
      headquarters: "Ballia",
      knownFor: "Rebellion of 1857 pioneer Mangal Pandey, parallel government of 1942, Dadri Mela cattle fair.",
      famousSpot: "Bhrigu Temple & Dadri Fair Ground",
    },
    "Mau": {
      name: "Mau",
      tagline: "Textile Weaving Heartland of Purvanchal",
      headquarters: "Mau",
      knownFor: "Powerloom and handloom weaving of traditional sarees and dress fabrics, historic Shahi Masjid.",
      famousSpot: "Shitala Mata Mandir & Weavers Hub",
    },
    "Azamgarh": {
      name: "Azamgarh",
      tagline: "Land of Nizamabad Black Pottery & Poets",
      headquarters: "Azamgarh",
      knownFor: "GI-tagged glossy Nizamabad Black Clay Pottery with silver engraving, literary center.",
      famousSpot: "Nizamabad Black Pottery Village",
    },
    "Deoria": {
      name: "Deoria",
      tagline: "Sugar Heartland & Devraha Baba's Land",
      headquarters: "Deoria",
      knownFor: "Sugarcane agriculture, historic Somnath Temple, proximity to Buddhist Kushinagar.",
      famousSpot: "Somnath Mandir & Dugdheshwar Nath",
    },
    "Kushinagar": {
      name: "Kushinagar",
      tagline: "Holy Mahaparinirvana Seat of Lord Buddha",
      headquarters: "Padrauna",
      knownFor: "Parinirvana Stupa (6.1m reclining Buddha in gold leaf), Ramabhar Stupa (cremation site), international temples.",
      famousSpot: "Mahaparinirvana Temple & Ramabhar Stupa",
    },
    "Maharajganj": {
      name: "Maharajganj",
      tagline: "Himalayan Foothills & Sohagi Barwa Forest",
      headquarters: "Maharajganj",
      knownFor: "Sohagi Barwa Wildlife Sanctuary (leopard and tiger habitat), Nepal border crossing.",
      famousSpot: "Sohagi Barwa Wildlife Sanctuary",
    },
    "Basti": {
      name: "Basti",
      tagline: "Ancient Vashishtha Ashram & Saryu Plains",
      headquarters: "Basti",
      knownFor: "Revered sage Vashishtha's hermitage traditions, Chando Tal bird lake, sugarcane mills.",
      famousSpot: "Bhadreshwar Nath Mandir",
    },
    "Sant Kabir Nagar": {
      name: "Sant Kabir Nagar",
      tagline: "Maghar — Sacred Nirvana Ground of Sant Kabir",
      headquarters: "Khalilabad",
      knownFor: "Kabir Chaura complex at Maghar where the mystic poet passed away, handloom brassware.",
      famousSpot: "Kabir Samadhi & Mazar, Maghar",
    },
    "Siddharthnagar": {
      name: "Siddharthnagar",
      tagline: "Piprahwa — Ancient Kapilavastu of Prince Siddhartha",
      headquarters: "Navgarh",
      knownFor: "Piprahwa archaeological ruins (ancient Kapilavastu palace), GI-tagged Kalanamak 'Buddha Rice'.",
      famousSpot: "Kapilavastu Stupa & Kalanamak Fields",
    },
    "Gonda": {
      name: "Gonda",
      tagline: "Parvati Arga Bird Sanctuary & Swaminarayan Roots",
      headquarters: "Gonda",
      knownFor: "Parvati Arga Ramsar wetland sanctuary, Chhapaiya (birthplace of Bhagwan Swaminarayan).",
      famousSpot: "Swaminarayan Temple Chhapaiya",
    },
    "Balrampur": {
      name: "Balrampur",
      tagline: "Devipatan Shaktipeeth & Royal Heritage",
      headquarters: "Balrampur",
      knownFor: "Maa Pateshwari Devipatan Temple (one of 51 Shaktipeeths), Suhelwa Wildlife Sanctuary.",
      famousSpot: "Devipatan Shaktipeeth",
    },
    "Shrawasti": {
      name: "Shrawasti",
      tagline: "Jetavana Monastery of Buddha & Jain Tirthankar",
      headquarters: "Bhinga",
      knownFor: "Jetavana Grove where Buddha spent 24 rainy seasons, Anathapindika Stupa, Angulimala Cave.",
      famousSpot: "Jetavana Vihara & Anandabodhi Tree",
    },
    "Bahraich": {
      name: "Bahraich",
      tagline: "Katarniaghat Tiger Haven & Dargah Heritage",
      headquarters: "Bahraich",
      knownFor: "Katarniaghat Wildlife Sanctuary (terai swamp deer, tigers, Gangetic dolphins), Dargah Ghazi Saiyyad Salar.",
      famousSpot: "Katarniaghat Wildlife Sanctuary",
    },
    "Lakhimpur Kheri": {
      name: "Lakhimpur Kheri",
      tagline: "Dudhwa National Park & Terai Forest Kingdom",
      headquarters: "Lakhimpur",
      knownFor: "Dudhwa National Park (one-horned rhinos, Bengal tigers, swamp deer), historic Frog Temple Oel.",
      famousSpot: "Dudhwa National Park & Rhino Camp",
    },
    "Sitapur": {
      name: "Sitapur",
      tagline: "Naimisharanya — Forest of 88,000 Sages",
      headquarters: "Sitapur",
      knownFor: "Naimisharanya (sacred Neemsar where Mahabharata and Puranas were narrated), Chakra Tirtha.",
      famousSpot: "Naimisharanya Chakra Tirtha",
    },
    "Hardoi": {
      name: "Hardoi",
      tagline: "Sandi Bird Sanctuary & Prahlad's Legend",
      headquarters: "Hardoi",
      knownFor: "Sandi Bird Sanctuary (migratory waterfowl haven), legendary home of Bhakt Prahlad.",
      famousSpot: "Sandi Bird Sanctuary",
    },
    "Unnao": {
      name: "Unnao",
      tagline: "Land of Revolutionary Poets & Baksar Ghat",
      headquarters: "Unnao",
      knownFor: "Historic Ganga ghats at Baksar, birthplace of poets Suryakant Tripathi Nirala and Chandrashekhar Azad roots.",
      famousSpot: "Nawabganj Bird Sanctuary",
    },
    "Rae Bareli": {
      name: "Rae Bareli",
      tagline: "Modern Coach Factory & Samaspur Bird Lake",
      headquarters: "Rae Bareli",
      knownFor: "Samaspur Wetland Bird Sanctuary, Modern Coach Factory, historic Dalmau Ganga Ghats.",
      famousSpot: "Samaspur Bird Sanctuary & Dalmau",
    },
    "Amethi": {
      name: "Amethi",
      tagline: "Industrial Corridor & Nandmahar Shrine",
      headquarters: "Gauriganj",
      knownFor: "Ordnance factory, Nandmahar Dham temple, educational hubs.",
      famousSpot: "Nandmahar Dham",
    },
    "Sultanpur": {
      name: "Sultanpur",
      tagline: "Kushabhavanpur of Prince Kusha on Gomti",
      headquarters: "Sultanpur",
      knownFor: "Ancient city founded by Lord Rama's son Kusha, Parijat tree, sacred Gomti ghats.",
      famousSpot: "Gomti Riverfront & Parijat Tree",
    },
    "Barabanki": {
      name: "Barabanki",
      tagline: "Dewa Sharif — Sanctuary of Universal Love",
      headquarters: "Barabanki",
      knownFor: "Dewa Sharif shrine of Sufi saint Waris Ali Shah ('Love is the only religion'), Parijaat tree Kintoor.",
      famousSpot: "Dewa Sharif Dargah",
    },
    "Amroha": {
      name: "Amroha",
      tagline: "City of Dholak & Mango Orchards",
      headquarters: "Amroha",
      knownFor: "GI-tagged acoustic wooden Dholak craftsmanship, sweet mango varieties, Vasudev Mandir.",
      famousSpot: "Dholak Musical Craft Guilds",
    },
    "Bijnor": {
      name: "Bijnor",
      tagline: "Vidur Kuti & Hastinapur Forest Sanctuary",
      headquarters: "Bijnor",
      knownFor: "Vidur Kuti on the Ganga, Kanva Ashram where Shakuntala lived, Daranagar Ganga fair.",
      famousSpot: "Vidur Kuti & Ganga Barrage",
    },
    "Budaun": {
      name: "Budaun",
      tagline: "Ancient Capital of Delhi Sultanate Governors",
      headquarters: "Budaun",
      knownFor: "Jama Masjid Shamsi (built by Iltutmish in 1223), Birbal's birthplace tradition.",
      famousSpot: "Jama Masjid Shamsi",
    },
    "Bulandshahr": {
      name: "Bulandshahr",
      tagline: "Khurja Ceramics & Anupshahr Ganga Tirtha",
      headquarters: "Bulandshahr",
      knownFor: "GI-tagged Khurja Ceramic Pottery, holy town of Anupshahr (Chhoti Kashi) on the Ganga.",
      famousSpot: "Khurja Pottery Bazaars & Anupshahr Ghats",
    },
    "Hapur": {
      name: "Hapur",
      tagline: "Garhmukteshwar — Sacred Muktidham on Ganga",
      headquarters: "Hapur",
      knownFor: "Garhmukteshwar holy pilgrimage, ancient Mukteshwar Mahadev temple, grain trade center.",
      famousSpot: "Garhmukteshwar Ganga Ghats",
    },
    "Hathras": {
      name: "Hathras",
      tagline: "Hing Capital of India & Swang Folk Theater",
      headquarters: "Hathras",
      knownFor: "World-renowned Asafoetida (Hing) compounding and trade, Nautanki/Swang theater tradition.",
      famousSpot: "Hathras Fort & Hing Markets",
    },
    "Kasganj": {
      name: "Kasganj",
      tagline: "Soron Shukarkshetra — Varaha Incarnation",
      headquarters: "Kasganj",
      knownFor: "Soron holy pilgrimage (sacred spot of Lord Vishnu's Varaha avatar), Amir Khusrau birthplace Patiali.",
      famousSpot: "Soron Shukarkshetra Tirtha",
    },
    "Pilibhit": {
      name: "Pilibhit",
      tagline: "The Flute City (Bansuri Nagari) & Tiger Reserve",
      headquarters: "Pilibhit",
      knownFor: "Produces 95% of India's bamboo flutes, Pilibhit Tiger Reserve with high big cat density.",
      famousSpot: "Pilibhit Tiger Reserve & Bansuri Markets",
    },
    "Rampur": {
      name: "Rampur",
      tagline: "Raza Library Heritage & Rampuri Chhuri",
      headquarters: "Rampur",
      knownFor: "Rampur Raza Library (world-class Indo-Islamic manuscripts), Rampuri cutlery craft, royal music Gharana.",
      famousSpot: "Rampur Raza Library",
    },
    "Sambhal": {
      name: "Sambhal",
      tagline: "Bone & Horn Handicrafts & Kalki Tradition",
      headquarters: "Sambhal",
      knownFor: "Handcrafted bone-and-horn utility art exports, Kalki Vishnu temple tradition, historic Babri mosque ruins.",
      famousSpot: "Kalki Temple & Handicraft Workshops",
    },
    "Shahjahanpur": {
      name: "Shahjahanpur",
      tagline: "Shaheed Nagari — Land of Revolutionary Martyrs",
      headquarters: "Shahjahanpur",
      knownFor: "Birthplace of Kakori freedom heroes Ram Prasad Bismil, Ashfaqullah Khan, and Thakur Roshan Singh.",
      famousSpot: "Shaheed Smarak Memorial",
    },
    "Shamli": {
      name: "Shamli",
      tagline: "Upper Doab Agriculture & Hanuman Tilla",
      headquarters: "Shamli",
      knownFor: "Fertile sugarcane belt, historic Hanuman Tilla temple said to be built by Bhima, steel rolling mills.",
      famousSpot: "Hanuman Dham Tilla",
    },
    "Ambedkar Nagar": {
      name: "Ambedkar Nagar",
      tagline: "Tanda Terycot Weaving & Shravan Dham",
      headquarters: "Akbarpur",
      knownFor: "Tanda handloom and powerloom textile weaving, Shravan Kumar hermitage site.",
      famousSpot: "Shravan Kshetra & Tanda Mills",
    },
    "Baghpat": {
      name: "Baghpat",
      tagline: "Ancient Vyaghraprastha of Mahabharata & Sinauli Chariot",
      headquarters: "Baghpat",
      knownFor: "Sinauli archaeological excavations (4,000-year-old Copper Age war chariots and royal coffins).",
      famousSpot: "Sinauli Archaeological Site & Pura Mahadev",
    },
  },
  landmarks: [
    {
      id: "up-taj",
      name: "The Taj Mahal",
      district: "Agra",
      lat: 27.1751,
      lon: 78.0421,
      category: "monument",
      description: "UNESCO World Heritage wonder of ivory-white marble, commissioned by Shah Jahan on the Yamuna riverbank.",
      image: "/images/landmarks/uttar-pradesh/up-taj_angle1.jpg",
      era: "1631–1648 CE (Mughal Dynasty)",
      builtBy: "Emperor Shah Jahan",
      architecturalStyle: "Indo-Islamic White Makrana Marble Architecture",
      significance: "UNESCO World Heritage Wonder of the World and pinnacle of Mughal symmetry on the Yamuna riverbank.",
      gallery: [
        {
                url: "/images/landmarks/uttar-pradesh/up-taj_angle1.jpg",
                angle: "Front Elevation",
                caption: "The Taj Mahal — Front elevation and iconic monumental facade in Agra."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-taj_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "The Taj Mahal — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-taj_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "The Taj Mahal — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-taj_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "The Taj Mahal — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "up-kashi",
      name: "Kashi Vishwanath Temple & Ghats",
      district: "Varanasi",
      lat: 25.3109,
      lon: 83.0107,
      category: "spiritual",
      description: "The holiest Jyotirlinga of Lord Shiva, crowned with golden spire and leading to the sacred 84 Ganga ghats.",
      image: "/images/landmarks/uttar-pradesh/up-kashi_angle1.jpg",
      era: "1780 CE (Current Sanctum by Ahilyabai) / Millennium Antiquity",
      builtBy: "Rani Ahilyabai Holkar & Corridor by GoI",
      architecturalStyle: "Nagari Gold-Spire Temple & Classical Ganga Ghats",
      significance: "Holiest Shiva Jyotirlinga and spiritual epicenter of ancient Kashi.",
      gallery: [
        {
                url: "/images/landmarks/uttar-pradesh/up-kashi_angle1.jpg",
                angle: "Front Elevation",
                caption: "Kashi Vishwanath Temple & Ghats — Front elevation and iconic monumental facade in Varanasi."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-kashi_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Kashi Vishwanath Temple & Ghats — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-kashi_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Kashi Vishwanath Temple & Ghats — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-kashi_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Kashi Vishwanath Temple & Ghats — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "up-ram-mandir",
      name: "Shri Ram Janmabhoomi Mandir",
      district: "Ayodhya",
      lat: 26.7922,
      lon: 82.1998,
      category: "spiritual",
      description: "Magnificent Nagara-style pink sandstone temple at the sacred birthplace of Lord Rama on the banks of Saryu.",
      image: "/images/landmarks/uttar-pradesh/up-ram-mandir_angle1.jpg",
      era: "Ancient Tirth / 2024 CE Consecration",
      builtBy: "Shri Ram Janmabhoomi Teerth Kshetra Trust",
      architecturalStyle: "Classical Nagara Sandstone Temple Architecture",
      significance: "Sacred birthplace of Lord Rama on the banks of holy Saryu.",
      gallery: [
        {
                url: "/images/landmarks/uttar-pradesh/up-ram-mandir_angle1.jpg",
                angle: "Front Elevation",
                caption: "Shri Ram Janmabhoomi Mandir — Front elevation and iconic monumental facade in Ayodhya."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-ram-mandir_angle3.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Shri Ram Janmabhoomi Mandir — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-ram-mandir_angle4.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Shri Ram Janmabhoomi Mandir — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-ram-mandir_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Shri Ram Janmabhoomi Mandir — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "up-imambara",
      name: "Bara Imambara & Rumi Darwaza",
      district: "Lucknow",
      lat: 26.8693,
      lon: 80.9129,
      category: "monument",
      description: "Built in 1784 by Nawab Asaf-ud-Daula, featuring the world's largest unsupported vaulted hall and the Bhool Bhulaiya labyrinth.",
      image: "/images/landmarks/uttar-pradesh/up-imambara_angle1.jpg",
      era: "1784 CE (Awadh Dynasty)",
      builtBy: "Nawab Asaf-ud-Daula",
      architecturalStyle: "Awadhi Mughal Vaulted Architecture with Bhulbhulaiya",
      significance: "World's largest unsupported vaulted brick hall with acoustic labyrinth.",
      gallery: [
        {
                url: "/images/landmarks/uttar-pradesh/up-imambara_angle1.jpg",
                angle: "Front Elevation",
                caption: "Bara Imambara & Rumi Darwaza — Front elevation and iconic monumental facade in Lucknow."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-imambara_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Bara Imambara & Rumi Darwaza — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-imambara_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Bara Imambara & Rumi Darwaza — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-imambara_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Bara Imambara & Rumi Darwaza — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "up-sangam",
      name: "Triveni Sangam",
      district: "Prayagraj",
      lat: 25.4299,
      lon: 81.8841,
      category: "spiritual",
      description: "The sacred confluence of Ganga, Yamuna, and mythical Saraswati, host to the historic Maha Kumbh Mela.",
      image: "/images/landmarks/uttar-pradesh/up-sangam_angle1.jpg",
      era: "Vedic Antiquity / 1583 CE (Akbar Fort)",
      builtBy: "Emperor Akbar (Fort) & Eternal River Confluence",
      architecturalStyle: "Mughal Imperial Fortification & Sacred Kumbh Tirth",
      significance: "Holy confluence of Ganga, Yamuna, and mythical Saraswati; host of the Kumbh Mela.",
      gallery: [
        {
                url: "/images/landmarks/uttar-pradesh/up-sangam_angle1.jpg",
                angle: "Front Elevation",
                caption: "Triveni Sangam — Front elevation and iconic monumental facade in Prayagraj."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-sangam_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Triveni Sangam — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-sangam_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Triveni Sangam — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-sangam_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Triveni Sangam — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "up-krishna",
      name: "Shri Krishna Janmabhoomi",
      district: "Mathura",
      lat: 27.505,
      lon: 77.669,
      category: "spiritual",
      description: "The sanctum sanctorum prison cell where Lord Krishna manifested in human form over 5,000 years ago.",
      image: "/images/landmarks/uttar-pradesh/up-krishna_angle2.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Mathura",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Shri Krishna Janmabhoomi in Mathura.",
      gallery: [
        {
                url: "/images/landmarks/uttar-pradesh/up-krishna_angle2.jpg",
                angle: "Front Elevation",
                caption: "Shri Krishna Janmabhoomi — Front elevation and iconic monumental facade in Mathura."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-krishna_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Shri Krishna Janmabhoomi — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-krishna_angle2.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Shri Krishna Janmabhoomi — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-krishna_angle2.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Shri Krishna Janmabhoomi — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "up-sarnath",
      name: "Sarnath Dhamek Stupa",
      district: "Varanasi",
      lat: 25.3811,
      lon: 83.0244,
      category: "monument",
      description: "Massive cylindrical brick stupa where Gautam Buddha delivered the historic Dhammacakkappavattana Sutta.",
      image: "/images/landmarks/uttar-pradesh/up-sarnath_angle1.jpg",
      era: "500 CE / 249 BCE (Mauryan Core)",
      builtBy: "Emperor Ashoka & Gupta Dynasty",
      architecturalStyle: "Solid Cylindrical Brick & Carved Sandstone Stupa",
      significance: "Sacred site of Gautama Buddha's first sermon (Dhammacakkappavattana).",
      gallery: [
        {
                url: "/images/landmarks/uttar-pradesh/up-sarnath_angle1.jpg",
                angle: "Front Elevation",
                caption: "Sarnath Dhamek Stupa — Front elevation and iconic monumental facade in Varanasi."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-sarnath_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Sarnath Dhamek Stupa — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-sarnath_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Sarnath Dhamek Stupa — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/uttar-pradesh/up-sarnath_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Sarnath Dhamek Stupa — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Awadhi Dum Biryani",
      hindiName: "अवधी दम बिरयानी",
      tag: "ROYAL NAWABI MASTERPIECE",
      origin: "Royal Dastarkhwan of Lucknow",
      description:
        "Long-grain basmati rice and marinated meat layered with saffron milk, mace, kewra water, and pure ghee, sealed in a handi with dough and slow-cooked over smouldering charcoal.",
      image: "/images/up/awadhi_biryani.jpg",
      ingredients: ["Basmati Rice", "Saffron (Kesar)", "Kewra & Rose Water", "Mace & Cardamom", "Ghee", "Spiced Marinade"],
    },
    {
      name: "Galouti Kebab",
      hindiName: "गलौटी कबाब",
      tag: "MELT-IN-THE-MOUTH LEGEND",
      origin: "Nawabs of Awadh",
      description:
        "Finely minced patties marinated with raw papaya and a secret blend of over 160 aromatic spices, seared on a copper tawa until gossamer soft, served with ulte tawe ka paratha.",
      image: "/images/up/galouti_kebab.jpg",
      ingredients: ["Minced Meat/Yam", "Raw Papaya Paste", "Awadhi Potli Masala", "Saffron", "Pure Ghee"],
    },
    {
      name: "Banarasi Paan",
      hindiName: "बनारसी मीठा पान",
      tag: "CULTURAL DIGESTIVE SYMBOL",
      origin: "Varanasi Ghats & Bazaars",
      description:
        "Tender betel leaf layered with gulkand (rose petal preserve), catechu (kattha), lime, menthol, candied fennel, and sweet silver leaf, celebrated worldwide for its aromatic refreshment.",
      image: "/images/up/banarasi_paan.jpg",
      ingredients: ["Betel Leaf (Maghai/Desi)", "Gulkand", "Chuna & Kattha", "Sweet Saunf", "Silver Vark"],
    },
    {
      name: "Bedmi Puri & Aloo Sabzi",
      hindiName: "बेड़मी पूरी आलू",
      tag: "ICONIC BRAJ BREAKFAST",
      origin: "Mathura & Agra",
      description:
        "Crisp, puffy whole wheat and urad dal puris fragrant with fennel and hing, served with a tangy, spicy unpeeled potato curry and sour mango pickle.",
      image: "/images/up/bedmi_puri.jpg",
      ingredients: ["Wheat Flour", "Spiced Urad Dal Pithi", "Potatoes", "Hing (Asafoetida)", "Fennel & Coriander"],
    },
    {
      name: "Makhan Malai / Malaiyyo",
      hindiName: "मक्खन मलाई / मलइयो",
      tag: "WINTER DEW-FROTH AMBROSIA",
      origin: "Varanasi & Old Lucknow",
      description:
        "Ethereal cloud of whipped milk froth infused with saffron, cardamom, and rose water, chilled under morning winter dew and garnished with crushed pistachios and almonds.",
      image: "/images/up/makhan_malai.jpg",
      ingredients: ["Raw Milk Cream", "Saffron Milk", "Winter Dew", "Cardamom", "Pistachios", "Almonds"],
    },
  ],
  traditions: [
    {
      title: "Chikankari Hand Embroidery",
      category: "Intricate Needlework",
      period: "Mughal & Awadh Renaissance (Noor Jahan)",
      description:
        "Delicate, shadow-work white embroidery traditionally stitched on fine muslin, cotton, or georgette using 32 distinct stitch techniques like Bakhiya, Phanda, and Jaali.",
      image: "/images/up/chikankari_art.jpg",
      highlights: [
        "Over 32 traditional needle stitches mastered over generations",
        "Historically patronized by Empress Noor Jahan and Awadh Nawabs",
        "Worldwide GI-tagged emblem of Lucknowi craftsmanship",
      ],
    },
    {
      title: "Varanasi Ganga Aarti",
      category: "Sacred River Ritual",
      period: "Eternal Vedic Tradition",
      description:
        "An awe-inspiring sunset ritual at Dashashwamedh Ghat where young priests in saffron robes raise multi-tiered brass lamps in synchronized worship of Mother Ganga amidst conch shells and incense.",
      image: "/images/up/varanasi_ganga_aarti.jpg",
      highlights: [
        "Magnificent multi-tiered brass deepams weighing over 4 kg each",
        "Chanting of ancient Vedic hymns and conch blowers",
        "Thousands of floating diya oil lamps illuminate the river water",
      ],
    },
    {
      title: "Kathak Classical Dance",
      category: "Indian Classical Dance",
      period: "Vedic Katha Tradition & Lucknow Gharana",
      description:
        "One of the eight major classical dance forms of India, characterized by rhythmic footwork (Tatkar), lightning-fast pirouettes (Chakkars), and subtle storytelling facial expressions (Abhinaya).",
      image: "/images/up/kathak_dance.jpg",
      highlights: [
        "Originated from ancient nomadic storytellers (Kathakars)",
        "Nurtured to royal brilliance by Nawab Wajid Ali Shah",
        "Features intricate Ghungroo foot rhythm and Bhava",
      ],
    },
  ],
  attires: [
    {
      name: "Banarasi Brocade Silk Saree",
      type: "Royal Handloom Brocade",
      specialty: "Heavy gold and silver zari weaving with Mughal floral motifs (Kalga and Bel).",
      description:
        "Woven on traditional pit looms in Varanasi for over a thousand years, a single Banarasi bridal saree can take up to six months of meticulous master-weaver devotion.",
      image: "/images/up/banarasi_saree.jpg",
    },
    {
      name: "Lucknowi Chikan Kurta",
      type: "Refined White-on-White Muslin",
      specialty: "Shadow-work floral embroidery offering unmatched summer breathability and grace.",
      description:
        "A hallmark of Awadhi refinement, the white-on-white Chikan kurta is paired with churidar and embroidered dupatta, exuding effortless elegance.",
      image: "/images/up/chikan_kurta.jpg",
    },
    {
      name: "Awadhi Angarkha & Sherwani",
      type: "Aristocratic Court Regalia",
      specialty: "Overlapping asymmetrical neckline tied with silk cords, crafted in silk brocade.",
      description:
        "Historically worn by Nawabs and noble poets of Lucknow, the Angarkha features graceful flared cuts and gold zardozi piping worn over fine churidars.",
      image: "/images/up/awadhi_angarkha.jpg",
    },
  ],
  monuments: [
    {
      name: "The Taj Mahal",
      location: "Agra, Yamuna Riverbank",
      era: "1631 – 1648 CE",
      unesco: true,
      significance: "Universal masterpiece of world architectural heritage and eternal love.",
      description:
        "Built entirely from pristine Makrana white marble inlaid with 28 varieties of semi-precious stones, the Taj Mahal is framed by quadruple minarets and reflecting pool gardens.",
      image: "/images/up/taj_mahal.jpg",
    },
    {
      name: "Kashi Vishwanath Corridor & Ghats",
      location: "Varanasi",
      era: "Ancient origins, renovated 1780 CE & 2021 CE",
      unesco: false,
      significance: "The spiritual heart of Sanatana Dharma connecting the Jyotirlinga directly to Ganga.",
      description:
        "Restored historically by Queen Ahilyabai Holkar and expanded into a grand 50,000 sq m corridor, Kashi Vishwanath stands at the sacred core of the ancient pilgrimage city.",
      image: "/images/up/kashi_vishwanath.jpg",
    },
    {
      name: "Shri Ram Janmabhoomi Mandir",
      location: "Ayodhya Dham",
      era: "Consecrated 2024 CE",
      unesco: false,
      significance: "Grand temple constructed in traditional Nagara style at the historic birthplace of Lord Rama.",
      description:
        "Built entirely without iron or steel using carved Bansi Paharpur pink sandstone, the temple rises 161 feet with five mandapas and 392 intricately carved stone pillars.",
      image: "/images/up/ram_mandir.jpg",
    },
    {
      name: "Bara Imambara & Rumi Darwaza",
      location: "Hussainabad, Lucknow",
      era: "1784 CE (Nawab Asaf-ud-Daula)",
      unesco: false,
      significance: "Engineering triumph featuring an unsupported 50-meter arched central hall.",
      description:
        "Commissioned as a famine relief project, this majestic complex features no wood or metal beams and includes the legendary Bhool Bhulaiya labyrinth of interconnected passageways.",
      image: "/images/up/bara_imambara.jpg",
    },
  ],
  languages: [
    {
      name: "Awadhi",
      script: "Devanagari",
      speakers: "38+ Million",
      greeting: "प्रणाम, का हाल बा? (Pranam, how are you?)",
      meaning: "Warm, respectful greeting deeply rooted in Awadhi hospitality.",
      description:
        "The sweet, poetic tongue of central UP in which Goswami Tulsidas composed the Ramcharitmanas and Malik Muhammad Jayasi penned Padmavat.",
    },
    {
      name: "Bhojpuri",
      script: "Devanagari (historically Kaithi)",
      speakers: "50+ Million (Eastern UP & Bihar)",
      greeting: "राउरे के गोड़ लागिला (I touch your feet with respect)",
      meaning: "The most deferential, affectionate Purvanchali greeting.",
      description:
        "A vibrant language of Purvanchal rich in folk ballads, Kajari songs, and international diaspora heritage from the Caribbean to Mauritius.",
    },
    {
      name: "Braj Bhasha & Urdu",
      script: "Devanagari & Nastaliq",
      speakers: "Combined 40+ Million",
      greeting: "राधे राधे (Radhe Radhe) / आदाब (Aadaab)",
      meaning: "Sacred greeting invoking Radha Rani in Braj, and graceful courtly respect in Awadh.",
      description:
        "Braj Bhasha is the lyrical language of Surdas and Lord Krishna's lila, while Lucknowi Urdu is world-renowned for its ghazals, adab, and subtlety.",
    },
  ],
  luminaries: [
    {
      name: "Goswami Tulsidas",
      image: "/images/luminaries/goswami_tulsidas.jpg",
      era: "1532 – 1623 CE",
      title: "Saint-Poet & Author of Ramcharitmanas",
      contribution:
        "Composed the monumental Ramcharitmanas and Hanuman Chalisa on the ghats of Varanasi, bringing the epic Ramayana from classical Sanskrit into the living language of millions.",
    },
    {
      name: "Sant Kabir",
      image: "/images/luminaries/sant_kabir.jpg",
      era: "1398 – 1518 CE",
      title: "Mystic Poet of Universal Brotherhood",
      contribution:
        "Challenged religious dogma through his profound couplets (Dohas) in Varanasi, advocating a formless, loving divine and unity among all mankind.",
    },
    {
      name: "Rani Lakshmibai of Jhansi",
      image: "/images/luminaries/rani_lakshmibai_of_jhansi.jpg",
      era: "1828 – 1858 CE",
      title: "Heroine of the 1857 War of Independence",
      contribution:
        "The immortal warrior queen who fought British colonial forces with unmatched bravery, becoming India's enduring symbol of patriotic defiance.",
    },
    {
      name: "Munshi Premchand",
      image: "/images/luminaries/munshi_premchand.jpg",
      era: "1880 – 1936 CE",
      title: "Upanyas Samrat (Emperor of Modern Hindi & Urdu Literature)",
      contribution:
        "Born in Lamhi, Varanasi, Premchand pioneered modern social realism through timeless masterworks including Godaan, Gaban, and Idgah.",
    },
    {
      name: "Ustad Bismillah Khan",
      image: "/images/luminaries/ustad_bismillah_khan.jpg",
      era: "1916 – 2006 CE",
      title: "Bharat Ratna & Shehnai Maestro",
      contribution:
        "Elevated the folk Shehnai to the world concert stage, performing at sunrise for decades at the Kashi Vishwanath temple and on India's first Independence Day.",
    },
  ],
}
