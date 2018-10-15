import * as chartApp from '../containers/chart-app/reducer'
import { combineReducers } from 'redux';

export interface State {
  chartApp: chartApp.State
}

export const initialState: State = {
  chartApp: chartApp.initialState
}

export const reducer = combineReducers<State>({
  chartApp: chartApp.chartAppReducer
})