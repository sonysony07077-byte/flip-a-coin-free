# Audio Assets Instructions

## Required Sound Files

Place the following audio files in `/public/assets/sounds/`:

### 1. Coin Spin Sound (`coin-spin.mp3`)
- **Duration**: 0.6-1.2 seconds
- **Description**: Metallic spinning sound that mimics a coin rotating in the air
- **Format**: MP3 or OGG (compressed, < 50KB)
- **Characteristics**: 
  - Start with higher frequency (800Hz)
  - Gradually decrease to lower frequency (400Hz)
  - Metallic timbre

### 2. Coin Drop Sound (`coin-drop.mp3`)
- **Duration**: 0.1-0.2 seconds
- **Description**: Soft clack sound when coin lands
- **Format**: MP3 or OGG (compressed, < 20KB)
- **Characteristics**: Short, percussive impact sound

### 3. Voice Announcements
Record or generate the following voice files:

- `head-voice-male.mp3` - Male voice saying "Heads"
- `head-voice-female.mp3` - Female voice saying "Heads"
- `tail-voice-male.mp3` - Male voice saying "Tails"
- `tail-voice-female.mp3` - Female voice saying "Tails"

**Specifications**:
- **Duration**: 0.5-0.8 seconds each
- **Format**: MP3 (compressed, < 30KB each)
- **Tone**: Clear, friendly, neutral accent
- **Volume**: Normalized to -3dB

### 4. Celebration Sound (`celebrate.mp3`)
- **Duration**: 0.8 seconds
- **Description**: Short confetti pop + chime for special events
- **Format**: MP3 or OGG (compressed, < 40KB)
- **Use case**: Milestone flips (100th, 1000th, etc.)

## Current Implementation

The app currently uses:
1. **WebAudio API** for synthesized coin flip and drop sounds (no files needed)
2. **Web Speech API** for voice announcements (browser TTS, no files needed)

## Optional Enhancement

To use pre-recorded audio files instead of synthesized sounds:

1. Add the audio files to `/public/assets/sounds/`
2. Update `components/coin-flip-tool.tsx` to preload and play the files:

\`\`\`typescript
const audioCache = useRef<{ [key: string]: HTMLAudioElement }>({})

useEffect(() => {
  // Preload audio files
  audioCache.current = {
    spin: new Audio('/assets/sounds/coin-spin.mp3'),
    drop: new Audio('/assets/sounds/coin-drop.mp3'),
    headsVoice: new Audio('/assets/sounds/head-voice-male.mp3'),
    tailsVoice: new Audio('/assets/sounds/tail-voice-male.mp3'),
  }
}, [])

const playFlipSound = () => {
  if (soundEnabled && audioCache.current.spin) {
    audioCache.current.spin.currentTime = 0
    audioCache.current.spin.play()
  }
}
\`\`\`

## Audio Recording Services

- **Voice**: Use services like ElevenLabs, Amazon Polly, or Google Cloud Text-to-Speech
- **Sound Effects**: Freesound.org, Zapsplat.com, or record custom sounds
- **Compression**: Use Audacity or online tools to compress to target file sizes
