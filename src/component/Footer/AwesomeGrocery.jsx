import React from 'react';
import AnimationCard from '../../Wrapper Components/AnimationCard';
import { IoLocationOutline } from 'react-icons/io5';
import { CiClock2, CiHeadphones } from 'react-icons/ci';
import { BsSend } from 'react-icons/bs';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import FooterLinksColumn from './FooterLinksColumn';



export default function AwesomeGrocery() {

    const footerLinks = [
        {
            title: "Company",
            links: ["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us", "Support Center", "Careers"],
        },
        {
            title: "Account",
            links: ["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help Ticket", "Shipping Details", "Compare products"],
        },
        {
            title: "Corporate",
            links: ["Become a Vendor", "Affiliate Program", "Farm Business", "Farm Careers", "Our Suppliers", "Accessibility", "Promotions"],
        },
        {
            title: "Popular",
            links: ["Milk & Flavoured Milk", "Butter and Margarine", "Eggs Substitutes", "Marmalades", "Sour Cream and Dips", "Tea & Kombucha", "Cheese"],
        },
    ];

    return (
        <div className="grid  grid-cols-17 gap-5  pr-10 my-5 h-full">
            <div className="lg:col-span-5 md:col-span-7 sm:col-span-9 ">
                <AnimationCard index={0}>
                    <div className=" px-2 rounded">

                        <div className='first-div'>
                            <a href="#"><img src="/assets/logo.svg" alt="" /></a>
                            <h2 className='mt-5'>Awesome grocery store website template</h2>
                        </div>

                        <div className='div-location flex justify- gap-1  mt-5 '>
                            <IoLocationOutline className='text-green-500' size={20} />
                            <h2><span className='font-semibold'>Address:</span> 5171 W Campbell Ave <br /> undefined Kent, Utah 53127 United States              </h2>
                        </div>

                        <div className='div-location flex justify- gap-1  mt-5 '>
                            <CiHeadphones className='text-green-500 ' size={20} />
                            <h2><span className='font-semibold'>Call Us:</span>(+91) - 540-025-124553</h2>
                        </div>


                        <div className='div-location flex justify- gap-1  mt-5 '>
                            <BsSend className='text-green-500' size={20} />
                            <h2><span className='font-semibold'>Email:</span>sale@Nest.com</h2>
                        </div>

                        <div className='div-location flex justify- gap-1  mt-5 '>
                            <CiClock2 className='text-green-500' size={20} />
                            <h2><span className='font-semibold'>Hours:</span>10:00 - 18:00, Mon - Sat</h2>
                        </div>


  
                    </div>
                </AnimationCard>
            </div>

            {footerLinks.map((section, index) => (
                <div className="lg:col-span-3 md:col-span-5 sm:col-span-7   ">
                    <AnimationCard index={index + 1}>
                        <FooterLinksColumn title={section.title} links={section.links} />
                    </AnimationCard>
                </div>
            ))}

            <div className='installApp-main col-span-5'>

                <div className='installApp-title my-1'>
                    <h2 className='font-bold text-3xl my-3'>Install App</h2>
                    <p>From App Store or Google Play</p>
                </div>

                <div className='installApp my-5 flex gap-10 '>

                    <div className='appStore bg-black  p-1 w-40 rounded-md transition-transform duration-300 hover:-translate-y-2'>
                        <a href="https://www.apple.com/eg-ar/app-store/" className='text-white flex gap-1'>
                            <FaApple size={30} className='text-white' />
                            <p className='text-gray-500 text-sm'>Download on the
                                <br />
                                <p className='text-white text-sm'>AppStore</p>
                            </p>
                        </a></div>


                    <div className='googlePlay bg-black  p-1 w-40 rounded-md transition-transform duration-300 hover:-translate-y-2'>
                        <a href="https://play.google.com/store/games?device=windows&pli=1" className='text-white flex gap-1'>
                            <FaGooglePlay size={30} className='text-white color-green-500 ' />
                            <p className='text-gray-500 text-sm'>GET iT ON
                                <br />
                                <p className='text-white text-sm'>Google Play</p>
                            </p>
                        </a></div>
                </div>

                <div className='payment-ways my-13'>
                    <p>Secured Payment Gateways</p>
                    <img src="assets/payment-method.png" alt="" className='my-7' />
                </div>
            </div>


        </div>
    );
}