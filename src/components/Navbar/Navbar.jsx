import React from "react";

import { NavLink } from "react-router-dom";
import logo from "../../assets/images/freshcart-logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-100 static lg:fixed top-0 right-0 left-0 text-center ">
        <div className="container mx-auto justify-between py-2 flex flex-col lg:flex-row items-center">

          <div className="flex flex-col lg:flex-row items-center">
            <img width={110} src={logo} alt="fresh cart logo" />

            <ul className="flex flex-col lg:flex-row items-center">
              <li className="py-2">
                <NavLink className="mx-2 text-lg text-slate-900" to="">
                  Home
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink className="mx-2 text-lg text-slate-900" to="cart">
                  Cart
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink className="mx-2 text-lg text-slate-900" to="products">
                  Products
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink className="mx-2 text-lg text-slate-900" to="brands">
                  Brands
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink
                  className="mx-2 text-lg text-slate-900"
                  to="categories"
                >
                  Categories
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-col lg:flex-row items-center">
              <li className="py-2">
                <NavLink className="mx-2 py-16 text-slate-900" to="login">
                  Login
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink className="mx-2 py-16 text-slate-900" to="register">
                  Register
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink className="mx-2 py-16 text-slate-900">Logout</NavLink>
              </li>

              <li className="py-2 flex items-center">
                <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-twitter"></i>
                <i className="fab mx-2 fa-instagram"></i>
                <i className="fab mx-2 fa-youtube"></i>
                <i className="fab mx-2 fa-tiktok"></i>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </>
  );
}
