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
      component: () => import('../views/DashboardView.vue'),
      children: [
        {
          path: '/listar',
          name: 'listar',
          component: () =>import("../components/ListarUsuario.vue")
        },
        {
          path: '/listacliente',
          name:'listacliente',
          component: () => import('../components/componentsC/ListarCliente.vue')
        },
        {
          path: '/listadepartamento',
          name:'listadepartamento',
          component: () => import('../components/componentsD/ListarDepartamento.vue')
        },
        {
          path: '/listaempleado',
          name:'listaempleado',
          component: () => import('../components/componentsE/ListarEmpleado.vue')
        },
        {
          path: '/listafactura',
          name:'listafactura',
          component: () => import('../components/componentsF/ListarFactura.vue')
        },
        {
          path: '/listapuesto',
          name:'listapuesto',
          component: () => import('../components/componentsP/ListarPuesto.vue')
        },
        {
          path: '/listarol',
          name:'listarol',
          component: () => import('../components/componentsR/ListarRol.vue')
        },
        {
          path: '/editar',
          name: 'editar',
          component: () => import('../components/ActualizarUsuario.vue')
        },
        {
          path: '/crear',
          name: 'crear',
          component: () => import('../components/CrearUsuario.vue')
        }, 
        {
          path: '/crearcliente',
          name: 'crearcliente',
          component: () => import('../components/componentsC/CrearCliente.vue')
        },
        {
          path: '/creardepartamento',
          name: 'creardepartamento',
          component: () => import('../components/componentsD/CrearDepartamento.vue')
        },
        {
          path: '/crearempleado',
          name: 'crearempleado',
          component: () => import('../components/componentsE/CrearEmpleado.vue')
        },
        {
          path: '/crearfactura',
          name: 'crearfactura',
          component: () => import('../components/componentsF/CrearFactura.vue')
        },
        {
          path: '/crearpuesto',
          name: 'crearpuesto',
          component: () => import('../components/componentsP/CrearPuesto.vue')
        },
        {
          path: '/crearrol',
          name: 'crearrol',
          component: () => import('../components/componentsR/CrearRol.vue')
        },

        
      ]
      
    } 
  ]
})

export default router
