import { createElement } from "../common/createElement";
import dataJson from "../pets.json";

export const sectionOur = createElement('section', ['pets-our-friends']);
const ourContainer = createElement('div', ['pets-our-container']);
const ourTitle = createElement('h2', ['pets-our-title'], 'Our friends who<br>are looking for a house', {}, true );
export const ourCards = createElement('div', ['pets-our-cards']);
const ourPagination = createElement('div', ['pets-our-pagination']);
const ourPaginationBtn1 = createElement('button', ['pets-our-pagination-btn'], '<<');
const ourPaginationBtn2 = createElement('button', ['pets-our-pagination-btn'], '<');
const ourPaginationBtn3 = createElement('button', ['pets-our-pagination-btn', 'pets-pagination-btn-active']);
const ourPaginationBtn4 = createElement('button', ['pets-our-pagination-btn'], '>');
const ourPaginationBtn5 = createElement('button', ['pets-our-pagination-btn'], '>>');

let currentPage = 1;
let totalPages = 6;
let currentPageChanged = false;

processData();

window.onresize = () => {
  if (location.pathname.includes('pets.html')) {
    let newTotalPages;
    if (window.matchMedia("(min-width: 1280px)").matches) {
      newTotalPages = 6;
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      newTotalPages = 8;
    } else {
      newTotalPages = 16;
    }
    if (totalPages !== newTotalPages) {
      totalPages = newTotalPages;
      currentPageChanged = true;
    } else {
      currentPageChanged = false;
    }
    if (currentPageChanged) {
      processData();
      currentPage = 1;
      ourPaginationBtn3.textContent = currentPage;
    }
  }
};

function processData() {
  const repeatedData = dataJson.flatMap((pet) => Array(6).fill(pet));
  const uniqueIds = [...new Set(repeatedData.map((pet) => pet.name))];
  let shuffledData320 = [],
    shuffledData768 = [],
    shuffledData = [];

  const createRandomPets = (count) => {
    let randomPets = [];
    while (randomPets.length < count) {
      let randomId = uniqueIds[Math.floor(Math.random() * uniqueIds.length)];
      let pet = repeatedData.find((pet) => pet.name === randomId);
      if (!randomPets.includes(pet)) {
        randomPets.push(pet);
      }
    }
    return randomPets;
  };

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
    ourCards.innerHTML = "";
    if (window.matchMedia("(min-width: 1280px)").matches) {
      let petsArray = shuffledData[currentPage - 1];
      petsArray.forEach((pet) => {
        const card = createCard(pet);
        ourCards.appendChild(card);
      });
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      let petsArray768 = shuffledData768[currentPage - 1];
      petsArray768.forEach((pet) => {
        const card = createCard(pet);
        ourCards.appendChild(card);
      });
    } else {
      let petsArray320 = shuffledData320[currentPage - 1];
      petsArray320.forEach((pet) => {
        const card = createCard(pet);
        ourCards.appendChild(card);
      });
    }
    updatePagination(currentPage, totalPages);
  }

  updateCardsAndPagination(1);
  updatePagination(currentPage, totalPages);
}

export function createCard(pet) {
  const card = createElement('div', ['pets-our-card']);
  card.addEventListener("click", () => {
    openModal(pet);
  });
  const cardImg = createElement('img', ['pets-our-card-img'], '', { src: pet.img, alt: '' });
  const cardTitle = createElement('h3', ['pets-our-card-title'], pet.name);
  const cardBtn = createElement('button', ['pets-our-card-btn'], 'Learn more');
  card.append(cardImg, cardTitle, cardBtn);
  return card;
}

export function openModal(pet) {
  const shadow = createElement('div', ['modal-shadow']);
  const modal = createElement('div', ['modal']);
  const modalImg = createElement('img', ['modal-img'], '', { src: pet.img, alt: '' });
  const modalCancel = createElement('button', ['modal-cancel']);
  const modalSvg = createElement('img', ['modal-svg'], '', { src: './assets/images/cancel.svg', alt: ''});
  const modalBlock = createElement('div', ['modal-block']);
  const modalTitle = createElement('h2', ['modal-title'], pet.name);
  const modalSubtitle = createElement('h3', ['modal-subtitle'], `${pet.type} - ${pet.breed}`);
  const modalDescription = createElement('p', ['modal-description'], pet.description);
  const modalTextList = createElement('ul', ['modal-text-block']);
  const modalTextAge = createElement('li', ['modal-info'], `<b>Age:</b> ${pet.age}`, {}, true);
  const modalTextInoculations = createElement('li', ['modal-info'], `<b>Inoculations:</b> ${pet.inoculations}`, {}, true);
  const modalTextDiseases = createElement('li', ['modal-info'], `<b>Diseases:</b> ${pet.diseases}`, {}, true);
  const modalTextParasites = createElement('li', ['modal-info'], `<b>Parasites:</b> ${pet.parasites}`, {}, true);
  modalCancel.onclick = removeAll;
  shadow.onclick = removeAll;
  function removeAll() {
    modal.remove();
    shadow.remove();
  }
  modalTextList.append(
    modalTextAge,
    modalTextInoculations,
    modalTextDiseases,
    modalTextParasites
  );
  modalBlock.append(modalTitle, modalSubtitle, modalDescription, modalTextList);
  modalCancel.append(modalSvg);
  modal.append(modalImg, modalCancel, modalBlock);
  ourCards.append(modal, shadow);
}

function updatePagination(currentPage, totalPages) {
  ourPaginationBtn3.textContent = currentPage;
  if (currentPage === 1) {
    ourPaginationBtn1.classList.add("pets-disabled");
    ourPaginationBtn2.classList.add("pets-disabled");
    ourPaginationBtn1.disabled = true;
    ourPaginationBtn2.disabled = true;
  } else {
    ourPaginationBtn1.classList.remove("pets-disabled");
    ourPaginationBtn2.classList.remove("pets-disabled");
    ourPaginationBtn1.disabled = false;
    ourPaginationBtn2.disabled = false;
  }
  if (currentPage === totalPages) {
    ourPaginationBtn4.classList.add("pets-disabled");
    ourPaginationBtn5.classList.add("pets-disabled");
    ourPaginationBtn4.disabled = true;
    ourPaginationBtn5.disabled = true;
  } else {
    ourPaginationBtn4.classList.remove("pets-disabled");
    ourPaginationBtn5.classList.remove("pets-disabled");
    ourPaginationBtn4.disabled = false;
    ourPaginationBtn5.disabled = false;
  }
}

sectionOur.append(ourContainer);
ourContainer.append(ourTitle, ourCards, ourPagination);
ourPagination.append(
  ourPaginationBtn1,
  ourPaginationBtn2,
  ourPaginationBtn3,
  ourPaginationBtn4,
  ourPaginationBtn5
);
