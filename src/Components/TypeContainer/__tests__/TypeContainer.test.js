import React from "react";
import { mount } from "enzyme";
import TypeContainer from "../index";

describe('<TypeContainer />', () => {
  it('Should render the TypeContainer component', ()=> {
    const typeContainer = mount(<TypeContainer/>)
    expect(typeContainer.length).toEqual(1);
  })
})