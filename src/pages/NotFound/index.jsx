import React from "react";
import NotFoundImage from "../../images/404_pokemon.png";
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className="notfound-container">
      <img 
        src={NotFoundImage} 
        alt="page doesn't exist." 
        className="notfound-container__image" />
    </section>
  )
}

export default NotFound;