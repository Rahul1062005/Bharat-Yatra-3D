import type { StateData } from "../types/state"
import { biharData } from "./bihar"
import { maharashtraData } from "./maharashtra"
import { uttarPradeshData } from "./uttarPradesh"
import { rajasthanData } from "./rajasthan"
import { keralaData } from "./kerala"
import { gujaratData } from "./gujarat"
import { westBengalData } from "./westBengal"
import { tamilNaduData } from "./tamilNadu"
import { karnatakaData } from "./karnataka"
import { punjabData } from "./punjab"
import { madhyaPradeshData } from "./madhyaPradesh"
import { odishaData } from "./odisha"
import { andhraPradeshData } from "./andhraPradesh"
import { telanganaData } from "./telangana"
import { assamData } from "./assam"
import { haryanaData } from "./haryana"
import { himachalPradeshData } from "./himachalPradesh"
import { uttarakhandData } from "./uttarakhand"
import { goaData } from "./goa"
import { jammuKashmirData } from "./jammuKashmir"
import { jharkhandData } from "./jharkhand"
import { chhattisgarhData } from "./chhattisgarh"
import { sikkimData } from "./sikkim"
import { meghalayaData } from "./meghalaya"
import { manipurData } from "./manipur"
import { nagalandData } from "./nagaland"
import { tripuraData } from "./tripura"
import { mizoramData } from "./mizoram"
import { arunachalPradeshData } from "./arunachalPradesh"
import { ladakhData } from "./ladakh"
import { delhiData } from "./delhi"
import { andamanNicobarData } from "./andamanNicobar"
import { lakshadweepData } from "./lakshadweep"
import { puducherryData } from "./puducherry"
import { chandigarhData } from "./chandigarh"
import { dadraNagarHaveliDamanDiuData } from "./dadraNagarHaveliDamanDiu"

export interface StateMapConfig {
  centerLon: number
  centerLat: number
  scale: number
  geojsonUrl: string
  cameraPosition: [number, number, number]
  target: [number, number, number]
  fov: number
  defaultDistrict: string
}

export interface StateBundle {
  data: StateData
  config: StateMapConfig
}

