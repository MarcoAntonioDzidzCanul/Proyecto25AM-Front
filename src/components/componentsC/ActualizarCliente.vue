<template>
    <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Cliente</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarClien">
                  <div class="form-group">
                      <label for="nombre" style="color: black;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="" v-model="form.nombre" />
                              

                              <label for="apellidos" style="color: black;">Apellidos:</label>
                              <input type="text" class="form-control" name="apellidos" aria-describedby="helpId"
                                  id="apellidos" placeholder="" v-model="form.apellidos" />
                              

                              <label for="telefono" style="color: black;">Telefono:</label>
                              <input type="text" class="form-control" name="telefono" aria-describedby="helpId"
                                  id="telefono" placeholder="" v-model="form.telefono" />
                            

                              <label for="email" style="color: black;">Email:</label>
                              <input type="text" class="form-control" name="email" aria-describedby="helpId"
                                  id="email" placeholder="" v-model="form.email" />
                           

                             



                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn btn-outline-primary">Guardar</button>
                                  <router-link :to="{name: 'listacliente'}" class="btn btn-outline-danger">Cancelar</router-link>
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

  data(){
      return {
        pkCliente:"",
          form: {
           
              nombre: "",
              apellidos: "",
              telefono: "",
              email: ""
          },
          
          
      }
  },
  mounted : function(){
      this.pkCliente = this.$route.params.pkCliente;
      console.log(this.pkCliente);
      axios.get("https://localhost:7051/Cliente/" + this.pkCliente).then(datos =>
      {
          
          this.form.nombre = datos.data.result.nombre;
          this.form.apellidos = datos.data.result.apellidos;
          this.form.telefono = datos.data.result.telefono;
          this.form.email = datos.data.result.email;
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