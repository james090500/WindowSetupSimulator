// FontAwesome
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Solid
import {
    faX, faMinus, faArrowLeft, faHardDrive, faArrowsRotate, faEraser, faSun, faCompactDisc, faDatabase, faCheck
} from '@fortawesome/free-solid-svg-icons';
library.add(
    faX, faMinus, faArrowLeft, faHardDrive, faArrowsRotate, faEraser, faSun, faCompactDisc, faDatabase, faCheck
);

// Regular
import {
    faSquare
} from '@fortawesome/free-regular-svg-icons';
library.add(faSquare);

// Export
export { FontAwesomeIcon, FontAwesomeLayers }