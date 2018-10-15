import ChartApp from '../../components/ChartApp';
import * as chartAppActions from './actions';
import { State } from '../../root-reducer';
import { Range } from 'react-input-range';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export const mapStateToProps = ({ chartApp }: State) => ({
    rangeSliderValue: chartApp.rangeSliderValue,
    data: chartApp.data
});

export const mapDispatchToProps = (dispatch: Dispatch<chartAppActions.Action>) => ({
  onChangeRangeSliderValue: (value: Range) => dispatch(chartAppActions.onChangeRangeSliderValue(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChartApp);