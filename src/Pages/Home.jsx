import React from "react";
import Banner from "..//component/Banner";
import FeaturedCategoriesSection from "../CommonComponent/FeaturedCategoriesSection";
import PromoSection from "../CommonComponent/PromoSection";
import PopularProducts from "../CommonComponent/PopularProducts";

export default function Home() {
    return (
        <>
            <Banner />
            <FeaturedCategoriesSection />
            <PromoSection />
            <PopularProducts />
        </>
    );
}
