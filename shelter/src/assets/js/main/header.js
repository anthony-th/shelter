import { createHeader } from '../common/createHeader.js';

const mainHeader = {
    headerClasses: ['header'],
    containerClasses: ['header__container'],
    logoClasses: ['logo'],
    logoHref: '#no_scroll',
    titleClasses: ['logo__title', 'color-apricot'],
    titleText: 'Cozy House',
    subtitleClasses: ['logo__subtitle', 'color-smoky-white'],
    subtitleText: 'Shelter for pets in Boston',
    navClasses: ['nav'],
    navListClasses: ['nav__list', 'background-color-m767-signal-black'],
    burgerMenuClasses: ['burger-menu'],
    burgerLineClasses: ['burger-line', 'background-color-apricot'],
    shadowClasses: ['shadow'],
    navItems: [
        { text: 'About the shelter', href: '#no_scroll', classes: ['links', 'active-nav', 'active-nav-main'] },
        { text: 'Our pets', href: './pets.html', classes: ['links', 'color-pastel-grey'] },
        { text: 'Help the shelter', href: '#help-shelter', classes: ['links', 'color-pastel-grey'] },
        { text: 'Contacts', href: '#contacts', classes: ['links', 'color-pastel-grey'] }
    ],
    navItemClass: 'nav__item'
};

export const header = createHeader(mainHeader);
