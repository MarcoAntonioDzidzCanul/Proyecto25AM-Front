<template>
    <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Usuario</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarClien">
                  <div class="form-group">
                      <label for="nombre" style="color: black;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="nombre" v-model="form.nombre" />
                              

                              <label for="apellidos" style="color: black;">Apellidos:</label>
                              <input type="text" class="form-control" name="apellidos" aria-describedby="helpId"
                                  id="apellidos" placeholder="apellidos" v-model="form.apellidos" />
                              

                              <label for="telefono" style="color: black;">Telefono:</label>
                              <input type="text" class="form-control" name="telefono" aria-describedby="helpId"
                                  id="telefono" placeholder="telefono" v-model="form.telefono" />
                            

                              <label for="email" style="color: black;">email:</label>
                              <input type="text" class="form-control" name="email" aria-describedby="helpId"
                                  id="email" placeholder="email" v-model="form.email" />
                           

                              <label for="direccion" style="color: black;">direccion:</label>
                              <input type="text" class="form-control" name="direccion" aria-describedby="helpId"
                                  id="direccion" placeholder="direccion" v-model="form.direccion" />
                             



                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn -btn-success">Guardar</button>
                                  <router-link :to="{name: 'listacliente'}" class="btn btn-danger">Cancelar</router-link>
                              </div>
              </form>

          </div>
          </div>
          </div>
 
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
  mounted : function(){
      this.pkCliente = this.$route.params.pkCliente;
      console.log(this.pkCliente);
      axios.get("https://localhost:7051/Cliente/" + this.pkCliente).then(datos =>
      {
          this.form.nombre = datos.data.value;
          this.form.apellidos = datos.data.value;
          this.form.telefono = datos.data.value;
          this.form.email = datos.data.value;
          this.form.direccion = datos.data.value;
          console.log(this.form)
      });

  },
  methods:{
      editarClien()
      {
          axios.put("https://localhost:7051/Cliente/" + this.pkCliente, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listacliente")
      }
      
  },
 
}

  

 


          


      

  



</script>