import React from "react";
import NotFoundImage from "../../images/404_pokemon.png";
import './NotFound.scss';

const NotFound = () => {
  return (
    <section className="notfound-container" aria-label="page not found" role="main">
      <h1>we are sorry!!!</h1>
      <img 
        src={NotFoundImage} 
        alt="page doesn't exist." 
        className="notfound-container__image" />
    </section>
  )
}

export default NotFound;