import React from "react";
import { songsData } from "../../../../assets/assets";
import { BsThreeDotsVertical } from "react-icons/bs";
import usePlayStore from "../../../../../store/store";

const SongListPhone = () => {
  return (
    <div className="sm:hidden grid grid-cols-1 p-3 gap-3">
      {songsData.map((song) => (
        <SongItem songItem={song} key={song.id} />
      ))}
    </div>
  );
};

const SongItem = ({ songItem }) => {
  const { song, playByID } = usePlayStore();

  return (
    <div
      onClick={() => playByID(songItem.id)}
      className="w-full flex text-white"
    >
      <img className="w-12" src={songItem.image} alt="" />
      <div className="flex justify-between items-center w-full px-2">
        <div className="flex flex-col">
          <h1 className={song.id === songItem.id ? `text-green` : `text-white`}>
            {songItem.name}
          </h1>
          <p className="text-grayText text-sm">{songItem.artist}</p>
        </div>
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default SongListPhone;
