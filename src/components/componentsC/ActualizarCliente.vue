<template>
    <div class="container-fluid">
        <div class="card" style="background-color: #333333;">
            <div class="card-header" style="background-color: #2E8B57; color:white;">Actualizar Cliente</div>
            <div class="card-body">
                <form v-on:submit.prevent="editarClien">
                    <div class="form-group">
                        <label for="nombre" style="color: white;">Nombre:</label>                       
                        <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                            placeholder="" v-model="form.nombre" />
                            <br>


                        <label for="apellidos" style="color: white;">Apellidos:</label>
                        <input type="text" class="form-control" name="apellidos" aria-describedby="helpId" id="apellidos"
                            placeholder="" v-model="form.apellidos" />
                            <br>


                        <label for="telefono" style="color: white;">Telefono:</label>
                        <input type="text" class="form-control" name="telefono" aria-describedby="helpId" id="telefono"
                            placeholder="" v-model="form.telefono" />
                            <br>


                        <label for="email" style="color: white;">Email:</label>
                        <input type="text" class="form-control" name="email" aria-describedby="helpId" id="email"
                            placeholder="" v-model="form.email" />
                            <br>

                            <label for="genero" style="color: white;">Genero:</label>
                        <input type="text" class="form-control" name="genero" aria-describedby="helpId" id="genero"
                            placeholder="" v-model="form.email" />
                            <br>

                            <label for="curp" style="color: white;">CURP:</label>
                        <input type="text" class="form-control" name="curp" aria-describedby="helpId" id="curp"
                            placeholder="" v-model="form.email" />
                            <br>

                            <label for="rfc" style="color: white;">RFC:</label>
                        <input type="text" class="form-control" name="rfc" aria-describedby="helpId" id="rfc"
                            placeholder="" v-model="form.email" />
                            <br>

                            <label for="fecha_Nacimiento" style="color: white;">Fecha de nacimiento:</label>
                        <input type="text" class="form-control" name="fecha_Nacimiento" aria-describedby="helpId" id="fecha_Nacimiento"
                            placeholder="" v-model="form.email" />
                            <br>







                    </div><br />

                    <div class="btn-group" role="group">
                        <button type="submit" class="btn btn-outline-primary">Guardar</button>
                        <router-link :to="{ name: 'listacliente' }" class="btn btn-outline-danger">Cancelar</router-link>
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
    name: 'editarcliente',
    components: {

    },

    data() {
        return {
            pkCliente: "",
            form: {

                nombre: "",
                apellidos: "",
                telefono: "",
                email: "",
                genero: "",
                curp: "",
                rfc: "",
                fecha_Nacimiento: ""
            },


        }
    },
    mounted: function () {
        this.pkCliente = this.$route.params.pkCliente;
        console.log(this.pkCliente);
        axios.get("https://localhost:7051/Cliente/" + this.pkCliente).then(datos => {

            this.form.nombre = datos.data.result.nombre;
            this.form.apellidos = datos.data.result.apellidos;
            this.form.telefono = datos.data.result.telefono;
            this.form.email = datos.data.result.email;
            this.form.genero = datos.data.result.genero;
            this.form.curp = datos.data.result.curp;
            this.form.rfc = datos.data.result.rfc;
            this.form.fecha_Nacimiento = datos.data.result.fecha_Nacimiento;
            console.log(this.form)
        });

    },
    methods: {
        editarClien() {
            axios.put("https://localhost:7051/Cliente/" + this.pkCliente, this.form).then(data => {
                console.log(data);
            });
            this.$router.push("/listacliente")
        }

    },

}
</script>