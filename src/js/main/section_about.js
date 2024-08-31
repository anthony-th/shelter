import { createElement } from '../../common/createElement';

export const sectionAbout = createElement('section', ['about']);
const aboutContainer = createElement('div', ['about__container']);
const aboutImg = createElement('img', ['about__img'], '', { src: './assets/img/about-the-shelter.webp', alt: '' });
const aboutBlock = createElement('div', ['about__text-block']);
const aboutTitle = createElement('h2', ['about__title'], 'About the shelter “Cozy House”');
const aboutText1 = createElement('p', ['about__text'], 'Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.');
const aboutText2 = createElement('p', ['about__text'], 'We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.');

sectionAbout.append(aboutContainer);
aboutContainer.append(aboutImg, aboutBlock);
aboutBlock.append(aboutTitle, aboutText1, aboutText2);