import React, { useState } from 'react'
import { Link } from 'react-router';
import logo from '../assets/logo.png'
import { Outlet } from 'react-router';

import Searchbar from './Searchbar';

const Nevbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOffcanvas = () => {
    setIsOpen(!isOpen);

  };


  return (
    <nav className='bg-white '>
      <div className='flex items-center h-15 pt-7 font-medium justify-evenly shadow-sm p-3 relative'>
         <div className="flex items-center justify-center md:hidden  gap-3 ">
            <div className="flex items-center justify-center gap-2 p-0 md:p-4">
              <ion-icon name="person-outline"></ion-icon>
              <p className="m-0 md:hidden  font-medium text-sm flex ">Account</p>
            </div>
            <div className="flex items-center justify-center gap-2 p-0 md:p-4">
              <ion-icon name="heart-outline"></ion-icon>
              <p className="m-0 flex  font-medium text-sm md:hidden ">Wishlist</p>
            </div>
            <div className="flex items-center justify-center gap-2 p-0 md-p-4">
              <ion-icon name="cart-outline"></ion-icon>
              <p className="m-0 flex  font-medium text-sm md:hidden ">Cart</p>
            </div>
          </div>

        <div className='text-3xl flex shadow-sm justify-end w-full md:justify-start md:w-auto md:left relative'>
          <button onClick={toggleOffcanvas}>
            <ion-icon name="menu-outline" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}></ion-icon>
          </button>
        </div>
        <ul className='md:flex hidden pl-10 md:left-50 pt-3 uppercase   gap-2 font-[poppins]' >
          <li>
            <Link to="/" className='px-3 py-7 pe-0 text-sm inline-block text-black' style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li className='relative'>
            <Link to="/Category" className='px-3 py-7 pe-0 text-sm inline-block text-black' style={{ textDecoration: 'none' }}>Category</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
          <li>
            <Link to="/Products" className='px-3 py-7 text-sm pe-0 inline-block text-black' style={{ textDecoration: 'none' }}>Products</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
          <li>
            <Link to="/Pages" className='px-3 py-7 pe-0 text-sm inline-block text-black' style={{ textDecoration: 'none' }}>Pages</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
          <li>
            <Link to="/Blog" className='px-3 py-7 pe-0 text-sm inline-block text-black' style={{ textDecoration: 'none' }}>Blog</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
          <li>
            <Link to="/Element" className='px-3 py-7 pe-0 text-sm inline-block text-black' style={{ textDecoration: 'none' }}>Element</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
        </ul>
        <ul className='md:flex hidden pt-3 gap-2'>
          <li className=' text-xl  relative font-[Segoe]'>
            <ion-icon name="call"></ion-icon>
          </li>
          <li className='text-sl font-normal'>
            +123 ( 456 ) ( 7890 )
          </li>
        </ul>
      </div>
      <div className='flex  justify-evenly items-center  p-2 h-20 bg-white'>
        <div className='pe-0 p-2 md:w-22 md:flex hidden flex justify-between'>
          <img src={logo} alt="" />
          <div>
            <p className='font-[Inter] p-4 ps-0 -ms-3 pb-0 mb-0 text-2xl font-black'>Foodzy</p>
            <p className='font-[inter] font-black -ms-3 w-30  text-xs'> A Treasure of Tastes</p>
          </div>
        </div>
        <div className='flex items-center justify-between w-full   md:w-auto'>
          <Searchbar />
        </div>
         <div className="md:flex items-center justify-center hidden gap-3 ">
            <div className="flex items-center justify-center gap-2 p-0 md:p-4">
              <ion-icon name="person-outline"></ion-icon>
              <p className="m-0 md:flex  font-medium text-sm hidden ">Account</p>
            </div>
            <div className="flex items-center justify-center gap-2 p-0 md:p-4">
              <ion-icon name="heart-outline"></ion-icon>
              <p className="m-0 md:flex  font-medium text-sm hidden ">Wishlist</p>
            </div>
            <div className="flex items-center justify-center gap-2 p-0 md-p-4">
              <ion-icon name="cart-outline"></ion-icon>
              <p className="m-0 md:flex  font-medium text-sm hidden ">Cart</p>
            </div>
          </div>


      </div>
      <div
        className={`fixed top-0 left-0 h-full overflow-auto w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        <div className='flex items-center  justify-between p-4 border-b'>
          <img src={logo} alt="Logo" className='w-20' />
          <div>
            <p className='font-[Inter] p-4 ps-0 pb-0 -ms-3 mb-0 text-2xl font-black'>Foodzy</p>
            <p className='font-[inter] font-black -ms-3 w-30  text-xs'> A Treasure of Tastes</p>
          </div>
          <button onClick={toggleOffcanvas} className='text-2xl'>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <ul style={{ textDecoration: 'none' }} className='flex flex-col p-5  gap-1 font-[poppins] uppercase'>
          <li>
            <Link to="/" className='px-3 py-7 pe-0  inline-block' style={{ textDecoration: 'none' }}>Home</Link>
          </li>
          <li>
            <Link to="/Category" className='px-3 py-7 pe-0  inline-block' style={{ textDecoration: 'none' }}>Category</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
          <li>
            <Link to="/Products" className='px-3 py-7 pe-0 inline-block' style={{ textDecoration: 'none' }}>Products</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
          <li>
            <Link to="/Pages" className='px-3 py-7 pe-0 inline-block' style={{ textDecoration: 'none' }}>Pages</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
          <li>
            <Link to="/Blog" className='px-3 py-7 pe-0 inline-block' style={{ textDecoration: 'none' }}>Blog</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
          <li>
            <Link to="/Element" className='px-3 py-7 pe-0 inline-block' style={{ textDecoration: 'none' }}>Element</Link>
            <ion-icon name="chevron-down"></ion-icon>
          </li>
        </ul>

        <div className='p-4 border-t'>
          <ul className='md:flex hidden  gap-2'>
            <li className=' text-xl  relative font-[Segoe]'>
              <ion-icon name="call"></ion-icon>
            </li>
            <li className='text-sl font-normal'>
              +123 ( 456 ) ( 7890 )
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={toggleOffcanvas}
          className="fixed inset-0 bg-black opacity-25 z-40 lg:hidden"
        ></div>
      )}
      <Outlet />
    </nav>

  )
}

export default Nevbar;
