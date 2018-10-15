import { Range } from 'react-input-range';

export enum ActionTypes {
  CHANGE_RANGE_SLIDER_VALUE = '[chart-app] CHANGE_RANGE_SLIDER_VALUE'
}

export type Action = onChangeRangeSliderAction;

export interface onChangeRangeSliderAction {
  type: ActionTypes.CHANGE_RANGE_SLIDER_VALUE;
  payload: Range;
}

export function onChangeRangeSliderValue(value: Range): onChangeRangeSliderAction {
  return {
    type: ActionTypes.CHANGE_RANGE_SLIDER_VALUE,
    payload: value
  }
}