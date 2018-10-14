import * as React from 'react';

import { Bar } from 'react-chartjs-2';
import InputRange, { Range } from 'react-input-range';
import 'react-input-range/lib/css/index.css';

import './Hello.css';

export interface Props {
  rangeSliderValue: Range; 
  onChangeRangeSliderValue: (rangeSliderValue: number | Range) => void;
}

const ChartApp = ({ rangeSliderValue, onChangeRangeSliderValue }: Props) => {

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {
        label: 'Bar chart',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [84, 14, 234, 37, 64, 42, 197,11].sort((a, b) => b-a)
      }
    ]
  }

  return (
    <div>
      <Bar
        data={data}
        width={100}
        height={50}
      />
      <div style={{ width: 300, marginLeft: 100, marginTop: 100 }}>
        <InputRange
          maxValue={8}
          minValue={1}
          value={rangeSliderValue}
          onChange={value => onChangeRangeSliderValue(value)} 
        />
      </div>
    </div> 
  );
}

export default ChartApp;
