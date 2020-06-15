//Step 1, draw an ellipse with dist function for 106m x2 (its radius)
//Step 2, draw a rect with the collision detection method 
//Step 3, draw an else statement so when the above functions arent met it will appear.
var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    //IMAGE
    image(img,0,0);

    //If he is near the COBID
    if (dist(1040, 650, mouseX, mouseY) <= 106)
        {
            fill(0,255,0);
            ellipse(1040,650,212,212);
            console.log("We got you!");
       }
    //IF HE IS NEAR THE BLOCK
    else if (mouseX >= 1700 && mouseY >= 249 && mouseX <= 1818 && mouseY <= 308)
        {
            fill(128,128,0);
            rect(1700,249,130,60);
            console.log("WEEE WAAA WEE WAAA GLOBAL ALERT");
        }
    //IF HE IS NEAR THE NEIGHBORHOOD
    else 
        {
            fill(255,140,0);
            rect(1360, 240, 290,176);
            console.log("HE IS HERE GUYS!");
        }

    //Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
