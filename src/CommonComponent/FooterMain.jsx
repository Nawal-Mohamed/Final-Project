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
   
       <BestOffers offers={BestOfferFooter} />
    
      <AwesomeGrocery />

      <FooterBottom />
    </>
  );
}
