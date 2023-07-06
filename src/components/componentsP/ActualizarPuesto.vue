<template>
    <div class="container-fluid">
      <div class="card" style="background-color: #333333;">
          <div class="card-header" style="background-color:#2E8B57; color: white;">Actualizar Puesto</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarPuesto">
                  <div class="form-group">
                      <label for="nombre" style="color: white;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="Escriba el nombre" v-model="form.nombre" />
                             
                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn btn-outline-primary">Guardar</button>
                                  <router-link :to="{name: 'listapuesto'}" class="btn btn-outline-danger">Cancelar</router-link>
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
  name: 'editarpuesto',
  components: {

  },

  data: function() {
      return {
          pkpuesto : null,
          form: {
              nombre : ""
          },
          
          
      }
  },
  mounted : function()
  {
      this.pkpuesto = this.$route.params.pkpuesto;
      console.log(this.pkpuesto);
      axios.get("https://localhost:7051/Puesto/" + this.pkpuesto).then(datos =>
      {
          this.form.nombre = datos.data.result.nombre;
          console.log(this.form)
      });

  },
  methods:{
      editarPuesto()
      {
          axios.put("https://localhost:7051/Puesto/" + this.pkpuesto, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listapuesto")
      }
      
  },
 
}


  

 


          


      

  



</script>