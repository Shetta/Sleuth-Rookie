/*

Officer: 4378685
CaseNum: 401-2-61865288-4378685

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When novichok dips below 0.37 or SpiderVenom dips below 0.49, reduce aspirin by 0.03
	- When formaldehyde dips below 0.57 and strychnine dips below 0.51, increase aspirin by 0.03
	- When polonium dips below 0.26 and SpiderVenom dips below 0.67, or on the other hand, formaldehyde dips below 0.66, decrement opioids by 0.03
	- When strychnine dips below 0.74, chlorine dips below 0.66, and also novichok goes above 0.54, try increasing opioids by 0.04
	- If polonium goes above 0.49 or formaldehyde goes above 0.74, reduce protamine by 0.03
	- When SpiderVenom dips below 0.7, whilst at the same time, chlorine goes above 0.61 or strychnine dips below 0.46, try increasing protamine by 0.04
	- When novichok goes above 0.27, or on the other hand, strychnine dips below 0.33 and formaldehyde goes above 0.28, try decreasing sulphates by 0.03
	- When chlorine dips below 0.56 and polonium goes above 0.57, raise sulphates by 0.04


Your conditional statements should:

consider the following poisons:

	- novichok
	- SpiderVenom
	- polonium
	- strychnine
	- formaldehyde
	- chlorine


and modify the following antidotes:

	- aspirin
	- opioids
	- protamine
	- sulphates


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var novichok;
var SpiderVenom;
var polonium;
var strychnine;
var formaldehyde;
var chlorine;


//Declare the antidote variables
var aspirin;
var opioids;
var protamine;
var sulphates;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	novichok = 0.5;
	SpiderVenom = 0.5;
	polonium = 0.5;
	strychnine = 0.5;
	formaldehyde = 0.5;
	chlorine = 0.5;
	aspirin = 0.5;
	opioids = 0.5;
	protamine = 0.5;
	sulphates = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
    
    if (novichok < 0.37 || SpiderVenom < 0.49)
        {
            aspirin -= 0.03;
        }
    if (formaldehyde < 0.57 && strychnine < 0.51)
        {
            aspirin += 0.03;
        }
    if (polonium < 0.26 && SpiderVenom < 0.67 || formaldehyde < 0.66)
        {
            opioids -= 0.03;
        }
    if (strychnine < 0.74 && chlorine < 0.66 && novichok > 0.54)
        {
            opioids += 0.04;
        }
    if (polonium > 0.49 || formaldehyde > 0.74)
        {
            protamine -= 0.03;
        }
    if ((SpiderVenom < 0.7) && (chlorine > 0.61 || strychnine < 0.46))
        {
            protamine += 0.04;
        }
    if (novichok > 0.27 || strychnine < 0.33 & formaldehyde > 0.28)
        {
            sulphates -= 0.03;
        }
    if (chlorine < 0.56 & polonium > 0.57)
        {
            sulphates += 0.04;
        }
    
    



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	novichok = nextValue(graphs[0],novichok);
	SpiderVenom = nextValue(graphs[1],SpiderVenom);
	polonium = nextValue(graphs[2],polonium);
	strychnine = nextValue(graphs[3],strychnine);
	formaldehyde = nextValue(graphs[4],formaldehyde);
	chlorine = nextValue(graphs[5],chlorine);


	aspirin = constrain(aspirin, 0, 1);
	opioids = constrain(opioids, 0, 1);
	protamine = constrain(protamine, 0, 1);
	sulphates = constrain(sulphates, 0, 1);


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
	text('novichok: ' + nf(novichok,1,2), 20,20);
	fill(colors[1]);
	text('SpiderVenom: ' + nf(SpiderVenom,1,2), 20,40);
	fill(colors[2]);
	text('polonium: ' + nf(polonium,1,2), 20,60);
	fill(colors[3]);
	text('strychnine: ' + nf(strychnine,1,2), 20,80);
	fill(colors[4]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,100);
	fill(colors[5]);
	text('chlorine: ' + nf(chlorine,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(opioids,200,'opioids');
	drawBar(protamine,350,'protamine');
	drawBar(sulphates,500,'sulphates');


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
