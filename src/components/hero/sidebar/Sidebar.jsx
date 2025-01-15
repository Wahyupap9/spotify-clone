import { albumsData } from "../../../assets/assets";
import { TbMenu3 } from "react-icons/tb";
import SidebarFeature from "./SidebarFeature";
import SearchPlaylist from "./SearchPlaylist";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [hideSidebar, setHideSidebar] = useState(false);

  return (
    <div
      className={`hidden sm:flex flex-col sm:w-[15%] ${
        hideSidebar ? `md:w-[8rem] justify-center items-center` : `md:w-[27%]`
      } pt-5 px-5 bg-Black rounded-lg relative transition-all`}
    >
      <SidebarFeature hideSidebar={hideSidebar} />
      <Playlists hideSidebar={hideSidebar} />
      <button
        onClick={() => setHideSidebar(!hideSidebar)}
        className="absolute hidden md:block -right-5 top-[50%] -translate-y-[50%] bg-grayBg p-2 rounded-xl"
      >
        {hideSidebar ? (
          <FaArrowRight className="text-white" />
        ) : (
          <FaArrowLeft className="text-white" />
        )}
      </button>
    </div>
  );
};

const Playlists = ({ hideSidebar }) => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col mt-5 gap-3 flex-1 overflow-x-scroll">
      <div
        className={`hidden ${
          hideSidebar ? null : `md:flex`
        }  text-grayText w-full justify-between items-center`}
      >
        <SearchPlaylist />
        <p className={`hidden justify-between items-center gap-3 hvr-text`}>
          Recent <TbMenu3 className="text-2xl" />
        </p>
      </div>
      {albumsData.map((album) => {
        return (
          <div
            onClick={() => navigate(`/album/${album.id}`)}
            key={album.id}
            className="flex justify-center md:justify-start text-white text-[.9rem] gap-2 p-1 group hover:bg-grayBg"
          >
            <img className="w-14 h-14 rounded-sm" src={album.image} alt="" />
            <div
              className={`hidden ${
                hideSidebar ? null : `md:flex`
              } flex-col justify-center`}
            >
              <p>{album.name}</p>
              <p className="text-grayText">
                {album.desc.split(" ").slice(0, 3).join(" ")}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
