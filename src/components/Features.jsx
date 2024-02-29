import React from 'react'
import {motion} from "framer-motion"
//  variants
import { fadeIn } from "../variants"

function Features() {
    const img = "https://images.pexels.com/photos/821652/pexels-photo-821652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    return (
        <div className='my-24 md:px-14 px-4 max-w-screen-2xl mx-auto' id='feature'>
            <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                <motion.div
                 variants={fadeIn("left",0.2)}
                 initial="hidden"
                 whileInView={"show"}
                 viewport={{once: false, amount: 0.7}}
                className='lg:w-1/4'>
                    <h3 className='text-3xl text-primary font-bold mb-3'>Why We are better than others</h3>
                    <p className='text-base text-tartiary'>A simple paragraph is comprised of three major components. the first sentence, which is
                        often a declarative sentence, is called the "topic sentence."</p>
                </motion.div>
                <div className='w-full lg:w-3/4'>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start gap-8 md:gap-12'>
                        <div className='cursor-pointer bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                        items-center flex justify-center hover:-translate-y-4 transition-all duration-300'>
                            <div>
                                <img src={img} className='' alt=""  />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient studey schedule</h5>
                            </div>
                        </div>
                        <div className='cursor-pointer bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                        items-center flex justify-center hover:-translate-y-4 transition-all duration-300 md:mt-16'>
                            <div>
                                <img src={img} alt=""  />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient studey schedule</h5>
                            </div>
                        </div>
                        <div className='cursor-pointer bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 
                        items-center flex justify-center hover:-translate-y-4 transition-all duration-300'>
                            <div>
                                <img src={img} alt=""  />
                                <h5 className='text-2xl font-semibold text-primary px-5 text-center mt-5'>Conventient studey schedule</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features