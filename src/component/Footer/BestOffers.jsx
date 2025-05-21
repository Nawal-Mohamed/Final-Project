import React from 'react'
import AnimationCard from '../../Wrapper Components/AnimationCard'


export default function BestOffers({ img, heading, description }) {

    return (
        <div>
            <div className='my-8 '>
            <AnimationCard>
                <div className='m-0 bg-[#f4f6fa] h-35 flex gap-1 justify-between items-center py-5 px-1 rounded-md xl:w-60 md:w-80 sm:w-100 '>
                    <img src={img} alt="" className='w-13 transition-transform duration-300 hover:-translate-y-2' />
                    <div>
                        <h2 className='m-2 font-medium text-xl text-black '>{heading}</h2>
                        <p className='m-3 font-normal text-md text-gray-400 '>{description}</p>
                    </div>
                </div>
            </AnimationCard>
            </div>

        </div>

    )
}
