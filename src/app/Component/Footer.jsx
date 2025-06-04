import React from 'react'
import Image from 'next/image';
import { FaFacebook } from "react-icons/fa";
import Bkash from "@/app/Assets/BKash.png";


const Footer = () => {
  return (
    <footer className='bg-black py-[80px]'>
      <div className='container '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-[60px] lg:gap-[95px] xl:gap-[103px] pb-[100px]'>
          <div>
            <div>
              <p className='text-white text-[19px] xl:text-[24px] leading-1 pb-[30px]'>Our Products</p>
            </div>
            <div>
              <p className='text-[16px] lg:text-[18px] text-white '>Our men us</p>
              <p className='text-[16px] lg:text-[18px] text-white '>Our burgers</p>
              <p className='text-[16px] lg:text-[18px] text-white '>Our times sides</p>
              <p className='text-[16px] lg:text-[18px] text-white '>Our sandwiches</p>
            </div>
          </div>

          <div>
            <div>
              <p className='text-white text-[18px] xl:text-[24px] leading-1 pb-[30px]'>legal information</p>
            </div>
            <div>
              <p className='text-[15px] lg:text-[18px] text-white '>Legal Notice</p>
            </div>
          </div>

          <div>
            <div>
              <p className='text-white text-[19px] xl:text-[24px]  leading-1 pb-[30px]'>Contact us</p>
            </div>
            <div>
              <p className='text-[16px] lg:text-[18px] text-white '>Contacts</p>
              <p className='text-[16px] lg:text-[18px] text-white '>Our addresses</p>
              <p className='text-[16px] lg:text-[18px] text-white '>Become a Times Square franchisee</p>
            </div>
          </div>

          <div>
            <div>
              <p className='text-white text-[19px] xl:text-[24px]  leading-1 pb-[30px]'>We accept</p>
            </div>
            <div className='w-[50px] h-[50px]'>
              <Image src={Bkash} alt='logo'/>
            </div>
            <div>

            </div>
          </div>
        </div>

        <div className='text-[#4F4F4F]'>
          <hr  />
        </div>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-[30px] sm:gap-[120px] md:gap-[249px] lg:gap-[505px] xl:gap-[760px]  pt-[28px] '>
          <div className='px-[150px] sm:px-0 text-white'>
            <FaFacebook className=' cursor-pointer hover:text-amber-500 w-6 h-6'/>
          </div>
          <div className='px-[49px] sm:px-0 text-white'>
            <h3>© 2024 Roudra All rights reserved.</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
