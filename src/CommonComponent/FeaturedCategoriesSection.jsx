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

    if (loading) return <p className="text-center">جارٍ تحميل التصنيفات...</p>;

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
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    return (
        <section className="my-16 px-2 sm:px-1">
            {/* العنوان + الأزرار + التصنيفات */}
            <div className="flex  flex-row justify-between items-center gap-6 mb-10">
                {/* العنوان */}
                <h1 className="text-3xl md:text-4xl  font-bold text-center lg:text-left">
                    Featured Categories
                </h1>

                {/* أسماء المجموعات */}
                <div className="flex flex-wrap justify-center lg:gap-4 gap-2">
                    {categoriesWithCount.slice(0, 5).map((cat) => (
                        <button
                            key={cat.id}
                            onMouseEnter={() => setHoveredCategory(cat.title)}
                            onMouseLeave={() => setHoveredCategory(null)}
                            className={`text-sm md:text-base font-semibold transition-colors duration-300 ${hoveredCategory === cat.title
                                    ? "text-green-600"
                                    : "text-gray-700 hover:text-green-800"
                                }`}
                        >
                            {cat.title}
                        </button>
                    ))}
                </div>

                {/* أزرار التنقل */}
                <div className="flex gap-3">
                    <button
                        onClick={() => sliderRef.current?.slickPrev()}
                        className="p-2 md:p-3 bg-gray-300 text-gray-600 rounded-full hover:bg-green-600 hover:text-white transition"
                    >
                        <FaArrowLeft />
                    </button>
                    <button
                        onClick={() => sliderRef.current?.slickNext()}
                        className="p-2 md:p-3 bg-gray-300 text-gray-600 rounded-full hover:bg-green-600 hover:text-white transition"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            {/* السلايدر */}
            <Slider className="!overflow-hidden" ref={sliderRef} {...settings}>
                {categoriesWithCount.map((category, index) => {
                    const bgColor = colors[index % colors.length];
                    const isActive = hoveredCategory === category.title;
                    return (
                        <AnimationCard key={category.id} index={index}>
                            <FeaturedCategoryCard
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
