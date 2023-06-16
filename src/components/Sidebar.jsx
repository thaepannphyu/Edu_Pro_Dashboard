import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  AiOutlineAppstore,
  AiOutlineUnorderedList,
  AiOutlineCalendar,
  AiOutlineTable,
  AiOutlineLock,
} from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const hundleSidebar = () => {
    setOpen(!open);
  };

  const [drop, setDrop] = useState(false);
  const hundleDrop = () => {
    setDrop(!drop);
  };

  return (
    <div className=" flex items-start gap-3">
      {/* Sidebar  */}
      <div
        className={`bgTransparent sideBar text-white h-screen ${
          open ? "block" : "hidden"
        }`}>
        {/* logo and name  */}
        <div className=" flex gap-5 items-center px-10 py-5 bg-black bg-opacity-30">
          <img
            src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/logo-2.png"
            className=" w-[100px]"
            alt=""
          />
          <p className=" title">Hello</p>
        </div>
        <hr className=" bg-slate-500 border-0 py-[0.2px] " />
        {/* main navigation  */}
        <div className=" flex flex-col gap-4 mt-4">
          <p className=" text-[#ffffffa6] text-[12px] uppercase ms-4">
            main navigation
          </p>
          <Link to={"/"}>
            <div className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
              <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
                <AiOutlineAppstore />
              </p>
              <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
                Dashboard
              </span>
            </div>
          </Link>
          <Link to={"/forms"}>
            <div className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
              <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
                <AiOutlineUnorderedList />
              </p>
              <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
                Forms
              </span>
            </div>
          </Link>
          <Link to={"/calendar"}>
            <div className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
              <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
                <AiOutlineCalendar />
              </p>
              <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
                Calendar
              </span>
            </div>
          </Link>
          <Link to={"/profile"}>
            <div className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
              <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
                <RiContactsLine />
              </p>
              <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
                Profile
              </span>
            </div>
          </Link>

          <Link to={"/login"}>
            <div className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
              <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
                <AiOutlineLock />
              </p>
              <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
                Login
              </span>
            </div>
          </Link>
          <Link to={"/register"}>
            <div className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
              <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
                <CgProfile />
              </p>
              <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
                Registration
              </span>
            </div>
          </Link>
          <div className=" relative group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3  ">
            <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
              <AiOutlineTable />
            </p>
            <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
              Tables
            </span>
            <button
              className=" font-bold title text-xl py-5 ps-[40%]"
              onClick={hundleDrop}>
              {drop ? (
                <MdOutlineKeyboardArrowUp />
              ) : (
                <MdOutlineKeyboardArrowDown />
              )}
            </button>
            {drop ? (
              <ul className=" absolute top-16 left-0 w-[100%] ">
                <li className=" flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2">
                  <p className=" text-[#ffffffa6] text-xl hover:text-[#ffffff]">
                    <AiOutlineTable />
                  </p>
                  <button className=" text-[#ffffffa6] text-[15px] hover:text-[#ffffff]">
                    Teacher Tables
                  </button>
                </li>
                <li className=" flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2">
                  <p className=" text-[#ffffffa6] text-xl hover:text-[#ffffff]">
                    <AiOutlineTable />
                  </p>
                  <button className=" text-[#ffffffa6] text-[15px] hover:text-[#ffffff]">
                    Student Tables
                  </button>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      {/* Burger icon  */}
      <button className=" font-bold title text-xl py-5" onClick={hundleSidebar}>
        <RxHamburgerMenu />
      </button>
    </div>
  );
};

export default Sidebar;
