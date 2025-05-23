function drawPlay() {

	clear();

	Engine.update(engine);

	background('rgb(250,184,206)');
	fill('black')
	textAlign(CENTER, CENTER);
	textSize(width * 0.02)
	text("You are now playing", width / 2, height / 2);

	// Button parameters
	// Back button
	let xCenter = width - 100;
	let yBack = height * 0.9;
	let bW = width * 0.10;
	let bH = height * 0.10;

	//Pause button
	let pxCenter = width - 100;
	let yPause = height * 0.05;
	let pW = width * 0.10;
	let pH = height * 0.10;
	
	// Power up button
	let pbCenter = width / 2;
	let yPower = height - 80;
	let pbW = width * 0.15;
	let pbH = height * 0.08;
			
	rectMode(CENTER);

	// Back button
	fill('rgb(219,219,255)');
	rect(xCenter, yBack, bW, bH, 20);

	// Pause button
	fill('rgb(195,248,221)');
	rect(pxCenter, yPause, pW, pH, 20);
	
	if (powerReady) {
		fill('gold');
		stroke(0);
		strokeWeight(2);
		rectMode(CENTER);
		rect(pbCenter, yPower, pbW, pbH, 10);
		
		fill(0);
		nostroke();
		textSize(14);
		textAlign(CENTER, CENTER);
		text("Activate Power", pbCenter, yPower);
	}

	fill('black');
	text("Back", xCenter, yBack);
	text("Pause", pxCenter, yPause);

	for (let obs of obstacles) {

		push();

		translate(obs.position.x, obs.position.y) // Everything is centered in Matter.js. Basically its like rectMode(CENTER) by default. So basically after this the object kind of has its own position that starts at 0 but its not the pixel 0???
		rotate(obs.angle); // Makes the object rotate when it gets hit (I hope thats what it does)

		if (obs.label === "spikes") {
			
			beginShape();
			for (let v of obs.vertices) {
				vertex (v.x - obs.position.x, v.y - obs.position.y);
			}
			endShape(CLOSE);
			
		} else {

			rectMode(CENTER);
			rect(0, 0, width * 0.3, height * 0.05); // for all rectangles (normal & rotators)
			// rect(0, 0, random(50, 300), random(50,100)); // could be part of a level

		}

		pop();

	}


	let BR = width * 0.10

	fill('rgb(242,91,91)')
	noStroke();
	circle(balloon.position.x, balloon.position.y, BR);

	// Update the shield position
	let dx = mouseX - shield.position.x;
	let dy = mouseY - shield.position.y;
	Matter.Body.setVelocity(shield, {
		x: dx,
		y: dy
	});

	// player controls circle
	playerCircle()
	
	// Starts wave if not in process yet
	if (!waveInProgress && millis() - waveTimer > 1000) {
		waveInProgress = true;
		enemiesSpawned = 0;
		enemiesCleared = 0;
	}
	
	// Spawns obstacles for this wave
	if (waveInProgress && enemiesSpawned < enemiesPerWave) {
		// the obstacle(s)
		movingObstacles(4); // This is the speed it goes down
		
		if (frameCount % 30 === 0) {
			spawnFormations();
			// spawnObstacles();
			enemiesSpawned++;
	}
	}
	
	
	// Check if wave is over
	if (waveInProgress && enemiesCleared >= enemiesPerWave) {
		waveInProgress = false;
		waveTimer = millis(); // wait two seconds before next wave??
		wave++
		
		// Every 3 waves (for now) adds one more level
		if (wave % 3 === 1 && wave !== 1) {
			level++;
			enemiesPerWave += 1; //Increase difficulty
		}
		
	}
	
	// Removes off-screen obstacles
	for (let i = obstacles.length - 1; i >= 0; i--) {
		if (obstacles[i].position.y > height + 100) {
			World.remove(world, obstacles[i]);
			obstacles.splice(i, 1);
			enemiesCleared++
		}
	}
	
	// Trigger boss fights every 5 levels (??)
	if (level % 5 === 0 && !bossSpawned) {
		spawnBoss();
		bossSpawned = true;
	}
	
	// Turns off power mode after 5 seconds
	if (shieldMode = "powered" && millis() - powerActivatedAt > 5000) {
		shieldMode = "normal";
	}

	fill(0);
	textSize(20);
	textAlign(LEFT, TOP);
	text(`Level: ${level}`, 20, 20);
	text(`Wave: ${wave}`, 20, 45);
	
}

