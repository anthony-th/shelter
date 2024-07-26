import { createHeader } from '../common/createHeader.js';

const petsHeader= {
    headerClasses: ['header'],
    containerClasses: ['header__container'],
    logoClasses: ['logo'],
    logoHref: './',
    titleClasses: ['logo__title', 'color-davy-gray'],
    titleText: 'Cozy House',
    subtitleClasses: ['logo__subtitle', 'color-signal-black'],
    subtitleText: 'Shelter for pets in Boston',
    navClasses: ['nav'],
    navListClasses: ['nav__list', 'background-color-m767-white'],
    burgerMenuClasses: ['burger-menu'],
    burgerLineClasses: ['burger-line', 'background-color-black'],
    shadowClasses: ['shadow'],
    navItems: [
        { text: 'About the shelter', href: './', classes: ['links', 'color-davy-gray'] },
        { text: 'Our pets', href: '#no_scroll', classes: ['links', 'active-nav', 'active-nav-pets'] },
        { text: 'Help the shelter', href: './#help-shelter', classes: ['links', 'color-davy-gray'] },
        { text: 'Contacts', href: '#contacts', classes: ['links', 'color-davy-gray'] }
    ],
    navItemClass: 'nav__item'
};

export const header = createHeader(petsHeader);