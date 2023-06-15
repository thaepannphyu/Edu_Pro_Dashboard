import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className=" bgTransparent flex py-5 gap-9 items-center">
      <p className=" title text-2xl ms-5">
        <RxHamburgerMenu />
      </p>
      <div className=" flex bg-[#ffffff33] w-[450px] items-center justify-between py-2 px-3 rounded">
        <input
          type="text"
          className=" bg-transparent text-sm"
          placeholder="Enter Keywords"
        />
        <p className=" text-[#ffffffc2]">
          <BiSearch />
        </p>
      </div>
    </div>
  );
};

export default Navbar;
