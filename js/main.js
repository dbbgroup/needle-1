const menu = document.querySelector(".menu");
const menuCont = document.querySelector(".menu__content");
const burger = document.querySelector(".burger");
const closeBtn = document.querySelector(".menu__close-btn");

burger.addEventListener("click", () => {
	menu.style.visibility = "visible";
	menuCont.style.left = "0";
});

closeBtn.addEventListener("click", () => {
	menu.style.visibility = "hidden";
	menuCont.style.left = "-150%";
});

menu.addEventListener("click", (event) => {
	if (!event.target.classList.contains("menu__content")) {
		menu.style.visibility = "hidden";
		menuCont.style.left = "-150%";
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape") {
		menu.style.visibility = "hidden";
		menuCont.style.left = "-150%";
	}
});

