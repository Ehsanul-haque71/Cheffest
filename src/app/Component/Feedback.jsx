import React from 'react'
import Image from 'next/image';
import Img1 from "@/app/Assets/img1.svg";
import { FaStar } from "react-icons/fa";


const Feedback = () => {
  return (
    <section className='bg-black'>
      <div className='container mx-auto'>
        <div>
          <h1 className='text-white text-[50px] leading-[1.4] text-center'>What Our Clients Are Saying</h1>
        </div>
        <div>
          <div className='bg-[#191919] w-[370px] h-[370px] rounded-2xl px-[30px] py-[30px]'>
            <div className='flex gap-[12px]'>
              <div>
                <Image src={Img1} alt='man' />
              </div>
              <div >
                <p className='text-[18px] text-white leading-[1.5]'>Michal Gun</p>
                <p className='teaxt-[14px] text-white leading-[1.5]'>Head of sales at Tesla </p>
                <div className='pt-[8px] flex text-amber-300 gap-[2px]'>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>

            </div>
            <div>
            </div>
            <div>
            </div>
          </div>


          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  )
}

export default Feedback
