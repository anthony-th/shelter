import '../../styles/main/_header.scss';

export const header = document.createElement('header');
header.classList.add('header');
const headerContainer = document.createElement('div');
headerContainer.classList.add('header__container');
const linkLogo = document.createElement('a');
linkLogo.classList.add('logo');
linkLogo.href = '#';
const titleLogo = document.createElement('h1');
titleLogo.classList.add('logo__title');
titleLogo.textContent = 'Cozy House';
const subtitleLogo = document.createElement('p');
subtitleLogo.classList.add('logo__subtitle');
subtitleLogo.textContent = 'Shelter for pets in Boston';
const nav = document.createElement('nav');
nav.classList.add('nav');
const navList = document.createElement('ul');
navList.classList.add('nav__list');
const listItem1 = document.createElement('li');
listItem1.classList.add('nav__item');
const listItem1Link = document.createElement('a');
listItem1Link.textContent = 'About the shelter';
listItem1Link.classList.add('links', 'active-nav');
const listItem2 = document.createElement('li');
listItem2.classList.add('nav__item');
const listItem2Link = document.createElement('a');
listItem2Link.textContent = 'Our pets';
listItem2Link.href = './pets.html';
listItem2Link.classList.add('links');
const listItem3 = document.createElement('li');
listItem3.classList.add('nav__item');
const listItem3Link = document.createElement('a');
listItem3Link.textContent = 'Help the shelter';
listItem3Link.href = '#help-shelter';
listItem3Link.classList.add('links');
const listItem4 = document.createElement('li');
listItem4.classList.add('nav__item');
const listItem4Link = document.createElement('a');
listItem4Link.textContent = 'Contacts';
listItem4Link.href = '#contacts';
listItem4Link.classList.add('links');

header.append(headerContainer);
headerContainer.append(linkLogo, nav);
linkLogo.append(titleLogo, subtitleLogo);
nav.append(navList);
navList.append(listItem1, listItem2, listItem3, listItem4);
listItem1.append(listItem1Link);
listItem2.append(listItem2Link);
listItem3.append(listItem3Link);
listItem4.append(listItem4Link);