<template>
    <div class="container-fluid">
        <div class="card" style="background-color: #333333;">
            <div class="card-header" style="background-color: #2E8B57; color: white;">Crear Departamento</div>
            <div style="background-color: #333333;" class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">


                        <div class="form-group">
                            <label for="nombre" style="color: white;">Nombre:</label>
                            <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                                placeholder="Ingresa el nombre de departammento" v-model="Departamentos.nombre" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="form-group">
                            <label for="direccion" style="color: white;">Direccion:</label>
                            <input type="text" class="form-control" name="direccion" aria-describedby="helpId"
                                id="direccion" placeholder="Ingresa la direccion" v-model="Departamentos.direccion" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="form-group">
                            <label for="estado" style="color: white;">Estado:</label>
                            <input type="text" class="form-control" name="estado" aria-describedby="helpId" id="estado"
                                placeholder="Ingresa el estado" v-model="Departamentos.estado" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="form-group">
                            <label for="ruta_imagen" style="color: white;">Imagen:</label>
                            <input type="file" class="form-control" name="ruta_imagen" @change="handleImageChange"
                                v-on:change="Departamentos.ruta_imagen">
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>

                        <div class="form-group">
                            <label for="fk_Cliente" style="color: white;">Fk_Cliente:</label>
                            <input type="text" class="form-control" name="fk_Cliente" aria-describedby="helpId"
                                id="fk_Cliente" placeholder="Ingresa el cliente" v-model="Departamentos.fk_Cliente" />
                        </div>
                        <br>
                        <br>
                        <br>
                        <br>



                    </div>




                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            <button type="submit" class="btn btn-outline-primary">Agregar</button>
                            <router-link :to="{ name: 'listadepartamento' }"
                                class="btn btn-outline-danger">Cancelar</router-link>
                        </div>
                        <router-link :to="{ name: 'listadepartamento' }" class="btn btn-outline-primary" id="finaliza"
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
<style>
.card-body {
    margin: 2em;
}
</style>
<script>
import axios from 'axios';
export default {
    name: "creardepartamento",
    components: {

    },

    data() {
        return {
            Departamentos: {},
            smg: "",
        };
    },
    methods: {
        handleImageChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();

            reader.onloadend = () => {
                this.Departamentos.ruta_imagen = reader.result;
            };

            if (file) {
                reader.readAsDataURL(file);
            } else {
                this.Departamentos.ruta_imagen = null;
            }
        },

        formulario() {

            var cuerpo = {
                nombre: this.Departamentos.nombre,
                direccion: this.Departamentos.direccion,
                estado: this.Departamentos.estado,
                ruta_imagen: this.Departamentos.ruta_imagen, // Asegúrate de que la propiedad contenga la imagen seleccionada.
                fk_Cliente: this.Departamentos.fk_Cliente,

            };

            axios.post('https://localhost:7051/Departamento', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display = "none";
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