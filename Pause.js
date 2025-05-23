function drawPause(){
  
  background('rgb(195,248,221)');
	textAlign(CENTER, CENTER);
	textSize(width * 0.02);
	
	// Back to start button
	let xCenter = width - 100;
	let yBack = height * 0.9;
	let bW = width * 0.10;
	let bH = height * 0.10;
	
	// Back button
	fill('rgb(219,219,255)');
	rect(xCenter, yBack, bW, bH, 20);
	
	fill('black');
	text("Back", xCenter, yBack);
  
}
