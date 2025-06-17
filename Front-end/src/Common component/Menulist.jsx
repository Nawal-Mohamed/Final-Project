import React from "react";
import { Link } from "react-router-dom";
import { FaHeadphonesAlt } from "react-icons/fa";

export default function Menulist() {
  return (
    <>
      <div className="menulist-cont flex justify-between p-2 sm:mx-1 xl:mx-25">
        <ul className="gap-3 sm:gap-7 flex text-xl items-center sm:text-lg">
          <li>
            <Link
              to="/Home"
              className="hover:text-green-500 duration-400 ease-in-out font-semibold"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-green-500 duration-400 ease-in-out font-semibold"
            >
              About
            </Link>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-green-500 duration-400 ease-in-out font-semibold"
            >
              Shop
            </a>
          </li>

          <li>
            <a
              href="#"
              className="hover:text-green-500 duration-400 ease-in-out font-semibold"
            >
              Contact
            </a>
          </li>

          <li>
            <Link
              to="/login"
              className="hover:text-green-500 duration-400 ease-in-out font-semibold"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/Register"
              className="hover:text-green-500 duration-400 ease-in-out font-semibold"
            >
              Register
            </Link>
          </li>
        </ul>

        <div className="menulist-icon gap-3 hidden md:block">
          <FaHeadphonesAlt className="text-3xl" />
          <div className="menulist-icon-data">
            <h3 className="text-green-600 font-bold">1900-888</h3>
            <p className="font-bold">24/7 Support Center</p>
          </div>
        </div>
      </div>
      <hr></hr>
    </>
  );
}
