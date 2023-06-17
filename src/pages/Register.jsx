import React from "react";
import "./Register.css";
import { SlUser } from "react-icons/sl";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center h-screen items-center">
      <form className="w-96 max-[450px]:w-[90%] max-[350px]:gap-3 flex flex-col bgTransparent shadow gap-5 my-10 rounded">
        <div className="mx-auto mt-7">
          <img
            src="https://themewagon.github.io/dashtreme/assets/images/logo-icon.png"
            className="w-[60px]"
          />
        </div>
        <h1 className="text-center text-white font-medium">SIGN UP</h1>
        <div className="flex flex-col mx-7 gap-4">
          <div className="relative flex flex-col">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="custom-input px-3 py-[10px] rounded"
            />
            <SlUser className="text-white opacity-80 absolute top-[10px] right-[17px]" />
          </div>
          <div className="relative flex flex-col">
            <input
              type="email"
              placeholder="Enter Your Email ID"
              className="custom-input px-3 py-[10px] rounded"
            />
            <HiOutlineMailOpen className="text-white opacity-80 text-lg absolute top-[10px] right-4" />
          </div>
          <div className="relative flex flex-col">
            <input
              type="password"
              placeholder="Choose Password"
              className="custom-input px-3 py-[10px] rounded"
            />
            <BiLock className="text-white opacity-80 text-lg absolute top-[10px] right-4" />
          </div>
        </div>
        <div className="flex items-center mx-7">
          <input
            type="checkbox"
            id="termsCheckbox"
            aria-label="I AGREE WITH TERMS & CONDITIONS"
            className="custom-checkbox"
          />
          <label
            htmlFor="termsCheckbox"
            className="text-gray-200 text-xs tracking-widest cursor-pointer"
          >
            I AGREE WITH TERMS & CONDITIONS
          </label>
        </div>
        <button className="btn font-medium mx-7 tracking-wider text-white text-xs shadow-md py-[10px] rounded">
          SIGN UP
        </button>
        <h2
          className=" text-white text-center opacity-80 tracking-wider
         text-sm"
        >
          Sign Up With
        </h2>
        <div className="mx-7 flex max-[350px]:flex-col max-[350px]:gap-4 justify-between">
          <button className="btn max-[350px]:w-full flex gap-1 justify-center items-center tracking-wider w-[48%] text-white text-xs font-medium shadow-md py-[10px] rounded">
            <span>
              <RiFacebookBoxFill className=" mb-[2px] text-[14px]" />
            </span>
            FACEBOOK
          </button>
          <button className="btn max-[350px]:w-full flex gap-1 font-medium justify-center items-center tracking-wider w-[48%] text-white text-xs shadow-md py-[10px] rounded">
            <span>
              <FaTwitterSquare className=" mb-[2px]" />
            </span>
            TWITTER
          </button>
        </div>
        <hr className=" opacity-30 mt-2" />
        <div className="mb-5 flex max-[350px]:flex-col gap-3 mx-auto">
          <h2 className=" text-orange-400 text-sm tracking-wider">
            Already have an account?
          </h2>
          <Link to={'/login'}>
            <h2 className=" text-white text-sm cursor-pointer tracking-wider max-[350px]:mx-auto">
              Sign In here
            </h2>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
