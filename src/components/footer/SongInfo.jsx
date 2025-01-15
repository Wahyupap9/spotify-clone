import React from "react";

const SongInfo = ({ song }) => {
  return (
    <div className="col-span-1 flex px-3 md:px-5 items-center gap-3">
      <img className="w-10 md:w-14 rounded-lg" src={song.image} alt="" />
      <div className="text-grayText">
        <h1 className="text-white hover:underline">{song.name}</h1>
        <p className="text-sm hover:text-white hover:underline">
          {song.artist}
        </p>
      </div>
    </div>
  );
};

export default SongInfo;
