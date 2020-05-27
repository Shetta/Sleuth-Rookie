/*

Officer: 4378685
CaseNum: 202-3-95438238-4378685

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Saddle Brown filled text with a Aqua outline in RonsFont font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(627,476);
	textSize(30);
}

function draw()
{
	background(255);

	push();
	fill(138,43,226);
	stroke(124,252,0);
	textFont(Diggity);
	//text("send", 450,156);
	pop();
	fill(139,69,19);
	stroke(0,255,255);
	textFont(RonsFont);
	text("I", 371,156);
	text("safe", 503,122);
	fill(128,128,0);
	stroke(124,252,0);
	textFont(Ballpointprint);
	//text("short", 127,156);
	fill(34,139,34);
	stroke(0,255,0);
	//text("You", 25,254);
	fill(178,34,34);
	stroke(154,205,50);
	textFont(RonsFont);
	//text("sort", 125,122);
	fill(173,216,230);
	stroke(25,25,112);
	textFont(Melissa);
	//text("silence.", 525,224);
	push();
	fill(148,0,211);
	stroke(75,0,130);
	//text("sho", 352,90);
	pop();
	fill(255,105,180);
	//text("urs,", 97,314);
	fill(153,50,204);
	stroke(127,255,0);
	textFont(Ballpointprint);
	//text("Are", 25,156);
	fill(178,34,34);
	stroke(0,0,205);
	textFont(Melissa);
	//text("cash.", 505,156);
	fill(165,42,42);
	stroke(0,128,0);
	//text("more", 128,224);
	push();
	fill(106,90,205);
	stroke(0,139,139);
	//text("sure", 566,189);
	pop();
	stroke(210,105,30);
	textFont(RonsFont);
	//text("can", 16,189);
	fill(127,255,212);
	stroke(148,0,211);
	textFont(Melissa);
	//text("sometimes.", 280,254);
	fill(147,112,219);
	stroke(165,42,42);
	textFont(RonsFont);
	//text("we", 307,90);
	fill(123,104,238);
	stroke(160,82,45);
	textFont(Diggity);
	//text("these", 261,189);
	fill(30,144,255);
	stroke(153,50,204);
	//text("relationship", 389,122);
	fill(0,0,255);
	stroke(0,255,255);
	textFont(RonsFont);
	//text("a", 545,90);
	push();
	fill(255,255,0);
	stroke(160,82,45);
	textFont(Melissa);
	//text("Is", 330,122);
	pop();
	stroke(153,50,204);
	textFont(Diggity);
	//text("darling", 65,30);
	fill(176,224,230);
	stroke(0,139,139);
	textFont(RonsFont);
	//text("so,", 329,156);
	push();
	fill(219,112,147);
	stroke(184,134,11);
	textFont(Ballpointprint);
	//text("longer", 101,189);
	pop();
	fill(107,142,35);
	stroke(160,82,45);
	textFont(Melissa);
	//text("yo", 77,314);
	fill(233,150,122);
	stroke(199,21,133);
	textFont(Ballpointprint);
	//text("can", 203,224);
	fill(0,255,0);
	stroke(128,0,128);
	//text("secrets,", 381,224);
	fill(255,0,255);
	stroke(107,142,35);
	//text("My", 17,30);
	fill(255,140,0);
	stroke(0,0,128);
	//text("much", 65,224);
	fill(199,21,133);
	stroke(153,50,204);
	textFont(Melissa);
	//text("?", 287,156);
	fill(205,133,63);
	stroke(128,0,128);
	textFont(Ballpointprint);
	//text("ignore", 180,189);
	push();
	fill(255,127,80);
	stroke(255,140,0);
	textFont(Diggity);
	//text("If", 303,156);
	pop();
	fill(240,230,140);
	textFont(Diggity);
	//text("?", 318,224);
	push();
	fill(148,0,211);
	stroke(139,0,139);
	textFont(Melissa);
	//text("you", 63,90);
	pop();
	fill(124,252,0);
	stroke(255,69,0);
	//text("I'm", 483,189);
	push();
	fill(100,149,237);
	stroke(255,0,255);
	textFont(Melissa);
	//text("Perhaps", 232,90);
	pop();
	fill(255,99,71);
	//text("oney", 233,156);
	fill(148,0,211);
	stroke(0,0,128);
	textFont(Melissa);
	//text("of", 191,156);
	push();
	fill(138,43,226);
	stroke(255,165,0);
	textFont(RonsFont);
	//text("this", 190,122);
	pop();
	fill(255,0,0);
	textFont(Ballpointprint);
	//text("not", 522,189);
	fill(218,112,214);
	stroke(127,255,0);
	textFont(Melissa);
	//text("and", 90,122);
	push();
	fill(238,232,170);
	stroke(0,128,128);
	//text("away", 443,90);
	pop();
	fill(255,69,0);
	textFont(Diggity);
	//text("so", 131,254);
	fill(72,209,204);
	stroke(220,20,60);
	textFont(RonsFont);
	//text("are", 77,254);
	push();
	fill(238,232,170);
	stroke(199,21,133);
	textFont(Diggity);
	//text("no", 68,189);
	pop();
	stroke(255,0,255);
	textFont(Diggity);
	//text("you", 83,156);
	fill(255,255,0);
	stroke(139,69,19);
	//text("m", 217,156);
	fill(244,164,96);
	stroke(0,255,255);
	textFont(Melissa);
	//text("me", 180,90);
	fill(0,0,139);
	stroke(139,69,19);
	textFont(RonsFont);
	//text("all", 245,122);
	fill(139,69,19);
	stroke(139,0,139);
	textFont(Melissa);
	//text("uld", 382,90);
	push();
	fill(139,0,0);
	stroke(255,165,0);
	textFont(Ballpointprint);
	//text("out.", 282,122);
	pop();
	stroke(0,255,255);
	textFont(RonsFont);
	text("the", 477,224);
	text("break", 13,122);
	text("take", 250,224);
	fill(199,21,133);
	stroke(75,0,130);
	textFont(Melissa);
	//text("?", 563,122);
	fill(139,69,19);
	stroke(0,255,255);
	textFont(RonsFont);
	text("can", 398,156);
	fill(0,255,127);
	stroke(0,255,127);
	textFont(Melissa);
	//text("Bob,", 136,30);
	fill(72,209,204);
	stroke(255,140,0);
	//text("Daisy", 7,374);
	fill(255,0,255);
	stroke(0,255,255);
	textFont(Ballpointprint);
	//text("continual", 326,189);
	stroke(255,0,255);
	textFont(Melissa);
	//text("Forever", 7,314);
	fill(128,128,0);
	stroke(148,0,211);
	textFont(RonsFont);
	//text("ed", 240,254);
	fill(178,34,34);
	stroke(160,82,45);
	textFont(Melissa);
	//text("our", 357,122);
	fill(255,0,255);
	stroke(0,128,0);
	//text("I", 554,156);
	fill(139,69,19);
	stroke(0,255,255);
	textFont(RonsFont);
	text("guard", 163,254);
	fill(0,255,0);
	stroke(107,142,35);
	textFont(Melissa);
	//text("The", 341,224);
	fill(147,112,219);
	stroke(0,128,0);
	textFont(RonsFont);
	//text("x", 61,374);
	fill(128,128,0);
	stroke(75,0,130);
	//text("go", 408,90);
	push();
	fill(127,255,212);
	stroke(154,205,50);
	textFont(Diggity);
	//text("how", 14,224);
	pop();
	fill(34,139,34);
	stroke(0,255,255);
	//text("?", 210,90);
	fill(210,105,30);
	stroke(0,255,0);
	textFont(Ballpointprint);
	//text("for", 496,90);
	fill(138,43,226);
	stroke(0,255,255);
	textFont(RonsFont);
	//text("Are", 7,90);
	stroke(255,69,0);
	textFont(Melissa);
	//text("delays.", 421,189);
	push();
	fill(0,100,0);
	stroke(255,140,0);
	textFont(Diggity);
	//text("avoiding", 97,90);
	pop();
	fill(210,105,30);
	stroke(255,215,0);
	textFont(RonsFont);
	//text("I", 176,224);



}
