import React from "react";
import { getStrapiMedia } from "../utils/getStrapiMedia";

export default function ImageHoverSwitcher({ images = [], title }) {
    return (
        <div className="relative w-40 h-30  overflow-hidden rounded-xl group mb-4 ">
            <img
                src={getStrapiMedia(images?.[0]?.url)}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-300 group-hover:opacity-0"
            />
            {images?.[1] && (
                <img
                    src={getStrapiMedia(images[1]?.url)}
                    alt={title}
                    className="absolute top-0 left-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
            )}
        </div>
    );
}
