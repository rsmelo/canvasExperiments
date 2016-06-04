webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	__webpack_require__(2);
	
	var colorHue = 10,
	    angle = 0,
	    linesNumber = 1,
	    ballsPerline = 6;
	
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	var radius = 40;
	
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
	
	var drawCircle = function drawCircle(context, posX, posY, radius) {
	    if (colorHue > 360) {
	        colorHue = 0;
	    } else {
	        colorHue++;
	    }
	    context.beginPath();
	    context.fillStyle = "hsla(" + colorHue + ", 100%, 50%, 1 )";
	    context.arc(posX, posY, radius, 0, Math.PI * 2, true);
	    context.closePath();
	    context.fill();
	};
	
	var draw = function draw() {
	    ctx.clearRect(0, 0, canvas.width, canvas.height);
	
	    drawCircle(ctx, centerX, centerY, radius);
	
	    var angleStep = 360 / ballsPerline;
	    for (var currentAngle = 0; currentAngle <= 360; currentAngle += angleStep) {
	        for (var iLinha = 1; iLinha <= linesNumber; iLinha++) {
	            drawCircle(ctx, centerX - radius * 2 * iLinha * Math.cos(currentAngle * Math.PI / 180), centerY - radius * 2 * iLinha * Math.sin(currentAngle * Math.PI / 180), radius);
	        }
	    }
	
	    angle += 10;
	    if (angle >= 360) {
	        angle = 0;
	        if (linesNumber < 15) {
	            linesNumber++;
	        }
	        ballsPerline += 3;
	    }
	
	    ctx.translate(centerX, centerY);
	    ctx.rotate(1);
	    ctx.translate(-centerX, -centerY);
	};
	
	init();

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = "module.exports = __webpack_public_path__ + \"../circles.html\";";

/***/ }
]);
//# sourceMappingURL=circles.js.map