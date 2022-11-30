var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random")
function setGradient(){
	var colorGradient= `linear-gradient(to right,${color1.value} , ${color2.value}  )`
	body.style.background =colorGradient
	randomBtn = colorGradient
	css.textContent = colorGradient
}
function getRandomGradientColor() {
	const randomColor1 ='#'+ Math.floor(Math.random()*16777215).toString(16);
	const randomColor2 ='#'+ Math.floor(Math.random()*16777215).toString(16);
	color1.value = randomColor1;
	color2.value = randomColor2;
	setGradient();
	css.textContent = `linear-gradient(to right,${color1.value} , ${color2.value}  )`
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
randomBtn.addEventListener("click",getRandomGradientColor);
// We don't need to call the function because this input event is triggered automatically and the second

// parameter automatically gets ran with the event.
// We want to listen to an event where we notice the user's actions here.

// We've learned about click and mouseenter and key press.

// But this isn't really any of those is it?

// Well there is a really really good event for inputs and it's called input.

// So any time the input value changes which it does every time we change the color we can detect it.