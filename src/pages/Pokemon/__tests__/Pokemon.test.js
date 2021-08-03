import React from "react";
import { MemoryRouter, Route } from "react-router-dom";
import { mount } from "enzyme";
import Pokemon from '..';

describe('<Pokemon /> page', () => {
  it('Should render the Pokemon page', () => {
    const pokemon = mount(
      <MemoryRouter initialEntries={['/pokemon/2']}>
        <Route exact path="/pokemon/:id" component={Pokemon} />
      </MemoryRouter>
    );
    expect(pokemon.find('[aria-label="pokemon details"]').exists()).toEqual(true);
  });
});