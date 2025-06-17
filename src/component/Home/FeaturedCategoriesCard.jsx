// src/components/FeaturedCategoriesCard.jsx
import React from "react";

const FeaturedCategoriesCard = ({ title, image }) => {
    return (
        <div className="grid  shadow hover:shadow-lg transition duration-300 bg-white">
            {image && (
                <img
                    src={`http://localhost:1337${image}`}
                    alt={title}
                    className="w-full h-40 object-cover"
                />
            )}
            <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            </div>
        </div>
    );
};

export default FeaturedCategoriesCard;
