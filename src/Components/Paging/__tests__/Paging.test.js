import React from "react";
import ReactRouterDom from "react-router-dom";
import { mount } from 'enzyme';
import Paging from "../index";
import { onClickNextObject, onClickPreviousObject, mockHistory } from "../__mocks__/Paging.mock";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => mockHistory
}))

describe('<Paging /> Component', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should render with default props and click next', () => {
    const spyNext = jest.spyOn(onClickNextObject, 'onClickNext');
    const wrapper = mount(
      <Paging onClickNext={onClickNextObject.onClickNext} onClickPrevious={onClickPreviousObject.onClickPrevious} />
    );
    const nextButton = wrapper.find('[alt="next arrow"]');
    expect(wrapper.find('[aria-label="paging controls"]').exists()).toEqual(true);
    expect(nextButton.exists()).toEqual(true);
    nextButton.simulate('click');
    expect(spyNext).toHaveBeenCalled();
  });

  it('should render with default props and click previous', () => {
    const spyPrevious = jest.spyOn(onClickPreviousObject, 'onClickPrevious');
    const wrapper = mount(
      <Paging onClickNext={onClickNextObject.onClickNext} onClickPrevious={onClickPreviousObject.onClickPrevious} />
    );
    const previousButton = wrapper.find('[alt="previous arrow"]');
    expect(wrapper.find('[aria-label="paging controls"]').exists()).toEqual(true);
    expect(previousButton.exists()).toEqual(true);
    previousButton.simulate('click');
    expect(spyPrevious).toHaveBeenCalled();
  });

  it('should render with default props and click on pokeball ', () => {
    const spyGoToPokedex  = jest.spyOn(mockHistory, 'push');
    const wrapper = mount(
      <Paging onClickNext={onClickNextObject.onClickNext} onClickPrevious={onClickPreviousObject.onClickPrevious} />
    );
    const goHomeButton = wrapper.find('[alt="go back to pokedex"]');
    expect(wrapper.find('[aria-label="paging controls"]').exists()).toEqual(true);
    expect(goHomeButton.exists()).toEqual(true);
    goHomeButton.simulate('click');
    expect(spyGoToPokedex).toHaveBeenCalled();
  });
});