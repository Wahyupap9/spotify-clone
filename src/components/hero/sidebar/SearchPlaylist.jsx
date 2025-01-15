import { IoSearch } from "react-icons/io5";
import React, { useRef, useState, useEffect } from "react";

export default function SearchPlaylist() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setShowSearchBar(false);
    }
  };

  return (
    <div
      ref={searchRef}
      className="relative"
      onClick={() => setShowSearchBar(true)}
    >
      <IoSearch className="text-2xl absolute top-[50%] -translate-y-[50%] left-2 hvr-text" />
      <input
        className={`${
          !showSearchBar ? `w-0` : `w-60`
        } rounded-full bg-grayBg py-2 text-[.75rem] text-white indent-9 transition-all duration-300 outline-none`}
        placeholder="Search in Your Libary"
        type="text"
      />
    </div>
  );
}
