// src/components/PromoSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import AnimationCard from '../Wrapper Components/AnimationCard'; 

const cards = [
    {
        title: "Everyday Fresh & Clean with Our Products",
        bgImage: "/assets/banner-1.png",
        // bgColor: "bg-yellow-100",
    },
    {
        title: "Make your Breakfast  Healthy and Easy",
        bgImage: "/assets/banner-2.png",
        // bgColor: "bg-pink-100",
    },
    {
        title: "The best Organic Products Online",
        bgImage: "/assets/banner-3.png",
        // bgColor: "bg-blue-100",
    },
];

export default function PromoSection() {
    return (
        <div className="flex gap-6 justify-center my-20 p-6">
            {cards.map((card, id) => (
                <AnimationCard key={id} index={id}>
                    <div
                        className={`relative flex items-center justify-between rounded-xl p-6 w-100 max-w-md overflow-hidden`}
                        style={{
                            backgroundImage: `url(${card.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "right center",
                        }}
                    >
                        <div className="absolute z-0"></div>

                        <div className="relative z-10 w-60 h-50 group">
                            <h3 className="h-30 py-4 text-xl font-semibold text-gray-800 mb-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
                                {card.title}
                            </h3>
                            <Link
                                to="/shop"
                                className="font-bold inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-orange-300 transition-transform duration-500 ease-in-out hover:scale-x-105 origin-left text-sm"
                            >
                                Shop Now →
                            </Link>
                        </div>
                    </div>
                </AnimationCard>
            ))}
        </div>
    );
}
