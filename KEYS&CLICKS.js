function mousePressed() {


	//console.log("Mouse at", mouseX, mouseY);


	if (currentScreen === STATE_START) {

		let bW = width * 0.25;
		let bH = height * 0.15;
		let xCenter = width / 2;

		// Play button
		let yPlay = height * 0.4;
		if (
			mouseX > xCenter - bW && mouseX < xCenter + bW &&
			mouseY > yPlay - bH && mouseY < yPlay + bH
		) {
			currentScreen = STATE_PLAY;
			//print("Play button clicked");
		}

		// Instruct button
		let yInstruct = height * 0.6;
		if (
			mouseX > xCenter - bW && mouseX < xCenter + bW &&
			mouseY > yInstruct - bH && mouseY < yInstruct + bH
		) {
			currentScreen = STATE_INSTRUCT;
			//print("Instructions button clicked")
		}
	}

	if (currentScreen === STATE_PLAY) {

		let xCenter = width - 100;
		let bW = width * 0.10;
		let bH = height * 0.10;
		let yBack = height * 0.9;
		
		if (
			mouseX > xCenter - bW && mouseX < xCenter + bW &&
			mouseY > yBack - bH && mouseY < yBack + bH) {
			currentScreen = STATE_START;
			//print("Back button clicked")
		}
	}
	
	if (currentScreen === STATE_INSTRUCT) {

		let xCenter = width - 100;
		let bW = width * 0.10;
		let bH = height * 0.10;
		let yBack = height * 0.9;
		
		if (
			mouseX > xCenter - bW && mouseX < xCenter + bW &&
			mouseY > yBack - bH && mouseY < yBack + bH) {
			currentScreen = STATE_START;
			//print("Back button clicked")
		}
	}

	if (currentScreen === STATE_END) {

		let xCenter = width - 100;
		let bW = width * 0.10;
		let bH = height * 0.10;
		let yBack = height * 0.9;
		
		if (
			mouseX > xCenter - bW && mouseX < xCenter + bW &&
			mouseY > yBack - bH && mouseY < yBack + bH) {
			currentScreen = STATE_START;
			//print("Back button clicked")
		}
	}

	let pbCenter = width / 2;
	let yPower = height - 80;
	let pbW = width * 0.15;
	let pbH = height * 0.08;
	// If power is ready and user clicks or touches withing the button bounds
	if ( powerReady &&
		 mouseX > pbCenter - pbW && mouseX < pbCenter + pbW &&
			mouseY > yPower - pbH && mouseY < yPower + pbH
		 ) {
		
		shieldMode = "powered";
		powerReady = false;
		power = 0;
		powerActivatedAt = millis();
	}
	
}
