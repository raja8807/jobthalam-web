import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";

const Layout = ({ children, currentUser,supabase }) => {
  return (
    <div>
      <Header currentUser={currentUser} supabase={supabase}/>
      {children}
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
