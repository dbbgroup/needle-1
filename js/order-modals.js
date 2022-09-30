function toggleThank() {
    let thank = document.getElementById('order-completed');

    if (thank.style.display == "none") {
        thank.style.display = "block";
    } else {
        thank.style.display = "none";
    }
}

function toggleReview() {
    let thank = document.getElementById('order-review');

    if (thank.style.display == "none") {
        thank.style.display = "block";
    } else {
        thank.style.display = "none";
    }
}

function toggleSearch() {
    let thank = document.getElementById('search-modal');

    if (thank.style.display == "none") {
        thank.style.display = "block";
    } else {
        thank.style.display = "none";
    }
}

function toggleLovely() {
    let thank = document.getElementById('lovely-modal');

    if (thank.style.display == "none") {
        thank.style.display = "block";
    } else {
        thank.style.display = "none";
    }
}

let lovel = document.getElementById('lovely-modal');
let compl = document.getElementById('order-completed');
let revi = document.getElementById('order-review');
let thank = document.getElementById('search-modal');

lovel.addEventListener("click", (event) => {
    if (event.target.classList.contains("order-review__wrapper")) {
        lovel.style.display = "none";
    }
});
compl.addEventListener("click", (event) => {
    if (event.target.classList.contains("order-completed__wrapper")) {
        compl.style.display = "none";
    }
});
revi.addEventListener("click", (event) => {
    if (event.target.classList.contains("order-review__wrapper")) {
        revi.style.display = "none";
    }
});
thank.addEventListener("click", (event) => {
    if (event.target.classList.contains("order-review__wrapper")) {
        thank.style.display = "none";
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        lovel.style.display = "none";
        compl.style.display = "none";
        revi.style.display = "none";
        thank.style.display = "none";
    }
});

