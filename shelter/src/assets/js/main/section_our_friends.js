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
const ourNextBtn = document.createElement('a');
ourNextBtn.classList.add('next-btn');
const nextImg = document.createElement('img');
nextImg.classList.add('next-img');
nextImg.src = arrowImg;
const ourBtn = document.createElement('a');
ourBtn.classList.add('our-friends-btn');
ourBtn.textContent = 'Get to know the rest';
ourBtn.href = './pets.html';

processData();

function processData() {
  dataJson.sort((a, b) => a.name.localeCompare(b.name));
  const uniqueIds = [...new Set(dataJson.map(pet => pet.name))];
  const Pets = [];
  while (Pets.length < 3) {
    const randomIndex = Math.floor(Math.random() * uniqueIds.length);
    const petName = uniqueIds[randomIndex];
    const pet = dataJson.find(pet => pet.name === petName);
    if (!Pets.includes(pet)) {
      Pets.push(pet);
    }
  }
  Pets.forEach(pet => {
    const card = createCard(pet);
    ourCards.append(card);
  });
}

ourNextBtn.onclick = generateNewPets;
ourPrevBtn.onclick = generateNewPets;

function generateNewPets() {
  const uniqueIds = [...new Set(dataJson.map(pet => pet.name))];
  const Pets = [];
  while (Pets.length < 3) {
    const randomIndex = Math.floor(Math.random() * uniqueIds.length);
    const petName = uniqueIds[randomIndex];
    const pet = dataJson.find(pet => pet.name === petName);
    if (!Pets.includes(pet)) {
      Pets.push(pet);
    }
  }
  ourCards.innerHTML = '';
  Pets.forEach(pet => {
    const card = createCard(pet);
    ourCards.append(card);
  });
}

sectionOur.append(ourContainer);
ourContainer.append(ourTitle, ourSlider, ourBtn);
ourSlider.append(ourPrevBtn, ourCards, ourNextBtn);
ourPrevBtn.append(prevImg);
ourNextBtn.append(nextImg);
ourContainer.append(ourBtn);