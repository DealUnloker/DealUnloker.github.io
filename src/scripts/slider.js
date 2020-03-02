var slideIndex = 1;
const slider_lenght = document.getElementsByClassName('slide').length + 1;


//Set first slide z-index: 0
var current_slide = document.getElementById(`slide_1`);
current_slide.style.opacity = 1;

function plusSlide() {
    showSlides(slideIndex + 1)
}


function minusSlide() {
    showSlides(slideIndex - 1)
}

function showSlides(next_slide) {
    var pastIndex = slideIndex;
    if (next_slide == 0)
        slideIndex = slider_lenght - 1;
    else if (next_slide == slider_lenght)
        slideIndex = 1;
    else
        slideIndex = next_slide;
    var slide = document.getElementById(`slide_${slideIndex}`);
    var past_slide = document.getElementById(`slide_${pastIndex}`);
    for (var x = 1; x < slider_lenght; x++) {
        if (x == pastIndex || x == slideIndex)
            continue;
        document.getElementById(`slide_${x}`).style.zIndex = -2;
    }
    slide.style.zIndex = 0;
    past_slide.style.zIndex = -999;
    fade(slide);
    past_slide.style.opacity = 0;
}


function fade(element) {
    var op = 0;
    var intervalId = setInterval(function() {
        element.style.opacity = op;
        op += 0.05;
        if (op == 1) clearInterval(intervalId);
    }, 70);
}

function info() {
    for (var i = 1; i <= slider_lenght; i++) {
        alert(document.getElementById(`slide_${i}`).style.zIndex)
    }
}