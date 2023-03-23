import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import ListarUsuario from '../components/ListarUsuario.vue'
import CrearUsuario from '../components/CrearUsuario.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/listar',
      name: 'listar',
      component: ListarUsuario
    },
    {
      path: '/crear',
      name: 'crear',
      component: CrearUsuario
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Login',
      name: 'Login',
      component: LoginView

    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/DashboardView.vue')
      
    },
    {
      path: '/editar',
      name: 'editar',
      component: () => import('../components/ActualizarUsuario.vue')
    }
  ]
})

export default router
