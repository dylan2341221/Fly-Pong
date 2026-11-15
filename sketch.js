await Canvas(800, 450);
let cur = new Sprite();
cur.img = loadImage('swatt.png')
cur.width = 20
cur.height = 2
cur.rotationLock = true;
let score = 0;
let health = 20
let isOver = false;
function gameOver() {
	background('black');
	fill("white")
	textSize(32)
	textAlign(CENTER)
	text('Score : ' + score , 0, 0)
	console.log('Game Over')
	for (let i = 0; i < players.length; i++) {
		players[i].delete();
	}
	cur.delete()
}
q5.update = function() {
	for (let i = 0; i < players.length; i++) {
		if (players[i].x <= -400) {
	 		players[i].vel.x = random(10, 20);
		}
		if (players[i].x > 380) {
	 		players[i].delete()
			for (let i = 0; i < 2; i++) {
				let player = new players.Sprite();
				player.x = 0;
				player.y = 0;
				player.img = "🪰";
				player.vel.x = 10;
				player.vel.y = -10;
			}
			console.log("Health Reduced")
			health--
		}
		if (players[i].y < -200) {
	 		players[i].vel.y = random(10, 20);
		} else if (players[i].y >= 200) {
	 		players[i].vel.y = random(-20, -10)
		}
		if (dist(mouse.x, mouse.y, players[i].x, players[i].y) < 100) {
			players[i].vel.x = random(-20, -10)
			score++
			break;
		}
	
		cur.moveTowards(mouse, 1)
		if (health == -1) {
			gameOver()
			isOver = true;
		}
	}
}
q5.draw = function() {
	if (isOver == true) {
		return;
	} else if (isOver == false) {
		background('skyblue');
	}
	
}
let players = new Group();players.friction = 100000;

while (players.length < 5) {
	let player = new players.Sprite();
	player.x = 0;
	player.y = 0;
	player.img = "🪰";
	player.vel.x = 10;
	player.vel.y = -10;
	let die = 4
}
mouse.visible = false
q5.update;
text('Score' + score , width / 2, 50)