import React from 'react'

const Quality = () => {
    return (
        <section className='bg-black'>
            <div className='container'>
                <div className='text-white text-[26px] md:text-[44px] leading-[1.5] md:leading-[1.3] text-center font-semibold pt-[180px]'>
                    <h1>We believe in making quality food</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-[30px]'>
                    <div className='text-center'>
                        <div className='text-white text-[46px] md:text-[56px] pt-[60px] pb-[12px] leading-[1.1] font-bold'>2M+</div>
                        <p className='text-white text-[18px] leading-[1.6]'>Happy Customers</p>
                    </div>
                    <div className='text-center'>
                        <div className='text-white text-[46px] md:text-[56px] pt-[60px] pb-[12px] leading-[1.1] font-bold'>98%</div>
                        <p className='text-white text-[18px] leading-[1.6]'>Customer Satisfaction</p>
                    </div>
                    <div className='text-center'>
                        <div className='text-white text-[46px] md:text-[56px] pt-[60px] pb-[12px] leading-[1.1] font-bold'>1</div>
                        <p className='text-white text-[18px] leading-[1.6]'>Our Branches </p>
                    </div>
                    <div className='text-center'>
                        <div className='text-white text-[46px] md:text-[56px] pt-[60px] pb-[12px] leading-[1.1] font-bold'>5+</div>
                        <p className='text-white text-[18px] leading-[1.6]'>Total Employees  </p>
                    </div>
                </div>

                <div className='pt-[150px]'>
                    <div>
                        <h2 className='text-white text-[28px] leading-[1.6] md:text-[50px] md:leading-[1.4] font-semibold text-center'>Start The Adventure Today And Become a Franchisee</h2>
                        <p className='text-white text-center text-[14px] md:text-[20px] leading-[1.8] md:leading-[1.5] pt-[20px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className='flex justify-center pt-[60px] cursor-pointer'>
                    <div className='bg-white rounded-4xl py-[16px] px-[110px] sm:py-[20px] sm:px-[54px]'>
                        <h2 className='text-[14px] md:text-[18px] leading-[1.4]'>Become a Franchisee</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quality
