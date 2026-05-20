import { cards } from './cards.js';
const lightBtn = document.querySelector(".btnSun");
const nightBtn = document.querySelector(".btnNight");
const background = document.getElementsByClassName("hero-background")[0];
const skills = document.getElementsByClassName("skills")[0];
const cardBackGround = document.getElementsByClassName("skill-card");

let exsist = 0;
generateCards(cards);
let mode = "night";
lightBtn.addEventListener('click', () => {
  const avatar = document.getElementById("avatar");
  avatar.src = "imgs/sun.png";
  background.classList.remove("hero-background");
  background.classList.add("light-theme");
  const text = document.getElementsByClassName("hero-left")[0];
  text.classList.remove("light-shadow");
  text.classList.add("black-shadow");
  const name = document.getElementById("name");
  name.style.color = "#fdaa48";
  name.classList.toggle("orange-shadow");



  mode = "light"
});
nightBtn.addEventListener('click', () => {
  const avatar = document.getElementById("avatar");
  avatar.src = "imgs/moon.png";
  background.classList.remove("light-theme");
  background.classList.add("hero-background");
  const text = document.getElementsByClassName("hero-left")[0];
  text.style.color = "white";
  text.classList.remove("black-shadow");
  text.classList.add("light-shadow");
  const name = document.getElementById("name");
  name.style.color = "#c7d2d8";
  name.classList.remove("orange-shadow");

  mode = "night";
});

function generateCards(cards) {
  if (exsist != 1) {
    cards.forEach((card) => {
      skills.innerHTML += `<div class="skill-card">${card.icon} <h1>${card.text}</h1>
      </div>`;
    });
    const skillCards = document.getElementsByClassName("skill-card");
    for (let i = 0; i < cards.length; i++) {
      const icon = skillCards[i].getElementsByTagName('i')[0];
      icon.setAttribute("style", `color : ${cards[i].color}`);
      skillCards[i].style.color = cards[i].color;
    }
    exsist = 1;
  }
}
