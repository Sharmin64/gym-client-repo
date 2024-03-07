import React from "react";
import imgRoute from "../../assets/body/Untitled design.png";
import imgeB from "../../assets/body/chast-image.png";
import imgC from "../../assets/body/home-5-team-img-2.png";
import backSide from "../../assets/body/home-5-team-img-4.png";
import bothSide from "../../assets/body/home-team-img-3.png";

const ExerciseDetails = () => {
  return (
    <div className="relative mt-10 mb-8">
      <h1 className="absolute -top-28 z-10  uppercase  text-[8em] font-bold pl-9">
        Routines
      </h1>
      <div className="flex h-[70vh] bg-gray-100 pt-44 pl-6">
        <div className="w-[55vw] ">
          <img src={imgRoute} alt="image" className="rounded-full" />
          <h3 className="text-center text-xl text-slate-900 font-bold uppercase pr-5 pt-8 ">
            back
          </h3>
        </div>
        <div className="w-[50%] h-[10%]">
          <img src={imgC} alt="image" className="rounded-full" />
          <h3 className="text-center text-xl text-slate-900 font-bold uppercase pr-5 pt-8 ">
            Shoulders
          </h3>
        </div>
        <div className="w-[50%] h-[10%]">
          <img src={imgeB} alt="image" className="rounded-full" />
          <h3 className="text-center text-xl text-slate-900 font-bold uppercase pr-5 pt-8 ">
            Abs
          </h3>
        </div>
        <div className="w-[50%] h-[10%]">
          <img src={backSide} alt="image" className="rounded-full" />
          <h3 className="text-center text-xl text-slate-900 font-bold uppercase pr-5 pt-8 ">
            Arms
          </h3>
        </div>
        <div className="w-[50%] h-[10%]">
          <img src={bothSide} alt="image" className="rounded-full" />
          <h3 className="text-center text-xl text-slate-900 font-bold uppercase pr-5 pt-8 ">
            legs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetails;
