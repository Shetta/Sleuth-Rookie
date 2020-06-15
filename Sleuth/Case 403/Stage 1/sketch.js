/*

Officer: 4378685
CaseNum: 403-0-48785269-4378685

Case 403 - Surveillance - stage 1

We are on the lookout for the criminal mastermind known as Shiffman.
Our sources tell us that they are currently heading east on Bereners-Lee Street.
I need you to sound the alarm if he crosses Adele Street.

Shiffman's position is signified by the mouse. To sound the alarm - draw a MediumBlue rectangle covering the entire map from Adele Street to the east.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  mouseX
  mouseY

*/

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
    // draw the image
    image(img,0,0);

    //Write your code below here ...
//0   0 205
    if (mouseX > 1648)
        {
            fill(0,0,205);
            rect(1648,0, img.width - 1650, img.height);
            console.log("Shiffman is Here!")
        }
    


    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
