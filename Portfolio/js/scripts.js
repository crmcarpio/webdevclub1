window.onload = function() {
	document.getElementsByClassName("mobilemenutrigger")[0].addEventListener("click", mobileMenuFunc);
	document.getElementsByClassName("exit")[0].addEventListener("click", closeFunc);
	document.getElementById("mobilemenu").addEventListener("click", closeFunc);
}

function mobileMenuFunc() {
	var mobile = document.getElementById("mobilemenucontainer");
	mobile.style.display = "flex";
	mobile.className = "fadeinClass";
	document.body.style.overflow = "hidden";
}

function closeFunc() {
	var mobile = document.getElementById("mobilemenucontainer");
	mobile.style.display = "none";
	document.body.style.overflow = "visible";
}

window.onload = function(){
	var education = document.getElementById("education");
	education.className = "fadeRightClass"
}


window.onscroll = function(){
	var proficiencies = document.getElementById("proficiencies");
	var workhistory = document.getElementById("workhistory");
	var projects = document.getElementById("projects");
	console.log("hey");
	if(window.pageYOffset >= (proficiencies.offsetTop-window.innerHeight) + 250)
		proficiencies.className = "fadeLeftClass";
	
	if(window.pageYOffset >= (workhistory.offsetTop+window.innerHeight))
		workhistory.className = "fadeRightClass";
	
	if(window.pageYOffset >= (projects.offsetTop-window.innerHeight) + 350)
		projects.className = "fadeLeftClass";	
}
