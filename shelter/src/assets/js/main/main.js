import { createElement } from '../common/createElement';
import { sectionNotOnly } from './section_not_only';
import { sectionAbout } from './section_about';
import { sectionOur } from './section_our_friends';
import { sectionHow } from './section_how_you';
import { sectionYouCan } from './section_you_can';

export const main = createElement('main', ['main']);

main.append(sectionNotOnly, sectionAbout, sectionOur, sectionHow, sectionYouCan);