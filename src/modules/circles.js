"use strict";
let canvas,
    ctx,   
    tick = 0,
    colorHue = 10,
    angulo = 0,
    numLinhas = 1,
    bolaPorLinha = 6;


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
 
var drawCircle = function (posX, posY, raio){
    if (colorHue > 360) {
        colorHue = 0;
    } else {
        colorHue += 1;    
    }

    ctx.beginPath();
    ctx.fillStyle = "hsla(" + colorHue + ", 100%, 50%, 1 )";
    ctx.arc(posX, posY, raio, 0, Math.PI * 2, true);      
    ctx.closePath();
    ctx.fill();
};

var draw = function () {    
    let raio = 40,
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;

    ctx.beginPath();    
    ctx.fillStyle = "#000";
    ctx.fillRect( 0, 0, canvas.width, canvas.height);         
    ctx.closePath();

    drawCircle(centerX, centerY, raio);

    let fracaoAngulo = 360 / bolaPorLinha;
    for (let numAngulo = 0; numAngulo <= 360; numAngulo += fracaoAngulo){

        for (let iLinha = 1; iLinha <= numLinhas; iLinha++){
            drawCircle(
                centerX - (raio * 2 * iLinha) * Math.cos(numAngulo * Math.PI / 180) ,
                centerY - (raio * 2 * iLinha)  * Math.sin(numAngulo * Math.PI / 180), 
                raio
            );

        }   
    }
        
    angulo += 10;
    if (angulo >= 360){
        angulo = 0;
        if (numLinhas < 15 )
            numLinhas++;        
        bolaPorLinha += 3;
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