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
const cardsContainer = document.createElement('div');
cardsContainer.classList.add('cards-container');
const ourCards = document.createElement('div');
ourCards.classList.add('cards', 'active');
const ourCardsTwo = document.createElement('div');
ourCardsTwo.classList.add('cards', 'previously');
const ourCardsThree = document.createElement('div');
ourCardsThree.classList.add('cards', 'next');
const ourNextBtn = document.createElement('a');
ourNextBtn.classList.add('next-btn');
const nextImg = document.createElement('img');
nextImg.classList.add('next-img');
nextImg.src = arrowImg;
const ourBtn = document.createElement('a');
ourBtn.classList.add('our-friends-btn');
ourBtn.textContent = 'Get to know the rest';
ourBtn.href = './pets.html';

let currentCards = [];

async function getPets() {
  try {
    const randomPets = dataJson.sort(() => 0.5 - Math.random()).slice(0, 8);
    const cardGroups = [];
    for (let i = 0; i < randomPets.length; i += 3) {
      cardGroups.push(randomPets.slice(i, i + 3));
    }
    currentCards = cardGroups[0];
    const remainingPets = randomPets.filter(pet => !currentCards.includes(pet));
    const secondGroup = remainingPets.slice(0, 3);
    const thirdGroup = [...secondGroup.slice(0, 2), remainingPets.slice(3)[0]];
    renderCards(currentCards, ourCards);
    console.log(currentCards);
    renderCards(secondGroup, ourCardsTwo);
    console.log(secondGroup);
    renderCards(thirdGroup, ourCardsThree);
    console.log(thirdGroup);
  } catch (error) {
    console.error(error);
  }
}

function renderCards(cards, container) {
  container.innerHTML = '';
  cards.forEach((pet) => {
    const card = createCard(pet);
    container.append(card);
  });
}

getPets();

ourPrevBtn.onclick = prevPage;
ourNextBtn.onclick = nextPage;


function prevPage() {

  ourCards.classList.add('transitionx-left');
  ourCardsTwo.classList.add('transitionx-left');
  ourCardsThree.classList.add('transitionx-left');
  ourCards.addEventListener('transitionend', handleTransitionEndLeft);

}

function nextPage() {

  ourCards.addEventListener('transitionend', handleTransitionEndRight);
}

function handleTransitionEndLeft() {
  if (ourCards.classList.contains('active')) {
    ourCards.classList.remove('active');
    ourCards.classList.add('next');
    ourCardsTwo.classList.remove('previously');
    ourCardsTwo.classList.add('active');
    ourCardsThree.classList.remove('next');
    ourCardsThree.classList.add('previously');
  } else if (ourCardsTwo.classList.contains('active')) {
    ourCardsTwo.classList.remove('active');
    ourCardsTwo.classList.add('next');
    ourCardsThree.classList.remove('previously');
    ourCardsThree.classList.add('active');
    ourCards.classList.remove('next');
    ourCards.classList.add('previously');
  } else {
    ourCardsThree.classList.remove('active');
    ourCardsThree.classList.add('next');
    ourCards.classList.remove('previously');
    ourCards.classList.add('active');  
    ourCardsTwo.classList.remove('next');
    ourCardsTwo.classList.add('previously');
  }

  ourCards.classList.remove('transitionx-left');
  ourCardsTwo.classList.remove('transitionx-left');
  ourCardsThree.classList.remove('transitionx-left');
  ourCards.removeEventListener('transitionend', handleTransitionEndLeft);


}

function handleTransitionEndRight() {


  ourCards.removeEventListener('transitionend', handleTransitionEndLeft);
}


function createCard(pet) {
  const ourCard = document.createElement('div');
  ourCard.classList.add('card');
  ourCard.addEventListener('click', () => {
    openModal(pet);
  });
  const ourCardImg = document.createElement('img');
  ourCardImg.classList.add('card__img');
  ourCardImg.src = pet.img;
  ourCardImg.alt = '';
  const ourCardSubtitle = document.createElement('h3');
  ourCardSubtitle.classList.add('card__subtitle');
  ourCardSubtitle.textContent = pet.name;
  const ourCardBtn = document.createElement('button');
  ourCardBtn.classList.add('card__btn');
  ourCardBtn.textContent = 'Learn more';
  ourCard.append(ourCardImg, ourCardSubtitle, ourCardBtn);
  return ourCard;
}



function openModal(pet) {
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
  modalSvg.src = './assets/images/cancel.svg';
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
  ourContainer.append(modal);
  document.body.append(shadow);
  modalCancel.onclick = removeAll; 
  shadow.onclick = removeAll; 
  function removeAll() {
    modal.remove();
    shadow.remove();
  }
}

sectionOur.append(ourContainer);
ourContainer.append(ourTitle, ourSlider, ourBtn);
cardsContainer.append(ourCardsTwo, ourCards, ourCardsThree);
ourSlider.append(ourPrevBtn, cardsContainer, ourNextBtn);
ourPrevBtn.append(prevImg);
ourNextBtn.append(nextImg);
ourContainer.append(ourBtn);