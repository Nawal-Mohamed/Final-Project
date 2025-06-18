import React from "react";
import { getStrapiMedia } from "../utils/getStrapiMedia";

export default function FeaturedCategoryCard({
    title,
    image,
    count,
    bgColor,
    isActive,
}) {
    const imageUrl = image ? getStrapiMedia(image.url) : "/placeholder.png";

    return (
        <div
            className={`group flex flex-col items-center justify-center 
                rounded-lg p-4 w-full max-w-[230px] mx-auto shadow 
                transition border-2 border-transparent hover:border-[#62b173] 
                ${isActive ? "shadow-lg border-[#62b173] scale-105" : ""}
      `}
            style={{ backgroundColor: bgColor }}
        >
            <img
                src={imageUrl}
                alt={title}
                loading="lazy"
                className="w-16 md:w-20 h-14 md:h-16 rounded-3xl object-contain mb-2 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <h2 className="font-bold text-sm md:text-base lg:text-xl text-center transition-colors duration-300 group-hover:text-[#587949]">
                {title}
            </h2>
            <p className="text-[10px] md:text-xs text-gray-500">
                {count} {count === 1 ? "item" : "items"}
            </p>
        </div>
    );
}
