import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { assets } from "../../assets/assets";
import img3 from "../../assets/img3.jpg";
import { IoFileTrayStacked } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center gap-5">
      <img
        onClick={() => navigate(-1)}
        className="w-5 cursor-pointer"
        src={assets.arrow_left}
        alt=""
      />
      <img
        onClick={() => navigate(1)}
        className="w-5 cursor-pointer"
        src={assets.arrow_right}
        alt=""
      />
    </nav>
  );
};

export const SearchBar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between gap-5 items-center">
      <div className="h-12 w-12 flex justify-center items-center rounded-full bg-Black">
        <GoHomeFill
          onClick={() => navigate("/")}
          className="text-white text-2xl "
        />
      </div>
      <div className="flex relative">
        <input
          type="text"
          className="w-[27rem] h-12 indent-12 rounded-full bg-Black opacity-80 text-white border-none outline-none placeholder:text-gray-300"
          placeholder="What do you want to play?"
        />
        <img
          className="absolute w-6 top-[50%] -translate-y-[50%] left-3"
          src={assets.search_icon}
          alt=""
        />
        <div className="border-l border-white px-3 absolute right-2 top-[50%] -translate-y-[50%]">
          <IoFileTrayStacked className="text-white text-2xl " />
        </div>
      </div>
    </div>
  );
};

export const Profile = () => {
  return (
    <div className="flex gap-6 justify-between items-center ">
      <button className="px-3 py-1 bg-white font-semibold rounded-full hidden lg:block">
        Explore Premium
      </button>
      <FaRegBell className="text-2xl text-white" />
      <FaPeopleGroup className="text-white text-2xl" />
      <div className="bg-Black rounded-full w-12 h-12 flex justify-center items-center">
        <img src={img3} alt="" className="w-8 rounded-full " />
      </div>
    </div>
  );
};
