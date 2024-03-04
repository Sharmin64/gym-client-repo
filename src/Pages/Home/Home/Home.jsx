import React from "react";
import Banner from "../../../components/Banner/Banner";
import GymCard from "../../../components/GymCard/GymCard";
import ExerciseDetails from "../../../components/ExerciseDetail/ExerciseDetails";
//import { FcAdvance } from "react-icons/fc";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full">
        <Banner />
      </div>
      <ExerciseDetails />
      <GymCard />
    </>
  );
};

export default Home;
