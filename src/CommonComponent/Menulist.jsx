// src/component/Menulist.jsx
import React, { useState } from "react";
import { FaHeadphonesAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import UseApiStrapiCategories from "../CommonComponent/UseApiCategoriesStrapi";
import Categories from "../component/Categories";

export default function Menulist() {
    const { categories, loading, error } = UseApiStrapiCategories();
    const [selectedCategory, setSelectedCategory] = useState(null);

    if (loading) return <p>تحميل التصنيفات...</p>;
    if (error) return <p>{error}</p>;
    if (categories.length === 0) return <p>لا توجد تصنيفات.</p>;

    return (
        <>
            <div className="menulist-cont flex justify-between p-2 sm:mx-1 xl:mx-8">
                {/* هنا عرض التصنيفات */}
                <Categories
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onSelectCategory={setSelectedCategory}
                />

                <ul className="flex gap-7 text-xl items-center">
                    <li>
                        <Link to="Home/" className="hover:text-green-500 font-semibold">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="About/" className="hover:text-green-500 font-semibold">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="Shop/" className="hover:text-green-500 font-semibold">
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link to="Contact/" className="hover:text-green-500 font-semibold">
                            Contact
                        </Link>
                    </li>
                </ul>

                <div className="menulist-icon gap-3 hidden md:block">
                    <FaHeadphonesAlt className="text-3xl" />
                    <div className="menulist-icon-data">
                        <h3 className="text-green-600 font-bold">1900-888</h3>
                        <p className="font-bold">24/7 Support Center</p>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}
