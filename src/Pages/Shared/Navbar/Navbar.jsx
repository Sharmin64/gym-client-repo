import React, { useState } from "react";
//import DropOver from '../../../components/DropOver/DropOver';
import Button from "../../../components/Button/Button";
import logoImage from "../../../assets/logo/logoA.png";
import { Link } from "react-router-dom";
import Navlinks from "../../../components/Navlinks/Navlinks";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  //const navParts = (
  //  <>
  //    <li>Details</li>
  //    <li>Home</li>
  //    <li>Nome</li>
  //    <li>Blog</li>
  //  </>
  //)
  return (
    <nav className="bg-white sticky top-0 z-50 md:bg-base-100">
      <div className="flex items-center font-medium justify-around ">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img
            className="w-20 rounded-full md:cursor-pointer"
            src={logoImage}
            alt="logo"
          />
          <div className="text-4xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppings]">
          <li>
            <Link to="/" className="py-7 px-3 block">
              Home
            </Link>
          </li>
          <Navlinks />
        </ul>
        <div className="md:block hidden">
          <Button buttonName="Join_Now" />
        </div>
        {/* mobile nav */}
        <ul
          className={`md:items-center pb-0 md:pb-12 md:static md:z-auto z-[-1] left-0 md:hidden bg-white absolute w-full h-full bottom-10 py-24 md:w-auto md:pl-0  pl-9 duration-500  ${
            open ? "left-0" : "left-[-50%]"
          }`}
        >
          <li className="py-12 w-36 px-3 inline-block">
            <Link to="/">Home</Link>
          </li>
          <Navlinks />
          <div className="py-12">
            <Button buttonName="Join_Now" />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /*<div className="navbar bg-base-100">
<div className="navbar-start">
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 ml-4 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <DropOver/>
    </ul>
  </div>
  <a className="btn btn-ghost normal-case uppercase text-xl">CrossFit</a>
</div>
<div className="navbar-center hidden lg:flex">
  <ul className="menu menu-horizontal px-1">
        <DropOver/>
  </ul>
</div>
<div className="navbar-end">
 <Button buttonName='Login'/>
</div>
</div>*/
}

//?  <div className="container mx-auto">
