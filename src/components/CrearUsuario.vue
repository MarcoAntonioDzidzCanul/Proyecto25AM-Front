<template>
  <div class="container-fluid">
      <div class="card">
          <div class="card-header" style="background-color: gray; color: black;" >Crear Usuario</div>
          <div style="background-color: gray;" class="card-body">
              <form v-on:submit.prevent="formulario">
                  <div class="row">
                      

                          <div class="form-group">
                              <label for="user" style="color: black;">user:</label>
                              <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                  placeholder="usuario" v-model="Usuarios.user" />
                              <small id="helpId" class="form-text" text-muted style="color: black;">Ingresa tu correo electronico</small>
                          </div>
                      
                      
                          <div class="form-group">
                              <label for="password" style="color: black;">Password:</label>
                              <input type="text" class="form-control" name="password" id="password"
                                  aria-describedby="helpId" placeholder="password" v-model="Usuarios.password" />
                              <small id="helpId" class="form-text" text-muted style="color: black;">Ingresa tu contraseña</small>
                          </div>
                      

                  </div>
                
                  <div class="col">
                            <input type="number" name="fkEmpleado" id="fkEmpleado" value="" style="display: none;" />
                            <label for="">Empleado:</label>
                            <select class="form-select" aria-label="Default select example" v-model="Nombreempleado">
                                <!-- <option selected></option> -->
                                <option v-for="emp in Empleados" :key="emp.pkEmpleado">{{emp.pkEmpleado}}</option>

                            </select>
                   </div>
                      
                      

                          <div class="form-group">
                              <label for="fkRol" style="color: black;">fkRol:</label>
                              <input type="number" class="form-control" name="fkRol" id="precio" aria-describedby="helpId"
                                  placeholder="fkRol" v-model="Usuarios.fkRol" />
                          </div>
                      
                  
                  <br>
                  <div class="row">
                      <div class="btn-group" role="group" id="botonesopcion">
                          <button type="submit" class="btn btn-outline-primary">Agregar</button>
                          <router-link :to="{ name: 'listar' }" class="btn btn-outline-danger">Cancelar</router-link>
                      </div>
                      <router-link :to="{ name: 'listar' }" class="btn btn-outline-primary" id="finaliza" style="display: none;">Finalizar</router-link>
                  </div>
                  <br>
                  <div class="row">
                      <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                          {{ smg }}
                      </div>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "crearUser",
  components: {

  },

  data() {
      return {
          Usuarios: {},
          Empleados:[],
          Nombreempleado: "",
          Nombrerol:"",
          Roles:{},
          smg: "",
      };
  },
  created: function(){
  this.ListaEmpleados();
  this.ListaRol();
  },
  methods: {
      formulario() {
          const tiempoTranscurrido = Date.now();
          const hoy = new Date(tiempoTranscurrido);
          var cuerpo = {
              user: this.Usuarios.user,
              password: this.Usuarios.password,
              fechaRegistro: hoy.toISOString(),
              fkEmpleado: this.Usuarios.fkEmpleado,
              fkRol: this.Usuarios.fkRol
          };

          axios.post('https://localhost:7051/Usuario', cuerpo).then((result) => {

              if (result.status == 200) {
                  document.getElementById("alert").style.display = "block";
                  document.getElementById('botonesopcion').style.display="none";
                  this.smg = "Se creo correctamente";
                  document.getElementById('finaliza').style.display="block";
                  console.log(result);
              }
              // window.location.href = "dashboard";

          })
      },
      ListaEmpleados(){
        axios.get('https://localhost:7051/Empleado').then((response) => {
                this.Empleados = response.data.result;
      });
    },
    ListaRol(){
        axios.get('https://localhost:7051/Rol').then((response) => {
                this.Roles = response.data.result;
        });
    },
    convertidorEmpleado() {
           
           axios.get('https://localhost:7051/GetPorNombreRol?nombre=' + this.Nombreempleado).then((response) => {
              this.registroRol = response.data.result;
              if (response.status == 200) {
                  document.getElementById('fkRol').value = this.registroRol[0].pkRol;

              }

          });
        }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
}
</style>