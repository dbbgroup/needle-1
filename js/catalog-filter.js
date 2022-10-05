let btn = document.querySelector('.catalog-page__filter-dropdown');

let counter = false;
btn.addEventListener('click', function() {
    let filt = document.querySelector('.catalog-page__filter');
    if (counter) {
    filt.style.left = "-150%";counter = !counter; }
    else {filt.style.left = "0";counter = !counter;}
})