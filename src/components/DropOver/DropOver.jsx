import React from "react";
import {FaSortDown} from "react-icons/fa";

const DropOver = () => {
  return (
    <button className="relative flex justify-center items-center bg-gray-600 border focus:outline-none shadow text-white rounded focus:ring ring-gray-300 group">
      <p className="px-4">Dropdown</p>
      <span className="border-l p-2 hover:bg-gray-100">
        <FaSortDown />
      </span>
      <div className="absolute hidden group-focus:block top-full min-w-full w-max bg-gray-500 shadow-md mt-2 rounded transition">
        <ul className="text-left border rounded duration-300 ease-in-out group-hover:top-0">
          <li className="px-4 py-1 hover:bg-gray-600 border-b">menu list 1</li>
          <li className="px-4 py-1 hover:bg-gray-600 border-b">menu list 1</li>
          <li className="px-4 py-1 hover:bg-gray-600 border-b">menu list 1</li>
          <li className="px-4 py-1 hover:bg-gray-600 border-b">menu list 1</li>
          <li className="px-4 py-1 hover:bg-gray-600">menu list 1</li>
        </ul>
      </div>
    </button>
  );
};

export default DropOver;
