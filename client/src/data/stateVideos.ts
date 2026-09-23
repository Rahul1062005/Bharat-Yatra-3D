// Verified Official State Tourism YouTube Video URLs & Metadata
// Prioritizing verified official state tourism channels (e.g. Bihar Tourism, MP Tourism, Kerala Tourism)

export interface StateVideoInfo {
  videoId: string
  title: string
  channel: string
  isOfficialChannel: boolean
}

export const STATE_OFFICIAL_VIDEOS: Record<string, StateVideoInfo> = {
  bihar: {
    videoId: "FhvLY9ZnbzI",
    title: "बिहार - एक झलक | A glimpse of Bihar's History, Culture and Civilization",
    channel: "Bihar Tourism",
    isOfficialChannel: true,
  },
  "madhya-pradesh": {
    videoId: "7vvYV2uui2Y",
    title: "MP Ajab Hai, Sabse Gajab Hai",
    channel: "Madhya Pradesh Tourism",
    isOfficialChannel: true,
  },
  kerala: {
    videoId: "R83BlU5nnbs",
    title: "Signature Film | Kerala Tourism | Experience God’s Own Country",
    channel: "Kerala Tourism",
    isOfficialChannel: true,
  },
  rajasthan: {
    videoId: "i2p_742MOO8",
    title: "Jane Kya Dikh Jaye | Rajasthan Tourism Official Campaign",
    channel: "Rajasthan Tourism",
    isOfficialChannel: true,
  },
  gujarat: {
    videoId: "_PHfcd9AZ6s",
    title: "Khushboo Gujarat Ki (Kutch) | Amitabh Bachchan",
    channel: "Gujarat Tourism",
    isOfficialChannel: true,
  },
  maharashtra: {
    videoId: "UwAZ1iwkdIs",
    title: "Maharashtra - One State, A Million Journeys",
    channel: "Maharashtra Tourism",
    isOfficialChannel: true,
  },
  karnataka: {
    videoId: "ZAjd9Lh1-lA",
    title: "Script your Adventure | One State, Many Worlds",
    channel: "Karnataka Tourism",
    isOfficialChannel: true,
  },
  "tamil-nadu": {
    videoId: "KVcIhD1Fvp4",
    title: "TNGTS - I am Tamil Nadu",
    channel: "Tamil Nadu Tourism",
    isOfficialChannel: true,
  },
  tamilnadu: {
    videoId: "KVcIhD1Fvp4",
    title: "TNGTS - I am Tamil Nadu",
    channel: "Tamil Nadu Tourism",
    isOfficialChannel: true,
  },
  "west-bengal": {
    videoId: "rwCTpdeuVe8",
    title: "Experience Bengal | The Sweetest Part of India",
    channel: "West Bengal Tourism",
    isOfficialChannel: true,
  },
  punjab: {
    videoId: "4YLUbxjf0TQ",
    title: "Punjab | Colors of India",
    channel: "Incredible India",
    isOfficialChannel: true,
  },
  odisha: {
    videoId: "Uqmc0891L2U",
    title: "India's Best Kept Secret | Beauty of Odisha",
    channel: "Odisha Tourism",
    isOfficialChannel: true,
  },
  goa: {
    videoId: "m_DQFAJdC7g",
    title: "Let's Goa | Goa has opened its doors for Tourism",
    channel: "Goa Tourism",
    isOfficialChannel: true,
  },
  "himachal-pradesh": {
    videoId: "MpfAETCQTV4",
    title: "Himalaya ka Dil Himachal (हिमालय का दिल हिमाचल)",
    channel: "Himachal Tourism Official",
    isOfficialChannel: true,
  },
  uttarakhand: {
    videoId: "B-GKC3lhvsM",
    title: "Uttarakhand Tourism - Simply Sensational",
    channel: "Uttarakhand Tourism",
    isOfficialChannel: true,
  },
  "uttar-pradesh": {
    videoId: "kCqvazmdLlM",
    title: "Uttar Pradesh Heritage & Tourism Showcase",
    channel: "UP Tourism",
    isOfficialChannel: true,
  },
  up: {
    videoId: "kCqvazmdLlM",
    title: "Uttar Pradesh Heritage & Tourism Showcase",
    channel: "UP Tourism",
    isOfficialChannel: true,
  },
  delhi: {
    videoId: "4YLUbxjf0TQ",
    title: "Dilwalon Ki Dilli | Incredible India",
    channel: "Incredible India",
    isOfficialChannel: true,
  },
}

export function getStateVideoInfo(stateId: string, stateName: string): StateVideoInfo {
  const info = STATE_OFFICIAL_VIDEOS[stateId.toLowerCase()]
  if (info) return info

  return {
    videoId: "FhvLY9ZnbzI",
    title: `${stateName} Tourism Showcase`,
    channel: `${stateName} Tourism / Incredible India`,
    isOfficialChannel: false,
  }
}
