import React, { useState } from 'react'
import logo from '../assets/pngegg.png'
import { GrLanguage } from "react-icons/gr";
import { FaBars, FaXmark } from 'react-icons/fa6'
import { Link } from 'react-scroll';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  }
  const navItem = [
    { link: "overview", path: "home" },
    { link: "Feature", path: "feature" },
    { link: "About", path: "about" },
    { link: "Pricing", path: "pricing" },
  ]
  return (
    <>
      <nav className='z-20 bg-white md:px-14 p-4 max-w-screen-2xl border-b mx-auto text-primary fixed top-0 right-0 left-0'>
        <div className='text-xl container mx-auto flex justify-between items-center font-medium'>
          <div className='flex space-x-14 items-center'>
            <a className='text-2xl font-semibold flex items-center space-x-1 text-primary'
              href="/"><img src={logo} className='w-16 inline-block items-center' /><span>DOMM</span></a>
            <ul className='md:flex space-x-12 hidden'>
              {
                navItem.map(({ link, path }) =>
                  <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer' >{link}</Link>
                )
              }
            </ul>
          </div>
          {/* Language and signup */}
          <div className='space-x-12 hidden md:flex items-center'>
            <a href="/" className='hidden lg:flex items-center hover:text-secondary'><GrLanguage className='mr-2' />Language</a>
            <button className='bg-secondary py-2 px-4 transition-all duration-300 rounded 
            hover:text-white hover:bg-indigo-600'>Sign Up</button>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white focus:outline-none focus:text-gray-300'>
              {
                isMenuOpen ? (<FaXmark className='w-6 h-6 text-primary' />) : (<FaBars className='w-6 h-6 text-primary' />)
              }
            </button>
          </div>
        </div>
      </nav>
      <div className={`space-y-4 px-4 pt-24 pb-5 bg-secondary ${isMenuOpen ? "block fixed top-0 right-0 left-0"
    : "hidden"}`}>
        {
          navItem.map(({ link, path }) =>
            <Link activeClass='active' spy={true} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300' 
            onClick={toggleMenu}>{link}</Link>)
      }
      </div>
    </>
  )
}

export default Navbar