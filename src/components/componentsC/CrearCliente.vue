<template>
    <div class="container-fluid">
        <div class="card" style="background-color:  #333333;">
            <div class="card-header" style="background-color:#2E8B57; color: white;">Crear Cliente</div>
            <div style="background-color:  #333333;" class="card-body">
                <form v-on:submit.prevent="formularioC">
                    <div class="row">


                        <div class="form-group">
                            <label for="nombre" style="color: white;">Nombre:</label>
                            <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                                placeholder="nombre" v-model="Clientes.nombre" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>



                        <div class="form-group">
                            <label for="apellidos" style="color: white;">Apellidos:</label>
                            <input type="text" class="form-control" name="apellidos" id="apellidos"
                                aria-describedby="helpId" placeholder="apellidos" v-model="Clientes.apellidos" />

                        </div>
                        <br>
                        <br>
                        <br>
                        <br>




                        <div class="form-group">
                            <label for="telefono" style="color: white;">Telefono:</label>
                            <input type="text" class="form-control" name="telefono" id="telefono" aria-describedby="helpId"
                                placeholder="telefono" v-model="Clientes.telefono" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>



                        <div class="form-group">
                            <label for="email" style="color: white;">Email:</label>
                            <input type="text" class="form-control" name="email" id="email" aria-describedby="helpId"
                                placeholder="email" v-model="Clientes.email" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="form-group">
                            <label for="genero" style="color: white;">Genero:</label>
                            <input type="text" class="form-control" name="genero" id="genero" aria-describedby="helpId"
                                placeholder="genero" v-model="Clientes.genero" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="form-group">
                            <label for="curp" style="color: white;">CURP:</label>
                            <input type="text" class="form-control" name="curp" id="curp" aria-describedby="helpId"
                                placeholder="curp" v-model="Clientes.curp" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="form-group">
                            <label for="rfc" style="color: white;">RFC:</label>
                            <input type="text" class="form-control" name="rfc" id="rfc" aria-describedby="helpId"
                                placeholder="rfc" v-model="Clientes.rfc" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="form-group">
                            <label for="fecha_Nacimiento" style="color: white;">Fecha de nacimiento:</label>
                            <input type="text" class="form-control" name="fecha_Nacimiento" id="fecha_Nacimiento" aria-describedby="helpId"
                                placeholder="fecha_Nacimiento" v-model="Clientes.fecha_Nacimiento" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>




                        <div class="row">
                            <div class="btn-group" role="group" id="botonesopcion1">
                                <button type="submit" class="btn btn-outline-primary">Agregar</button>
                                <router-link :to="{ name: 'listacliente' }"
                                    class="btn btn-outline-danger">Cancelar</router-link>
                            </div>
                            <router-link :to="{ name: 'listacliente' }" class="btn btn-outline-primary" id="finaliza"
                                style="display: none;">Finalizar</router-link>
                        </div>
                        <br>
                        <br>
                        <div class="row">
                            <div id="alert" style="display:none;" class="alert alert-success" role="alert">
                                {{ smg }}
                            </div>
                        </div>
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
import axios from 'axios';
export default {
    name: "Crearcliente",
    components: {

    },

    data() {
        return {
            Clientes: {},
            smg: "",
        };
    },
    methods: {
        formularioC() {
            var cuerpo1 = {
                nombre: this.Clientes.nombre,
                apellidos: this.Clientes.apellidos,
                telefono: this.Clientes.telefono,
                email: this.Clientes.email,
                genero: this.Clientes.genero,
                curp: this.Clientes.curp,
                rfc: this.Clientes.rfc,
                fecha_Nacimiento: this.Clientes.fecha_Nacimiento
            };

            axios.post('https://localhost:7051/Cliente', cuerpo1).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion1').style.display = "none";
                    this.smg = "Se creo correctamente";
                    document.getElementById('finaliza').style.display = "block";
                    console.log(result);
                }
                // window.location.href = "dashboard";

            })
        }
    }
}
</script>
  
<!-- <style scoped>
label {
    font-weight: bold;
}
</style> -->