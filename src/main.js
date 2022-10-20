const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  hamburgerMenu.classList.toggle('active-menu');
  console.log(hamburgerMenu);
});

/*
let hrElement;
let counter = 100;

for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  if (i == counter - 1) {
    hrElement.className = "thunder";
  } else {
    hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
    hrElement.style.animationDelay = Math.random() * 5 + "s";
  }
  document.body.appendChild(hrElement);
}
*/

const trolleySection = document.querySelector('.promo-container-trolley');

const checkIsVisible = (element) => {
  const rect = element.getBoundingClientRect();
  if (rect.bottom <= window.innerHeight) {

    if (window.matchMedia("(max-width: 360px)").matches)  {
          const trolley = document.querySelector('.promo-trolley-img');
          const texts = document.querySelector('.promo-text');
          texts.style.animation = 'fade-in 2s ease-in forwards';
          trolley.style.animation = 'trolley-mobile 2s ease-in forwards';
        } else {
          trolley.style.animation = 'trolley-ride 4s forwards';
          texts.style.animation = 'fade-in 2s ease-in forwards';
        }
  }
};

document.addEventListener('scroll', () => {
  checkIsVisible(trolleySection);
});

/*

let images = ['photoFromInternet', 'photoFromInternet2', 'photoFromInternet3'];

let index = 0;
const imgElement = document.querySelector('#mainPhoto');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};
*/
