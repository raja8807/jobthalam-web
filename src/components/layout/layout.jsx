import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children, user, setUser }) => {
  return (
    <div>
      <Header user={user} setUser={setUser} />
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
