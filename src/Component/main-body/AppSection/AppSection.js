import React from "react";
import "./AppSection.css";
import AppleIcon from "@mui/icons-material/Apple";
import AppStore from "./AppStore/AppStore";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";

const AppSection = () => {
  const style = {
    background: `url("images/download-bg-img/hero-bg11.jpg") `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center ",
    backgroundAttachment: "fixed",
  };
  return (
    <section className="app-section" style={style}>
      <div className="linear-gradient">
        <div className="container">
          <div className="app-container">
            <div className="app-content">
              <h1>Download Our Business Apps</h1>
              <p>
                Building your Apps helps attract more potential clients. Our
                integrated marketing team will promote enabled internal or work
                high-impact convergence.
              </p>
            </div>
            <div className="app-download d-flex">
              <AppStore
                icon={<AppleIcon />}
                text="Download on the"
                text1="App Store"
              />
              <AppStore
                icon={<PlayArrowIcon />}
                text="Download on the"
                text1="Google Play"
              />
              <AppStore
                icon={<LaptopWindowsIcon />}
                text="Download on the"
                text1="Windows"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
