import arrowImg from '../../svg/arrow.svg';
import modalImg from '../../svg/cancel.svg';
import katrine from '../../img/katrine.webp';
import jennifer from '../../img/jennifer.webp';
import woody from '../../img/woody.webp';
import sophia from '../../img/sophia.webp';
import timmy from '../../img/timmy.webp';
import charly from '../../img/charly.webp';
import scarlett from '../../img/scarlett.webp';
import freddie from '../../img/freddie.webp';
import dataJson from '../pets.json';
import { createCard, ourCards } from '../pets/section_our_friends';

export const sectionOur = document.createElement('section');
sectionOur.classList.add('our-friends');
const ourContainer = document.createElement('div');
ourContainer.classList.add('our-friends-container');
const ourTitle = document.createElement('h2');
ourTitle.classList.add('our-friends-title');
ourTitle.id = 'friends';
ourTitle.innerHTML = `Our friends who<br>are looking for a house`;
const ourSlider = document.createElement('div');
ourSlider.classList.add('our-friends-slider');
const ourPrevBtn = document.createElement('a');
ourPrevBtn.classList.add('prev-btn');
const prevImg = document.createElement('img');
prevImg.classList.add('prev-img');
prevImg.src = arrowImg;
ourCards.className = 'cards';
ourCards.innerHTML = '';
const ourNextBtn = document.createElement('a');
ourNextBtn.classList.add('next-btn');
const nextImg = document.createElement('img');
nextImg.classList.add('next-img');
nextImg.src = arrowImg;
const ourBtn = document.createElement('a');
ourBtn.classList.add('our-friends-btn');
ourBtn.textContent = 'Get to know the rest';
ourBtn.href = './pets.html';

getData();

function getData() {
  shuffleArray(dataJson);
  ourCards.innerHTML = '';
  dataJson.forEach(pet => {
    const card = createCard(pet);
    ourCards.append(card);
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

ourNextBtn.onclick = generatePrev;
ourPrevBtn.onclick = generateNext;

function generateNext() {
  console.log('generateNext');
}

function generatePrev() {
  console.log('generatePrev');
}

sectionOur.append(ourContainer);
ourContainer.append(ourTitle, ourSlider, ourBtn);
ourSlider.append(ourPrevBtn, ourCards, ourNextBtn);
ourPrevBtn.append(prevImg);
ourNextBtn.append(nextImg);
ourContainer.append(ourBtn);