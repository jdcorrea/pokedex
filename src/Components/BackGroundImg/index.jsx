import React from "react";
import pokemonBg from '../../images/pokemon_bg.jpg';
import './BackGroundImg.scss';

const BackGroundImg = () => {
  return (
    <img className="background-img__img" src={pokemonBg} alt="pokemons in background" />
  );
}

export default BackGroundImg;