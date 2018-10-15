import * as React from 'react';

import { Bar } from 'react-chartjs-2';
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import './Hello.css'; 

export interface Props {
  rangeSliderValue: Range; 
  onChangeRangeSliderValue: (rangeSliderValue: number | Range) => void;
}

const range = (start: number, end: number) => Array(end - start + 1).fill(undefined).map((_, index) => index + start)

const ChartApp = ({ rangeSliderValue, onChangeRangeSliderValue }: Props) => {
  
  const dataArray = [84, 14, 234, 37, 64, 42, 197,11];
  const min = 1;
  const max = dataArray.length;
  const includedBarColor = 'RGB(49, 172, 170, 0.8)'
  const excludedBarColor = 'RGB(153, 153, 153, 0.8)'

  const barsFiltered = range(rangeSliderValue.min, rangeSliderValue.max)

  const data = {
    labels: dataArray.map((_, index) => `${index+1}`),
    datasets: [
      {
        label: 'Bar chart',
        backgroundColor: dataArray.map((_, index) => barsFiltered.includes(index+1) ? includedBarColor : excludedBarColor),
        borderWidth: 1,
        data: dataArray.sort((a, b) => b-a)
      },
    ]
  }

  return (
    <div style={{width: 500 }}>
      <Bar
        data={data}
        
        height={400}
        options={{
          maintainAspectRatio: false
        }}
      />
      <div className="sliderBox" >
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
