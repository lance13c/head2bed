import Vue from 'vue'
import VueRouter from 'vue-router'

// Templetes
import App from './App.vue';
import Home from './temps/Home.vue';
// import Nav from './temps/Nav.vue';

// // Components
// Vue.component('nav', Nav);

let home = Vue.component('home', Home);

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const Learn = { template: '<div>test</div>'}

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/learn', component: Learn},
  { path: '/', component: home}
]


const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.

// const app = new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

const app = new Vue({
  el: document.getElementById('app'),
  router,
  render: h => h(App)
})
