import React from 'react'
import Image from 'next/image';
import cooking from "@/app/Assets/cooking.jpg"

const Video = () => {
    return (
        <section className='bg-[#0D0D0D] '>
            <div className='container'>
                <div className=' text-center max-w-[820px] mx-auto '>
                    {/* <h1 className='text-[26px] md:text-[50px] leading-[1.6] sm:min-w-[280px] md:leading-[1.4] text-white pt-[150px] '>Why We are Best Food Maker</h1> */}
                    <h1 className='text-[26px] md:text-[50px] leading-[1.6] max-w-[259px] sm:max-w-[713px] inline-block text-white pt-[25px] sm:pt-[150px]'>
                        Why We are Best Food Maker
                    </h1>

                    <p className='leading-[1.5] text-[20px] text-white pt-[16px] pb-[40px] sm:pb-[70px] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem scrambled it to make a type specimen book.</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-[40px] md:gap-[87px] pb-[25px] sm:pb-[150px] items-stretch'>
                    <div className='text-[14px] sm:text-[18px] leading-[1.6] text-white text-center sm:text-start h-full'>It is a long established fact that a reader will be distracted layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The normal distribution of letters, as opposed to using 'Content  Many desktop publishing packages and web page editors search for 'lorem ipsum' will uncover many web sites still in  humour and the like. <span className='font-bold text-[20px]'>Read More</span></div>

                    <div className='relative w-full h-[430px]'>
                        <Image className='rounded-[12px] w-full h-full object-cover' src={cooking} alt='cook' fill
                        />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                            <button className="video-launch video-play-button" rel="shadowbox;height=450;width=800" href="https://www.facebook.com/kazifoodmuksudpur/videos/1265450145367450">
                                <span></span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Video
