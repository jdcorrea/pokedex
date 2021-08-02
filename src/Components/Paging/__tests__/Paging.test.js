import React from "react";
import { mount } from "enzyme";
import ReactRouterDom from "react-router-dom";
import Paging from "..";
import { onClickNextObject, onClickPreviousObject, mockHistory } from "../__mocks__/Paging.mock";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => mockHistory
}))

describe('<Paging /> Component', () => {
  it('Should render the Paging component', () => {
    const paging = mount(<Paging/>)
    expect(paging.length).toEqual(1);
  });

  it('should click on pokeball ', () => {
    const spyGoToPokedex  = jest.spyOn(mockHistory, 'push');
    const wrapper = mount(
      <Paging onClickNext={onClickNextObject.onClickNext} onClickPrevious={onClickPreviousObject.onClickPrevious} />
    );
    const goHomeButton = wrapper.find('[alt="go back to pokedex"]');
    expect(goHomeButton.exists()).toEqual(true);
    goHomeButton.simulate('click');
    expect(spyGoToPokedex).toHaveBeenCalled();
  });
});