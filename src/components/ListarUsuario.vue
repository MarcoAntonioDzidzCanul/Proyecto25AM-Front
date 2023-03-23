<template>
  <div>
    <div class="card">
      <div class="card-header"><strong style="color:black;" >Lista de Usuarios</strong></div>

      <div class="card_body">
        <!-- <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button> -->
        <table class="table">
          
          <thead>
            <tr>
              <th style="font-weight: bold;">Id</th>
              <th style="font-weight: bold;">User</th>
              <th style="font-weight: bold;">Password</th>
              <th style="font-weight: bold;">FechaRegistro</th>
              <th style="font-weight: bold;">FkEmpleado</th>
              <th style="font-weight: bold;">FkRol</th>
              <th style="font-weight: bold;">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="usuario in Usuarios" :key="usuario.pkUsuario">
              <td style="color:black;">{{ usuario.pkUsuario }}</td>
              <td>{{ usuario.user }}</td>
              <td>{{ usuario.password }}</td>
              <td>{{ usuario.fechaRegistro }}</td>
              <td>{{ usuario.fkEmpleado}}</td>
              <td>{{ usuario.fkRol }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  <button type="button" v-on:click="borrarUsuario(usuario.pkUsuario)" class="btn btn-outline-danger">
                    Eliminar</button>
                           
                </div>
              </td>
              
              
            </tr>
          </tbody>
        </table>

      </div>


    </div>
  </div>
  <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-primary">Editar</button> 
</template>

<script>
import axios from "axios";


export default {

  components:{

  },
  data() {
    return {
      Usuarios: [],
      Empleado: [],
      nombresempleados: [{}],
      smg: "",
    };
  },
  created: function () {
    this.consultarUsuario();
  },
  methods: {
    consultarUsuario() {
      axios.get("https://localhost:7051/Usuario/").then((result) => {
        console.log(result.data);
        this.Usuarios = result.data.result;


       });


    },

    borrarUsuario(id) {
      var pregunta=window.confirm('Esta se seguro de eliminar este registro?');

      if(pregunta===true){
        axios.delete("https://localhost:7051/Usuario?id=" + id);
        window.location.href = "listar";
        
      }
        
      

    },
    editaregistro() {
    window.location.href="/editar";

    

    },
  },

};
</script>