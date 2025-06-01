import React from 'react'
import { Link } from 'react-router';
import Navlink from './Navlink';
import logo from '../assets/logo.png'
import { Outlet } from 'react-router';
const Nevbar = () => {
  return (
    <nav className='bg-white '>
    <div className='flex items-center font-medium justify-around'>
      <div className=' p-2 md:w-50 w-40 flex justify-between'> 
       <img src={logo} alt="" />
      </div>
      <div className='text-3xl'>
        <ion-icon name="menu"></ion-icon>
      </div>
    <ul className='md:flex hidden uppercase item-center gap-8 font-[poppins]' >
        <li>
            <Link to="/" className='px-3 py-7 inline-block'>Home</Link>
        </li>
       
        <li>
            <Link to="/Category" className='px-3 py-7 inline-block'>Category</Link>
        </li>
        <li>
            <Link to="/Products" className='px-3 py-7 inline-block'>Products</Link>
        </li>
        <li>
            <Link to="/Pages" className='px-3 py-7 inline-block'>Pages</Link>
        </li>
        <li>
            <Link to="/Blog" className='px-3 py-7 inline-block'>Blog</Link>
        </li>
        <li>
            <Link to="/Element" className='px-3 py-7 inline-block'>Element</Link>
        </li>
    </ul>
    </div> 
    <Outlet />
    </nav>
  )
}

export default Nevbar;
