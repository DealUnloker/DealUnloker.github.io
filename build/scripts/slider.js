var slideIndex = 1;
const slider_lenght = 4;


function plusSlide() {
    if (slideIndex == slider_lenght)
        slideIndex = 1;
    else
        slideIndex += 1;
    showSlides(slideIndex);
}


function minusSlide() {
    if (slideIndex == 1)
        slideIndex = slider_lenght;
    else
        slideIndex -= 1;
    showSlides(slideIndex);
}

function showSlides(n) {
    var slide = document.getElementById("slide");
    slide.style.backgroundImage = `url("../img/slider/slide_${slideIndex}.jpg")`
}