import React from "react";
import ProductCardStrapi from "../CommonComponent/ProductCardStrapi";

export default function ProductListStrapi({ products, onAddToCart }) {
    if (!products || products.length === 0) {
        return <p>لا توجد منتجات لعرضها.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
            {products.map((product) => (
                <div key={product.id} className="w-full sm:p-0">
                    <ProductCardStrapi product={product} onAddToCart={onAddToCart} />
                </div>
            ))}
        </div>
    );
}
