import numpy as np
import scipy.io.wavfile as wav

# Config
RATE = 44100
DURATION = 10  # seconds

# Generate timeline
t = np.linspace(0, DURATION, int(RATE * DURATION), endpoint=False)

# 1. Create "Silence" (just low level noise, not perfect 0)
audio = np.random.normal(0, 0.01, size=t.shape)

# 2. Inject "Speech" (Loud Sine Waves) at specific intervals
# 2.0s - 4.0s: Active
audio[(t >= 2.0) & (t < 4.0)] += 0.5 * np.sin(
    2 * np.pi * 440 * t[(t >= 2.0) & (t < 4.0)]
)
# 6.5s - 8.0s: Active
audio[(t >= 6.5) & (t < 8.0)] += 0.5 * np.sin(
    2 * np.pi * 880 * t[(t >= 6.5) & (t < 8.0)]
)

# Normalize to 16-bit PCM range
audio = audio / np.max(np.abs(audio)) * 32767
wav.write("test_voiceover.wav", RATE, audio.astype(np.int16))
print(
    "Generated 'test_voiceover.wav'. Expected Active Regions: [2.0-4.0s] and [6.5-8.0s]"
)
