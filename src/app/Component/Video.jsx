import React from 'react'
import Image from 'next/image';
import cooking from "@/app/Assets/cooking.jpg"

const Video = () => {
    return (
        <section className='bg-[#0D0D0D] '>
            <div className='container'>
                <div className=' text-center max-w-[820px] mx-auto '>
                    <h1 className='text-[50px] leading-[1.4] text-white pt-[150px] '>Why We are Best Food Maker</h1>
                    <p className='leading-[1.5] text-[20px] text-white pt-[16px] pb-[70px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem scrambled it to make a type specimen book.</p>
                </div>

                <div className='grid grid-cols-2 gap-[87px]'>
                    <div className='text-[18px] leading-[1.6] text-white'>It is a long established fact that a reader will be distracted layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The normal distribution of letters, as opposed to using 'Content  Many desktop publishing packages and web page editors search for 'lorem ipsum' will uncover many web sites still in  humour and the like. <span className='font-bold text-[20px]'>Read More</span></div>
                    <div>
                        <Image className='w-full h-auto rounded-[12px]' src={cooking} alt='cook' width={500} height={400}                          />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Video
