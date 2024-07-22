import { createHeader } from '../common/createHeader.js';

const petsHeader= {
    headerClasses: ['pets-header'],
    containerClasses: ['pets-header__container'],
    logoClasses: ['pets-logo'],
    logoHref: './',
    titleClasses: ['pets-logo__title'],
    titleText: 'Cozy House',
    subtitleClasses: ['pets-logo__subtitle'],
    subtitleText: 'Shelter for pets in Boston',
    navClasses: ['pets-nav'],
    navListClasses: ['pets-nav__list'],
    burgerMenuClasses: ['pets-burger-menu'],
    burgerLineClasses: ['pets-burger-line'],
    shadowClasses: ['shadow'],
    navItems: [
        { text: 'About the shelter', href: './', classes: ['pets-links'] },
        { text: 'Our pets', href: '#', classes: ['pets-links', 'pets-active-nav'] },
        { text: 'Help the shelter', href: './#help-shelter', classes: ['pets-links'] },
        { text: 'Contacts', href: '#contacts', classes: ['pets-links'] }
    ],
    navItemClass: 'pets-nav__item'
};

export const header = createHeader(petsHeader);