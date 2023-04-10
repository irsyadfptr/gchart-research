import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsDependencyWheel from 'highcharts/modules/dependency-wheel';
import HighchartsSankey from 'highcharts/modules/sankey';

const data = 
[        
    ['A', 'X', 5],
    ['A', 'Y', 7],
    ['B', 'X', 3],
    ['B', 'Y', 2]
]

const options = {
    series: [{
      keys: ['from', 'to', 'weight'],
      data: data,
      type: 'dependencywheel',
      name: 'Circular Sankey Diagram',
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
      text: 'Circular Sankey Diagram'
    },
    chart: {
        width: 600,
        height: 500
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