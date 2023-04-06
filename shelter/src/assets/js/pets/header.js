export const header = document.createElement('header');
header.classList.add('pets-header');
const headerContainer = document.createElement('div');
headerContainer.classList.add('pets-header__container');
const linkLogo = document.createElement('a');
linkLogo.classList.add('pets-logo');
linkLogo.href = './';
const titleLogo = document.createElement('h1');
titleLogo.classList.add('pets-logo__title');
titleLogo.textContent = 'Cozy House';
const subtitleLogo = document.createElement('p');
subtitleLogo.classList.add('pets-logo__subtitle');
subtitleLogo.textContent = 'Shelter for pets in Boston';
const nav = document.createElement('nav');
nav.classList.add('pets-nav');
const navList = document.createElement('ul');
navList.classList.add('pets-nav__list');
const listItem1 = document.createElement('li');
listItem1.classList.add('pets-nav__item');
const listItem1Link = document.createElement('a');
listItem1Link.textContent = 'About the shelter';
listItem1Link.href = './';
listItem1Link.classList.add('pets-links');
const listItem2 = document.createElement('li');
listItem2.classList.add('pets-nav__item');
const listItem2Link = document.createElement('a');
listItem2Link.textContent = 'Our pets';
listItem2Link.classList.add('pets-links', 'pets-active-nav');
const listItem3 = document.createElement('li');
listItem3.classList.add('pets-nav__item');
const listItem3Link = document.createElement('a');
listItem3Link.textContent = 'Help the shelter';
listItem3Link.href = './#help-shelter';
listItem3Link.classList.add('pets-links');
const listItem4 = document.createElement('li');
listItem4.classList.add('pets-nav__item');
const listItem4Link = document.createElement('a');
listItem4Link.textContent = 'Contacts';
listItem4Link.href = '#contacts';
listItem4Link.classList.add('pets-links');
const burgerMenu = document.createElement('div');
burgerMenu.classList.add('pets-burger-menu');
burgerMenu.style.cursor = 'pointer';
const burgerLine1 = document.createElement('hr');
burgerLine1.classList.add('pets-burger-line');
const burgerLine2 = document.createElement('hr');
burgerLine2.classList.add('pets-burger-line');
const burgerLine3 = document.createElement('hr');
burgerLine3.classList.add('pets-burger-line');
const shadow = document.createElement('div');
shadow.classList.add('shadow');

header.append(headerContainer);
headerContainer.append(linkLogo, nav);
linkLogo.append(titleLogo, subtitleLogo);
nav.append(navList, burgerMenu, shadow);
burgerMenu.append(burgerLine1, burgerLine2, burgerLine3);
navList.append(listItem1, listItem2, listItem3, listItem4);
listItem1.append(listItem1Link);
listItem2.append(listItem2Link);
listItem3.append(listItem3Link);
listItem4.append(listItem4Link);

burgerMenu.onclick = toggleMenu;
listItem1Link.onclick = toggleMenu;
listItem2Link.onclick = toggleMenu;
listItem3Link.onclick = toggleMenu;
listItem4Link.onclick = toggleMenu;
shadow.onclick = toggleMenu;

function toggleMenu() {
  burgerMenu.classList.toggle('rotate');
  navList.classList.toggle('active-menu');
  document.body.classList.toggle('overflow-hidden');
  shadow.classList.toggle('shadow-open');
}