import React, { useState, useEffect, Fragment } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import TypeContainer from "../../Components/TypeContainer";
import StatsList from "../../Components/StatsList";
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

  async function loadEndpoint() {
    await fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setBasicInfo(data || []);
        setTypes((data && data.types) || []);
        setStats((data && data.stats) || []);
        setImage((data && data.sprites.front_default) || PokemonNotFound);
        setAbilities((data && data.abilities) || []);
      });
  }

  useEffect(() => {
    setEndpoint(`${POKEAPI_URL}${pokemonId}`);
    if (idNumber === pokemonId) {
      loadEndpoint();
    } else {
      history.push(`/pokemon/${pokemonId}`)
    }
  }, [idNumber, endpoint, pokemonId]);

  return (
    <section aria-label="pokemon details" role="main">
      <Paging onClickNext={goToNextPokemon} onClickPrevious={goToPreviousPokemon}></Paging>
      <section className="pokemon-container">
        <h1 className="pokemon-container__title title">
          <span className="title__name">{basicInfo.name} </span>
          <span className="title__number"> # {basicInfo.id}</span>
        </h1>
        <section className="pokemon-container__figure">
          <figure>
            <img src={image} alt={basicInfo.name} />
          </figure>
        </section>
        <div className="pokemon-container__aside aside">
          <section className="aside__container basic-info">
            <div className="basic-info__title">
              <h2>
                basic information:
              </h2>
            </div>
            <table className="basic-info__table table">
              <tbody>
                <tr>
                  <td className="table__detail">
                    <span className="td-title">height:</span>
                    <span className="td-detail">{parseFloat(basicInfo.height * 10)} cms</span>
                  </td>
                </tr>
                <tr>
                  <td className="table__detail">
                    <span className="td-title">weight:</span>
                    <span className="td-detail">{Math.round(parseFloat(basicInfo.weight * 2.21)) / 10} pounds</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <section className="aside__abilities">
            <h2>abilities:</h2>
            <ul className="abilities-list">
              {
                abilities.map((abilityElement, id) => {
                  if (!abilityElement.is_hidden) {
                    return <li key={id} className="abilities-list__item">{abilityElement.ability.name}</li>
                  }
                  return '';
                })
              }
            </ul>
          </section>
          <section className="aside__types">
            <h2>type:</h2>
            <ul className="list">
              {
                types.map((typeElement, id) => {
                  const propsToSend = {
                    typeName: typeElement.type.name
                  }
                  return <TypeContainer {...propsToSend} key={id} />
                })
              }
            </ul>
          </section>
        </div>
        <section className="pokemon-container__stats stats">
          <h3 className="stats__title">
            stats
          </h3>
          <div className="stats__details">
            {
              stats.map((statElement, id) => {
                return (
                  <div className="stats__list" key={id}>
                    <span className="stats-header">
                      {statElement.stat.name}
                    </span>
                    <ul className="stats-list">
                      <StatsList
                        baseStat={statElement.base_stat}

                      />
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </section>
      </section >
    </section >
  );
}

export default withRouter(Pokemon);