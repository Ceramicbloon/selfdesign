var player, crosshair, sword, d, o, a, b, lins, zumbie1, zumbie2, zumbie3, zumbie4, zumbie5, zumbie6, zumbie7, zumbie8, zumbie9, zumbie10, zgroup
var speed = 2
var money = 0
var asprite
var endSprite
var end1
var points = 0
var maceUpgrade = 0
var macePrice = 500
var playerspeed = 5
var speedUp = 0
var speedPrice = 750
var gamestate = "shop"
var dimentions = 20
var lives = 3
var ballsize = 0.2
var lifeUp = 0
var lifePrice = 10000
var moneyUp = 0
var moneyPrice = 500
var moneyAdd = 50
var zspeeddec = 0
var zspeeddecPrice = 5000
function preload() {
	end1 = loadImage("gameover.jpg")
	asprite = loadImage("bull-removebg-preview (2).png")
}


function setup() {
	createCanvas(1000, 600);
	endSprite = createSprite(500, 300, 20, 20)
	endSprite.addImage('a', end1)
	endSprite.visible = false
	crosshair = createSprite(-100, -100, 0.0000000000000000000000000000000000001, 0.000000000000000000000000001);

	player = createSprite(500, 300, 20, 20);
	sword = createSprite(player.x, player.y, 20, 20);
	//Create the Bodies Here.
	d = 0;
	endSprite.shapeColor = "black"
	zgroup = new Group()
	zumbie1 = createSprite(-50, random(0, 1000), 20, 20)
	zumbie2 = createSprite(1050, random(0, 1000), 20, 20)
	zumbie3 = createSprite(-50, random(0, 1000), 20, 20)
	zumbie4 = createSprite(1050, random(0, 1000), 20, 20)
	zumbie5 = createSprite(random(0, 600), -50, 20, 20)
	zumbie6 = createSprite(random(0, 600), 650, 20, 20)
	zumbie7 = createSprite(random(0, 600), -50, 20, 20)
	zumbie8 = createSprite(random(0, 600), 650, 20, 20)
	zumbie9 = createSprite(-50, random(0, 1000), 20, 20)
	zumbie10 = createSprite(1050, random(0, 1000), 20, 20)
	zumbie1.shapeColor = "red"
	zumbie2.shapeColor = "red"
	zumbie3.shapeColor = "red"
	zumbie4.shapeColor = "red"
	zumbie5.shapeColor = "red"
	zumbie6.shapeColor = "red"
	zumbie7.shapeColor = "red"
	zumbie8.shapeColor = "red"
	zumbie9.shapeColor = "red"
	zumbie10.shapeColor = "red"



}

