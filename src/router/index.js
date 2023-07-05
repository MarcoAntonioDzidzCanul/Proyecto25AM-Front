import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'



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
          path: '/listarEmpresas',
          name:'listarEmpresas',
          component: () => import('../components/componentsEm/ListarEmpresas.vue')
        },
        {
          path: '/editarcliente/:pkCliente',
          name: 'editarcliente',
          component: () => import('../components/componentsC/ActualizarCliente.vue')
        },
        {
          path: '/editardepartamento/:pkDepartamento',
          name: 'editardepartamento',
          component: () => import('../components/componentsD/ActualizarDepartamento.vue')

        },
        {
          path: '/editarempleado/:pkEmpleado',
          name: 'editarempleado',
          component: () => import('../components/componentsE/ActualizarEmpleado.vue')

        },
        {
          path: '/editarfactura/:pkFactura',
          name: 'editarfactura',
          component: () => import('../components/componentsF/ActualizarFactura.vue')
             
        },
        {
          path: '/editarpuesto/:pkpuesto',
          name: 'editarpuesto',
          component: () => import('../components/componentsP/ActualizarPuesto.vue')

        },
        {
          path: '/editarEmpresas/:pkEmpresa',
          name: 'editarEmpresas',
          component: () => import('../components/componentsEm/ActualizarEmpresas.vue')
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
          path: '/crearEmpresas',
          name: 'crearEmpresas',
          component: () => import('../components/componentsEm/CrearEmpresas.vue') 

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
           
      ]
      
    } 
  ]
})

export default router
