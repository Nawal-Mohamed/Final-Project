import React from "react";
import { Link } from "react-router-dom";
import AnimationCard from "../Wrapper Components/AnimationCard";

const cards = [
    {
        title: "Everyday Fresh & Clean with Our Products",
        bgImage: "/assets/banner-1.png",
    },
    {
        title: "Make your Breakfast Healthy and Easy",
        bgImage: "/assets/banner-2.png",
    },
    {
        title: "The best Organic Products Online",
        bgImage: "/assets/banner-3.png",
    },
];

export default function PromoSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 xl:px-16 my-20">
            {cards.map((card, id) => (
                <AnimationCard key={id} index={id}>
                    <div
                        className="relative rounded-xl p-6 h-full min-h-[220px] flex items-center bg-cover bg-right transition-all"
                        style={{
                            backgroundImage: `url(${card.bgImage})`,
                        }}
                    >
                        <div className="relative z-10 w-60 group">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4 transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
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
