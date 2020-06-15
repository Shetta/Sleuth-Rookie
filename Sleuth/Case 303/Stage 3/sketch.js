/*

Officer: 4378685
CaseNum: 303-2-25224432-4378685

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make Cryptic_Locker_CombinationA equal to the value of mouseY
	- Use the 'constrain' function to prevent Cryptic_Locker_CombinationA from falling below 3 and going above 12

	Whilst the mouse is being dragged:
	- Decrement Cryptic_Locker_CombinationB by 1
	- Use the 'constrain' function to prevent Cryptic_Locker_CombinationB from falling below 3 and going above 13

	Whilst the mouse is being dragged:
	- Make Cryptic_Locker_CombinationC equal to the value of mouseX
	- Use the 'max' function to prevent Cryptic_Locker_CombinationC from falling below 4

	When any key is pressed:
	- Decrement Cryptic_Locker_CombinationD by 1
	- Use the 'max' function to prevent Cryptic_Locker_CombinationD from falling below 4

	When the mouse button is pressed:
	- Make Cryptic_Locker_CombinationE equal to the value of mouseX
	- Use the 'max' function to prevent Cryptic_Locker_CombinationE from falling below 13



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Cryptic_Locker_CombinationA;
var Cryptic_Locker_CombinationB;
var Cryptic_Locker_CombinationC;
var Cryptic_Locker_CombinationD;
var Cryptic_Locker_CombinationE;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Cryptic_Locker_CombinationA = 0;
	Cryptic_Locker_CombinationB = 0;
	Cryptic_Locker_CombinationC = 0;
	Cryptic_Locker_CombinationD = 0;
	Cryptic_Locker_CombinationE = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
function mouseMoved()
{
	console.log("mouseMoved", mouseX, mouseY);
    Cryptic_Locker_CombinationA = mouseY;
    Cryptic_Locker_CombinationA = constrain(Cryptic_Locker_CombinationA, 3, 12);
}

function mouseDragged()
{
	console.log("mouseDragged", mouseX, mouseY);
    Cryptic_Locker_CombinationB -= 1;
    Cryptic_Locker_CombinationB = constrain(Cryptic_Locker_CombinationB, 3, 13);
    Cryptic_Locker_CombinationC = mouseX;
    Cryptic_Locker_CombinationC = max(Cryptic_Locker_CombinationC, 4);
}

function mousePressed()
{
	console.log("mousePressed");
    Cryptic_Locker_CombinationE = mouseX;
    Cryptic_Locker_CombinationE = max(Cryptic_Locker_CombinationE, 13);      
}


function keyPressed()
{
	console.log("keyPressed", key);
    Cryptic_Locker_CombinationD -= 1;
    Cryptic_Locker_CombinationD = max(Cryptic_Locker_CombinationD, 4);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Cryptic_Locker_CombinationA, 17);
	pop();

	push();
	translate(120,380);
	drawDial(140,Cryptic_Locker_CombinationB, 16);
	pop();

	push();
	translate(280,170);
	drawDial(140,Cryptic_Locker_CombinationC, 21);
	pop();

	push();
	translate(280,380);
	drawDial(140,Cryptic_Locker_CombinationD, 20);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Cryptic_Locker_CombinationE);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
