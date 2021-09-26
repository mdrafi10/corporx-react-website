import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

const TeamCard = ({ img, name }) => {
  return (
    <div className="single-card1">
      <div className="single-card-img">
        <img src={img} alt="tem-img" />
      </div>
      <h1>{name}</h1>
      <h2>Developer</h2>
      <div className="card-icon">
        <FacebookIcon />
        <TwitterIcon />
        <YouTubeIcon />
        <CatchingPokemonIcon />
      </div>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  );
};

export default TeamCard;
