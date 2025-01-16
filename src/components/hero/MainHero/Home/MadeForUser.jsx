import React from "react";
import { USER } from "../../../../env/env";
import { albumsData } from "../../../../assets/assets";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import usePlayStore from "../../../../../store/store";

const MadeForUser = () => {
  return (
    <>
      <h1 className="pt-10 pb-1 text-white text-2xl font-bold">
        Made for {USER}
      </h1>
      <div className="flex gap-2 overflow-x-scroll overflow-y-hidden h-fit ">
        {albumsData.map((album) => (
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
      key={album.id}
      className="relative flex flex-col flex-none rounded p-4 w-44 md:w-56 h-fit hover:bg-grayBg transition-all group"
    >
      <img src={album.image} className="w-56" alt="" />
      <h1 className="text-grayText font-semibold mt-3">{album.name}</h1>
      <button
        onClick={() => playByID(0)}
        className="opacity-0 top-[100%] group-hover:opacity-100 group-hover:top-[65%] transition-all duration-500 absolute  -translate-y-[50%] right-5 p-5 bg-green rounded-full"
      >
        <FaPlay className="opacity-0 group-hover:opacity-100" />
      </button>
    </div>
  );
};

export default MadeForUser;
