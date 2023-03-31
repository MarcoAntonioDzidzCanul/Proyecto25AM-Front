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


           <div class="form-group">
           <label for="empleado">Selecciona el empleado:</label>
           <select class="form-select" aria-label="Default select example" name="empleado" id="empleado" v-model="form.fkEmpleado">
           <option v-for="empleado in Empleado" :value="empleado.pkEmpleado" :key="empleado.pkEmpleado">{{empleado.nombre}}</option>
           </select>
           </div>

           <div class="form-group">
           <label for="rol">Selecciona el rol:</label>
           <select class="form-select" aria-label="Default select example" name="rol" id="rol" v-model="form.fkRol">
           <option v-for="rol in Rol" :value="rol.pkRol" :key="rol.pkRol">{{rol.nombre}}</option>
           
           </select>                     
           </div>            
                             



                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn btn-outline-primary">Guardar</button>
                                  <router-link :to="{name: 'listar'}" class="btn btn-outline-danger">Cancelar</router-link>
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
          pkUsuario: null,
      form:{
        pkUsuario:"",
        user:"",
        password:"",
        fechaRegistro:"",
        fkEmpleado:"",
        fkRol :""
      },
      Empleado:{},
      Rol:{}
          
          
      }
  },
  created: function () {
        this.consultarEmpleado();
        this.consultarRol();    
      },
  mounted : function(){
    const Fecha = this.form.fechaRegistro
      this.pkUsuario = this.$route.params.pkUsuario;
      
      console.log(this.pkUsuario);
      axios.get("https://localhost:7051/Usuario/" + this.pkUsuario).then(datos =>
      {
          this.form.pkUsuario = datos.data.result.pkUsuario;
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
      },
      consultarEmpleado() {
             axios.get("https://localhost:7051/Empleado").then((result) => {
               console.log(result.data.result);
               this.Empleado = result.data.result;
            });
              
        },
              consultarRol() {
                axios.get("https://localhost:7051/Rol").then((result) => {
                  console.log(result.data.result);
                  this.Rol = result.data.result;
                });
                
            }
  
      
  },
 
}

  

 


          


      

  



</script>