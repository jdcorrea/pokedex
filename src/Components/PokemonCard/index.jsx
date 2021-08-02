import React, { useState, useEffect } from 'react';
import TypeContainer from "../TypeContainer";
import PokemonNotFound from "../../images/404_pokemon.png";
import './PokemonCard.scss';

const PokemonCard = ({ name, url, onClick}) => {
  const endpoint = `${url}`;
  const [pokemonImageUrl, setPokemonImageUrl] = useState('');
  const [pokemonNumber, setPokemonNumber] = useState('');
  const [pokemonTypes, setPokemonTypes] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setPokemonImageUrl((data && data.sprites.front_default) || PokemonNotFound);
        setPokemonNumber((data && data.id) || 9999);
        setPokemonTypes((data && data.types) || []);
      })
  }, [endpoint, pokemonImageUrl, pokemonNumber]);

  return (
    <article className="pokemon-card" aria-label="pokemon card">
      <figcaption className="pokemon-card__img">
        <img
          className="img"
          src={pokemonImageUrl}
          alt={`pokemon ${name}`}
          onClick={() => onClick(pokemonNumber)}
        />
      </figcaption>
      <div className="pokemon-card__details details">
        <p className="details__number">
          #{pokemonNumber}
        </p>
        <p className="details__name">
          {name}
        </p>
        <ul className="details__type-list list">
          {
            pokemonTypes.map((typeElement, id) => {
              const propsToSend = {
                typeName: typeElement.type.name
              }
              return <TypeContainer {...propsToSend} key={id}/>
            })
          }
        </ul>
      </div>
    </article>
  )
}

export default PokemonCard;