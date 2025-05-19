import React from "react";
import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import {
  MapPin,
  ChevronDown,
  User,
  ShoppingCart,
  Heart,
  RefreshCw,
  Menu,
  X,
  Home,
} from "lucide-react";
import Menulist from "./Menulist";

export default function Navbar() {
  const [openCategory, setOpenCategory] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLocation, setSelectedLocation] = useState("Your Location");

  const categories = [
    "Milks and Diaries",
    "Clothing & Beauty",
    "Pet food & Toys",
    "Fast Food",
    "Vegetables",
    "IceCream",
  ];

  const locations = ["Alabama", "Alaska", "Arizona", "Delaware", "Florida"];

  const filteredCategories = categories.filter((cat) =>
    cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(filter.toLowerCase())
  );

  const navItems = [
    { icon: <RefreshCw size={24} />, label: "Compare", count: 0 },
    { icon: <Heart size={24} />, label: "Wishlist", count: 3 },
    { icon: <ShoppingCart size={24} />, label: "Cart", count: 0 },
    { icon: <User size={24} />, label: "Account" },
  ];

  // Close mobile menu when screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden overflow-y-auto`}
      >
        <div className="p-6 border-b flex justify-between items-center">
          <img src="assets/logo.svg" alt="logo" className="h-10" />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="p-4">
          <div className="mb-6">
            <a
              href="#"
              className="flex items-center gap-3 p-3 hover:bg-green-50 rounded-md"
            >
              <Home size={24} className="text-gray-700" />
              <span className="text-lg">Home</span>
            </a>
          </div>

          <div className="border-t pt-4 mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2 px-3">
              NAVIGATION
            </h3>
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-between p-3 hover:bg-green-50 rounded-md"
              >
                <div className="flex items-center gap-3">
                  <div className="text-gray-700">{item.icon}</div>
                  <span className="text-lg">{item.label}</span>
                </div>
                {item.count > 0 && (
                  <span className="bg-[#a3d8bf] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {item.count}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium text-gray-500 mb-2 px-3">
              LOCATION
            </h3>
            <div
              onClick={() => setOpenLocation(!openLocation)}
              className="flex items-center justify-between p-3 hover:bg-green-50 rounded-md cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <MapPin size={24} className="text-green-600" />
                <span className="text-lg">{selectedLocation}</span>
              </div>
              <ChevronDown
                size={20}
                className={`text-gray-500 transition-transform duration-200 ${
                  openLocation ? "rotate-180" : ""
                }`}
              />
            </div>

            {openLocation && (
              <div className="mt-2 bg-white border border-gray-200 rounded-md shadow-md mx-3">
                <input
                  type="text"
                  placeholder="Search location..."
                  className="w-full px-3 py-2 border-b border-gray-200 outline-none text-lg"
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                />
                <ul className="max-h-60 overflow-y-auto">
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map((loc, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelectedLocation(loc);
                          setOpenLocation(false);
                          setFilter("");
                        }}
                        className={`px-4 py-2 text-lg hover:bg-green-100 cursor-pointer ${
                          loc === selectedLocation ? "bg-gray-100" : ""
                        }`}
                      >
                        {loc}
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-500">
                      No locations found
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar - Modified for responsiveness */}
      <div className="nav_container m-15! flex flex-wrap justify-between lg:justify-around items-center p-4 lg:p-0">
        {/* Logo - Always visible, positioned on the left for mobile */}
        <div className="nav_logo order-1">
          <img src="assets/logo.svg" alt="logo" className="h-10" />
        </div>

        {/* Mobile Menu Button - Only visible on mobile and tablet, positioned on the right */}
        <div className="flex items-center lg:hidden order-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md hover:bg-gray-100"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        {/* Category Search Bar - Hidden on mobile, visible on medium and large screens */}
        <div className="cat_search  hidden md:hidden lg:flex order-3 lg:order-2 gap-2 items-center border border-green-300 rounded-md px-4 lg:px-6 py-3 lg:py-4 w-full md:w-auto md:max-w-xl shadow-sm mt-4 md:mt-0">
          <div className="relative w-100 h-10 ">
            <button
              onClick={() => {
                setOpenCategory((prev) => !prev);
                setOpenLocation(false);
              }}
              className="w-max h-9 flex justify-around items-center  lg:pl-6 pr-2 text-lg lg:text-xl text-gray-700 cursor-pointer"
            >
              {selectedCategory}
              <ChevronDown className="w-4 h-4" />
            </button>

            {openCategory && (
              <div className="absolute top-12 left-0 w-full  bg-white shadow rounded z-10">
                <input
                  type="text"
                  placeholder="Search categories..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-2 py-1 text-lg border-b outline-none"
                />
                <ul className="max-h-60 overflow-y-auto text-lg">
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((cat, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setOpenCategory(false);
                          setSearchTerm("");
                        }}
                        className="px-3 py-2 hover:bg-green-100 cursor-pointer"
                      >
                        {cat}
                      </li>
                    ))
                  ) : (
                    <li className="px-3 py-2 text-gray-500">
                      No categories found
                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Separator */}
          <div className="input_part h-5 w-px bg-gray-300" />

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search for items"
            className="flex-1 outline-none text-sm text-gray-600 placeholder-gray-400 px-3 py-2"
          />

          <button>
            <CiSearch className="text-2xl text-gray-600" />
          </button>
        </div>

        {/* Location Dropdown - Only visible on large screens */}
        <div className="relative hidden lg:hidden xl:inline-block text-left w-60 order-3">
          <div
            onClick={() => {
              setOpenLocation((prev) => !prev);
              setOpenCategory(false);
            }}
            className="flex gap-1 items-center justify-around px-6 py-2 border border-green-300 rounded-md cursor-pointer text-lg text-gray-700 bg-white w-full"
          >
            <div className="flex items-center space-x-2 p-4 h-10">
              <MapPin size={20} className="text-green-600 p-2" />
              <span>{selectedLocation}</span>
            </div>
            <ChevronDown size={20} className="text-gray-500 px-2" />
          </div>

          {openLocation && (
            <div className="absolute z-20 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
              <input
                type="text"
                placeholder="Search location..."
                className="w-full px-3 py-2 border-b border-gray-200 outline-none text-lg"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
              <ul>
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((loc, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        setSelectedLocation(loc);
                        setOpenLocation(false);
                        setFilter("");
                      }}
                      className={`px-4 py-2 text-lg hover:bg-green-100 cursor-pointer ${
                        loc === selectedLocation ? "bg-gray-100" : ""
                      }`}
                    >
                      {loc}
                    </li>
                  ))
                ) : (
                  <li className="px-4 py-2 text-gray-500">
                    No locations found
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* Nav Icons - Only visible on large screens */}
        {/* Nav Icons - Only visible on large screens */}
        <div className="hidden md:hidden lg:hidden xl:flex gap-7 space-x-8 items-center order-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center text-gray-700 text-sm cursor-pointer"
            >
              {/* Badge if any */}
              {item.label !== "Account" && item.count !== null && (
                <span className="absolute -top-1 -right-2 bg-[#a3d8bf] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full z-10">
                  {item.count}
                </span>
              )}

              {/* Icon */}
              <div className="mb-1">{item.icon}</div>

              {/* Label */}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <hr></hr>
      <Menulist />
    </>
  );
}
