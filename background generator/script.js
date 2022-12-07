var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

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

// A few things you can try:
// 1. Write code so that the colour inputs match the background generated on the first page load. 
// 2. Display the initial CSS linear gradient property on page load.
// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
// You may also see different behaviours with the Color widget based on what browser you use. Remember, all browsers are implemented differently. Good luck!

// jQuery to make DOM manip easy 
// and to help with browser compatibility
// jQuery is too imperative, you need to specify what to do one by one
// jQuery is the past, we have 

// React is declerative.. much better 
// you want to minimize DOM manipulation and events not to break the code
// React is perfect for that 

// TERMINAL COMMAN
// ls
// pwd
// cd 
// cd ..
// clear
// cd / **—> root director**
// cd ~
// cd <folder/folder/folder> ** <> means to add your own folder names that exist on your computer.
// mkdir <folder>
// open <folder> 
// touch index.html  
// open index.html
// open -a “Sublime Text”  
// open . 
// mv index.html about.html 
// rm <file>
// rm -r <folder>
// say hello **(only on Mac)**