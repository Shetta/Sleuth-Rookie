/*

Officer: 4378685
CaseNum: 401-0-62158531-4378685

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When strychnine goes above 0.55, decrement aspirin by 0.04
	- If spider_venom dips below 0.31, try increasing aspirin by 0.05
	- If spider_venom dips below 0.54, reduce ethanol by 0.04
	- If mercury goes above 0.71, increase ethanol by 0.01
	- When spider_venom dips below 0.7, reduce insulin by 0.03
	- If mercury dips below 0.52, raise insulin by 0.03


Your conditional statements should:

consider the following poisons:

	- strychnine
	- spider_venom
	- mercury


and modify the following antidotes:

	- aspirin
	- ethanol
	- insulin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var strychnine;
var spider_venom;
var mercury;


//Declare the antidote variables
var aspirin;
var ethanol;
var insulin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	strychnine = 0.5;
	spider_venom = 0.5;
	mercury = 0.5;
	aspirin = 0.5;
	ethanol = 0.5;
	insulin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
//	- When strychnine goes above 0.55, decrement aspirin by 0.04
//	- If spider_venom dips below 0.31, try increasing aspirin by 0.05
//	- If spider_venom dips below 0.54, reduce ethanol by 0.04
//	- If mercury goes above 0.71, increase ethanol by 0.01
//	- When spider_venom dips below 0.7, reduce insulin by 0.03
//	- If mercury dips below 0.52, raise insulin by 0.03

    if (strychnine > 0.55)
        {
            aspirin -= 0.04;
        }
    else if  (spider_venom < 0.31)
        {
            aspirin += 0.05;
        }
    else if (spider_venom < 0.54)
        {
            ethanol -= 0.04;
        }
    else if (mercury > 0.71)
        {
            ethanol += 0.01; 
        }
    else if (spider_venom < 0.7)
        {
            insulin -= 0.03;
        }
    else if (mercury < 0.52)
        {
            insulin += 0.03;
        }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	strychnine = nextValue(graphs[0],strychnine);
	spider_venom = nextValue(graphs[1],spider_venom);
	mercury = nextValue(graphs[2],mercury);


	aspirin = constrain(aspirin, 0, 1);
	ethanol = constrain(ethanol, 0, 1);
	insulin = constrain(insulin, 0, 1);


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
	text('strychnine: ' + nf(strychnine,1,2), 20,20);
	fill(colors[1]);
	text('spider_venom: ' + nf(spider_venom,1,2), 20,40);
	fill(colors[2]);
	text('mercury: ' + nf(mercury,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(ethanol,200,'ethanol');
	drawBar(insulin,350,'insulin');


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
