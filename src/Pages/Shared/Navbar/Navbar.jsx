import React from "react";
//import DropOver from '../../../components/DropOver/DropOver';
import Button from "../../../components/Button/Button";
import logoImage from "../../../assets/logo/logoA.png";
import {Link} from "react-router-dom";
import Navlinks from "../../../components/Navlinks/Navlinks";

const Navbar = () => {
  //const navParts = (
  //  <>
  //    <li>Details</li>
  //    <li>Home</li>
  //    <li>Nome</li>
  //    <li>Blog</li>
  //  </>
  //)
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div>
          <img
            className="w-20 rounded-full md:cursor-pointer"
            src={logoImage}
            alt="logo"
          />
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppings]">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <Navlinks />
        </ul>
        <Button buttonName="Join_Now" />
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
