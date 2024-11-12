var imgs = document.querySelectorAll('.images img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0;
const interval = 3000;

function changeSlider(n) {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity = 0;
        dots[i].className = 'dot';
    }
    imgs[n].style.opacity = 1;
    dots[n].className = 'dot active';
    currentImg = n;
}

changeSlider(0);

var timer = setInterval(function() {
    changeSlider((currentImg + 1) % imgs.length);
}, interval);

for (var i = 0; i < dots.length; i++) {
    dots[i].onclick = function(index) {
        return function() {
            clearInterval(timer);
            changeSlider(index);
            timer = setInterval(function() {
                changeSlider((currentImg + 1) % imgs.length);
            }, interval);
        };
    }(i);
}