import React from "react";

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
            <a href="/">Fitness</a>
            <ul className="absolute hidden mt-2 space-y-2 bg-white text-blue-500 border border-gray-300 rounded-lg shadow-lg group-hover:block hover:translate-x-2 cursor-pointer">
              <li className=" hover:scale-x-100">
                <a href="/">Submenu Item 1</a>
              </li>
              <li className=" hover:scale-x-100">
                <a href="/">Submenu Item 2</a>
              </li>
              <li className=" hover:scale-x-100">
                <a href="/">Submenu Item 3</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a href="/about">About</a>
            <ul className="absolute hidden mt-2 space-y-2 bg-white text-blue-500 border border-gray-300 rounded-lg shadow-lg group-hover:block">
              <li>
                <a href="/">Submenu Item 1</a>
              </li>
              <li>
                <a href="/">Submenu Item 2</a>
              </li>
              <li>
                <a href="/">Submenu Item 3</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a href="/services">Services</a>
            <ul className="absolute hidden mt-2 space-y-2 bg-white text-blue-500 border border-gray-300 rounded-lg shadow-lg group-hover:block">
              <li>
                <a href="/">Submenu Item 1</a>
              </li>
              <li>
                <a href="/">Submenu Item 2</a>
              </li>
              <li>
                <a href="/">Submenu Item 3</a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a href="/contact">Contact</a>
            <ul className="absolute hidden mt-2 space-y-2 bg-white text-blue-500 border border-gray-300 rounded-lg shadow-lg group-hover:block">
              <li>
                <a href="/">Submenu Item 1</a>
              </li>
              <li>
                <a href="/">Submenu Item 2</a>
              </li>
              <li>
                <a href="/">Submenu Item 3</a>
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
