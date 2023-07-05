<template>
    <div class="container-fluid">
        <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Crear Cliente</div>
            <div style="background-color: gray;" class="card-body">
                <form v-on:submit.prevent="formularioC">
                    <div class="row">
                        
  
                            <div class="form-group">
                                <label for="nombre" style="color: black;">Nombre:</label>
                                <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                                    placeholder="nombre" v-model="Clientes.nombre" />
                            </div>
                        
                        
                            <div class="form-group">
                                <label for="apellidos" style="color: black;">Apellidos:</label>
                                <input type="text" class="form-control" name="apellidos" id="apellidos"
                                    aria-describedby="helpId" placeholder="apellidos" v-model="Clientes.apellidos" />
                               
                            </div>
                        
  
                    </div>
                  
                            <div class="form-group">
                                <label for="telefono" style="color: black;">Telefono:</label>
                                <input type="text" class="form-control" name="telefono" id="telefono"
                                    aria-describedby="helpId" placeholder="telefono" v-model="Clientes.telefono" />
                            </div>
                        
                        
  
                            <div class="form-group">
                                <label for="email" style="color: black;">Email:</label>
                                <input type="text" class="form-control" name="email" id="email" aria-describedby="helpId"
                                    placeholder="email" v-model="Clientes.email" />
                            </div>

                        
                    
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion1">
                            <button type="submit" class="btn btn-outline-primary">Agregar</button>
                            <router-link :to="{ name: 'listacliente' }" class="btn btn-outline-danger">Cancelar</router-link>
                        </div>
                        <router-link :to="{ name: 'listacliente' }" class="btn btn-outline-primary" id="finaliza" style="display: none;">Finalizar</router-link>
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
                email: this.Clientes.email
            };
  
            axios.post('https://localhost:7051/Cliente', cuerpo1).then((result) => {
  
                if (result.status == 200) {
                    document.getElementById("alert").style.display = "block";
                    document.getElementById('botonesopcion1').style.display="none";
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