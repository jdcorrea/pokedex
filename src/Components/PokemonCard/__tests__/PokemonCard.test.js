import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
import axios from 'axios';
import PokemonCard from "../index";
import { onClick } from "../__mocks__/PokemonCards.mock";

describe('<PokemonCard />', () => {
  it('Should render the PokemonCard component', () => {

    const pokemonCard = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route exact path="/" component={PokemonCard} />
      </MemoryRouter>
    );

    expect(pokemonCard.find('[aria-label="pokemon card"]').exists()).toEqual(true);
  })

  it('Should fetch api and return bulbasaur name', async () => {
    const api = 'https://pokeapi.co/api/v2/pokemon/1';
    const pokemonInfo = {
      name: '',
      imgUrl: '',
      types: []
    }

    const getDataFromApi = (url) => {
      return axios.get(url)
        .then(({ data }) => {
          return data;
        });
    }

    await getDataFromApi(api)
      .then(data => {
        expect(data.length).toBeGreaterThan(0);
      });
  })
})