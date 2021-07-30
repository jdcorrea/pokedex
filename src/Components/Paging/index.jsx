import React from "react";
import { useHistory } from 'react-router-dom';
import nextArrow from "../../images/next_arrow.png";
import previousArrow from "../../images/previous_arrow.png";
import pokeball from "../../images/pokeball.png";
import './Paging.scss';

const Paging = ({ onClickNext, onClickPrevious }) => {
  const history = useHistory();

  const goToPokedex = () => {
    history.push(`/`);
  }

  return (
    <section className="paging" aria-label="paging controls">
      <div className="paging__home" aria-label="back to pokedex">
        <img
          className="icon"
          src={pokeball}
          alt="go back to pokedex"
          onClick={goToPokedex}
        />
        <p className="paging__info">
        </p>
      </div>
      <div className="paging__previous">
        <div className="previous-container">
          <img
            className="icon"
            src={previousArrow}
            alt="previous arrow"
            onClick={onClickPrevious}
          />
        </div>
      </div>
      <div className="paging__next">
        <div className="next-container">
          <img
            className="icon"
            src={nextArrow}
            alt="next arrow"
            onClick={onClickNext}
          />
        </div>
      </div>
    </section>
  )
}

export default Paging;