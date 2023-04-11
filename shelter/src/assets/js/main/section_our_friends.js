import arrowImg from '../../svg/arrow.svg';
import cardImg1 from '../../img/katrine.webp';
import cardImg2 from '../../img/jennifer.webp';
import cardImg3 from '../../img/woody.webp';
// import myData from '../pets.json';

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
const ourCards = document.createElement('div');
ourCards.classList.add('cards');
const ourCard1 = document.createElement('div');
ourCard1.classList.add('card');
const ourCardImg1 = document.createElement('img');
ourCardImg1.classList.add('card__img');
ourCardImg1.src = cardImg1;
const ourCardSubtitle1 = document.createElement('h3');
ourCardSubtitle1.classList.add('card__subtitle');
ourCardSubtitle1.textContent = 'Katrine';
const ourCardBtn1 = document.createElement('button');
ourCardBtn1.classList.add('card__btn');
ourCardBtn1.textContent = 'Learn more';
const ourCard2 = document.createElement('div');
ourCard2.classList.add('card');
const ourCardImg2 = document.createElement('img');
ourCardImg2.classList.add('card__img');
ourCardImg2.src = cardImg2;
const ourCardSubtitle2 = document.createElement('h3');
ourCardSubtitle2.classList.add('card__subtitle');
ourCardSubtitle2.textContent = 'Jennifer';
const ourCardBtn2 = document.createElement('button');
ourCardBtn2.classList.add('card__btn');
ourCardBtn2.textContent = 'Learn more';
const ourCard3 = document.createElement('div');
ourCard3.classList.add('card');
const ourCardImg3 = document.createElement('img');
ourCardImg3.classList.add('card__img');
ourCardImg3.src = cardImg3;
const ourCardSubtitle3 = document.createElement('h3');
ourCardSubtitle3.classList.add('card__subtitle');
ourCardSubtitle3.textContent = 'Woody';
const ourCardBtn3 = document.createElement('button');
ourCardBtn3.classList.add('card__btn');
ourCardBtn3.textContent = 'Learn more';
const ourNextBtn = document.createElement('a');
ourNextBtn.classList.add('next-btn');
const nextImg = document.createElement('img');
nextImg.classList.add('next-img');
nextImg.src = arrowImg;
const ourBtn = document.createElement('a');
ourBtn.classList.add('our-friends-btn');
ourBtn.textContent = 'Get to know the rest';
ourBtn.href = './pets.html';

sectionOur.append(ourContainer);
ourContainer.append(ourTitle, ourSlider, ourBtn);
ourSlider.append(ourPrevBtn, ourCards, ourNextBtn);
ourPrevBtn.append(prevImg);
ourCards.append(ourCard1, ourCard2, ourCard3);
ourCard1.append(ourCardImg1, ourCardSubtitle1, ourCardBtn1);
ourCard2.append(ourCardImg2, ourCardSubtitle2, ourCardBtn2);
ourCard3.append(ourCardImg3, ourCardSubtitle3, ourCardBtn3);
ourNextBtn.append(nextImg);
ourContainer.append(ourBtn);

// async function loadData() {
//   const response = await fetch(myData);
//   const data = await response.json();
//   createCards(data);
// }

// function createCards(data) {
//   console.log(data);
// }

// loadData();