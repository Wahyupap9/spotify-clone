import React from "react";

const Buttons = () => {
  <div className="py-6 flex gap-2">
    <Button>All</Button>
    <Button>Playlist</Button>
    <Button>Podcast</Button>
  </div>;
};

const Button = ({ children }) => {
  return (
    <button className="px-3 py-2 rounded-full text-sm bg-grayBg text-white font-semibold text-center">
      {children}
    </button>
  );
};

export default Buttons;
