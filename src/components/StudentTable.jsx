import React from 'react'
import "./Table.css";

const StudentTable = () => {
  return (
    <div className='flex justify-center items-start h-screen'>
      <div className=' bgTransparent w-[90%] mt-10 flex flex-col gap-3 rounded p-7'>
        <h1 className=' font-medium text-white text-lg tracking-wide'>Student Table</h1>
        <table className='table-responsive'>
          <thead className='tableTitle border-b border-color'>
            <tr>
            <th className=' text-sm py-5 px-5 tracking-wide border-r border-color font-medium'>#</th>
              <th className=' text-sm py-5 px-20 max-xl:px-10 tracking-wide border-r border-color font-medium'>STUDENT NAME</th>
              <th className=' text-sm py-5 px-24 max-xl:px-20 tracking-wide border-r border-color font-medium'>EMAIL</th>
              <th className=' text-sm py-5 px-20 max-xl:px-14 tracking-wide border-r border-color font-medium'>PHONE</th>
              <th className=' text-sm py-5 px-8 max-xl:px-6 tracking-wide border-r border-color font-medium'>AGE</th>
              <th className=' text-sm py-5 px-28 max-xl:px-24 tracking-wide border-r border-color font-medium'>ADDRESS</th>
            </tr>
          </thead>
          <tbody className='tableTitle text-center'>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>1</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Lional Messi</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>leomessi10@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>+54-345-345</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>21</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Bercelona , Spain</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>2</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Neymar JR</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>neymarjr11@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>+92-372-394</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>22</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Mangaratibu , Brazil (BR)</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>3</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Luka Modric</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>modric10@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>+42-274-947</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>19</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Zagreb , Croatia (HR)</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>4</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Angel Di Maria</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>dimaria11@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>+23-489-897</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>18</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Buenos Aires , Argentina</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>5</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Zlatan Ibrahimovic</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>zlatan9@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>+88-421-974</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>20</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>Stockholm , Sweden</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>6</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>David Beckham</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>beckham7@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>+33-899-555</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>19</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide'>London , Unite Kingdom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentTable
