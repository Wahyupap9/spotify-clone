import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import usePlayStore from "../../../../../store/store";

const Buttons = () => {
  const { setIsShuffle, isShuffle, play, pause, isPlaying } = usePlayStore();

  return (
    <div className="flex gap-5 items-center">
      <FaShuffle
        onClick={() => setIsShuffle(!isShuffle)}
        className={`hover:text-gray-500 transition-all cursor-pointer ${
          isShuffle ? `text-green` : null
        }`}
      />
      <button className="p-3 bg-green rounded-full text-Black text-base">
        {!isPlaying ? (
          <FaPlay onClick={() => play("shuffle")} />
        ) : (
          <FaPause onClick={pause} />
        )}
      </button>
    </div>
  );
};

export default Buttons;
