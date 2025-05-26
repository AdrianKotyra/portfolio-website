


function showDifferentWork(){

	const trigger5 = document.querySelectorAll(".level-5")
	const trigger6 = document.querySelectorAll(".level-6")
	const triggerHNC = document.querySelectorAll(".level-hnc")
	const triggerHND = document.querySelectorAll(".level-hnd")
	const triggerALL = document.querySelectorAll(".level-all")


	const button5 = document.querySelector(".trigger-level-5");
	const button6 = document.querySelector(".trigger-level-6");
	const buttonHNC = document.querySelector(".trigger-level-hnc");
	const buttonHND = document.querySelector(".trigger-level-hnd");
	const buttonall = document.querySelector(".trigger-level-all");

	function displayContent(trigger, content){

		const allButtons = document.querySelectorAll(".trigger-button");
		const allWorks = document.querySelectorAll(".level");
		trigger.addEventListener("click", ()=>{
			allButtons.forEach(button=>{
				button.classList.remove("active-button-trigger");
			})
			trigger.classList.add("active-button-trigger");
			allWorks.forEach(work=>{
				work.style.display="none";
				content.forEach(element => {
					element.style.display="block";
				});
			})

		})
	}
	displayContent(button5, trigger5)
	displayContent(button6, trigger6)
	displayContent(buttonHNC, triggerHNC)
	displayContent(buttonHND, triggerHND)
	displayContent(buttonall, triggerALL)


}
showDifferentWork()
