/*
The case of the Python Syndicate
Stage 4

Officer: 4378685
CaseNum: 301-3-90983861-4378685

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var robbieKrayImg;
var cecilKarpinskiImg;
var annaKarpinskiImg;
var pawelKarpinskiImg;
var linaLovelaceImg;
var countessHamiltonImg;

var pawelKarpinskiObject;


//declare your new objects below


var robbieKrayCoordX = 115;
var robbieKrayCoordY = 40;
var cecilKarpinskiCoordX = 408;
var cecilKarpinskiCoordY = 40;
var annaKarpinskiCoordX = 701;
var annaKarpinskiCoordY = 40;
var linaLovelaceCoordX = 408;
var linaLovelaceCoordY = 309;
var countessHamiltonCoordX = 701;
var countessHamiltonCoordY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImg = loadImage("krayBrothers2.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	linaLovelaceImg = loadImage("lina.png");
	countessHamiltonImg = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	pawelKarpinskiObject = {
		x: 115,
		y: 309,
		image: pawelKarpinskiImg
	};
    
    robbieKrayObject = {
        x: 115,
        y: 40,
        image: robbieKrayImg
    };
    
    cecilKarpinskiObject = {
        x: 408,
        y: 40,
        image: cecilKarpinskiImg
    };
    
    annaKarpinskiObject = {
        x: 701,
        y: 40,
        image: annaKarpinskiImg
    };
    
    linaLovelaceObject = {
        x: 408,
        y: 309,
        image: linaLovelaceImg
    };
    
    countessHamiltonObject = {
        x: 701,
        y: 309,
        image: countessHamiltonImg
    };



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(pawelKarpinskiObject.image, pawelKarpinskiObject.x, pawelKarpinskiObject.y);
	image(linaLovelaceObject.image, linaLovelaceObject.x, linaLovelaceObject.y);
	image(countessHamiltonObject.image, countessHamiltonObject.x, countessHamiltonObject.y);


}