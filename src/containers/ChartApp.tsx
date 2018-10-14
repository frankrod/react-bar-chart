import ChartApp from '../components/ChartApp';
import * as actions from '../actions/chartApp';
import { State } from '../reducers';
import { Range } from 'react-input-range';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

// export const mapStateToProps = ({ rangeSliderValue }: ChartAppState) => ({
//   rangeSliderValue
// });

export const mapStateToProps = ({ chartApp }: State) => {
  return  {
    rangeSliderValue: chartApp.rangeSliderValue
  }
};

export const mapDispatchToProps = (dispatch: Dispatch<actions.Action>) => {
  return {
    onChangeRangeSliderValue: (value: Range) => dispatch(actions.onChangeRangeSliderValue(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartApp);