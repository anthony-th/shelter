import '../../styles/pets/_our_friends.scss';
import katrine from '../../img/katrine.webp';
import jennifer from '../../img/jennifer.webp';
import woody from '../../img/woody.webp';
import sophia from '../../img/sophia.webp';
import timmy from '../../img/timmy.webp';
import charly from '../../img/charly.webp';
import scarlett from '../../img/scarlett.webp';
import freddie from '../../img/freddie.webp';

export const sectionOur = document.createElement('section');
sectionOur.classList.add('our-friends');
const ourContainer = document.createElement('div');
ourContainer.classList.add('our-container');
const ourTitle = document.createElement('h2');
ourTitle.classList.add('our-title');
ourTitle.innerHTML = `Our friends who<br>are looking for a house`;
const ourCards = document.createElement('div');
ourCards.classList.add('our-cards');
const ourCard1 = document.createElement('div');
ourCard1.classList.add('our-card');
const ourCardImg1 = document.createElement('img');
ourCardImg1.classList.add('our-card-img');
ourCardImg1.src = katrine;
ourCardImg1.alt = '';
const ourCardTitle1 = document.createElement('h3');
ourCardTitle1.classList.add('our-card-title');
ourCardTitle1.textContent = 'Katrine';
const ourCardBtn1 = document.createElement('button');
ourCardBtn1.classList.add('our-card-btn');
ourCardBtn1.textContent = 'Learn more';
const ourCard2 = document.createElement('div');
ourCard2.classList.add('our-card');
const ourCardImg2 = document.createElement('img');
ourCardImg2.classList.add('our-card-img');
ourCardImg2.src = jennifer;
ourCardImg2.alt = '';
const ourCardTitle2 = document.createElement('h3');
ourCardTitle2.classList.add('our-card-title');
ourCardTitle2.textContent = 'Jennifer';
const ourCardBtn2 = document.createElement('button');
ourCardBtn2.classList.add('our-card-btn');
ourCardBtn2.textContent = 'Learn more';
const ourCard3 = document.createElement('div');
ourCard3.classList.add('our-card');
const ourCardImg3 = document.createElement('img');
ourCardImg3.classList.add('our-card-img');
ourCardImg3.src = woody;
ourCardImg3.alt = '';
const ourCardTitle3 = document.createElement('h3');
ourCardTitle3.classList.add('our-card-title');
ourCardTitle3.textContent = 'Woody';
const ourCardBtn3 = document.createElement('button');
ourCardBtn3.classList.add('our-card-btn');
ourCardBtn3.textContent = 'Learn more';
const ourCard4 = document.createElement('div');
ourCard4.classList.add('our-card');
const ourCardImg4 = document.createElement('img');
ourCardImg4.classList.add('our-card-img');
ourCardImg4.src = sophia;
ourCardImg4.alt = '';
const ourCardTitle4 = document.createElement('h3');
ourCardTitle4.classList.add('our-card-title');
ourCardTitle4.textContent = 'Sophia';
const ourCardBtn4 = document.createElement('button');
ourCardBtn4.classList.add('our-card-btn');
ourCardBtn4.textContent = 'Learn more';
const ourCard5 = document.createElement('div');
ourCard5.classList.add('our-card');
const ourCardImg5 = document.createElement('img');
ourCardImg5.classList.add('our-card-img');
ourCardImg5.src = timmy;
ourCardImg5.alt = '';
const ourCardTitle5 = document.createElement('h3');
ourCardTitle5.classList.add('our-card-title');
ourCardTitle5.textContent = 'Timmy';
const ourCardBtn5 = document.createElement('button');
ourCardBtn5.classList.add('our-card-btn');
ourCardBtn5.textContent = 'Learn more';
const ourCard6 = document.createElement('div');
ourCard6.classList.add('our-card');
const ourCardImg6 = document.createElement('img');
ourCardImg6.classList.add('our-card-img');
ourCardImg6.src = charly;
ourCardImg6.alt = '';
const ourCardTitle6 = document.createElement('h3');
ourCardTitle6.classList.add('our-card-title');
ourCardTitle6.textContent = 'Charly';
const ourCardBtn6 = document.createElement('button');
ourCardBtn6.classList.add('our-card-btn');
ourCardBtn6.textContent = 'Learn more';
const ourCard7 = document.createElement('div');
ourCard7.classList.add('our-card');
const ourCardImg7 = document.createElement('img');
ourCardImg7.classList.add('our-card-img');
ourCardImg7.src = scarlett;
ourCardImg7.alt = '';
const ourCardTitle7 = document.createElement('h3');
ourCardTitle7.classList.add('our-card-title');
ourCardTitle7.textContent = 'Scarlett';
const ourCardBtn7 = document.createElement('button');
ourCardBtn7.classList.add('our-card-btn');
ourCardBtn7.textContent = 'Learn more';
const ourCard8 = document.createElement('div');
ourCard8.classList.add('our-card');
const ourCardImg8 = document.createElement('img');
ourCardImg8.classList.add('our-card-img');
ourCardImg8.src = freddie;
ourCardImg8.alt = '';
const ourCardTitle8 = document.createElement('h3');
ourCardTitle8.classList.add('our-card-title');
ourCardTitle8.textContent = 'Freddie';
const ourCardBtn8 = document.createElement('button');
ourCardBtn8.classList.add('our-card-btn');
ourCardBtn8.textContent = 'Learn more';
const ourPagination = document.createElement('div');
ourPagination.classList.add('our-pagination');
const ourPaginationBtn1 = document.createElement('button');
ourPaginationBtn1.classList.add('our-pagination-btn', 'disabled');
ourPaginationBtn1.textContent = '<<';
ourPaginationBtn1.disabled;
const ourPaginationBtn2 = document.createElement('button');
ourPaginationBtn2.classList.add('our-pagination-btn', 'disabled');
ourPaginationBtn2.textContent = '<';
ourPaginationBtn2.disabled;
const ourPaginationBtn3 = document.createElement('button');
ourPaginationBtn3.classList.add('our-pagination-btn', 'pagination-btn-active');
ourPaginationBtn3.textContent = '1';
const ourPaginationBtn4 = document.createElement('button');
ourPaginationBtn4.classList.add('our-pagination-btn');
ourPaginationBtn4.textContent = '>';
const ourPaginationBtn5 = document.createElement('button');
ourPaginationBtn5.classList.add('our-pagination-btn');
ourPaginationBtn5.textContent = '>>';

