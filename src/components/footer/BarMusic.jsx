import React from "react";
import usePlayStore from "../../../store/store";
import { useRef } from "react";
import { useEffect } from "react";

const BarMusic = () => {
  const { time, setTime, audioRef } = usePlayStore();
  const seekBarRef = useRef(null);
  const barRef = useRef(null);
  const currentSecond = time.currentTime.second;

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
      seekBarRef.current.style.width =
        (audioRef.current.currentTime / audioRef.current.duration) *
          barRef.current.offsetWidth +
        "px";
    };
  }, [audioRef]);

  return (
    <div className="w-[80%] flex items-center gap-3 text-sm font-montserrat">
      <p>
        {time.currentTime.minute}.{currentSecond.toString().padStart(2, "0")}
      </p>
      <div ref={barRef} className="w-full h-1 bg-white rounded-full">
        <div
          ref={seekBarRef}
          className="w-0 h-full bg-green rounded-full"
        ></div>
      </div>
      <p>
        {time.finishTime.minute}.{time.finishTime.second}
      </p>
    </div>
  );
};

export default BarMusic;
