import React from "react";
import BackGroundImg from "../BackGroundImg";
import Pokepage from "../../pages/Pokedex";
import './App.css';

const App = () => {
  return (
    <section className="main-section section" role="main">
      {/* <div className="section__background">
        <BackGroundImg />
      </div> */}
      <div className="section-pokedex">
        <Pokepage />
      </div>
    </section>
  );
}

export default App;
