import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import './router/redirect';
import './static/css/main.css';
import './static/css/iconfont.css';
import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';
import App from './App.vue';

const app = createApp(App);

app.use(router).use(createPinia()).mount('#app');
