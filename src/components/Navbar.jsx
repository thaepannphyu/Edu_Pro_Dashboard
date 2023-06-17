import React, { useEffect, useState } from "react";
import { FiMenu, FiMail, FiBell } from "react-icons/fi";
import { BiSearch, BiLockAlt } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import "./navbar.css";
import Profile from "../assets/profile.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    setShowBox(!showBox);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} />
      <nav
        className={`  h-[65px]  text-white p-4 flex fixed ${
          isSidebarOpen ? " navW" : "w-[100%]"
        } ${isScrolled ? " bg-black" : "bg-black bg-opacity-20"}  `}>
        {/* Navbar content */}
        <div className={` flex items-center`}>
          <div className=" flex gap-3 ">
            <button className="text-white text-xl " onClick={toggleSidebar}>
              <FiMenu />
            </button>
            <div className=" flex bg-[#ffffff33] putField items-center py-2 px-3 rounded">
              <input
                type="text"
                className=" bg-transparent text-sm"
                placeholder="Enter Keywords"
              />
              <p className=" text-[#ffffffc2] text-xl">
                <BiSearch />
              </p>
            </div>
          </div>
          <div className={`flex  items-center icons`}>
            <span className=" text-2xl">
              <FiMail />
            </span>
            <span className=" text-2xl">
              <FiBell />
            </span>
            <span className=" text-2xl">
              <BsFlagFill />
            </span>
          </div>
          <span className=" pfp">
            <img
              onClick={handleClick}
              className=" w-[40px] h-[40px] rounded-full"
              src={Profile}
              alt=""
            />
          </span>
        </div>
        {showBox && (
          <div className="absolute bg-black bg-opacity-40 w-[200px] top-full right-[10%] mt-2 p-4 rounded shadow-lg">
            <div className=" flex flex-col items-start gap-2">
              <Link
                to={"/register"}
                className=" w-full flex items-center justify-between px-2 py-1 text-left rounded text-[#ffffffc9] hover:text-white hover:bg-[#ffffff33]">
                Register <CgProfile className=" text-xl" />
              </Link>

              <Link to={'/login'} className=" mt-2 flex items-center justify-between  w-full px-2 py-1 text-left rounded text-[#ffffffc9] hover:text-white hover:bg-[#ffffff33]">
                LogIn <BiLockAlt className=" text-xl" />
              </Link>
              <Link to={'/'} className=" mt-2 flex items-center justify-between  w-full px-2 py-1 text-left rounded text-[#ffffffc9] hover:text-white hover:bg-[#ffffff33]">
                LogOut <IoExitOutline className=" text-xl" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
