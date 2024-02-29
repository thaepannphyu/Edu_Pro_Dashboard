import React, { useEffect, useState, useRef } from "react";
import { FiMenu, FiMail, FiBell } from "react-icons/fi";
import { BiSearch, BiLockAlt } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import "./navbar.css";
import Profile from "../assets/Profile.png";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { StateContextCustom } from "./context/StateContext";

const Navbar = () => {
  // const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { isSidebarOpen, setSidebarOpen } = StateContextCustom();
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    event.stopPropagation();
    setShowBox(!showBox);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
      // console.log(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (boxRef.current && !boxRef.current.contains(event.target)) {
      setShowBox(false);
    }
  };

  const boxRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div>
      <div
        className={`sidebar ${isSidebarOpen ? "sidebar-transition" : ""} z-50`}>
        <Sidebar
          isOpen={isSidebarOpen}
          isScrolled={isScrolled}
          toggleSidebar={toggleSidebar}
        />
      </div>
      <nav
        className={` z-30 h-[65px] text-white p-4 flex fixed ${
          isSidebarOpen ? "navW" : " left-0 w-full"
        } transition-all ease-in duration-300 ${
          isScrolled ? " bg-black" : "bg-black bg-opacity-20"
        } ${isScrolled ? "" : ""}  `}>
        {/* Navbar content */}
        <div className={` flex items-center justify-between w-full`}>
          <div className=" flex gap-3 ">
            <button className={` text-white text-xl `} onClick={toggleSidebar}>
              <FiMenu />
            </button>
            <div className=" flex bg-[#ffffff33] putField items-center py-2 px-3 rounded">
              <input
                type="text"
                className=" bg-transparent text-sm outline-none"
                placeholder="Enter Keywords"
              />
              <p className=" text-[#ffffffc2] text-xl cursor-pointer">
                <BiSearch />
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-5 fixed mr-5 right-0 cursor-pointer">
            <span className=" text-xl h-icon ">
              <FiMail />
            </span>
            <span className=" text-xl h-icon">
              <FiBell />
            </span>
            <span className=" text-xl h-icon">
              <BsFlagFill />
            </span>
            <span ref={boxRef}>
              <img
                onClick={handleClick}
                className={`w-[35px] h-[35px] navbar-profile-shadow rounded-full `}
                src={Profile}
                alt=""
              />
              {showBox && (
                <div
                  ref={boxRef}
                  className={`absolute bg-gray-700 bg-opacity-90 w-[200px] top-full ${
                    isSidebarOpen ? " box" : " right-4"
                  }  mt-2 p-4 rounded shadow-lg `}>
                  <div className=" flex flex-col items-start gap-2">
                    <Link
                      to={"/register"}
                      className=" w-full flex items-center justify-between px-2 py-1 text-left rounded text-[#ffffffc9] hover:text-white hover:bg-[#ffffff33]">
                      Register <CgProfile className=" text-xl" />
                    </Link>

                    <Link
                      to={"/login"}
                      className=" mt-2 flex items-center justify-between  w-full px-2 py-1 text-left rounded text-[#ffffffc9] hover:text-white hover:bg-[#ffffff33]">
                      LogIn <BiLockAlt className=" text-xl" />
                    </Link>
                    <Link
                      to={"/"}
                      className=" mt-2 flex items-center justify-between  w-full px-2 py-1 text-left rounded text-[#ffffffc9] hover:text-white hover:bg-[#ffffff33]">
                      LogOut <IoExitOutline className=" text-xl" />
                    </Link>
                  </div>
                </div>
              )}
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
