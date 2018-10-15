import { mapStateToProps, mapDispatchToProps } from '../index';

const state = {
  chartApp: {
    data: [84, 14, 234, 37, 64, 42, 197,11],
    rangeSliderValue: {
      min: 1,
      max: 8
    }
  }
};

const props = {
  data: state.chartApp.data,
  rangeSliderValue: state.chartApp.rangeSliderValue
}

const actions = {
  onChangeRangeSliderValue: jest.fn()
}

describe('chart-app container', () => {
  describe('mapStateToProps', () => {
    it('should map state to props', () => {
      const mappedProps = mapStateToProps(state);

      expect(mappedProps).toEqual({ ...props });
    });
  });

  describe('mapDispatchToProps', () => {
    it('should inject the dispatch for every action', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);

      expect(Object.keys(result)).toEqual(Object.keys(actions));
    });
  });
});