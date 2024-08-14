import { createElement } from '../../common/createElement';
import { createCard, ourCards } from '../pets/section_our_friends';
import arrowImg from '../../assets/svg/arrow.svg';
import modalImg from '../../assets/svg/cancel.svg';
import katrine from '../../assets/img/katrine.webp';
import jennifer from '../../assets/img/jennifer.webp';
import woody from '../../assets/img/woody.webp';
import sophia from '../../assets/img/sophia.webp';
import timmy from '../../assets/img/timmy.webp';
import charly from '../../assets/img/charly.webp';
import scarlett from '../../assets/img/scarlett.webp';
import freddie from '../../assets/img/freddie.webp';
import dataJson from '../../data/pets.json';

export const sectionOur = createElement('section', ['our-friends']);
const ourContainer = createElement('div', ['our-friends-container']);
const ourTitle = createElement('h2', ['our-friends-title'], 'Our friends who<br>are looking for a house', {id: 'friends'}, true);
const ourSlider = createElement('div', ['our-friends-slider']);
const ourPrevBtn = createElement('a', ['prev-btn']);
const prevImg = createElement('img', ['prev-img'], '', { src: arrowImg, alt: '' });
const ourNextBtn = createElement('a', ['next-btn']);
const nextImg = createElement('img', ['next-img'], '', { src: arrowImg, alt: '' });
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