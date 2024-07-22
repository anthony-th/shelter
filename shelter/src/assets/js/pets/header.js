import { createElement } from '../utils.js';

export const petsHeader = createElement('header', ['pets-header']);
const petsHeaderContainer = createElement('div', ['pets-header__container']);
const linkLogo = createElement('a', ['pets-logo'], '', { href: './' });
const titleLogo = createElement('h1', ['pets-logo__title'], 'Cozy House');
const subtitleLogo = createElement('p', ['pets-logo__subtitle'], 'Shelter for pets in Boston');
const nav = createElement('nav', ['pets-nav']);
const navList = createElement('ul', ['pets-nav__list']);

const burgerMenu = createElement('div', ['pets-burger-menu']);
const burgerLines = ['pets-burger-line', 'pets-burger-line', 'pets-burger-line'].map(() => createElement('hr', ['pets-burger-line']));
const shadow = createElement('div', ['shadow']);

const navItems = [
    { text: 'About the shelter', href: './', classes: ['pets-links'] },
    { text: 'Our pets', href: '#', classes: ['pets-links', 'pets-active-nav'] },
    { text: 'Help the shelter', href: './#help-shelter', classes: ['pets-links'] },
    { text: 'Contacts', href: '#contacts', classes: ['pets-links'] }
];

navItems.forEach(({ text, href, classes }) => {
    const listItem = createElement('li', ['pets-nav__item']);
    const listItemLink = createElement('a', classes, text, { href });
    listItem.append(listItemLink);
    navList.append(listItem);
    listItemLink.onclick = toggleMenu;
});

petsHeader.append(petsHeaderContainer);
petsHeaderContainer.append(linkLogo, nav);
linkLogo.append(titleLogo, subtitleLogo);
nav.append(navList, burgerMenu, shadow);
burgerLines.forEach(line => burgerMenu.append(line));

burgerMenu.onclick = toggleMenu;
shadow.onclick = toggleMenu;

function toggleMenu() {
  burgerMenu.classList.toggle('rotate');
  navList.classList.toggle('active-menu');
  document.body.classList.toggle('overflow-hidden');
  shadow.classList.toggle('shadow-open');
}