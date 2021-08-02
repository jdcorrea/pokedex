import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";
import { cleanup } from "@testing-library/react";
import App from '..';
import NotFound from "../../../pages/NotFound";
import Pokemon from "../../../pages/Pokemon";
import Pokedex from "../../../pages/Pokedex";
import {rrd} from "../__mocks__/react-router-dom";

// afterEach(() => {
//   jest.clearAllMocks();
// });
afterEach(cleanup);

jest.mock(rrd);

describe('<App /> Component', () => {
  it('Should render the App component in pokedex page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Pokedex)).toHaveLength(1);
  });

  it('Should render the App component in pokemon page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/pokemon/13']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Pokemon)).toHaveLength(1);
  });

  it('Should render the App component in NotFound page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/random']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});
