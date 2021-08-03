import React from "react";
import { mount } from "enzyme";
import NotFound from "..";

describe('<NotFound /> Page', () => {
  it('Should render the NotFound page', ()=> {
    const notFound = mount(<NotFound/>)
    expect(notFound.length).toEqual(1);
  })
})