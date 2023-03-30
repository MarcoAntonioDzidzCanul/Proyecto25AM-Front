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
                           

                                  <div class="row">
                        <div class="col">
                            <input type="number" name="fkPuesto" id="fkPuesto" value="" style="display: none;" />

                            <!-- <div class="form-group">
                                <label for="fkpado">fkpado:</label>
                                <input type="number" class="form-contdepa" name="fkpado" id="fkpado"
                                    aria-describedby="helpId" placeholder="fkpado" v-model="Empleados.fkpado" />
                            </div> -->
                            <label for="">Puesto:</label>
                            <select class="form-select" aria-label="Default select example" v-model="nombrepuesto"  v-on:change="convertirPuesto()">
                                <!-- <option selected></option> -->
                                <option disabled selected>Seleccionar Puesto</option>
                                <option v-for="p in Puestos" :key="p.pkpuesto">{{ p.nombre }}</option>

                            </select>
                        </div>
                        <div class="col">

                            <input type="number" name="fkDepartamento" id="fkDepartamento" value="" style="display: none;" />


                            <label for="">Departamento:</label>
                            <select class="form-select" aria-label="Default select example" v-model="nombredepartamento" v-on:change="convertidordepa()">
                                <!-- <option selected></option> -->
                                <option disabled selected>Seleccionar departamento</option>
                                <option v-for="depa in Departamentos" :key="depa.pkDepartamento">{{ depa.nombre }}</option>

                            </select>
                        </div>
                    </div>



                              
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
        Departamentos: {},
            Puestos: {},
            Departamentos: {},
            registrodepa: [],
            registroPuesto: [],
            nombrepuesto:"",
            nombredepartamento:"",
          pkEmpleado : null,
          form: {
              nombre : "",
              apellidos : "",
              dirreccion: "",
              ciudad : "",
              fkPuesto:"",
              fkDepartamento:""
              
              
           
          },
          
          
      }
  },
  created: function () {
        this.CargarPuestos_Y_depa();
    },
  mounted : function(){
      this.pkEmpleado = this.$route.params.pkEmpleado;
      console.log(this.pkEmpleado);
      axios.get("https://localhost:7051/Empleado/" + this.pkEmpleado, this.registroPuesto, this.registrodepa).then(datos =>
      {
          this.form.nombre = datos.data.result.nombre;
          this.form.apellidos = datos.data.result.apellidos;
          this.form.dirreccion = datos.data.result.dirreccion;
          this.form.ciudad = datos.data.result.ciudad;
          this.form.fkDepartamento = datos.data.result.fkDepartamento;
          this.form.fkPuesto = datos.data.result.fkPuesto;
          
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
      },
      CargarPuestos_Y_depa() {
            axios.get('https://localhost:7051/Puesto').then((response) => {
                this.Puestos = response.data.result;

            })

            axios.get('https://localhost:7051/Departamento').then((response) => {
                this.Departamentos = response.data.result;
            })

        },
         convertidordepa() {
           
             axios.get('https://localhost:7051/Departamento/BuscarPorNombre?nombr=' + this.nombredepartamento).then((response) => {
                this.registrodepa = response.data.result;
                if (response.status == 200) {
                    document.getElementById('fkDepartamento').value = this.registrodepa[0].pkDepartamento;

                }

            })

            return true;

        },
        async convertirPuesto(){
            await axios.get('https://localhost:7051/Puesto/BuscarPorNombre?nombr=' + this.nombrepuesto).then((response) => {
                this.registroPuesto = response.data.result;
                if (response.status == 200) {
                    document.getElementById('fkPuesto').value = this.registroPuesto[0].pkpuesto;
                }

            });
        }
      
  },
 
}

  

 


          


      

  



</script>