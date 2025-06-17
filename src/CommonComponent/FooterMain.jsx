import React from "react";
import StayHomeFooter from "../component/Footer/StayHomeFooter.jsx";
import BestOffers from "../component/Footer/BestOffers.jsx";
import { BestOfferFooter } from "../DataArrays/dataFooter/BestOfferFooter.js";
import { motion } from "framer-motion";
import AwesomeGrocery from "../component/Footer/AwesomeGrocery.jsx";
import FooterBottom from "../component/Footer/FooterBottom.jsx";

export default function FooterMain() {
  return (
    <>
      <StayHomeFooter />
      <div className="grid grid-cols-15 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5  sm:gap-1  md:gap-3 lg:gap-5  p-4 w-full">
        {BestOfferFooter.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <BestOffers
              key={item.id}
              heading={item.heading}
              description={item.description}
              img={item.img}
            />
          </motion.div>
        ))}
      </div>
      <AwesomeGrocery />

      <FooterBottom />
    </>
  );
}
