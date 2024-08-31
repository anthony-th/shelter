import { createElement } from './createElement.js';

export function createHeader(page) {
    const {
        headerClasses,
        containerClasses,
        logoClasses,
        logoHref,
        titleClasses,
        titleText,
        subtitleClasses,
        subtitleText,
        navClasses,
        navListClasses,
        burgerMenuClasses,
        burgerLineClasses,
        shadowClasses,
        navItems,
        navItemClass
    } = page;

    const header = createElement('header', headerClasses);
    const headerContainer = createElement('div', containerClasses);
    const linkLogo = createElement('a', logoClasses, '', { href: logoHref });
    const titleLogo = createElement('h1', titleClasses, titleText);
    const subtitleLogo = createElement('p', subtitleClasses, subtitleText);
    const nav = createElement('nav', navClasses);
    const navList = createElement('ul', navListClasses);
    const burgerMenu = createElement('div', burgerMenuClasses);
    const burgerLines = ['burger-line', 'burger-line', 'burger-line'].map(() => createElement('hr', burgerLineClasses));
    const shadow = createElement('div', shadowClasses);

    header.append(headerContainer);
    headerContainer.append(linkLogo, nav);
    linkLogo.append(titleLogo, subtitleLogo);
    nav.append(navList, burgerMenu, shadow);
    burgerLines.forEach(line => burgerMenu.append(line));

    navItems.forEach(({ text, href, classes }) => {
        const listItem = createElement('li', [navItemClass]);
        const listItemLink = createElement('a', classes, text, { href });
        listItem.append(listItemLink);
        navList.append(listItem);
        const mediaCheck767 = window.matchMedia('(max-width: 767px)');
        const checkMedia = () => {
            mediaCheck767.matches ? listItemLink.onclick = toggleMenu : listItemLink.onclick = null;
        }
        checkMedia();
        mediaCheck767.onchange = checkMedia;
    });

    burgerMenu.onclick = toggleMenu;
    shadow.onclick = toggleMenu;

    function toggleMenu() {
        burgerMenu.classList.toggle('rotate');
        navList.classList.toggle('active-menu');
        document.body.classList.toggle('overflow-hidden');
        shadow.classList.toggle('shadow-open');
    }

    return header;
}
