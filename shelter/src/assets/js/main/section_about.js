import '../../styles/main/_about.scss';
import aboutImgSrc from '../../img/about-the-shelter.webp';

export const sectionAbout = document.createElement('section');
sectionAbout.classList.add('about');
const aboutContainer = document.createElement('div');
aboutContainer.classList.add('about__container');
const aboutImg = document.createElement('img');
aboutImg.classList.add('about__img');
aboutImg.alt = '';
aboutImg.src = aboutImgSrc;
const aboutBlock = document.createElement('div');
aboutBlock.classList.add('about__text-block');
const aboutTitle = document.createElement('h2');
aboutTitle.classList.add('about__title');
aboutTitle.innerHTML = `About the shelter<br>“Cozy House”`
const aboutText1 = document.createElement('p');
aboutText1.classList.add('about__text');
aboutText1.textContent = 'Currently we have 121 dogs and 342 cats on our hands and statistics show that only 20% of them will find a family. The others will continue to live with us and will be waiting for a lucky chance to become dearly loved.';
const aboutText2 = document.createElement('p');
aboutText2.classList.add('about__text');
aboutText2.textContent = 'We feed our wards with the best food and make sure that they do not get sick, feel comfortable (including psychologically) and well. We are supported by 87 volunteers and 28 employees of various skill levels. About 12% of the animals are taken by the shelter staff. Taking care of the animals, they become attached to the pets and would hardly ever leave them alone.';


sectionAbout.append(aboutContainer);
aboutContainer.append(aboutImg);
aboutContainer.append(aboutBlock);
aboutBlock.append(aboutTitle);
aboutBlock.append(aboutText1);
aboutBlock.append(aboutText2);