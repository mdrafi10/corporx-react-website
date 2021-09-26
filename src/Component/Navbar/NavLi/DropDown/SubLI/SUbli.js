import React from "react";
import { NavLink } from "react-router-dom";

const SUbli = ({ pages, navToggele, page }) => {
  return (
    <ul className={`sub-menu  ${page && navToggele} `}>
      {pages.map((menu) => {
        return (
          <li key={menu.id}>
            <NavLink to="#">{menu.text}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default SUbli;
