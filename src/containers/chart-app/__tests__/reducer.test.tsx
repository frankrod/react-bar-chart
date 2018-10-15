import { chartAppReducer, State } from '../reducer';
import { Action, onChangeRangeSliderValue } from '../actions'

describe('chart-app reducer', () => {
  it('should return initial state', () => {
    const initialState = {
      rangeSliderValue: {
        min: 1,
        max: 8
      }
    }

    expect(chartAppReducer(undefined, {} as Action)).toEqual(initialState);
  });

  it('should return range slider value state', () => {
    const rangeValue = { min: 3, max: 4 };
    expect(chartAppReducer({} as State, onChangeRangeSliderValue(rangeValue))).toEqual({ rangeSliderValue: rangeValue })
  });
});

