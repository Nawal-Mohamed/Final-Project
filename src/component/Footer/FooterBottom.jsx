import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import AnimationCard from '../../Wrapper Components/AnimationCard';

export default function FooterBottom() {
    return (
        <div className="border-t relative left-5 w-[97%] border-green-200 my-2 py-10 px-2 md:px-10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 bg-white">

            {/* 1 - حقوق الملكية */}
            <AnimationCard> 
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <p className='text-md text-[#7e7e7e]'>© 2024, <span className="font-medium text-md text-green-500">Nest</span> - HTML Ecommerce Template</p>
                    <p className='text-md text-[#7e7e7e]'>All rights reserved</p>
                </div>
            </AnimationCard>

            {/* 2 - أرقام الدعم */}
            <AnimationCard>
                <div className="mb-4 md:mb-0  flex-col items-center md:items-start  hidden lg:flex">
                    <div className="flex items-center gap-2">

                        <FiPhoneCall className="text-gray-400" size={40} />
                        <div>
                            <p className="text-[#59b87e] text-2xl font-semibold">1900 - 6666</p>
                            <p className=" text-md">Working 8:00 - 22:00</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <FiPhoneCall className="text-gray-400" size={40} />
                        <div>
                            <p className="text-[#59b87e] text-2xl font-semibold">1900 - 8888</p>
                            <p className="text-md ">24/7 Support Center</p>
                        </div>
                    </div>
                </div>
            </AnimationCard>

            {/* 3 - سوشيال ميديا */}
            <AnimationCard>
                <div className="text-center md:text-right">
                    <div className="flex justify-center md:justify-end gap-2 mb-1">
                        <p className="font-bold text-lg mb-2 text-[#253d4e]">Follow Us</p>
                        <a href="#" className="bg-[#59b87e] text-white p-2 h-8 rounded-full transition-transform duration-300 hover:-translate-y-2"><FaFacebookF /></a>
                        <a href="#" className="bg-[#59b87e] text-white p-2 h-8 rounded-full transition-transform duration-300 hover:-translate-y-2"><FaTwitter /></a>
                        <a href="#" className="bg-[#59b87e] text-white p-2 h-8 rounded-full transition-transform duration-300 hover:-translate-y-2"><FaInstagram /></a>
                        <a href="#" className="bg-[#59b87e] text-white p-2 h-8 rounded-full transition-transform duration-300 hover:-translate-y-2"><FaPinterestP /></a>
                        <a href="#" className="bg-[#59b87e] text-white p-2 h-8 rounded-full transition-transform duration-300 hover:-translate-y-2"><FaYoutube /></a>
                    </div>
                    <p className="text-md">Up to 15% discount on your first subscribe</p>
                </div>
            </AnimationCard>

        </div>
    );
}
