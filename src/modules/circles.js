"use strict";
class Circles {
    constructor() {
        console.debug(window.innerWidth);
        console.debug(window.innerHeight);
        this.canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.tick = 0;
        this.colorCount = 10;            
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
        this.angulo = 0;
        this.numLinhas = 1;
        this.bolaPorLinha = 6;    
    }
    start() {
        requestAnimationFrame(this.loop);  
    }

    draw () {
        let raio = 40;

        this.ctx.beginPath();    
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect( 0, 0, this.width, this.height);         
        this.ctx.closePath();

        this.drawCircle(this.centerX, this.centerY, this.raio); 
        var fracaoAngulo = 360 / this.bolaPorLinha;
        for (var numAngulo = 0; numAngulo <= 360; numAngulo += fracaoAngulo){

            for (var iLinha = 1; iLinha <= this.numLinhas; iLinha++){
                this.drawCircle(
                    this.centerX - (this.raio * 2 * iLinha ) * Math.cos(numAngulo * Math.PI / 180) ,
                    this.centerY - (raio * 2 * iLinha)  * Math.sin(numAngulo * Math.PI / 180), 
                    raio
                );

            }   
        }
            
        this.angulo += 10;
        if (this.angulo >= 360){
            this.angulo = 0;
            this.numLinhas++;
            this.bolaPorLinha +=3;
        }

        this.ctx.save();
         
        this.ctx.translate(this.centerX, this.centerY); 
        this.ctx.rotate(this.tick); // rotate     
        this.ctx.translate(-this.centerX, -this.centerY);  
        this.tick++;
    }

    corAtual() {        
        this.colorCount += 10;
        return this.colorCount;
    }

    drawCircle (posX, posY, raio){
        this.ctx.beginPath();
        this.ctx.fillStyle = "hsla(" + ( this.corAtual() ) + ", 60%, 30%, 1 )";
        this.ctx.arc(posX, posY, raio, 0, Math.PI*2, true);      
        this.ctx.closePath();
        this.ctx.fill();
    }
    
    loop() {                
        this.draw();
    }

        
}
export default Circles;