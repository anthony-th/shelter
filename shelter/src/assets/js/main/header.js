import { createElement } from '../utils.js';

export const header = createElement('header', ['header']);
const headerContainer = createElement('div', ['header__container']);
const linkLogo = createElement('a', ['logo'], '', { href: '#' });
const titleLogo = createElement('h1', ['logo__title'], 'Cozy House');
const subtitleLogo = createElement('p', ['logo__subtitle'], 'Shelter for pets in Boston');
const nav = createElement('nav', ['nav']);
const navList = createElement('ul', ['nav__list']);
const burgerMenu = createElement('div', ['burger-menu']);
const burgerLines = ['burger-line', 'burger-line', 'burger-line'].map(() => createElement('hr', ['burger-line']));
const shadow = createElement('div', ['shadow']);

header.append(headerContainer);
headerContainer.append(linkLogo, nav);
linkLogo.append(titleLogo, subtitleLogo);
nav.append(navList, burgerMenu, shadow);
burgerLines.forEach(line => burgerMenu.append(line));

const navItems = [
    { text: 'About the shelter', href: '#', classes: ['links', 'active-nav'] },
    { text: 'Our pets', href: './pets.html', classes: ['links'] },
    { text: 'Help the shelter', href: '#help-shelter', classes: ['links'] },
    { text: 'Contacts', href: '#contacts', classes: ['links'] }
];

navItems.forEach(({ text, href, classes }) => {
    const listItem = createElement('li', ['nav__item']);
    const listItemLink = createElement('a', classes, text, { href });
    listItem.append(listItemLink);
    navList.append(listItem);
    listItemLink.onclick = toggleMenu;
});

burgerMenu.onclick = toggleMenu;
shadow.onclick = toggleMenu;

function toggleMenu() {
    burgerMenu.classList.toggle('rotate');
    navList.classList.toggle('active-menu');
    document.body.classList.toggle('overflow-hidden');
    shadow.classList.toggle('shadow-open');
}
