/*
The case of the Python Syndicate
Stage 2


Officer: 4378685
CaseNum: 301-1-30257620-4378685

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Lina lovelace

- The variables for Lina lovelace have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Lina lovelace for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var annaKarpinskiImg;
var linaLovelaceImg;
var pawelKarpinskiImg;
var cecilKarpinskiImg;
var rockyKrayImg;
var robbieKrayImg;


var linaLovelaceXPosition = 408;
var linaLovelaceYPosition = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	linaLovelaceImg = loadImage("lina.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	robbieKrayImg = loadImage("krayBrothers2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(linaLovelaceImg, linaLovelaceXPosition, linaLovelaceYPosition);

	image(annaKarpinskiImg, linaLovelaceXPosition - 293, linaLovelaceYPosition);
	image(pawelKarpinskiImg, linaLovelaceXPosition + 293, linaLovelaceYPosition);
	image(cecilKarpinskiImg, linaLovelaceXPosition - 293, linaLovelaceYPosition + 269);
	image(rockyKrayImg, linaLovelaceXPosition, linaLovelaceYPosition + 269);
	image(robbieKrayImg, linaLovelaceXPosition + 293, linaLovelaceYPosition + 269);

}