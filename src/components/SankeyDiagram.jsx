import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsSankey from 'highcharts/modules/sankey';

const options = {
  chart: {
    type: 'sankey',
    width: 600,
    height: 500
  },
  title: {
    text: 'Sankey Diagram'
  },
  series: [{
    keys: ['from', 'to', 'weight'],
    data: [
      ['A', 'X', 5],
      ['A', 'Y', 7],
      ['B', 'X', 3],
      ['B', 'Y', 2]
    ],
    nodes: [{
      id: 'A'
    }, {
      id: 'B'
    }, {
      id: 'X'
    }, {
      id: 'Y'
    }],
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