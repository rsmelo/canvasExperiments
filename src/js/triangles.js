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

const init = () => {
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    loop();
};

const loop = () => {
    requestAnimationFrame(loop);
    draw();
};

const randomColor = () => {
    return Math.round(Math.random() * 360);
};

const drawUpsideDownTriangle = (ctx, centerX, centerY, angle, radius) => {
    ctx.strokeStyle = "hsla(" + randomColor() + ", 100%, 50%, 1)";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + radius);
    ctx.lineTo(centerX - radius * Math.cos(angle * Math.PI / 75), centerY - radius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX + radius * Math.cos(angle * Math.PI / 75), centerY - radius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX, centerY + radius);
    ctx.stroke();
    ctx.closePath();
};

const drawTriangle = (ctx, centerX, centerY, angle, radius) => {
    ctx.strokeStyle = "hsla(" + randomColor() + ", 100%, 50%, 1)";
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - radius);
    ctx.lineTo(centerX - radius * Math.cos(angle * Math.PI / 75), centerY + radius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX + radius * Math.cos(angle * Math.PI / 75), centerY + radius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX, centerY - radius);
    ctx.stroke();
    ctx.closePath();
};

const draw = () => {
    drawUpsideDownTriangle(ctx, centerX, centerY, angle, radius);
    drawTriangle(ctx, centerX, centerY, angle, radius);
    radius++;

    ctx.translate(centerX, centerY);
    ctx.rotate(tick);
    ctx.translate(-centerX, -centerY);
    tick++;
};

init();
