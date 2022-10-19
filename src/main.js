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


const trolleySection = document.querySelector('.promo-container-trolley');

const checkIsVisible = (element) => {
  const rect = element.getBoundingClientRect();
  if (rect.bottom <= window.innerHeight) {
    const trolley = document.querySelector('.promo-trolley-img');
    const texts = document.querySelector('.promo-text');
    trolley.style.animation = 'trolley-ride 4s forwards';
    texts.style.animation = 'fade-in 2s ease-in forwards';
  }
};

document.addEventListener('scroll', () => {
  checkIsVisible(trolleySection);
});

*/