<template>
    <div>
      <div class="card">
        <div class="card-header" style="background-color: gray;"><strong style="color:black;">Lista de Empleados</strong></div>
  
        <div class="card_body" style="background-color: gray;">
          <!-- <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button> -->
          <table class="table table-dark">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">Nombre</th>
                <th style="font-weight: bold;">Apellidos</th>
                <th style="font-weight: bold;">Direccion</th>
                <th style="font-weight: bold;">Ciudad</th>
                <th style="font-weight: bold;">FkPuesto</th>
                <th style="font-weight: bold;">FkDepartamento</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="emp in Empleados" :key="emp.pkEmpleado">
                <td style="color:black;">{{ emp.pkEmpleado }}</td>
                <td>{{ emp.nombre }}</td>
                <td>{{ emp.apellidos }}</td>
                <td>{{ emp.dirreccion }}</td>
                <td>{{ emp.ciudad }}</td>
                <td>{{ Puesto.find(p => p.pkpuesto == emp.fkPuesto)?.nombre }}</td>
                <td>{{ Departamento.find(d => d.pkDepartamento === emp.fkDepartamento)?.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="eliminar(emp.pkEmpleado)" class="btn btn-outline-danger">Eliminar</button>
  
                    <button type="button" @click="mostrarFormulario(pkUsuario)" class="btn btn-outline-primary">Editar</button> 
                      
                    
                             
                  </div>
                </td>
                
                
              </tr>
            </tbody>
          </table>
  
        </div>
  
  
      </div>
    </div>
    <button type="button" v-on:click="  editar(pkUsuario)" class="btn btn-outline-primary">Editar</button> 
    <button type="button" v-on:click="  crear()" class="btn btn-outline-danger">Crear</button> 
  </template>
  
  <script>
  import axios from "axios";
  
  
  export default {
  name: 'listaempleado',
    components:{
  
    },
    data() {
      
      return {
       
        Empleados: [],
        Puesto: [],
        Departamento: [],
        smg: "",
      };
    },
    created: function () {
      this.ListaEmpleados();
      this.ListaPuesto();
      this.ListaDepartamento();
    },
    methods: {
      ListaEmpleados() {
        axios.get("https://localhost:7051/Empleado").then((result) => {
          console.log(result.data);
          this.Empleados = result.data.result;
  
  
         });
  
  
      },
      ListaPuesto() {
        axios.get("https://localhost:7051/Puesto").then((result) => {
          console.log(result.data);
          this.Puesto = result.data.result;
  
  
         });
        
      
  
      },
      ListaDepartamento(){
        axios.get("https://localhost:7051/Departamento").then((result) => {
          console.log(result.data);
          this.Departamento = result.data.result;
      });
    },
  
      eliminar(id) {
        var pregunta=window.confirm('¿Desea eliminar el registro?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7051/Empleado?id=" + id);
          window.location.href = "/listaempleado";
        }
          
        
  
      },
      mostrarFormulario() {
      window.location.href="/editar";
  
      
  
      },
      crear(){
        window.location.href="/crear";
      }
    },
  
  };
  </script>