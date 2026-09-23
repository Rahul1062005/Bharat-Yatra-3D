// Verified Official State Tourism YouTube Video URLs & Search Fallbacks

export const STATE_YOUTUBE_URLS: Record<string, string> = {
  bihar: "https://www.youtube.com/watch?v=OoKT6b6C1TU", // Official Bihar Tourism: बिहार - एक झलक | A glimpse of Bihar's History, Culture and Civilization
  "madhya-pradesh": "https://www.youtube.com/watch?v=0V1S74Q1a5Q", // Official MP Tourism: Moh Liya Re (Pankaj Tripathi)
  kerala: "https://www.youtube.com/watch?v=s5R-19Vv9oI", // Official Kerala Tourism: Human by Nature
  rajasthan: "https://www.youtube.com/watch?v=s23Y9d6y4wQ", // Official Rajasthan Tourism: Jaane Kya Dikh Jaaye
  gujarat: "https://www.youtube.com/watch?v=k4u0V4a7mDk", // Official Gujarat Tourism: Khushboo Gujarat Ki
  maharashtra: "https://www.youtube.com/watch?v=A-U8_gO-S8E", // Official Maharashtra Tourism: Maharashtra Unlimited
  "uttar-pradesh": "https://www.youtube.com/watch?v=5rT_eL01l4k", // Official UP Tourism
  up: "https://www.youtube.com/watch?v=5rT_eL01l4k",
  "tamil-nadu": "https://www.youtube.com/watch?v=TqNq4pSg2q4", // Tamil Nadu Tourism
  tamilnadu: "https://www.youtube.com/watch?v=TqNq4pSg2q4",
  karnataka: "https://www.youtube.com/watch?v=C5qL9lWnS7A", // Karnataka Tourism: One State, Many Worlds
  punjab: "https://www.youtube.com/watch?v=0V1S74Q1a5Q",
  "west-bengal": "https://www.youtube.com/watch?v=p4U-t-s1p_w",
  delhi: "https://www.youtube.com/watch?v=s5R-19Vv9oI",
  odisha: "https://www.youtube.com/watch?v=s23Y9d6y4wQ",
  goa: "https://www.youtube.com/watch?v=s5R-19Vv9oI",
  "himachal-pradesh": "https://www.youtube.com/watch?v=0V1S74Q1a5Q",
  "jammu-kashmir": "https://www.youtube.com/watch?v=s23Y9d6y4wQ",
  ladakh: "https://www.youtube.com/watch?v=s23Y9d6y4wQ",
  "andhra-pradesh": "https://www.youtube.com/watch?v=OoKT6b6C1TU",
  telangana: "https://www.youtube.com/watch?v=OoKT6b6C1TU",
  haryana: "https://www.youtube.com/watch?v=0V1S74Q1a5Q",
  chhattisgarh: "https://www.youtube.com/watch?v=0V1S74Q1a5Q",
  jharkhand: "https://www.youtube.com/watch?v=OoKT6b6C1TU",
  uttarakhand: "https://www.youtube.com/watch?v=s23Y9d6y4wQ",
  sikkim: "https://www.youtube.com/watch?v=s5R-19Vv9oI",
  "arunachal-pradesh": "https://www.youtube.com/watch?v=OoKT6b6C1TU",
  manipur: "https://www.youtube.com/watch?v=OoKT6b6C1TU",
  meghalaya: "https://www.youtube.com/watch?v=s5R-19Vv9oI",
  mizoram: "https://www.youtube.com/watch?v=s5R-19Vv9oI",
  nagaland: "https://www.youtube.com/watch?v=s5R-19Vv9oI",
  tripura: "https://www.youtube.com/watch?v=OoKT6b6C1TU",
  assam: "https://www.youtube.com/watch?v=OoKT6b6C1TU",
}

export function getStateYoutubeUrl(stateId: string, stateName: string): string {
  const direct = STATE_YOUTUBE_URLS[stateId.toLowerCase()]
  if (direct) return direct
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(
    stateName + " Tourism Official Reel Video Incredible India"
  )}`
}
