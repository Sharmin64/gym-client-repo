import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
  const bgImage = {
    backgroundImage: 'url("../../assets/banner/dumble-man.png")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="max-w-screen">
      <Navbar />
      <div style={{ bgImage }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
