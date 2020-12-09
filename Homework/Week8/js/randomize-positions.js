let pinAmount = 100;
let originalPin = document.querySelector(".womanPin");
let s1 = document.querySelector('#s1')
randomlyDistributePins();


s1.addEventListener('mouseover', event => {
   if (event.target.classList.contains("womanPin")) {
       event.target.classList.add('fadeOut');
       setTimeout(() => event.target.remove(), 600);
   } 
});



function randomlyDistributePins() {    
    removeExistingPins();

    originalPin.classList.toggle('hidden', false);
    let maxHeight = s1.offsetHeight - originalPin.offsetHeight;
    let maxWidth = s1.offsetWidth - originalPin.offsetWidth;
    originalPin.classList.toggle('hidden', true);

    for (let index = 0; index < pinAmount; index++) {
        let copy = originalPin.cloneNode(true); 
        let top = getRandomNumberInRange(maxHeight);
        let left = getRandomNumberInRange(maxWidth);
        copy.style.top = top + "px";
        copy.style.left = left + "px";

        copy.classList.remove("hidden");
        s1.prepend(copy);
    }
}

function removeExistingPins() {
    let pins = document.querySelectorAll('.womanPin:not(.hidden)');
    if (pins) {
        pins.forEach(pin => {
            pin.remove();
        });
    }
}

function getRandomNumberInRange(max) {
    return Math.floor(Math.random() * max);
}




