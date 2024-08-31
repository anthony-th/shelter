import { createElement } from '../../common/createElement';

export const sectionNotOnly = createElement('section', ['not-only-block']);
const notOnlyContainer = createElement('div', ['not-only-container']);
const notOnlyTextBlock = createElement('div', ['not-only-textblock']);
const notOnlyTitle = createElement('h2', ['textblock__title'], 'Not only people need a house');
const notOnlyText = createElement('p', ['textblock__description'], 'We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will love you more than anybody else in the world, you will see!');
const notOnlyBtn = createElement('a', ['textblock__button'], 'Make a friend', { href: '#friends'});
const imgOnly = createElement('img', ['not-only-pet'], '', { src: './assets/img/start-screen-puppy.webp', alt: '' });

sectionNotOnly.append(notOnlyContainer);
notOnlyContainer.append(notOnlyTextBlock, imgOnly);
notOnlyTextBlock.append(notOnlyTitle, notOnlyText, notOnlyBtn);