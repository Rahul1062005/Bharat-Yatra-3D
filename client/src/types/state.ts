export interface LandmarkAngleImage {
  url: string
  angle: string // e.g. "Front Elevation", "Aerial Drone View", "Intricate Carvings", "Panoramic Dusk"
  caption: string
}

export interface LandmarkPin {
  id: string
  name: string
  district: string
  lat: number
  lon: number
  category: "monument" | "spiritual" | "nature" | "university"
  description: string
  image?: string
  gallery?: LandmarkAngleImage[]
  builtBy?: string
  era?: string
  architecturalStyle?: string
  significance?: string
}

export interface DistrictInfo {
  name: string
  tagline: string
  headquarters: string
  knownFor: string
  famousSpot: string
}

export interface CuisineItem {
  name: string
  hindiName?: string
  tag?: string
  description: string
  image: string
  origin?: string
  ingredients?: string[]
  dietary?: "veg" | "non-veg" | string
}

export interface AttireItem {
  name: string
  type?: string
  description: string
  image: string
  specialty?: string
  gender?: string
  fabric?: string
  occasions?: string
}

export interface ArtTraditionItem {
  title?: string
  name?: string
  category?: string
  type?: string
  period?: string
  season?: string
  description: string
  image: string
  highlights?: string[]
  significance?: string
}

export interface MonumentItem {
  id?: string
  name: string
  location: string
  era?: string
  period?: string
  unesco?: boolean
  description?: string
  image: string
  significance?: string
}

export interface LanguageItem {
  name: string
  script: string
  speakers: string
  greeting: string
  meaning: string
  description: string
}

export interface LuminaryItem {
  name: string
  era: string
  title: string
  contribution: string
  image?: string
}

export interface StateData {
  id: string
  name: string
  hindiName: string
  capital: string
  tagline: string
  overview: string
  ancientNames: string[]
  keyStats: {
    label: string
    value: string
  }[]
  districts: Record<string, DistrictInfo>
  landmarks?: LandmarkPin[]
  cuisines: CuisineItem[]
  traditions: ArtTraditionItem[]
  attires?: AttireItem[]
  attire?: AttireItem[]
  monuments: MonumentItem[]
  languages?: LanguageItem[]
  luminaries?: LuminaryItem[]
  quote: {
    text: string
    author: string
  }
}
