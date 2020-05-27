/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 4378685
CaseNum: 201-3-78866689-4378685

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

   beginShape();
    vertex(639, 398);
    vertex(605, 382);
    vertex(520, 388);
    vertex(501, 421);
    vertex(482, 438);
    vertex(418, 439);
    vertex(372, 393);
    vertex(363, 357);
    vertex(336, 340);
    vertex(316, 367);
    vertex(320, 368);
    vertex(294, 387);
    vertex(296, 365);
    vertex(327, 312);
    vertex(377, 320);
    vertex(388, 212);
    vertex(379, 136);
    vertex(405, 130);
    vertex(407, 97);
    vertex(409, 67);
    vertex(445, 50);
    vertex(442, 120);
    vertex(453, 69);
    vertex(456, 71);
    vertex(510, 46);
    vertex(501, 73);
    vertex(476, 106);
    vertex(517, 95);
    vertex(504, 245);
    vertex(485, 354);
    vertex(617, 356);
    vertex(648, 379);
    vertex(642, 397);
    vertex(639, 398);
    endShape();
}
