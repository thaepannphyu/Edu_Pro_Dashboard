import React from "react";
import { BiMovie } from "react-icons/bi";
import { Link } from "react-router-dom";

const CreateCourse = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className=" w-[97%] max-[900px]:w-[95% max-[900px]:w-[94%] max-[600px]:w-[92%] my-6 bgTransparent">
          <form className=" mx-10 mb-16">
            <h1 className=" text-3xl text-white my-10 max-[390px]:text-2xl max-[335px]:text-xl ">Create New Course</h1>
            <div className=" flex flex-col">
              <div className=" flex max-[900px]:flex-col gap-9 items-center max-[900px]:items-start">
                <div className=" w-[30%] max-[900px]:w-[50%] max-[700px]:w-[70%] max-[600px]:w-[80%] max-[500px]:w-[100%]">
                    <div className=' cursor-pointer w-full h-[370px] max-xl:h-[350px] bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md flex justify-center items-center'>
                        <p className='subtitle'>Upload cover</p>
                        <input className=' w-full h-[370px] hidden' type="file" />
                    </div>
                </div>

                <div className=" w-[70%] max-[900px]:w-full">
                    <div className='flex flex-col gap-8'>
                        <div className=' flex flex-col gap-7'>
                          <input className=' placeholder-[#ffffffd9] focus:border-2 focus:border-[#ffffff98] focus:outline-none py-3 pl-4 bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md' type='text' placeholder="Title"/>
                          <input className=' placeholder-[#ffffffd9] focus:border-2 focus:border-[#ffffff98] focus:outline-none pt-4 pb-20  pl-4 bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md' type='text' placeholder="Description"/>

                          <div className=' flex gap-5 w-[100%] max-[700px]:flex-col max-[700px]:gap-8'>
                            <input className=' placeholder-[#ffffffd9] focus:border-2 focus:border-[#ffffff98] focus:outline-none w-full py-3 pl-4 bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md' type='number' placeholder="Duration" />
                            <input className=' placeholder-[#ffffffd9] focus:border-2 focus:border-[#ffffff98] focus:outline-none w-full py-3 pl-4 bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md' type='number' placeholder="Lessons" />
                            <input className=' placeholder-[#ffffffd9] focus:border-2 focus:border-[#ffffff98] focus:outline-none w-full py-3 pl-4 bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md' type='text' placeholder="Language" />

                            {/* <select className=" focus:border-2 focus:border-[#ffffff98] text-[#ffffffd9] focus:outline-none w-full py-3 px-1 bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md">
                              <option className=" focus:border-2 focus:border-[#ffffff98] text-[#ffffffd9] focus:outline-none w-full py-3 pl-4 bg-[rgba(255,255,255,.125)]" value="">mm</option>
                              <option className=" focus:border-2 focus:border-[#ffffff98] text-[#ffffffd9] focus:outline-none w-full py-3 pl-4 bg-[rgba(255,255,255,.125)]" value="">mm</option>
                              <option className=" focus:border-2 focus:border-[#ffffff98] text-[#ffffffd9] focus:outline-none w-full py-3 pl-4 bg-[rgba(255,255,255,.125)]" value="">mm</option>
                            </select> */}

                            <input className=' placeholder-[#ffffffd9] focus:border-2 focus:border-[#ffffff98] focus:outline-none w-full py-3 pl-4 bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md' type='number' placeholder="Price" />
                          </div>
                        </div>
                        <input className=' placeholder-[#ffffffd9] focus:border-2 focus:border-[#ffffff98] focus:outline-none py-3 pl-4 bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md' type='text' placeholder='Instructor'/>
                    </div>
                </div>
              </div>

              <div className='  flex justify-between cursor-pointer w-full mb-8 mt-8 py-4 pl-4 mr-1 bg-[rgba(255,255,255,.125)] border-[#e5eaef] rounded-md'>
                  <p className='subtitle'>Upload video</p>
                  <input className=' w-[900px] border hidden' type="file" />
                  <p className=' text-xl pr-4 subtitle'>
                    <BiMovie />
                  </p>
              </div>
            </div>

            <Link to='/'>
              <button className=" py-4 px-20 max-[400px]:py-3 max-[400px]:px-14 bg-[rgba(255,255,255,.125)] text-lg rounded-md text-white border">Create</button>
            </Link>
          </form>

        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
