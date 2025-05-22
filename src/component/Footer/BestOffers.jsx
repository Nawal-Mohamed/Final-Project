import React from 'react'
import AnimationCard from '../../Wrapper Components/AnimationCard'


export default function BestOffers({ img, heading, description }) {

    return (
        <div className='my-3 grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2'>
                <AnimationCard>
                <div className='m-1 bg-[#f4f6fa] w-60 h-35  flex gap-1 gap-2  lg:py-5 p-3 rounded-md'>
                    <img src={img} alt="" className='w-12 transition-transform duration-300 hover:-translate-y-2' />
                    <div>
                        <h2 className='m-2 font-medium text-xl text-black '>{heading}</h2>
                        <p className='m-3 font-normal text-md text-gray-400 '>{description}</p>
                    </div>
                </div>
            </AnimationCard>
        </div>
      
    )
}
