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
let totalPages = 6;
let data;
let resizeTimer;

window.onresize = () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (window.matchMedia('(min-width: 1280px)').matches) {
      totalPages = 6;
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      totalPages = 8;
    } else {
      totalPages = 16;
    }
    processData();
    currentPage = 1;
    ourPaginationBtn3.textContent = currentPage;
  }, 100);
};

async function getPets() {
  try {
    const response = await fetch(dataJson);
    data = await response.json();
    processData();
  } catch (error) {
    console.error(error);
  }
}
getPets();

function processData() {
  const repeatedData = data.flatMap(pet => Array(6).fill(pet));
  const uniqueIds = [...new Set(repeatedData.map(pet => pet.name))];
  let shuffledData320 = [], shuffledData768 = [], shuffledData = []; 

  const createRandomPets = (count) => {
    let randomPets = [];
    while (randomPets.length < count) {
      let randomId = uniqueIds[Math.floor(Math.random() * uniqueIds.length)];
      let pet = repeatedData.find(pet => pet.name === randomId);
      if (!randomPets.includes(pet)) {
        randomPets.push(pet);
      }
    }
    return randomPets;
  }
  
  shuffledData320 = new Array(totalPages).fill().map(() => createRandomPets(3));
  shuffledData768 = new Array(totalPages).fill().map(() => createRandomPets(6));
  shuffledData = new Array(totalPages).fill().map(() => createRandomPets(8));

  const paginationBtnClick = (page) => {
    currentPage = page;
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    updatePagination(currentPage, totalPages);
    updateCardsAndPagination(currentPage);
  };

  ourPaginationBtn1.onclick = () => paginationBtnClick(1);
  ourPaginationBtn2.onclick = () => paginationBtnClick(currentPage - 1);
  ourPaginationBtn4.onclick = () => paginationBtnClick(currentPage + 1);
  ourPaginationBtn5.onclick = () => paginationBtnClick(totalPages);

  function updateCardsAndPagination(currentPage) {
    ourCards.innerHTML = ''; 
    if (window.matchMedia('(min-width: 1280px)').matches) {
      let petsArray = shuffledData[currentPage - 1];
      petsArray.forEach(pet => {
        const card = createCard(pet);
        ourCards.appendChild(card);
      });
    } else if (window.matchMedia('(min-width: 768px)').matches) {
      let petsArray768 = shuffledData768[currentPage - 1];
      petsArray768.forEach(pet => {
        const card = createCard(pet);
        ourCards.appendChild(card);
      });
    } else {
      let petsArray320 = shuffledData320[currentPage - 1];
      petsArray320.forEach(pet => {
        const card = createCard(pet);
        ourCards.appendChild(card);
      });
    }
    updatePagination(currentPage, totalPages);
  }

  updateCardsAndPagination(1);
  updatePagination(currentPage, totalPages);
}

function createCard(pet) {
  const card = document.createElement('div');
  card.classList.add('pets-our-card');
  card.addEventListener('click', () => {
    openModal(pet);
  });
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

export function openModal(pet) {
  const shadow = document.createElement('div');
  shadow.classList.add('modal-shadow');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalImg = document.createElement('img');
  modalImg.classList.add('modal-img');
  modalImg.src = pet.img;
  const modalCancel = document.createElement('button');
  modalCancel.classList.add('modal-cancel');
  const modalSvg = document.createElement('img');
  modalSvg.classList.add('modal-svg');
  modalSvg.src = './images/cancel.svg';
  const modalBlock = document.createElement('div');
  modalBlock.classList.add('modal-block');
  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('modal-title');
  modalTitle.textContent = pet.name;
  const modalSubtitle = document.createElement('h3');
  modalSubtitle.classList.add('modal-subtitle');
  modalSubtitle.textContent = `${pet.type} - ${pet.breed}`;
  const modalDescription = document.createElement('p');
  modalDescription.classList.add('modal-description');
  modalDescription.textContent = pet.description;
  const modalTextList = document.createElement('ul');
  modalTextList.classList.add('modal-text-block');
  const modalTextAge = document.createElement('li');
  modalTextAge.classList.add('modal-info');
  modalTextAge.innerHTML = `<b>Age:</b> ${pet.age}`;
  const modalTextInoculations = document.createElement('li');
  modalTextInoculations.classList.add('modal-info');
  modalTextInoculations.innerHTML = `<b>Inoculations:</b> ${pet.inoculations}`;
  const modalTextDiseases = document.createElement('li');
  modalTextDiseases.classList.add('modal-info');
  modalTextDiseases.innerHTML = `<b>Diseases:</b> ${pet.diseases}`;
  const modalTextParasites = document.createElement('li');
  modalTextParasites.classList.add('modal-info');
  modalTextParasites.innerHTML = `<b>Parasites:</b> ${pet.parasites}`;
  modalTextList.append(modalTextAge, modalTextInoculations, modalTextDiseases, modalTextParasites);
  modalBlock.append(modalTitle, modalSubtitle, modalDescription, modalTextList);
  modalCancel.append(modalSvg);
  modal.append(modalImg, modalCancel, modalBlock);
  ourCards.append(modal);
  document.body.append(shadow);
  modalCancel.onclick = removeAll; 
  shadow.onclick = removeAll; 
  function removeAll() {
    modal.remove();
    shadow.remove();
  }
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