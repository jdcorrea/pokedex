import React from "react";
import { mount } from "enzyme";
import Pokedex from "../";

describe('<Pokedex /> Page', () => {
  it('Should render Pokedex page', () => {
    const pokedex = mount(<Pokedex />);
    expect(pokedex.length).toEqual(1);
  })
})