// src/Common component/CategoriesContainer.jsx
import React from "react";
import Categories from "../component/Categories";

export default function CategoriesContainer({
    categories,
    selectedCategory,
    onSelectCategory,
    loading,
    error
}) {
    if (loading) return <p>تحميل التصنيفات...</p>;
    if (error) return <p>{error}</p>;
    if (!categories || categories.length === 0) return <p>لا توجد تصنيفات.</p>;

    return (
        <div className="m-10">
            <Categories
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={onSelectCategory}
            />
        </div>
    );
}
