import React from "react";
import Sidebar from "./sidebar/Sidebar";
import MainHero from "./MainHero/Home/MainHero";
import { Route, Routes } from "react-router-dom";
import DisplayAlbum from "./MainHero/Album/DisplayAlbum";

const Hero = () => {
  return (
    <div className="flex gap-2 h-fit md:h-display w-[100vw]">
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainHero />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Hero;
