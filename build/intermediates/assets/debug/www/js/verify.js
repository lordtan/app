/**
 * 生成验证码的js 
 */
function rand() {
	var str = "abcdefghijklmnopqrstuvwxyz0123456789";
	var arr = str.split("");
	var validate = "";
	var ranNum;
	for(var i = 0; i < 4; i++) {
		ranNum = Math.floor(Math.random() * 36); // Random number in [0,35] Between 
		validate += arr[ranNum];
	}
	return validate;
}
/* Random interference line x Coordinate value */
function lineX() {
	var ranLineX = Math.floor(Math.random() * 90);
	return ranLineX;
}
/* Random interference line y Coordinate value */
function lineY() {
	var ranLineY = Math.floor(Math.random() * 40);
	return ranLineY;
}
/**
 * 生成验证码 
 */
function genVarifyCode() {
	var mycanvas = document.getElementById('mycanvas');
	var cxt = mycanvas.getContext('2d');
	cxt.fillStyle = '#000';
	cxt.fillRect(0, 0, 80, 30);
	/* Generate interference line 20 strip */
	for(var j = 0; j < 20; j++) {
		cxt.strokeStyle = '#fff';
		cxt.beginPath(); // Omit beginPath， The number of lines that interfere with each click will accumulate 
		cxt.moveTo(lineX(), lineY());
		cxt.lineTo(lineX(), lineY());
		cxt.lineWidth = 0.5;
		cxt.closePath();
		cxt.stroke();
	}
	cxt.fillStyle = 'red';
	cxt.font = 'bold 20px Arial';
	var varifyCode = rand();
	cxt.fillText(varifyCode, 25, 25); // hold rand() The generated random number text is filled to canvas in 
	return varifyCode;
}
