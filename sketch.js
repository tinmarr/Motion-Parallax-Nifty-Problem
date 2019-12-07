var randcolor1,
    randcolor2,
    randcolor3,
    bird = [-50,0];

function setup() {
  createCanvas(displayWidth,displayHeight);
  randcolor1 = color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255));
  randcolor2 = color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255));
  randcolor3 = color(Math.floor(Math.random()*255),Math.floor(Math.random()*255),Math.floor(Math.random()*255));
}

function draw() {
  // Colors
  var blue = color(0, 221, 255),
      green = color(85, 255, 0),
      yellow = color(255, 242, 0),
      darkgreen = color(0, 128, 4),
      brown = color(66, 21, 21);
  
  // Layers
  var l1c = [0+((mouseX-(displayWidth/2))/145),0+((mouseY-(displayHeight/2))/145)],
      l2c = [0+((mouseX-(displayWidth/2))/65),0+((mouseY-(displayHeight/2))/65)],
      l3c = [0+((mouseX-(displayWidth/2))/25),0+((mouseY-(displayHeight/2))/25)],
      l4c = [0+((mouseX-(displayWidth/2))/5),0+((mouseY-(displayHeight/2))/5)];
  
  // Background Color
  background(blue);
  
  // Layer 1
  strokeWeight(1);
  fill(yellow);
  ellipse(l1c[0]+displayWidth-50, l1c[1]+50, 75);
  
  // Layer 2
  fill(randcolor1);
  triangle(l2c[0]+(displayWidth/2),l2c[1]+(displayHeight/5),l2c[0]+(displayWidth-(displayWidth/10)),l2c[1]+displayHeight,l2c[0]+(displayWidth/10),l2c[1]+displayHeight);

  // Layer 3
  fill(randcolor2);
  triangle(l3c[0]+(displayWidth/5),l3c[1]+(displayHeight/(500/150)),l3c[0]+(displayWidth/(500/325)),l3c[1]+displayHeight,l3c[0]-(displayWidth/4),l3c[1]+displayHeight);
  fill(randcolor3);
  triangle(l3c[0]+(displayWidth/1.25),l3c[1]+(displayHeight/(500/150)),l3c[0]+(displayWidth/0.8),l3c[1]+displayHeight,l3c[0]+(displayWidth/(500/175)),l3c[1]+displayHeight);

  // Layer 4
  fill(green);
  rect(l4c[0]-(displayWidth/5),l4c[1]+(displayHeight/1.25),(displayWidth/(500/700)), displayHeight/2.5);
  var num = displayWidth/4;
  for (i=0;i<num;i++) {
    rect(i*((displayWidth/(500/700))/num)+l4c[0]-(displayWidth/5),l4c[1]+(displayHeight/(500/375)),(displayWidth/(500/700))/(2*num),(displayHeight/20));
  }
  fill(brown);
  rect(l4c[0]+(displayWidth/(500/350)),l4c[1]+(displayHeight/(500/350)),(displayWidth/(500/26)),(displayHeight/5));
  fill(darkgreen);
  ellipse(l4c[0]+(displayWidth/(500/363)),l4c[1]+(displayHeight/(500/325)),(displayWidth/10),(displayHeight/(500/150)));
  
  // Birds
  strokeWeight(4);
  // Bird1
  line(bird[0],bird[1]+200,bird[0]-40,bird[1]+190);
  line(bird[0],bird[1]+200,bird[0]+40,bird[1]+190);
  // Bird2
  line(bird[0]-100,bird[1]+175,bird[0]-140,bird[1]+165);
  line(bird[0]-100,bird[1]+175,bird[0]-60,bird[1]+165);
  // Bird3
  line(bird[0]-200,bird[1]+150,bird[0]-240,bird[1]+140);
  line(bird[0]-200,bird[1]+150,bird[0]-160,bird[1]+140);
  // Bird4
  line(bird[0]-300,bird[1]+125,bird[0]-340,bird[1]+115);
  line(bird[0]-300,bird[1]+125,bird[0]-260,bird[1]+115);
  // Bird5
  line(bird[0]-400,bird[1]+100,bird[0]-440,bird[1]+90);
  line(bird[0]-400,bird[1]+100,bird[0]-360,bird[1]+90);
  // Move the Birds
  if (bird[0] >= (displayWidth/(500/950))){
    bird[0] = -50;
  } else {
    bird[0]+=10;
  }
}

function windowResized() {
  resizeCanvas(displayWidth, displayHeight);
}