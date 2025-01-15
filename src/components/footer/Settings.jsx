import React from "react";
import { BsFilePlayFill } from "react-icons/bs";
import { HiMiniQueueList } from "react-icons/hi2";

const Settings = () => {
  return (
    <div className="col-span-1 flex gap-5 justify-end items-center pr-16 text-xl text-grayText">
      <BsFilePlayFill className="hvr-text hover:scale-[1.1]" />
      <HiMiniQueueList className="hvr-text hover:scale-[1.1]" />
    </div>
  );
};

export default Settings;
