import React from "react";
import { songsData } from "../../../../assets/assets";
import { IoTimeOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa6";
import usePlayStore from "../../../../../store/store";

const SongListDekstop = () => {
  return (
    <>
      <div className="grid grid-cols-3 lg:grid-cols-4 text-grayText px-4 lg:px-10 pr-20 mt-5">
        <div className="flex">
          <p className="pr-5">#</p>
          <span>Title</span>
        </div>

        <p className="pl-16">Album</p>
        <p className="pl-16 hidden lg:block">Date Added</p>
        <IoTimeOutline className="justify-self-end" />
      </div>
      {songsData.map((song, i) => (
        <SongItem key={song.id} songItem={song} i={i} />
      ))}
    </>
  );
};

const SongItem = ({ i, songItem }) => {
  const { playByID, song } = usePlayStore();
  const songID = song.id;

  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 text-white px-4 lg:px-10 pr-20 py-2 group hover:bg-grayBg">
      <div className="flex group items-center">
        <p
          className={`group-hover:hidden pr-5 ${
            songID === songItem.id ? `text-green` : `text-white`
          }`}
        >
          {i + 1}
        </p>
        <div className="pr-4 hidden group-hover:block text-white text-sm">
          <FaPlay onClick={() => playByID(songItem.id)} />
        </div>
        <span
          className={`flex items-center gap-3 ${
            songID === songItem.id ? `text-green` : `text-white`
          }`}
        >
          <img className="w-10" src={songItem.image} alt="" />
          {songItem.name}
        </span>
      </div>
      <p className="pl-16 self-center">{songItem.artist}</p>
      <p className="pl-16 hidden lg:block self-center">Jan 10, 2023</p>
      <p className="justify-self-end self-center">{songItem.duration}</p>
    </div>
  );
};
export default SongListDekstop;
