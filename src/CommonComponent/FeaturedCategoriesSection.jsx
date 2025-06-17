import React, { useRef, useState } from "react";
import UseDataStrapi from "../Hook/UseDataStrapi";
import FeaturedCategoryCard from "./FeaturedCategoryCard";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import AnimationCard from "../Wrapper Components/AnimationCard";


export default function FeaturedCategoriesSection() {
    const { categories, products, loading } = UseDataStrapi();
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const sliderRef = useRef(null);

    const colors = [
        "#f9c2ff", "#c2f9ff", "#ffc2c2", "#d2ffc2", "#c2d4ff", "#ffe6c2"
    ];

    if (loading) return <p>جارٍ تحميل التصنيفات...</p>;

    const categoriesWithCount = categories.map((cat) => {
        const count = products.filter((p) => p.category === cat.title).length;
        return {
            ...cat,
            count,
            image: cat.image || "/default-category.png",
        };
    });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1.5,
        arrows: false,
        responsive: [
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="my-20 px-4">
            <div className=" flex  justify-between m-10">
                <div className="flex gap-10 ">
                <h1 className="text-4xl font-bold">Featured Categories</h1>
            
                {/* قائمة المجموعات  + الازرار  */}
         
                {/* أسماء المجموعات   */}
                <div className="flex-1 flex justify-center gap-10 items-end ">
                        {categoriesWithCount.slice(0, 5).map((cat) => (
                        <button
                            key={cat.id}
                            onMouseEnter={() => setHoveredCategory(cat.title)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className={`text-md text-gray-200 font-semibold  cursor-pointer transition-colors duration-300 ${hoveredCategory === cat.title
                                ? "text-gray-800  hover:text-green-600 hover:text-bold "
                                    : "text-gray-800 hover:text-green-800 hover:text-bold  "
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                    </div>
                </div>
                    
                {/* أزرار التنقل  */}
                <div className="flex gap-5 ml-4">
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="p-3  bg-gray-300 text-gray-500  rounded-full hover:bg-green-600 hover:text-white transition"
                    >
                        {<FaArrowLeft />}
                    </button>
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="p-3 bg-gray-300 text-gray-500 rounded-full hover:bg-green-600 hover:text-white transition"
                    >
                        {<FaArrowRight/>}
                    </button>
                </div>
            </div>

            {/* السلايدر */}
            <Slider ref={sliderRef} {...settings}>
                {categoriesWithCount.map((category, index) => {
                    const bgColor = colors[index % colors.length];
                    const isActive = hoveredCategory === category.title;
                    return (
                        <AnimationCard key={category.id} index={index}>
                        <FeaturedCategoryCard
                            key={category.id}
                            title={category.title}
                            image={category.image}
                            count={category.count}
                            bgColor={bgColor}
                            isActive={isActive}
                            />
                        </AnimationCard>
                    );
                })}
            </Slider>
        </section>
    );
}
