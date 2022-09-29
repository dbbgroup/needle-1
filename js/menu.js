export const toggleMenu = () => {
	const menu = document.querySelector(".menu");
	const burger = document.querySelector(".burger");
	const closeBtn = document.querySelector(".menu__close-btn");

	burger.addEventListener("click", () => {
		menu.style.display = "block";
	});

	closeBtn.addEventListener("click", () => {
		menu.style.display = "none";
	});

	menu.addEventListener("click", (event) => {
		if (!event.target.classList.contains("menu__content")) {
			menu.style.display = "none";
		}
	});

	document.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			menu.style.display = "none";
		}
	});
};
