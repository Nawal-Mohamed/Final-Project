import React from "react";
import CategoriesContainer from "../CommonComponent/CategoriesContainer";
import ProductListStrapi from "../CommonComponent/ProductListStrapi";
import UseDataStrapi from "../Hook/UseDataStrapi";

export default function Shop() {
    const { categories, products, selectedCategory, setSelectedCategory, loading, error } = UseDataStrapi();

    const handleAddToCart = (product) => {
        console.log("تمت إضافة المنتج:", product.title);
    };

    if (loading) return <p>جاري التحميل...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <div className="p-4">
                <CategoriesContainer categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

                <ProductListStrapi products={products} onAddToCart={handleAddToCart} />

               
            </div>
        </>
    );
}
