import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";
import App from '..';

describe('<App /> Component', () => {
  test('should render the pokedex container', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App />
      </MemoryRouter>
    );
    
    expect(wrapper.find('[aria-label="pokedex container"]').exists()).toEqual(true);
    expect(wrapper.find('[aria-label="pokemon details"]').exists()).toEqual(false);
  });

  it('should render pokemon details', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/pokemon/1' ]}>
        <App />
      </MemoryRouter>
    );
    
    expect(wrapper.find('[aria-label="pokedex container"]').exists()).toEqual(false);
    expect(wrapper.find('[aria-label="pokemon details"]').exists()).toEqual(true);
  });
});
