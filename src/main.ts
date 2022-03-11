import { createApp, } from 'vue';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

import App from './App.vue';

const app = createApp(App);
const Vuetify = createVuetify();

app.use(Vuetify);
app.mount('#app');
