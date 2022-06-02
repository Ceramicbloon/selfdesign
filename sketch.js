var player, crosshair, bullet, d, o, lins;

function preload() {}

function setup() {
  createCanvas(800, 800);
  crosshair = createSprite(-100, -100, 20, 20);

  player = createSprite(200, 200, 20, 20);
  bullet = createSprite(player.x, player.y, 20, 20);
  //Create the Bodies Here.
  d = 0;
}

function draw() {
  rectMode(CENTER);
  background(0);
  crosshair.x = mouseX;
  crosshair.y = mouseY;
  if (keyDown("W")) {
    player.y = player.y - 5;
  }
  if (keyDown("A")) {
    player.x = player.x - 5;
  }
  if (keyDown("S")) {
    player.y = player.y + 5;
  }
  if (keyDown("D")) {
    player.x = player.x + 5;
  }

  stroke(255);
  lins = line(player.x, player.y, mouseX, mouseY);

  drawSprites();
  // if (mousePressedOver(crosshair)) {

  //   bullet.setSpeedAndDirection(
  //     2,
  //     atan2(crosshair.y - player.y, crosshair.x - player.x)
  //   );
  d += 2;
  o = atan2(crosshair.y - player.y, crosshair.x - player.x);
  bullet.x = d * cos(o) + player.x;
  bullet.y = d * sin(o) + player.y;

  // }

  // console.log(lins.getDirection());
}
