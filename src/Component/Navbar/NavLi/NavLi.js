import React from "react";
import { NavLink } from "react-router-dom";

const NavLi = ({ text }) => {
  return (
    <li>
      <NavLink to="#">{text}</NavLink>
    </li>
  );
};

export default NavLi;