// The circle that the player controls
function playerCircle() {

	// player controls circle
	if (shieldMode === "normal") {
		fill('white');
		stroke(0);
		circle(shield.position.x, shield.position.y, SHIELD_RADIUS * 2);
	} else if (shieldMode === "powered") {
		// draw an arc or larger shield
		fill('rgb(169,243,255)');
		stroke(0);
		push();
		translate(shield.position.x, shield.position.y);
		arc(0, 0, SHIELD_RADIUS * 4, SHIELD_RADIUS * 4, PI, TWO_PI); // why am I using radians? idk
		pop();
	}
	
	// Lets add the power bar
	let barX = width / 2;
	let barY = height - 40;
	let barW = width * 0.3;
	let barH = 20;
	
	noStroke();
	fill(100);
	rect(barX, barY, barW, barH);
	
	fill(powerReady ? 'gold' : 'limegreen');
	let filledW = map(power, 0, maxPower, 0, barW);
	rectMode(CENTER)
	rect(barX, barY, filledW, barH);
	
	fill(0);
	textSize(14);
	textAlign(CENTER, CENTER);
	text("Power-Up", barX, barY - 10);

}

// The obstacles (this lets us control the speed of the obstacles unless we dont really need it)
function movingObstacles(speed) {

	for (let obs of obstacles) {
		Body.translate(obs, {
			x: 0,
			y: speed
		});
	}

}

let score = 0;
// Add obstacles
function spawnObstacles() {

	let type = random(["normal", "rotators", "spikes"]);

	if (type === "normal") {

		let x = random(100, width - 100);
		let y = -50;
		let w = width * 0.3;
		let h = height * 0.05;

		// Obstacle
		let normal = Bodies.rectangle(x, y, w, h, {
			restitution: 0.08, // Bouncy
			friction: 0.2,
			frictionAir: 0.02,
			// angle : random(-0.2, 0.2), // Starts slightly tilted
			angularVelocity: random(-0.05, 0.05), // Then spins
		});

		normal.label = "normal";
		World.add(world, normal);
		obstacles.push(normal);

	} 
	// else if (type === "rotators") {
	// 	rotatingObstacles()
	// } else if (type === "spikes") {
	// 	spikedObstacles()
	// }

	score += 1
}

function spikedObstacles() {
	let x = random(100, width - 100);
	let y = -60;

	// The three points of the triangle
	let trianglePoints = [

		{x: 0, y: 40}, // point 1
		{x: 30, y: -30}, // point 2
		{x: -30, y: 30} // point 3

	];

	let spikes = Bodies.fromVertices(x, y, trianglePoints, {
		restitution: 0.5,
		frictionAir: 0.02,
	}, true); // adding true automatically closes the shape

	spikes.label = "spikes";
	World.add(world, spikes);
	obstacles.push(spikes);

}

function rotatingObstacles() {
	
	let x = random(100, width - 100);
	let y = -50;
	let w = 200;
	let h = 20;

	let rotators = Bodies.rectangle(x, y, w, h, {
		restitution: 0.4,
		friction: 0.2,
		angle: 0
	});

	Body.setAngularVelocity(rotators, random(0.05, 0.15));

	rotators.label = "rotators";
	World.add(world, rotators);
	obstacles.push(rotators);

}

// The boss
function spawnBoss() {
	
	let x = width / 2;
	let y = -100;
	let w = 300;
	let h = 100;
	
	boss = Bodies.rectangle(x, y, w, h, {
		isStatic: false,
		frictionAir: 0.01,
		restitution: 0.2,
		label: "boss"
	})
	
	bossHealth = 10;
	World.add(world, boss);
	
}

// This entire thing is currently driving me crazy i dont know why but when I use this open processing crashes so yee
function spawnFormations() {
	
	let f = random(formations);
	f(); // Call the formation function
	
} 

function restartGame() {


}
