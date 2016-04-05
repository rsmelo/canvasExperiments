import "../css/main.css";
import "../template/triangles.html";

let tick = 0,
    radius = 1;

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const angle = 60;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function init() {
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    loop();
}

function loop() {
    requestAnimationFrame(loop);
    draw();
}

function randomColor() {
    return Math.round(Math.random() * 360);
}

function drawUpsideDownTriangle(ctx, centerX, centerY, angle, radius) {
    ctx.strokeStyle = "hsla(" + randomColor() + ", 100%, 50%, 1 )";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + radius);
    ctx.lineTo(centerX - radius * Math.cos(angle * Math.PI / 75), centerY - radius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX + radius * Math.cos(angle * Math.PI / 75), centerY - radius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX, centerY + radius);
    ctx.stroke();
    ctx.closePath();
}

function drawTriangle(ctx, centerX, centerY, angle, radius) {
    ctx.strokeStyle = "hsla(" + randomColor() + ", 100%, 50%, 1 )";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX - radius * Math.cos(angle * Math.PI / 75), centerY + radius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX + radius * Math.cos(angle * Math.PI / 75), centerY + radius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX, centerY - radius);
    ctx.stroke();
    ctx.closePath();
}

function draw() {
    drawUpsideDownTriangle(ctx, centerX, centerY, angle, radius);
    drawTriangle(ctx, centerX, centerY, angle, radius);
    radius++;

    ctx.translate(centerX, centerY);
    ctx.rotate(tick);
    ctx.translate(-centerX, -centerY);
    tick++;
}

init();
/* export default {
    init: init
};*/
