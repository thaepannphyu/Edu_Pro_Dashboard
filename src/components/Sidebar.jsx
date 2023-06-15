import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const hundleSidebar = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`bg-gray-800 text-white h-screen w-1/4 ${
        open ? "block" : "hidden"
      }`}>
      <button
        className="absolute text-white hover:text-gray-400 focus:outline-none"
        onClick={hundleSidebar}>
        <RxHamburgerMenu />
      </button>
    </div>
  );
};

export default Sidebar;
