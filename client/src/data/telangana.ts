import type { StateData } from "../types/state"

export const telanganaData: StateData = {
  id: "telangana",
  name: "Telangana",
  hindiName: "तेलंगाना",
  capital: "Hyderabad",
  tagline: "Land of Kakatiya Glory, Cyberabad Innovation & Deccan Royalty",
  overview:
    "Steeped in the medieval valor of the Kakatiya dynasty and the regal elegance of the Qutb Shahi and Asaf Jahi Nizams, Telangana is a vibrant crossroads of cultures. From the four minarets of Charminar and the acoustic brilliance of Golconda Fort to the UNESCO World Heritage Ramappa Temple, world-famous Hyderabadi Biryani, and the colorful floral festival of Bathukamma, Telangana harmonizes historic grandeur with 21st-century tech leadership.",
  ancientNames: ["Trilinga Desa", "Telingana", "Kakatiya Kingdom", "Hyderabad State"],
  keyStats: [
    { label: "Districts", value: "33" },
    { label: "Capital", value: "Hyderabad (City of Pearls & Cyberabad)" },
    { label: "Major Rivers", value: "Godavari, Krishna, Musi, Manjira" },
    { label: "UNESCO Monument", value: "Ramappa Temple (Kakatiya Rudreshwara)" },
    { label: "Floral Festival", value: "Bathukamma (Celebration of Mother Earth)" },
    { label: "World-Renowned Cuisine", value: "Hyderabadi Dum Biryani & Haleem" },
  ],
  quote: {
    text: "Telangana is where ancient granite citadels embrace the future, and every blossom during Bathukamma weaves a tapestry of unity and reverence for nature.",
    author: "Spirit of the Deccan Plateau",
  },
  districts: {
    "Hyderabad": {
      name: "Hyderabad",
      tagline: "City of Pearls, Charminar & High-Tech Cyberabad",
      headquarters: "Hyderabad",
      knownFor: "Charminar, Golconda Fort, Chowmahalla Palace, Salar Jung Museum, HITEC City tech corridor.",
      famousSpot: "Charminar & Golconda Fort",
    },
    "Warangal": {
      name: "Warangal",
      tagline: "Capital of Kakatiya Valor & Thousand Pillar Temple",
      headquarters: "Warangal",
      knownFor: "Warangal Fort (Kakatiya Thoranam gateway), Thousand Pillar Temple, Bhadrakali Temple, Laknavaram Lake.",
      famousSpot: "Thousand Pillar Temple & Warangal Fort",
    },
    "Mulugu": {
      name: "Mulugu",
      tagline: "Home of UNESCO Ramappa Temple & Medaram Jathara",
      headquarters: "Mulugu",
      knownFor: "Ramappa Temple (floating bricks architecture), Sammakka Saralamma Jathara (largest tribal gathering in Asia).",
      famousSpot: "Ramappa Temple & Medaram Jathara",
    },
    "Nalgonda": {
      name: "Nalgonda",
      tagline: "Historic Citadels & Nagarjuna Sagar Dam",
      headquarters: "Nalgonda",
      knownFor: "Nagarjuna Sagar Dam, Nagarjunakonda Buddhist island museum, Bhongir monolithic rock fort.",
      famousSpot: "Nagarjuna Sagar & Bhongir Fort",
    },
    "Yadadri Bhuvanagiri": {
      name: "Yadadri Bhuvanagiri",
      tagline: "Abode of Lord Lakshmi Narasimha & Bhongir Rock",
      headquarters: "Bhuvanagiri",
      knownFor: "Yadagirigutta Sri Lakshmi Narasimha Swamy Temple, Bhongir monolithic fortress, Pochampally handlooms.",
      famousSpot: "Yadadri Temple & Pochampally Village",
    },
    "Karimnagar": {
      name: "Karimnagar",
      tagline: "City of Silver Filigree & Lower Manair Dam",
      headquarters: "Karimnagar",
      knownFor: "Silver filigree handicrafts, Elgandal Fort, Lower Manair Dam, Kondagattu Anjaneya Temple.",
      famousSpot: "Elgandal Fort & Silver Filigree Center",
    },
    "Nizamabad": {
      name: "Nizamabad",
      tagline: "Land of Ashok Sagar & Ancient Fortresses",
      headquarters: "Nizamabad",
      knownFor: "Nizamabad Fort, Ashok Sagar lake, Alisagar deer park, Armoor natural rock formations.",
      famousSpot: "Nizamabad Fort & Ashok Sagar",
    },
    "Khammam": {
      name: "Khammam",
      tagline: "Gateway to Bhadrachalam Sri Sita Ramachandra",
      headquarters: "Khammam",
      knownFor: "Khammam Fort on Stambhadri hill, Palair lake, Kinnersani wildlife sanctuary, coal mining belt.",
      famousSpot: "Khammam Fort & Kinnersani",
    },
  },
  landmarks: [
    {
      id: "charminar",
      name: "The Charminar",
      district: "Hyderabad",
      lat: 17.3616,
      lon: 78.4747,
      category: "monument",
      description: "Iconic 16th-century monument and mosque built by Sultan Muhammad Quli Qutb Shah in 1591 to commemorate the eradication of a plague epidemic, featuring four grand triumphal arches and soaring 56-meter-high minarets overlooking bustling bazaars.",
    },
    {
      id: "golconda-fort",
      name: "Golconda Fortress",
      district: "Hyderabad",
      lat: 17.3833,
      lon: 78.4011,
      category: "monument",
      description: "Colossal fortified granite citadel famous for its ingenious acoustic engineering where a hand-clap at the Fateh Darwaza entrance can be heard distinctly a kilometer away at the hilltop Bala Hissar pavilion, and as the vault of legendary diamonds including the Koh-i-Noor and Hope Diamond.",
    },
    {
      id: "ramappa-temple",
      name: "Kakatiya Rudreshwara (Ramappa) Temple",
      district: "Mulugu",
      lat: 18.2657,
      lon: 79.9431,
      category: "spiritual",
      description: "UNESCO World Heritage 13th-century temple engineered with lightweight 'floating bricks' that float on water, resting on a sandbox foundation that has withstood major earthquakes, embellished with exquisite dancing bracket figures carved from dark polished dolerite.",
    },
    {
      id: "chowmahalla-palace",
      name: "Chowmahalla Palace",
      district: "Hyderabad",
      lat: 17.3578,
      lon: 78.4716,
      category: "monument",
      description: "The opulent official residence of the Asaf Jahi Nizams of Hyderabad, featuring neoclassical European courtyards, the grand Khilwat Mubarak durbar hall crowned by 19 Belgian crystal chandeliers, and vintage royal carriage collections.",
    },
    {
      id: "thousand-pillar-temple",
      name: "Thousand Pillar Temple of Hanamkonda",
      district: "Hanamkonda",
      lat: 18.0163,
      lon: 79.5445,
      category: "spiritual",
      description: "Star-shaped trikuta architectural triumph built by Kakatiya King Rudra Deva in 1163 CE dedicated to Shiva, Vishnu, and Surya, containing 1,000 richly carved stone pillars positioned so none blocks the view of the deities from any angle.",
    },
    {
      id: "bhongir-fort",
      name: "Bhongir Monolithic Hill Fort",
      district: "Yadadri Bhuvanagiri",
      lat: 17.5117,
      lon: 78.8892,
      category: "monument",
      description: "An isolated, smooth, egg-shaped monolithic rock rising 500 feet above the surrounding plain, crowned by an impenetrable medieval fort built in the 10th century by Western Chalukya ruler Tribhuvanamalla Vikramaditya VI.",
    },
  ],
  cuisines: [
    {
      name: "Hyderabadi Dum Biryani",
      hindiName: "हैदराबादी दम बिरयानी",
      tag: "The Crown Jewel of Indian Gastronomy",
      description:
        "World-renowned royal masterpiece where tender spiced meat and long-grain fragrant basmati rice are layered raw (Kachchi Biryani), sealed inside a heavy vessel with dough, and slow-cooked over smoldering coals with saffron and mint.",
      origin: "Royal Kitchens of the Nizams, Hyderabad",
      image: "/images/telangana/hyderabadi_biryani.jpg",
      dietary: "non-veg",
    },
    {
      name: "Hyderabadi Haleem",
      hindiName: "हैदराबादी हलीम",
      tag: "GI-Tagged Royal Stew of Ramadan",
      description:
        "Rich, velvety porridge of minced mutton, broken wheat, lentils, and fragrant spices slow-cooked and pounded continuously for over 12 hours in traditional wood-fired cauldrons (Bhatti), crowned with fried onions and lemon.",
      origin: "Hyderabad (Arabian & Nizami heritage)",
      image: "/images/telangana/hyderabadi_haleem.jpg",
      dietary: "non-veg",
    },
    {
      name: "Mirchi Ka Salan",
      hindiName: "मिर्ची का सालन",
      tag: "Essential Tangy Accompaniment to Biryani",
      description:
        "Spicy Bhavnagri green chilies simmered in a velvety, nutty curry crafted from roasted peanuts, sesame seeds, desiccated coconut, tamarind paste, and fragrant spices.",
      origin: "Deccani Royal Banquets, Hyderabad",
      image: "/images/telangana/mirchi_ka_salan.jpg",
      dietary: "veg",
    },
    {
      name: "Sakinalu",
      hindiName: "सकीनालु",
      tag: "Traditional Concentric Festive Crunch",
      description:
        "Crisp spiral-ring snacks made from fresh rice flour, carom seeds (ajwain), and sesame seeds, meticulously piped by hand in concentric rings and deep-fried golden during the Makar Sankranti harvest festival.",
      origin: "Rural Telangana (Warangal & Karimnagar)",
      image: "/images/telangana/sakinalu.jpg",
      dietary: "veg",
    },
    {
      name: "Double Ka Meetha",
      hindiName: "डबल का मीठा",
      tag: "Decadent Bread Pudding of the Nizams",
      description:
        "Fried bread slices (called double roti) soaked in condensed milk infused with saffron, cardamom, and kewra water, generously studded with cashews, almonds, and pistachios.",
      origin: "Royal Court of Hyderabad",
      image: "/images/telangana/double_ka_meetha.jpg",
      dietary: "veg",
    },
  ],
  traditions: [
    {
      name: "Bathukamma Floral Festival",
      type: "festival",
      description:
        "Telangana's grand state festival celebrated by women during Navratri, where seasonal wild flowers like Gunugu, Tangedu, and Marigold are arranged meticulously in tiered conical mounds representing Goddess Gauri, accompanied by circular folk dances and melodic folk songs.",
      significance:
        "Unique celebration of women's kinship, feminine divinity, and ecological gratitude for seasonal flora.",
      image: "/images/telangana/bathukamma_festival.jpg",
    },
    {
      name: "Bonalu Thanksgiving Festival",
      type: "festival",
      description:
        "Vibrant annual thanksgiving festival celebrated in the Telugu month of Ashada in Hyderabad and Secunderabad, where women carry brass or earthen pots (Bonam) filled with cooked rice, curd, and jaggery balanced on their heads to worship Goddess Mahakali.",
      significance:
        "Centuries-old folk ritual expressing gratitude to the Mother Goddess for protecting the city from epidemics.",
      image: "/images/telangana/bonalu_festival.jpg",
    },
    {
      name: "Perini Sivatandavam Martial Dance",
      type: "dance",
      description:
        "Ancient warrior dance form of Telangana that flourished during the Kakatiya dynasty, performed by male dancers to vigorous rhythms of drums and conches before soldiers departed for the battlefield to invoke the warrior spirit of Lord Shiva.",
      significance:
        "Revived classical martial dance tradition documented in the 13th-century treatise Nritta Ratnavali.",
      image: "/images/telangana/perini_dance.jpg",
    },
  ],
  attires: [
    {
      name: "Pochampally Ikat Silk Saree",
      gender: "women",
      fabric: "Silk with Double Ikat Tie-and-Dye Weaving",
      description:
        "World-renowned handloom textile originating from Bhoodan Pochampally, featuring intricate geometric patterns achieved through the complex Double Ikat technique where both warp and weft threads are dyed prior to weaving on pit looms.",
      occasions: "Weddings, state banquets, and high-profile international cultural events.",
      image: "/images/telangana/pochampally_saree.jpg",
    },
    {
      name: "Gadwal Saree",
      gender: "women",
      fabric: "Fine Cotton Body with Contrast Pure Silk Zari Borders",
      description:
        "Distinctive handcrafted sarees from Gadwal featuring a light, breathable cotton body interlocked seamlessly with heavy mulberry silk borders and gold zari pallu using the ancient Kupadam interlocking technique.",
      occasions: "Festive ceremonies, pujas, and formal receptions.",
      image: "/images/telangana/gadwal_saree.jpg",
    },
    {
      name: "Hyderabadi Sherwani & Dastar",
      gender: "men",
      fabric: "Fine Raw Silk, Brocade, or Jamawar",
      description:
        "Regal long coat tailored to perfection with mandarin collar and ornate covered buttons, worn over churidar trousers and paired with a traditional Dastar (turban) or Jinnah cap, embodying the timeless aristocratic Tehzeeb of Hyderabad.",
      occasions: "Nizami weddings, formal receptions, and royal festivities.",
      image: "/images/telangana/hyderabadi_sherwani.jpg",
    },
  ],
  monuments: [
    {
      name: "The Charminar",
      location: "Old City, Hyderabad",
      era: "1591 CE (Qutb Shahi Dynasty)",
      unesco: false,
      description:
        "A square granite structure with four grand arches facing the cardinal directions, featuring an open upper gallery and 45 prayer spaces in its historic upper-level mosque, serving as the immortal symbol of Hyderabad.",
      image: "/images/telangana/charminar.jpg",
      significance: "Global visual landmark of Hyderabad and supreme Qutb Shahi architecture.",
    },
    {
      name: "Golconda Fort Citadel",
      location: "Western Hyderabad",
      era: "13th – 16th Century CE",
      unesco: false,
      description:
        "Massive medieval fortified complex sprawling over 11 kilometers of outer wall, containing royal palaces, mosques, armories, and ingenious secret underground tunnels leading to Charminar.",
      image: "/images/telangana/golconda_fort.jpg",
      significance: "Premier diamond trading center of the medieval world and impenetrable fortress.",
    },
    {
      name: "Ramappa Temple",
      location: "Palampet, Mulugu District",
      era: "1213 CE (Recherla Rudra / Kakatiya Dynasty)",
      unesco: true,
      description:
        "The only temple in India named after its master sculptor Ramappa rather than the presiding deity, standing upon a 6-foot star-shaped platform with intricately sculpted brackets of celestial dancers.",
      image: "/images/telangana/ramappa_temple.jpg",
      significance: "UNESCO World Heritage Site acclaimed for medieval structural and aesthetic genius.",
    },
    {
      name: "Chowmahalla Palace",
      location: "Near Charminar, Hyderabad",
      era: "1750 – 1869 CE (Asaf Jahi Dynasty)",
      unesco: false,
      description:
        "Magnificent palace complex synthesized from Persian, Rajasthani, and European neoclassical styles, boasting the Takht-e-Nishan (pure marble royal throne) and majestic council chambers.",
      image: "/images/telangana/chowmahalla_palace.jpg",
      significance: "Seat of the Asaf Jahi dynasty and pinnacle of royal Deccan lifestyle.",
    },
  ],
  languages: [
    {
      name: "Telugu (Telangana Dialect)",
      script: "Telugu Script",
      speakers: "38+ Million",
      greeting: "Namaste / Namaskaram (నమస్కారం)",
      meaning: "Respectful greetings to you",
      description:
        "Telangana Telugu carries an earthy, poetic rhythm enriched with Deccani and Urdu loanwords, celebrated in the revolutionary poetry of Kaloji Narayana Rao and Dasarathi Krishnamacharyulu.",
    },
    {
      name: "Hyderabadi Urdu (Dakhini)",
      script: "Perso-Arabic Script",
      speakers: "12+ Million (Hyderabad & Deccan)",
      greeting: "Aadaab / Assalamu Alaikum (آداب)",
      meaning: "Respectful salutations of peace and courtesy",
      description:
        "Historic medieval lingua franca that evolved through the confluence of Persian, Turkish, Marathi, and Telugu, renowned for its warmth, polite humor, and vibrant literary ghazals.",
    },
  ],
  luminaries: [
    {
      name: "Rani Rudrama Devi",
      era: "1259 – 1289 CE",
      title: "Warrior Empress of the Kakatiya Dynasty",
      contribution:
        "One of the few sovereign ruling queens in Indian history, who donned male warrior attire, led armies personally into battle, completed the mighty Warangal Fort, and was praised by Venetian traveler Marco Polo for her courage and justice.",
    },
    {
      name: "Muhammad Quli Qutb Shah",
      era: "1565 – 1612 CE",
      title: "Fifth Sultan of Golconda & Founder of Hyderabad",
      contribution:
        "Scholar-monarch who laid the foundations of Hyderabad in 1591, built the Charminar, wrote poetry in early Urdu (Dakhini), Persian, and Telugu, and fostered syncretic harmony between Hindu and Muslim communities.",
    },
    {
      name: "Kaloji Narayana Rao",
      era: "1914 – 2002 CE",
      title: "Praja Kavi (People's Poet) & Freedom Fighter",
      contribution:
        "Renowned humanist poet and activist who used his verse as a rallying cry against feudal oppression and for the cultural self-respect and statehood of the people of Telangana.",
    },
  ],
}
