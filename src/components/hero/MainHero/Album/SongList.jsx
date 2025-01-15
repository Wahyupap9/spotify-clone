import React, { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa6";
import SongListPhone from "./SongListPhone";
import SongListDekstop from "./SongListDekstop";
import Buttons from "./Buttons";

const SongList = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black">
      <nav className="flex justify-between items-center text-grayText text-2xl py-2 px-7 ">
        <FaDownload className="hover:text-gray-500 transition-all cursor-pointer" />
        <Buttons />
      </nav>
      {isMobile ? <SongListPhone /> : <SongListDekstop />}
    </div>
  );
};

export default SongList;
