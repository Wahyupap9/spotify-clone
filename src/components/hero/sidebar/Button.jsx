import React from "react";

const Button = ({ children }) => {
  return (
    <button className="px-3 py-1 text-white bg-grayBg rounded-full active:bg-white active:text-black text-[.90rem]">
      {children}
    </button>
  );
};

export default Button;
