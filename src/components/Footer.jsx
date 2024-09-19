import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <section className='bg-black'>
      <div className='opacity-15 border-t-[1px] pt-10 border-t-secondary_color w-[90%] m-auto' />
      <div className='flex justify-between py-5 px-5 lg:px-16'>
        <img width={150} alt='logo' src={logo} />
        <div>
          <p className='text-secondary_color '>© Copyright 2024, by cangrow online</p>
        </div>

      </div>

    </section>
  )
}

export default Footer