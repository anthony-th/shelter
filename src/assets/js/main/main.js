import { sectionNotOnly } from './section_not_only';
import { sectionAbout } from './section_about';
import { sectionOur } from './section_our_friends';
// import { sectionNotOnly } from './section_how_you';
// import { sectionNotOnly } from './section_you_can';

export const main = document.createElement('main');
main.classList.add('main');

main.append(sectionNotOnly);
main.append(sectionAbout);
main.append(sectionOur);

