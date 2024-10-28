import React from 'react'
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SearchIcon from "@mui/icons-material/Search";
const reserve = () => {
  return (
    <>
    <NavLink to="/"><img src={assets.logo} to="/"  className=" w-36" /></NavLink>
    <ul className="sm:flex gap-5 text-sm hidden text-gray-700  text-lg">
      <NavLink to="/" className=" mr-4 flex flex-col items-center gap-1">
        <p style = {{'fontSize':'large'}}>Our Books</p>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700  hidden" />
      </NavLink>

      <NavLink to="/aboutus" className=" mr-4 flex flex-col items-center gap-1">
        <p style = {{'fontSize':'large'}}> About Us</p>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
      </NavLink>

      <NavLink
        to="/contacts"
        className=" mr-4 flex flex-col items-center gap-1"
      >
        <p style = {{'fontSize':'large'}}>Contacts</p>
        <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
      </NavLink>
    </ul>
    <div className="flex items-center gap-6">
      <SearchIcon className="Muisearch w-5" />
      <div className="group relative">
        <AccountBoxIcon className="Muisearch w-5" />
        <div className=" hidden group-hover:block  absolute dropdown-menu right-0 pt-4">
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-grey-500 rounded">
            <p className="cursor-pointer hover:text-black">My profile</p>
            <p className="cursor-pointer hover:text-black">Log Out</p>
            <p className="cursor-pointer hover:text-black">Log Out</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default reserve