<template>
    <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Departamento</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarDep">
                  <div class="form-group">
                      <label for="nombre" style="color: black;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="nombre" v-model="form.nombre" />
                              

                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn -btn-success">Guardar</button>
                                  <router-link :to="{name: 'listadepartamento'}" class="btn btn-danger">Cancelar</router-link>
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