import React from "react";
import "./progress.css";
import { MdPeopleOutline } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";
import { CiTrophy } from "react-icons/ci";
import { RiLeafLine } from "react-icons/ri";
import { BsArrowUp } from "react-icons/bs";

const Progress = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[95%] bgTransparent progress rounded mt-10 shadow-md">
      <div className=" progress-main py-5 lg:py-1 px-6 lg:px-3">
        <div className=" progress-item flex flex-col gap-2 ">
          {/* title  */}
          <div className=" text-[#ffffff] flex justify-between ">
            <p className="  mainText">2300</p>
            <p>
              <MdPeopleOutline className=" text-2xl" />
            </p>
          </div>
          {/* progress bar  */}
          <div className=" text-[16px] text-[#ffffff] py-2">
            <div className=" w-full bg-gray-400 rounded-full h-[3px] lg:h-[4px]">
              <div className=" bg-white h-[3px] lg:h-[4px] rounded-full w-[75%] "></div>
            </div>
          </div>
          {/* sub title  */}
          <div className=" text-[16px] text-[#ffffffdc] flex justify-between  ">
            <p className=" subText">Total Students</p>
            <p className=" flex items-center gap-2 ">
              +2.6%
              <span>
                <BsArrowUp className=" text-white" />
              </span>
            </p>
          </div>
        </div>
        <div className=" progress-item flex flex-col gap-2 ">
          {/* title  */}
          <div className=" text-[#ffffff] flex justify-between ">
            <p className="  mainText">1200</p>
            <p>
              <CiTrophy className=" text-2xl" />
            </p>
          </div>
          {/* progress bar  */}
          <div className=" text-[16px] text-[#ffffff] py-2">
            <div className=" w-full bg-gray-400 rounded-full h-[3px] lg:h-[4px]">
              <div className=" bg-white h-[3px] lg:h-[4px] rounded-full w-[85%]"></div>
            </div>
          </div>
          {/* sub title  */}
          <div className=" text-[16px] text-[#ffffffdc] flex justify-between ">
            <p className=" subText">Pass Exam</p>
            <p className=" flex items-center gap-2 ">
              +6.6%
              <span>
                <BsArrowUp className=" text-white" />
              </span>
            </p>
          </div>
        </div>
        <div className=" progress-item flex flex-col gap-2">
          {/* title  */}
          <div className=" text-[#ffffff] flex justify-between ">
            <p className="  mainText">200</p>
            <p>
              <VscGraphLine className=" text-2xl" />
            </p>
          </div>
          {/* progress bar  */}
          <div className=" text-[16px] text-[#ffffff] py-2">
            <div className=" w-full bg-gray-400 rounded-full h-[3px] lg:h-[4px]">
              <div className=" bg-white h-[3px] lg:h-[4px] rounded-full w-[65%]"></div>
            </div>
          </div>
          {/* sub title  */}
          <div className=" text-[16px] text-[#ffffff] flex justify-between ">
            <p className=" subText">Teacher's Rate</p>
            <p className=" flex items-center gap-2 ">
              +5.6%
              <span>
                <BsArrowUp className=" text-white" />
              </span>
            </p>
          </div>
        </div>
        <div className=" progress-item flex flex-col gap-2 last-item">
          {/* title  */}
          <div className=" text-[#ffffff] flex justify-between ">
            <p className="  mainText">600</p>
            <p>
              <RiLeafLine className=" text-2xl" />
            </p>
          </div>
          {/* progress bar  */}
          <div className=" text-[16px] text-[#ffffff] py-2">
            <div className=" w-full bg-gray-400 rounded-full h-[3px] lg:h-[4px]">
              <div className=" bg-white h-[3px] lg:h-[4px] rounded-full w-[75%]"></div>
            </div>
          </div>
          {/* sub title  */}
          <div className=" text-[16px] text-[#ffffff] flex justify-between">
            <p className=" subText">Course's Rate</p>
            <p className=" flex items-center gap-2 ">
              +3.6%
              <span>
                <BsArrowUp className=" text-white" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Progress;
