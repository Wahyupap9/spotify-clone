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
    setAudioRef(audioRef);
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

  return (
    <div className="fixed grid bottom-0 bg-grayBg rounded-lg h-16 w-full">
      <div className="w-full pr-6 flex justify-self-center justify-between items-center">
        <SongInfo song={song} />
        {!isPlaying ? (
          <FaPlay onClick={play} className="text-white" />
        ) : (
          <FaPause onClick={pause} className="text-white" />
        )}
        <audio
          ref={audioRef}
          preload="auto"
          src={song.file}
          onEnded={skipFoward}
        ></audio>
      </div>
      <div ref={barRef} className="w-full justify-self-end h-1 bg-Black bottom">
        <div ref={seekBg} className="bg-white h-full w-0"></div>
      </div>
    </div>
  );
};

export default FooterPhone;
