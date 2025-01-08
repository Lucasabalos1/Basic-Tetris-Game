class figuras {
    constructor(){
        this.x = 100
        this.y = 0
        this.movilidad = 5;
        this.velocidad = 0.5;
    }
    
    dibujar(){
        ctx.beginPath();
        ctx.fillStyle = "#ff0";

        ctx.fillRect(this.x,this.y,20,20);

        ctx.closePath();
    } 

    mover(){
        this.y += this.movilidad  
        if (this.y === canvas.height - 20) {
            this.movilidad = 0;
        }
        
    }

}