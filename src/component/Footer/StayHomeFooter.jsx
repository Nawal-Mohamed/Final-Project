import React from 'react'
import { BsSend } from 'react-icons/bs'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';


export default function StayHomeFooter() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2, // يتحرك لما يظهر 20% منه في الشاشة
    });


    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
            });
        }
    }, [inView, controls]);


    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={controls}
        >
            <div className='StayHome-main m-auto lg:w-[97%]  w-[92%] lg:h-110 h-80   flex  justify-between items-center  bg-[#d2faf7] ml-5  mr-20 md:mr-18 sm:mr-20  rounded-xl p-20 md:p-12 sm:p-7 pl-6  relative'>
                <div className='side-left w-[60%] pt-15 space-y-4 text-left pl-6'>
                    <h1 className='lg:text-5xl md:text-2xl sm:text-xl font-semibold  lg:font-bold text-[#253d4e]'>Stay home & get your daily needs from our shop</h1>
                    <p className='my-5 font-normal text-xl text-gray-500 '>Start You'r Daily Shopping with <span className='text-green-500 font-medium  md:text-lg'>Nest Mart</span></p>
                   
                    <div className='subscribe-main sm:z-[3] relative  w-150 md:w-95 sm:w-85 h-15.5 bg-white p-3 my-10 rounded-full flex justify-between items-center'>
                        <div className='subscribe-left flex justify-between items-center gap-3'>
                            <BsSend />
                            <input type="text" placeholder='Your email address' className='outline-none' />
                            <a href="#" ><button className='subscribe-btn h-15 relative left-6 bg-[#59b87e] text-white font-semibold hover:bg-[#4fa56d]  px-4 py-2 rounded-full outline-none border-none'>Subscribe</button></a></div>
                        </div>

                        </div>
                        <div className='img  xl:w-[40%] md:w-90 sm:w-70 absolute  bottom-0 right-10 md:right-6 sm:right-4'><img src="/assets/banner-9.png" alt="" className='w-full ' /></div>
                        </div>
 

        </motion.div>
    )
}
