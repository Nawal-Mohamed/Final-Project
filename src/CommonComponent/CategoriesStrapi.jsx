//costume hook for api  categories data strapi
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CategoriesStrapi = ({ onSelectCategory }) => {
    const fetchCategories = async () => {
        const { data } = await axios.get("http://localhost:1337/api/categories");
        return data;
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ["categories"],
        queryFn: fetchCategories,
    });

    if (isLoading) return <p>جاري تحميل التصنيفات...</p>;
    if (isError) return <p>حدث خطأ أثناء تحميل التصنيفات.</p>;

    const categories = data?.data || [];

    return (
        <div className="flex flex-wrap gap-4 justify-center p-4">
            <button
                onClick={() => onSelectCategory(null)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded"
            >
                الكل
            </button>

            {categories.map((category) => (
                <button
                    key={category.id}
                    onClick={() => onSelectCategory(category.title)}
                    className="bg-green-100 hover:bg-green-300 text-green-900 px-4 py-2 rounded"
                >
                    {category.title}
                </button>
            ))}

        </div>
    );
};

export default CategoriesStrapi ;
