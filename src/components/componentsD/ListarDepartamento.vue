<template>
  <div>
    <button type="button" v-on:click="crear()" class="btn btn-outline-success">Crear Departamento <i
        class="fa-solid fa-plus"></i></button>
    <div class="card">
      <div class="card-header" style="background-color: #2E8B57;"><strong style="color:white;">Lista de
          Departamentos</strong></div>

      <div class="card_body" style="background-color: #2E8B57;">
        <!-- <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button> -->
        <table class="table table-dark">

          <thead>
            <tr>
              <th style="font-weight: bold;">Id</th>
              <th style="font-weight: bold;">Nombre</th>
              <th style="font-weight: bold;">Direccion</th>
              <th style="font-weight: bold;">Estado</th>
              <th style="font-weight: bold;">Imagen</th>
              <th style="font-weight: bold;">Cliente</th>
              <th style="font-weight: bold;">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dep in Departamentos" :key="dep.pkDepartamento">
              <td style="color:black;">{{ dep.pkDepartamento }}</td>
              <td>{{ dep.nombre }}</td>
              <td>{{ dep.direccion }}</td>
              <td>{{ dep.estado }}</td>
              <td>
                <img v-if="dep.ruta_imagen" :src="dep.ruta_imagen" alt="Imagen" style="width: 300px; height: auto;">
                <span v-else>No se ha seleccionado imagen</span>
              </td>
              <td>{{ dep.fk_Cliente }}</td>

              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  <button type="button" v-on:click="eliminar(dep.pkDepartamento)" class="btn btn-outline-danger">Eliminar
                    <i class="fa-solid fa-trash"></i></button>
                  <button type="button" v-on:click="  editar(dep.pkDepartamento)" class="btn btn-outline-warning">Editar
                    <i class="fa-solid fa-pen-to-square"></i></button>
                  <!-- <button type="button" @click="mostrarFormulario(pkUsuario)" class="btn btn-outline-primary">Editar</button>  -->



                </div>
              </td>


            </tr>
          </tbody>
        </table>

      </div>


    </div>
  </div>
</template>
  
<script>
import axios from "axios";


export default {
  name: 'listadepartamento',
  components: {

  },
  data() {

    return {
      Departamentos: [

      ],
      smg: "",
    };
  },
  created: function () {
    this.ListaDepartamento();
  },
  methods: {
    ListaDepartamento() {
      axios.get("https://localhost:7051/Departamento").then((result) => {
        console.log(result.data);
        this.Departamentos = result.data.result;

      });

    },

    eliminar(id) {
      var pregunta = window.confirm('¿Desea eliminar el registro?');

      if (pregunta === true) {
        axios.delete("https://localhost:7051/Departamento?id=" + id);
        window.location.href = "/listadepartamento";
      }



    },
    editar(pkDepartamento) {
      console.log(pkDepartamento);
      this.$router.push("/editardepartamento/" + pkDepartamento)



    },
    crear() {
      window.location.href = "/creardepartamento";

    },



  }

};
</script>