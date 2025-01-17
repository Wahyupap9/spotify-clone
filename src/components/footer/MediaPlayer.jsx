import React from "react";
import { FaShuffle } from "react-icons/fa6";
import { IoIosSkipBackward, IoIosSkipForward } from "react-icons/io";
import { FaPlay, FaPause } from "react-icons/fa";
import { SlLoop } from "react-icons/sl";
import usePlayStore from "../../../store/store";
import BarMusic from "./BarMusic";

const MediaPlayer = () => {
  const { isPlaying, play, pause, skipFoward, skipBackward } = usePlayStore();

  return (
    <>
      <div className="col-span-2 flex flex-col justify-center items-center gap-2 text-grayText">
        <div className="flex gap-5 text-2xl items-center">
          <FaShuffle className="text-xl hvr-text" />
          <IoIosSkipBackward onClick={skipBackward} className="hvr-text" />
          {isPlaying ? (
            <Pause pause={pause} />
          ) : (
            <Play play={() => play("normal")} />
          )}
          <IoIosSkipForward onClick={skipFoward} className="hvr-text" />
          <SlLoop className="text-base hvr-text" />
        </div>
        <BarMusic />
      </div>
    </>
  );
};

const Play = ({ play }) => {
  return (
    <button
      onClick={play}
      className="p-[.6rem] bg-white text-Black rounded-full hover:scale-105"
    >
      <FaPlay className="text-[.8rem]" />
    </button>
  );
};

const Pause = ({ pause }) => {
  return (
    <button
      onClick={pause}
      className="p-[.6rem] bg-white text-Black rounded-full hover:scale-105"
    >
      <FaPause className="text-[.8rem]" />
    </button>
  );
};

export default MediaPlayer;
