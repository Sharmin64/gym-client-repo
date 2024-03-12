import React from "react";

const ServiceBox = () => {
  return (
    <div className="container mt-10 mx-auto">
      <div className="text-center bg-black h-[300px] w-[900px] mx-auto flex items-center justify-center relative z-10">
        <h1 className="head_one font-extrabold text-[14em] stroke-white stroke-1  uppercase">
          See
        </h1>
        <h2 className="head_two text-white flex m-0 text-7xl translate-x-32 translate-y-10 left-[10%]  absolute ">
          <sup className="text-[3em] font-bold top-[30%]">+</sup>Our Services
        </h2>
      </div>
    </div>
  );
};

export default ServiceBox;
