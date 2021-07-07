
/*----- toggle style switcher ----*/

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");

styleSwitcherToggler.addEventListener("click", () =>{
	document.querySelector(".style-switcher").classList.toggle('open');

})

	window.addEventListener("scroll", () =>{
		if(document.querySelector(".style-switcher").classList.contains('open')){
			document.querySelector(".style-swither").classList.remove("open");
		}
	})


/*--- theme colors ------*/

const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color){

localStorage.setItem("color", color);
changeColor();

}
	function changeColor(){

	alternateStyles.forEach((style) =>{
	if(localStorage.getItem("color") === style.getAttribute("title")){
			style.removeAttribute("disabled");
		}
		else{
			style.setAttribute("disabled", "true");
		}
	})
} 

		if(localStorage.getItem("color") !== null){
changeColor();
		}


/*----- theme dark and light mode ----*/
		const dayNight = document.querySelector(".day-night");

		dayNight.addEventListener("click", () =>{
			document.body.classList.toggle("dark");
			if(document.body.classList.contains("dark")){
				localStorage.setItem("theme", "dark");
			}
			else{
				localStorage.setItem("theme", "light");
			}
		updateIcon();
	})

		function themeMode(){
			if(localStorage.getItem("theme") !== null) {
				if(localStorage.getItem("theme") === "light"){
					document.body.classList.remove("dark");
				}
				else{
					document.body.classList.add("dark");
				}
				
			}
			updateIcon();
		}
		themeMode();

		function updateIcon(){
			if(document.body.classList.contains("dark")){
			dayNight.querySelector(".icon").classList.remove("icon-moon");
			dayNight.querySelector(".icon").classList.add("icon-sun");
			}
			else{
			dayNight.querySelector(".icon").classList.remove("icon-sun");
			dayNight.querySelector(".icon").classList.add("icon-moon");
			}
		}



	