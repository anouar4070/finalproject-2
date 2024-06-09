import React from "react";
import Style from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img src={logo} alt="fresh market logo" />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <ul className="flex space-x-4">

            <li>
                <Link className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/cart">
                  Cart
                </Link>
              </li>
              <li>
                <Link className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/products">
                  Products
                </Link>
              </li>
              <li>
                <Link  className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/categories">
                  Categories
                </Link>
              </li>
              <li>
                <Link className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/brands">
                  Brands
                </Link>
              </li>
              <li>
                <Link className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/blog">
                  Blog
                </Link>
              </li>

             
            </ul>
          </div>
          </div>
        </nav>          
    </>
  );
}
