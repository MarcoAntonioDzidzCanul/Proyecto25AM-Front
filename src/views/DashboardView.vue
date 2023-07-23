<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div id="body">
    <div id="menuxc">
      <section id="menu">
        <div id="logo">
          <img id="icon"
            src="https://media.istockphoto.com/id/1125625274/es/vector/la-letra-elegante-creativa-moderna-%C3%BAnica-d-basado-en-plantilla-de-logotipo-de-icono-de-vector.jpg?s=612x612&w=0&k=20&c=jWpj2H6PO5yjF8xLZZ69MVvY9tbg8xyWHWCyFIJpmZU=">
          <h2>Inicio</h2>
        </div>
        <div id="items">

          <li class="item" v-for="(item, index) in items" :key="index" :class="{ active: activeIndex === index }"
            @click="setActive(index)">
            <RouterLink :to="getLink(index)">
              <div><i class="fa-solid fa-bars"></i>
                {{ item }}
              </div>
            </RouterLink>
          </li>

          <li>
            <RouterLink :to="{ path: '/' }">
              <div><i class="fa-solid fa-arrow-right-from-bracket animate-icon"></i>
                Salir
              </div>
            </RouterLink>
          </li>
        </div>

      </section>

    </div>
    <main>
      <header>
        <!-- <div class="row">
            <router-link :to="{ path: '/listar' }" type="button" class="btn btn-outline-secondary">Listar</router-link>
          </div> -->
        <RouterView></RouterView>

      </header>
    </main>
  </div>
</template>

                  

<style>
#menuxc {
  background: #E5E7EB;
  /* position: relative; */
  width: 100vw;
  /* Ancho igual al 100% del viewport (ventana del navegador) */
  height: 100%;
  /* Altura igual al 100% del viewport */
}

#body {
  /* height: 100vh;
width: 100vw;  */
  display: grid;
  grid-template-columns: 260px 1fr;
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
  /* background-color: var(--accent-dark); */
  /* Ancho igual al 100% del viewport (ventana del navegador) */
  /* Altura igual al 100% del viewport */
  width: 100vw;
  /* Ancho igual al 100% del viewport (ventana del navegador) */
  height: 100vh;
  /* Altura igual al 100% del viewport */
  margin: 0;
  padding: 0;

  background: #E5E7EB;
  position: relative;
}

#menu {

  background: #111827;
  width: 250px;
  height: 100%;

}

#logo {
  display: flex;
  align-items: center;
  color: #fff;
  padding: 30px 0 0;
}

#logo img {
  width: 40px;
  margin-right: 15px;
  margin-left: 10px;
  margin-bottom: 8px;

}

#items li {
  list-style: none;
  padding: 19px 0;
  transition: 0.3s ease;
}

#items li:hover {
  background: #253047;
  cursor: pointer;
}

#items li.active {
  border-left: 4px solid #fff;
}

#items li i {
  color: rgb(134, 141, 151);
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-size: 14px;
  margin: 0 10px 0 25px;
}

#items li:hover i,
#items li:hover a {
  color: #F3F4F6;
}

#items li i a {
  text-decoration: none;
  color: rgb(134, 141, 151);
  font-weight: 300px;
  transition: 0.3s ease;
}
@keyframes beat {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.animate-icon:hover {
  animation: beat 0.5s infinite;
}
</style>  

<script>
export default {
  name: 'dashboard',
  components: {

  },
  data() {
    return {
      ver: true,
      items: ['Cliente', 'Departamento', 'Empleado', 'Empresas', 'Factura', 'Puesto'],
      activeIndex: null
    }
  },

  methods: {
    AbrirDashUsuario() {
      window.location.href = "/listar";
    },
    setActive(index) {
      this.activeIndex = index;
    },
    getLink(index) {
      const routes = ['/listacliente', '/listadepartamento', '/listaempleado', '/listarEmpresas', '/listafactura', '/listapuesto']; // Arreglo de rutas predefinidas
      return routes[index];
    }

  },
  computed: {
    activeItemClass() {
      return {
        active: this.activeIndex !== null
      };
    }




    // AbrirDashCliente() {
    //     window.location.href = "/getcliente";
    // },
    // AbrirDashDepa(){
    //     window.location.href = "/getdepa";
    // }

  }

}

</script>