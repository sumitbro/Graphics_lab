let x_wmin=100;
let y_wmin=200;
let x_wmax= 400;
let y_wmax=400;

function setup(){
    createCanvas(600, 600);
    background(255,0,0);
    textSize(24);
    fill(0, 102, 153);
    text('Output of Liang Barsky Line Clipping Algorithm',10,20);
    stroke(255,10,0);
    
}

function draw(){
    stroke(255,0,0);
    rect(x_wmin,y_wmin,(x_wmax-x_wmin),(y_wmax-y_wmin));
    
    clip(50,500,30,600);
    clip(30,40,700,600);
    clip(50,500,600,80);
    clip(100,200,500,300);
    clip(20,20,600,30);
    clip(400,60,400,600);
    clip(400,60,400,600);
}

function clip(x1,y1,x2,y2){ 
    let p = [];
    let q = [];
    let r1 = [];
    let r2 = [];


    let flag = true;
    dx = (x2 -x1);
    dy = (y2-y1);
    p[0] = -dx;
    p[1] = dx;
    p[2] = -dy;
    p[3] = dy;

    q[0] = x1 - x_wmin;
    q[1] = x_wmax - x1;
    q[2] = y1 - y_wmin;
    q[3] = y_wmax - y1;

    for (i = 0; i < 4; i++) {
        if (p[i] === 0) {
          if (q[i] < 0)
            flag = false;
        }
    }

    if (flag == true) {
        for (i = 0; i < 4; i++) {
          if (p[i] < 0) {
            r1.push((q[i] / p[i])); 
          } else if (p[i] > 0) {
            r2.push((q[i] / p[i])); 
          }
        }
    }

    u1 = max(r1);
    u2 = min(r2);

    if(u1<u2){
        xI = x1 + u1*dx;
        yI = y1 + u1*dy;
        xJ = x1 + u2*dx;
        yJ = y1 + u2*dy
        stroke(0,0,255);
        line(xI,yI,xJ,yJ); 
    }
    
}