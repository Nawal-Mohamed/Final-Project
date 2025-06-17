"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Send } from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <div className="banner mx-4 sm:mx-8 md:mx-12 lg:mx-20 my-6 md:my-10 lg:my-15">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide className="flex-shrink-0 w-full">
          <div className="swiper-data bg-[url('/assets/2149271034.jpg')] bg-cover bg-center rounded-lg md:rounded-xl lg:rounded-2xl h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 leading-tight">
              Don't miss amazing
              <br className="hidden sm:block" /> grocery deals
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2 md:mt-4">
              Sign up for the daily newsletter
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-4 md:mt-6 flex w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-2 sm:left-3 flex items-center text-gray-400">
                  <Send className="h-3 w-3 sm:h-4 sm:w-4 md:h-4 md:w-6" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full py-2 sm:py-3 pl-7 sm:pl-10 pr-2 sm:pr-3 bg-white text-sm sm:text-base md:text-lg rounded-l-full focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm sm:text-base font-medium sm:font-semibold py-2 sm:py-3 px-3 sm:px-4 md:px-6 rounded-r-full transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="swiper-data bg-[url('/assets/40.png')] bg-cover bg-center rounded-lg md:rounded-xl lg:rounded-2xl h-[20rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-800 leading-tight">
              Fresh offers every week
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mt-2 md:mt-4">
              Subscribe to stay updated
            </p>
            <form
              onSubmit={handleSubmit}
              className="mt-4 md:mt-6 flex w-full max-w-xs sm:max-w-sm md:max-w-md"
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-2 sm:left-3 flex items-center text-gray-400">
                  <Send className="h-3 w-3 sm:h-4 sm:w-4 md:h-4 md:w-6" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full py-2 sm:py-3 pl-7 sm:pl-10 pr-2 sm:pr-3 bg-white text-sm sm:text-base md:text-lg rounded-l-full focus:outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm sm:text-base font-medium sm:font-semibold py-2 sm:py-3 px-3 sm:px-4 md:px-6 rounded-r-full transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
