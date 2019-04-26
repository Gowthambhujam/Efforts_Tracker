Highcharts.chart('container', {
  chart: {
    type: 'column'
  },
  title: {
    text: 'Defects Reported By Module And Severity'
  },
  xAxis: {
    categories: ['HouseHoldActivities', 'Production Bugs', 'Integrity','Playing']
  },
  yAxis: {
    min: 0,
    title: {
      text: 'No Of Defects Reported'
    }
  },
  tooltip: {
    pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true
  },
  plotOptions: {
    column: {
      stacking: 'percent'
    }
  },
  series: [{
    name: 'Low',
    data: [5, 3, 4,3]
  }, {
    name: 'Medium',
    data: [2, 2, 3,6]
  }, {
    name: 'High',
    data: [3, 4, 4,4]
  },{
        name: 'Critical',
         data: [6,2,3,3] 
     }]
});