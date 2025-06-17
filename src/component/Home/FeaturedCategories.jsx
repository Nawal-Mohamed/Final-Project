import React from "react";
import useApiStrapiCategories from "../../CommonComponent/UseApiCategoriesStrapi";
import FeaturedCategoriesCard from "./FeaturedCategoriesCard";

const FeaturedCategories = () => {
    const { categories, loading, error } = useApiStrapiCategories();

    if (loading) return <div className="text-center py-4">جاري التحميل...</div>;
    if (error) return <div className="text-center text-red-500">{error}</div>;

    return (
        <>
                <h1>Featured Categories</h1>
            <div className="grid grid-cols-5 sm:grid-cols-3 md:grid-cols-4 gap-2 bg-amber-600">
                {categories.map((cat) => (
                    <FeaturedCategoriesCard
                        key={cat.id}
                        title={cat.title}
                        image={cat.image}
                    />
                ))}
            </div>
        </>
    );
};

export default FeaturedCategories;
