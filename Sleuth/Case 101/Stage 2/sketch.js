/*

Officer: 4378685
CaseNum: 101-1-47301785-4378685

Case 101 - The Case of Lina Lovelace
Stage 2 - The Smalltalk Speakeasy

Well well, things have gotten interesting already ! No sooner does Lina step foot
in Console City than she heads straight for Smalltalk’s. Now be careful kid, that
place is a den of iniquity. Find out who she’s meeting and then get out as soon as
you can.

First identify Lina by drawing a rectangle with a Spring Green outline around her.
She’s the woman in the red dress of course.

That woman with the cigarette and the feathered hat looks very familiar. Let’s identify her too by drawing
a rectangle with a Tomato outline around her. Make sure you include her cigarette
and feather too.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  stroke() - Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noFill();
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);
    
    stroke(0, 255, 127);
    rect(95, 118, 295, 610);
    
    stroke(255, 99, 71);
    rect(600, 61,155, 265);

}
