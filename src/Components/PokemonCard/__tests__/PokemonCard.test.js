import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
import PokemonCard from "../index";

describe('<PokemonCard />', () => {
  it('Should render the PokemonCard component', ()=> {
    
    const pokemonCard = mount(
      <MemoryRouter initialEntries={['/']}>
        <Route exact path="/" component={PokemonCard} />
      </MemoryRouter>
    );
    
    expect(pokemonCard.find('[aria-label="pokemon card"]').exists()).toEqual(true);
  })

  // it('Should fetch api and return bulbasaur name', () => {
  //   const onClick = () => {
  //     console.log("pokemon sended");
  //   }
  //   const propsToSend = {
  //     name: "bulbasaur",
  //     url: "https://pokeapi.co/api/v2/pokemon/1/",
  //     onClick: onClick()
  //   }

  //   return functions.fetchUser
  // })
  
})