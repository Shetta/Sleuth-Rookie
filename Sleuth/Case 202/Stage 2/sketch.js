/*

Officer: 4378685
CaseNum: 202-1-31511686-4378685

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Burly Wood filled text with a Sienna outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(517,394);
	textFont(letterFont);
	textSize(21);
}

function draw()
{
	background(255);

	fill(154,205,50);
	stroke(139,0,139);
	//text("will", 223,229);
	fill(128,128,0);
	stroke(255,255,0);
	//text("side,", 204,183);
	fill(255,165,0);
	stroke(0,128,128);
	//text("I'm", 350,134);
	fill(255,140,0);
	stroke(75,0,130);
	//text("ound", 272,63);
	fill(139,69,19);
	stroke(218,165,32);
	//text("can", 116,134);
	fill(135,206,250);
	stroke(50,205,50);
	//text("do", 306,206);
	fill(165,42,42);
	stroke(199,21,133);
	//text("How", 7,63);
	fill(152,251,152);
	stroke(0,250,154);
	//text("ll", 350,183);
	fill(178,34,34);
	stroke(127,255,0);
	//text("How", 443,63);
	fill(160,82,45);
	//text("again", 408,229);
	stroke(178,34,34);
	//text("without", 7,183);
	fill(139,0,0);
	stroke(184,134,11);
	//text("long", 450,85);
	fill(127,255,0);
	stroke(75,0,130);
	//text("arms.", 198,109);
	fill(0,255,255);
	stroke(255,0,0);
	//text("ger", 264,206);
	fill(255,69,0);
	stroke(34,139,34);
	//text("hs", 126,85);
	fill(65,105,225);
	stroke(255,69,0);
	//text("to", 8,109);
	fill(0,0,139);
	stroke(127,255,0);
	//text("darling", 42,21);
	fill(0,255,255);
	stroke(255,140,0);
	//text("my", 159,109);
	fill(220,20,60);
	stroke(0,100,0);
	//text("this", 9,229);
	fill(0,255,127);
	stroke(25,25,112);
	//text("ted", 367,229);
	fill(160,82,45);
	stroke(0,255,255);
	//text("I", 265,109);
	fill(144,238,144);
	stroke(0,0,139);
	//text("longing", 54,229);
	fill(255,255,0);
	stroke(255,0,255);
	//text("of", 271,134);
	fill(160,82,45);
	stroke(139,69,19);
	//text("the", 400,109);
	fill(139,0,139);
	stroke(0,0,128);
	//text("turn.", 176,157);
	fill(65,105,225);
	stroke(0,128,128);
	//text("your", 44,157);
	fill(138,43,226);
	stroke(0,139,139);
	//text("in", 291,157);
	fill(0,0,139);
	stroke(199,21,133);
	//text("re", 154,157);
	fill(138,43,226);
	stroke(46,139,87);
	//text("Even", 233,157);
	fill(72,209,204);
	stroke(0,0,139);
	//text("only", 220,134);
	fill(147,112,219);
	stroke(139,0,0);
	//text("night", 441,109);
	fill(255,215,0);
	stroke(127,255,0);
	//text("miss", 73,63);
	fill(184,134,11);
	stroke(165,42,42);
	//text("I", 339,206);
	stroke(153,50,204);
	//text("When", 156,229);
	fill(240,230,140);
	stroke(32,178,170);
	//text("ar", 250,63);
	fill(135,206,235);
	stroke(0,255,255);
	//text("since", 202,85);
	fill(255,99,71);
	stroke(148,0,211);
	//text("and", 57,134);
	fill(72,209,204);
	stroke(139,0,0);
	//text("at", 137,183);
	fill(178,34,34);
	stroke(255,255,0);
	//text("I", 60,63);
	fill(124,252,0);
	stroke(165,42,42);
	//text("you.", 298,134);
	fill(222,184,135);
	stroke(160,82,45);
	text("swift", 98,157);
	fill(218,112,214);
	stroke(0,128,0);
	//text("last", 301,85);
	fill(210,105,30);
	stroke(34,139,34);
	//text("be", 302,229);
	fill(244,164,96);
	stroke(218,165,32);
	//text("I", 437,85);
	fill(128,0,128);
	stroke(0,0,128);
	//text("this", 261,183);
	fill(72,209,204);
	stroke(0,0,205);
	//text("I", 103,134);
	fill(222,184,135);
	stroke(255,140,0);
	//text("yours,", 94,271);
	//text("many", 7,85);
	fill(127,255,0);
	stroke(165,42,42);
	//text("kissed", 346,85);
	fill(138,43,226);
	stroke(153,50,204);
	//text("?", 473,229);
	fill(135,206,250);
	stroke(139,0,0);
	//text("place.", 372,63);
	fill(250,128,114);
	stroke(124,252,0);
	//text("much", 167,206);
	fill(0,0,139);
	stroke(178,34,34);
	//text("my", 165,183);
	fill(144,238,144);
	stroke(0,0,205);
	//text("you", 92,183);
	fill(255,0,255);
	stroke(154,205,50);
	//text("it", 181,85);
	fill(255,105,180);
	stroke(25,25,112);
	//text("Bob,", 122,21);
	fill(0,191,255);
	stroke(34,139,34);
	//text("sma", 306,183);
	fill(148,0,211);
	stroke(0,255,127);
	//text("in", 133,109);
	fill(25,25,112);
	stroke(255,165,0);
	//text("you", 205,63);
	fill(0,0,205);
	stroke(75,0,130);
	//text("we", 265,229);
	fill(233,150,122);
	stroke(0,0,139);
	//text("ink", 182,134);
	fill(250,128,114);
	stroke(255,255,0);
	//text("x", 72,313);
	fill(255,215,0);
	stroke(0,206,209);
	//text("Forever", 7,271);
	fill(199,21,133);
	stroke(178,34,34);
	//text("the", 317,157);
	fill(127,255,0);
	stroke(34,139,34);
	//text("mont", 72,85);
	fill(147,112,219);
	stroke(210,105,30);
	//text("desolate.", 10,206);
	fill(152,251,152);
	stroke(0,0,255);
	//text("uni", 335,229);
	fill(0,128,0);
	stroke(255,255,0);
	//text("spring,", 358,157);
	fill(0,128,128);
	stroke(0,255,0);
	//text("?", 419,85);
	fill(222,184,135);
	stroke(160,82,45);
	text("at", 372,109);
	text("up", 339,109);
	text("hold", 36,109);
	fill(0,191,255);
	stroke(255,165,0);
	//text("f", 427,183);
	fill(173,255,47);
	stroke(127,255,0);
	//text("stare", 278,109);
	fill(25,25,112);
	stroke(34,139,34);
	//text("having", 128,63);
	fill(152,251,152);
	stroke(0,128,128);
	//text("we", 264,85);
	fill(222,184,135);
	stroke(160,82,45);
	text("town", 369,183);
	text("store", 438,206);
	fill(50,205,50);
	stroke(34,139,34);
	//text("My", 5,21);
	fill(65,105,225);
	stroke(128,0,128);
	//text("banking", 389,134);
	fill(0,139,139);
	//text("is", 157,85);
	fill(0,128,0);
	stroke(160,82,45);
	//text("you", 88,109);
	fill(75,0,130);
	stroke(178,34,34);
	//text("How", 114,206);
	fill(210,105,30);
	stroke(160,82,45);
	//text("lon", 232,206);
	fill(128,0,0);
	stroke(0,0,128);
	//text("have", 352,206);
	fill(0,128,128);
	stroke(0,206,209);
	//text("the", 331,63);
	fill(255,215,0);
	//text("sky,", 9,134);
	fill(0,0,255);
	stroke(148,0,211);
	//text("on", 11,157);
	fill(135,206,250);
	stroke(0,255,127);
	//text("eels", 434,183);
	fill(127,255,0);
	stroke(255,0,0);
	//text("?", 138,229);
	fill(165,42,42);
	stroke(0,255,127);
	//text("Daisy", 7,313);
	fill(127,255,0);
	stroke(255,0,0);
	//text("th", 161,134);
	fill(127,255,212);
	stroke(0,255,255);
	//text("to", 410,206);



}
