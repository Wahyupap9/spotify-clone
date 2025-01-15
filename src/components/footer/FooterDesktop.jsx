import React from "react";
import usePlayStore from "../../../store/store";
import SongInfo from "./SongInfo";
import MediaPlayer from "./MediaPlayer";
import Settings from "./Settings";

const FooterDesktop = () => {
  const { song } = usePlayStore();

  return (
    <div className="grid grid-cols-4 footerDesign">
      <SongInfo song={song} />
      <MediaPlayer song={song} />
      <Settings />
    </div>
  );
};

export default FooterDesktop;
