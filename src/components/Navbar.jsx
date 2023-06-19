import React, { useEffect, useState, useRef } from "react";
import { FiMenu, FiMail, FiBell } from "react-icons/fi";
import { BiSearch, BiLockAlt } from "react-icons/bi";
import { BsFlagFill } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import "./navbar.css";
import Profile from "../assets/profile.png";
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
    setShowBox(!showBox);
  };

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
        // !event.target.classList.contains("sidebar-item")
      ) {
        setSidebarOpen(false);
      }
    };

    const isSidebarItemClicked = (target) => {
      let node = target;
      while (node !== document) {
        if (node.classList.contains("sidebar-item")) {
          return true;
        }
        node = node.parentNode;
      }
      return false;
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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

  return (
    <div>
      <div
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? "sidebar-transition" : ""} z-50`}>
        <Sidebar isOpen={isSidebarOpen} isScrolled={isScrolled} />
      </div>
      <nav
        ref={sidebarRef}
        className={`z-50  h-[65px] text-white p-4 flex fixed ${
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
              <p className=" text-[#ffffffc2] text-xl">
                <BiSearch />
              </p>
            </div>
          </div>
          <div className=" flex items-center gap-5 fixed mr-5 right-0">
            <span className=" text-xl">
              <FiMail />
            </span>
            <span className=" text-xl">
              <FiBell />
            </span>
            <span className=" text-xl">
              <BsFlagFill />
            </span>
            <span>
              <img
                onClick={handleClick}
                className={`w-[35px] h-[35px] navbar-profile-shadow rounded-full `}
                src={Profile}
                alt=""
              />
            </span>
          </div>
        </div>

        {showBox && (
          <div
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
      </nav>
    </div>
  );
};

export default Navbar;
