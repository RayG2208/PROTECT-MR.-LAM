function drawPlay() {

	clear();

	Engine.update(engine);

	background('rgb(250,184,206)');
	fill('black')
	textAlign(CENTER, CENTER);
	textSize(width * 0.02)
	text("You are now playing", width / 2, height / 2);

	// Button parameters
	let xCenter = width - 100;
	let yBack = height * 0.9;
	let bW = width * 0.10;
	let bH = height * 0.10;

	rectMode(CENTER);

	// Back button
	fill('rgb(219,219,255)');
	rect(xCenter, yBack, bW, bH, 20);

	fill('black')
	text("Back", xCenter, yBack)


	for (let obs of obstacles) {

		push();
		translate(obs.position.x, obs.position.y) // Everything is centered in Matter.js. Basically its like rectMode(CENTER) by default. So basically after this the object kind of has its own position that starts at 0 but its not the pixel 0???
		rotate(obs.angle); // Makes the object rotate when it gets hit (I hope thats what it does)
		rectMode(CENTER);
		rect(0, 0, 300, 50);
		// rect(0, 0, random(50, 300), random(50,100)); // the switching thingy
		pop();

	}

	// the obstacle
	movingObstacles(4); // This is the speed it goes down
	if (frameCount % 120 === 0) {
		spawnObstacles();
	}

	let BR = width * 0.10
	
	fill('rgb(242,91,91)')
	noStroke();
	circle(balloon.position.x, balloon.position.y, BR);

	// Update the shield position
	let dx = mouseX - shield.position.x;
	let dy = mouseY - shield.position.y;
	Matter.Body.setVelocity(shield, { x : dx, y : dy});
	
	// player controls circle
	playerCircle()

}

// The circle that the player controls
function playerCircle() {

	// player controls circle
	fill('white')
	stroke(0);
	circle(shield.position.x, shield.position.y, SHIELD_RADIUS * 2);

}

// The obstacles (this lets us control the speed of the obstacles unless we dont really need it)
function movingObstacles(speed) {

	for (let obs of obstacles) {
		Matter.Body.translate(obs, {
			x: 0,
			y: speed
		});
	}

}

// Add obstacles
function spawnObstacles() {

	let x = random(100, width - 100);
	let y = -50;
	let w = 300;
	let h = 50;
	
	// Obstacle
	let obstacle = Bodies.rectangle(x, y, w, h, {
		restitution : 0.08, // Bouncy
		friction : 0.2,
		frictionAir : 0.02,
		angle : random(-0.2, 0.2), // Starts slightly tilted
		angularVelocity : random(-0.05, 0.05), // Then spins
	});
	
	World.add(world, obstacle);
	obstacles.push(obstacle);

}