function draw() {
	rectMode(CENTER);
	background(0);
	fill(255)
	textSize(13)
	if (lives === 0) {
		gamestate = "end"

	}
	if (gamestate === "end") {
		text("Game Over", 30, 30)
	}

	if (player.x > 990) {
		player.x = 990
	}
	if (player.x < 10) {
		player.x = 10
	}
	if (player.y > 590) {
		player.y = 590
	}
	if (player.y < 10) {
		player.y = 10
	}

	if (gamestate === "play") {
		sword.addImage(asprite)
		sword.scale = ballsize
		text("Money: " + money, 20, 20)
		text("Points: " + points, 20, 40)
		if (zumbie1.isTouching(player) || zumbie2.isTouching(player) || zumbie3.isTouching(player) || zumbie4.isTouching(player) || zumbie5.isTouching(player) || zumbie6.isTouching(player) || zumbie7.isTouching(player) || zumbie8.isTouching(player) || zumbie9.isTouching(player) || zumbie10.isTouching(player)) {
			zumbie1.x = -50
			zumbie2.x = 1050
			zumbie3.x = -50
			zumbie4.x = 1050
			zumbie5.y = -50
			zumbie6.y = 650
			zumbie7.y = -50
			zumbie8.y = 650
			zumbie9.x = -50
			zumbie10.x = 1050
			lives -= 1
		}
		text("Lives: " + lives, 20, 60)
		text("How to play: Kill the red squares with your weapon,  the thing attacked to your stick. Don't let the red things touch you either. Press spacebar to go to shop", 20, 80)
		if (player.x > zumbie1.x) {
			zumbie1.velocityX = speed
		} else (
			zumbie1.velocityX = -speed
		)
		if (player.y > zumbie1.y) {
			zumbie1.velocityY = speed
		} else (
			zumbie1.velocityY = -speed
		)
		if (player.x > zumbie2.x) {
			zumbie2.velocityX = speed
		} else (
			zumbie2.velocityX = -speed
		)
		if (player.y > zumbie2.y) {
			zumbie2.velocityY = speed
		} else (
			zumbie2.velocityY = -speed
		)
		if (player.x > zumbie3.x) {
			zumbie3.velocityX = speed
		} else (
			zumbie3.velocityX = -speed
		)
		if (player.y > zumbie3.y) {
			zumbie3.velocityY = speed
		} else (
			zumbie3.velocityY = -speed
		)
		if (player.x > zumbie4.x) {
			zumbie4.velocityX = speed
		} else (
			zumbie4.velocityX = -speed
		)
		if (player.y > zumbie4.y) {
			zumbie4.velocityY = speed
		} else (
			zumbie4.velocityY = -speed
		)
		if (player.x > zumbie5.x) {
			zumbie5.velocityX = speed
		} else (
			zumbie5.velocityX = -speed
		)
		if (player.y > zumbie5.y) {
			zumbie5.velocityY = speed
		} else (
			zumbie5.velocityY = -speed
		)
		if (player.x > zumbie6.x) {
			zumbie6.velocityX = speed
		} else (
			zumbie6.velocityX = -speed
		)
		if (player.y > zumbie6.y) {
			zumbie6.velocityY = speed
		} else (
			zumbie6.velocityY = -speed
		)
		if (player.x > zumbie7.x) {
			zumbie7.velocityX = speed
		} else (
			zumbie7.velocityX = -speed
		)
		if (player.y > zumbie7.y) {
			zumbie7.velocityY = speed
		} else (
			zumbie7.velocityY = -speed
		)
		if (player.x > zumbie8.x) {
			zumbie8.velocityX = speed
		} else (
			zumbie8.velocityX = -speed
		)
		if (player.y > zumbie8.y) {
			zumbie8.velocityY = speed
		} else (
			zumbie8.velocityY = -speed
		)
		if (player.x > zumbie9.x) {
			zumbie9.velocityX = speed
		} else (
			zumbie9.velocityX = -speed
		)
		if (player.y > zumbie9.y) {
			zumbie9.velocityY = speed
		} else (
			zumbie9.velocityY = -speed
		)
		if (player.x > zumbie10.x) {
			zumbie10.velocityX = speed
		} else (
			zumbie10.velocityX = -speed
		)
		if (player.y > zumbie10.y) {
			zumbie10.velocityY = speed
		} else (
			zumbie10.velocityY = -speed
		)

		zumbie1.collide(zumbie2)
		zumbie1.collide(zumbie3)
		zumbie1.collide(zumbie4)
		zumbie1.collide(zumbie5)
		zumbie1.collide(zumbie6)
		zumbie1.collide(zumbie7)
		zumbie1.collide(zumbie8)
		zumbie1.collide(zumbie9)
		zumbie1.collide(zumbie10)
		zumbie2.collide(zumbie3)
		zumbie2.collide(zumbie4)
		zumbie2.collide(zumbie5)
		zumbie2.collide(zumbie6)
		zumbie2.collide(zumbie7)
		zumbie2.collide(zumbie8)
		zumbie2.collide(zumbie9)
		zumbie2.collide(zumbie10)
		zumbie3.collide(zumbie4)
		zumbie3.collide(zumbie5)
		zumbie3.collide(zumbie6)
		zumbie3.collide(zumbie7)
		zumbie3.collide(zumbie8)
		zumbie3.collide(zumbie9)
		zumbie3.collide(zumbie10)
		zumbie4.collide(zumbie5)
		zumbie4.collide(zumbie6)
		zumbie4.collide(zumbie7)
		zumbie4.collide(zumbie8)
		zumbie4.collide(zumbie9)
		zumbie4.collide(zumbie10)
		zumbie5.collide(zumbie6)
		zumbie5.collide(zumbie7)
		zumbie5.collide(zumbie8)
		zumbie5.collide(zumbie9)
		zumbie5.collide(zumbie10)
		zumbie6.collide(zumbie7)
		zumbie6.collide(zumbie8)
		zumbie6.collide(zumbie9)
		zumbie6.collide(zumbie10)
		zumbie7.collide(zumbie8)
		zumbie7.collide(zumbie9)
		zumbie7.collide(zumbie10)
		zumbie8.collide(zumbie9)
		zumbie8.collide(zumbie10)
		zumbie9.collide(zumbie10)
		crosshair.x = mouseX;
		crosshair.y = mouseY;
		if (keyDown("W")) {
			player.y = player.y - playerspeed;
		}
		if (keyDown("A")) {
			player.x = player.x - playerspeed;
		}
		if (keyDown("S")) {
			player.y = player.y + playerspeed;
		}
		if (keyDown("D")) {
			player.x = player.x + playerspeed;
		}
		if (zumbie1.isTouching(sword)) {
			zumbie1.x = -50
			points += 10
			money += moneyAdd
			speed += 0.01
		}
		if (zumbie2.isTouching(sword)) {
			zumbie2.x = 1050
			points += 10
			money += moneyAdd
			speed += 0.01

		}
		if (zumbie3.isTouching(sword)) {
			zumbie3.x = -50
			points += 10
			money += moneyAdd
			speed += 0.01

		}
		if (zumbie4.isTouching(sword)) {
			zumbie4.x = 1050
			points += 10
			money += moneyAdd
			speed += 0.01

		}
		if (zumbie5.isTouching(sword)) {
			zumbie5.y = -50
			points += 10
			money += moneyAdd
			speed += 0.01

		}
		if (zumbie6.isTouching(sword)) {
			zumbie6.y = 650
			points += 10
			money += moneyAdd
			speed += 0.01

		}
		if (zumbie7.isTouching(sword)) {
			zumbie7.y = -50
			points += 10
			money += moneyAdd
			speed += 0.01

		}
		if (zumbie8.isTouching(sword)) {
			zumbie8.y = 650
			points += 10
			money += moneyAdd
			speed += 0.01

		}
		if (zumbie9.isTouching(sword)) {
			zumbie9.x = -50
			points += 10
			money += moneyAdd
			speed += 0.01

		}
		if (zumbie10.isTouching(sword)) {
			zumbie10.x = 1050
			points += 10
			money += moneyAdd
			speed += 0.01

		}

		stroke(255);
		lins = line(player.x, player.y, sword.x, sword.y);
		d = 100

		// if (mousePressedOver(crosshair)) {

		//   bullet.setSpeedAndDirection(
		//     2,
		//     atan2(crosshair.y - player.y, crosshair.x - player.x)
		//   );
		o = atan2(crosshair.y - player.y, crosshair.x - player.x);
		sword.x = d * cos(o) + player.x;
		sword.y = d * sin(o) + player.y;
		drawSprites();
	}



	// }

	// console.log(lins.getDirection());

	if (keyWentDown("SPACE")) {
		gamestate = "shop"
	}
	if (keyWentDown("P")) {
		gamestate = 'play'
	}

	if (gamestate === "shop") {
		text("Money: " + money, 20, 20)
		text("Points: " + points, 20, 40)
		text("Press p to exit shop", 20, 60)
		fill("white")
		textSize(30)
		text("Upgrade Shop", 400, 30)
		textSize(12)
		text('"If You are not buying something, get out"', 390, 50)
		textSize(20)
		text("Upgrade Weapon Size", 100, 100)
		textSize(15)
		if (maceUpgrade < 5) {
			text("Price: " + macePrice, 100, 140)
			text("Amount purchaced: " + maceUpgrade + "/5", 100, 160)
		}
		text("(Press Z)", 100, 120)
		textSize(20)
		text('Upgrade Movement Speed', 100, 220)
		textSize(15)
		text("(Press X)", 100, 240)
		if (speedUp < 5) {
			text("Price: " + speedPrice, 100, 260)
			text("Amount purchased: " + speedUp + "/5", 100, 280)
		}
		textSize(20)
		text('Buy a Life', 100, 340)
		textSize(15)
		text("(Press C)", 100, 360)
		if (lifeUp < 3) {
			text("Price: " + lifePrice, 100, 380)
			text("Amount purchased: " + lifeUp + "/3", 100, 400)
		}
		textSize(20)
		text('Upgrade Money Gained Per kill', 100, 460)
		textSize(15)
		text("(Press V)", 100, 480)
		if (moneyUp < 5) {
			text("Price: " + moneyPrice, 100, 500)
			text("Amount purchased: " + moneyUp + "/5", 100, 520)
		}
		textSize(20)
		text("Decrease Zombie Speed", 600, 100)
		textSize(15)
		text("(Press B)", 600, 120)
		if (zspeeddec < 5) {
			text("Price: " + zspeeddecPrice, 600, 140)
			text("Amount purchased " + zspeeddec + "/5", 600, 160)
		}

		if (maceUpgrade === 5) {
			textSize(15)
			text("Max Upgrades", 100, 140)
			text("Max amount purchaced", 100, 160)

		}
		if (speedUp === 5) {
			textSize(15)
			text("Max Upgrades", 100, 260)
			text("Max amount purchaced", 100, 280)

		}
		if (lifeUp === 3) {
			textSize(15)
			text("Max Upgrades", 100, 380)
			text("Max amount purchaced", 100, 400)
		}
		if (moneyUp === 5) {
			textSize(15)
			text("Max Upgrades", 100, 500)
			text("Max amount purchaced", 100, 520)
		}
		// console.log(macePrice)
		if (keyWentDown("Z") && maceUpgrade < 5 && money >= macePrice) {
			money -= macePrice
			ballsize += 0.05
			maceUpgrade += 1
			macePrice += getprice(500, 1.5, maceUpgrade)
		}
		if (keyWentDown("X") && speedUp < 5 && money >= speedPrice) {
			money -= speedPrice
			playerspeed += 1.5
			speedUp += 1
			speedPrice += getprice(750, 1.5, speedUp)
		}
		if (keyWentDown("C") && lifeUp < 3 && money >= lifePrice) {
			money -= lifePrice
			lives += 1
			lifeUp += 1
			lifePrice += getprice(10000, 1.5, lifeUp)
		}
		if (keyWentDown("V") && moneyUp < 5 && money >= moneyPrice) {
			money -= moneyPrice
			moneyUp += 1
			moneyAdd += getprice(moneyAdd, 1.1, moneyUp)
			moneyPrice += getprice(500, 3, moneyUp)
			console.log(moneyPrice)
			console.log(moneyAdd)
		}
		if (keyWentDown("B") && zspeeddec < 5 && money >= zspeeddecPrice) {
			money -= zspeeddecPrice
			zspeeddec += 1
			speed = speed * 0.75
			zspeeddecPrice += getprice(5000, 2, zspeeddec)
			console.log(speed)
		}
	}

}

getprice = (base, exponent, upgradeNumber) => {


	return Math.round((base * Math.pow(exponent, upgradeNumber)) / 100) * 100

}
