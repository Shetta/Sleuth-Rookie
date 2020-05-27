/*

Officer: 4378685
CaseNum: 202-0-72781674-4378685

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Crimson text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(540,810);
	textFont(letterFont);
	textSize(32);
}

function draw()
{
	background(255);

	fill(222,184,135);
	//text("true", 233,401);
	fill(220,20,60);
	text("April", 348,249);
	fill(106,90,205);
	//text("my", 74,249);
	fill(255,0,255);
	//text("I", 87,96);
	//text("the", 65,436);
	//text("kisses,", 166,643);
	fill(138,43,226);
	//text("are", 12,249);
	fill(75,0,130);
	//text("Oh", 18,32);
	//text("hear", 106,172);
	fill(173,255,47);
	//text("must", 416,401);
	fill(0,139,139);
	//text("love.", 309,401);
	//text("in", 309,249);
	fill(0,0,139);
	//text("am", 130,134);
	//text("lo", 73,32);
	fill(238,232,170);
	//text("of", 101,545);
	fill(153,50,204);
	//text("I", 319,511);
	fill(255,69,0);
	//text("since", 10,511);
	//text("in", 290,134);
	fill(173,255,47);
	//text("vely", 102,32);
	//text("can", 338,511);
	fill(0,128,128);
	//text("your", 142,545);
	fill(124,252,0);
	//text("From", 431,249);
	//text("ble", 13,212);
	fill(186,85,211);
	//text("that", 14,476);
	fill(128,0,128);
	//text("is", 466,96);
	fill(173,216,230);
	//text("your", 170,476);
	//text("Daisy,", 179,32);
	fill(255,255,0);
	//text("a", 195,96);
	//text("ace,", 212,328);
	fill(147,112,219);
	//text("the", 329,134);
	//text("live", 403,436);
	//text("music", 146,212);
	fill(238,130,238);
	//text("from", 404,328);
	fill(184,134,11);
	//text("our", 104,511);
	fill(0,100,0);
	//text("am", 109,476);
	fill(220,20,60);
	text("chosen", 252,476);
	fill(0,139,139);
	//text("uckiest", 137,436);
	fill(148,0,211);
	//text("alone", 191,134);
	fill(0,128,128);
	//text("harp.", 355,212);
	fill(127,255,212);
	//text("l", 128,436);
	//text("the", 433,172);
	fill(152,251,152);
	//text("like", 367,172);
	fill(199,21,133);
	//text("the", 292,212);
	fill(0,255,255);
	//text("that", 292,289);
	fill(244,164,96);
	//text("I", 87,172);
	//text("a", 383,436);
	//text("Love", 10,643);
	fill(0,255,0);
	//text("moment", 147,289);
	fill(144,238,144);
	//text("few", 110,363);
	fill(0,0,128);
	//text("Bob", 10,707);
	fill(0,255,0);
	//text("that", 319,363);
	fill(210,105,30);
	//text("iet", 432,134);
	//text("seconds", 177,363);
	fill(220,20,60);
	text("date", 236,511);
	text("first", 74,289);
	fill(244,164,96);
	//text("confession", 225,96);
	fill(0,191,255);
	//text("that", 11,172);
	fill(0,0,255);
	//text("were", 15,401);
	fill(138,43,226);
	//text("and", 96,643);
	fill(124,252,0);
	//text("darling,", 224,545);
	fill(220,20,60);
	text("make", 106,96);
	fill(128,0,0);
	//text("voice", 271,172);
	fill(50,205,50);
	//text("of", 251,212);
	fill(160,82,45);
	//text("only", 406,511);
	fill(30,144,255);
	//text("day", 240,249);
	fill(173,216,230);
	//text("person", 263,436);
	fill(147,112,219);
	//text("one", 163,401);
	fill(255,105,180);
	//text("saw", 387,289);
	fill(147,112,219);
	//text("May", 10,96);
	fill(139,69,19);
	//text("knew", 309,328);
	fill(255,0,0);
	//text("your", 189,172);
	fill(34,139,34);
	//text("sunny", 134,249);
	fill(244,164,96);
	//text("the", 11,289);
	fill(240,128,128);
	//text("be", 15,436);
	//text("th", 10,545);
	fill(25,25,112);
	//text("you", 395,363);
	fill(0,191,255);
	//text("green", 355,545);
	fill(135,206,235);
	//text("I", 111,134);
	fill(205,133,63);
	//text("?", 407,96);
	fill(240,128,128);
	//text("last", 167,511);
	fill(244,164,96);
	//text("f", 201,328);
	//text("those", 10,363);
	fill(176,224,230);
	//text("I", 290,328);
	//text("I", 368,289);
	//text("x", 82,707);
	fill(240,230,140);
	//text("You", 448,212);
	fill(0,0,255);
	//text("I", 397,401);
	fill(65,105,225);
	//text("lovely", 95,328);
	fill(30,144,255);
	//text("It", 434,96);
	fill(205,133,63);
	//text("my", 103,401);
	//text("eyes.", 12,579);
	fill(128,0,0);
	//text("when", 15,134);
	//text("your", 13,328);
	//text("qu", 392,134);
	fill(139,0,139);
	//text("Ever", 377,476);
	//text("ssed", 62,212);
	fill(0,255,127);
	//text("ink", 43,545);
	fill(139,0,139);
	//text("I", 90,476);

}
