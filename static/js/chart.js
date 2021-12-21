// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

const choice = localStorage.getItem( 'choice' );
const algo = localStorage.getItem( 'algo' );
const tcoin = localStorage.getItem('tcoin');
const mark = localStorage.getItem('cmark');
const david = localStorage.getItem('cdavid');

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Voting', 'Total choice coin for voting'],
  ['Mark', mark],
  ['David', 2],
  ['Choice', choice],
  ['Algo', algo],
  ['Total', tcoin],
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Choice Coin', 'width':320, 'height':280};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
