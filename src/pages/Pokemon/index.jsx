import React, { useState, useEffect } from 'react';
import TypeContainer from "../../Components/TypeContainer";
import PokemonNotFound from "../../images/404_pokemon.png";
import './Pokemon.scss';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';

const Pokemon = (props) => {
  const { id } = props.match.params;

  const [endpoint, setEndpoint] = useState(`${POKEAPI_URL}${id}`);
  //BasicInfo: height, number, name, weight and others (check APi for more info)...
  const [basicInfo, setBasicInfo] = useState([]);
  const [types, setTypes] = useState([]);
  //Stats: hp, attack, defense, special attack, special defense, speed
  const [stats, setStats] = useState([]);
  const [image, setImage] = useState(PokemonNotFound);

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setBasicInfo(data || []);
        setTypes((data && data.types) || []);
        setStats((data && data.stats) || []);
        setImage((data && data.sprites.front_default) || PokemonNotFound);
      });
  }, [endpoint, basicInfo, types, stats, image]);

  return(
    <div>
      <ul>
        {
          types.map((detail, id) => {
            return <li key="id">{detail.type.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default Pokemon;