const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numTrianglesPerLine = 25;
const sideSize = (canvas.width / numTrianglesPerLine) * 2;
const h = (sideSize / 2) * Math.sqrt(3);
const nLines = Math.ceil(canvas.height / h);

function init() {
    const body = document.getElementsByTagName("body")[0];
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
    ctx.lineTo(px + (sideSize / 2), h + py);
    ctx.lineTo(px, py);
    ctx.fill();
    ctx.closePath();
}

function drawEquilateralUpsideDown(sideSize, px, py) {
    ctx.beginPath();
    ctx.moveTo(px + (sideSize / 2), py);
    ctx.lineTo(px + sideSize, py + h);
    ctx.lineTo(px, py + h);
    ctx.lineTo(px + (sideSize / 2), py);
    ctx.fill();
    ctx.closePath();
}

function randomRGB() {
    return Math.round(Math.random() * 255);
}

function draw() {
    let varX = -(sideSize / 2),
        varY = 0;

    for (let lTriangle = 0; lTriangle < nLines; lTriangle++) {
        for (let iTriangle = 0; iTriangle <= numTrianglesPerLine; iTriangle++) {
            ctx.fillStyle = "rgb(" + randomRGB() + ", " + randomRGB() + "," + randomRGB() + ")";
            if ((iTriangle % 2) === 0) {
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
