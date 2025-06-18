import React from "react";
import ProductListStrapi from "./ProductListStrapi";
import useShopData from "../Hook/UseDataStrapi"; 
import CategoriesMenu from "./CategoriesMenu";

export default function PopularProducts() {
    const {
        products,
        loading,
        error,
        categories,
        selectedCategory,
        setSelectedCategory
    } = useShopData();

    const handleAddToCart = (product) => {
        console.log("تمت إضافة المنتج:", product.title);
    };

    if (loading) return <p>جاري التحميل...</p>;
    if (error) return <p>{error}</p>;

    return (
        < >
            <div className="my-20 mx-4 sm:mx-6 md:mx-10">
                {/* العنوان + قائمة التصنيفات */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-10">
                    <h1 className="font-semibold text-3xl sm:text-4xl text-gray-700">Popular Products</h1>
                    <CategoriesMenu
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onSelectCategory={setSelectedCategory}
                    />

                </div>
  
                <ProductListStrapi products={products} onAddToCart={handleAddToCart} />
            </div>
        </>
    );
}
