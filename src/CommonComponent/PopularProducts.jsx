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
            <div className="my-20 mx-5">

           
            <div className="flex justify-between text-center">
                    <h1 className="font-semibold text-4xl my-10 text-gray-700">Popular Products</h1>
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
