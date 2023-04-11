import katrine from '../../img/katrine.webp';
import jennifer from '../../img/jennifer.webp';
import woody from '../../img/woody.webp';
import sophia from '../../img/sophia.webp';
import timmy from '../../img/timmy.webp';
import charly from '../../img/charly.webp';
import scarlett from '../../img/scarlett.webp';
import freddie from '../../img/freddie.webp';
import dataJson from '../pets.json';

export const sectionOur = document.createElement('section');
sectionOur.classList.add('pets-our-friends');
const ourContainer = document.createElement('div');
ourContainer.classList.add('pets-our-container');
const ourTitle = document.createElement('h2');
ourTitle.classList.add('pets-our-title');
ourTitle.innerHTML = `Our friends who<br>are looking for a house`;
const ourCards = document.createElement('div');
ourCards.classList.add('pets-our-cards');

fetch(dataJson)
  .then(response => response.json())
  .then(data => {
    const shuffledData = data.sort(() => Math.random() - 0.5).slice(0, 8);
    const ourCard1 = createCard(shuffledData[0]);
    const ourCard2 = createCard(shuffledData[1]);
    const ourCard3 = createCard(shuffledData[2]);
    const ourCard4 = createCard(shuffledData[3]);
    const ourCard5 = createCard(shuffledData[4]);
    const ourCard6 = createCard(shuffledData[5]);
    const ourCard7 = createCard(shuffledData[6]);
    const ourCard8 = createCard(shuffledData[7]);
    ourCards.append(ourCard1, ourCard2, ourCard3, ourCard4, ourCard5, ourCard6, ourCard7, ourCard8);
  });

function createCard(pet) {
  const card = document.createElement('div');
  card.classList.add('pets-our-card');
  const cardImg = document.createElement('img');
  cardImg.classList.add('pets-our-card-img');
  cardImg.src = pet.img;
  cardImg.alt = '';
  card.append(cardImg);
  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('pets-our-card-title');
  cardTitle.textContent = pet.name;
  card.append(cardTitle);
  const cardBtn = document.createElement('button');
  cardBtn.classList.add('pets-our-card-btn');
  cardBtn.textContent = 'Learn more';
  card.append(cardBtn);
  return card;
}

const ourPagination = document.createElement('div');
ourPagination.classList.add('pets-our-pagination');
const ourPaginationBtn1 = document.createElement('button');
ourPaginationBtn1.classList.add('pets-our-pagination-btn', 'pets-disabled');
ourPaginationBtn1.textContent = '<<';
ourPaginationBtn1.disabled = 'true';
const ourPaginationBtn2 = document.createElement('button');
ourPaginationBtn2.classList.add('pets-our-pagination-btn', 'pets-disabled');
ourPaginationBtn2.textContent = '<';
ourPaginationBtn2.disabled = 'true';
const ourPaginationBtn3 = document.createElement('button');
ourPaginationBtn3.classList.add('pets-our-pagination-btn', 'pets-pagination-btn-active');
ourPaginationBtn3.textContent = '1';
const ourPaginationBtn4 = document.createElement('button');
ourPaginationBtn4.classList.add('pets-our-pagination-btn');
ourPaginationBtn4.textContent = '>';
const ourPaginationBtn5 = document.createElement('button');
ourPaginationBtn5.classList.add('pets-our-pagination-btn');
ourPaginationBtn5.textContent = '>>';

sectionOur.append(ourContainer);
ourContainer.append(ourTitle, ourCards, ourPagination);
ourPagination.append(ourPaginationBtn1, ourPaginationBtn2, ourPaginationBtn3, ourPaginationBtn4, ourPaginationBtn5);