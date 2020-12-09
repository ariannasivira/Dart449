let pinAmount = 100;
let originalPin = document.querySelector(".womanPin");

s3.addEventListener('mouseover', event => {
   if (event.target.classList.contains("womanPin")) {
       event.target.classList.add('fadeOut');
       setTimeout(() => event.target.remove(), 600);
   } 
});

function randomlyDistributePins() {    
    removeExistingPins();

    originalPin.classList.toggle('hidden', false);
    let maxHeight = s3.offsetHeight - originalPin.offsetHeight;
    let maxWidth = s3.offsetWidth - originalPin.offsetWidth;
    originalPin.classList.toggle('hidden', true);

    for (let index = 0; index < pinAmount; index++) {
        let copy = originalPin.cloneNode(true); 
        let top = getRandomNumberInRange(maxHeight);
        let left = getRandomNumberInRange(maxWidth);
        copy.style.top = top + "px";
        copy.style.left = left + "px";

        copy.classList.remove("hidden");
        s3.prepend(copy);
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

s3.addEventListener('mouseover', event => {
    if (event.target.classList.contains("faces")) {
        event.target.classList.add('fadeOut');
        
        setTimeout(() => {
            let textElement = event.target.nextElementSibling;
            
            event.target.remove();
            textElement.style.display = 'block';
            textElement.classList.add('fadeIn');
        }, 600);
        
    }

});


