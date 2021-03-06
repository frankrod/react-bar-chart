import * as React from 'react';
import { shallow } from 'enzyme';
import ChartApp from '../ChartApp';

import '../ChartApp.css'; 

describe('<ChartApp />', () => {
  const props = {
    data: [1, 3, 3],
    rangeSliderValue: { min:1, max: 8 },
    onChangeRangeSliderValue: jest.fn()
  };

  it('should render successfully', () => {
    const wrapper = shallow(<ChartApp { ...props } />);

    expect(wrapper).toMatchSnapshot();
  });
});