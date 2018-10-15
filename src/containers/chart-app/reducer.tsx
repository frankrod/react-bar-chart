import { Range } from 'react-input-range';

import { Action, ActionTypes } from './actions';
import { ChartAppState } from '../../types/index';

export interface State {
  rangeSliderValue: Range;
}

export const initialState: State = {
  rangeSliderValue: {
    min: 1,
    max: 8,
  }
}

export function chartAppReducer(state: State = initialState, action: Action): ChartAppState {
  switch (action.type) {

    case ActionTypes.CHANGE_RANGE_SLIDER_VALUE: {
      const rangeSliderValue = action.payload
      return { ...state, rangeSliderValue };
    }

    default:
      return state;   
  }
}