import React from 'react';
import Image from 'next/image';
import Chef from '@/app/Assets/Chef.svg';
import { BsCart3 } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className='bg-black w-full pt-[94px] md:pt-4 md:px-[75px]'>
      <div className='container'>

        <div className='grid grid-cols-[auto_1fr] md:grid-cols-[auto_1fr_auto] items-center'>

          <div className='cursor-pointer absolute md:static left-1/2 top-2 -translate-x-1/2 w-[60px] h-[60px] md:w-auto md:h-auto '>
            <Image src={Chef} alt='main_logo' />
          </div>


          <div>
            <ul className='hidden  md:flex justify-center items-center md:items-center md:justify-center leading-[1.1] text-[18px] font-Inter font-semibold gap-[6px] md:gap-[16px] text-white'>
              <li className='cursor-pointer hover:text-amber-600'>Welcome</li>
              <li className='cursor-pointer hover:text-amber-600'>Our menu</li>
              <li className='cursor-pointer hover:text-amber-600'>Franchise</li>
              <li className='cursor-pointer hover:text-amber-600'>Contacts</li>
            </ul>
          </div>



          <div className="flex items-center justify-between md:justify-end gap-[30px] text-white px-4 md:px-0 py-4 md:py-0">
            <div className="md:hidden cursor-pointer">
              <FaBars className="w-[28px] h-[28px]" />
            </div>

            <div className="relative cursor-pointer">
              <BsCart3 className="w-[28px] h-[28px]" />
              <span className="absolute -top-2 -right-2 text-[12px] bg-red-500 w-[18px] h-[18px] rounded-full flex items-center justify-center text-white">2</span>
            </div>

            <div className="hidden md:inline-block cursor-pointer">
              <CgSearch className="w-[28px] h-[28px]" />
            </div>
          </div>


        </div>

      </div>

    </nav>
  )
}


export default Navbar
