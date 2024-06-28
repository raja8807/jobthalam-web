import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children, currentUser }) => {
  return (
    <div>
      <Header currentUser={currentUser} />
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
