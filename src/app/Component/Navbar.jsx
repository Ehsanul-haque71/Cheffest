import React from 'react';
import Image from 'next/image';
import Chef from '@/app/Assets/Chef.svg';
import { BsCart3 } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className='bg-black w-full grid grid-cols-[auto_1fr_auto] items-center pl-[35px] pr-[135px]'>
      <div className='cursor-pointer'>
        <Image src={Chef} alt='main_logo' />
      </div>

      <div >
        <ul className='flex items-center justify-center leading-[1.1] text-[18px] font-Inter font-semibold gap-[16px] text-white'>
          <li className='cursor-pointer hover:text-amber-600'>Welcome</li>
          <li className='cursor-pointer hover:text-amber-600'>Our menu</li>
          <li className='cursor-pointer hover:text-amber-600'>Franchise</li>
          <li className='cursor-pointer hover:text-amber-600'>Contacts</li>
        </ul>
      </div>

      <div className='flex items-center justify-end gap-[30px] text-white '>
        {/* <div className='relative z-[1] '>
          <BsCart3 className='w-[34px] h-[34px]' />
          <span className='after:absolute after:size-[20px] after:rounded-full after:bg-red-500 after:top-[px] after:right-[20px] after:z-[-1]'>2</span>
          
        </div> */}

        <div className="relative after:content-['2'] after:absolute after:-top-2 after:-right-2 after:bg-red-500 after:text-white after:text-xs after:size-[18px] after:rounded-full after:flex after:items-center after:justify-center cursor-pointer">
          <BsCart3 className="w-[34px] h-[34px]" />
        </div>

        <div className='cursor-pointer'><CgSearch className='w-[34px] h-[34px]' /></div>
      </div>
    </nav>
  )
}


export default Navbar
