import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router); // 放在渲染之前生效
app.mount('#app');

