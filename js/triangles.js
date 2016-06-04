webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	__webpack_require__(4);
	
	var tick = 0,
	    radius = 1;
	
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var angle = 60;
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var centerX = canvas.width / 2;
	var centerY = canvas.height / 2;
	
	var init = function init() {
	    var body = document.getElementsByTagName("body")[0];
	    body.appendChild(canvas);
	    loop();
	};
	
	var loop = function loop() {
	    requestAnimationFrame(loop);
	    draw();
	};
	
	var randomColor = function randomColor() {
	    return Math.round(Math.random() * 360);
	};
	
	var drawUpsideDownTriangle = function drawUpsideDownTriangle(ctx, centerX, centerY, angle, radius) {
	    ctx.strokeStyle = "hsla(" + randomColor() + ", 100%, 50%, 1)";
	    ctx.beginPath();
	    ctx.moveTo(centerX, centerY + radius);
	    ctx.lineTo(centerX - radius * Math.cos(angle * Math.PI / 75), centerY - radius * Math.sin(angle * Math.PI / 75));
	    ctx.lineTo(centerX + radius * Math.cos(angle * Math.PI / 75), centerY - radius * Math.sin(angle * Math.PI / 75));
	    ctx.lineTo(centerX, centerY + radius);
	    ctx.stroke();
	    ctx.closePath();
	};
	
	var drawTriangle = function drawTriangle(ctx, centerX, centerY, angle, radius) {
	    ctx.strokeStyle = "hsla(" + randomColor() + ", 100%, 50%, 1)";
	    ctx.beginPath();
	    ctx.moveTo(centerX, centerY - radius);
	    ctx.lineTo(centerX - radius * Math.cos(angle * Math.PI / 75), centerY + radius * Math.sin(angle * Math.PI / 75));
	    ctx.lineTo(centerX + radius * Math.cos(angle * Math.PI / 75), centerY + radius * Math.sin(angle * Math.PI / 75));
	    ctx.lineTo(centerX, centerY - radius);
	    ctx.stroke();
	    ctx.closePath();
	};
	
	var draw = function draw() {
	    drawUpsideDownTriangle(ctx, centerX, centerY, angle, radius);
	    drawTriangle(ctx, centerX, centerY, angle, radius);
	    radius++;
	
	    ctx.translate(centerX, centerY);
	    ctx.rotate(tick);
	    ctx.translate(-centerX, -centerY);
	    tick++;
	};
	
	init();

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = "module.exports = __webpack_public_path__ + \"../triangles.html\";";

/***/ }
]);
//# sourceMappingURL=triangles.js.map