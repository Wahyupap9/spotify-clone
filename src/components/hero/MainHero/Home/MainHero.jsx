import React from "react";
import Sponsored from "./Sponsored";
import AlbumList from "./AlbumList";
import MadeForUser from "./MadeForUser";
import TrendingSongs from "./TrendingSongs";

const MainHero = () => {
  return (
    <div className="flex-1 bg-Black rounded-lg p-1 md:p-5 overflow-y-scroll">
      <Sponsored />
      <div className="px-5">
        <AlbumList />
        <MadeForUser />
        <TrendingSongs />
      </div>
    </div>
  );
};

export default MainHero;
