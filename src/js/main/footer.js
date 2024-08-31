import { createElement } from '../../common/createElement.js';
import { createContact } from '../../common/createContact.js';
import { createLocation } from '../../common/createLocation.js';

export const footer = createElement('footer', ['footer']);
const footerContainer = createElement('div', ['footer-container']);
const footerContacts = createElement('div', ['contacts'], '', { id: 'contacts' });
const footerContactsTitle = createElement('h3', ['contacts-title'], `For questions and suggestions`);
const footerMail = createContact('a', 'mailto:mail@mail.com', './assets/svg/mail.svg', 'email@shelter.com', ['mail', 'mail-img', 'mail-text']);
const footerPhone = createContact('a', 'tel:+136745677554', './assets/svg/phone.svg', '+13 674 567 75 54', ['phone', 'phone-img', 'phone-text']);
const footerLocations = createElement('div', ['locations']);
const footerLocationsTitle = createElement('h3', ['locations-title'], 'We are waiting for your visit');
const footerLocationsBoston = createLocation('https://www.google.com/maps/place/1+Central+St,+Boston,+MA+02109,+%D0%A1%D0%A8%D0%90/@42.3585558,-71.056915,17z/data=!3m1!4b1!4m5!3m4!1s0x89e370868bc2ce7b:0x82fa7db94f5fea9e!8m2!3d42.3585519!4d-71.0547263', './assets/svg/pin.svg', '1 Central Street, Boston (entrance from the store)', ['location-boston', 'location-boston-img', 'location-boston-text']);
const footerLocationsLondon = createLocation('https://www.google.com/maps/place/18+South+Rd,+Londonderry,+NH+03053,+%D0%A1%D0%A8%D0%90/@42.8246256,-71.364361,17z/data=!3m1!4b1!4m5!3m4!1s0x89e3ad7442d3b7b7:0x5550ec16f1a4554d!8m2!3d42.8246217!4d-71.3621723', './assets/svg/pin.svg', '18 South Park, London', ['location-london', 'location-london-img', 'location-london-text']);
const footerImg = createElement('img', ['footer-img'], '', { src: './assets/img/footer-puppy.webp', alt: '' });

footer.append(footerContainer);
footerContainer.append(footerContacts, footerLocations, footerImg);
footerContacts.append(footerContactsTitle, footerMail, footerPhone);
footerLocations.append(footerLocationsTitle, footerLocationsBoston, footerLocationsLondon);
