# Read test_voiceover.wav and detect periods of silence (where the amplitude is below a certain threshold) using a sliding window approach. Output the start and end times of each detected silent period.
import wave

import numpy as np


# Main function to detect silence in the audio file
def detect_silence():
    # Read the wav file test_voiceover.wav
    with wave.open("test_voiceover.wav") as wav_file:
        # TODO: Read the sample rate from the wav file (wav_file.getframerate())
        #  so you can convert sample indices to timestamps later.
        n_frames = wav_file.getnframes()
        raw_data = wav_file.readframes(n_frames)

    # 3. "Cast" the raw bytes into a workable array of 16-bit integers
    # This is mathematically identical to reinterpreting a pointer in C++
    audio_data = np.frombuffer(raw_data, dtype=np.int16)

    # TODO: Use abs() when comparing amplitude to the threshold. Audio samples
    #  are signed 16-bit integers (-32768 to 32767), so a loud negative value
    #  like -25000 would incorrectly pass a bare `< 100` check.

    # TODO: Rethink the two-pointer structure. Right now window_right only ever
    #  increments and never resets, so after the first silent region it races
    #  ahead and is permanently decoupled from window_left. Instead, use a
    #  single scan: track when you *enter* silence (silence_start = i) and when
    #  you *exit* silence (silence_start = None), reporting each region on exit.

    # TODO: The while-loop's entry condition checks audio_data[window_left],
    #  but subsequent iterations inside the loop check audio_data[window_right].
    #  Make the check consistent — each sample should be evaluated individually
    #  as you scan through the data.

    # TODO: Only print when an actual silent region is found, not on every
    #  single sample. With millions of samples this floods the terminal.

    # TODO: Add a minimum silence duration filter (e.g. 0.25s) so that tiny
    #  dips in amplitude between spoken words aren't reported as silence.

    # TODO: Convert sample indices to seconds (sample_index / sample_rate)
    #  so the output shows start/end *times*, not raw indices.

    window_right = 0
    for window_left in range(audio_data.size):
        audio_value = audio_data[window_left]

        while audio_value < 100:
            window_right += 1
            if window_right >= audio_data.size:
                break
            audio_value = audio_data[window_right]

        # Figure out where the silence window starts and ends.
        print(window_left, window_right)
    # print(audio_data)


def main():
    detect_silence()


if __name__ == "__main__":
    main()
