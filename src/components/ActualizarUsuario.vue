<template>
      <div class="container-fluid">
        <div class="card" style="background-color: gray;">
            <div class="card-header" style="background-color: gray; color: black;">Actualizar Usuario</div>
            <div class="card-body">
                <form v-on:submit.prevent="editarUsuario">
                    <div class="form-group">
                        <label for="user" style="color: black;">Usuario:</label>
                                <input type="text" class="form-control" name="user" aria-describedby="helpId"
                                    id="user" placeholder="Usuario" v-model="form.user" />
                                <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un usuario</small>

                                <label for="password" style="color: black;">Password:</label>
                                <input type="text" class="form-control" name="password" aria-describedby="helpId"
                                    id="password" placeholder="password" v-model="form.password" />
                                <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un password</small>

                                <label for="fechaRegistro" style="color: black;">Fecha de registro:</label>
                                <input type="text" class="form-control" name="fechaRegistro" aria-describedby="helpId"
                                    id="fechaRegistro" placeholder="Usuario" v-model="form.fechaRegistro" />
                                <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un Id</small>

                                <label for="fkEmpleado" style="color: black;">FkEmpleado:</label>
                                <input type="text" class="form-control" name="fkEmpleado" aria-describedby="helpId"
                                    id="fkEmpleado" placeholder="fkEmpleado" v-model="form.fkEmpleado" />
                                <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un Id</small>

                                <label for="fkRol" style="color: black;">FkRol:</label>
                                <input type="text" class="form-control" name="fkRol" aria-describedby="helpId"
                                    id="fkRol" placeholder="fkRol" v-model="form.fkRol" />
                                <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un Id</small>



                                </div><br/>

                                <div class="btn-group" role="group">
                                    <button type="submit" class="btn -btn-success">Guardar</button>
                                    <router-link :to="{name: 'listar'}" class="btn btn-danger">Cancelar</router-link>
                                </div>
                </form>

            </div>
            </div>
            </div>
   



    

    

  
    









    <!-- <div class="container-fluid">
        <div class="card" style="background-color: gray;">
            <div class="card-header" style="background-color: gray; color: black;">Actualizar Usuario</div>
            <small id="helpId" class="form-text" text-muted style="color: black;">Ingrese sus cambios</small>
            <div class="card-body" style="background-color: gray;">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="user" style="color: black;">Id:</label>
                                <input type="number" class="form-control" name="user" aria-describedby="helpId"
                                    id="pkUsuario" placeholder="ID" v-model="pkUsuario" />
                                <small id="peticion" class="form-text" text-muted style="color: black;">Ingresa un Id</small>
                                <br>
                                <br>
                                <div id="botonbusca">
                                    <button type="button" class="btn btn-outline-primary"
                                        v-on:click="Buscar(pkUsuario)">Buscar</button>
                                    &#160
                                    <router-link :to="{ name: 'listar' }" class="btn btn-outline-danger">Cancelar</router-link>
                                </div>
                            </div>
                        </div>
                        <div id="user-password" style="display: none;">
                            <div class="col">

                                <div class="form-group">
                                    <label for="user" style="color: black;">user:</label>
                                    <input type="text" class="form-control" name="user" aria-describedby="helpId" id="user"
                                        placeholder="usuario" value="" />



                                </div>
                            </div>
                            <div class="col">
                                <div class="form-group">
                                    <label for="password" style="color: black;">Password:</label>
                                    <input type="text" class="form-control" name="password" id="password"
                                        aria-describedby="helpId" placeholder="password" value="" />

                                </div>
                            </div>
                        </div>

                    </div>
                    <br>
                    <div id="fk-empleado-rol" class="row" style="display: none;">
                        <div class="col">

                            <div class="form-group">
                                <label for="fkEmpleado" style="color: black;">FkEmpleado:</label>
                                <input type="number" class="form-control" name="fkEmpleado" id="fkEmpleado"
                                    aria-describedby="helpId" placeholder="fkEmpleado" value="" />
                            </div>
                        </div>
                        <div class="col">

                            <div class="form-group">
                                <label for="fkRol" style="color: black;">FkRol:</label>
                                <input type="number" class="form-control" name="fkRol" id="fkRol" aria-describedby="helpId"
                                    placeholder="fkRol" value="" />
                            </div>
                        </div>
                    </div>
                    <br>
                    <div id="botoncerrar" style="display: none;"><router-link :to="{name:'listar'}" type="button" class="btn btn-outline-primary">Finalizar</router-link>|</div>
                    <div id="botones" class="row" style="display: none;">
                        <div class="btn-group" role="group">
                            <button type="submit" class="btn btn-outline-primary">Editar</button>
                            <router-link :to="{ name: 'listar' }" class="btn btn-outline-danger">Cancelar</router-link>
                        </div>

                    </div>
                    <br>
                    <div class="row">
                        <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                            {{ smg }}
                        </div>
                        <div id="alert2" class="alert alert-warning" role="alert" style="display:none;">{{ bad }}</div>
                    </div>
                </form>
            </div>
        </div>
    </div> -->
</template>

<script>
import axios from 'axios'

export default {
    name: 'editar',
    components: {

    },

    data: function() {
        return {
            pkUsuario : null,
            form: {
                "pkUsuario" : "",
                "user" : "",
                "password" : "",
                "fechaRegistro": "",
                "fkEmpleado" : "",
                "fkRol" : ""
            },
            
            
        }
    },
    methods:{
        editarUsuario()
        {
            axios.put("https://localhost:7051/Usuario?id=" + this.pkUsuario, this.form).then(data =>{
                console.log(data);
            });
            this.$router.push("/listar")
        }
        
    },
    mounted : function(pkUsuario){
        this.pkUsuario = this.$route.params.pkUsuario;
        // const Fecha = this.form.fechaRegistro;
        console.log(this.pkUsuario);
        axios.get("https://localhost:7051/Usuario/" + this.pkUsuario).then(datos =>
        {
            this.form.pkUsuario = datos.data.value.result.pkUsuario;
            this.form.user = datos.data.value.result.user;
            this.form.password = datos.data.value.result.password;
            this.form.fkEmpleado = datos.data.value.reuslt.fkEmpleado;
            this.form.fkRol = datos.data.value.result.fkRol;
            console.log(this.form)
        });

    },
}

    
  
   
  
  
            


        

    



</script>