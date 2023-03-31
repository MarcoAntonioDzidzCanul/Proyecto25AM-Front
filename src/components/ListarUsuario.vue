<template>
  <div>
    <button type="button" v-on:click="crear()" class="btn btn-outline-success">Crear Usuario</button> 
    <div class="card">
      <div class="card-header" style="background-color: gray;"><strong style="color:black;">Lista de Usuarios</strong></div>

      <div class="card_body" style="background-color: gray;">
        
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
              <td>{{ usuario.empleado.nombre}}</td>
              <td>{{ usuario.rol.nombre }}</td>
              <td>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
          
                   
                    
                  
                           
                </div>
                <div class="btn-group" role="label" aria-label="">
                  <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                  
                  <button type="button" v-on:click="eliminar(usuario.pkUsuario)" class="btn btn-outline-danger">Eliminar</button>
                  <button type="button" v-on:click="  editar(usuario.pkUsuario)" class="btn btn-outline-warning">Editar</button> 
                   
                    
                  
                           
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

  components:{

  },
  data() {
    
    return {
     
      Usuarios: [],
      smg: "",
    };
  },
  created: function () {
    this.ListaUsuario();
  },
  methods: {
    ListaUsuario() {
      axios.get("https://localhost:7051/Usuario/multi").then((result) => {
        console.log(result.data);
        this.Usuarios = result.data.result;


       });


    },
    eliminar(id) {
      var pregunta=window.confirm('¿Desea eliminar el registro?');

      if(pregunta===true){
        axios.delete("https://localhost:7051/Usuario?id=" + id);
        window.location.href = "/listar";
      }
        
      

    },
    editar(pkUsuario) {
        console.log(pkUsuario);
      this.$router.push("/editar/"+pkUsuario)

    

    },
    crear(){
      window.location.href="/crear";
    }
  },

};
</script>