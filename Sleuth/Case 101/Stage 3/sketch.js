/*

Officer: 4378685
CaseNum: 101-2-64493160-4378685

Case 101 - The Case of Lina Lovelace
Stage 3 - The Docks

You’ve followed Lina down to the docks. She sure frequents some classy places.
Okay let’s see who she’s meeting down there.

Identify Lina by drawing a Dark Cyan filled rectangle around her.
She’s the woman in the red dress of course.

Identify the heavy-set man in the fishing overalls by drawing a Dark Red filled
rectangle around him.

Identify the man in the striped top by drawing a Blue Violet filled rectangle around
him.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	noStroke();
}

function draw()
{
	image(img,0,0);

    fill(0, 139, 139, 100);
    rect(320, 174, 210, 440);
    
    fill(139, 0, 0, 100);
    rect(691, 227, 371, 394);
    
    fill(138, 43, 226, 100);
    rect(16, 205, 164, 450);

}
