import "../css/main.css";
import "../template/circles.html";

let colorHue = 10,
    angle = 0,
    linesNumber = 1,
    ballsPerline = 6;

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const radius = 40;

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

const drawCircle = (context, posX, posY, radius) => {
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

const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawCircle(ctx, centerX, centerY, radius);

    const angleStep = 360 / ballsPerline;
    for (let currentAngle = 0; currentAngle <= 360; currentAngle += angleStep) {
        for (let iLinha = 1; iLinha <= linesNumber; iLinha++) {
            drawCircle(
                ctx,
                centerX - (radius * 2 * iLinha) * Math.cos(currentAngle * Math.PI / 180),
                centerY - (radius * 2 * iLinha) * Math.sin(currentAngle * Math.PI / 180),
                radius
            );
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
