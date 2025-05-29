import React from 'react';
import Image from 'next/image';
import Chef from '@/app/Assets/Chef.svg';
import { BsCart3 } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <div>
        <Image src={Chef} alt='main_logo' />
      </div>
      <div>
        <ul>
            <li>Welcome</li>
            <li>Our menu</li>
            <li>Franchise</li>
            <li>Contacts</li>
        </ul>
      </div>
      <div className='flex'>
        <div><BsCart3/></div>
        <div><CgSearch /></div>
      </div>
    </nav>
  )
}

export default Navbar
