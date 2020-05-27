/*
The case of the Python Syndicate
Stage 1

Officer: 4378685
CaseNum: 301-0-65384452-4378685

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var countessHamiltonImg;
var pawelKarpinskiImg;
var cecilKarpinskiImg;
var annaKarpinskiImg;
var robbieKrayImg;
var bonesKarpinskiImg;



//declare your new variables below
var cecilKarpinskiXPos = 701;
var cecilKarpinskiYPos = 40;

var countessHamiltonXPos = 115;
var countessHamiltonYPos = 40;

var pawelKarpinskiXPos = 408;
var pawelKarpinskiYPos = 40;

var annaKarpinskiXPos = 115;
var annaKarpinskiYPos = 309;

var robbieKrayXPos = 408;
var robbieKrayYPos = 309;

var bonesKarpinskiXPos = 701;
var bonesKarpinskiYPos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	countessHamiltonImg = loadImage("countessHamilton.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	robbieKrayImg = loadImage("krayBrothers2.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(cecilKarpinskiImg, cecilKarpinskiXPos, cecilKarpinskiYPos);
    
	image(countessHamiltonImg, countessHamiltonXPos, countessHamiltonYPos);
    
	image(pawelKarpinskiImg, pawelKarpinskiXPos, pawelKarpinskiYPos);
    
	image(annaKarpinskiImg, annaKarpinskiXPos, annaKarpinskiYPos);
    
	image(robbieKrayImg, robbieKrayXPos, robbieKrayYPos);
    
	image(bonesKarpinskiImg, bonesKarpinskiXPos, bonesKarpinskiYPos);

}