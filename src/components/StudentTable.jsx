import React from 'react'
import "./Table.css";

const StudentTable = () => {
  return (
    <div className='flex justify-center items-start'>
      <div className=' bgTransparent w-[95%] mt-10 flex flex-col pb-10 gap-3 rounded p-7'>
        <h1 className=' font-medium text-white text-lg tracking-wide'>Student Table</h1>
        <table className='table-responsive'>
          <thead className='tableTitle border-b border-color'>
            <tr>
            <th className=' text-sm py-5 px-5 max-xl:px-3 tracking-wide border-r border-color font-medium'>T_ID</th>
              <th className=' text-sm py-5 pl-4 pr-24 max-xl:pr-16 tracking-wide border-r border-color font-medium'>STUDENT NAME</th>
              <th className=' text-sm py-5 pl-4 pr-48 max-xl:pr-40 tracking-wide border-r border-color font-medium'>EMAIL</th>
              <th className=' text-sm py-5 pl-4 pr-28 max-xl:pr-20 tracking-wide border-r border-color font-medium'>PHONE</th>
              <th className=' text-sm py-5 pr-4 pl-8 max-xl:pl-6 tracking-wide border-r border-color font-medium'>AGE</th>
              <th className=' text-sm py-5 pl-4 pr-52 max-xl:pr-40 tracking-wide border-r border-color font-medium'>ADDRESS</th>
            </tr>
          </thead>
          <tbody className='tableTitle text-center'>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>1</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Lional Messi</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>leomessi10@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+54-345-345</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>21</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Bercelona , Spain</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>2</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Neymar JR</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>neymarjr11@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+92-372-394</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>22</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Mangaratibu , Brazil (BR)</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>3</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Luka Modric</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>modric10@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+42-274-947</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>19</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Zagreb , Croatia (HR)</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>4</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Angel Di Maria</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>dimaria11@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+23-489-897</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>18</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Buenos Aires , Argentina</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>5</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Zlatan Ibrahimovic</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>zlatan9@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+88-421-974</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>20</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Stockholm , Sweden</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>6</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>David Beckham</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>beckham7@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+33-899-555</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>19</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>London , Unite Kingdom</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>7</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Lional Messi</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>leomessi10@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+54-345-345</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>21</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Bercelona , Spain</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>8</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Neymar JR</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>neymarjr11@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+92-372-394</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>22</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Mangaratibu , Brazil (BR)</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>9</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Luka Modric</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>modric10@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+42-274-947</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>19</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Zagreb , Croatia (HR)</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>10</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Angel Di Maria</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>dimaria11@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+23-489-897</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>18</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Buenos Aires , Argentina</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>11</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Zlatan Ibrahimovic</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>zlatan9@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+88-421-974</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>20</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Stockholm , Sweden</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>12</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>David Beckham</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>beckham7@gmail.com</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>+33-899-555</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>19</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>London , Unite Kingdom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StudentTable
