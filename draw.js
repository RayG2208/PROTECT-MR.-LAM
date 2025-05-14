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

    case STATE_INSTRUCT
      drawInstrucions();
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
