var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn =document.getElementById("btn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";


}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomValue()
{
	 var value1 = Math.floor((Math.random() * 255) + 1);
	 var value2 = Math.floor((Math.random() * 255) + 1);
	 var value3 = Math.floor((Math.random() * 255) + 1);
	 var value4 = Math.floor((Math.random() * 255) + 1);
	 var value5 = Math.floor((Math.random() * 255) + 1);
	 var value6 = Math.floor((Math.random() * 255) + 1);

	 body.style.background = 
	"linear-gradient(to right, rgb(" + value1 +", " + value2 + ", " + value3 +"), rgb(" + value4 + ", " + value5 + ", "+ value6 +"))";

	 css.textContent = body.style.background + ";";
	 	
	 var bc =  rgbToHex(value1, value2, value3) ;
	 var mc = rgbToHex(value4,value5,value6);
	 color1.value = bc;
	 color2.value = mc;
}

btn.addEventListener("click", randomValue);


function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

