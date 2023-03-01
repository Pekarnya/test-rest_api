import { createRouter, createWebHistory } from 'vue-router'
import LogIn from '../views/logIn.vue'
import SignUp from '../views/SignUp.vue'
import mainPage from '../views/main_page.vue'

const routes = [
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },

  {
    path: '/main_page',
    name: 'main_page',
    component: mainPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
