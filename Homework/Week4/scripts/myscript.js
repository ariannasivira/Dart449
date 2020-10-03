

let toggles = document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', event => {
        let lightOnElement = document.querySelector('#on');
        let containerElement = document.querySelector('.container');

    if (lightOnElement.classList.contains('hidden')) {
        lightOnElement.classList.remove('hidden');
        containerElement.classList.remove('off')
        
    }
    else{
        lightOnElement.classList.add('hidden');
        containerElement.classList.add('off')
    }
    })
});

