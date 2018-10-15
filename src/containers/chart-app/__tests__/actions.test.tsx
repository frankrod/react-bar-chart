import * as actions from '../actions';

describe('chart-app actions', () => {
  it('should have a type of CHANGE_RANGE_SLIDER_VALUE', () => {
    const expected = {
      type: actions.ActionTypes.CHANGE_RANGE_SLIDER_VALUE,
      payload: {
        min: 1,
        max: 2
      }
    }
    expect(actions.onChangeRangeSliderValue({ min: 1, max: 2 })).toEqual(expected);
  });
});