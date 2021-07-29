import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import TypeContainer from "../../Components/TypeContainer";
import Paging from "../../Components/Paging";
import PokemonNotFound from "../../images/404_pokemon.png";
import './Pokemon.scss';

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKEMON_TOTAL = 1118;

const Pokemon = (props) => {
  const { id } = props.match.params;
  const idNumber = parseInt(id);
  const history = useHistory();
  const [endpoint, setEndpoint] = useState(`${POKEAPI_URL}${idNumber}`);

  const [pokemonId, setPokemonId] = useState(idNumber);
  //BasicInfo: height, number, name, weight and others (check APi for more info)...
  const [basicInfo, setBasicInfo] = useState([]);
  const [types, setTypes] = useState([]);
  //Stats: hp, attack, defense, special attack, special defense, speed
  const [stats, setStats] = useState([]);
  const [image, setImage] = useState(PokemonNotFound);
  const [abilities, setAbilities] = useState([]);

  const refreshComponent = () => {

  }

  const goToNextPokemon = () => {
    if (idNumber < POKEMON_TOTAL) {
      setPokemonId(pokemonId + 1);
    }
  }

  const goToPreviousPokemon = (pokemonNumber) => {
    if (idNumber > 1) {
      setPokemonId(pokemonId - 1);
    }
  }

  useEffect(() => {
    setEndpoint(`${POKEAPI_URL}${pokemonId}`);
    console.log("id, pokeid", idNumber, pokemonId);
    if (idNumber === pokemonId) {
      console.log("<<<Renderizo>>>!", endpoint);
      fetch(endpoint)
        .then(res => res.json())
        .then(data => {
          setBasicInfo(data || []);
          setTypes((data && data.types) || []);
          setStats((data && data.stats) || []);
          setImage((data && data.sprites.front_default) || PokemonNotFound);
          setAbilities((data && data.abilities) || []);
        });
    } else {
      console.log("<<<Redirecting>>>! PokemonId", pokemonId);
      history.push(`/pokemon/${pokemonId}`)

    }
  }, [idNumber, endpoint, pokemonId, history]);

  return (
    <section className="pokemon-container">
      <Paging onClickNext={goToNextPokemon} onClickPrevious={goToPreviousPokemon}></Paging>
      <h1 className="pokemon-container__title title">
        <span className="title__name">{basicInfo.name} </span>
        <span className="title__number"> # {basicInfo.id}</span>
      </h1>
      <section className="pokemon-container__figure">
        <figure>
          <img src={image} alt={basicInfo.name} />
        </figure>
      </section>
      <section className="pokemon-container__info poke-info">
        <div className="poke-info__container data-table">
          <div className="data-table__left details">
            <h3 className="table__title">
              basic information
            </h3>
            <table className="details__table table">
              <tbody>
                <tr>
                  <td className="table__header">height: </td>
                  <td className="table__detail">{parseFloat(basicInfo.height * 10)} cms</td>
                </tr>
                <tr>
                  <td className="table__header">weight: </td>
                  <td className="table__detail">{Math.round(parseFloat(basicInfo.weight * 2.21)) / 10} pounds</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="details__right">
            <h2>abilities</h2>
            <ul className="details__abilities ability">
              {
                abilities.map((abilityElement, id) => {
                  if (!abilityElement.is_hidden) {
                    return <li key={id} className="ability__item">{abilityElement.ability.name}</li>
                  }
                  return '';
                })
              }
            </ul>
          </div>
        </div>
      </section>
      <section className="pokemon-container__types">
        <h2>type:</h2>
        {
          types.map((typeElement, id) => {
            const propsToSend = {
              typeName: typeElement.type.name
            }
            return <TypeContainer {...propsToSend} key={id} />
          })
        }
      </section>
      <section className="pokemon-container__stats stats">
        <h3 className="table__title">
          stats
        </h3>
        <table className="stats__table table">
          <tbody>
            {
              stats.map((statElement, id) => {
                return (
                  <Fragment key={id}>
                    <tr>
                      <td className="table__header">{statElement.stat.name}</td>
                      <td className="table__detail">{statElement.base_stat}</td>
                    </tr>
                  </Fragment>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </section >
  );
}

export default withRouter(Pokemon);