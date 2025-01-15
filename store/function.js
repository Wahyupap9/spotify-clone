import { songsData } from "../src/assets/assets";

export const play = async (set, get, status) => {
  const isShuffle = get().isShuffle;
  const audioRef = get().audioRef;

  if (status === "normal") {
    audioRef.current.play();
    set({ isPlaying: true });
    return;
  }

  if (audioRef.current) {
    if (!isShuffle) {
      audioRef.current.play();
      set({ isPlaying: true });
    } else {
      const num = Math.floor(Math.random() * (songsData.length - 1));
      await set({ song: songsData[num] });
      audioRef.current.play();
      set({ isPlaying: true });
    }
  } else {
    console.error("Audio reference is not set.");
  }
};

export const pause = (set, get) => {
  const audioRef = get().audioRef;

  if (audioRef.current) {
    audioRef.current.pause();
    set({ isPlaying: false });
  } else {
    console.error("Audio reference is not set.");
  }
};

export const skipFoward = async (set, get) => {
  const isShuffle = get().isShuffle;

  if (isShuffle) {
    const num = Math.floor(Math.random() * (songsData.length - 1));
    await set({ song: songsData[num] });
    get().audioRef.current.play();
    set({ isPlaying: true });
    return;
  }
  if (get().song.id + 1 < songsData.length) {
    await set({ song: songsData[get().song.id + 1], isPlaying: true });
    get().audioRef.current.play();
  } else if (get().song.id + 1 === songsData.length) {
    await set({ song: songsData[0], isPlaying: true });
    get().audioRef.current.play();
  }
};

export const skipBackward = async (set, get) => {
  if (get().song.id > 0) {
    await set({ song: songsData[get().song.id - 1], isPlaying: true });
    get().audioRef.current.play();
  } else if (get().song.id === 0) {
    await set({ song: songsData[songsData.length - 1], isPlaying: true });
    get().audioRef.current.play();
  } else return;
};
