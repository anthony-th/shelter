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

let currentPage = 1;
let totalPages;

fetch(dataJson)
  .then(response => response.json())
  .then(data => {
    const repeatedData = data.flatMap(pet => Array(6).fill(pet));
    const uniqueIds = [...new Set(repeatedData.map(pet => pet.name))];
    const shuffledData = Array(6).fill().map(() => {
      const shuffledCards = uniqueIds
        .map(id => repeatedData.find(pet => pet.name === id))
        .sort(() => Math.random() - 0.5);
      return shuffledCards;
    });

    console.log(shuffledData);
    totalPages = Math.ceil(repeatedData.length / 8);
    
    ourPaginationBtn1.onclick = () => {
      currentPage = 1;
      updatePagination(currentPage, totalPages)
      updateCardsAndPagination(currentPage);
    };

    ourPaginationBtn2.onclick = () => {
      currentPage = currentPage - 1;
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }
      updatePagination(currentPage, totalPages)
      updateCardsAndPagination(currentPage);
    };

    ourPaginationBtn4.onclick = () => {
      currentPage = currentPage + 1;
      if (currentPage > totalPages) {
        currentPage = totalPages;
      }
      updatePagination(currentPage, totalPages)
      updateCardsAndPagination(currentPage);
    };

    ourPaginationBtn5.onclick = () => {
      currentPage = totalPages;
      updatePagination(currentPage, totalPages)
      updateCardsAndPagination(currentPage);
    };

    function updateCardsAndPagination(currentPage) {
      ourCards.innerHTML = '';
      const cards = shuffledData[currentPage - 1].map(pet => createCard(pet));
      cards.forEach(card => ourCards.append(card));
    }

    updateCardsAndPagination(1);
    updatePagination(currentPage, totalPages);
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
ourPaginationBtn1.classList.add('pets-our-pagination-btn');
ourPaginationBtn1.textContent = '<<';
const ourPaginationBtn2 = document.createElement('button');
ourPaginationBtn2.classList.add('pets-our-pagination-btn');
ourPaginationBtn2.textContent = '<';
const ourPaginationBtn3 = document.createElement('button');
ourPaginationBtn3.classList.add('pets-our-pagination-btn', 'pets-pagination-btn-active');
const ourPaginationBtn4 = document.createElement('button');
ourPaginationBtn4.classList.add('pets-our-pagination-btn');
ourPaginationBtn4.textContent = '>';
const ourPaginationBtn5 = document.createElement('button');
ourPaginationBtn5.classList.add('pets-our-pagination-btn');
ourPaginationBtn5.textContent = '>>';

function updatePagination(currentPage, totalPages) {
  ourPaginationBtn3.textContent = currentPage;
  if (currentPage === 1) {
    ourPaginationBtn1.classList.add('pets-disabled');
    ourPaginationBtn2.classList.add('pets-disabled');
    ourPaginationBtn1.disabled = true;
    ourPaginationBtn2.disabled = true;
  } else {
    ourPaginationBtn1.classList.remove('pets-disabled');
    ourPaginationBtn2.classList.remove('pets-disabled');
    ourPaginationBtn1.disabled = false;
    ourPaginationBtn2.disabled = false;
  }
  if (currentPage === totalPages) {
    ourPaginationBtn4.classList.add('pets-disabled');
    ourPaginationBtn5.classList.add('pets-disabled');
    ourPaginationBtn4.disabled = true;
    ourPaginationBtn5.disabled = true;
  } else {
    ourPaginationBtn4.classList.remove('pets-disabled');
    ourPaginationBtn5.classList.remove('pets-disabled');
    ourPaginationBtn4.disabled = false;
    ourPaginationBtn5.disabled = false;
  }
}

sectionOur.append(ourContainer);
ourContainer.append(ourTitle, ourCards, ourPagination);
ourPagination.append(ourPaginationBtn1, ourPaginationBtn2, ourPaginationBtn3, ourPaginationBtn4, ourPaginationBtn5);