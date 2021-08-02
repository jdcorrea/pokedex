import React from "react";
import { mount } from "enzyme";
import ReactRouterDom from "react-router-dom";
import Paging from "..";
import { onClickNextObject, onClickPreviousObject, mockHistory } from "../__mocks__/Paging.mock";

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useHistory: () => mockHistory
// }))

describe('<Paging /> Component', () => {
  xit('Should render the Paging component', () => {
    const paging = mount(<Paging/>)
    expect(paging.length).toEqual(1);
  });

  it('should render with default props and click next', () => {
    const spyNext = jest.spyOn(onClickNextObject, 'onClickNext');
    const wrapper = mount(
      <Paging onClickNext={onClickNextObject.onClickNext} onClickPrevious={onClickPreviousObject.onClickPrevious} />
    );
    const nextButton = wrapper.find('[rol="next"]');
    expect(wrapper.length).toEqual(1);
    expect(nextButton.exists()).toEqual(true);
    nextButton.simulate('click');
    expect(spyNext).toHaveBeenCalled();
  });

  // it('should render with default props and click on pokeball ', () => {
    
  // });
});