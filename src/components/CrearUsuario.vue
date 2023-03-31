<template>
    <div class="container-fluid">
        <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Crear Usuario</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                            <div class="form-group">
                                <label for="user">Usuario:</label>
                                <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                    placeholder="usuario" v-model="Usuarios.user" />
                                
                            </div>
                        
                        
                            <div class="form-group">
                                <label for="password">Password:</label>
                                <input type="text" class="form-control" name="password" id="password"
                                    aria-describedby="helpId" placeholder="password" v-model="Usuarios.password" />
                               
                            
                        </div>

                    </div>
                    <br>
                   
                       
                            <input type="number" name="fkEmpleado" id="fkEmpleado" value="" style="display: none;" />
                            <label for="">Empleado:</label>
                            <select class="form-select" aria-label="Default select example" v-model="nombremeple"  v-on:change="convertidorEmple()">
                                <option v-for="emple in Empleados" :key="emple.pkEmpleado">{{ emple.nombre }}</option>

                            </select>
                 

                            <input type="number" name="fkRol" id="fkRol" value="" style="display: none;" />
                            <label for="">Rol:</label>
                            <select class="form-select" aria-label="Default select example" v-model="NombreRol" v-on:change="convertidorRol()">
                                <!-- <option selected></option> -->
                                <option disabled selected>Seleccionar Rol</option>
                                <option v-for="rol in Rol" :key="rol.pkRol">{{ rol.nombre }}</option>

                            </select>
                        
                    
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            <button type="submit" class="btn btn-outline-primary">Agregar</button>
                            <router-link :to="{ name: 'listar' }" class="btn btn-outline-danger">Cancelar</router-link>
                        </div>
                        <router-link :to="{ name: 'listar' }" class="btn btn-outline-primary" id="finaliza"
                            style="display: none;">Finalizar</router-link>
                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
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
    name: "crearUser",
    components: {

    },

    data() {
        return {
            Usuarios: {},
            smg: "",
            Empleados: {},
            Rol: {},
            NombreRol: '',
            nombremeple: '',
            registroRol: [],
            registroEmple: [],

        };
    },
    created: function () {
        this.CargarEmpleados_Y_Rol();
    },
    methods: {
        formulario() {
        

            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            var cuerpo = {
                user: this.Usuarios.user,
                password: this.Usuarios.password,
                fechaRegistro: hoy.toISOString(),
                fkEmpleado: document.getElementById('fkEmpleado').value,
                fkRol: document.getElementById('fkRol').value
            }

            console.log(cuerpo)




            axios.post('https://localhost:7051/Usuario', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display = "none";
                    this.smg = "agregado exitosamente :D/";
                    document.getElementById('finaliza').style.display = "block";
                    console.log(result);
                }

            })
        


        },
        CargarEmpleados_Y_Rol() {
            axios.get('https://localhost:7051/Empleado').then((response) => {
                this.Empleados = response.data.result;

            })

            axios.get('https://localhost:7051/Rol').then((response) => {
                this.Rol = response.data.result;
            })

        },
         convertidorRol() {
           
             axios.get('https://localhost:7051/Rol/BuscarPorNombre?nombr=' + this.NombreRol).then((response) => {
                this.registroRol = response.data.result;
                if (response.status == 200) {
                    document.getElementById('fkRol').value = this.registroRol[0].pkRol;

                }

            })

            return true;

        },
        async convertidorEmple(){
            await axios.get('https://localhost:7051/Empleado/BuscarPorNombre?nombr=' + this.nombremeple).then((response) => {
                this.registroEmple = response.data.result;
                if (response.status == 200) {
                    document.getElementById('fkEmpleado').value = this.registroEmple[0].pkEmpleado;
                }

            })

        }

    }    
}
 
</script>

<style scoped>
label {
    font-weight: bold;
}
</style>