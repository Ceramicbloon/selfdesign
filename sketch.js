

var player, crosshair, bullet

function preload() {

}

function setup() {
	createCanvas(800, 800);
	crosshair = createSprite(-100, -100, 20, 20)


	player = createSprite(200, 200, 20, 20)

	//Create the Bodies Here.



}


function draw() {
	rectMode(CENTER);
	background(0);
	crosshair.x = mouseX
	crosshair.y = mouseY
	if (keyDown("W")) {
		player.y = player.y - 5
	} if (keyDown("A")) {
		player.x = player.x - 5
	} if (keyDown("S")) {
		player.y = player.y + 5
	} if (keyDown("D")) {
		player.x = player.x + 5
	}

	stroke(255)
	var lins = line(player.x, player.y, mouseX, mouseY)

	drawSprites();
	if (mousePressedOver(crosshair)) {
		bullet = createSprite(player.x, player.y, 20, 20)
		bullet.setVelocity(1, 1)
		bullet.x = crosshair.x
		bullet.y = crosshair.y

	}
	console.log(crosshair.getDirection())


}



