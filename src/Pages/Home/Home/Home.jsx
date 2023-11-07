import React from "react";
import Banner from "../../../components/Banner/Banner";
import GymCard from "../../../components/GymCard/GymCard";
//import { FcAdvance } from "react-icons/fc";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <Banner />
      </div>
      <GymCard />
    </>
  );
};

export default Home;
