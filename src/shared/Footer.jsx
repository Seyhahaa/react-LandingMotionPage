import React from 'react'
import logo from '../assets/pngegg.png'
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
            <div className='my-12 flex flex-col md:flex-row gap-10'>
                <div className='md:w-1/2 space-y-8'>
                    <a className='text-2xl font-semibold flex items-center space-x-1 text-primary'
                        href="/"><img src={logo} className='w-16 inline-block items-center' /><span className='text-white'>DOMM</span></a>
                    <p className='md:w-1/2 '>A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
                    <div>
                        <input type="email" name='email' id='email' placeholder='Your Email' className='bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none' />
                        <input type="sumit" value="Subscribe" className='px-4 py-2 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover: text-primary
                        duration-300 transition-all' />
                    </div>
                </div>
                {/* footer navigation */}
                <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Platform</h4>
                        <ul className='space-y-3'>
                            <a href="" className='block hover:text-gray-300'>Overview</a>
                            <a href="" className='block hover:text-gray-300'>Features</a>
                            <a href="" className='block hover:text-gray-300'>About</a>
                            <a href="" className='block hover:text-gray-300'>Pricing</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Help</h4>
                        <ul className='space-y-3'>
                            <a href="" className='block hover:text-gray-300'>How does it work?</a>
                            <a href="" className='block hover:text-gray-300'>Where to ask question?</a>
                            <a href="" className='block hover:text-gray-300'>How to play?</a>
                            <a href="" className='block hover:text-gray-300'>What is needed for this?</a>
                        </ul>
                    </div>
                    <div className='space-y-4 mt-5'>
                        <h4 className='text-xl'>Contact</h4>
                        <ul className='space-y-3'>
                            <a href="" className='block hover:text-gray-300'>(012) 1234-567</a>
                            <a href="" className='block hover:text-gray-300'>123 xyz jbsh</a>
                            <a href="" className='block hover:text-gray-300'>Tropeagn dom, Tbk - Cambodia</a>
                            <a href="" className='block hover:text-gray-300'>093274166</a>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8'>
                <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>
                <div className='flex items-center space-x-5'>
                    <FaFacebookSquare className='text-3xl cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <FaInstagramSquare className='text-3xl cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <FaTwitterSquare className='text-3xl cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                    <FaLinkedin className='text-3xl cursor-pointer hover:-translate-y-4 transition-all duration-300'/>
                </div>
            </div>
        </div>
    )
}

export default Footer