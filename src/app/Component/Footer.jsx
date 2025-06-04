import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-amber-500'>
      <div className='container '>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-[103px] py-[80px]'>
          <div>
            <div>
              <p className='text-white text-[24px] leading-1 pb-[30px]'>Our Products</p>
            </div>
            <div>
              <p className='text-[18px] text-white '>Our men us</p>
              <p className='text-[18px] text-white '>Our burgers</p>
              <p className='text-[18px] text-white '>Our times sides</p>
              <p className='text-[18px] text-white '>Our naandwiches</p>
            </div>
            {/* <p className='text-white text-[24px] leading-1'>Our Products</p>
            <div>
              <div>
                <p className='text-[18px] text-white '>Our men pb-[30px]us</p>
              </div>
              <p className='text-[18px] text-white '>Our burgers</p>
              <p className='text-[18px] text-white '>Our times sides</p>
              <p className='text-[18px] text-white '>Our naandwiches</p>
            </div> */}
          </div>

          <div>
            <div>
              <p className='text-white text-[24px] leading-1 pb-[30px]'>legal information</p>
            </div>
            <div>
              <p className='text-[18px] text-white '>Legal Notice</p>
            </div>
          </div>

          <div>
            <div>
              <p className='text-white text-[24px] leading-1 pb-[30px]'>Contact us</p>
            </div>
            <div>
              <p className='text-[18px] text-white '>Contacts</p>
              <p className='text-[18px] text-white '>Our addresses</p>
              <p className='text-[18px] text-white '>Become a Times Square franchisee</p>
            </div>
          </div>

          <div>
            <div>
              <p className='text-white text-[24px] leading-1 pb-[30px]'>We accept</p>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
