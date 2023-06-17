import React, { useState } from "react";
import {
  AiOutlineAppstore,
  AiOutlineUnorderedList,
  AiOutlineCalendar,
  AiOutlineTable,
  AiOutlineLock,
} from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { GiNewspaper } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={` bg-black lg:bg-opacity-20 z-50 bg-opacity-100 w-[230px] flex flex-col fixed ${
        isOpen ? "" : "hidden"
      }`}>
      {/* Sidebar content */}
      <div className=" flex gap-5 items-center px-10 py-5 h-[65px] bg-black bg-opacity-30 ">
        <img
          className=" w-[100px]"
          src="https://eduvibe.devsvibe.com/main/wp-content/uploads/2023/01/logo-2.png"
          alt=""
        />
      </div>
      <hr className=" bg-slate-500 border-0 py-[0.2px] " />
      {/* main navigation  */}
      <div className=" flex flex-col gap-4 mt-4 pb-[50px]">
        <p className=" text-[#ffffffa6] text-[12px] uppercase ms-4">
          main navigation
        </p>
        <Link
          to={"/"}
          className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
          <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
            <AiOutlineAppstore />
          </p>
          <p className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
            Dashboard
          </p>
        </Link>
        <Link
          to={"/createCourse"}
          className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
          <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
            <AiOutlineUnorderedList />
          </p>
          <p className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
            Create Course
          </p>
        </Link>
        <Link to={'/calender'} className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
          <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
            <AiOutlineCalendar />
          </p>
          <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
            Calendar
          </span>
        </Link>
        <Link to={'/profile'} className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
          <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
            <RiContactsLine />
          </p>

          <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
            Profile
          </span>
        </Link>
        <Link to={'/login'} className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
          <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
            <AiOutlineLock />
          </p>
          <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
            Login
          </span>
        </Link>

        <hr className=" bg-slate-500 border-0 py-[0.2px] " />

        <p className=" text-[#ffffffa6] text-[12px] uppercase ms-4">Tables</p>
        <Link to={'/student'} className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
          <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
            <CgProfile />
          </p>
          <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
            Students List
          </span>
        </Link>
        <Link to={'/teacher'} className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
          <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
            <AiOutlineTable />
          </p>
          <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
            Teacher List
          </span>
        </Link>
        <Link to={'/courses'} className=" group flex items-center gap-3 hover:bg-[#ffffff33] hover:border-s-2 ps-3 py-2 ">
          <p className=" text-[#ffffffa6] text-xl group-hover:text-[#ffffff]">
            <GiNewspaper />
          </p>
          <span className=" text-[#ffffffa6] text-[15px] group-hover:text-[#ffffff]">
            Course List
          </span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
