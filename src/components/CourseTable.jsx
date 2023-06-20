import React from 'react';
import "./Table.css";
import {HiMenuAlt1} from "react-icons/hi";
import {MdModeEdit} from "react-icons/md";
import {MdDeleteSweep} from "react-icons/md";

const CourseTable = () => {
  return (
    <div className='flex justify-center items-start'>
      <div className=' bgTransparent w-[95%] mt-10 flex pb-10 flex-col gap-3 rounded p-7'>
        <h1 className=' font-medium text-white text-lg tracking-wide'>Course Table</h1>
        <table className='table-responsive'>
          <thead className='tableTitle border-b border-color'>
            <tr>
            <th className=' text-sm py-5 px-5 max-xl:px-3 tracking-wide border-r border-color font-medium'>T_ID</th>
              <th className=' text-sm py-5 pl-4 pr-20 max-xl:pr-14 tracking-wide border-r border-color font-medium'>COURSE NAME</th>
              <th className=' text-sm py-5 pl-4 pr-16 max-xl:pr-12 tracking-wide border-r border-color font-medium'>CATEGORY</th>
              <th className=' text-sm py-5 pl-4 pr-16 max-xl:pr-8 tracking-wide border-r border-color font-medium'>DURATION</th>
              <th className=' text-sm py-5 pl-4 pr-24 max-xl:pr-14 tracking-wide border-r border-color font-medium'>DESCRIPTION</th>
              <th className=' text-sm py-5 pl-4 pr-14 max-xl:pr-8 tracking-wide border-r border-color font-medium'>LESSON</th>
              <th className=' text-sm py-5 pl-10 pr-4 max-xl:pl-8 border-r border-color tracking-wide font-medium'>PRICE</th>
              <th className=' text-sm py-5 px-12 max-xl:px-8 tracking-wide font-medium'><HiMenuAlt1 className=' text-xl'/></th>
            </tr>
          </thead>
          <tbody className='tableTitle text-center'>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>1</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Business</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Primary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 20 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Less than 6 year...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 3</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>$1000</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>2</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Fine Arts</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Secondary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 30 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Finished primary...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 4</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color text-right pr-4'>$800</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>3</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Mathematics</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Tertiary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 09 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Finished low-level...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 5</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color text-right pr-4'>$400</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>4</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Health</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Primary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 22 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>University degree...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 3</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color text-right pr-4'>$600</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>5</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Science</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Tertiary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 40 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Primary education...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 5</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color text-right pr-4'>$900</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>6</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Social Studies</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>No Education</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 10 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Education in its...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>null</td>
              <td className=' py-5 text-sm tracking-wide line-through border-r border-color text-right pr-4'>$500</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>7</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Business</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Primary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 20 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Less than 6 year...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 3</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>$1000</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>8</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Fine Arts</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Secondary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 30 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Finished primary...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 4</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color text-right pr-4'>$800</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>9</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Mathematics</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Tertiary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 09 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Finished low-level...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 5</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color text-right pr-4'>$400</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>10</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Health</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Primary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 22 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>University degree...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 3</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color text-right pr-4'>$600</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>11</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Science</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Tertiary</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 40 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Primary education...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 to 5</td>
              <td className=' py-5 text-sm tracking-wide border-r border-color text-right pr-4'>$900</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>12</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Social Studies</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>No Education</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>1 h 10 m</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Education in its...</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>null</td>
              <td className=' py-5 text-sm tracking-wide line-through border-r border-color text-right pr-4'>$500</td>
              <td className=' py-5 text-sm tracking-wide flex gap-2 justify-center'><MdModeEdit className='text-lg cursor-pointer'/><MdDeleteSweep className=' text-lg cursor-pointer'/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CourseTable
