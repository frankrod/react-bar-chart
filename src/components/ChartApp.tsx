import * as React from 'react';
import { Bar } from 'react-chartjs-2';
import InputRange, { Range } from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import './ChartApp.css'; 

interface Props {
  data: number[];
  rangeSliderValue: Range; 
  onChangeRangeSliderValue: (rangeSliderValue: number | Range) => void;
}

const range = (start: number, end: number) => Array(end - start + 1).fill(undefined).map((_, index) => index + start)

const ChartApp = ({ data, rangeSliderValue, onChangeRangeSliderValue }: Props) => {
  
  const min = 1;
  const max = data.length;
  const includedBarColor = 'RGB(49, 172, 170, 0.8)';
  const excludedBarColor = 'RGB(153, 153, 153, 0.8)';

  const barsFiltered = range(rangeSliderValue.min, rangeSliderValue.max);

  const barData = {
    labels: data.map((_, index) => `${index+1}`),
    datasets: [
      {
        label: 'Bar chart',
        backgroundColor: data.map((_, index) => barsFiltered.includes(index+1) ? includedBarColor : excludedBarColor),
        borderWidth: 1,
        data: data.sort((a, b) => b-a)
      },
    ]
  };

  return (
    <div className="container" >
      <div className="item" >
        <Bar
          data={barData}
          height={400}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
      <div className="item" >
        <InputRange
          maxValue={max}
          minValue={min}
          value={rangeSliderValue}
          onChange={value => onChangeRangeSliderValue(value)} 
        />
      </div>
    </div> 
  );
}

export default ChartApp;
