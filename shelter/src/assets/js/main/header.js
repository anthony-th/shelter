import { createHeader } from '../common/createHeader.js';

const mainHeader = {
    headerClasses: ['header'],
    containerClasses: ['header__container'],
    logoClasses: ['logo'],
    logoHref: '#',
    titleClasses: ['logo__title'],
    titleText: 'Cozy House',
    subtitleClasses: ['logo__subtitle'],
    subtitleText: 'Shelter for pets in Boston',
    navClasses: ['nav'],
    navListClasses: ['nav__list'],
    burgerMenuClasses: ['burger-menu'],
    burgerLineClasses: ['burger-line'],
    shadowClasses: ['shadow'],
    navItems: [
        { text: 'About the shelter', href: '#', classes: ['links', 'active-nav'] },
        { text: 'Our pets', href: './pets.html', classes: ['links'] },
        { text: 'Help the shelter', href: '#help-shelter', classes: ['links'] },
        { text: 'Contacts', href: '#contacts', classes: ['links'] }
    ],
    navItemClass: 'nav__item'
};

export const header = createHeader(mainHeader);
