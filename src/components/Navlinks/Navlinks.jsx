import React from "react";

const Navlinks = () => {
  const links = [
    {name: "About Us"},
    {name: "Classes"},
    {name: "Pages"},
    {name: "Blog"},
    {name: "Contact Us"},
  ];
  return (
    <>
      {links.map((link) => (
        <div key={link.id}>
          <div>
            <h1>{link.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default Navlinks;
