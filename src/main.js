import Vue from 'vue'
import VueRouter from 'vue-router'

// Templetes
import App from './App.vue';
import Home from './temps/Home.vue';
import Events from './temps/Events.vue';
import Learn from './temps/Learn.vue';
// import Nav from './temps/Nav.vue';

// // Components
// Vue.component('nav', Nav);

let home = Vue.component('home', Home);
let events = Vue.component('events', Events);
let learn = Vue.component('learn', Learn);

Vue.use(VueRouter);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/events', component: events},
  { path: '/learn', component: learn},
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
