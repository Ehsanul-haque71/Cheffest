import React from 'react'
import Image from 'next/image';
import Nun from "@/app/Assets/Nun.svg";
import Taco from "@/app/Assets/Taco.svg";
import Burger from "@/app/Assets/Burger.svg";
import cart from "@/app/Assets/cart.svg";
import Potato from "@/app/Assets/Potato.svg";
import Big from "@/app/Assets/Bigboss.svg";
import Sandy from "@/app/Assets/Sandy.svg";


const Menu = () => {


    return (
        <section className='bg-black'>
            <div className='container'>
                <div className='text-center'>
                    <h1 className='text-[26px] md:text-[50px] leading-[1.6] max-w-[259px] sm:max-w-[713px] inline-block text-white pt-[25px] sm:pt-[150px'>Our Best & Delicious Menu</h1>
                </div>
                <div className='overflow-x-auto sm:overflow-x-hidden '>
                    <ul className='flex gap-[104px] text-white items-center w-max text-center cursor-pointer '>
                        <li>All</li>
                        <li>Bread</li>
                        <li>Chiffon & Rolls</li>
                        <li>Donut</li>
                        <li>Pastry & Danish</li>
                        <li>Cakes</li>
                        <li>Cookies</li>
                    </ul>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pt-[80px]'>
                    <div className='bg-[#191919] rounded-2xl w-[330px] sm:w-[370px] h-[440px] text-start px-[20px] py-[20px]'>
                        <div className='pb-[20px] flex justify-center'>
                            <Image src={Nun} alt='nun' className='translate-x-[-10px]' />
                        </div>

                        <h2 className='text-white text-[24px] leading-[1.4] pb-[10px]'>Naan Burger</h2>
                        <p className='text-white text-[16px] leading-[1.4] pb-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex justify-between'>
                            <p className='text-white text-[24px] leading-[1.4]'>$1.85</p>
                            <Image className='cursor-pointer' src={cart} alt='cart' />
                        </div>
                    </div>

                    <div className='bg-[#191919] rounded-2xl w-[330px] sm:w-[370px] h-[440px] text-start px-[20px] py-[20px]'>
                        <div className='pb-[20px] flex justify-center'>
                            <Image src={Taco} alt='Taco' className='translate-x-[-10px]' />
                        </div>

                        <h2 className='text-white text-[24px] leading-[1.4] pb-[10px]'>Butter Chicken Taco</h2>
                        <p className='text-white text-[16px] leading-[1.4] pb-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex justify-between'>
                            <p className='text-white text-[24px] leading-[1.4]'>$1.15</p>
                            <Image className='cursor-pointer' src={cart} alt='cart' />
                        </div>
                    </div>

                    <div className='bg-[#191919] rounded-2xl w-[330px] sm:w-[370px] h-[440px] text-start px-[20px] py-[20px]'>
                        <div className='pb-[20px] flex justify-center'>
                            <Image src={Burger} alt='Burger' className='translate-x-[-10px]' />
                        </div>

                        <h2 className='text-white text-[24px] leading-[1.4] pb-[10px] '>Chicken Burger</h2>
                        <p className='text-white text-[16px] leading-[1.4] pb-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex justify-between'>
                            <p className='text-white text-[24px] leading-[1.4]'>$2.00</p>
                            <Image className='cursor-pointer' src={cart} alt='cart' />
                        </div>
                    </div>

                    <div className='bg-[#191919] rounded-2xl w-[330px] sm:w-[370px] h-[440px] text-start px-[20px] py-[20px]'>
                        <div className='pb-[20px] flex justify-center'>
                            <Image src={Potato} alt='Potato' className='translate-x-[-10px]' />
                        </div>

                        <h2 className='text-white text-[24px] leading-[1.4] pb-[10px] '>Cheese Chicken Naan</h2>
                        <p className='text-white text-[16px] leading-[1.4] pb-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex justify-between'>
                            <p className='text-white text-[24px] leading-[1.4]'>$2.50</p>
                            <Image className='cursor-pointer' src={cart} alt='cart' />
                        </div>
                    </div>

                    <div className='bg-[#191919] rounded-2xl w-[330px] sm:w-[370px] h-[440px] text-start px-[20px] py-[20px]'>
                        <div className='pb-[20px] flex justify-center'>
                            <Image src={Big} alt='Burger' className='translate-x-[-10px]' />
                        </div>

                        <h2 className='text-white text-[24px] leading-[1.4] pb-[10px] '>3 Layer Burger</h2>
                        <p className='text-white text-[16px] leading-[1.4] pb-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex justify-between'>
                            <p className='text-white text-[24px] leading-[1.4]'>$4.00</p>
                            <Image className='cursor-pointer' src={cart} alt='cart' />
                        </div>
                    </div>

                    <div className='bg-[#191919] rounded-2xl w-[330px] sm:w-[370px] h-[440px] text-start px-[20px] py-[20px]'>
                        <div className='pb-[20px] flex justify-center'>
                            <Image src={Sandy} alt='Sandy' className='translate-x-[-10px]' />
                        </div>

                        <h2 className='text-white text-[24px] leading-[1.4] pb-[10px] '>Sandwich</h2>
                        <p className='text-white text-[16px] leading-[1.4] pb-[10px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className='flex justify-between'>
                            <p className='text-white text-[24px] leading-[1.4]'>$2.80</p>
                            <Image className='cursor-pointer' src={cart} alt='cart' />
                        </div>
                    </div>
                </div>

                <div className='flex justify-center pt-[80px] cursor-pointer'>
                    <div className='bg-white rounded-4xl py-[16px] px-[110px] sm:py-[20px] sm:px-[54px]'>
                        <h2 className='text-[18px] leading-[1.4]'>See All</h2>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Menu


// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Menu = () => {
//     const settings = {
//         className: "center",
//         infinite: true,
//         centerPadding: "60px",
//         slidesToShow: 5,
//         swipeToSlide: true,
//         afterChange: function (index) {
//             console.log(`Slider Changed to: ${index + 1}`);
//         },
//     };

//     return (
//         <section className="bg-black">
//             <div className="container">
//                 <div className="text-center">
//                     <h1 className="text-[26px] md:text-[50px] leading-[1.6] max-w-[259px] sm:max-w-[713px] inline-block text-white pt-[25px] sm:pt-[150px]">
//                         Our Best & Delicious Menu
//                     </h1>
//                 </div>
//                 <div className="overflow-x-hidden">
//                     <Slider {...settings}>
//                         <div>
//                             <h3>All</h3>
//                         </div>
//                         <div>
//                             <h3>Bread</h3>
//                         </div>
//                         <div>
//                             <h3>Chiffon & Rolls</h3>
//                         </div>
//                         <div>
//                             <h3>Donut</h3>
//                         </div>
//                         <div>
//                             <h3>Pastry & Danish</h3>
//                         </div>
//                         <div>
//                             <h3>Cakes</h3>
//                         </div>
//                         <div>
//                             <h3>Cookies</h3>
//                         </div>
//                     </Slider>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Menu;
