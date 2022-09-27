var p1=0; 
var p2=0;
let log=console.log;
function send(who) {
	let text1=document.getElementById("typing").value;
	let vaqt=online(true);
	var text="";
	if (text1!="" && text1[0]!=" ") {
	//Asosiy
	for (i in text1) {
		text+=text1[i];
		if (i%30==0 && i!=0) {
			text+="\n";
		}
	}
	//ptichka you
	if (who=="me") {
		++p1;
		log(p2);
		if (p2>0) {
			for (let doublep2=0; doublep2<p2; doublep2++){
				let youp=document.getElementsByClassName("youpid")[doublep2];
				youp.src="./src/images/ptichka1.png";
				
			}
		}
	}

	//ptichka me
	if (who=="you") {
		++p2;
		if (p1>0) {
			for (let doublep1=0; doublep1<p1; doublep1++){
				let mep=document.getElementsByClassName("mepid")[doublep1];
				mep.src="./src/images/ptichka1.png";
			}
		}
	}


	let message = "<div class=\""+who+"\"><span class=\""+who+ "p\"><img class=\""+who+ "pid\"></span>"+text+"<span class=\"vaqt\"></span></div>";
	let chat = document.getElementById("chat").innerHTML+=message;
	document.getElementById("typing").value="";
	}
}

function ptichka(){

}

function online(vaqt=false) {
	let isOnline=document.getElementById("isOnline");
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  hour = updateTime(hour);
  min = updateTime(min);
  if (vaqt) {return hour + " : " + min};
  if (min%2==0) {
  	isOnline.innerText="online";
  	isOnline.style.color="#439de3";
  } else{
  	 isOnline.innerText = "oxirgi marta "+hour + " : " + min+ " da" ; /* adding time to the div */
 	isOnline.style.color="#cfd6d7";
  }
    var t = setTimeout(function(){ online() }, 1000); /* setting timer */
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

function white(which) {
	// body...
	let pimg=document.getElementById(which);
	if (which === "file") {
		pimg.src="./src/images/pclip1.png";
	}
	if (which === "smile") {
		pimg.src="./src/images/smile1.png";
	}

}

function simple(which) {
	// body...
	let pimg=document.getElementById(which);
	if (which === "file") {
		pimg.src="./src/images/pclip.png";
	}
	if (which === "smile") {
		pimg.src="./src/images/smile.png";
	}

}

var k=false;
function sunmoon(){
	k=!k;
	let sunmoon=document.getElementById("sun");
	let who=document.getElementById("who");
	let sum=document.getElementById("sum");
	let body=document.getElementById("body");
	if (k) {
	sunmoon.src="bg.png";
	who.style.background="#298276";
	sum.style.backgroundImage = "url('bg.png')";
	body.style.background="black";
} else {
	sunmoon.src="bg.png";
	who.style.background="#17212b";
	sum.style.backgroundImage = "url('./src/Images/bgimg.jpg')";
	body.style.background="black";
}


}


function nos(){
	let nav = document.querySelector("nav")

	nav.classList.toggle("sigaret")
}

function chat(){
	alert("COMING SOON!")
}