import "../css/main.css";
import "../template/circleVector.html";
let lines = 2;

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const radius = 100;

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

function draw() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    drawCircle(ctx, centerX, centerY, radius);


    // for (let i =1; i <= lines; i++) {
    //     let angulo1 = 360 / lines;
    //     let angulo2 = angulo1 + 180;
    //     ctx.beginPath();
    //     ctx.moveTo(centerX - radius * Math.cos(angulo1 * Math.PI / 180), centerY - radius * Math.sin(angulo1 * Math.PI / 180));
    //     ctx.lineTo(centerX - radius * Math.cos(angulo2 * Math.PI / 180), centerY - radius * Math.sin(180 * Math.PI / 180));
    //     ctx.stroke();
    // }

    ctx.beginPath();
    ctx.moveTo(centerX - radius * Math.cos(360 * Math.PI / 180), centerY - radius * Math.sin(360 * Math.PI / 180));
    ctx.lineTo(centerX - radius * Math.cos(180 * Math.PI / 180), centerY - radius * Math.sin(180 * Math.PI / 180));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(centerX - radius * Math.cos(90 * Math.PI / 180), centerY - radius * Math.sin(90 * Math.PI / 180));
    ctx.lineTo(centerX - radius * Math.cos(270 * Math.PI / 180), centerY - radius * Math.sin(270 * Math.PI / 180));
    ctx.stroke();
}

function loop() {
    requestAnimationFrame(loop);
    draw();
}

init();
