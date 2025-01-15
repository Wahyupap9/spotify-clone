import React from "react";
import Header from "./Header";
import SongList from "./SongList";
import { useParams } from "react-router-dom";
import { albumsData } from "../../../../assets/assets";

const DisplayAlbum = () => {
  const { id } = useParams();
  const data = albumsData[id];

  return (
    <div className="flex-1 bg-Black rounded-lg py-1 md:p-5 overflow-y-scroll">
      <Header data={data} />
      <SongList />
    </div>
  );
};

export default DisplayAlbum;
