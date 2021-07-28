import React, { useState, useEffect, Fragment } from 'react'
import PokemonDetails from "../Pokemon";
import PokemonCard from '../../Components/PokemonCard';
import nextArrow from "../../images/next_arrow.png";
import previousArrow from "../../images/previous_arrow.png";
import './Pokedex.scss';
import { useHistory } from 'react-router-dom';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/';

const Pokedex = () => {
  const initialPokemon = 0;
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [pokemon, setPokemon] = useState([]);
  const limit = 12;
  const [endpoint, setEndpoint] = useState(`${POKEAPI_URL}pokemon?limit=${limit}&offset=${initialPokemon}/`);

  const history = useHistory();

  const handlePreviousPage = () => {
    setEndpoint(previousPage);
  }

  const handleNextPage = () => {
    setEndpoint(nextPage);
  }

  const onClick = (pokemonNumber) => {
    history.push(`/pokemon/${pokemonNumber}`);
    console.log(pokemonNumber);
  }

  useEffect(() => {
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
    <div className="section-pokedex">
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
      <section className="pokedex">
        {
          pokemon && pokemon.map((p, index) => {
            const propsToSend = {
              name: p.name,
              url: p.url,
              onClick: onClick
            }

            return (
              <div key={index} className="pokedex__pokemon">
                <PokemonCard {...propsToSend}/>
              </div>
            );
          })
        }
      </section>
    </div>
  );
}

export default Pokedex;
