/**
 * ambientHeritageAudio.ts
 * Procedural Indian Classical Ambient Audio Synthesizer (Web Audio API)
 *
 * Creates a soothing, meditative Indian soundscape:
 * - Tanpura Drone (Sa - Pa - Sa' strings with rhythmic plucking and gentle jawari resonance)
 * - Bansuri / Sitar melodic breath tones in Raag Bhupali / Yaman (Sa, Re, Ga, Pa, Dha)
 * - Full client-side synthesis: zero external MP3 dependencies, instant start, zero buffering.
 * - Controls: Mute/Unmute, Volume Up, Volume Down, and reactive state subscription.
 */

export interface HeritageAudioState {
  isPlaying: boolean
  isMuted: boolean
  volume: number // 0.0 to 1.0
}

type AudioListener = (state: HeritageAudioState) => void

class HeritageAudioManager {
  private ctx: AudioContext | null = null
  private masterGain: GainNode | null = null
  private droneGain: GainNode | null = null
  private melodyGain: GainNode | null = null

  private tanpuraOscs: OscillatorNode[] = []
  private tanpuraTimer: number | null = null
  private melodyTimer: number | null = null

  private isPlaying = false
  private isMuted = false
  private volume = 0.4
  private listeners: Set<AudioListener> = new Set()

  // Base Sa frequency (D3 = 146.83 Hz, standard calming Indian classical pitch)
  private readonly SA = 146.83
  private readonly PA = 220.0
  private readonly SA_HIGH = 293.66

  // Raag Bhupali scale notes (Pentatonic: Sa, Re, Ga, Pa, Dha, Sa')
  private readonly RAGA_NOTES = [
    146.83, // Sa
    164.81, // Re
    185.0, // Ga
    220.0, // Pa
    246.94, // Dha
    293.66, // Sa'
    329.63, // Re'
    369.99, // Ga'
    440.0, // Pa'
  ]

  constructor() {
    // Lazy audio context creation on interaction
  }

  private initContext(): boolean {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (!AudioCtx) return false
      this.ctx = new AudioCtx()

      // Master output
      this.masterGain = this.ctx.createGain()
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime)

      // Dynamics compressor to ensure mellow, velvet tone
      const compressor = this.ctx.createDynamicsCompressor()
      compressor.threshold.setValueAtTime(-24, this.ctx.currentTime)
      compressor.knee.setValueAtTime(30, this.ctx.currentTime)
      compressor.ratio.setValueAtTime(6, this.ctx.currentTime)
      compressor.attack.setValueAtTime(0.02, this.ctx.currentTime)
      compressor.release.setValueAtTime(0.25, this.ctx.currentTime)

      this.masterGain.connect(compressor)
      compressor.connect(this.ctx.destination)

      // Drone Sub-bus
      this.droneGain = this.ctx.createGain()
      this.droneGain.gain.setValueAtTime(0.35, this.ctx.currentTime)
      this.droneGain.connect(this.masterGain)

