let windowWidth = 600
let windowHeight = 1080
let logoSize = 400

// wave and levels
let wave = 1;
let level = 1;
let enemiesPerWave = 5;
let enemiesSpawned = 0;
let enemiesCleared = 0;
let waveInProgress = false;
let waveTimer = 0; // To space out waves

let formations = [
	
	() => {
		// horizontal bar across screen
		for (let i = 0; i < width; i += 150) {
			spawnObstacles(i + 75, -50, 100, 30);
		}
	},
	
	() => {
		// zig-zag descending
		for (let i = 0; i < 4; i++) {
			let x = (i % 2 === 0) ? width * 0.02 : width * 0.8;
			spawnObstacles(x, -59 - i * 80, 150, 30);
		}
	},
	
	() => {
		// vertical column
		for (let i = 0; i < 5; i++) {
			spawnObstacles(width / 2, -50 - i * 60, 100, 30);
		}
	}
	
]

// Power up variables
let power = 0;
let maxPower = 100;
let powerReady = false;
let shieldMode = "normal"; // normal or powered sheild
let powerActivatedAt = 0;
