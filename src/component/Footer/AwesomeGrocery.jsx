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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 p-4 w-full">

            {/* العمود الأساسي */}
            <div className="col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2">
                <AnimationCard index={0}>
                    <div className="px-2 rounded">
                        <div className='first-div'>
                            <a href="#"><img src="/assets/logo.svg" alt="" /></a>
                            <h2 className='mt-5'>Awesome grocery store website template</h2>
                        </div>

                        <div className='flex gap-1 mt-5'>
                            <IoLocationOutline className='text-green-500' size={20} />
                            <h2><span className='font-semibold'>Address:</span> 5171 W Campbell Ave <br /> Kent, Utah 53127 United States</h2>
                        </div>

                        <div className='flex gap-1 mt-5'>
                            <CiHeadphones className='text-green-500' size={20} />
                            <h2><span className='font-semibold'>Call Us:</span> (+91) - 540-025-124553</h2>
                        </div>

                        <div className='flex gap-1 mt-5'>
                            <BsSend className='text-green-500' size={20} />
                            <h2><span className='font-semibold'>Email:</span> sale@Nest.com</h2>
                        </div>

                        <div className='flex gap-1 mt-5'>
                            <CiClock2 className='text-green-500' size={20} />
                            <h2><span className='font-semibold'>Hours:</span> 10:00 - 18:00, Mon - Sat</h2>
                        </div>
                    </div>
                </AnimationCard>
            </div>

            {/* أعمدة الروابط */}
            {footerLinks.map((section, index) => (
                <div key={index} className="col-span-1">
                    <AnimationCard index={index + 1}>
                        <FooterLinksColumn title={section.title} links={section.links} />
                    </AnimationCard>
                </div>
            ))}

            {/* تطبيقات ومتجر */}
            <div className="col-span-2 md:col-span-3 lg:col-span-2 xl:col-span-2">
                <AnimationCard>
                    <div className='installApp-title my-1'>
                        <h2 className='font-bold text-3xl my-3'>Install App</h2>
                        <p>From App Store or Google Play</p>
                    </div>

                    <div className='installApp my-5 flex flex-wrap gap-4'>
                        <div className='appStore bg-black p-2 w-40 rounded-md transition-transform duration-300 hover:-translate-y-2'>
                            <a href="https://www.apple.com/eg-ar/app-store/" className='text-white flex gap-2'>
                                <FaApple size={30} />
                                <div>
                                    <p className='text-gray-400 text-sm'>Download on the</p>
                                    <p className='text-white text-sm'>App Store</p>
                                </div>
                            </a>
                        </div>

                        <div className='googlePlay bg-black p-2 w-40 rounded-md transition-transform duration-300 hover:-translate-y-2'>
                            <a href="https://play.google.com/store" className='text-white flex gap-2'>
                                <FaGooglePlay size={30} />
                                <div>
                                    <p className='text-gray-400 text-sm'>GET IT ON</p>
                                    <p className='text-white text-sm'>Google Play</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='payment-ways mt-10'>
                        <p>Secured Payment Gateways</p>
                        <img src="/assets/payment-method.png" alt="Payment Methods" className='mt-4' />
                    </div>
                </AnimationCard>
            </div>
        </div>
    );
}
