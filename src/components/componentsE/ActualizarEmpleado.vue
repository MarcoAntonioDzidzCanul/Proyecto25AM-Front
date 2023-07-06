<template>
    <div class="container-fluid">
      <div class="card" style="background-color: #333333;">
          <div class="card-header" style="background-color: #2E8B57; color: white;">Actualizar Empleado</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarEmp">
                  <div class="form-group">
                      <label for="" style="color: white;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="nombre" v-model="form.nombre" />
                                  <br>
                              

                              <label for="" style="color: white;">Apellidos:</label>
                              <input type="text" class="form-control" name="apellidos" aria-describedby="helpId"
                                  id="apellidos" placeholder="apellidos" v-model="form.apellidos" />
                                  <br>
                              

                              <label for="" style="color: white;">Direccion:</label>
                              <input type="text" class="form-control" name="direccion" aria-describedby="helpId"
                                  id="direccion" placeholder="direccion" v-model="form.dirreccion" />
                                  <br>
                            

                              <label for="" style="color: white;">Ciudad:</label>
                              <input type="text" class="form-control" name="ciudad" aria-describedby="helpId"
                                  id="ciudad" placeholder="ciudad" v-model="form.ciudad" />
                                  <br>

                                  <label for="" style="color: white;">FKPuesto:</label>
                              <input type="text" class="form-control" name="fkPuesto" aria-describedby="helpId"
                                  id="fkPuesto" placeholder="fkPuesto" v-model="form.fkPuesto" />
                                  <br>

                           




                              
                              </div><br/>


                              <!-- <div class="form-group">
           
                              <label for="puesto">Selecciona el puesto: </label>
                              <select class="form-select" aria-label="Default select example" name="puesto" id="puesto" v-model="form.fkPuesto">
                              <option v-for="puesto in Puesto" :value="puesto.pkpuesto" :key="puesto.pkpuesto">{{puesto.nombre}}</option>
                              </select>
                              </div>

                              <div class="form-group">
                              <label for="departamento">Selecciona el departamento: </label>
                              <select class="form-select" aria-label="Default select example" name="departamento" id="departamento" v-model="form.fkDepartamento">
                              <option v-for="departamento in Departamento" :value="departamento.pkDepartamento" :key="departamento.pkDepartamento">{{departamento.nombre}}</option>
                              </select>
        
            </div> -->

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn btn-outline-primary">Guardar</button>
                                  <router-link :to="{name: 'listaempleado'}" class="btn btn-outline-danger">Cancelar</router-link>
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
  name: 'editarempleado',
  components: {

  },

  data: function() {
      return {
        pkEmpleado: null,
      form:{
        pkEmpleado: "",
        nombre:"",
        apellidos:"",
        dirreccion:"",
        ciudad:"",
        fkPuesto:""
      },
      // Puesto:{},
      // Departamento:{}
    };
  },
//  created: function () {
//         this.consultarPuesto();
//         this.consultarDepartamento();    
//       },
  mounted:function(){
    this.pkEmpleado = this.$route.params.pkEmpleado;
    console.log(this.pkEmpleado);
    axios.get("https://localhost:7051/Empleado/" + this.pkEmpleado).then(datos =>
    {
      console.log(datos);
      this.form.pkEmpleado = datos.data.result.pkEmpleado;
      this.form.nombre = datos.data.result.nombre;
      this.form.apellidos = datos.data.result.apellidos;
      this.form.dirreccion = datos.data.result.dirreccion;
      this.form.ciudad = datos.data.result.ciudad;
      this.form.fkPuesto = datos.data.result.fkPuesto;
      console.log(this.form);
    })
  },

  methods:{
      editarEmp()
      {
          axios.put("https://localhost:7051/Empleado/" + this.pkEmpleado, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listaempleado")
      },
      // consultarDepartamento() {
      //        axios.get("https://localhost:7051/Departamento").then((result) => {
      //          console.log(result.data.result);
      //          this.Departamento = result.data.result;
      //       });
              
      //   },
      //         consultarPuesto() {
      //           axios.get("https://localhost:7051/Puesto").then((result) => {
      //             console.log(result.data.result);
      //             this.Puesto = result.data.result;
      //           });
                
      //       }
  },
      
        
      
  
 
}

  

 


          


      

  



</script>