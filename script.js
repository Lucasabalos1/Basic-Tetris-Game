const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const drawBackground = () => {
  const blockSize = 20;

  for (let x = 0; x < canvas.width; x += blockSize) {
    for (let y = 0; y < canvas.height; y += blockSize) {
      ctx.strokeStyle = 'rgba(255,255,255,0.1)'; 
      ctx.strokeRect(x, y, blockSize, blockSize);
    }
  }
}

const bloques = []

document.addEventListener('click', () => {
  bloques.push(new figuras())
})

function animar(){
  ctx.clearRect(0,0,canvas.width, canvas.height)
  drawBackground();
  bloques.forEach((block) => {
    
    block.dibujar();
    block.mover();
  })

  requestAnimationFrame(animar)
}

animar()


/*
to-do:

-Agregar que cuando choque con otro cuadrado este por chocar, se detenga y apile
-Agregar movimientos laterales


*/