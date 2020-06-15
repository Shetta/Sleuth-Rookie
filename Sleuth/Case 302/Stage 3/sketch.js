/*
The case of the slippery Minsky brothers
Stage 3: Gate’s Department Store

Officer: 4378685
CaseNum: 302-2-48709506-4378685

There’s been a break in at Gate’s Department Store. I suspect that it’s Marvin, the eldest Minsky. Catch this Minsky in the act and you’ll have the whole gang behind bars.

- Edit the spotlight object by creating x and y properties initialised to your location. Also endX and endY properties initialised to Marvin's location

- Make the spotlight move perfectly from you towards Marvin by adjusting the increments of the x and y properties.
  If you get everything correct then it will stop over the target.

  - Adjust x and y properties using

 * "+=" or "+"
 * "-=" or "-"

*/


// other variables, you don't need to change these
var img, spotlight_image;

var spotlight;


function preload()
{
	img = loadImage('scene.png');


	spotlight_image = loadImage('spotlight.png')

}

function setup()
{
	createCanvas(img.width, img.height);

	//Initialise the spotlight object
  //with properties x, y, endX and endY
    
    spotlight = {
        image: spotlight_image,
        x: 773,
        y: 750,
        endX: 370,
        endY: 573,
    };
}

function draw()
{
	image(img, 0, 0);

	// alter the object properties x and y below to animate the spotlight

    spotlight.x = spotlight.x - 1;
    spotlight.y = spotlight.y - 1;
    
	////////// DO NOT CHANGE ANYTHING BELOW /////////////

    //stop the spotlight if it goes off of the screen
    spotlight.x = min(spotlight.x, spotlight.x);
    spotlight.y = min(spotlight.y, spotlight.y);
    spotlight.x = max(spotlight.x, spotlight.endX);
    spotlight.y = max(spotlight.y, spotlight.endY);

    if (abs(spotlight.endX - spotlight.x) < 50
        && abs(spotlight.endY - spotlight.y) < 50)
    {
        spotlight.x = spotlight.endX;
        spotlight.y = spotlight.endY;
    }

	var spotlightSize = 180;

	blendMode(BLEND);
	background(10);
	image(spotlight.image, spotlight.x-spotlightSize/2,
			spotlight.y-spotlightSize/2, spotlightSize, spotlightSize);
	blendMode(DARKEST);
	image(img, 0, 0);

	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
