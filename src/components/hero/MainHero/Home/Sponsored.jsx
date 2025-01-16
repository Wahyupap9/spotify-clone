import React, { useMemo } from "react";
import { albumsData } from "../../../../assets/assets";
import { BsThreeDots } from "react-icons/bs";

const Sponsored = () => {
  const num = useMemo(() => {
    return Math.floor(Math.random() * albumsData.length);
  }, []);

  const albumData = albumsData[num];

  return (
    <div className="hidden sm:block">
      <div className="h-[17rem] sponsored-gradient flex w-full p-6 gap-5">
        <img src={albumData.image} alt="" className="rounded w-56" />
        <div className="flex-1 flex flex-col gap-2">
          <header className=" flex w-full justify-between items-center text-sm mb-1">
            <h1 className="font-semibold text-white">Playlist</h1>
            <p className="font-semibold text-[.8rem] px-2 py-1 rounded-lg bg-black text-white">
              Sponsored
            </p>
          </header>
          <h1 className="text-white underline text-3xl lg:text-6xl font-bold">
            {albumData.name}
          </h1>
          <p className="text-white">{albumData.desc}</p>
          <div className="flex gap-3 items-center">
            <button className="bg-green px-4 py-1 lg:px-7 lg:py-3 rounded-full border-2 border-Black text-Black font-semibold">
              Play
            </button>
            <button className="bg-none px-4 py-1 lg:px-7 lg:py-3 rounded-full border-2 border-grayText text-white font-semibold">
              Follow
            </button>
            <BsThreeDots className="text-grayText text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
