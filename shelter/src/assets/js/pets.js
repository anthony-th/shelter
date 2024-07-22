import '../sass/main.scss';

import { petsHeader } from './pets/header';
import { main } from './pets/main';
import { footer } from './main/footer';

document.body.append(petsHeader, main, footer);