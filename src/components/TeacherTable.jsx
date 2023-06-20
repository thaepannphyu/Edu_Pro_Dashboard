import React from 'react'
import "./Table.css";

const TeacherTable = () => {
  return (
    <div className='flex justify-center items-start'>
      <div className=' bgTransparent w-[95%] mt-10 flex flex-col gap-3 pb-10 rounded p-7'>
        <h1 className=' font-medium text-white text-lg tracking-wide'>Teacher Table</h1>
        <table className='table-responsive'>
          <thead className='tableTitle border-b border-color'>
            <tr>
            <th className=' text-sm py-5 px-5 max-xl:px-3 tracking-wide border-r border-color font-medium'>T_ID</th>
              <th className=' text-sm py-5 pl-4 pr-20 max-xl:pr-10 tracking-wide border-r border-color font-medium'>TEACHER NAME</th>
              <th className=' text-sm py-5 pr-4 pl-8 max-xl:pl-6 tracking-wide border-r border-color font-medium'>AGE</th>
              <th className=' text-sm py-5 pl-4 pr-20 max-xl:pr-10 tracking-wide border-r border-color font-medium'>DEPARTMENT</th>
              <th className=' text-sm py-5 pl-4 pr-16 max-xl:pr-10 tracking-wide border-r border-color font-medium'>DATE_OF_JOIN</th>
              <th className=' text-sm py-5 pr-4 pl-12 max-xl:pl-8 tracking-wide border-r border-color font-medium'>SALARY</th>
              <th className=' text-sm py-5 pl-4 pr-12 max-xl:pr-6 border-r border-color tracking-wide font-medium'>GENDER</th>
              <th className=' text-sm py-5 pl-4 pr-24 max-xl:pr-14 tracking-wide font-medium'>Address</th>
            </tr>
          </thead>
          <tbody className='tableTitle text-center'>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>1</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Jugal</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>34</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Computer Sc</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2017-03-10</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>12000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Male</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>London</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>2</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Sharmila</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>31</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>History</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2009-05-22</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>20000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Female</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Birmingham</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>3</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Sandeep</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>32</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Mathematics</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2014-07-16</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>34000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Male</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Liverpool</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>4</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Sangeeta</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>35</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Science</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2015-01-09</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>40000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Female</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Manchester</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>5</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Rakesh</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>42</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Chemistry</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2012-08-19</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>25000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Male</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Newcastle</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>6</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Shyam</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>50</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Art</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2006-02-26</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>30000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Male</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Leicester</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>7</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Jugal</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>34</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Computer Sc</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2017-03-10</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>12000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Male</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>London</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>8</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Sharmila</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>31</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>History</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2009-05-22</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>20000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Female</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Birmingham</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>9</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Sandeep</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>32</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Mathematics</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2014-07-16</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>34000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Male</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Liverpool</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>10</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Sangeeta</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>35</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Science</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2015-01-09</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>40000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Female</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Manchester</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>11</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Rakesh</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>42</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Chemistry</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2012-08-19</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>25000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Male</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Newcastle</td>
            </tr>
            <tr className='border-b border-color custom-hover'>
            <td className=' py-5 text-sm border-r border-color tracking-wide'>12</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Shyam</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>50</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>Art</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-left pl-4'>2006-02-26</td>
              <td className=' py-5 text-sm border-r border-color tracking-wide text-right pr-4'>30000</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4 border-r border-color'>Male</td>
              <td className=' py-5 text-sm tracking-wide text-left pl-4'>Leicester</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TeacherTable
