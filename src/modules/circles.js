"use strict";
let canvas,
ctx,   
tick = 0,
colorHue = 10,
angle = 0,
linesNumber = 1,
ballsPerline = 6;


var init = function() {
    let body = document.getElementsByTagName("body")[0];
    canvas = document.createElement("canvas");
    body.appendChild(canvas);
    ctx = canvas.getContext("2d");  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    loop();
};

var loop = function () {
  requestAnimationFrame( loop );  
  draw();
};

var drawCircle = function (ctx, posX, posY, radius){
    if (colorHue > 360) {
        colorHue = 0;
    } else {
        colorHue++;
    }

    ctx.beginPath();
    ctx.fillStyle = "hsla(" + colorHue + ", 100%, 50%, 1 )";
    ctx.arc(posX, posY, radius, 0, Math.PI * 2, true);      
    ctx.closePath();
    ctx.fill();
};

var draw = function () {    
    let radius = 40,
    centerX = canvas.width / 2,
    centerY = canvas.height / 2;

    ctx.beginPath();    
    ctx.fillStyle = "#000";
    ctx.fillRect( 0, 0, canvas.width, canvas.height);         
    ctx.closePath();

    drawCircle(ctx, centerX, centerY, radius);

    let angleStep = 360 / ballsPerline;
    for (let currentAngle = 0; currentAngle <= 360; currentAngle += angleStep){

        for (let iLinha = 1; iLinha <= linesNumber; iLinha++){
            drawCircle(
                ctx,
                centerX - (radius * 2 * iLinha) * Math.cos(currentAngle * Math.PI / 180) ,
                centerY - (radius * 2 * iLinha)  * Math.sin(currentAngle * Math.PI / 180), 
                radius
                );

        }   
    }

    angle += 10;
    if (angle >= 360){
        angle = 0;
        if (linesNumber < 15 ){
            linesNumber++;        
        }        
        ballsPerline += 3;
    }

    ctx.save();     
    ctx.translate(centerX, centerY); 
    ctx.rotate(tick); // rotate     
    ctx.translate(-centerX, -centerY);  
    tick++;
};

export default {
    init: init
}