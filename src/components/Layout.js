import React from "react";
import NavBar from "./NavBar";

const Layout = ({ children, className }) => {
  return (
    <div>
      <NavBar />
      <div
        className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}
      >
        {children}
        
      </div>
      <footer>test footer</footer>
    </div>
  );
};

export default Layout;
