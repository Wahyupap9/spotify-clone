import React, { useEffect, useRef } from "react";
import { RiGlobalLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";

const Header = ({ data }) => {
  const bgColor = data.bgColor;
  const bgAlbum = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");

  useEffect(() => {
    isAlbum
      ? (bgAlbum.current.style.background = `linear-gradient(${bgColor}, #000)`)
      : (bgAlbum.current.style.background = "#000");
  });
  return (
    <header
      className="flex flex-col md:flex-row w-full py-5 px-3"
      ref={bgAlbum}
    >
      <img className="self-center w-52 rounded mb-3" src={data.image} alt="" />
      <div className="flex-1 flex flex-col gap-2 justify-end md:px-6">
        <h1 className="font-bold text-white text-2xl md:text-6xl">
          {data.name}
        </h1>
        <p className="flex gap-2 font-semibold items-center text-grayText">
          <span className="h-0 w-0 p-3 text-[.8rem] rounded-full bg-red-500 font-bold flex justify-center items-center text-black">
            C
          </span>
          Chill
        </p>
        <div className="flex gap-1 font-semibold items-center text-grayText">
          <RiGlobalLine className="text-xl" /> 19 h 15 min
        </div>
      </div>
    </header>
  );
};

export default Header;
