function drawStart() {

background('rgb(219,219,255)');
	
	rectMode(CENTER);
  
	// Play button
	fill('rgb(244,189,208)');
	rect(width / 2, height / 2 - 100, 200, 100, 20);
	
	// Instructions button
	fill('rgb(255,255,165)');
	rect(width / 2, height /2 + 100, 200, 100, 20);
	
	// Texts
	fill('black');
	textAlign(CENTER, CENTER);
	textSize(25);
	text("PLAY", width / 2, height / 2 - 100);
	text("How to play", width / 2, height / 2 + 100);
  
}
