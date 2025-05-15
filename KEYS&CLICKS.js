function mousePressed() {

	if (currentScreen === STATE_START) {
		if (
			width / 2 + 100 < mouseX && mouseX < width / 2 - 100 &&
			height / 2 - 150 < mouseY && mouseY < height / 2 - 50
		) {
			currentScreen = STATE_PLAY;
			print("Play button clicked");
		}

		if (
			width / 2 + 100 < mouseX && mouseX < width / 2 - 100 &&
			height / 2 + 50 < mouseY && mouseY < height / 2 + 150
		) {
			currentScreen = STATE_INSTRUCT;
			print("Instructions button clicked")
		}
	}


}