function animateShape() {
  const shape = document.getElementById('dynamicShape');
  let isCircle = false;

  setInterval(() => {

    shape.style.borderRadius = isCircle ? '0%' : '50%'; // Kare veya küre
    isCircle = !isCircle;


    shape.style.backgroundColor = getRandomColor();


    const scale = getRandomScale();
    const shapeWidth = shape.offsetWidth * scale;
    const shapeHeight = shape.offsetHeight * scale;

    
    const centerX = window.innerWidth / 3;
    const centerY = window.innerHeight / 3;
    const moveRangeX = window.innerWidth / 8;
    const moveRangeY = window.innerHeight / 8; 


    const x = getRandomPosition(moveRangeX) - shapeWidth / 2;
    const y = getRandomPosition(moveRangeY) - shapeHeight / 2;

    shape.style.transform = `
      translate(${centerX + x - shapeWidth / 2}px, ${centerY + y - shapeHeight / 2}px)
      scale(${scale})
      rotate(${getRandomRotation()}deg)
    `;
  }, 2000);
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomScale() {
  return (Math.random() * 1.5 + 0.5).toFixed(2); 
}


function getRandomRotation() {
  return Math.floor(Math.random() * 360); 
}


function getRandomPosition(range) {
  return Math.floor(Math.random() * range * 2) - range; 
}


window.onload = animateShape;
