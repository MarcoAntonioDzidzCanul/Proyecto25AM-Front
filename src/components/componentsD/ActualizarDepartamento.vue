<template>
    <div class="container-fluid">
      <div class="card" style="background-color: #333333;">
          <div class="card-header" style="background-color: #2E8B57; color: white;">Actualizar Departamento</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarDep">
                  <div class="form-group">
                      <label for="nombre" style="color: white;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="Escriba el nombre" v-model="form.nombre" />
                                  <br>

                                  <label for="direccion" style="color: white;">Direccion:</label>
                              <input type="text" class="form-control" name="direccion" aria-describedby="helpId"
                                  id="direccion" placeholder="Escriba la direccion" v-model="form.direccion" />
                                  <br>

                                  <label for="estado" style="color: white;">Estado:</label>
                              <input type="text" class="form-control" name="estado" aria-describedby="helpId"
                                  id="estado" placeholder="Escriba el estado" v-model="form.estado" />
                                  <br>

                                  <label for="ruta_imagen" style="color: white;">DIreccion de la imagen:</label>
                              <input type="text" class="form-control" name="ruta_imagen" aria-describedby="helpId"
                                  id="ruta_imagen" placeholder="Escriba la direccion de la imagen" v-model="form.ruta_imagen" />
                                  <br>

                                  <label for="fk_Cliente" style="color: white;">fk_Cliente:</label>
                              <input type="text" class="form-control" name="fk_Cliente" aria-describedby="helpId"
                                  id="fk_Cliente" placeholder="Escriba el cliente" v-model="form.fk_Cliente" />
                                  <br>

                              

                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn btn-outline-primary">Guardar</button>
                                  <router-link :to="{name: 'listadepartamento'}" class="btn btn-outline-danger">Cancelar</router-link>
                              </div>
              </form>

          </div>
          </div>
          </div>
 
</template>
<style>
.card-body {
    margin: 2em;
}
</style>
<script>
import axios from 'axios'

export default {
  name: 'editardepartamento',
  components: {

  },

  data() {
      return {
          pkDepartamento : null,
          form: {
              nombre : ""
          },
          
          
      }
  },
  mounted : function(){
      this.pkDepartamento = this.$route.params.pkDepartamento;
      console.log(this.pkDepartamento);
      axios.get("https://localhost:7051/Departamento/" + this.pkDepartamento).then(datos =>
      {
          this.form.nombre = datos.data.result.nombre;
          this.form.direccion = datos.data.result.direccion;
          this.form.estado = datos.data.result.estado;
          this.form.ruta_imagen = datos.data.result.ruta_imagen;
          this.form.fk_Cliente = datos.data.result.fk_Cliente;

          console.log(this.form)
      });

  },
  methods:{
      editarDep()
      {
          axios.put("https://localhost:7051/Departamento/" + this.pkDepartamento, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listadepartamento")
      }
      
  },
 
}

  

 


          


      

  



</script>