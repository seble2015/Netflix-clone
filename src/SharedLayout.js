import React from "react";
import MyNav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function SharedLayout() {
  return (
    <div>
      <MyNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SharedLayout;
