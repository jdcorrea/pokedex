import React from "react";
import nextArrow from "../../images/next_arrow.png";
import previousArrow from "../../images/previous_arrow.png";
import pokeball from "../../images/pokeball.png";
import './Paging.scss';

const Paging = ({ onClickNext, onClickPrevious }) => {
  return (
    <section className="paging">
      <img
        className="paging__icon"
        src={pokeball} alt="pokeball"
      />
      <div className="paging__previous">
        <img
          className="icon"
          src={previousArrow}
          alt="previous arrow"
          onClick={() => onClickPrevious()}
        />
      </div>
      <div className="paging__next">
        <img
          className="icon"
          src={nextArrow}
          alt="previous arrow"
          onClick={() => onClickNext()}
        />
      </div>
    </section>
  )
}

export default Paging;