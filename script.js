var cols = ['#DFFF00', '#FFBF00', '#FF7F50', '#DE3163', '#9FE2BF', '#40E0D0', '#6495ED', '#CCCCFF'];
// Color codes referred from https://htmlcolorcodes.com/ //

var press = document.querySelector("button");
var body = document.querySelector("body");

function changeBg() {
	var randCol = cols[Math.floor(Math.random() * cols.length)];
	body.style.background = randCol
};

press.addEventListener("click", changeBg);