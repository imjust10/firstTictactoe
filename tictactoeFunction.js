
var cell1, cell2, cell3, cell4,cell5, cell6, cell7, cell8, cell9, cellNo;
/***
var com123 = [1,2,3];
var com147 = [1,4,7];
var com159 = [1,5,9];
**/

var com1 = [
	[1,2,3],
	[1,4,7],
	[1,5,9]
];


var com2 = [
	[1,2,3],
	[2,5,8]
];

var com3 = [
	[1,2,3],
	[3,6,9],
	[3,5,7]
];

var com4 = [
	[4,5,6],
	[1,4,7]
];

var com5 = [
	[4,5,6],
	[2,5,8],
	[1,5,9]
];

var com6 = [
	[4,5,6],
	[3,6,9]
];

var com7 = [
	[1,4,7],
	[3,5,7],
	[7,8,9]
];

var com8 = [
	[7,8,9],
	[2,5,8],
];

var com9 = [
	[7,8,9],
	[3,6,9],
	[1,5,9]
];

var enteredCell = [];
var cellNos = [1,2,3,4,5,6,7,8,9];

var plyr1 = [];
var plyr2 = [];

var scorePlayer1 =0;
var scorePlayer2 =0;

var charCode;

function isNumber(evt) {
	
	charCode = (evt.which) ? evt.which : evt.keyCode;
	if (charCode != 46 && charCode > 31 && (charCode < 49 || charCode > 57)){//
		return false;
	}else{
		return true;
	}
}



function player1Send(){

	if(!enteredCell.includes(charCode)){
		enteredCell.push(charCode);
		cellNo = document.getElementById("player1No").value;

			
		if(cellNo == 1){
			cell1 = new component(75,75,"blue",1,1);
			plyr1.push(1);
			document.getElementById("result").innerHTML = check(com1,plyr1,1);
		}else if(cellNo == 2){
			cell2 = new component(75,75,"blue",77,1);
			plyr1.push(2);
			document.getElementById("result").innerHTML = check(com2,plyr1,1);
		}else if(cellNo == 3){
			cell3 = new component(75,75,"blue", 153,1);
			plyr1.push(3);
			document.getElementById("result").innerHTML = check(com3,plyr1,1);
		}else if(cellNo == 4){
			cell4 = new component(75,75,"blue",1,77);
			plyr1.push(4);
			document.getElementById("result").innerHTML = check(com4,plyr1,1);
		}else if(cellNo == 5){
			cell5 = new component(75,75,"blue",77,77);
			plyr1.push(5);
			document.getElementById("result").innerHTML = check(com5,plyr1,1);
		}else if(cellNo == 6){
			cell6 = new component(75,75,"blue",153,77);
			plyr1.push(6);
			document.getElementById("result").innerHTML = check(com6,plyr1,1);
		}else if(cellNo == 7){
			cell7 = new component(75,75,"blue",1,153);
			plyr1.push(7);
			document.getElementById("result").innerHTML = check(com7,plyr1,1);
		}else if(cellNo == 8){
			cell8 = new component(75,75,"blue",77,153);
			plyr1.push(8);
			document.getElementById("result").innerHTML = check(com8,plyr1,1);
		}else if(cellNo == 9){
			cell9 = new component(75,75,"blue",153,153);
			plyr1.push(9);
			document.getElementById("result").innerHTML = check(com9,plyr1,1);
		}
	}else{
		document.getElementById("result").innerHTML = "Already Entered";
		document.getElementById("player1No").value = "";
	}
//document.getElementById("result").innerHTML = com123.every((el) => {
//	return plyr1.indexOf(el) !== -1;
//}); 
}