export const statesRegistry: Record<string, StateBundle> = {
  bihar: {
    data: biharData,
    config: {
      centerLon: 85.65,
      centerLat: 25.75,
      scale: 1.05,
      geojsonUrl: "/data/bihar-districts.geojson",
      cameraPosition: [0.65, 0.15, 6.1],
      target: [0.65, 0.15, 0],
      fov: 38,
      defaultDistrict: "Patna",
    },
  },
  maharashtra: {
    data: maharashtraData,
    config: {
      centerLon: 76.78,
      centerLat: 18.82,
      scale: 0.50,
      geojsonUrl: "/data/maharashtra-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Mumbai",
    },
  },
  "uttar-pradesh": {
    data: uttarPradeshData,
    config: {
      centerLon: 80.86,
      centerLat: 27.14,
      scale: 0.50,
      geojsonUrl: "/data/uttar-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Varanasi",
    },
  },
  up: {
    data: uttarPradeshData,
    config: {
      centerLon: 80.86,
      centerLat: 27.14,
      scale: 0.50,
      geojsonUrl: "/data/uttar-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Varanasi",
    },
  },
  rajasthan: {
    data: rajasthanData,
    config: {
      centerLon: 74.0,
      centerLat: 26.5,
      scale: 0.44,
      geojsonUrl: "/data/rajasthan-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Jaipur",
    },
  },
  kerala: {
    data: keralaData,
    config: {
      centerLon: 76.25,
      centerLat: 10.45,
      scale: 0.76,
      geojsonUrl: "/data/kerala-districts.geojson",
      cameraPosition: [0.65, 0.08, 6.2],
      target: [0.65, 0.08, 0],
      fov: 38,
      defaultDistrict: "Thiruvananthapuram",
    },
  },
  gujarat: {
    data: gujaratData,
    config: {
      centerLon: 71.3,
      centerLat: 22.4,
      scale: 0.54,
      geojsonUrl: "/data/gujarat-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Ahmedabad",
    },
  },
  "west-bengal": {
    data: westBengalData,
    config: {
      centerLon: 87.85,
      centerLat: 24.35,
      scale: 0.52,
      geojsonUrl: "/data/west-bengal-districts.geojson",
      cameraPosition: [0.65, 0.08, 6.2],
      target: [0.65, 0.08, 0],
      fov: 38,
      defaultDistrict: "Kolkata",
    },
  },
  westbengal: {
    data: westBengalData,
    config: {
      centerLon: 87.85,
      centerLat: 24.35,
      scale: 0.52,
      geojsonUrl: "/data/west-bengal-districts.geojson",
      cameraPosition: [0.65, 0.08, 6.2],
      target: [0.65, 0.08, 0],
      fov: 38,
      defaultDistrict: "Kolkata",
    },
  },
  "tamil-nadu": {
    data: tamilNaduData,
    config: {
      centerLon: 78.4,
      centerLat: 11.0,
      scale: 0.60,
      geojsonUrl: "/data/tamil-nadu-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Chennai",
    },
  },
  tamilnadu: {
    data: tamilNaduData,
    config: {
      centerLon: 78.4,
      centerLat: 11.0,
      scale: 0.60,
      geojsonUrl: "/data/tamil-nadu-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Chennai",
    },
  },
  karnataka: {
    data: karnatakaData,
    config: {
      centerLon: 75.8,
      centerLat: 14.8,
      scale: 0.50,
      geojsonUrl: "/data/karnataka-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Bengaluru Urban",
    },
  },
  punjab: {
    data: punjabData,
    config: {
      centerLon: 75.4,
      centerLat: 31.0,
      scale: 0.90,
      geojsonUrl: "/data/punjab-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.1],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Amritsar",
    },
  },
  "madhya-pradesh": {
    data: madhyaPradeshData,
    config: {
      centerLon: 78.42,
      centerLat: 23.97,
      scale: 0.41,
      geojsonUrl: "/data/madhya-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Bhopal",
    },
  },
  madhyapradesh: {
    data: madhyaPradeshData,
    config: {
      centerLon: 78.42,
      centerLat: 23.97,
      scale: 0.41,
      geojsonUrl: "/data/madhya-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Bhopal",
    },
  },
  odisha: {
    data: odishaData,
    config: {
      centerLon: 84.43,
      centerLat: 20.18,
      scale: 0.58,
      geojsonUrl: "/data/odisha-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Puri",
    },
  },
  "andhra-pradesh": {
    data: andhraPradeshData,
    config: {
      centerLon: 80.76,
      centerLat: 15.88,
      scale: 0.45,
      geojsonUrl: "/data/andhra-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Tirupati",
    },
  },
  andhrapradesh: {
    data: andhraPradeshData,
    config: {
      centerLon: 80.76,
      centerLat: 15.88,
      scale: 0.45,
      geojsonUrl: "/data/andhra-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Tirupati",
    },
  },
  telangana: {
    data: telanganaData,
    config: {
      centerLon: 79.51,
      centerLat: 17.87,
      scale: 0.70,
      geojsonUrl: "/data/telangana-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Hyderabad",
    },
  },
  assam: {
    data: assamData,
    config: {
      centerLon: 92.86,
      centerLat: 26.06,
      scale: 0.55,
      geojsonUrl: "/data/assam-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Kamrup Metropolitan",
    },
  },
  haryana: {
    data: haryanaData,
    config: {
      centerLon: 76.03,
      centerLat: 29.29,
      scale: 0.88,
      geojsonUrl: "/data/haryana-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Kurukshetra",
    },
  },
  "himachal-pradesh": {
    data: himachalPradeshData,
    config: {
      centerLon: 77.29,
      centerLat: 31.82,
      scale: 0.85,
      geojsonUrl: "/data/himachal-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Shimla",
    },
  },
  himachalpradesh: {
    data: himachalPradeshData,
    config: {
      centerLon: 77.29,
      centerLat: 31.82,
      scale: 0.85,
      geojsonUrl: "/data/himachal-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Shimla",
    },
  },
  uttarakhand: {
    data: uttarakhandData,
    config: {
      centerLon: 79.29,
      centerLat: 30.09,
      scale: 0.85,
      geojsonUrl: "/data/uttarakhand-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Dehradun",
    },
  },
  goa: {
    data: goaData,
    config: {
      centerLon: 74.01,
      centerLat: 15.35,
      scale: 2.80,
      geojsonUrl: "/data/goa-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "North Goa",
    },
  },
  "jammu-kashmir": {
    data: jammuKashmirData,
    config: {
      centerLon: 75.50,
      centerLat: 33.70,
      scale: 0.60,
      geojsonUrl: "/data/jammu-kashmir-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Srinagar",
    },
  },
  jammuandkashmir: {
    data: jammuKashmirData,
    config: {
      centerLon: 75.50,
      centerLat: 33.70,
      scale: 0.60,
      geojsonUrl: "/data/jammu-kashmir-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Srinagar",
    },
  },
  jk: {
    data: jammuKashmirData,
    config: {
      centerLon: 75.50,
      centerLat: 33.70,
      scale: 0.60,
      geojsonUrl: "/data/jammu-kashmir-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Srinagar",
    },
  },
  jharkhand: {
    data: jharkhandData,
    config: {
      centerLon: 85.65,
      centerLat: 23.66,
      scale: 0.77,
      geojsonUrl: "/data/jharkhand-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Ranchi",
    },
  },
  chhattisgarh: {
    data: chhattisgarhData,
    config: {
      centerLon: 82.31,
      centerLat: 20.94,
      scale: 0.57,
      geojsonUrl: "/data/chhattisgarh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Raipur",
    },
  },
  sikkim: {
    data: sikkimData,
    config: {
      centerLon: 88.47,
      centerLat: 27.61,
      scale: 2.50,
      geojsonUrl: "/data/sikkim-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "East Sikkim",
    },
  },
  meghalaya: {
    data: meghalayaData,
    config: {
      centerLon: 91.31,
      centerLat: 25.54,
      scale: 1.10,
      geojsonUrl: "/data/meghalaya-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "East Khasi Hills",
    },
  },
  manipur: {
    data: manipurData,
    config: {
      centerLon: 93.86,
      centerLat: 24.77,
      scale: 1.60,
      geojsonUrl: "/data/manipur-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Imphal West",
    },
  },
  nagaland: {
    data: nagalandData,
    config: {
      centerLon: 94.29,
      centerLat: 26.12,
      scale: 1.60,
      geojsonUrl: "/data/nagaland-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Kohima",
    },
  },
  tripura: {
    data: tripuraData,
    config: {
      centerLon: 91.74,
      centerLat: 23.74,
      scale: 1.80,
      geojsonUrl: "/data/tripura-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "West Tripura",
    },
  },
  mizoram: {
    data: mizoramData,
    config: {
      centerLon: 92.85,
      centerLat: 23.23,
      scale: 1.30,
      geojsonUrl: "/data/mizoram-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Aizawl",
    },
  },
  "arunachal-pradesh": {
    data: arunachalPradeshData,
    config: {
      centerLon: 94.48,
      centerLat: 28.06,
      scale: 0.55,
      geojsonUrl: "/data/arunachal-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Papum Pare",
    },
  },
  arunachalpradesh: {
    data: arunachalPradeshData,
    config: {
      centerLon: 94.48,
      centerLat: 28.06,
      scale: 0.55,
      geojsonUrl: "/data/arunachal-pradesh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Papum Pare",
    },
  },
  ladakh: {
    data: ladakhData,
    config: {
      centerLon: 77.44,
      centerLat: 33.92,
      scale: 0.70,
      geojsonUrl: "/data/ladakh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Leh",
    },
  },
  delhi: {
    data: delhiData,
    config: {
      centerLon: 77.09,
      centerLat: 28.65,
      scale: 3.50,
      geojsonUrl: "/data/delhi-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "New Delhi",
    },
  },
  "andaman-nicobar": {
    data: andamanNicobarData,
    config: {
      centerLon: 93.24,
      centerLat: 10.85,
      scale: 0.60,
      geojsonUrl: "/data/andaman-nicobar-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "South Andaman",
    },
  },
  andamanandnicobar: {
    data: andamanNicobarData,
    config: {
      centerLon: 93.24,
      centerLat: 10.85,
      scale: 0.60,
      geojsonUrl: "/data/andaman-nicobar-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "South Andaman",
    },
  },
  lakshadweep: {
    data: lakshadweepData,
    config: {
      centerLon: 72.90,
      centerLat: 9.99,
      scale: 1.20,
      geojsonUrl: "/data/lakshadweep-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Lakshadweep",
    },
  },
  puducherry: {
    data: puducherryData,
    config: {
      centerLon: 79.81,
      centerLat: 11.93,
      scale: 0.90,
      geojsonUrl: "/data/puducherry-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Puducherry",
    },
  },
  pondicherry: {
    data: puducherryData,
    config: {
      centerLon: 79.81,
      centerLat: 11.93,
      scale: 0.90,
      geojsonUrl: "/data/puducherry-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Puducherry",
    },
  },
  chandigarh: {
    data: chandigarhData,
    config: {
      centerLon: 76.76,
      centerLat: 30.73,
      scale: 5.50,
      geojsonUrl: "/data/chandigarh-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Chandigarh",
    },
  },
  "dadra-nagar-haveli-daman-diu": {
    data: dadraNagarHaveliDamanDiuData,
    config: {
      centerLon: 72.06,
      centerLat: 20.39,
      scale: 1.40,
      geojsonUrl: "/data/dadra-nagar-haveli-daman-diu-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Daman",
    },
  },
  "daman-diu": {
    data: dadraNagarHaveliDamanDiuData,
    config: {
      centerLon: 72.06,
      centerLat: 20.39,
      scale: 1.40,
      geojsonUrl: "/data/dadra-nagar-haveli-daman-diu-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Daman",
    },
  },
  "dadra-nagar-haveli": {
    data: dadraNagarHaveliDamanDiuData,
    config: {
      centerLon: 72.06,
      centerLat: 20.39,
      scale: 1.40,
      geojsonUrl: "/data/dadra-nagar-haveli-daman-diu-districts.geojson",
      cameraPosition: [0.65, 0.12, 6.2],
      target: [0.65, 0.12, 0],
      fov: 38,
      defaultDistrict: "Daman",
    },
  },
}


export function getStateById(id?: string): StateBundle {
  if (!id) return statesRegistry.bihar
  const normalized = id.toLowerCase().trim()
  return statesRegistry[normalized] || statesRegistry.bihar
}
