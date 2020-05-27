/*

Officer: 4378685
CaseNum: 101-3-52377952-4378685

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Blue filled rectangle with a Magenta outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Royal Blue filled
rectangle with a Medium Purple outline around him.

Identify the man reading the newspaper by drawing a Slate Blue filled rectangle
with a Royal Blue outline around him.

Identify the woman with the dog by drawing a Medium Spring Green filled rectangle with a
Green outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	fill(0, 0, 255, 100);
    stroke(255, 0, 255);
    rect(487, 78, 248, 523);
    
    fill(65, 105, 225, 100);
    stroke(147, 112, 219);
    rect(24, 188, 89, 114);
    
    fill(106, 90, 205, 100);
    stroke(65, 105, 225);
    rect(175, 131, 80, 164);
    
    fill(0, 250, 154, 100);
    stroke(0, 128, 0);
    rect(1133, 88, 246, 530);

}
