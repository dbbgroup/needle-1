export const slider = (sliderParent, dotsParent) => {
	const sParent = document.querySelector(sliderParent);
	// const dots = document.querySelector(dotsParent).children;

	sParent.addEventListener("click", (event) => {
		for (let i = 0; i < sParent.children.length; i++) {
			if (event.target === sParent.children[i]) {
				console.log(event.target === sParent.children[i]);
				sParent.children[i].style.transform = "translateX(-100%)";
			}
		}
	});
};
