<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header" style="background-color: gray; color: black;" >Crear factura</div>
            <div style="background-color: gray;" class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        
  
                            <div class="form-group">
                                <label for="razonSocial" style="color: black;">Razon Social:</label>
                                <input type="text" class="form-control" name="razonSocial" aria-describedby="helpId" id="razonSocial"
                                    placeholder="razonSocial" v-model="Facturas.razonSocial" />
                                <small id="helpId" class="form-text" text-muted style="color: black;">Ingresa tu razonSocial</small>
                            </div>

                            <div class="form-group">
                                <label for="rfc" style="color: black;">RFC:</label>
                                <input type="text" class="form-control" name="rfc" aria-describedby="helpId" id="rfc"
                                    placeholder="rfc" v-model="Facturas.rfc" />
                                <small id="helpId" class="form-text" text-muted style="color: black;">Ingrese su RFC</small>
                            </div>
                        
                        
  
                    </div>
                  
                            <div class="form-group">
                                <label for="fkCliente" style="color: black;">fkCliente:</label>
                                <input type="number" class="form-control" name="fkCliente" id="fkCliente"
                                    aria-describedby="helpId" placeholder="fkCliente" v-model="Facturas.fkCliente" />
                            </div>
                        
                        
                    
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            <button type="submit" class="btn btn-outline-primary">Agregar</button>
                            <router-link :to="{ name: 'listafactura' }" class="btn btn-outline-danger">Cancelar</router-link>
                        </div>
                        <router-link :to="{ name: 'listafactura' }" class="btn btn-outline-primary" id="finaliza" style="display: none;">Finalizar</router-link>
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
    name: "crearfactura",
    components: {
  
    },
  
    data() {
        return {
            Facturas: {},
            smg: "",
        };
    },
    methods: {
        formulario() {
            const tiempoTranscurrido = Date.now();
            const hoy = new Date(tiempoTranscurrido);
            var cuerpo = {
                razonSocial: this.Facturas.razonSocial,
                fecha: hoy.toISOString(),
                rfc: this.Facturas.rfc,
                fkCliente: this.Facturas.fkCliente
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
        }
    }
  }
  </script>
  
  <style scoped>
  label {
    font-weight: bold;
  }
  </style>