import Vue from 'vue';
import App from './App';
import router from './router';
import './assets/css/main.scss';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
