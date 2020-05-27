/*
The case of the Python Syndicate
Stage 3


Officer: 4378685
CaseNum: 301-2-83126109-4378685

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Bones karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Bones karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var robbieKrayImg;
var rockyKrayImg;
var cecilKarpinskiImg;
var linaLovelaceImg;
var bonesKarpinskiImg;
var annaKarpinskiImg;

var bonesKarpinskiObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImg = loadImage("krayBrothers2.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	linaLovelaceImg = loadImage("lina.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObj = {
		x: 408,
		y: 309,
		image: bonesKarpinskiImg
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiObj.image, bonesKarpinskiObj.x, bonesKarpinskiObj.y);

	image(robbieKrayImg, bonesKarpinskiObj.x - 293, bonesKarpinskiObj.y - 269);
	image(rockyKrayImg, bonesKarpinskiObj.x, bonesKarpinskiObj.y - 269);
	image(cecilKarpinskiImg, bonesKarpinskiObj.x + 293, bonesKarpinskiObj.y - 269);
	image(linaLovelaceImg, bonesKarpinskiObj.x - 293, bonesKarpinskiObj.y);
	image(annaKarpinskiImg, bonesKarpinskiObj.x + 293, bonesKarpinskiObj.y);

}