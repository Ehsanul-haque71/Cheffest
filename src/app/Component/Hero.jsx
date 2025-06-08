import React from 'react'
import Image from 'next/image';
import hero from "@/app/Assets/hero.svg";

const Hero = () => {
    return (
        <section>
            <div className='relative z-[1]'>
                <Image src={hero} alt='hero_logo' />
                <div className='container absolute top-[20px] sm:top-[50px] lg:top-[72px] left-0 z-[1]'>
                    <span className='text-white text-[clamp(20px,5vw,40px)] font-semibold lg:font-bold leading-[1.4]'>
                        Welcome!
                    </span>

                    <h1 className='text-white text-[clamp(20px,5vw,40px)] font-semibold lg:font-bold leading-[1.4] max-w-[225px] sm:max-w-[350px] lg:max-w-[465px] '>
                        We Made Delicious Food for You
                    </h1>

                    <p className='text-white text-[14px] md:text-[20px] leading-[1.5] max-w-[280px] md:max-w-[510px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <div className='pt-[10px] sm:pt-[40px]' >
                        <p className='inline-block rounded-4xl px-30 py-2 sm:px-6 sm:py-4 bg-white cursor-pointer'>Order online</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
