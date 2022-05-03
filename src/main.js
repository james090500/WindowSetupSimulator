import { createApp } from 'vue'
import W10Setup from './W10Setup.vue'
const app = createApp(W10Setup);

//FontAwesome
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

//Solid
import {
    faX, faMinus, faCircleArrowLeft
} from '@fortawesome/free-solid-svg-icons';
library.add(faX, faMinus, faCircleArrowLeft);

//Regular
import {
    faSquare
} from '@fortawesome/free-regular-svg-icons';
library.add(faSquare);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('font-awesome-layers', FontAwesomeLayers);

// Start the app
app.mount('#app')
