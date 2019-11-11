import "../../../../node_modules/chart.js/dist/Chart";

let ticks = [100, 200, 300, 400, 500, 520];

const ctx = document.getElementById('chart').getContext("2d");
const gradientStroke = ctx.createLinearGradient(0, 0, 0, 500);
gradientStroke.addColorStop(0, '#fff');
gradientStroke.addColorStop(1, 'rgba(255,255,255,0)');
let w = window.outerWidth;
let factor = .69 + ( 0.09/(1280) )* w;
let height = document.querySelector('#chart').getBoundingClientRect().height * factor;

let fontSize = window.outerWidth * 15 /1600;
fontSize = fontSize < 12 ? 12 : fontSize;

const gradientFill = ctx.createLinearGradient(0, 0, 0, height);
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
			pointHoverRadius: window.outerWidth > 768 ? 5 : 2,
			pointHoverBorderWidth: 0,
			pointRadius: window.outerWidth > 768 ? 5 : 2,
			fill: true,
			backgroundColor: gradientFill,
			borderWidth: window.outerWidth > 768 ? 2 : 1,
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
				left: window.outerWidth > 768 ? 0 : 6,
				right: window.outerWidth > 768 ? 0 : 6,
				top: window.outerWidth > 768 ? 0 : 6,
				bottom: window.outerWidth > 768 ? 0 : 6
			}
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display:  window.outerWidth > 768,
					labelString: 'Dollars',
					fontColor: "rgba(255,255,255,1)",
					fontStyle: "normal",
					fontFamily: "Open Sans",
					fontSize: fontSize - 4,
				},
				ticks: {
					display: true,
					fontColor: "rgba(255,255,255,1)",
					fontStyle: "normal",
					fontFamily: "Open Sans",
					fontSize: window.outerWidth > 768 ? fontSize - 4 : 10,
					beginAtZero: true,
					maxTicksLimit: 6,
					padding: window.outerWidth > 768 ? 10 : 15,
					autoSkip: false,
					min: Math.min(...ticks),
					max: Math.max(...ticks),
					callback: function(value, index, values) {
						return (values.length - 1 === index) ? '' : value ;
					}
				},
				gridLines: {
					zeroLineColor: "transparent",
					color: window.outerWidth > 768 ? "rgba(255,255,255,0)" : "rgba(255,255,255,.05)",
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
				scaleLabel: {
					display: window.outerWidth > 768,
					labelString: 'Years',
					fontColor: "rgba(255,255,255,1)",
					fontStyle: "normal",
					fontFamily: "Open Sans",
					fontSize: fontSize - 4,
				},
				gridLines: {
					zeroLineColor: "rgba(255,255,255,.05)",
					color: "rgba(255,255,255,.05)",
					drawTicks: true,
					drawBorder: false
				},
				ticks: {
					display: true,
					padding: window.outerWidth > 768 ? 10 : 5,
					fontColor: "rgba(255,255,255,1)",
					fontFamily: "Open Sans",
					fontStyle: "normal",
					fontSize: window.outerWidth > 768 ? fontSize - 4 : 10,
					beginAtZero: true,
					callback: function(value, index, values) {
						return '' + value;
					}
				}
			}]
		}
	}
});
