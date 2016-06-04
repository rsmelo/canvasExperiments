webpackJsonp([2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	
	__webpack_require__(3);
	
	var canvas = document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	var numTrianglesPerLine = 25;
	var sideSize = canvas.width / numTrianglesPerLine * 2;
	var h = sideSize / 2 * Math.sqrt(3);
	var nLines = Math.ceil(canvas.height / h);
	
	function init() {
	    var body = document.getElementsByTagName("body")[0];
	    body.appendChild(canvas);
	    loop();
	}
	
	function loop() {
	    requestAnimationFrame(loop);
	    draw();
	}
	
	function drawEquilateral(sideSize, px, py) {
	    ctx.beginPath();
	    ctx.moveTo(px, py);
	    ctx.lineTo(px + sideSize, py);
	    ctx.lineTo(px + sideSize / 2, h + py);
	    ctx.lineTo(px, py);
	    ctx.fill();
	    ctx.closePath();
	}
	
	function drawEquilateralUpsideDown(sideSize, px, py) {
	    ctx.beginPath();
	    ctx.moveTo(px + sideSize / 2, py);
	    ctx.lineTo(px + sideSize, py + h);
	    ctx.lineTo(px, py + h);
	    ctx.lineTo(px + sideSize / 2, py);
	    ctx.fill();
	    ctx.closePath();
	}
	
	function randomRGB() {
	    return Math.round(Math.random() * 255);
	}
	
	function draw() {
	    var varX = -(sideSize / 2),
	        varY = 0;
	
	    for (var lTriangle = 0; lTriangle < nLines; lTriangle++) {
	        for (var iTriangle = 0; iTriangle <= numTrianglesPerLine; iTriangle++) {
	            ctx.fillStyle = "rgb(" + randomRGB() + ", " + randomRGB() + "," + randomRGB() + ")";
	            if (iTriangle % 2 === 0) {
	                drawEquilateral(sideSize, varX, varY);
	            } else {
	                drawEquilateralUpsideDown(sideSize, varX, varY);
	            }
	            varX += sideSize / 2;
	        }
	        varX = -(sideSize / 2);
	        varY += h;
	    }
	}
	
	init();
	/* export default {
	    init: init
	};*/

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = "module.exports = __webpack_public_path__ + \"../multipleTriangles.html\";";

/***/ }
]);
//# sourceMappingURL=multipleTriangles.js.map