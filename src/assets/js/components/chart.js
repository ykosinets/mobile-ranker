import "../../../../node_modules/chart.js/dist/Chart";

let ticks = [100, 200, 300, 400, 500, 520];

const ctx = document.getElementById('chart').getContext("2d");
const gradientStroke = ctx.createLinearGradient(0, 0, 0, 500);
gradientStroke.addColorStop(0, '#fff');
gradientStroke.addColorStop(1, 'rgba(255,255,255,0)');
let height = document.querySelector('#chart').getBoundingClientRect().height - 50;
let min = Math.min( ...ticks );
console.log(height);
const gradientFill = ctx.createLinearGradient(0, min, 0, height);
gradientFill.addColorStop(0, "rgba(255, 255, 255, 0.3)");
gradientFill.addColorStop(1, "rgba(255, 255, 255, 0)");

window.chart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ["1998", "1999", "2000", "2001", "2002", "2003",],
		datasets: [{
			label: "",
			lineTension: 0,
			borderColor: "#fff",
			pointBorderColor: "#fff",
			pointBackgroundColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor: "#fff",
			pointBorderWidth: 0,
			pointHoverRadius: 5,
			pointHoverBorderWidth: 0,
			pointRadius: 5,
			fill: true,
			// fillColor: gradientFill,
			backgroundColor: gradientFill,
			borderWidth: 2,
			data: [260, 175, 245, 350, 470, 520]
		}]
	},
	options: {
		tooltips: {
			backgroundColor: '#004384',
			displayColors: false,
			fontSize: 15,
		},
		legend: {
			position: "bottom",
			display: false
		},
		layout: {
			padding: {
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}
		},
		scales: {
			yAxes: [{
				ticks: {
					fontColor: "rgba(255,255,255,1)",
					fontStyle: "normal",
					fontFamily: "Open Sans",
					fontSize: 15,
					beginAtZero: true,
					maxTicksLimit: 4,
					padding: 20,
					autoSkip: false,
					min: ticks[ticks.length - 1],
					max: ticks[0],
					callback: function(value, index, values) {
						return (values.length - 1 === index) ? '' : value ;
					}
				},
				gridLines: {
					zeroLineColor: "transparent",
					color: "rgba(255,255,255,0)",
					drawTicks: false,
					drawBorder: false,
				},
				afterBuildTicks: function(scale) {
					scale.ticks = ticks;
					return;
				},
				beforeUpdate: function(oScale) {
					return;
				}
			}],
			xAxes: [{
				gridLines: {
					zeroLineColor: "transparent",
					color: "rgba(255,255,255,.2)",
					drawTicks: true,
					drawBorder: false
				},
				ticks: {
					padding: 20,
					fontColor: "rgba(255,255,255,1)",
					fontFamily: "Open Sans",
					fontStyle: "normal",
					fontSize: 15,
					beginAtZero: true,
					callback: function(value, index, values) {
						return '' + value;
					}
				}
			}]
		}
	}
});
