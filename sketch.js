let bertha;
let ponyPic;
let howManyPonies = 1800;
let ponies = [];

function setup(){
	createCanvas(910, 900);
	ponyPic = loadImage('assets/me.jpg');
	bertha = new Pony();
	for (let i = 0; i < howManyPonies; i++){
		ponies[i] = new Pony();
				image(ponyPic, 500, 500);

	}
}

function draw(){
	bertha.display();
	bertha.move(100);
	for(let i = 0; i < howManyPonies; i++){
		ponies[i].move();
		ponies[i].display();


	}

}
class Pony {
	constructor(){
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(mouseX, mouseY);
		this.yspeed = random(5,0);
	}
display(){
	image(ponyPic, this.x, this.y, 75, 75);
}
move(){
	this.x = this.x + this.xspeed;
	this.y = this.y + this.yspeed;
}
}