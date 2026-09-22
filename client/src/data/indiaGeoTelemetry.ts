export interface IndiaGeoTelemetryData {
  timeZone: {
    name: string
    code: string
    offset: string
    standardMeridian: string
    meridianLocation: string
  }
  coordinates: {
    latSpan: string
    lonSpan: string
    northPoint: { label: string; coords: string; location: string }
    southPoint: { label: string; coords: string; location: string }
    southMainland: { label: string; coords: string; location: string }
    westPoint: { label: string; coords: string; location: string }
    eastPoint: { label: string; coords: string; location: string }
  }
  dimensions: {
    northSouthDistance: string
    eastWestDistance: string
    totalAreaKm2: number
    totalAreaFormatted: string
    worldRank: string
    worldAreaPercentage: string
  }
  frontiers: {
    landBorderTotal: string
    coastlineTotal: string
    coastlineMainland: string
    coastlineIslands: string
    exclusiveEconomicZone: string
    highestElevation: string
    lowestElevation: string
  }
}

export const INDIA_GEO_TELEMETRY: IndiaGeoTelemetryData = {
  timeZone: {
    name: "Indian Standard Time",
    code: "IST",
    offset: "UTC +05:30",
    standardMeridian: "82° 30' E",
    meridianLocation: "Mirzapur, Uttar Pradesh",
  },
  coordinates: {
    latSpan: "8° 4' N to 37° 6' N",
    lonSpan: "68° 7' E to 97° 25' E",
    northPoint: {
      label: "Northernmost Point",
      coords: "37° 06' N",
      location: "Indira Col, Siachen Glacier, Ladakh",
    },
    southPoint: {
      label: "Southernmost Point (Republic)",
      coords: "6° 45' N",
      location: "Indira Point, Great Nicobar Island",
    },
    southMainland: {
      label: "Southernmost Point (Mainland)",
      coords: "8° 04' N",
      location: "Cape Comorin, Kanyakumari, Tamil Nadu",
    },
    westPoint: {
      label: "Westernmost Point",
      coords: "68° 07' E",
      location: "Ghuar Mota, Kutch, Gujarat",
    },
    eastPoint: {
      label: "Easternmost Point",
      coords: "97° 25' E",
      location: "Kibithu, Anjaw, Arunachal Pradesh",
    },
  },
  dimensions: {
    northSouthDistance: "3,214 km",
    eastWestDistance: "2,933 km",
    totalAreaKm2: 3287263,
    totalAreaFormatted: "3,287,263 km²",
    worldRank: "7th Largest in the World",
    worldAreaPercentage: "2.42% of Earth's land surface",
  },
  frontiers: {
    landBorderTotal: "15,106.7 km",
    coastlineTotal: "7,516.6 km",
    coastlineMainland: "5,422.6 km",
    coastlineIslands: "2,094.0 km",
    exclusiveEconomicZone: "2.37 Million km²",
    highestElevation: "Mt. Kanchenjunga (8,586 m)",
    lowestElevation: "Kuttanad, Kerala (-2.2 m below sea level)",
  },
}

/**
 * Returns formatted live Indian Standard Time (IST)
 */
export function getLiveIST(): { time: string; date: string; isDaytime: boolean; greeting: string } {
  const now = new Date()
  // Format in Asia/Kolkata timezone
  const timeFormatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  })

  const dateFormatter = new Intl.DateTimeFormat("en-IN", {
    timeZone: "Asia/Kolkata",
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  // Get current hour in IST
  const hourFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    hour12: false,
  })
  const istHour = parseInt(hourFormatter.format(now), 10)

  const isDaytime = istHour >= 6 && istHour < 18
  let greeting = "Namaste"
  if (istHour >= 4 && istHour < 12) greeting = "Subhodaya (Good Morning)"
  else if (istHour >= 12 && istHour < 17) greeting = "Shubh Madhyahan (Good Afternoon)"
  else if (istHour >= 17 && istHour < 21) greeting = "Shubh Sandhya (Good Evening)"
  else greeting = "Shubh Ratri (Good Night)"

  return {
    time: timeFormatter.format(now),
    date: dateFormatter.format(now),
    isDaytime,
    greeting,
  }
}
