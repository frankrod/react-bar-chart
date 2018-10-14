import * as constants from '../constants';
import { Range } from 'react-input-range';

export type Action = onChangeRangeSliderAction;

export interface onChangeRangeSliderAction {
  type: constants.CHANGE_RANGE_SLIDER_VALUE;
  payload: Range;
}

export function onChangeRangeSliderValue(value: Range): onChangeRangeSliderAction {
  return {
    type: constants.CHANGE_RANGE_SLIDER_VALUE,
    payload: value
  }
}