function player2Send(){
	
	if(!enteredCell.includes(charCode)){
		enteredCell.push(charCode);
		cellNo = document.getElementById("player2No").value;

		if(cellNo == 1){
			cell1 = new component(75,75,"red",1,1);
			plyr2.push(1);
			document.getElementById("result").innerHTML = check(com1,plyr2,2);
		}else if(cellNo == 2){
			cell2 = new component(75,75,"red",77,1);
			plyr2.push(2);
			document.getElementById("result").innerHTML = check(com2,plyr2,2);
		}else if(cellNo == 3){
			cell3 = new component(75,75,"red", 153,1);
			plyr2.push(3);
			document.getElementById("result").innerHTML = check(com3,plyr2,2);
		}else if(cellNo == 4){
			cell4 = new component(75,75,"red",1,77);
			plyr2.push(4);
			document.getElementById("result").innerHTML = check(com4,plyr2,2);
		}else if(cellNo == 5){
			cell5 = new component(75,75,"red",77,77);
			plyr2.push(5);
			document.getElementById("result").innerHTML = check(com5,plyr2,2);
		}else if(cellNo == 6){
			cell6 = new component(75,75,"red",153,77);
			plyr2.push(6);
			document.getElementById("result").innerHTML = check(com6,plyr2,2);
		}else if(cellNo == 7){
			cell7 = new component(75,75,"red",1,153);
			plyr2.push(7);
			document.getElementById("result").innerHTML = check(com7,plyr2,2);
		}else if(cellNo == 8){
			cell8 = new component(75,75,"red",77,153);
			plyr2.push(8);
			document.getElementById("result").innerHTML = check(com8,plyr2,2);
		}else if(cellNo == 9){
			cell9 = new component(75,75,"red",153,153);
			plyr2.push(9);
			document.getElementById("result").innerHTML = check(com9,plyr2,2);
		}
	}else{
		document.getElementById("result").innerHTML = "Already Entered";
		document.getElementById("player2No").value = "";
	}
	
//document.getElementById("result").innerHTML = com123.every((el) => {
//	return plyr2.indexOf(el) !== -1;
//}); 
}




function check(arr1, plyr, plyrNo){
	
var res;
	for(x=0;x<arr1.length;x++){
		
		res = arr1[x].every((el) => {
		if(plyrNo==1){
				return	plyr1.indexOf(el) !== -1;
			}else{
				return	plyr2.indexOf(el) !== -1;
			}
		});
		if(res==true){
		break;
		}
	}


	if(res==true){
		
		document.getElementById("player2Go").disabled = true;
		document.getElementById("player2No").disabled = true;
		document.getElementById("player2No").value = "";
		document.getElementById("player1Go").disabled = true;
		document.getElementById("player1No").value = "";
		document.getElementById("player1No").disabled = true;
		
		return "WINNER: PLAYER "+ plyrNo;
	}else{
		
		
		if(plyrNo==2){
			document.getElementById("player2Go").disabled = true;
			document.getElementById("player2No").disabled = true;
			document.getElementById("player2No").value = "";
			document.getElementById("player1Go").disabled = false;
			document.getElementById("player1No").disabled = false;
		}else{
			document.getElementById("player1Go").disabled = true;
			document.getElementById("player1No").value = "";
			document.getElementById("player1No").disabled = true;
			document.getElementById("player2Go").disabled = false;
			document.getElementById("player2No").disabled = false;
		}
		
		return "";
	}
}


function tictactoe(){
	board.start();
	cell1 = new component(75,75,"white",1,1);
	cell2 = new component(75,75,"white",77,1);
	cell3 = new component(75,75,"white", 153,1);
	cell4 = new component(75,75,"white",1,77);
	cell5 = new component(75,75,"white",77,77);
	cell6 = new component(75,75,"white",153,77);
	cell7 = new component(75,75,"white",1,153);
	cell8 = new component(75,75,"white",77,153);
	cell9 = new component(75,75,"white",153,153);
}

var board = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 229;
        this.canvas.height = 229;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function component(width, height, color, x, y){
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
	ctx = board.context;
	ctx.fillStyle = color;
	ctx.fillRect(this.x, this.y, this.width, this.height);
}
