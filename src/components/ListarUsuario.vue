<template>
  <div>
    <div class="card">
      <div class="card-header" style="background-color: gray;"><strong style="color:black;">Lista de Usuarios</strong></div>

      <div class="card_body" style="background-color: gray;">
        <!-- <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button> -->
        <table class="table table-dark">
          
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
              <td>{{ Empleado.find(e => e.pkEmpleado == usuario.fkEmpleado)?.nombre }}</td>
              <td>{{ Rol.find(r => r.pkRol === usuario.fkRol)?.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  <button type="button" v-on:click="eliminar(usuario.pkUsuario)" class="btn btn-outline-danger">Eliminar</button>

                   
                    
                  
                           
                </div>
              </td>
              
              
            </tr>
          </tbody>
        </table>

      </div>


    </div>
  </div>
  <button type="button" v-on:click="  editar(pkUsuario)" class="btn btn-outline-primary">Editar</button> 
  <button type="button" v-on:click="  crear()" class="btn btn-outline-danger">Crear</button> 
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
      Rol: [],
      smg: "",
    };
  },
  created: function () {
    this.ListaUsuario();
    this.ListaRol();
    this.ListaEmpleado();
  },
  methods: {
    ListaUsuario() {
      axios.get("https://localhost:7051/Usuario").then((result) => {
        console.log(result.data);
        this.Usuarios = result.data.result;


       });


    },
    ListaRol() {
      axios.get("https://localhost:7051/Rol").then((result) => {
        console.log(result.data);
        this.Rol = result.data.result;


       });
      
    

    },
    ListaEmpleado(){
      axios.get("https://localhost:7051/Empleado").then((result) => {
        console.log(result.data);
        this.Empleado = result.data.result;
    });
  },

    eliminar(id) {
      var pregunta=window.confirm('¿Desea eliminar el registro?');

      if(pregunta===true){
        axios.delete("https://localhost:7051/Usuario?id=" + id);
        window.location.href = "/listar";
      }
        
      

    },
    editar() {
    window.location.href="/editar";

    

    },
    crear(){
      window.location.href="/crear";
    }
  },

};
</script>