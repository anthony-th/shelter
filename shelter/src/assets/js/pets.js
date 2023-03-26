import '../styles/pets.scss';

import { header } from './pets/header';
import { main } from './pets/main';
import { footer } from './main/footer';

document.body.append(header);
document.body.append(main);
document.body.append(footer);