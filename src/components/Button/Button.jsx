import React from "react";
import {FaArrowRight} from "react-icons/fa";

const Button = ({buttonName}) => {
  return (
    <>
      <button className=" text-lg font-medium text-amber-400 border-2 border-teal-400 px-16 py-3 rounded-full hover:text-white hover:text-center group relative flex items-center text-center overflow-hidden indent-0">
        <span className="absolute left-0 w-full h-0 transition-all bg-zinc-600 opacity-100 group-hover:h-full group-hover:top-0 duration-400 ease-in"></span>
        <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease-in">
          <FaArrowRight />
        </span>
        <span className="relative right-6 flex items-center justify-center  w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-2 ease-in">
          {buttonName}
        </span>
      </button>
    </>
  );
};

export default Button;
