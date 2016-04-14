import "../css/main.css";
import "../template/circleVector.html";
let slices = 6;
const ballRadius = 6;
const balls = [];
let positiveIncrement = true;
let angulo = 0;

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const radius = 200;
let deltaMov = -radius;
let fraction = radius / 3;
const pointOffset = [radius,  (radius - (radius/2)), (-radius + (radius/2)), 0, 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const pointIncrement = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];

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

function drawPoint(context, centerX, centerY, angle, idx) {
    let localMov = pointOffset[idx];
    let localPointIncrement = pointIncrement[idx];
    context.beginPath();
    if (idx === 0){
        context.fillStyle = "#f00";
    } else {
        context.fillStyle = "#0f0";
    }

    context.arc(centerX - (localMov) * Math.cos(angle * Math.PI / 180),centerY - (localMov) * Math.sin(angle * Math.PI / 180), ballRadius, 0, Math.PI * 2);
    context.closePath();
    context.fill();

   /*if (localPointIncrement) {
        localMov += 2;
    } else {
        localMov -= 2;
    }

    if (localMov >= radius) {
        pointIncrement[idx] = false;
    } else if (localMov <= (-radius)) {
        pointIncrement[idx] = true;
    }
    pointOffset[idx] = localMov;*/
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
    let currentVariance = 90;
    for (let iLines = 0; iLines < (slices / 2); iLines++) {
        ctx.beginPath();
        ctx.moveTo(centerX - radius * Math.cos(currentVariance * Math.PI / 180), centerY - radius * Math.sin(currentVariance * Math.PI / 180));
        ctx.lineTo(centerX - radius * Math.cos((currentVariance + 180) * Math.PI / 180), centerY - radius * Math.sin((currentVariance + 180) * Math.PI / 180));
        ctx.stroke();
        drawPoint(ctx, centerX, centerY, currentVariance, iLines);
        currentVariance += delta;
    }

    if (positiveIncrement) {
        deltaMov += 2;
    } else {
        deltaMov -= 2;
    }

    if (deltaMov >= radius) {
        positiveIncrement = false;
    } else if (deltaMov <= (-radius)) {
        positiveIncrement = true;
       /* if (slices < 40) {
            slices += 2;
        } else {
            slices = 4;
        }*/
    }
}

function loop() {
    requestAnimationFrame(loop);
    draw();
}

init();
