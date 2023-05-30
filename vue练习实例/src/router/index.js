import Vue from 'vue'
import Route from 'vue-router'
import Index from '../view/index.vue'
import Demo from '../view/demo.vue'
Vue.use(Route)
const routes = [{
  path: '/',
  component: Index
}, {
  path: '/demo',
  component: Demo
}]


const router = new Route({
  routes
})
export default router