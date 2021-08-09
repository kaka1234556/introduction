function preload()
{}

function setup()
{
canvas = createCanvas(800,450);
canvas.position(110,150);
video = createCapture(VIDEO);
video.hide()

}

function draw()
{
    
image(video,0,0,750,500);

fill(255,0,0);
stroke(255,0,0);
circle(750, 425, 50);

fill(0,128,0);
stroke(0,128,0);
rect(725,45,50,355);

fill(255,0,0);
stroke(255,0,0);
circle(750,25, 50);



fill(255,0,0);
stroke(255,0,0);
circle(20, 425, 50);

fill(0,128,0);
stroke(0,128,0);
rect(0,45,50,355);

fill(255,0,0);
stroke(255,0,0);
circle(20,25, 50);

fill(0,128,0);
stroke(0,128,0);
rect(45,3,680,50);

fill(0,128,0);
stroke(0,128,0);
rect(45,400,680,50);

}

function take_snapshot()
{
save("stylish_photo.png");

}
