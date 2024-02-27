import React from "react";
import { Link } from "react-router-dom";

const Navlinks = () => {
  //const links = [
  //  {name: "About Us", id: 1,page:<About/>},
  //  {
  //    name: "Classes",
  //    id: 2,
  //    submenu: true,
  //    sublink: [{Head: "Our Classes"}, {Head: "Class Details"}],
  //  },
  //  {name: "Pages", id: 3},
  //  {name: "Blog", id: 4},
  //  {name: "Contact Us", id: 5},
  //];
  return (
    <>
      <div className="container mx-auto">
        <ul className="flex justify-center space-x-6 text-blue-500  font-semibold">
          <li className="relative group ">
            <Link to="/fitness">Fitness</Link>
            <ul className="absolute hidden mt-2 space-y-2 bg-white text-blue-500 border border-gray-300 rounded-lg shadow-lg group-hover:block hover:translate-x-2 cursor-pointer transition-all duration-150 group">
              <li className=" hover:scale-x-100">
                <Link to="/">Submenu Item 1</Link>
              </li>
              <li className=" hover:scale-x-100 ">
                <Link to="/">Submenu Item 2</Link>
              </li>
              <li className=" hover:scale-x-100">
                <Link to="/">Submenu Item 3</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link to="/about">About</Link>
            <ul className="absolute hidden mt-2 space-y-2 bg-white text-blue-500 border border-gray-300 rounded-lg shadow-lg group-hover:block">
              <li>
                <Link to="/">Submenu Item 1</Link>
              </li>
              <li>
                <Link to="/">Submenu Item 2</Link>
              </li>
              <li>
                <Link to="/">Submenu Item 3</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link to="/services">Services</Link>
            <ul className="absolute hidden mt-2 space-y-2 bg-white text-blue-500 border border-gray-300 rounded-lg shadow-lg group-hover:block">
              <li>
                <Link to="/">Submenu Item 1</Link>
              </li>
              <li>
                <Link to="/">Submenu Item 2</Link>
              </li>
              <li>
                <Link to="/">Submenu Item 3</Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <Link to="/contact">Contact</Link>
            <ul className="absolute hidden mt-2 space-y-2 bg-white text-blue-500 border border-gray-300 rounded-lg shadow-lg group-hover:block">
              <li>
                <Link to="/">Submenu Item 1</Link>
              </li>
              <li>
                <Link to="/">Submenu Item 2</Link>
              </li>
              <li>
                <Link to="/">Submenu Item 3</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      {/*{links.map((link) => (
        <div key={link.id}>
          <div className="px-3 text-left md:cursor-pointer">
            <h1 className="py-7">{link.name}</h1>
          </div>
        </div>
      ))}*/}
    </>
  );
};

export default Navlinks;
