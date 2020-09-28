import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Contact from "./pages/Contact.vue"
import DemoRef from "./components/DemoRef.vue"
import DemoRender from "./components/DemoRender.vue"
import DemoSlot from "./components/DemoSlot.vue"

Vue.use(VueRouter)

const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/demoref', component: DemoRef },
  { path: '/demorender', component: DemoRender },
  { path: '/demoslot', component: DemoSlot },
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
