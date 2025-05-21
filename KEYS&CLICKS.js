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
}
