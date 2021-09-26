import React from "react";
import Footer from "../Footer/Footer";
import MainBody from "../main-body/MainBody";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <MainBody />
      <Footer />
    </div>
  );
};

export default Home;
