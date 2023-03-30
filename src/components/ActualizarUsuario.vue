<template>
    <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Usuario</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarUser">
                  <div class="form-group">
                      <label for="user" style="color: black;">Usuario:</label>
                              <input type="text" class="form-control" name="user" aria-describedby="helpId"
                                  id="user" placeholder="nombre" v-model="form.user" />
                              

                              <label for="password" style="color: black;">Password:</label>
                              <input type="text" class="form-control" name="password" aria-describedby="helpId"
                                  id="password" placeholder="apellidos" v-model="form.password" />
                              

                             
                            

                              <label for="fkEmpleado" style="color: black;">FkEmpleado:</label>
                              <input type="text" class="form-control" name="fkEmpleado" aria-describedby="helpId"
                                  id="fkEmpleado" placeholder="email" v-model="form.fkEmpleado" />
                           

                              <label for="fkRol" style="color: black;">FkRol:</label>
                              <input type="text" class="form-control" name="fkRol" aria-describedby="helpId"
                                  id="fkRol" placeholder="direccion" v-model="form.fkRol" />
                             



                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn -btn-success">Guardar</button>
                                  <router-link :to="{name: 'listar'}" class="btn btn-danger">Cancelar</router-link>
                              </div>
              </form>

          </div>
          </div>
          </div>
 
</template>

<script>
import axios from 'axios'

export default {
  name: 'editar',
  components: {

  },

  data: function() {
      return {
          pkUsuario : null,
          form: {
              "pkUsuario" : "",
              "user" : "",
              "password" : "",
              "fechaRegistro": "",
              "fkEmpleado" : "",
              "fkRol" : ""
          },
          
          
      }
  },
  mounted : function(){
    const Fecha = this.form.fechaRegistro
      this.pkUsuario = this.$route.params.pkUsuario;
      
      console.log(this.pkUsuario);
      axios.get("https://localhost:7051/Usuario/" + this.pkUsuario).then(datos =>
      {
          this.form.user = datos.data.result.user;
          this.form.password = datos.data.result.password;
          this.form.fechaRegistro = datos.data.result.fechaRegistro;
          this.form.fkEmpleado = datos.data.result.fkEmpleado;
          this.form.fkRol = datos.data.result.fkRol;
          console.log(this.form)
      });

  },
  methods:{
      editarUser()
      {
          axios.put("https://localhost:7051/Usuario/" + this.pkUsuario, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listar")
      }
      
  },
 
}

  

 


          


      

  



</script>