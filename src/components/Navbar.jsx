/* eslint-disable no-unused-vars */
import React from "react";
import { NavData } from "./NavData";
import logo from "../assets/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    <nav className="md:flex justify-between items-center py-6">
      <div>
        <img src={logo} alt="organick-logo" className="w-max" />
      </div>
      <div className="md:flex gap-4 items-center font-medium">
        {NavData.map((element) => {
          return (
            <NavLink to={element.link} key={element.id}>
              {element.name}
            </NavLink>
          );
        })}
      </div>
      <div className="md:flex gap-4 items-center font-medium">
        <div className="bg-secondary p-2 rounded-full">
          <SearchIcon className="text-pastel" />
        </div>
        <div className="flex items-center gap-1 ">
          <div className="bg-primary p-2 rounded-full">
            <ShoppingCartOutlinedIcon className="text-pastel" />
          </div>
          <Link>Cart(0)</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
