import React, { useState, useEffect, Fragment } from 'react'
// import PokemonCard from '../PokemonCard';
import nextArrow from "../../images/next_arrow.png";
import previousArrow from "../../images/previous_arrow.png";
import './Pokedex.scss';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/';

const Pokedex = () => {
  const defaultGridCssTemplate = 'pokedex__pokemon-';
  const initialPokemon = 0;
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [pokemon, setPokemon] = useState([]);
  const limit = 9;
  const [endpoint, setEndpoint] = useState(`${POKEAPI_URL}pokemon?limit=${limit}&offset=${initialPokemon}/`);

  const handlePreviousPage = () => {
    setEndpoint(previousPage);
  }

  const handleNextPage = () => {
    setEndpoint(nextPage);
  }

  useEffect(() => {
    console.log("@endP: ", endpoint);
    console.log("@endNext: ", nextPage);
    console.log("@endPrevious: ", previousPage);
    setEndpoint(endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setPreviousPage((data && data.previous) || null);
        setNextPage((data && data.next) || null);
        setPokemon((data && data.results) || []);
      })
  }, [endpoint, previousPage, nextPage]);

  return (
    <Fragment>
      <section className="pokedex">
        {
          pokemon && pokemon.map((p, index) => {
            return (
              <div key={index} className={`pokedex__pokemon ${defaultGridCssTemplate}${index}`}>

                <p>{p.name}</p>
                {/* <PokemonCard
                  id={(index + 1)}
                  name={p.name}
                  statsUrl={p.url}
                /> */}
              </div>
            );
          })
        }
      </section>
      <section className="paging">
        <div className="paging__previous">
          <img 
            className="paging__icon" 
            src={previousArrow} 
            alt="previous arrow" 
            onClick={handlePreviousPage}
          />
        </div>
        <div className="paging__next">
          <img 
            className="paging__icon" 
            src={nextArrow} 
            alt="previous arrow" 
            onClick={handleNextPage}
          />
        </div>        
      </section>
    </Fragment>
  );
}

export default Pokedex;