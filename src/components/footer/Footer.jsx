import React, { useEffect, useRef, useState } from "react";
import SongInfo from "./SongInfo";
import { FaPause, FaPlay } from "react-icons/fa6";
import MediaPlayer from "./MediaPlayer";
import Settings from "./Settings";
import usePlayStore from "../../../store/store";

const Footer = () => {
  const { song, isPlaying, play, pause, setAudioRef, skipFoward, setTime } =
    usePlayStore();
  const audioRef = useRef();
  const seekBg = useRef();
  const barRef = useRef();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    document.title = "Spotify Clone";
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <>
      {isMobile ? (
        <div className="fixed grid bottom-0 bg-grayBg rounded-lg h-16 w-full">
          <div className="w-full pr-6 flex justify-self-center justify-between items-center">
            <SongInfo song={song} />
            {!isPlaying ? (
              <FaPlay onClick={play} className="text-white" />
            ) : (
              <FaPause onClick={pause} className="text-white" />
            )}
          </div>
          <div
            ref={barRef}
            className="w-full justify-self-end h-1 bg-Black bottom"
          >
            <div ref={seekBg} className="bg-white h-full w-0"></div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-4 footerDesign">
          <SongInfo song={song} />
          <MediaPlayer song={song} />
          <Settings />
        </div>
      )}

      <audio
        ref={audioRef}
        preload="auto"
        src={song.file}
        onEnded={skipFoward}
      ></audio>
    </>
  );
};

export default Footer;
