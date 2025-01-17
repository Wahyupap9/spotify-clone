import React, { useEffect, useRef } from "react";
import SongInfo from "./SongInfo";
import usePlayStore from "../../../store/store";
import { FaPlay, FaPause } from "react-icons/fa";

const FooterPhone = () => {
  const { song, isPlaying, play, pause, setAudioRef, skipFoward, setTime } =
    usePlayStore();
  const audioRef = useRef();
  const seekBg = useRef();
  const barRef = useRef();

  useEffect(() => {
    console.log(audioRef);
    setAudioRef(audioRef);
    return () => {
      setAudioRef({ current: null });
      console.log(audioRef);
    };
  }, [setAudioRef]);

  useEffect(() => {
    audioRef.current.ontimeupdate = () => {
      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60),
          minute: Math.floor(audioRef.current.currentTime / 60),
        },
        finishTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      });
      seekBg.current.style.width =
        (audioRef.current.currentTime / audioRef.current.duration) *
          barRef.current.offsetWidth +
        "px";
    };
  }, [audioRef]);
};

export default FooterPhone;
