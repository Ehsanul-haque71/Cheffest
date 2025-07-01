import React from 'react'

const Maps = () => {
  return (
    <section className='bg-black'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[50px]'>
          <div className='text-white pt-[90px] font-bold text-center'>
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sed ullam debitis voluptates illum impedit voluptatibus aliquid ipsum, iure, aliquam inventore deserunt nemo quo eaque similique incidunt consequuntur itaque maiores? Nihil voluptas impedit voluptates et. Sit eveniet laboriosam soluta, ex nihil dolorem ipsam quas ratione modi minus fugiat nisi accusantium.</h2>
          </div>
          <div className='w-[300px] h-[300px] mt-10 border-radius-[2px]'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.859720842344!2d89.86829477387666!3d23.319463305186385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffd3804535bee3%3A0x46394739afb8e22a!2sKazi%20Food%20Resturant!5e1!3m2!1sen!2sbd!4v1751302901038!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Maps
