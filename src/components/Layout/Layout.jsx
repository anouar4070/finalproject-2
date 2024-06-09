import React from "react";
import Style from "./Layout.module.css";

import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto my-6 py-10">
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
};

export default Layout;
