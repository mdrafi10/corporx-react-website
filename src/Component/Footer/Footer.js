import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import FooterSide from "./FooterSide/FooterSide";

const Footer = () => {
  const time = new Date();
  const year = time.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-top-head">
            <div className="corporx-logo-info">
              <img src="images/logo-img/logo-white.png" alt="logo" />
              <p>
                Interactively unleash interactive best practices before
                technically sound portals.
              </p>
              <div className="contact-logo">
                <div className="icon-logo face">
                  <FacebookIcon />
                </div>
                <div className="icon-logo twit">
                  <TwitterIcon />
                </div>
                <div className="icon-logo you">
                  <YouTubeIcon />
                </div>
                <div className="icon-logo insta">
                  <CatchingPokemonIcon />
                </div>
              </div>
            </div>

            <div className="corporx-buildup-company">
              <FooterSide
                title="Company"
                li1="About Us"
                li2="Carees"
                li3="Customers"
                li4="Community"
              />
              <FooterSide
                title="Resources"
                li1="Help"
                li2="Events"
                li3="Live sessions"
                li4="Open sources"
              />
              <FooterSide
                title="Support"
                li1="Help"
                li2="Teach Support"
                li3="Network Status"
                li4="Contact Support"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="bottom-container">
            <h2>
              Copyrights © <span className="year">{year}</span>. All rights
              reserved by <span className="theme">ThemeTags</span>
            </h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
