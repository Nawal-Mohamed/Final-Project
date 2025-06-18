import React from 'react';
import AnimationCard from '../../Wrapper Components/AnimationCard';
import { motion } from 'framer-motion';

export default function BestOffers({ offers }) {
    return (
        <div className='my-3 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 w-full'>
            {offers.map((offer, index) => (
                <motion.div
                    key={offer.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                    <AnimationCard>
                        <div className='bg-[#f4f6fa] w-full h-auto flex gap-2 lg:py-5 p-3 rounded-md'>
                            <img
                                src={offer.img}
                                alt=""
                                className='w-12 transition-transform duration-300 hover:-translate-y-2'
                            />
                            <div>
                                <h2 className='mb-2 font-medium text-xl text-black'>{offer.heading}</h2>
                                <p className='text-md text-gray-400'>{offer.description}</p>
                            </div>
                        </div>
                    </AnimationCard>
                </motion.div>
            ))}
        </div>
    );
}
