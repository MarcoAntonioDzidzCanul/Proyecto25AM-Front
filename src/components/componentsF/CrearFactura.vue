<template>
    <div class="container-fluid">
        <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Crear Factura</div>
            <div class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        <div class="col">

                            <div class="form-group">
                                <label for="razonsocial">Razon Social:</label>
                                <input type="text" class="form-control" name="razonsocial" aria-describedby="helpId"
                                    id="razonsocial" placeholder="Escriba su razon social" v-model="Facturas.razonSocial" />
                            </div>
                        </div>                     

                    </div>
                    <br>
                    <!-- <div class="row">
                        
                            <div class="form-group">
                                <label for="fecha">Fecha:</label>
                                <input type="text" class="form-control" name="fecha" id="fecha" aria-describedby="helpId"
                                    placeholder="Escriba la fecha" v-model="Facturas.fecha" />
                            </div>
                    </div> -->

                    <!-- <div class="row">
                        <div class="form-group">
                            <label for="status">Status:</label>
                            <input type="text" class="form-control" name="status" id="status" aria-describedby="helpId"
                                placeholder="Escriba el status" v-model="Facturas.status" />
                        </div>
                    </div> -->
                      <!-- <br>
                            <input type="number" name="fkCliente" id="fkCliente" value="" style="display: none;" />
                            <label for="">Clientes:</label>
                            <select class="form-select" aria-label="Default select example" v-model="nombrecliente"
                                v-on:change="convertidorcli()">
                                <option v-for="cli in Clientes" :key="cli.pkcliado">{{ cli.nombre }}</option>
                            </select>
                        

                    
                    <br> -->
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            <button type="submit" class="btn btn-outline-primary">Agregar</button>
                            <router-link :to="{ name: 'listafactura' }"
                                class="btn btn-outline-danger">Cancelar</router-link>
                        </div>
                        <router-link :to="{ name: 'listafactura' }" class="btn btn-outline-primary" id="finaliza"
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
    name: "postfactura",
    components: {

    },

    data() {
        return {
            Facturas: {},
            smg: "",
            // nombrecliente: "",
            // Clientes: [],
            fecha:""
            // registroCli: [],
        };
    },
    // created: function () {
    //     this.cargarClientes();
    // },
    methods: {
        formulario() {

            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            var cuerpo = {
                razonSocial: this.Facturas.razonSocial,
                fecha: hoy.toISOString(),
            };

            axios.post('https://localhost:7051/Factura', cuerpo).then((result) => {

                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion').style.display="none";
                    this.smg = "Se creo correctamente";
                    document.getElementById('finaliza').style.display="block";
                    console.log(result);
                }
                // window.location.href = "dashboard";

            })

            console.log(cuerpo)
        },
        // cargarClientes() {
        //     axios.get('https://localhost:7051/Cliente').then((response => {
        //         this.Clientes = response.data.result;
        //         console.log(response.data.result);
        //     }))
        // },
        // convertidorcli() {
        //     axios.get('https://localhost:7051/Cliente/BuscarPorNombre?nombr=' + this.nombrecliente).then((response) => {
        //         this.registroCli = response.data.result;

        //         document.getElementById('fkCliente').value = this.registroCli[0].pkCliente;
        //     })
        // }
    }
}
</script>

<style scoped>
label {
    font-weight: bold;
}

.date{
    border-radius: 20px;
   border-color: rgb(232, 235, 238);
   vertical-align:middle;
}
</style>