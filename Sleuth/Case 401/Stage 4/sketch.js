/*

Officer: 4378685
CaseNum: 401-3-20537772-4378685

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If either mercury dips below 0.28, methanol goes above 0.72, amanita_mushrooms dips below 0.51, or perhaps chlorine goes above 0.33, try decreasing HydrochloricAcid by 0.04
	- If either nerveGas goes above 0.56, polonium goes above 0.33, or perhaps insecticide goes above 0.48, try increasing HydrochloricAcid by 0.01
	- When mercury dips below 0.27 or methanol dips below 0.25, or on the other hand, nerveGas dips below 0.27 and insecticide goes above 0.29, decrement antibodies by 0.03
	- When amanita_mushrooms goes above 0.68 and polonium goes above 0.4, or on the other hand, chlorine dips below 0.6 and botulinium dips below 0.62, increase antibodies by 0.05
	- When botulinium goes above 0.6, whilst at the same time, polonium goes above 0.54 or chlorine dips below 0.32, try decreasing aspirin by 0.01
	- When nerveGas goes above 0.65, whilst at the same time, mercury dips below 0.67 or amanita_mushrooms dips below 0.71, increase aspirin by 0.02
	- If amanita_mushrooms goes above 0.75 and methanol dips below 0.26, or on the other hand, nerveGas dips below 0.33, try decreasing protamine by 0.02
	- When polonium dips below 0.48 or insecticide dips below 0.4, whilst at the same time, botulinium goes above 0.5, raise protamine by 0.02
	- If insecticide dips below 0.64, botulinium goes above 0.5, and also mercury goes above 0.52, reduce plasma by 0.05
	- If nerveGas dips below 0.26, whilst at the same time, chlorine goes above 0.48 or amanita_mushrooms goes above 0.28, raise plasma by 0.05


Your conditional statements should:

consider the following poisons:

	- nerveGas
	- polonium
	- chlorine
	- mercury
	- botulinium
	- methanol
	- insecticide
	- amanita_mushrooms


and modify the following antidotes:

	- HydrochloricAcid
	- antibodies
	- aspirin
	- protamine
	- plasma


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var nerveGas;
var polonium;
var chlorine;
var mercury;
var botulinium;
var methanol;
var insecticide;
var amanita_mushrooms;


//Declare the antidote variables
var HydrochloricAcid;
var antibodies;
var aspirin;
var protamine;
var plasma;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	nerveGas = 0.5;
	polonium = 0.5;
	chlorine = 0.5;
	mercury = 0.5;
	botulinium = 0.5;
	methanol = 0.5;
	insecticide = 0.5;
	amanita_mushrooms = 0.5;
	HydrochloricAcid = 0.5;
	antibodies = 0.5;
	aspirin = 0.5;
	protamine = 0.5;
	plasma = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
    
//    	- If amanita_mushrooms goes above 0.75 and methanol dips below 0.26, or on the other hand, nerveGas dips below 0.33, try decreasing protamine by 0.02
//	- When polonium dips below 0.48 or insecticide dips below 0.4, whilst at the same time, botulinium goes above 0.5, raise protamine by 0.02


    if (mercury < 0.28 || methanol > 0.72 || amanita_mushrooms < 0.51 || chlorine > 0.33)
        {
            HydrochloricAcid -= 0.04;
        }
    if (nerveGas > 0.56 || polonium > 0.33 || insecticide > 0.48)
        {
            HydrochloricAcid += 0.01;
        }
    if ((mercury < 0.27 || methanol < 0.25) || (nerveGas < 0.27 && insecticide > 0.29))
        {
            antibodies -= 0.03;
        }
    if ((amanita_mushrooms > 0.68 & polonium > 0.4) || (chlorine < 0.6 && botulinium < 0.62))
        {
            antibodies += 0.05;
        }
    if ((botulinium > 0.6) && (polonium > 0.54 || chlorine < 0.32))
        {
            aspirin -= 0.01;
        }
    if ((nerveGas > 0.65) && (mercury < 0.67 || amanita_mushrooms < 0.71))
        {
            aspirin += 0.02;
        }
    if ((amanita_mushrooms > 0.75 && methanol < 0.26) || (nerveGas < 0.33))
        {
            protamine -= 0.02;
        }
    if ((polonium < 0.48 || insecticide < 0.4) && (botulinium > 0.5))
        {
            protamine += 0.02;
        }
    if (insecticide < 0.64 && botulinium > 0.5 && mercury > 0.52)
        {
            plasma -= 0.05;
        }
    if ((nerveGas < 0.26)&&(chlorine > 0.48 || amanita_mushrooms > 0.28))
        {
            plasma += 0.05;
        }
    
    
        


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	nerveGas = nextValue(graphs[0],nerveGas);
	polonium = nextValue(graphs[1],polonium);
	chlorine = nextValue(graphs[2],chlorine);
	mercury = nextValue(graphs[3],mercury);
	botulinium = nextValue(graphs[4],botulinium);
	methanol = nextValue(graphs[5],methanol);
	insecticide = nextValue(graphs[6],insecticide);
	amanita_mushrooms = nextValue(graphs[7],amanita_mushrooms);


	HydrochloricAcid = constrain(HydrochloricAcid, 0, 1);
	antibodies = constrain(antibodies, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	protamine = constrain(protamine, 0, 1);
	plasma = constrain(plasma, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('nerveGas: ' + nf(nerveGas,1,2), 20,20);
	fill(colors[1]);
	text('polonium: ' + nf(polonium,1,2), 20,40);
	fill(colors[2]);
	text('chlorine: ' + nf(chlorine,1,2), 20,60);
	fill(colors[3]);
	text('mercury: ' + nf(mercury,1,2), 20,80);
	fill(colors[4]);
	text('botulinium: ' + nf(botulinium,1,2), 20,100);
	fill(colors[5]);
	text('methanol: ' + nf(methanol,1,2), 20,120);
	fill(colors[6]);
	text('insecticide: ' + nf(insecticide,1,2), 20,140);
	fill(colors[7]);
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(HydrochloricAcid,50,'HydrochloricAcid');
	drawBar(antibodies,200,'antibodies');
	drawBar(aspirin,350,'aspirin');
	drawBar(protamine,500,'protamine');
	drawBar(plasma,650,'plasma');


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
