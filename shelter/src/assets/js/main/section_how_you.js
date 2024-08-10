import { createElement } from '../common/createElement';
import howImg1Src from '../../svg/icon-pet-food.svg';
import howImg2Src from '../../svg/icon-transportation.svg';
import howImg3Src from '../../svg/icon-toys.svg';
import howImg4Src from '../../svg/icon-bowls-and-cups.svg';
import howImg5Src from '../../svg/icon-shampoos.svg';
import howImg6Src from '../../svg/icon-vitamins.svg';
import howImg7Src from '../../svg/icon-medicines.svg';
import howImg8Src from '../../svg/icon-collars-leashes.svg';
import howImg9Src from '../../svg/icon-sleeping-area.svg';

export const sectionHow = createElement('section', ['how-you']);
const howContainer = createElement('div', ['how-you-container']);
const howTitle = createElement('h2', ['how-you-title'], `How you can help our shelter`, { id: 'help-shelter' });
const howIcons = createElement('div', ['how-you-icons']);
const icons = [
  { imgSrc: howImg1Src, title: 'Pet food' },
  { imgSrc: howImg2Src, title: 'Transportation' },
  { imgSrc: howImg3Src, title: 'Toys' },
  { imgSrc: howImg4Src, title: 'Bowls and cups' },
  { imgSrc: howImg5Src, title: 'Shampoos' },
  { imgSrc: howImg6Src, title: 'Vitamins' },
  { imgSrc: howImg7Src, title: 'Medicines' },
  { imgSrc: howImg8Src, title: 'Collars / leashes' },
  { imgSrc: howImg9Src, title: 'Sleeping areas' }
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