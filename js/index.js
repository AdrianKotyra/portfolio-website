



// --------------------triger skills bars animaton------------------------



function animateCounter(duration) {
	let counters = document.querySelectorAll('.counter');
	counters.forEach(counter=>{
		if(!counter.classList.contains("active-counter")) {
			counter.classList.add("active-counter")
			const target = counter.getAttribute("target");
			let start = 0;
			let end = target;
			let stepTime = duration / end;

			let interval = setInterval(() => {
				if (start >= end) {
					clearInterval(interval);
				} else {
					start++;
					counter.textContent = start + "%";
				}
			}, stepTime);
		} else {
			return;
		}

		})

}



const ObsCallback = function(entries) {
	const [entry] = entries
	if(entry.isIntersecting===true ) {
		const progressAnim  = document.querySelectorAll(".progress-anim")
		// Animate from 0% to 70% in 2 seconds
		animateCounter(3000);
		progressAnim.forEach(ele=>{
			ele.style.animation = "progress 3s forwards";
		})
    }
}

const ObsOptions = {
    root:null,
    threshold: 0,
    rootMargin: '-10px'
}
const bars = document.querySelector(".trigger-skills");
const observer = new IntersectionObserver(ObsCallback, ObsOptions)
observer.observe(bars)


function rotateHeader() {
	const headers = document.querySelectorAll(".rotate");
	const headerList = [

		document.querySelector(".header-rotate-2"),

		document.querySelector(".header-rotate-3"),
		document.querySelector(".header-rotate-1"),
	];

	let index = 0;

	setInterval(() => {
		headers.forEach(ele => ele.classList.remove("active-rotate"));
		headerList[index].classList.add("active-rotate");

		index = (index + 1) % headerList.length;
	}, 2000); // Change every 2 seconds
}

rotateHeader();
