<template>
    <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Usuario</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarCliente">
                  <div class="form-group">
                      <label for="nombre" style="color: black;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="Usuario" v-model="form.nombre" />
                              <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un usuario</small>

                              <label for="apellidos" style="color: black;">Apellidos:</label>
                              <input type="text" class="form-control" name="apellidos" aria-describedby="helpId"
                                  id="apellidos" placeholder="password" v-model="form.apellidos" />
                              <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un password</small>

                              <label for="telefono" style="color: black;">Telefono:</label>
                              <input type="text" class="form-control" name="telefono" aria-describedby="helpId"
                                  id="telefono" placeholder="Usuario" v-model="form.telefono" />
                              <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un Id</small>

                              <label for="email" style="color: black;">email:</label>
                              <input type="text" class="form-control" name="email" aria-describedby="helpId"
                                  id="email" placeholder="fkEmpleado" v-model="form.email" />
                              <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un Id</small>

                              <label for="direccion" style="color: black;">direccion:</label>
                              <input type="text" class="form-control" name="direccion" aria-describedby="helpId"
                                  id="direccion" placeholder="fkRol" v-model="form.direccion" />
                              <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un Id</small>



                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn -btn-success">Guardar</button>
                                  <router-link :to="{name: 'listacliente'}" class="btn btn-danger">Cancelar</router-link>
                              </div>
              </form>

          </div>
          </div>
          </div>
 



  

  


  









  <!-- <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Usuario</div>
          <small id="helpId" class="form-text" text-muted style="color: black;">Ingrese sus cambios</small>
          <div class="card-body" style="background-color: gray;">
              <form v-on:submit.prevent="formulario">
                  <div class="row">
                      <div class="col">
                          <div class="form-group">
                              <label for="user" style="color: black;">Id:</label>
                              <input type="number" class="form-control" name="user" aria-describedby="helpId"
                                  id="pkUsuario" placeholder="ID" v-model="pkUsuario" />
                              <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un Id</small>
                              <br>
                              <br>
                              <div id="botonbusca">
                                  <button type="button" class="btn btn-outline-primary"
                                      v-on:click="Buscar(pkUsuario)">Buscar</button>
                                  &#160
                                  <router-link :to="{ name: 'listar' }" class="btn btn-outline-danger">Cancelar</router-link>
                              </div>
                          </div>
                      </div>
                      <div id="user-password" style="display: none;">
                          <div class="col">

                              <div class="form-group">
                                  <label for="user" style="color: black;">user:</label>
                                  <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                      placeholder="usuario" value="" />



                              </div>
                          </div>
                          <div class="col">
                              <div class="form-group">
                                  <label for="password" style="color: black;">Password:</label>
                                  <input type="text" class="form-control" name="password" id="password"
                                      aria-describedby="helpId" placeholder="password" value="" />

                              </div>
                          </div>
                      </div>

                  </div>
                  <br>
                  <div id="fk-empleado-rol" class="row" style="display: none;">
                      <div class="col">

                          <div class="form-group">
                              <label for="fkEmpleado" style="color: black;">FkEmpleado:</label>
                              <input type="number" class="form-control" name="fkEmpleado" id="fkEmpleado"
                                  aria-describedby="helpId" placeholder="fkEmpleado" value="" />
                          </div>
                      </div>
                      <div class="col">

                          <div class="form-group">
                              <label for="fkRol" style="color: black;">FkRol:</label>
                              <input type="number" class="form-control" name="fkRol" id="fkRol" aria-describedby="helpId"
                                  placeholder="fkRol" value="" />
                          </div>
                      </div>
                  </div>
                  <br>
                  <div id="botoncerrar" style="display: none;"><router-link :to="{name:'listar'}" type="button" class="btn btn-outline-primary">Finalizar</router-link>|</div>
                  <div id="botones" class="row" style="display: none;">
                      <div class="btn-group" role="group">
                          <button type="submit" class="btn btn-outline-primary">Editar</button>
                          <router-link :to="{ name: 'listar' }" class="btn btn-outline-danger">Cancelar</router-link>
                      </div>

                  </div>
                  <br>
                  <div class="row">
                      <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                          {{ smg }}
                      </div>
                      <div id="alert2" class="alert alert-warning" role="alert" style="display:none;">{{ bad }}</div>
                  </div>
              </form>
          </div>
      </div>
  </div> -->
</template>

<script>
import axios from 'axios'

export default {
  name: 'editarcliente',
  components: {

  },

  data: function() {
      return {
          pkCliente : null,
          form: {
              "pkCliente" : "",
              "nombre" : "",
              "apellidos" : "",
              "telefono": "",
              "email" : "",
              "direccion" : ""
          },
          
          
      }
  },
  methods:{
      editarCliente()
      {
          axios.put("https://localhost:7051/Cliente?id=" + this.pkCliente, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listacliente")
      }
      
  },
  mounted : function(pkCliente){
      this.pkCliente = this.$route.params.pkCliente;
      // const Fecha = this.form.fechaRegistro;
      console.log(this.pkCliente);
      axios.get("https://localhost:7051/Cliente/" + this.pkCliente).then(datos =>
      {
          this.form.pkCliente = datos.data.value.result.pkCliente;
          this.form.nombre = datos.data.value.result.nombre;
          this.form.apellidos = datos.data.value.result.apellidos;
          this.form.telefono = datos.data.value.reuslt.telefono;
          this.form.email = datos.data.value.result.email;
          this.form.direccion = datos.data.value.result.direccion;
          console.log(this.form)
      });

  },
}

  

 


          


      

  



</script>