sectionOur.append(ourContainer);
ourContainer.append(ourTitle);
ourContainer.append(ourCards);
ourCards.append(ourCard1);
ourCard1.append(ourCardImg1);
ourCard1.append(ourCardTitle1);
ourCard1.append(ourCardBtn1);
ourCards.append(ourCard2);
ourCard2.append(ourCardImg2);
ourCard2.append(ourCardTitle2);
ourCard2.append(ourCardBtn2);
ourCards.append(ourCard3);
ourCard3.append(ourCardImg3);
ourCard3.append(ourCardTitle3);
ourCard3.append(ourCardBtn3);
ourCards.append(ourCard4);
ourCard4.append(ourCardImg4);
ourCard4.append(ourCardTitle4);
ourCard4.append(ourCardBtn4);
ourCards.append(ourCard5);
ourCard5.append(ourCardImg5);
ourCard5.append(ourCardTitle5);
ourCard5.append(ourCardBtn5);
ourCards.append(ourCard6);
ourCard6.append(ourCardImg6);
ourCard6.append(ourCardTitle6);
ourCard6.append(ourCardBtn6);
ourCards.append(ourCard7);
ourCard7.append(ourCardImg7);
ourCard7.append(ourCardTitle7);
ourCard7.append(ourCardBtn7);
ourCards.append(ourCard8);
ourCard8.append(ourCardImg8);
ourCard8.append(ourCardTitle8);
ourCard8.append(ourCardBtn8);
ourContainer.append(ourPagination);
ourPagination.append(ourPaginationBtn1);
ourPagination.append(ourPaginationBtn2);
ourPagination.append(ourPaginationBtn3);
ourPagination.append(ourPaginationBtn4);
ourPagination.append(ourPaginationBtn5);


