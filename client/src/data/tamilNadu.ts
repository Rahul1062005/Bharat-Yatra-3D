import type { StateData } from "../types/state"

export const tamilNaduData: StateData = {
  id: "tamil-nadu",
  name: "Tamil Nadu",
  hindiName: "तमिलनाडु",
  capital: "Chennai (Madras)",
  tagline: "Land of Dravidian Temples & Classical Antiquity",
  overview:
    "Home to one of the world's longest-surviving classical languages and civilizations, Tamil Nadu is the temple jewel of South India. Defined by monumental granite Gopurams of the Chola, Pandya, and Pallava dynasties, Bharatanatyam classical dance, Carnatic musical traditions, flourishing automobile and IT industries, and sacred coastlines along the Indian Ocean, Arabian Sea, and Bay of Bengal.",
  ancientNames: ["Tamilakam", "Chola Mandala", "Pandya Kingdom", "Chera Nadu", "Pallava Realm"],
  keyStats: [
    { label: "Districts", value: "38" },
    { label: "Capital", value: "Chennai" },
    { label: "Lifeline River", value: "Holy Kaveri (Cauvery)" },
    { label: "Classical Heritage", value: "Oldest Living Classical Language" },
    { label: "UNESCO Sites", value: "Great Living Chola Temples & Mahabalipuram" },
    { label: "Land's End", value: "Kanyakumari (Triveni Sangam of 3 Seas)" },
  ],
  quote: {
    text: "Yaadhum Oore Yaavarum Kelir — To us all towns are our own, and all people are our kin.",
    author: "Kaniyan Pungundranar (Purananuru, Sangam Era)",
  },
  districts: {
    "Chennai": {
      name: "Chennai",
      tagline: "Gateway of South India & Detroit of Asia",
      headquarters: "Chennai",
      knownFor: "Marina Beach (world's 2nd longest natural urban beach), Kapaleeshwarar Temple, Fort St. George, San Thome Basilica.",
      famousSpot: "Kapaleeshwarar Temple & Marina Beach",
    },
    "Thanjavur": {
      name: "Thanjavur",
      tagline: "Rice Bowl of Tamil Nadu & Chola Throne",
      headquarters: "Thanjavur",
      knownFor: "Brihadeeswarar Temple (Big Temple, UNESCO), Thanjavur art plates, Tanjore gold leaf painting, veena making.",
      famousSpot: "Brihadeeswarar Temple (Peruvudaiyar Kovil)",
    },
    "Madurai": {
      name: "Madurai",
      tagline: "Thoonga Nagaram (City That Never Sleeps)",
      headquarters: "Madurai",
      knownFor: "Meenakshi Amman Temple (14 soaring gopurams), Thirumalai Nayakkar Palace, Jigarthanda drink, Sungudi sarees.",
      famousSpot: "Meenakshi Amman Temple & Nayakkar Palace",
    },
    "Kancheepuram": {
      name: "Kancheepuram",
      tagline: "City of A Thousand Temples & Royal Silk",
      headquarters: "Kanchipuram",
      knownFor: "Kanchipuram pure mulberry silk sarees, Ekambareswarar Temple, Kailasanathar Temple, Varadharaja Perumal.",
      famousSpot: "Kailasanathar Temple & Silk Weavers",
    },
    "Coimbatore": {
      name: "Coimbatore",
      tagline: "Manchester of South India & Isha Yoga",
      headquarters: "Coimbatore",
      knownFor: "Textile manufacturing, wet grinders, 112-ft Adiyogi Shiva Statue at Isha Yoga, Marudhamalai Temple.",
      famousSpot: "Adiyogi Shiva & Marudhamalai",
    },
    "Kanyakumari": {
      name: "Kanyakumari",
      tagline: "Cape Comorin — Meeting Point of Three Seas",
      headquarters: "Nagercoil",
      knownFor: "Vivekananda Rock Memorial, 133-ft Thiruvalluvar Statue, Bhagavathy Amman Temple, simultaneous sunrise & sunset.",
      famousSpot: "Vivekananda Rock & Thiruvalluvar Statue",
    },
    "Tiruchirappalli": {
      name: "Tiruchirappalli",
      tagline: "Rockfort Citadel & Srirangam Sanctum",
      headquarters: "Tiruchirappalli",
      knownFor: "Sri Ranganathaswamy Temple (largest functioning Hindu temple complex in the world), Rockfort Uchchi Pillayar.",
      famousSpot: "Srirangam Temple & Rockfort",
    },
    "Nilgiris": {
      name: "Nilgiris",
      tagline: "Blue Mountains & Queen of Hill Stations",
      headquarters: "Udhagamandalam (Ooty)",
      knownFor: "Ooty Botanical Gardens, Nilgiri Mountain Railway (UNESCO), tea gardens, Toda tribal hamlets, Pykara lake.",
      famousSpot: "Nilgiri Mountain Toy Train & Ooty Lake",
    },
    "Ramanathapuram": {
      name: "Ramanathapuram",
      tagline: "Sacred Island of Rameswaram & Pamban Bridge",
      headquarters: "Ramanathapuram",
      knownFor: "Ramanathaswamy Temple (longest corridor among Hindu temples), Pamban railway sea bridge, Dhanushkodi ghost town.",
      famousSpot: "Rameswaram Temple & Pamban Sea Bridge",
    },
    "Tiruvannamalai": {
      name: "Tiruvannamalai",
      tagline: "Abode of Fire Element & Ramana Maharshi",
      headquarters: "Tiruvannamalai",
      knownFor: "Annamalaiyar Temple (Agni Stalam), Karthigai Deepam festival, sacred Arunachala hill circumambulation (Girivalam).",
      famousSpot: "Arunachaleswarar Temple & Sri Ramanasramam",
    },
    "Salem": {
      name: "Salem",
      tagline: "Steel City & Sweetest Mangoes",
      headquarters: "Salem",
      knownFor: "Yercaud Shevaroy hill station, Salem steel plant, Malgoa mangoes, silver anklet jewelry.",
      famousSpot: "Yercaud Emerald Lake & Kiliyur Falls",
    },
    "Tirunelveli": {
      name: "Tirunelveli",
      tagline: "Land of Halwa & Nellaiappar Shrines",
      headquarters: "Tirunelveli",
      knownFor: "Nellaiappar Temple (musical pillars), melting wheat Tirunelveli Halwa, Thamirabarani river basin.",
      famousSpot: "Nellaiappar Temple & Iruttukadai Halwa",
    },
    "Vellore": {
      name: "Vellore",
      tagline: "Historic Granite Moat Fort & Golden Temple",
      headquarters: "Vellore",
      knownFor: "Vellore Fort (16th-century granite fort with moat), Sripuram Sri Lakshmi Narayani Golden Temple (1,500 kg gold).",
      famousSpot: "Vellore Fort & Sripuram Golden Temple",
    },
    "Dindigul": {
      name: "Dindigul",
      tagline: "Citadel of Locks & Kodaikanal Hills",
      headquarters: "Dindigul",
      knownFor: "Kodaikanal (Princess of Hill Stations), handmade brass locks, Thalappakatti Dum Biryani.",
      famousSpot: "Kodaikanal Lake & Pillar Rocks",
    },
    "Erode": {
      name: "Erode",
      tagline: "Turmeric City & Bhavani Sangam",
      headquarters: "Erode",
      knownFor: "Turmeric wholesale trading hub, Bhavani Sangameshwarar Temple (South Triveni Sangam), handloom fabrics.",
      famousSpot: "Bhavani Kooduthurai Sangam",
    },
    "Tiruppur": {
      name: "Tiruppur",
      tagline: "Knitwear Capital of India",
      headquarters: "Tiruppur",
      knownFor: "Contributes over 90% of India's cotton knitwear exports, Noyyal river valley, Avinashilingeswarar Temple.",
      famousSpot: "Avinashi Temple",
    },
    "Cuddalore": {
      name: "Cuddalore",
      tagline: "Port of Silver Beach & Chidambaram Nataraja",
      headquarters: "Cuddalore",
      knownFor: "Chidambaram Thillai Nataraja Temple (Cosmic Dance Akasha Stalam), Pichavaram Mangrove Forest (world's 2nd largest).",
      famousSpot: "Chidambaram Nataraja Temple & Pichavaram",
    },
    "Nagapattinam": {
      name: "Nagapattinam",
      tagline: "Harbour of Faiths & Velankanni Shrine",
      headquarters: "Nagapattinam",
      knownFor: "Basilica of Our Lady of Good Health (Velankanni), Nagore Dargah, historic Chola naval port.",
      famousSpot: "Velankanni Basilica & Nagore Dargah",
    },
    "Thiruvarur": {
      name: "Thiruvarur",
      tagline: "Trinity of Carnatic Music & Chariot Temple",
      headquarters: "Thiruvarur",
      knownFor: "Thyagaraja Temple (colossal temple car/chariot), birthplace of Carnatic Music Trinity (Thyagaraja, Muthuswami, Syama Sastri).",
      famousSpot: "Thyagaraja Temple Car & Kamalalayam Tank",
    },
    "Thoothukkudi": {
      name: "Thoothukkudi",
      tagline: "Pearl City & Port of Freedom (V.O.C.)",
      headquarters: "Thoothukudi",
      knownFor: "Historic pearl fishery, VO Chidambaranar major port, salt pans, Tuticorin Macaroon sweets.",
      famousSpot: "Hare Island & VOC Port",
    },
    "Karur": {
      name: "Karur",
      tagline: "Home Textiles Capital & Pasupatheeswarar",
      headquarters: "Karur",
      knownFor: "Export hub for home textiles, Pasupatheeswarar Temple, ancient Chera mint and jewelry history.",
      famousSpot: "Pasupatheeswarar Temple",
    },
    "Namakkal": {
      name: "Namakkal",
      tagline: "Poultry Capital & Monolithic Rock Fort",
      headquarters: "Namakkal",
      knownFor: "Namakkal Anjaneyar Temple (18-ft single stone Hanuman), rock fort atop single granite dome, egg exports.",
      famousSpot: "Namakkal Fort & Anjaneyar Temple",
    },
    "Dharmapuri": {
      name: "Dharmapuri",
      tagline: "Niagara of India — Hogenakkal Falls",
      headquarters: "Dharmapuri",
      knownFor: "Hogenakkal Waterfalls on the Kaveri river, coracle boat rides, carbonatite geological formations.",
      famousSpot: "Hogenakkal Waterfalls & Coracle Rides",
    },
    "Krishnagiri": {
      name: "Krishnagiri",
      tagline: "King of Mangoes & Hill Citadels",
      headquarters: "Krishnagiri",
      knownFor: "Krishnagiri Dam, Syed Basha Hills, commercial mango pulp processing.",
      famousSpot: "Krishnagiri Dam & Reservoir",
    },
    "Pudukkottai": {
      name: "Pudukkottai",
      tagline: "Princely State of Rock-Cut Cave Monasteries",
      headquarters: "Pudukkottai",
      knownFor: "Sittannavasal 2nd-century Jain rock-cut cave paintings, Kudumiyanmalai musical inscriptions, Thirumayam Fort.",
      famousSpot: "Sittannavasal Cave Paintings & Thirumayam",
    },
    "Sivaganga": {
      name: "Sivaganga",
      tagline: "Heritage Mansions of Chettinad & Rani Velu Nachiyar",
      headquarters: "Sivaganga",
      knownFor: "Chettinad royal heritage palatial mansions, Chettinad spicy cuisine, queen freedom fighter Velu Nachiyar.",
      famousSpot: "Kanadukathan Chettinad Palace",
    },
    "Virudhunagar": {
      name: "Virudhunagar",
      tagline: "Birthplace of Kamarajar & Srivilliputhur Andal",
      headquarters: "Virudhunagar",
      knownFor: "Srivilliputhur Andal Temple Gopuram (official emblem of Tamil Nadu government), Palkova sweet.",
      famousSpot: "Srivilliputhur Andal Temple Tower",
    },
    "Theni": {
      name: "Theni",
      tagline: "Cardamom Hills & Suruli Waterfalls",
      headquarters: "Theni",
      knownFor: "Suruli Falls, Meghamalai Highwavys cloud hills, spice plantations, Vaigai dam.",
      famousSpot: "Meghamalai Tea Estates & Suruli Falls",
    },
    "Ariyalur": {
      name: "Ariyalur",
      tagline: "Chola Capital of Gangaikonda Cholapuram",
      headquarters: "Ariyalur",
      knownFor: "Gangaikonda Cholapuram Temple (built by Rajendra Chola I, UNESCO), Cretaceous marine fossils.",
      famousSpot: "Gangaikonda Cholapuram (UNESCO)",
    },
    "Perambalur": {
      name: "Perambalur",
      tagline: "Fossil Woodlands & Ranjankudi Fort",
      headquarters: "Perambalur",
      knownFor: "Ranjankudi 17th-century stone fortress, prehistoric wood fossil park at Sathanur.",
      famousSpot: "Ranjankudi Fortress",
    },
    "Viluppuram": {
      name: "Viluppuram",
      tagline: "Troy of the East — Gingee Fort",
      headquarters: "Viluppuram",
      knownFor: "Gingee Fort (invincible hill fort defended across three precipitous hills, called 'Troy of the East' by Shivaji).",
      famousSpot: "Gingee Fort Citadel",
    },
    "Kallakurichi": {
      name: "Kallakurichi",
      tagline: "Kalvarayan Forest Hills & Wood Carving",
      headquarters: "Kallakurichi",
      knownFor: "Kalvarayan Hills, Periyar Falls, traditional temple wooden chariot carving guilds.",
      famousSpot: "Kalvarayan Hills & Gomukhi Dam",
    },
    "Ranipet": {
      name: "Ranipet",
      tagline: "Leather Capital & Palar Riverbank",
      headquarters: "Ranipet",
      knownFor: "Leather finishing and shoe manufacturing exports, historic clock tower, BHEL boiler auxiliary unit.",
      famousSpot: "Ratnagiri Murugan Temple",
    },
    "Tirupathur": {
      name: "Tirupathur",
      tagline: "Land of Yelagiri Hill Station & Vainu Bappu Observatory",
      headquarters: "Tirupathur",
      knownFor: "Yelagiri Hills, Vainu Bappu Astronomical Observatory (Asia's largest optical telescope), Jalagamparai Falls.",
      famousSpot: "Yelagiri Hills & Vainu Bappu Observatory",
    },
    "Chengalpattu": {
      name: "Chengalpattu",
      tagline: "Shore Temples of Mahabalipuram",
      headquarters: "Chengalpattu",
      knownFor: "Mamallapuram Shore Temple & Pancha Rathas (UNESCO), Vedanthangal Bird Sanctuary, Crocodile Bank.",
      famousSpot: "Mahabalipuram UNESCO Shore Temples",
    },
    "Thiruvallur": {
      name: "Thiruvallur",
      tagline: "Veeraraghava Perumal & Pulicat Lagoon",
      headquarters: "Tiruvallur",
      knownFor: "Sri Veeraraghava Swamy Temple, Pulicat Lake flamingo sanctuary, Poondi water reservoir.",
      famousSpot: "Veeraraghava Swamy Temple & Pulicat",
    },
    "Tenkasi": {
      name: "Tenkasi",
      tagline: "Kasi of the South & Courtallam Herbal Falls",
      headquarters: "Tenkasi",
      knownFor: "Courtallam medicinal waterfalls (Spa of South India), Kasi Viswanathar Temple with 180-ft gopuram.",
      famousSpot: "Courtallam Main Falls & Kasi Viswanathar",
    },
  },
  landmarks: [
    {
      id: "brihadeeswarar-temple",
      name: "Brihadeeswarar Temple (Big Temple)",
      district: "Thanjavur",
      lat: 10.7828,
      lon: 79.1318,
      category: "spiritual",
      description: "UNESCO World Heritage granite colossus built in 1010 CE by Emperor Raja Raja Chola I; its 216-foot vimana tower is capped by an 80-ton single granite stone dome.",
      image: "/images/landmarks/tamil-nadu/brihadeeswarar-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Thanjavur",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Brihadeeswarar Temple (Big Temple) in Thanjavur.",
      gallery: [
        {
                url: "/images/landmarks/tamil-nadu/brihadeeswarar-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Brihadeeswarar Temple (Big Temple) — Front elevation and iconic monumental facade in Thanjavur."
        },
        {
                url: "/images/landmarks/tamil-nadu/brihadeeswarar-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Brihadeeswarar Temple (Big Temple) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tamil-nadu/brihadeeswarar-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Brihadeeswarar Temple (Big Temple) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tamil-nadu/brihadeeswarar-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Brihadeeswarar Temple (Big Temple) — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "meenakshi-temple",
      name: "Meenakshi Sundareswarar Temple",
      district: "Madurai",
      lat: 9.9195,
      lon: 78.1193,
      category: "spiritual",
      description: "Architectural wonder of the world spanning 14 acres with 14 multi-tiered gopuram gateway towers encrusted with over 33,000 brightly painted stone sculptures.",
      image: "/images/landmarks/tamil-nadu/meenakshi-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Madurai",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Meenakshi Sundareswarar Temple in Madurai.",
      gallery: [
        {
                url: "/images/landmarks/tamil-nadu/meenakshi-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Meenakshi Sundareswarar Temple — Front elevation and iconic monumental facade in Madurai."
        },
        {
                url: "/images/landmarks/tamil-nadu/meenakshi-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Meenakshi Sundareswarar Temple — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tamil-nadu/meenakshi-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Meenakshi Sundareswarar Temple — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tamil-nadu/meenakshi-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Meenakshi Sundareswarar Temple — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "shore-temple",
      name: "Mahabalipuram Shore Temple & Rathas",
      district: "Chengalpattu",
      lat: 12.6163,
      lon: 80.1983,
      category: "monument",
      description: "7th-century rock-cut monolithic complex built by Pallava king Narasimhavarman II on the Coromandel coast, battling sea salt and tides for over 1,300 years.",
      image: "/images/landmarks/tamil-nadu/shore-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Chengalpattu",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Mahabalipuram Shore Temple & Rathas in Chengalpattu.",
      gallery: [
        {
                url: "/images/landmarks/tamil-nadu/shore-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Mahabalipuram Shore Temple & Rathas — Front elevation and iconic monumental facade in Chengalpattu."
        },
        {
                url: "/images/landmarks/tamil-nadu/shore-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Mahabalipuram Shore Temple & Rathas — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tamil-nadu/shore-temple_angle4.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Mahabalipuram Shore Temple & Rathas — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tamil-nadu/shore-temple_angle1.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Mahabalipuram Shore Temple & Rathas — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "vivekananda-rock",
      name: "Vivekananda Rock Memorial & Thiruvalluvar Statue",
      district: "Kanyakumari",
      lat: 8.0781,
      lon: 77.5555,
      category: "monument",
      description: "Perched on twin ocean rocks where the Indian Ocean, Arabian Sea, and Bay of Bengal converge, alongside the colossal 133-foot stone statue of Tamil sage Thiruvalluvar.",
      image: "/images/landmarks/tamil-nadu/vivekananda-rock_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Kanyakumari",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Vivekananda Rock Memorial & Thiruvalluvar Statue in Kanyakumari.",
      gallery: [
        {
                url: "/images/landmarks/tamil-nadu/vivekananda-rock_angle1.jpg",
                angle: "Front Elevation",
                caption: "Vivekananda Rock Memorial & Thiruvalluvar Statue — Front elevation and iconic monumental facade in Kanyakumari."
        },
        {
                url: "/images/landmarks/tamil-nadu/vivekananda-rock_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Vivekananda Rock Memorial & Thiruvalluvar Statue — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tamil-nadu/vivekananda-rock_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Vivekananda Rock Memorial & Thiruvalluvar Statue — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tamil-nadu/vivekananda-rock_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Vivekananda Rock Memorial & Thiruvalluvar Statue — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "srirangam-temple",
      name: "Sri Ranganathaswamy Temple Srirangam",
      district: "Tiruchirappalli",
      lat: 10.8622,
      lon: 78.6901,
      category: "spiritual",
      description: "Largest functioning Hindu temple complex on Earth (156 acres enclosed within 7 concentric enclosures and 21 majestic gopurams).",
      image: "/images/landmarks/tamil-nadu/srirangam-temple_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Tiruchirappalli",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Sri Ranganathaswamy Temple Srirangam in Tiruchirappalli.",
      gallery: [
        {
                url: "/images/landmarks/tamil-nadu/srirangam-temple_angle1.jpg",
                angle: "Front Elevation",
                caption: "Sri Ranganathaswamy Temple Srirangam — Front elevation and iconic monumental facade in Tiruchirappalli."
        },
        {
                url: "/images/landmarks/tamil-nadu/srirangam-temple_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Sri Ranganathaswamy Temple Srirangam — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tamil-nadu/srirangam-temple_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Sri Ranganathaswamy Temple Srirangam — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tamil-nadu/srirangam-temple_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Sri Ranganathaswamy Temple Srirangam — Radiant sunset and evening twilight ambiance."
        }
]
    },
    {
      id: "gingee-fort",
      name: "Gingee Fort (Troy of the East)",
      district: "Viluppuram",
      lat: 12.2541,
      lon: 79.4187,
      category: "monument",
      description: "A formidable fortress complex spread across three steep hills (Rajagiri, Krishnagiri, Chandrayandurg), deemed by Chhatrapati Shivaji as the most impregnable fort in India.",
      image: "/images/landmarks/tamil-nadu/gingee-fort_angle1.jpg",
      era: "Historical & Living Heritage Epoch",
      builtBy: "Historic Architects & Patrons of Viluppuram",
      architecturalStyle: "Classical Heritage Indian Architecture",
      significance: "Iconic historic landmark of Gingee Fort (Troy of the East) in Viluppuram.",
      gallery: [
        {
                url: "/images/landmarks/tamil-nadu/gingee-fort_angle1.jpg",
                angle: "Front Elevation",
                caption: "Gingee Fort (Troy of the East) — Front elevation and iconic monumental facade in Viluppuram."
        },
        {
                url: "/images/landmarks/tamil-nadu/gingee-fort_angle2.jpg",
                angle: "Aerial & Panoramic View",
                caption: "Gingee Fort (Troy of the East) — Broad panoramic context and surrounding heritage grounds."
        },
        {
                url: "/images/landmarks/tamil-nadu/gingee-fort_angle3.jpg",
                angle: "Architectural Relief & Carvings",
                caption: "Gingee Fort (Troy of the East) — Intricate architectural motifs, craftsmanship, and historic stone masonry."
        },
        {
                url: "/images/landmarks/tamil-nadu/gingee-fort_angle4.jpg",
                angle: "Golden Hour & Sunset",
                caption: "Gingee Fort (Troy of the East) — Radiant sunset and evening twilight ambiance."
        }
]
    }
  ],
  cuisines: [
    {
      name: "Masala Dosa & Sambar",
      hindiName: "मसाला डोसा और सांभर",
      tag: "Global Breakfast Phenomenon",
      description:
        "Crispy, golden fermented crepe made from stone-ground rice and urad dal batter, filled with gently spiced potato masala, accompanied by piping hot vegetable sambar and fresh coconut and tomato chutneys.",
      image: "/images/tamilnadu/idli_dosa_sambar.jpg",
      origin: "Tamil & Udupi culinary convergence",
      ingredients: ["Fermented rice & dal batter", "Potatoes", "Mustard seeds", "Curry leaves", "Tamarind sambar"],
    },
    {
      name: "Chettinad Pepper Chicken / Mushroom",
      hindiName: "चेट्टीनाड चिकन",
      tag: "Explosion of Freshly Roasted Spices",
      description:
        "The fiery signature curry of the merchant Chettiar community, prepared by slow-roasting whole spices (star anise, kalpasi/stone flower, black peppercorns, marathi mokku) in cold-pressed sesame oil.",
      image: "/images/tamilnadu/chettinad_cuisine.jpg",
      origin: "Chettinad region (Karaikudi)",
      ingredients: ["Black peppercorns", "Kalpasi (stone flower)", "Star anise", "Shallots", "Curry leaves"],
    },
    {
      name: "Ven Pongal",
      hindiName: "वेन पोंगल",
      tag: "Sacred Temple Comfort Dish",
      description:
        "Gently mashed rice and yellow moong dal cooked to buttery consistency, tempered luxuriously in pure desi ghee with whole black peppercorns, cumin seeds, fresh ginger, and golden fried cashews.",
      image: "/images/tamilnadu/pongal_dish.jpg",
      origin: "Tamil Nadu Temple Prasadam tradition",
      ingredients: ["Raw rice", "Moong dal", "Desi ghee", "Whole black pepper", "Cumin & Cashews"],
    },
    {
      name: "South Indian Degree Filter Coffee",
      hindiName: "फ़िल्टर कॉफ़ी",
      tag: "Morning Awakening of Tamil Nadu",
      description:
        "Dark, aromatic decoction brewed in a traditional brass metal drip filter using roasted chicory-blended coffee beans, poured back and forth from height into a brass Davarah-tumbler until crowned with golden velvet froth.",
      image: "/images/tamilnadu/filter_coffee.jpg",
      origin: "Kumbakonam & Madras",
      ingredients: ["Plantation coffee beans", "Chicory", "Full cream boiled milk", "Sugar", "Brass tumbler"],
    },
    {
      name: "Madurai Jigarthanda",
      hindiName: "जिगरठंडा",
      tag: "Royal Cooling Nectar of Madurai",
      description:
        "Literally meaning 'Heart Cooler', this thick royal dessert beverage blends reduced caramelized milk (basundi), natural almond gum (badam pisin), nannari root syrup, and rich local ice cream.",
      image: "/images/tamilnadu/jigarthanda.jpg",
      origin: "Madurai Nayakkar court",
      ingredients: ["Badam pisin (almond resin)", "Reduced milk basundi", "Nannari syrup", "Vanilla ice cream"],
    },
  ],
  traditions: [
    {
      title: "Bharatanatyam Classical Dance",
      category: "Ancient Temple Dance Drama",
      period: "Natya Shastra (2nd Century BCE)",
      description:
        "The oldest classical dance tradition in India, characterized by geometric fixed upper torso posture, bent knees (Aramandi), sophisticated footwork rhythms (Tattukazhi), and expressive storytelling through mudras and abhinaya.",
      image: "/images/tamilnadu/bharatanatyam.jpg",
      highlights: ["Oldest classical dance tradition", "Vibrant silk temple costume with fan pleats", "Nattuvangam rhythm and Carnatic vocal accompaniment"],
    },
    {
      title: "Tanjore Gold Leaf Painting",
      category: "Classical Royal Painting Art",
      period: "16th Century (Maratha & Nayak Courts)",
      description:
        "Celebrated for dense composition, surface richness, and vibrant colors, Tanjore paintings use 22-carat pure gold foil and semi-precious stones embedded on gesso relief work over sacred wooden panels.",
      image: "/images/tamilnadu/tanjore_painting.jpg",
      highlights: ["Pure 22-carat gold leaf embellishment", "Three-dimensional relief gesso work", "Depictions of Lord Krishna and Hindu deities"],
    },
    {
      title: "Jallikattu & Pongal Festival",
      category: "Ancient Bull-Embracing Tradition",
      period: "Over 2,000 Years Old (Sangam Literature)",
      description:
        "Practiced during the Thai Pongal harvest festival, brave youths attempt to embrace the hump of ferocious indigenous Kangayam bulls as they sprint through arena gates, preserving ancient pastoral breeds.",
      image: "/images/tamilnadu/jallikattu.jpg",
      highlights: ["Depicted in Neolithic cave art and Sangam poetry", "Celebrates indigenous Bos indicus cattle breeds", "Held in Alanganallur and Palamedu"],
    },
  ],
  attires: [
    {
      name: "Kanchipuram Silk Saree (Kanjivaram)",
      type: "Queen of South Indian Silk Sarees",
      description:
        "Woven from pure mulberry silk yarn and heavy gold zari made in Gujarat, where the pallu and border are woven separately and joined with invisible interlocking technique (Korvai).",
      image: "/images/tamilnadu/kanchipuram_silk.jpg",
      specialty: "GI-tagged heritage textile of Kanchipuram master weavers.",
    },
    {
      name: "Veshti & Angavastram",
      type: "Men's Classical Temple Attire",
      description:
        "A crisp white or ivory unstitched cotton or silk fabric with a rich gold zari border (Mayilkan / Peacock eye border) draped around the waist, paired with an Angavastram cloth draped over the shoulder.",
      image: "/images/tamilnadu/veshti_angavastram.jpg",
      specialty: "Standard ceremonial dress for weddings, festivals, and classical concerts.",
    },
    {
      name: "Madurai Sungudi Saree",
      type: "Traditional Tie-and-Dye Cotton",
      description:
        "Traditional hand-knotted dotted cotton saree crafted by the Saurashtrian weaver community that migrated to Madurai during the Nayak kings' reign, dyed using natural colors with zari borders.",
      image: "/images/tamilnadu/madurai_sungudi.jpg",
      specialty: "Lightweight, breathable cotton designed for temple heat.",
    },
  ],
  monuments: [
    {
      name: "Brihadeeswarar Temple (Peruvudaiyar Kovil)",
      location: "Thanjavur",
      era: "1010 CE (Emperor Raja Raja Chola I)",
      unesco: true,
      description:
        "Built entirely of hard interlocking granite blocks without mortar, this 1,000-year-old architectural marvel's 66-meter high vimana tower is crowned by a colossal 80-tonne granite octagonal kumbam.",
      image: "/images/tamilnadu/brihadeeswarar_temple.jpg",
      significance: "Peak masterpiece of Dravidian Chola stone architecture and UNESCO World Heritage.",
    },
    {
      name: "Meenakshi Amman Temple",
      location: "Madurai",
      era: "1623 – 1655 CE (Thirumalai Nayak era)",
      unesco: false,
      description:
        "Sacred heart of the ancient concentric city of Madurai, housing 14 breathtaking gopurams reaching up to 170 feet, the Hall of Thousand Pillars, and the sacred Golden Lotus tank (Porthamarai Kulam).",
      image: "/images/tamilnadu/meenakshi_temple.jpg",
      significance: "One of the most complex and bustling living temple cities in the world.",
    },
    {
      name: "Mahabalipuram Shore Temple",
      location: "Mamallapuram, Chengalpattu",
      era: "700 – 728 CE (Narasimhavarman II, Pallava)",
      unesco: true,
      description:
        "A five-story structural stone temple overlooking the Bay of Bengal, built to capture the first rays of the rising sun over the ocean, surviving centuries of monsoons and the 2004 tsunami intact.",
      image: "/images/tamilnadu/shore_temple.jpg",
      significance: "Oldest structural stone temple in South India.",
    },
    {
      name: "Vivekananda Rock Memorial",
      location: "Kanyakumari",
      era: "1970 CE (Architect Eknath Ranade)",
      unesco: false,
      description:
        "Erected on a sacred rock island 500 meters offshore where Swami Vivekananda attained enlightenment during three days of deep meditation in December 1892 before his journey to the West.",
      image: "/images/tamilnadu/vivekananda_rock.jpg",
      significance: "Spiritual beacon at the southernmost tip of mainland India.",
    },
  ],
  languages: [
    {
      name: "Tamil (தமிழ்)",
      script: "Tamil Script (derived from Tamil-Brahmi)",
      speakers: "75+ Million (India, Sri Lanka, Singapore, Malaysia)",
      greeting: "Vanakkam (வணக்கம்)",
      meaning: "I fold my hands in reverence to the divinity within you",
      description:
        "First language to be declared a Classical Language of India (2004), Tamil boasts an unbroken literary tradition spanning over 2,500 years from the ancient Sangam poetry anthologies to the modern day.",
    },
    {
      name: "Kongu Tamil",
      script: "Tamil Script",
      speakers: "12+ Million (Coimbatore, Erode, Salem)",
      greeting: "Vanakkamunga (வணக்கமுங்க)",
      meaning: "Courteous, affectionate honorific greeting",
      description:
        "Spoken in the western Kongu Nadu plateau, famous for its polite trailing suffix '-nga' and distinctive archaic vocabulary preserved from Sangam literature.",
    },
    {
      name: "Madurai Tamil",
      script: "Tamil Script",
      speakers: "10+ Million (Southern districts)",
      greeting: "Enna Pa? / Vanakkam",
      meaning: "Warm, energetic fraternal address",
      description:
        "Lively, fast-paced colloquial dialect of the southern heartland, immortalized in modern Tamil cinema and celebrated for rapid-fire wit and cadence.",
    },
  ],
  luminaries: [
    {
      name: "Thiruvalluvar",
      image: "/images/luminaries/thiruvalluvar.jpg",
      era: "circa 4th – 5th Century BCE / CE",
      title: "Supreme Poet-Philosopher of the Thirukkural",
      contribution:
        "Author of the Thirukkural—1,330 couplets categorized into Virtue (Aram), Wealth (Porul), and Love (Inbam)—one of the most widely translated non-religious philosophical ethical treatises in human history.",
    },
    {
      name: "Dr. A.P.J. Abdul Kalam",
      image: "/images/luminaries/dr_a_p_j_abdul_kalam.jpg",
      era: "1931 – 2015 CE",
      title: "The Missile Man & 11th President of India",
      contribution:
        "Born in Rameswaram, brilliant aerospace scientist who led India's civilian space rocket and ballistic missile programs (SLV-III, Agni, Prithvi), affectionately known as the 'People's President'.",
    },
    {
      name: "Sir C.V. Raman",
      image: "/images/luminaries/sir_c_v_raman.jpg",
      era: "1888 – 1970 CE",
      title: "First Asian Nobel Laureate in Science",
      contribution:
        "Born in Tiruchirappalli, Raman discovered that light changes wavelength when passing through a transparent material (Raman Scattering / Raman Effect), winning the 1930 Nobel Prize in Physics.",
    },
  ],
}
