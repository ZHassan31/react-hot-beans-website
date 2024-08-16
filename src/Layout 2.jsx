import React from "react";
import Navbar from "./Components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
