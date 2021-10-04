import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import NavLi from "./NavLi/NavLi";
import DropDownLI from "./NavLi/DropDown/DropDownLI";

const Navbar = () => {
  const [show, setShow] = useState("");
  const [navbar, setNavbar] = useState(false);

  const nav = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    // console.log(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", nav);
    return () => {
      window.removeEventListener("scroll", nav);
    };
  }, []);
  return (
    <header>
      <nav className={navbar ? "navActive" : "navbar"}>
        <div className="container">
          <div className="d-flex justify-content-space navbar-header">
            <div className="nav_logo">
              <NavLink to="/">
                <img src="images/logo-img/logo-white.png" alt="logo" />
              </NavLink>
            </div>

            <div className="toggel-button">
              <DehazeIcon
                className="nav-toggel-button btn-disable"
                onClick={() => setShow("toggel-button")}
              />
            </div>

            <div className={`nav-menu active ${show}`}>
              <div className="toggel-logo d-flex justify-content-space unactive">
                <NavLink to="/">
                  <img src="images/logo-img/logo-color.png" alt="logo" />
                </NavLink>
                <ClearIcon
                  className="close"
                  onClick={() => setShow({ display: "none" })}
                />
              </div>

              <ul className="main-menu d-flex ">
                <NavLi text="home" />
                <NavLi text="About Us" />

                {/* Drop Down start */}
                <DropDownLI text="pages" />
                <DropDownLI text="service" />
                {/* Drop Down end */}

                <NavLi text="Project" />
                <NavLi text="Blog" />
                <NavLi text="contact us" />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
