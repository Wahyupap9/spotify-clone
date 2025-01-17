import { create } from "zustand";
import { songsData } from "../src/assets/assets";
import { play, pause, skipFoward, skipBackward } from "./function";

const usePlayStore = create((set, get) => ({
  isPlaying: false,
  isShuffle: false,
  audioRef: { current: {} },
  time: {
    currentTime: {
      second: 0,
      minute: 0,
    },
    finishTime: {
      second: 0,
      minute: 0,
    },
  },
  song: songsData[0],

  setIsShuffle: (state) => set({ isShuffle: state }),
  setTime: (time) => set({ time }),
  setAudioRef: (ref) => set(() => ({ audioRef: ref })),
  play: (status) => play(set, get, status),
  pause: () => pause(set, get),
  skipFoward: () => skipFoward(set, get),
  skipBackward: () => skipBackward(set, get),
  playByID: async (id) => {
    await set({
      song: songsData.filter((song) => song.id === id)[0],
      isPlaying: true,
    });
    get().audioRef.current.play();
  },
}));

export default usePlayStore;
