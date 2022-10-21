const hamburger = document.querySelector('.hamburger');
const hamburgerLink = document.querySelectorAll('hamburger-menu-link1');
const trolleySection = document.querySelector('.promo-container-trolley');

hamburger.addEventListener('click', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  hamburgerMenu.classList.toggle('active-menu');
});

hamburgerLink.addEventListener('click', () => {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  hamburgerMenu.classList.remove('active-menu');
});

const checkIsVisible = (element) => {
  const rect = element.getBoundingClientRect();
  if (rect.bottom <= window.innerHeight) {
    const trolley = document.querySelector('.promo-trolley-img');
    const texts = document.querySelector('.promo-text');

    trolley.style.animation = 'trolley-ride 4s forwards';
    texts.style.animation = 'fade-in 2s ease-in forwards';

    if (window.matchMedia("(max-width: 360px)").matches)  {
          texts.style.animation = 'fade-in 2s ease-in forwards';
          trolley.style.animation = 'trolley-mobile 1s ease-in forwards';
        } 
  }
};

document.addEventListener('scroll', () => {
  checkIsVisible(trolleySection);
});


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
