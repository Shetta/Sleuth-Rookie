/*

Officer: 4378685
CaseNum: 401-1-96292073-4378685

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When arsenic goes above 0.36 and ricin goes above 0.5, decrease antitoxin by 0.05
	- If sarin dips below 0.48, increase antitoxin by 0.04
	- If warfarin dips below 0.37, try decreasing aspirin by 0.03
	- If ricin dips below 0.51 or arsenic goes above 0.34, increase aspirin by 0.04
	- If arsenic dips below 0.52 and ricin goes above 0.54, decrement insulin by 0.03
	- When warfarin goes above 0.69 and sarin dips below 0.56, raise insulin by 0.01
	- If sarin dips below 0.4, reduce paracetamol by 0.03
	- When arsenic dips below 0.51, raise paracetamol by 0.03


Your conditional statements should:

consider the following poisons:

	- warfarin
	- arsenic
	- sarin
	- ricin


and modify the following antidotes:

	- antitoxin
	- aspirin
	- insulin
	- paracetamol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var warfarin;
var arsenic;
var sarin;
var ricin;


//Declare the antidote variables
var antitoxin;
var aspirin;
var insulin;
var paracetamol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	warfarin = 0.5;
	arsenic = 0.5;
	sarin = 0.5;
	ricin = 0.5;
	antitoxin = 0.5;
	aspirin = 0.5;
	insulin = 0.5;
	paracetamol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
//    	- When arsenic goes above 0.36 and ricin goes above 0.5, decrease antitoxin by 0.05
//	- If sarin dips below 0.48, increase antitoxin by 0.04
//	- If warfarin dips below 0.37, try decreasing aspirin by 0.03
//	- If ricin dips below 0.51 or arsenic goes above 0.34, increase aspirin by 0.04
//	- If arsenic dips below 0.52 and ricin goes above 0.54, decrement insulin by 0.03
//	- When warfarin goes above 0.69 and sarin dips below 0.56, raise insulin by 0.01
//	- If sarin dips below 0.4, reduce paracetamol by 0.03
//	- When arsenic dips below 0.51, raise paracetamol by 0.03
//    
    
    if (arsenic > 0.36 && ricin > 0.5)
        {
            antitoxin -= 0.05;
        }
    if (sarin < 0.48)
        {
            antitoxin += 0.04;
        }
    if (warfarin < 0.37)
        {
            aspirin -= 0.03;
        }
    if (ricin < 0.52 || arsenic > 0.34)
        {
            aspirin += 0.04;
        }
    if (arsenic < 0.52 && ricin > 0.54)
        {
            insulin -= 0.03;
        }
     if (warfarin > 0.69 && sarin < 0.56)
        {
            insulin += 0.01;
        }
     if (sarin < 0.4)
        {
            paracetamol -= 0.03;
        }
     if (arsenic < 0.51)
        {
            paracetamol += 0.03;
        }
    
    

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	warfarin = nextValue(graphs[0],warfarin);
	arsenic = nextValue(graphs[1],arsenic);
	sarin = nextValue(graphs[2],sarin);
	ricin = nextValue(graphs[3],ricin);


	antitoxin = constrain(antitoxin, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	insulin = constrain(insulin, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('warfarin: ' + nf(warfarin,1,2), 20,20);
	fill(colors[1]);
	text('arsenic: ' + nf(arsenic,1,2), 20,40);
	fill(colors[2]);
	text('sarin: ' + nf(sarin,1,2), 20,60);
	fill(colors[3]);
	text('ricin: ' + nf(ricin,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(antitoxin,50,'antitoxin');
	drawBar(aspirin,200,'aspirin');
	drawBar(insulin,350,'insulin');
	drawBar(paracetamol,500,'paracetamol');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
