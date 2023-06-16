import React, { useState } from 'react'
import './Theme.css'
import {MdSettings} from "react-icons/md"
import backgroundImage1 from '../assets/bg-img/1.png';
import backgroundImage2 from '../assets/bg-img/2.png';
import backgroundImage3 from '../assets/bg-img/3.png';
import backgroundImage4 from '../assets/bg-img/4.png';
import backgroundImage5 from '../assets/bg-img/5.png';
import backgroundImage6 from '../assets/bg-img/6.png';

const Theme = () => {
    const [themeOpen,setThemeOpen] = useState(false)
    const gaussionTexture = [
        {id: 1, name:backgroundImage1},
        {id: 2, name:backgroundImage2},
        {id: 3, name:backgroundImage3},
        {id: 4, name:backgroundImage4},
        {id: 5, name:backgroundImage5},
        {id: 6, name:backgroundImage6},
    ]

    const gradientBackground = [
        {id: 7, name:"linear-gradient(45deg, #0c675e, #069e90)"},
        {id: 8, name:"linear-gradient(567deg, rgba(165, 42, 4, 0.89), rgba(113, 102, 8, 0.89), rgba(13, 95, 16, 0.93), rgba(4, 79, 88, 0.94), rgba(19, 56, 86, 0.9), rgba(24, 32, 78, 0.94), rgba(100, 8, 115, 0.95))"},
        {id: 9, name:"linear-gradient(45deg, #29323c, #485563)"},
        {id: 10, name:"linear-gradient(45deg, #795548, #945c48)"},
        {id: 11, name:"linear-gradient(45deg, #1565C0, #1E88E5)"},
        {id: 12, name:"linear-gradient(45deg, #65379b, #886aea)"},
        {id: 13, name:" linear-gradient(180deg, #ff5447, #f1076f)"},
        {id: 14, name:"linear-gradient(180deg, #08a50e, #69bb03)"},
        // {id: 15, name:"linear-gradient(45deg, #6a11cb, #2575fc)"},
    ]
  return (
    <div className=' relative'>
        <div className={`${themeOpen ? " right-0 opacity-100 " : "right-[-500px] opacity-0"} absolute transition-all ease-in duration-500`}>
        <p onClick={()=> setThemeOpen(!themeOpen)} className=' cursor-pointer absolute left-[-36px] top-[250px] w-[40px] h-[40px] rounded-md flex justify-center items-center bg-black'>
            <MdSettings className=' text-white text-2xl setting-icon'/>
        </p>

        <div className=' bg-black w-[260px] px-2'>
            <div>
                <h1 className=' text-[15px] text-[#ffffffd9] text-center py-3'>Gaussion Texture</h1>
                <hr className=' custom-hr mb-4 mx-2' />

                <div className=' flex flex-wrap justify-center items-center gap-4'>
                    {gaussionTexture.map(bg => {
                        return(
                            <div key={bg.id} className=' w-[87px] h-[75px]'>
                                <img className=' w-full h-full rounded-lg' src={bg.name} alt="" />
                            </div>                                
                            )
                        })}
                </div>
            </div>

            <div className=' pb-4'>
                <h1 className=' text-[15px] text-[#ffffffd9] text-center py-3'>Gradient Background</h1>
                <hr className=' custom-hr mb-4 mx-2' />

                <div className=' flex flex-wrap justify-center gap-4'>
                    {gradientBackground.map(bg => {
                        return(
                            <div key={bg.id} className=' w-[87px] h-[75px]'>
                                <div className=' rounded-md' style={{
                                    backgroundImage: `${bg.name}`,
                                    backgroundSize: '100% 100%',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    width: '100%',
                                    height: '100%',
                                }}>

                                </div>
                            </div>                                
                            )
                        })}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Theme