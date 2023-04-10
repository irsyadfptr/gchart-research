import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsSankey from 'highcharts/modules/sankey';

const data = 
[        
    // ['A', 'X', 5],
    // ['A', 'Y', 7],
    // ['B', 'X', 3],
    // ['B', 'Y', 2]
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

// const nodes = [{id: 'A'}, {id: 'B'}, {id: 'X'}, {id: 'Y'}]

const options = {
  chart: {
    type: 'sankey',
    width: 1000,
    height: 750
  },
  title: {
    text: 'Sankey Diagram'
  },
  series: [{
    keys: ['from', 'to', 'weight'],
    data: data,
    // nodes: nodes,
    tooltip: {
      pointFormatter: function() {
        return this.fromNode.name + ' -> ' + this.toNode.name + ': ' + this.weight;
      }
    }
  }]
};

const SankeyChart = () => {
  HighchartsSankey(Highcharts);
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default SankeyChart