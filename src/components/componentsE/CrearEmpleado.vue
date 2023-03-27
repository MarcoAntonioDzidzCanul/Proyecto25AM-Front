<template>
    <div class="container-fluid">
        <div class="card">
            <div class="card-header" style="background-color: gray; color: black;" >Crear Empleado</div>
            <div style="background-color: gray;" class="card-body">
                <form v-on:submit.prevent="formulario">
                    <div class="row">
                        
  
                            <div class="form-group">
                                <label for="nombre" style="color: black;">Nombre:</label>
                                <input type="text" class="form-control" name="nombre" aria-describedby="helpId" id="nombre"
                                    placeholder="nombres" v-model="Empleados.nombre" />
                                <small id="helpId" class="form-text" text-muted style="color: black;">Ingrese sus nombres</small>
                            </div>
                        
                        
                            <div class="form-group">
                                <label for="apellidos" style="color: black;">Apellidos:</label>
                                <input type="text" class="form-control" name="apellidos" id="apellidos"
                                    aria-describedby="helpId" placeholder="apellidos" v-model="Empleados.apellidos" />
                                <small id="helpId" class="form-text" text-muted style="color: black;">Ingrese sus apellidos</small>
                            </div>

                            <div class="form-group">
                                <label for="dirreccion" style="color: black;">Direccion:</label>
                                <input type="text" class="form-control" name="dirreccion" id="dirreccion"
                                    aria-describedby="helpId" placeholder="direccion" v-model="Empleados.dirreccion" />
                                <small id="helpId" class="form-text" text-muted style="color: black;">Ingrese su direccion</small>
                            </div>

                            <div class="form-group">
                                <label for="ciudad" style="color: black;">Ciudad:</label>
                                <input type="text" class="form-control" name="ciudad" id="ciudad"
                                    aria-describedby="helpId" placeholder="ciudad" v-model="Empleados.ciudad" />
                                <small id="helpId" class="form-text" text-muted style="color: black;">Ingrese su ciudad</small>
                            </div>
                        
  
                    </div>
                  
                            <div class="form-group">
                                <label for="fkPuesto" style="color: black;">Puesto:</label>
                                <input type="number" class="form-control" name="fkPuesto" id="fkPuesto"
                                    aria-describedby="helpId" placeholder="fkPuesto" v-model="Empleados.fkPuesto" />
                            </div>
                        
                        
  
                            <div class="form-group">
                                <label for="fkDepartamento" style="color: black;">Departamento:</label>
                                <input type="number" class="form-control" name="fkDepartamento" id="fkDepartamento" aria-describedby="helpId"
                                    placeholder="fkDepartamento" v-model="Empleados.fkDepartamento" />
                            </div>
                        
                    
                    <br>
                    <div class="row">
                        <div class="btn-group" role="group" id="botonesopcion">
                            <button type="submit" class="btn btn-outline-primary">Agregar</button>
                            <router-link :to="{ name: 'listaempleado' }" class="btn btn-outline-danger">Cancelar</router-link>
                        </div>
                        <router-link :to="{ name: 'listaempleado' }" class="btn btn-outline-primary" id="finaliza" style="display: none;">Finalizar</router-link>
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
            Empleados: {},
            smg: "",
        };
    },
    methods: {
        formulario() {
            var cuerpo = {
                nombre: this.Empleados.nombre,
                apellidos: this.Empleados.apellidos,
                dirreccion: this.Empleados.dirreccion,
                ciudad: this.Empleados.ciudad,
                fkPuesto: this.Empleados.fkPuesto,
                fkDepartamento: this.Empleados.fkDepartamento
            };
  
            axios.post('https://localhost:7051/Empleado', cuerpo).then((result) => {
  
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