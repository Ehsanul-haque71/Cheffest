import React from 'react'


const Menu = () => {


    return (
        <section className='bg-black'>
            <div className='container'>
                <div className='text-center'>
                    <h1 className='text-[26px] md:text-[50px] leading-[1.6] max-w-[259px] sm:max-w-[713px] inline-block text-white pt-[25px] sm:pt-[150px'>Our Best & Delicious Menu</h1>
                </div>
                <div className='overflow-x-auto sm:overflow-x-hidden '>
                    <ul className='flex gap-[104px] text-white items-center w-max text-center'>
                        <li>All</li>
                        <li>Bread</li>
                        <li>Chiffon & Rolls</li>
                        <li>Donut</li>
                        <li>Pastry & Danish</li>
                        <li>Cakes</li>
                        <li>Cookies</li>
                    </ul>
                </div>
                <div></div>
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
