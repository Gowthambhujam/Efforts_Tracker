Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Efforts BreakDown'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
        style: {
          color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
        }
      }
    }
  },
  series: [{
    name: 'Allocation',
    colorByPoint: true,
    data: [{
      name: 'Defects Reported',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'TestCaseCreation',
      y: 11.84
    }, {
      name: 'TestCaseExecution',
      y: 22.08
    }, {
      name: 'TestCaseUpdation',
      y: 4.67
    }]
  }]
});