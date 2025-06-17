// src/Hook/useShopData.js (أو UseDataShop.js)
import { useEffect, useState } from "react";
import axios from "axios";

export default function useShopData() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data from Strapi
    useEffect(() => {
        Promise.all([
            axios.get("http://localhost:1337/api/categories?populate=*"),
            axios.get("http://localhost:1337/api/products?populate=*")
        ])
            .then(([catsRes, prodsRes]) => {
                const cats = catsRes.data.data.map((c) => ({
                    id: c.id,
                    title: c.title,
                    image: c.image || [],

                }));
                const prods = prodsRes.data.data.map((item) => ({
                    id: item.id,
                    title: item.title,
                    category: item.category?.title || null,
                    image: item.image || [],
                    price: item.price,
                    originalPrice: item.originalPrice,
                    rating: item.rating,
                    badge: item.badge,
                    by: item.by
                }));

                setCategories(cats);
                setProducts(prods);
                setFilteredProducts(prods); // مبدئيًا كل المنتجات
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setError("حدث خطأ أثناء تحميل البيانات");
                setLoading(false);
            });
    }, []);

    // Filter products when selectedCategory changes
    useEffect(() => {
        if (selectedCategory) {
            setFilteredProducts(products.filter((p) => p.category === selectedCategory));
        } else {
            setFilteredProducts(products);
        }
    }, [selectedCategory, products]);

    return {
        categories,
        products: filteredProducts,
        selectedCategory,
        setSelectedCategory,
        loading,
        error
    };
}
