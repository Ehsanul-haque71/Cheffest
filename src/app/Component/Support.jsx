import React from 'react'

const Support = () => {
    return (
        <section className='bg-white'>
            <div className='container'>
                <div className='py-[80px] text-center '>
                    <div>
                        <h2 className='text-black font-bold text-[70px] leading-[1.2] pb-[50px]'>For more Support</h2>
                    </div>
                    <div className="flex items-center justify-center gap-[20px]">
                        <input
                            type="email"
                            placeholder="Enter Email"
                            className="px-6 py-3 rounded-full border border-black outline-none w-72"
                        />
                        <button className="px-6 py-3 rounded-full bg-black text-white font-semibold">
                            Subscribe
                        </button>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Support
