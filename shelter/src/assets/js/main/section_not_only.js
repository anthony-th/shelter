import puppyImg from '../../img/start-screen-puppy.webp';

export const sectionNotOnly = document.createElement('section');
sectionNotOnly.classList.add('not-only-block');
const notOnlyContainer = document.createElement('div');
notOnlyContainer.classList.add('not-only-container');
const notOnlyTextBlock = document.createElement('div');
notOnlyTextBlock.classList.add('not-only-textblock');
const notOnlyTitle= document.createElement('h2');
notOnlyTitle.classList.add('textblock__title');
notOnlyTitle.textContent = 'Not only people need a house';
const notOnlyText = document.createElement('p');
notOnlyText.classList.add('textblock__description');
notOnlyText.textContent = 'We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!';
const notOnlyBtn = document.createElement('a');
notOnlyBtn.classList.add('textblock__button');
notOnlyBtn.textContent = 'Make a friend';
notOnlyBtn.href = '#friends';
const imgOnly = document.createElement('img');
imgOnly.classList.add('not-only-pet');
imgOnly.src = puppyImg;

sectionNotOnly.append(notOnlyContainer);
notOnlyContainer.append(notOnlyTextBlock, imgOnly);
notOnlyTextBlock.append(notOnlyTitle, notOnlyText, notOnlyBtn);