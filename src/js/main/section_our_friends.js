import { createElement } from '../../common/createElement';
import { createCard, ourCards } from '../pets/section_our_friends';
import dataJson from '../../data/pets.json';

export const sectionOur = createElement('section', ['our-friends']);
const ourContainer = createElement('div', ['our-friends-container']);
const ourTitle = createElement('h2', ['our-friends-title'], 'Our friends who<br>are looking for a house', {id: 'friends'}, true);
const ourSlider = createElement('div', ['our-friends-slider']);
const ourPrevBtn = createElement('a', ['prev-btn']);
const prevImg = createElement('img', ['prev-img'], '', { src: './assets/svg/arrow.svg', alt: '' });
const ourNextBtn = createElement('a', ['next-btn']);
const nextImg = createElement('img', ['next-img'], '', { src: './assets/svg/arrow.svg', alt: '' });
const ourBtn = createElement('a', ['our-friends-btn'], 'Get to know the rest', { href: './pets.html' });

ourCards.className = 'cards';
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