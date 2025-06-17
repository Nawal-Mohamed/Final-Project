import React from "react";
import ProductCardStrapi from "..//CommonComponent/ProductCardStrapi";

export default function ProductListStrapi({ products, onAddToCart }) {
    if (!products || products.length === 0) {
        return <p>لا توجد منتجات لعرضها.</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <ProductCardStrapi
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                />
            ))}
        </div>
    );
}
