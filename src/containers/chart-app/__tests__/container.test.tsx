import { mapStateToProps, mapDispatchToProps } from '../index';

const state = {
  chartApp: {
    rangeSliderValue: {
      min: 1,
      max: 8
    }
  }
};

const props = {
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