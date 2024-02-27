import React from "react";
import Banner from "../../../components/Banner/Banner";
import GymCard from "../../../components/GymCard/GymCard";
//import { FcAdvance } from "react-icons/fc";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Banner />
      </div>
      <GymCard />
    </>
  );
};

export default Home;
