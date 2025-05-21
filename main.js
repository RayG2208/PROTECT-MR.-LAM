let logo;

function preload(){
	logo = loadImage('logo.png')
}

// Matter modules (idk how they work but they work)

let Engine = Matter.Engine, 
	World = Matter.World, 
	Bodies = Matter.Bodies,
	Events = Matter.Events;

let engine, world;
let obstacles = [];

// The circle that protects
let sheild;
const SHIELD_RADIUS = 25;

// The balloon
let balloon;
let balloonAlive = true;

function setup () {
	
	createCanvas(windowWidth, windowHeight);

	engine = Engine.create(); // This runs everything physics

	Events.on(engine, "collisionStart", function(event) {

		for (let pair of event.pairs) {
			let a = pair.bodyA
			let b = pair.bodyB

			if ((a.label === "balloon" && obstacles.includes(b)) ||
				(b.label === "balloon" && obstacles.includes(a))) {

				ballooonAlive = false;
				currentScreen = STATE_END;
				console.log("Balloon HIT!! Game over!");
			}
		}
	})
	
	world = engine.world; // Container to hold our objects
	
	
	world.gravity.y = 0;
	
	// Circle that protects
	shield = Bodies.circle(width / 2, height / 2, SHIELD_RADIUS, {
		inertia : Infinity, // Physics trauma eeeyyy
		friction : 0,
		frictionAir : 0,
		restitution : 0.9,
	});
	shield.isStatic = false; 
	shield.isSensor = false;
	shield.collisionFilter.group = -1; // Makes collisions smoother but might also make things laggy cus good graphics always do
	Matter.Body.setMass(shield, 10); // Make it hit harder cus physics
	World.add(world, shield);

	let BR = width * 0.10;

	balloon = Bodies.circle(width / 2, height * 0.75, BR, {
		isStatic: true,
		isSensor: true,
	})

	balloon.label = "balloon";
	World.add(world, balloon);

}

// We can add more screens later (if needed)

function draw() {

  background("black");

  switch (currentScreen) {
    case STATE_LOAD:
      drawLoad(); // Draw the load screen
      break;
			
    case STATE_START:
      drawStart();  // Draw the start screen
      break;

    case STATE_INSTRUCT:
      drawInstruct();
      break;
		  
    case STATE_PLAY:
      drawPlay();   // Draw the play screen 
      break;

    case STATE_PAUSE:
      drawPause();  // Draw the pause screen
      break;

    case STATE_END:
      drawEnd();    // Draw the end screen
      break;
  }

}
