import React, { useState, useEffect } from 'react'
import PokemonCard from '../../Components/PokemonCard';
import Paging from "../../Components/Paging";
import './Pokedex.scss';
import { useHistory } from 'react-router-dom';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/';

const Pokedex = () => {
  const initialPokemon = 0;
  const limit = 12;
  const [previousPage, setPreviousPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [pokemon, setPokemon] = useState([]);
  const [endpoint, setEndpoint] = useState(`${POKEAPI_URL}pokemon?limit=${limit}&offset=${initialPokemon}/`);

  const history = useHistory();

  const goToPreviousPage = () => {
    setEndpoint(previousPage);
  }

  const goToNextPage = () => {
    setEndpoint(nextPage);
  }

  const goToPokemonDetails = (pokemonNumber) => {
    history.push(`/pokemon/${pokemonNumber}`);
  }

  async function loadEndpoint() {
    await fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setPreviousPage((data && data.previous) || null);
        setNextPage((data && data.next) || null);
        setPokemon((data && data.results) || []);
      });
  }

  useEffect(() => {
    setEndpoint(endpoint);
    loadEndpoint();
  }, [endpoint, previousPage, nextPage]);

  return (
    <div className="section-pokedex">
      <Paging onClickNext={goToNextPage} onClickPrevious={goToPreviousPage} />

      <section className="pokedex">
        {
          pokemon && pokemon.map((p, index) => {
            const propsToSend = {
              name: p.name,
              url: p.url,
              onClick: goToPokemonDetails
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
