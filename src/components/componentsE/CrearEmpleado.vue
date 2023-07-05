<template>
    <div class="container-fluid">
        <div class="card" style="background-color: #333333;">
          <div class="card-header" style="background-color: #2E8B57; color: white;">Crear Empleado</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                            <div class="form-group">
                                <label for="nombre" style="color: white;">Nombre:</label>
                                <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                                    placeholder="nombre" v-model="Empleados.nombre" />
                            </div>
                            </div>
                        
                            <div class="row">
                            <div class="form-group">
                                <label for="apellidos" style="color: white;">Apellidos:</label>
                                <input type="text" class="form-control" name="apellidos" id="apellidos"
                                    aria-describedby="helpId" placeholder="apellidos" v-model="Empleados.apellidos" />
                            </div>
                            </div>
                        
                            <div class="row">
                            <div class="form-group">
                                <label for="dirreccion" style="color: white;">Direccion:</label>
                                <input type="text" class="form-control" name="dirreccion" id="dirreccion"
                                    aria-describedby="helpId" placeholder="direccion" v-model="Empleados.dirreccion" />
                            </div>
                            </div>


                       <div class="row">
                            <div class="form-group">
                                <label for="ciudad" style="color: white;">Ciudad:</label>
                                <input type="text" class="form-control" name="ciudad" id="ciudad"
                                    aria-describedby="helpId" placeholder="ciudad" v-model="Empleados.ciudad" />
                            </div>

                            <div class="row">
                            <div class="form-group">
                                <label for="fkPuesto" style="color: white;">fkPuesto:</label>
                                <input type="text" class="form-control" name="fkPuesto" id="fkPuesto"
                                    aria-describedby="helpId" placeholder="fkPuesto" v-model="Empleados.fkPuesto" />
                            </div>
                            </div>

                        
                            
                        

                    </div>
                    <!-- <br>
                      
                            <input type="number" name="fkpuesto" id="fkpuesto" value="" style="display: none;" />        
                            <label for="">Puesto:</label>
                            <select class="form-select" aria-label="Default select example" v-model="nombrepuesto"  v-on:change="convertirPuesto()">
                                <option disabled selected>Seleccionar Puesto</option>
                                <option v-for="p in Puestos" :key="p.pkpuesto">{{ p.nombre }}</option>
                            </select> -->
                       
                        

                            <!-- <input type="number" name="fkDepartamento" id="fkDepartamento" value="" style="display: none;" />
                            <label for="">Departamento:</label>
                            <select class="form-select" aria-label="Default select example" v-model="Nombredepa" v-on:change="convertidordepa()">             
                                <option disabled selected>Seleccionar departamento</option>
                                <option v-for="depa in Departamentos" :key="depa.pkDepartamento">{{ depa.nombre }}</option>
                            </select>
                        
                    <br> -->
                    <div class="row">
                        <div class="btn-group" depae="group" id="botonesopcion">
                            <button type="submit" class="btn btn-outline-primary">Agregar</button>
                            <router-link :to="{ name: 'listaempleado' }" class="btn btn-outline-danger">Cancelar</router-link>
                        </div>
                        <router-link :to="{ name: 'listaempleado' }" class="btn btn-outline-primary" id="finaliza"
                            style="display: none;">Finalizar</router-link>
                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" depae="alert">
                            {{ smg }}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';
export default {
    name: "crearempleado",
    components: {

    },

    data() {
        return {
            Empleados: {},
            smg: "",
            // Puestos: {}
            // // Departamentos: {},
            // // Nombredepa: '',
            // // nombrepuesto: '',
            // // registrodepa: [],
            // // registroPuesto: [],

        };
    },
    // created: function () {
    //     this.CargarPuestos_Y_depa();
    // },
    methods: {
        formulario() {
        
            var cuerpo = {
                nombre: this.Empleados.nombre,
                apellidos: this.Empleados.apellidos,
                dirreccion: this.Empleados.dirreccion,
                ciudad: this.Empleados.ciudad,
                fkPuesto: this.Empleados.fkPuesto,
            }

            console.log(cuerpo)




            axios.post('https://localhost:7051/Empleado', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display = "none";
                    this.smg = "Se creo correctamente";
                    document.getElementById('finaliza').style.display = "block";
                    console.log(result);
                }

            })
        


        },
        // CargarPuestos_Y_depa() {
        //     axios.get('https://localhost:7051/Puesto').then((response) => {
        //         this.Puestos = response.data.result;

        //     })

        //     axios.get('https://localhost:7051/Departamento').then((response) => {
        //         this.Departamentos = response.data.result;
        //     })

        // },
        //  convertidordepa() {
           
        //      axios.get('https://localhost:7051/Departamento/BuscarPorNombre?nombr=' + this.Nombredepa).then((response) => {
        //         this.registrodepa = response.data.result;
        //         if (response.status == 200) {
        //             document.getElementById('fkDepartamento').value = this.registrodepa[0].pkDepartamento;

        //         }

        //     })

        //     return true;

        // },
        // async convertirPuesto(){
        //     await axios.get('https://localhost:7051/Puesto/BuscarPorNombre?nombr=' + this.nombrepuesto).then((response) => {
        //         this.registroPuesto = response.data.result;
        //         if (response.status == 200) {
        //             document.getElementById('fkpuesto').value = this.registroPuesto[0].pkpuesto;
        //         }

        //     })

        // }

    }    
}
 
</script>

<style scoped>
label {
    font-weight: bold;
}
</style>