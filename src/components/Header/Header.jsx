import React from "react";
import { Navigation, SearchBar, Profile } from "./Navbar";

const Header = () => {
  return (
    <header className="h-16 flex justify-between items-center px-10">
      <Navigation />
      <div className="hidden sm:block">
        <SearchBar />
      </div>
      <Profile />
    </header>
  );
};

export default Header;
