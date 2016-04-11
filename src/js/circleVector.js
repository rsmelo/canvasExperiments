import "../css/main.css";
import "../template/circleVector.html";
let slices = 4;
const ballRadius = 6;
const balls = [];
let distance = 1;
let positiveIncrement = true;
let angulo = 0;

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const radius = 200;

function init() {
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    loop();
}

function drawCircle(context, posX, posY, radius) {
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 1;
    context.arc(posX, posY, radius, 0, Math.PI * 2, true);
    context.closePath();
    context.stroke();
}

function drawLines(ctx) {
    for (let iLines = 0; iLines < lines; iLines++) {
        ctx.beginPath();
        ctx.moveTo(centerX - radius * Math.cos(360 * Math.PI / 180), centerY - radius * Math.sin(360 * Math.PI / 180));
        ctx.lineTo(centerX - radius * Math.cos(180 * Math.PI / 180), centerY - radius * Math.sin(180 * Math.PI / 180));
        ctx.stroke();
    }
}

function drawPoint(context, centerX, centerY) {
    context.beginPath();
    context.fillStyle = "#f00";
    context.arc(distance + centerX - radius * Math.cos(0 * Math.PI / 180),centerY - radius * Math.sin(0 * Math.PI / 180), ballRadius, 0, Math.PI * 2);
    context.closePath();
    context.fill();

    if (positiveIncrement) {
        distance += 2;
    } else {
        distance -= 2;
    }

    if (distance >= radius * 2) {
        positiveIncrement = false;
    } else if (distance <= 0) {
        positiveIncrement = true;
        if (slices < 40) {
            slices += 2;
        } else {
            slices = 4;
        }
    }
}

function draw() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();

    drawCircle(ctx, centerX, centerY, radius);

    const delta = 360 / slices;
    let currentVariance = 0;
    for (let iLines = 0; iLines < (slices / 2); iLines++) {
        ctx.beginPath();
        ctx.moveTo(centerX - radius * Math.cos(currentVariance * Math.PI / 180), centerY - radius * Math.sin(currentVariance * Math.PI / 180));
        ctx.lineTo(centerX - radius * Math.cos((currentVariance + 180) * Math.PI / 180), centerY - radius * Math.sin((currentVariance + 180) * Math.PI / 180));
        ctx.stroke();
        currentVariance += delta;
    }

    drawPoint(ctx, centerX, centerY);
}

function loop() {
    requestAnimationFrame(loop);
    draw();
}

init();
