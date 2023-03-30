<template>
    <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Empleado</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarEmp">
                  <div class="form-group">
                      <label for="" style="color: black;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="nombre" v-model="form.nombre" />
                              

                              <label for="" style="color: black;">Apellidos:</label>
                              <input type="text" class="form-control" name="apellidos" aria-describedby="helpId"
                                  id="apellidos" placeholder="apellidos" v-model="form.apellidos" />
                              

                              <label for="" style="color: black;">Direccion:</label>
                              <input type="text" class="form-control" name="direccion" aria-describedby="helpId"
                                  id="direccion" placeholder="direccion" v-model="form.dirreccion" />
                            

                              <label for="" style="color: black;">Ciudad:</label>
                              <input type="text" class="form-control" name="ciudad" aria-describedby="helpId"
                                  id="ciudad" placeholder="ciudad" v-model="form.ciudad" />
                           

                              <label for="" style="color: black;">fkPuesto:</label>       
                              <input type="text" class="form-control" name="fkPuesto" aria-describedby="helpId"
                                  id="fkPuesto" placeholder="fkPuesto" v-model="form.fkPuesto" />
                             

                                  <label for="direccion" style="color: black;">fkDepartamento:</label>
                              <input type="text" class="form-control" name="fkDepartamento" aria-describedby="helpId"
                                  id="fkDepartamento" placeholder="fkDepartamento" v-model="form.fkDepartamento" />



                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn -btn-success">Guardar</button>
                                  <router-link :to="{name: 'listaempleado'}" class="btn btn-danger">Cancelar</router-link>
                              </div>
              </form>

          </div>
          </div>
          </div>
 
</template>
<script>
import axios from 'axios'

export default {
  name: 'editarempleado',
  components: {

  },

  data: function() {
      return {
          pkEmpleado : null,
          form: {
              nombre : "",
              apellidos : "",
              dirreccion: "",
              ciudad : "",
              fkPuesto : "",
              fkDepartamento : ""
          },
          
          
      }
  },
  mounted : function(){
      this.pkEmpleado = this.$route.params.pkEmpleado;
      console.log(this.pkEmpleado);
      axios.get("https://localhost:7051/Empleado/" + this.pkEmpleado).then(datos =>
      {
          this.form.nombre = datos.data.result.nombre;
          this.form.apellidos = datos.data.result.apellidos;
          this.form.dirreccion = datos.data.result.dirreccion;
          this.form.ciudad = datos.data.result.ciudad;
          this.form.fkPuesto = datos.data.result.fkPuesto;
          this.form.fkDepartamento = datos.data.result.fkDepartamento;
          console.log(this.form)
      });

  },
  methods:{
      editarEmp()
      {
          axios.put("https://localhost:7051/Empleado/" + this.pkEmpleado, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listaempleado")
      }
      
  },
 
}

  

 


          


      

  



</script>