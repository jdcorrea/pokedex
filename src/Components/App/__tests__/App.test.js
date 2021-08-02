import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";
import App from '..';
import NotFound from "../../../pages/NotFound";
import Pokemon from "../../../pages/Pokemon";
import Pokedex from "../../../pages/Pokedex";

afterEach(() => {
  jest.clearAllMocks();
});

describe('<App /> Component', () => {
  // it('Should render the App component in pokedex page', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={[ '/' ]}>
  //       <App />
  //     </MemoryRouter>
  //   )
  //   expect(wrapper.find('[aria-label="pokedex container"]').exists()).toEqual(true);
  // });
  it('Should render the App component in pokedex page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Pokedex)).toHaveLength(1);
    // expect(wrapper.find('[aria-label="pokedex container"]').exists()).toEqual(true);
  });

  it('Should render the App component in pokemon page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/pokemon/13' ] }>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Pokedex)).toHaveLength(1);
    // expect(wrapper.find('[aria-label="pokemon details"]').exists()).toEqual(true);
  });

  // it('Should render the App component in NotFound page', () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={[ '/random' ] }>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find('[aria-label="page not found"]').exists()).toEqual(true);
  // });
});
