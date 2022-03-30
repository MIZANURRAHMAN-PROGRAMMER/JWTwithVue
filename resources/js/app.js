require('./bootstrap');
window.Vue = require('vue').default;

import VueRouter from 'vue-router'
Vue.use(VueRouter)

//Routes
import { routes } from './router';
// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//bootstrap vue

axios.defaults.withCredentials=true
axios.defaults.baseURL='http://127.0.0.1:8000/api';
const token = localStorage.getItem('token');
if(token){
    axios.defaults.headers.common['Authorization']=token

}
//app components
import App from './layouts/App.vue'
// import store from './store/index'
import { store } from './store/storeData'
Vue.use(VueAxios, axios)

  // Vue router
  const router = new VueRouter({
    routes,
    // history: true,
    mode: 'history',
    // hashbang: false,
    linkActiveClass:'active'

})

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    components: {App},
    router,
    store,

});
