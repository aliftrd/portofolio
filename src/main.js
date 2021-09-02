import {
    createApp
} from 'vue'
import router from './router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Particles from 'particles.vue3'

createApp(App)
    .use(router)
    .use(Particles)
    .mount('#app')