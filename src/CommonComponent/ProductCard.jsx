import React from "react";
import { getStrapiMedia } from "@/utils/getStrapiMedia";

export default function ProductCard  ({ product }) {
    const firstImage = getStrapiMedia(product?.image?.[0]?.url);
    const secondImage = getStrapiMedia(product?.image?.[1]?.url);

    return (
        <div className="w-full sm:rounded-lg sm:shadow-md sm:p-4 p-0 m-0">
            {/* Badge */}
            {product.badge && (
                <span className="absolute  top-2 left-2 px-3 py-1 text-white text-xs rounded-full bg-pink-500">
                    {product.badge}
                </span>
            )}

            {/* Product Image */}
             <div className="relative w-full h-64 overflow-hidden rounded-xl mb-4">
                    <img
                        src={firstImage}
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    />
                {secondImage && (
                    <img
                        src={secondImage}
                        alt={`${product.title} hover`}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                )}
            </div>

            {/* Product Info */}
            <p className="text-sm text-gray-500">{product.category}</p>
            <h3 className="font-semibold text-base text-gray-900">{product.title}</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500 text-sm">
                {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>★</span>
                ))}
                <span className="text-gray-500 ml-1 text-xs">({product.rating})</span>
            </div>

            <p className="text-sm text-gray-500 mt-1">By <span className="text-primary">{product.brand}</span></p>

            {/* Price */}
            <div className="flex items-center  mt-2">
                <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
                <span className="line-through text-gray-400 text-sm">${product.originalPrice.toFixed(2)}</span>
            </div>

            {/* Button */}
            <button className="mt-3 w-full py-2 bg-green-100 text-green-600 font-semibold rounded-xl hover:bg-green-200 transition">
                🛒 Add
            </button>
        </div>
    );
};
