let bertha;
let ponyPic;
let howManyPonies = 500;
let ponies = [];

function setup(){
	createCanvas(710, 400);
	ponyPic = loadImage('assets/me.jpg');
	bertha = new Pony();
	for (let i = 0; i < howManyPonies; i++){
		ponies[i] = new Pony();
	}
}

function draw(){
	bertha.display();
	bertha.move();
	for(let i = 0; i < howManyPoniesl; i++){
		ponies[i].move();
		ponies[i].display();
	}

}
class Pony {
	constructor(){
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(0,1);
		this.yspeed = random(0,1);
	}
display(){
	image(ponyPic, this.x, this.y, 75, 75);
}
move(){
	this.x = this.x + this.xspeed;
	this.y = this.y + this.yspeed;
}
}