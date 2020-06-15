/*
The case of the slippery Minsky brothers
Stage 1: Gates Bank

Officer: 4378685
CaseNum: 302-0-72240623-4378685

The Slippery Minsky brothers are notorious cat burglars.
I’ve been trying to catch them for years but they are masters of escape, hence their nickname.
I’ve had a tip off that Sergey Minsky is breaking into the Gates Bank tonight.
Head down there and catch him in the act.


- Edit startX to alter the starting position of the spotlight.

- Edit endX to stop the spotlight when it reaches the target.

- Make the spotlight move perfectly from you towards Sergy by adjusting the increments of x and y.
  If you get everything correct then it will stop over the target.

- Adjust x and y using

 * "+=" or "+"
 * "-=" or "-"

*/

// edit the variables below to change where the spotlight starts and finishes
var startX;
var endX;

// other variables, you don't need to change these
var img, spotlight_image;

var x;
var y;

	function preload()
	{
		img = loadImage('scene.png');
		spotlight_image = loadImage('spotlight.png');
	}

function setup()
{
	createCanvas(img.width, img.height);

	//Initialize x with the start value
    
    x = 304;
    y = 114;
    
    startX = 304;
    endX = 820;
}

function draw()
{
	image(img, 0, 0);

	// alter the variable x below to animate the spotlight
    
    x = x + 5;

	////////// DO NOT CHANGE ANYTHING BELOW /////////////

	//stop the spotlight if it's near enough to endx and endy
	if (abs(endX - x) < 30)
	{
		x = endX;
	}

	y = 114;

	//stop the spotlight if it goes off of the screen
	x = min(x, 960);
	x = max(x, 304);

	var spotlightSize = 180;

	blendMode(BLEND);
	background(10);
	image(spotlight_image, x-spotlightSize/2, y-spotlightSize/2, spotlightSize, spotlightSize);
	blendMode(DARKEST);
	image(img, 0, 0);

	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
