$(document).ready(function() {
	function setRings(degrees) {
		var phase = (degrees*Math.PI*2)/360;
		var picOffset = $("#profilepic").offset();
		var displacementScalar = 20;
		
		var offset1X = displacementScalar*Math.cos(phase) + picOffset.left;
		var offset1Y = displacementScalar*Math.sin(phase) + picOffset.top;
		var offset2X = displacementScalar*Math.cos(phase + Math.PI*(2/3)) + picOffset.left;
		var offset2Y = displacementScalar*Math.sin(phase + Math.PI*(2/3)) + picOffset.top;
		var offset3X = displacementScalar*Math.cos(phase + Math.PI*(4/3)) + picOffset.left;
		var offset3Y = displacementScalar*Math.sin(phase + Math.PI*(4/3)) + picOffset.top;
		
		$("#ring1").offset({ "left": offset1X, "top": offset1Y });
		$("#ring2").offset({ "left": offset2X, "top": offset2Y });
		$("#ring3").offset({ "left": offset3X, "top": offset3Y });
	}
	
	//$(document).on("mousemove", function(event) {
	//	setRings(event.pageX + event.pageY);
	//});
	
	var currNum = 0;
	function loop() {
		setRings(currNum);
		if (currNum > 360)
			currNum = 0;
		else
			currNum++;
		setTimeout(loop, 10);
	}
	loop();
});