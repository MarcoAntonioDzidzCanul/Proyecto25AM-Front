<template>
    <div class="container-fluid">
      <div class="card" style="background-color: #333333;">
          <div class="card-header" style="background-color: #2E8B57; color: white;">Actualizar Empleado</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarEmpre">
                  <div class="form-group">
                      <label for="" style="color: white;">Nombre:</label>
                              <input type="text" class="form-control" name="nombre" aria-describedby="helpId"
                                  id="nombre" placeholder="nombre" v-model="form.nombre" />
                              

                              <label for="" style="color: white;">Direccion:</label>
                              <input type="text" class="form-control" name="direccion" aria-describedby="helpId"
                                  id="direccion" placeholder="direccion" v-model="form.direccion" />
                              

                              <label for="" style="color: white;">FK_Departamento:</label>
                              <input type="text" class="form-control" name="fk_Departamento" aria-describedby="helpId"
                                  id="fk_Departamento" placeholder="fk_Departamento" v-model="form.fk_Departamento" />
                            

                              <label for="" style="color: white;">FK_Empleado:</label>
                              <input type="text" class="form-control" name="fk_Empleado" aria-describedby="helpId"
                                  id="fk_Empleado" placeholder="fk_Empleado" v-model="form.fk_Empleado " />

                                  <label for="" style="color: white;">FK_Factura:</label>
                              <input type="text" class="form-control" name="fk_Factura" aria-describedby="helpId"
                                  id="fk_Factura" placeholder="fk-Factura" v-model="form.fk_Factura" />

                           




                              
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
                                  <router-link :to="{name: 'listarEmpresas'}" class="btn btn-outline-danger">Cancelar</router-link>
                              </div>
              </form>

          </div>
          </div>
          </div>
 
</template>
<script>
import axios from 'axios'

export default {
  name: 'editarEmpresas',
  components: {

  },

  data: function() {
      return {
        pkEmpresa: null,
      form:{
        pkEmpresa: "",
        nombre:"",
        direccion:"",
        fk_Departamento:"",
        fk_Empleado:"",
        fk_Factura:""
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
    this.pkEmpresa = this.$route.params.pkEmpresa;
    console.log(this.pkEmpresa);
    axios.get("https://localhost:7051/Empresa/" + this.pkEmpresa).then(datos =>
    {
      console.log(datos);
      this.form.pkEmpresa = datos.data.result.pkEmpresa;
      this.form.nombre = datos.data.result.nombre;
      this.form.direccion = datos.data.result.direccion;
      this.form.fk_Departamento = datos.data.result.fk_Departamento;
      this.form.fk_Empleado = datos.data.result.fk_Empleado;
      this.form.fk_Factura = datos.data.result.fk_Factura;
      console.log(this.form);
      
    })
  },

  methods:{
      editarEmpre()
      {
          axios.put("https://localhost:7051/Empresa/" + this.pkEmpresa, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listarEmpresas")
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