      // Melody Sub-bus
      this.melodyGain = this.ctx.createGain()
      this.melodyGain.gain.setValueAtTime(0.22, this.ctx.currentTime)
      this.melodyGain.connect(this.masterGain)
    }

    if (this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {})
    }

    return true
  }

  /**
   * Start tranquil ambient heritage music
   */
  public start(): void {
    if (this.isPlaying) return
    if (!this.initContext() || !this.ctx) return

    this.isPlaying = true
    this.startTanpuraDrone()
    this.scheduleNextMelodyNote()
    this.notify()
  }

  /**
   * Stop tranquil ambient heritage music
   */
  public stop(): void {
    if (!this.isPlaying) return
    this.isPlaying = false

    if (this.tanpuraTimer !== null) {
      window.clearTimeout(this.tanpuraTimer)
      this.tanpuraTimer = null
    }

    if (this.melodyTimer !== null) {
      window.clearTimeout(this.melodyTimer)
      this.melodyTimer = null
    }

    this.tanpuraOscs.forEach((osc) => {
      try {
        osc.stop()
        osc.disconnect()
      } catch {
        // ignore
      }
    })
    this.tanpuraOscs = []

    this.notify()
  }

  /**
   * Pluck a single Tanpura string with warm harmonics and gentle jawari buzz
   */
  private pluckTanpuraString(freq: number, duration: number = 3.5): void {
    if (!this.ctx || !this.droneGain || !this.isPlaying) return

    const now = this.ctx.currentTime
    const osc = this.ctx.createOscillator()
    const gain = this.ctx.createGain()
    const filter = this.ctx.createBiquadFilter()

    // Warm Indian brass/gourd resonance filter
    filter.type = "lowpass"
    filter.frequency.setValueAtTime(900, now)
    filter.Q.setValueAtTime(2.5, now)

    // Triangular/sine blend for acoustic string feel
    osc.type = "triangle"
    osc.frequency.setValueAtTime(freq, now)

    // Subtle string detune / chorusing
    osc.detune.setValueAtTime((Math.random() - 0.5) * 4, now)

    // Envelope: quick gentle rise, long soulful decay
    gain.gain.setValueAtTime(0.0001, now)
    gain.gain.linearRampToValueAtTime(0.18, now + 0.12)
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

    osc.connect(filter)
    filter.connect(gain)
    gain.connect(this.droneGain)

    osc.start(now)
    osc.stop(now + duration + 0.1)

    // Clean up
    setTimeout(() => {
      try {
        osc.disconnect()
        gain.disconnect()
        filter.disconnect()
      } catch {
        // ignore
      }
    }, (duration + 0.2) * 1000)
  }

  /**
   * Continuous Tanpura cycle: Pa - Sa' - Sa' - Sa (4 traditional strings)
   */
  private startTanpuraDrone(): void {
    if (!this.isPlaying) return

    const strings = [this.PA, this.SA_HIGH, this.SA_HIGH, this.SA]
    let stringIndex = 0

    const cycle = () => {
      if (!this.isPlaying) return

      const freq = strings[stringIndex]
      this.pluckTanpuraString(freq, 4.2)

      stringIndex = (stringIndex + 1) % strings.length
      // Traditional tempo: ~1.1 to 1.3 seconds between strings
      this.tanpuraTimer = window.setTimeout(cycle, 1200)
    }

    cycle()
  }

  /**
   * Procedural Bansuri / Sitar melodic note in Raag Bhupali
   */
  private playBansuriMelodyNote(): void {
    if (!this.ctx || !this.melodyGain || !this.isPlaying) return

    const now = this.ctx.currentTime
    const noteFreq = this.RAGA_NOTES[Math.floor(Math.random() * this.RAGA_NOTES.length)]

    // Flute breath oscillator (sine) + sub-overtone
    const osc = this.ctx.createOscillator()
    const oscHarmonic = this.ctx.createOscillator()
    const noteGain = this.ctx.createGain()
    const filter = this.ctx.createBiquadFilter()

    // Vibrato LFO (5 Hz subtle Indian vocal/bamboo meend)
    const vibrato = this.ctx.createOscillator()
    const vibratoGain = this.ctx.createGain()
    vibrato.frequency.setValueAtTime(5, now)
    vibratoGain.gain.setValueAtTime(2.2, now) // gentle 2.2 Hz wobble
    vibrato.connect(vibratoGain)
    vibratoGain.connect(osc.frequency)

    osc.type = "sine"
    osc.frequency.setValueAtTime(noteFreq, now)

    oscHarmonic.type = "sine"
    oscHarmonic.frequency.setValueAtTime(noteFreq * 2, now)

    filter.type = "lowpass"
    filter.frequency.setValueAtTime(1400, now)

    // Note length between 2.5 and 4.5 seconds
    const duration = 2.8 + Math.random() * 1.5

    noteGain.gain.setValueAtTime(0.0001, now)
    // Soft breath attack
    noteGain.gain.linearRampToValueAtTime(0.14, now + 0.6)
    // Soulful taper
    noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

    osc.connect(filter)
    oscHarmonic.connect(filter)
    filter.connect(noteGain)
    noteGain.connect(this.melodyGain)

    vibrato.start(now)
    osc.start(now)
    oscHarmonic.start(now)

    vibrato.stop(now + duration)
    osc.stop(now + duration)
    oscHarmonic.stop(now + duration)

    setTimeout(() => {
      try {
        vibrato.disconnect()
        vibratoGain.disconnect()
        osc.disconnect()
        oscHarmonic.disconnect()
        filter.disconnect()
        noteGain.disconnect()
      } catch {
        // ignore
      }
    }, (duration + 0.3) * 1000)
  }

  private scheduleNextMelodyNote(): void {
    if (!this.isPlaying) return

    // Play next note every 4 to 7 seconds for spaced, meditative calm
    const delay = 4000 + Math.random() * 3200
    this.melodyTimer = window.setTimeout(() => {
      if (this.isPlaying) {
        this.playBansuriMelodyNote()
        this.scheduleNextMelodyNote()
      }
    }, delay)
  }

  /**
   * Toggle mute
   */
  public toggleMute(): boolean {
    this.isMuted = !this.isMuted
    if (this.masterGain && this.ctx) {
      const target = this.isMuted ? 0 : this.volume
      this.masterGain.gain.setTargetAtTime(target, this.ctx.currentTime, 0.08)
    }
    this.notify()
    return this.isMuted
  }

  /**
   * Increase volume by 10%
   */
  public volumeUp(): void {
    this.setVolume(Math.min(1.0, this.volume + 0.1))
  }

  /**
   * Decrease volume by 10%
   */
  public volumeDown(): void {
    this.setVolume(Math.max(0.05, this.volume - 0.1))
  }

  /**
   * Set exact volume [0.0 - 1.0]
   */
  public setVolume(val: number): void {
    this.volume = Math.max(0, Math.min(1, Math.round(val * 100) / 100))
    if (!this.isMuted && this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.08)
    }
    this.notify()
  }

  public getState(): HeritageAudioState {
    return {
      isPlaying: this.isPlaying,
      isMuted: this.isMuted,
      volume: this.volume,
    }
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener)
    listener(this.getState())
    return () => this.listeners.delete(listener)
  }

  private notify(): void {
    const s = this.getState()
    this.listeners.forEach((fn) => fn(s))
  }
}

export const heritageAudio = new HeritageAudioManager()
