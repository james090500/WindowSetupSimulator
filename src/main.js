import { createApp } from 'vue'

// Create the app
import W10Setup from './views/W10Setup.vue'
const app = createApp(W10Setup);

// Font Awesome
import { FontAwesomeIcon, FontAwesomeLayers } from './fontawesome'
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component('FontAwesomeLayers', FontAwesomeLayers);

// Bootstrap
require('bootstrap/dist/css/bootstrap.min.css')

// Start the app
app.mount('#app')
