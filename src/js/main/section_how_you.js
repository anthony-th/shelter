import { createElement } from '../../common/createElement';

export const sectionHow = createElement('section', ['how-you']);
const howContainer = createElement('div', ['how-you-container']);
const howTitle = createElement('h2', ['how-you-title'], `How you can help our shelter`, { id: 'help-shelter' });
const howIcons = createElement('div', ['how-you-icons']);
const icons = [
  { imgSrc: './assets/svg/icon-pet-food.svg', title: 'Pet food' },
  { imgSrc: './assets/svg/icon-transportation.svg', title: 'Transportation' },
  { imgSrc: './assets/svg/icon-toys.svg', title: 'Toys' },
  { imgSrc: './assets/svg/icon-bowls-and-cups.svg', title: 'Bowls and cups' },
  { imgSrc: './assets/svg/icon-shampoos.svg', title: 'Shampoos' },
  { imgSrc: './assets/svg/icon-vitamins.svg', title: 'Vitamins' },
  { imgSrc: './assets/svg/icon-medicines.svg', title: 'Medicines' },
  { imgSrc: './assets/svg/icon-collars-leashes.svg', title: 'Collars / leashes' },
  { imgSrc: './assets/svg/icon-sleeping-area.svg', title: 'Sleeping areas' }
];

icons.forEach(({ imgSrc, title }) => {
  const icon = createElement('figure', ['icon']);
  const img = createElement('img', ['icon-img'], '', { src: imgSrc, alt: '' });
  const iconTitle = createElement('figcaption', ['icon-title'], title);
  icon.append(img, iconTitle);
  howIcons.append(icon);
});

sectionHow.append(howContainer);
howContainer.append(howTitle, howIcons);