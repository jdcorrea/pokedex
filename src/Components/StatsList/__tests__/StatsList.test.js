import React from "react";
import { mount } from "enzyme";
import StatsList from "../index";

describe('<StatsList />', () => {
  it('Should render the StatsList component', ()=> {
    const statsList = mount(<StatsList/>);
    expect(statsList.length).toEqual(1);
  });
});