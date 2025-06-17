// src/CommonComponent/CategoriesMenu.jsx
import React from "react";

export default function CategoriesMenu({ categories, selectedCategory, onSelectCategory }) {
    return (
        <div className="flex flex-wrap justify-center gap-6 my-6">
            {/* زر "الكل" */}
            <button
                onClick={() => onSelectCategory(null)}
                className={`text-md font-semibold transition-colors duration-300 ${selectedCategory === null
                        ? "text-green-600 "
                        : "text-gray-800 hover:text-green-800"
                    }`}
            >
                All
            </button>

            {/* باقي التصنيفات */}
            {categories.slice(0.3).map((cat) => (
                <button
                    key={cat.id}
                    onClick={() => onSelectCategory(cat.title)}
                    className={`text-md font-semibold transition-colors duration-300 ${selectedCategory === cat.title
                            ? "text-green-600"
                        : "text-gray-800 hover:text-green-500 hover:-translate-y-1"
                        }`}
                >
                    {cat.title}
                </button>
            ))}
        </div>
    );
}
