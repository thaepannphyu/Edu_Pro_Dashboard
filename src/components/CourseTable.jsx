import React from 'react';
import "./Table.css";
import {HiMenuAlt1} from "react-icons/hi";
import {MdModeEdit} from "react-icons/md";
import {MdDeleteSweep} from "react-icons/md";

const CourseTable = () => {
  return (
    <div className='flex justify-center items-start h-screen'>
      <div className=' bgTransparent w-[90%] mt-10 flex flex-col gap-3 rounded p-7'>
        <h1 className=' font-medium text-white text-lg tracking-wide'>Course Table</h1>
        <table className='table-responsive'>
          <thead className='tableTitle border-b border-color'>
            <tr>
            <th className=' text-sm py-5 px-5 tracking-wide border-r border-color font-medium'>#</th>
              <th className=' text-sm py-5 px-12 max-xl:px-8 tracking-wide border-r border-color font-medium'>COURSE NAME</th>
              <th className=' text-sm py-5 px-12 max-xl:px-8 tracking-wide border-r border-color font-medium'>CATEGORY</th>
              <th className=' text-sm py-5 px-12 max-xl:px-8 tracking-wide border-r border-color font-medium'>DURATION</th>
              <th className=' text-sm py-5 px-16 max-xl:px-10 tracking-wide border-r border-color font-medium'>DESCRIPTION</th>
              <th className=' text-sm py-5 px-10 max-xl:px-6 tracking-wide border-r border-color font-medium'>LESSON</th>
              <th className=' text-sm py-5 px-10 max-xl:px-6 border-r border-color tracking-wide font-medium'>PRICE</th>
              <th className=' text-sm py-5 px-10 max-xl:px-8 tracking-wide font-medium'><HiMenuAlt1 className=' text-xl'/></th>
            </tr>
          </thead>
          <tbody className='tableTitle text-center'>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>1</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Business</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Primary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 h 20 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Less than 6 year...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 to 3</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>$1000</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>2</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Fine Arts</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Secondary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 h 30 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Finished primary...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 to 4</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color'>$800</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>3</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Mathematics</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Tertiary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 h 09 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Finished low-level...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 to 5</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color'>$400</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>4</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Health</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Primary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 h 22 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>University degree...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 to 3</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color'>$600</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>5</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Science</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Tertiary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 h 40 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Primary education...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 to 5</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color'>$900</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>6</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Social Studies</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>No Education</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>1 h 10 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Education in its...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>null</td>
              <td className=' py-5 text-sm tracking-wide line-through border-r border-color'>$500</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CourseTable
