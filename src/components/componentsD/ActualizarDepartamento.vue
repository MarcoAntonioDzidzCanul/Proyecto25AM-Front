<template>
    <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Departamento</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarDep">
                  <div class="form-group">
                      <label for="nombre" style="color: black;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="Escriba el nombre" v-model="form.nombre" />

                                  <label for="direccion" style="color: black;">Direccion:</label>
                              <input type="text" class="form-control" name="direccion" aria-describedby="helpId"
                                  id="direccion" placeholder="Escriba la direccion" v-model="form.direccion" />

                                  <label for="estado" style="color: black;">Estado:</label>
                              <input type="text" class="form-control" name="estado" aria-describedby="helpId"
                                  id="estado" placeholder="Escriba el estado" v-model="form.estado" />

                                  <label for="fk_Cliente" style="color: black;">fk_Cliente:</label>
                              <input type="text" class="form-control" name="fk_Cliente" aria-describedby="helpId"
                                  id="fk_Cliente" placeholder="Escriba el cliente" v-model="form.fk_Cliente" />

                              

                              
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