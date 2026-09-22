import { useState, useEffect } from "react"
import {
  Clock,
  Compass,
  Maximize2,
  Minimize2,
  MapPin,
  Mountain,
  Waves,
  Sun,
  Moon,
  Info,
} from "lucide-react"
import { INDIA_GEO_TELEMETRY, getLiveIST } from "../../data/indiaGeoTelemetry"
import "./IndiaGeoTelemetry.css"

export default function IndiaGeoTelemetry() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [ist, setIst] = useState(getLiveIST())

  // Live clock tick every second
  useEffect(() => {
    const timer = setInterval(() => {
      setIst(getLiveIST())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <aside
      className={`india-telemetry-container ${isExpanded ? "expanded" : "collapsed"}`}
      aria-label="Geographic Telemetry & Live IST"
    >
      {/* Collapsed Pill Button */}
      {!isExpanded ? (
        <button
          type="button"
          className="telemetry-pill-btn"
          onClick={() => setIsExpanded(true)}
          title="Open India Geographic Telemetry & Time Zone"
        >
          <span className="telemetry-live-dot" />
          <span className="telemetry-time-badge">
            {ist.isDaytime ? <Sun size={12} className="sun-icon" /> : <Moon size={12} className="moon-icon" />}
            <span>IST {ist.time}</span>
          </span>
          <span className="telemetry-sep">•</span>
          <span className="telemetry-area-badge">3.28M km²</span>
          <span className="telemetry-sep">•</span>
          <span className="telemetry-coords-badge">8°N – 37°N</span>
          <span className="telemetry-expand-icon">
            <Info size={13} />
          </span>
        </button>
      ) : (
        /* Expanded Telemetry Glass Card */
        <div className="telemetry-glass-card">
          <div className="telemetry-card-header">
            <div className="telemetry-card-title-row">
              <Compass size={15} className="telemetry-compass-icon" />
              <div>
                <h4 className="telemetry-title">Bharat Geographic Telemetry</h4>
                <span className="telemetry-subtitle">Standard Meridian 82° 30' E (Mirzapur, UP)</span>
              </div>
            </div>
            <button
              type="button"
              className="telemetry-collapse-btn"
              onClick={() => setIsExpanded(false)}
              title="Minimize telemetry"
            >
              <Minimize2 size={14} />
            </button>
          </div>

          <div className="telemetry-grid">
            {/* Live IST Box */}
            <div className="telemetry-item highlight-box">
              <div className="item-label-row">
                <Clock size={12} />
                <span>INDIAN STANDARD TIME (IST)</span>
              </div>
              <div className="item-live-clock">
                {ist.isDaytime ? <Sun size={15} className="sun-pulse" /> : <Moon size={15} className="moon-pulse" />}
                <span className="live-clock-time">{ist.time}</span>
                <span className="live-clock-offset">UTC+5:30</span>
              </div>
              <span className="live-clock-date">{ist.date} • {ist.greeting}</span>
            </div>

            {/* Total Area Box */}
            <div className="telemetry-item">
              <div className="item-label-row">
                <Maximize2 size={12} />
                <span>TOTAL LAND AREA</span>
              </div>
              <div className="item-large-stat">
                {INDIA_GEO_TELEMETRY.dimensions.totalAreaFormatted}
              </div>
              <span className="item-sub-desc">
                {INDIA_GEO_TELEMETRY.dimensions.worldRank} ({INDIA_GEO_TELEMETRY.dimensions.worldAreaPercentage})
              </span>
            </div>

            {/* Lat / Lon Extents Box */}
            <div className="telemetry-item coords-span-item">
              <div className="item-label-row">
                <MapPin size={12} />
                <span>COORDINATES & EXTENT</span>
              </div>
              <div className="coords-dual-row">
                <div className="coord-col">
                  <span className="coord-axis">Latitude (N-S)</span>
                  <span className="coord-value">{INDIA_GEO_TELEMETRY.coordinates.latSpan}</span>
                  <span className="coord-dist">{INDIA_GEO_TELEMETRY.dimensions.northSouthDistance} span</span>
                </div>
                <div className="coord-col">
                  <span className="coord-axis">Longitude (E-W)</span>
                  <span className="coord-value">{INDIA_GEO_TELEMETRY.coordinates.lonSpan}</span>
                  <span className="coord-dist">{INDIA_GEO_TELEMETRY.dimensions.eastWestDistance} span</span>
                </div>
              </div>
            </div>

            {/* Extreme Points */}
            <div className="telemetry-item full-width-extremes">
              <div className="item-label-row">
                <Compass size={12} />
                <span>GEOGRAPHIC EXTREMES</span>
              </div>
              <div className="extremes-grid">
                <div className="extreme-cell">
                  <span className="extreme-cardinal">NORTH</span>
                  <span className="extreme-name">Indira Col, Ladakh (37° 06' N)</span>
                </div>
                <div className="extreme-cell">
                  <span className="extreme-cardinal">SOUTH</span>
                  <span className="extreme-name">Kanyakumari (8° 04' N) / Indira Point (6° 45' N)</span>
                </div>
                <div className="extreme-cell">
                  <span className="extreme-cardinal">WEST</span>
                  <span className="extreme-name">Ghuar Mota, Gujarat (68° 07' E)</span>
                </div>
                <div className="extreme-cell">
                  <span className="extreme-cardinal">EAST</span>
                  <span className="extreme-name">Kibithu, Arunachal (97° 25' E)</span>
                </div>
              </div>
            </div>

            {/* Maritime Coastline & Frontiers */}
            <div className="telemetry-item">
              <div className="item-label-row">
                <Waves size={12} />
                <span>COASTLINE & BORDERS</span>
              </div>
              <div className="item-stat-pair">
                <span>Coastline: <strong>{INDIA_GEO_TELEMETRY.frontiers.coastlineTotal}</strong></span>
                <span>Land Border: <strong>{INDIA_GEO_TELEMETRY.frontiers.landBorderTotal}</strong></span>
              </div>
              <span className="item-sub-desc">EEZ: {INDIA_GEO_TELEMETRY.frontiers.exclusiveEconomicZone}</span>
            </div>

            {/* Elevations */}
            <div className="telemetry-item">
              <div className="item-label-row">
                <Mountain size={12} />
                <span>ELEVATION EXTREMES</span>
              </div>
              <div className="item-stat-pair">
                <span>High: <strong>{INDIA_GEO_TELEMETRY.frontiers.highestElevation}</strong></span>
                <span>Low: <strong>{INDIA_GEO_TELEMETRY.frontiers.lowestElevation}</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  )
}
