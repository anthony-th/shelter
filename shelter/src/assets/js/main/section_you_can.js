import { createElement } from '../common/createElement';
import youCanImgSrc from '../../img/youCan.webp';
import youCanCardImgSrc from '../../svg/credit-card.svg';

export const sectionYouCan = createElement('section', ['you-can']);
const youCanContainer = createElement('div', ['you-can-container']);
const youCanImg = createElement('img', ['you-can-img'], '', { src: youCanImgSrc, alt: '' });
const youCanBlock = createElement('div', ['you-can-block']);
const youCanCardTitle = createElement('h2', ['you-can-title'], 'You can also<br> make a donation', {}, true);
const youCanCardSubtitle = createElement('h3', ['you-can-subtitle'], 'Name of the bank / Type of bank account');
const youCanCard = createElement('a', ['you-can-card'], '', { href: '#no_scroll'});
const youCanCardImg = createElement('img', ['you-can-card-img'], '' , { src: youCanCardImgSrc, alt: '' });
const youCardTitle = createElement('h4', ['you-can-card-title'], '8380 2880 8028 8791 7435');
const youCanCardText = createElement('p', ['you-can-card-text'], 'Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus.');

sectionYouCan.append(youCanContainer);
youCanContainer.append(youCanImg, youCanBlock);
youCanBlock.append(youCanCardTitle, youCanCardSubtitle, youCanCard, youCanCardText);
youCanCard.append(youCanCardImg, youCardTitle);