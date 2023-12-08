import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ children, className }) => {
  return (
    <div>
      <NavBar />
      <div
        className={`w-full h-full inline-block z-0 bg-light p-20 lg:p-32 ${className}`}
      >
        {children}
        
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
