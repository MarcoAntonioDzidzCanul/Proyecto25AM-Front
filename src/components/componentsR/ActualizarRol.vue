<template>
    <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Rol</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarRol">
                  <div class="form-group">
                      <label for="nombre" style="color: black;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="nombre" v-model="form.nombre" />
                              

                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn -btn-success">Guardar</button>
                                  <router-link :to="{name: 'listarol'}" class="btn btn-danger">Cancelar</router-link>
                              </div>
              </form>

          </div>
          </div>
          </div>
 
</template>
<script>
import axios from 'axios'

export default {
  name: 'editarrol',
  components: {

  },

  data: function() {
      return {
          pkRol : null,
          form: {

              nombre : ""
          },
          
          
      }
  },
  mounted : function(){
      this.pkRol = this.$route.params.pkRol;
      console.log(this.pkRol);
      axios.get("https://localhost:7051/Rol/" + this.pkRol).then(datos =>
      {
          this.form.nombre = datos.data.result.nombre;
          console.log(this.form)
      });

  },
  methods:{
      editarRol()
      {
          axios.put("https://localhost:7051/Rol/" + this.pkRol, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listarol")
      }
      
  },
 
}

  

 


          


      

  



</script>