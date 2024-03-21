import React from "react";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar/NavBar";

export const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet /> 
      <Footer />
    </>
  );
};
