let points =[[1, 11], [4, 10], [7, 10],[11,9],[13,8],[15,5],[15,3],[16,1],[16,-1],[15,-1],[11,1],[9,2],[7,1],[5,-1],[1,-1],[0,0],[3,1],[1,1],[-2,0],[-6,-2],[-9,-6],[-9,-7],[-7,-9],[-7,-11],[-8,-12],[-9,-11],[-11,-10],[-13,-11],[-15,-11],[-17,-12],[-17,-10],[-15,-7],[-12,-6],[-11,-6],[-10,-3],[-8,2],[-5,6],[-3,9],[-4,10],[-5,10],[-2,12]]; 

function setup() { 
  createCanvas(windowWidth, windowHeight);  
  for (let x = 0; x < points.length; x++) {
    for (let y = 0; y < points[x].length; y++) {
      points[x][y] = points[x][y] * 20;  
    }
  }
  ctx = canvas.getContext('2d');  
  ctx.lineWidth = 10;
  ctx.lineCap = 'round'
}


function draw() {  
  background(255); 
  let mX = mouseX;
  let mY = mouseY;
  let scaleAmt = map(mX, 0, width, 1, 0.2);
  translate(mX, mY);
  scale(scaleAmt);
  textSize(32);  
  textAlign(LEFT, TOP); 
  text("魚躍淡江", 50, 50); 
  translate(width/2, height/2);  
  for (let j = 0; j < 5; j++) {  
    push();  
    scale(1-(j*0.1));  
    scale(scaleAmt); 
    scale(1, -1);  
    for (let x = 0; x < points.length-1; x++) {
      gradientLine(ctx, points[x][0], points[x][1], points[x+1][0], points[x+1][1], '#e2e4f6', '#defffc')
    }
    line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]);  
    pop();  
  }    
  
}

function gradientLine(ctx, x1, y1, x2, y2, c1, c2) {
  const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
  gradient.addColorStop(0, c1);
  gradient.addColorStop(1, c2);
  ctx.strokeStyle = gradient;

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
