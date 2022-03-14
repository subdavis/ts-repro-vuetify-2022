import { createApp, } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // BROKEN
// import 'vuetify/dist/vuetify.css'; // WORKING

import App from './App.vue';

const Vuetify = createVuetify();
const app = createApp(App);

app.use(Vuetify);
app.mount('#app');
