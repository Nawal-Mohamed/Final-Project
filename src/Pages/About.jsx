import React from "react";
import Navbar from "../CommonComponent/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import {
  FaTag,
  FaHandshake,
  FaTruck,
  FaUndo,
  FaBox,
  FaGift,
} from "react-icons/fa";

export default function About() {
  const features = [
    {
      icon: FaTag,
      title: "Best Prices & Offers",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      icon: FaHandshake,
      title: "Wide Assortment",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      icon: FaTruck,
      title: "Free Delivery",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      icon: FaUndo,
      title: "Easy Returns",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      icon: FaBox,
      title: "100% Satisfaction",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
    {
      icon: FaGift,
      title: "Great Daily Deal",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
    },
  ];

  const stats = [
    { number: "12+", label: "Glorious years" },
    { number: "36+", label: "Happy clients" },
    { number: "57+", label: "Projects complete" },
    { number: "24+", label: "Team advisor" },
    { number: "26+", label: "Products Sale" },
  ];

  return (
    <>
      {/* <Navbar /> */}

      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-8 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Section */}
            <div className="order-2 lg:order-1">
              <div className="w-full aspect-square lg:aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="/assets/about-1.png"
                  alt="About us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#253d4e] mb-6">
                Welcome to Nest
              </h2>

              <div className="space-y-4 text-gray-500 text-base lg:text-lg leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
                <p>
                  Ius ferri velit sanctus cu, sed at soleat accusata...
                </p>
              </div>

              {/* Swiper Gallery */}
              <div className="mt-8">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 2000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={10}
                  breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 15 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                  }}
                  className="w-full h-48 md:h-56 lg:h-64"
                >
                  {["about-3", "about-4", "about-2", "about-4"].map((img, i) => (
                    <SwiperSlide key={i}>
                      <div className="w-full h-full rounded-lg overflow-hidden shadow-md">
                        <img
                          src={`/assets/${img}.png`}
                          alt={`Gallery ${i + 1}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
                What We Provide?
              </h2>
              <div className="flex justify-center mx-auto">
                <svg width="120" height="20" viewBox="0 0 120 20" className="text-teal-400">
                  <path
                    d="M10 10 Q20 5 30 10 T50 10 T70 10 T90 10 T110 10"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center group bg-white py-6 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-300">
                      <feature.icon className="w-8 h-8 text-teal-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs mx-auto">
                    {feature.description}
                  </p>
                  <button className="text-teal-600 text-sm font-medium hover:text-teal-700 transition-colors duration-200">
                    Read more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-15 mb-16">
              <div className="lg:col-span-6">
                <div className="relative h-64 lg:h-130 rounded-lg overflow-hidden">
                  <img
                    src="/assets/about-5.png"
                    alt="Workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="space-y-6">
                  <p className="text-gray-500 text-2xl font-bold capitalize tracking-wide">
                    Our performance
                  </p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 leading-tight">
                    Your Partner for e-commerce grocery solution
                  </h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      Ed ut perspiciatis unde omnis iste natus error sit...
                    </p>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit...
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who we are, etc. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { title: "Who we are", text: "Volutpat diam ut venenatis..." },
                { title: "Our history", text: "Nec dui nunc mattis enim..." },
                { title: "Our mission", text: "Donec ac odio orci ultrices..." },
              ].map((item, i) => (
                <div key={i} className="text-center md:text-left">
                  <h3 className="text-xl font-semibold text-slate-700 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="relative rounded-2xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src="/images/team-meeting.jpg"
                  alt="Team background"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-800 bg-opacity-75"></div>
              </div>
              <div className="relative z-10 py-16 px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center text-white">
                  {stats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-4xl lg:text-5xl font-bold">{stat.number}</div>
                      <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
