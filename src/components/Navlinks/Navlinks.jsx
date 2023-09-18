import React from "react";

const Navlinks = () => {
  const links = [
    {name: "About Us", id: 1},
    {
      name: "Classes",
      id: 2,
      submenu: true,
      sublink: [{Head: "Our Classes"}, {Head: "Class Details"}],
    },
    {name: "Pages", id: 3},
    {name: "Blog", id: 4},
    {name: "Contact Us", id: 5},
  ];
  return (
    <>
      {links.map((link) => (
        <div key={link.id}>
          <div className="px-3 text-left md:cursor-pointer">
            <h1 className="py-7">{link.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
