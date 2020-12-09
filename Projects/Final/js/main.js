// let infoChange = document.querySelector('#numberToChange');

// var changeNumber = function() {
//     let newText = infoChange.textContent === '1,181*' 
//       ? '4000+'
//       : '1,181*';
//     setTimeout(() => {
//       infoChange.textContent = newText;
//     }, 300);
// }

// infoChange.addEventListener('mouseenter', changeNumber);

// infoChange.addEventListener('mouseleave', changeNumber);

let redHands = document.querySelector('.redHands');
let s3 =document.querySelector('#s3');


redHands.addEventListener('click',(event) =>{
  if(event.target.classList.contains('hands')){
    let province = event.target.getAttribute('data-province');
    let provinceElement = s3.querySelector('.' + province);
    let allOtherProvinceElements = s3.querySelectorAll(`.province:not(.${province})`);

    let isHiddenAdded = provinceElement.classList.toggle('hidden');
    s3.classList.toggle('hidden', isHiddenAdded);
    allOtherProvinceElements.forEach(element => {
      element.classList.toggle('hidden', true);
    });
    if (!isHiddenAdded){
      randomlyDistributePins();
    }
    provinceElement.scrollIntoView();
  }
} );


