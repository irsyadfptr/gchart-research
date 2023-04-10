import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsDependencyWheel from 'highcharts/modules/dependency-wheel';
import HighchartsSankey from 'highcharts/modules/sankey';

const data = 
[        
    ['Salary', 'Savings', 6500],
    ['Salary', 'Expenses', 2000],
    ['Salary', 'Tax', 300],
    ['Freelance', 'Savings', 8000],
    ['Freelance', 'Expenses', 1550],
    ['Freelance', 'Tax', 450],
    ['Trading', 'Savings', 1000],
    ['Trading', 'Expenses', 450],
    ['Trading', '', 8000]
    ['Savings', 'Pasar Uang', (6500 + 8000 + 1000) * 0.1],
    ['Savings', 'Obligasi', (6500 + 8000 + 1000) * 0.3],
    ['Savings', 'Saham', (6500 + 8000 + 1000) * 0.15],
    ['Savings', 'Tabungan', (6500 + 8000 + 1000) * 0.45],
    ['Expenses', 'Needs', (2000 + 1550 + 450) * 0.6],
    ['Expenses', 'Foya-Foya', (2000 + 1550 + 450) * 0.4],
]

const options = {
    series: [{
      keys: ['from', 'to', 'weight'],
      data: data,
      type: 'dependencywheel',
      name: 'Sankey Circular Diagram',
      dataLabels: {
        color: '#333',
        textPath: {
          enabled: true,
          attributes: {
            dy: 5
          }
        },
        distance: 10
      },
      size: '95%'
    }],
    title: {
      text: 'Sankey Circular Diagram'
    },
    chart: {
        width: 1000,
        height: 750
    },
};

const CircularSankey = () => {
    HighchartsSankey(Highcharts);
    HighchartsDependencyWheel(Highcharts);
    return (
        <HighchartsReact highcharts={Highcharts} options={options} />
    );
};

export default CircularSankey;