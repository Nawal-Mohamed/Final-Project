// src/CommonComponent/UseApiStrapiCategories.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export default function useApiStrapiCategories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios
            .get("http://localhost:1337/api/categories")
            .then((res) => {
                setCategories(
                    res.data.data.map((c) => ({
                        id: c.id,
                        title: c.title,
                    }))
                );
                setLoading(false);
            })
            .catch((err) => {
                console.error("خطأ في تحميل التصنيفات:", err.response?.data || err.message);
                setError("حدث خطأ أثناء تحميل التصنيفات");
                setLoading(false);
            });
    }, []);

    return { categories, loading, error };
}
