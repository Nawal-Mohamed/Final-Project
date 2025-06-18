import React from 'react'
import { BsSend } from 'react-icons/bs'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from 'react';

export default function StayHomeFooter() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
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
            <div className='StayHome-main m-auto lg:w-[97%] w-[92%] lg:h-110 h-80 flex flex-col md:flex-row justify-between items-center bg-[#d2faf7] lg:ml-5 lg:mr-20 md:mr-18 sm:mr-20 rounded-xl lg:p-20 md:p-12 p-6 relative overflow-hidden'>
                {/* النص */}
                <div className='side-left w-full md:w-[60%] pt-4 md:pt-15 space-y-4 text-left pl-0 md:pl-6 z-10'>
                    <h1 className='lg:text-6xl text-4xl  font-bold text-[#253d4e]'>
                        Stay home & get your daily needs from our shop
                    </h1>
                    <p className='my-5 font-normal text-lg md:text-xl text-gray-500'>
                        Start You'r Daily Shopping with <span className='text-green-500 font-medium md:text-lg'>Nest Mart</span>
                    </p>
                   
                    <div className='subscribe-main relative lg:w-100 w-90 h-15.5 bg-white p-3 my-6 md:my-10 rounded-full flex justify-between items-center'>
                        <div className='subscribe-left flex justify-between items-center gap-3 w-full'>
                            <BsSend className="text-gray-500" />
                            <input 
                                type="text" 
                                placeholder='Your email address' 
                                className='outline-none w-full bg-transparent' 
                            />
                            <button className='subscribe-btn w-30 h-16 absolute right-0 bg-[#59b87e] text-white font-semibold hover:bg-[#4fa56d] px-4 py-2 rounded-full outline-none border-none'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* الصورة */}
                <div className='img lg:w-[50%] w-[40%]   h-auto absolute  bottom-0 right-5   z-0 md:z-auto'>
                    <img 
                        src="/assets/banner-9.png" 
                        alt="Stay Home Banner" 
                        className='w-full h-auto max-w-xs md:max-w-none mx-auto md:mx-0' 
                    />
                </div>
            </div>
        </motion.div>
    )
}