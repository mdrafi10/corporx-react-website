import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SUbli from "./SubLI/SUbli";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { pages, service } from "../../../../Data/NavData/NavData";

const DropDownLI = ({ text }) => {
  const [navToggele, setnavToggele] = useState("");
  const handleToggel = () => {
    if (navToggele === "") {
      setnavToggele("toggel-button");
    } else if (navToggele === "toggel-button") {
      setnavToggele("");
    }
  };
  return (
    <li className="sub-menu-head" onClick={handleToggel}>
      <NavLink to="#">
        {text}
        <KeyboardArrowDownIcon className="arrow" />
      </NavLink>
      <SUbli
        pages={text === "pages" ? pages : service}
        navToggele={navToggele}
        page
      />
    </li>
  );
};

export default DropDownLI;
