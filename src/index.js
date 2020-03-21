import './scripts/slider.js'
import './sass/style.sass'
import './sass/large.sass'
import './sass/medium.sass'
import './sass/small.sass'
import './sass/extra_small.sass'
import './sass/slider.sass'
import 'bootstrap/dist/css/bootstrap.min.css';

window.SecretRoom = function() {
    var inputVal = document.getElementById("submit_btn").value;
    console.log(inputVal);
    if (inputVal == "1337") {
        var doc = document.getElementsByTagName('body')[0];
        doc.style.display = "none";
        var doc2 = document.getElementsByTagName('html')[0];
        setInterval(function() {
            var randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
            console.log(randomColor)
            doc2.style.backgroundColor = randomColor;
        }, 50);
    }
}