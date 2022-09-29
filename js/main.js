import { toggleMenu } from "./menu.js";
import { slider } from "./slider.js";

window.addEventListener("DOMContentLoaded", () => {
	toggleMenu();
	slider(".products__item-track", ".products__item-dots");
});
