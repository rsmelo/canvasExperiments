"use strict";
let canvas,
ctx,
tick = 0,
centerX,
centerY,
radius = 1,
delta = 0,
angle = 60;

var init = function () {
    let body = document.getElementsByTagName("body")[0];
    canvas = document.createElement("canvas");
    body.appendChild(canvas);

    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    centerX = canvas.width / 2,
    centerY = canvas.height  /2,  
    loop();
};

var loop = function () {
    requestAnimationFrame( loop );  
    draw();
};

var randomColor = function () {
    return Math.random() * 360 | 0;
};

var drawUpsideDownTriangle = function(ctx, centerX, centerY, angle, radius, delta){
    ctx.strokeStyle = "hsla(" + randomColor() + ", 100%, 50%, 1 )";
    let currentRadius = radius  + delta;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + currentRadius );
    ctx.lineTo(centerX - currentRadius * Math.cos(angle * Math.PI / 75), centerY - currentRadius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX + currentRadius * Math.cos(angle * Math.PI / 75),  centerY - currentRadius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX, centerY +  radius + delta );
    ctx.stroke();
    ctx.closePath();
};

var drawTriangle = function(ctx, centerX, centerY, angle, radius, delta){
    ctx.strokeStyle = "hsla(" + randomColor() + ", 100%, 50%, 1 )";
    let currentRadius = radius  + delta;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY -  currentRadius);
    ctx.lineTo(centerX - currentRadius * Math.cos(angle * Math.PI / 75), centerY + currentRadius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX + currentRadius * Math.cos(angle * Math.PI / 75),  centerY +  currentRadius * Math.sin(angle * Math.PI / 75));
    ctx.lineTo(centerX, centerY -  currentRadius);
    ctx.stroke();
    ctx.closePath();
};

var draw = function () {
    drawUpsideDownTriangle(ctx, centerX, centerY, angle, radius, delta);
    drawTriangle(ctx, centerX, centerY, angle, radius, delta);
    delta++;

    ctx.translate(centerX, centerY); 
    ctx.rotate(tick); // rotate   
    ctx.translate(-centerX, -centerY);
    tick++;
}

export default {
    init: init
}