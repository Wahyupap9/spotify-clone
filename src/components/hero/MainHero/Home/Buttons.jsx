import React from "react";

const Buttons = ({ children }) => {
  return (
    <button className="px-3 py-2 rounded-full text-sm bg-grayBg text-white font-semibold text-center">
      {children}
    </button>
  );
};

export default Buttons;
