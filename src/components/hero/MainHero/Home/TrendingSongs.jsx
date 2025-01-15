import React from "react";
import { songsData } from "../../../../assets/assets";
import { FaPlay, FaPause } from "react-icons/fa";
import usePlayStore from "../../../../../store/store";

const TrendingSongs = () => {
  const { playByID, song, isPlaying, pause } = usePlayStore();
  return (
    <>
      <h1 className="pt-10 pb-1 text-white text-2xl font-bold">
        Trending Songs
      </h1>
      <div className="flex gap-2 overflow-x-scroll overflow-y-hidden h-fit ">
        {songsData.map((songItem) => (
          <div
            key={songItem.id}
            className="relative flex flex-col flex-none rounded p-4 w-44 md:w-56 h-fit hover:bg-grayBg transition-all group"
          >
            <img src={songItem.image} className="w-56" alt="" />
            <h1 className="text-grayText font-semibold mt-3">
              {songItem.name}
            </h1>
            <button
              onClick={() =>
                isPlaying && song.id === songItem.id
                  ? pause()
                  : playByID(songItem.id)
              }
              className="opacity-0 top-[100%] group-hover:opacity-100 group-hover:top-[65%] transition-all duration-500 absolute  -translate-y-[50%] right-5 p-4 bg-green rounded-full"
            >
              {isPlaying && song.id === songItem.id ? (
                <FaPause />
              ) : (
                <FaPlay className="opacity-0 group-hover:opacity-100" />
              )}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TrendingSongs;
