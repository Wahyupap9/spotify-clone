import React from "react";
import { albumsData } from "../../../../assets/assets";
import Buttons from "./Buttons";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router";
import usePlayStore from "../../../../../store/store";

const AlbumList = () => {
  return (
    <>
      <Buttons />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {albumsData.slice(0, 8).map((album) => (
          <AlbumItem key={album.id} album={album} />
        ))}
      </div>
    </>
  );
};

const AlbumItem = ({ album }) => {
  const navigate = useNavigate();
  const { playByID } = usePlayStore();
  return (
    <div
      onClick={() => navigate(`/album/${album.id}`)}
      className="flex text-[.85rem] lg:text-base h-12 bg-grayBg rounded-sm relative group hover:bg-grayText transition-all"
    >
      <button
        onClick={() => playByID(0)}
        className="opacity-0 group-hover:opacity-100 top-[50%] rounded-full bg-green p-2 -translate-y-[50%] absolute right-2"
      >
        <FaPlay className="transition-all duration-300" />
      </button>
      <img className="w-12" src={album.image} alt="" />
      <h1 className="self-center ml-2 font-semibold text-white">
        {album.name}
      </h1>
    </div>
  );
};

export default AlbumList;
