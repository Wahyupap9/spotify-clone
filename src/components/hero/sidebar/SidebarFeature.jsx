import React from "react";
import Button from "./Button";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FiArrowRight } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const SidebarFeature = ({ hideSidebar }) => {
  return (
    <nav className=" flex flex-col gap-3">
      <div className="flex justify-center md:justify-between items-center text-grayText">
        <p className="flex justify-center items-center gap-3 font-semibold hvr-text">
          <HiMiniSquare3Stack3D className="text-4xl" />
          <span className={`hidden ${hideSidebar ? null : `md:block`} `}>
            Your Libary
          </span>
        </p>
        <div
          className={`hidden ${hideSidebar ? null : `md:flex`} gap-3 text-2xl`}
        >
          <FaPlus className="hvr-text" />
          <FiArrowRight className="hvr-text" />
        </div>
      </div>
      <div
        className={`hidden ${hideSidebar ? null : `md:flex`} flex-row gap-3`}
      >
        <Button>Playlists</Button>
        <Button>Artist</Button>
      </div>
    </nav>
  );
};

export default SidebarFeature;
