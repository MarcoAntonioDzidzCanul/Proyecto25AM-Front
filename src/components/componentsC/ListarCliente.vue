<template>
  <div>
    <button type="button" v-on:click="crear()" class="btn btn-outline-success">Crear Cliente <i class="fa-solid fa-plus"></i></button> 
  </div>
    <div>
      
      <div class="card">
        <div class="card-header" style="background-color:#2E8B57;"><strong style="color:white;">Lista de Cliente</strong></div>
  
        <div class="card_body" style="background-color: #2E8B57;">
          
          <!-- <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button> -->
          <table class="table table-dark">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">Nombre</th>
                <th style="font-weight: bold;">Apellidos</th>
                <th style="font-weight: bold;">Telefono</th>
                <th style="font-weight: bold;">Email</th>
                <th style="font-weight: bold;">Genero</th>
                <th style="font-weight: bold;">CURP</th>
                <th style="font-weight: bold;">RFC</th>
                <th style="font-weight: bold;">Fecha de nacimiento</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="cliente in Clientes" :key="cliente.pkCliente">
                <td style="color:black;">{{ cliente.pkCliente }}</td>
                <td>{{ cliente.nombre }}</td>
                <td>{{ cliente.apellidos }}</td>
                <td>{{ cliente.telefono }}</td>
                <td>{{ cliente.email }}</td>
                <td>{{ cliente.genero }}</td>
                <td>{{ cliente.curp }}</td>
                <td>{{ cliente.rfc }}</td>
                <td>{{ cliente.fecha_Nacimiento }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="eliminar(cliente.pkCliente)" class="btn btn-outline-danger">Eliminar <i class="fa-solid fa-trash"></i></button>
                    <button type="button" v-on:click="  editar(cliente.pkCliente)" class="btn btn-outline-warning">Editar <i class="fa-solid fa-pen-to-square"></i></button>
                    
                    <!-- <button type="button" @click="mostrarFormulario(pkUsuario)" class="btn btn-outline-primary">Editar</button>  -->
                      
                    
                             
                  </div>
                </td>
                
                
              </tr>
            </tbody>
          </table>
  
        </div>
  
  
      </div>
    </div>
    
   
  </template>
  
  <script>
  import axios from "axios";
  
  
  export default {
    name: 'listacliente',
    components:{
  
    },
    data() {
      
      return {
       
        Clientes: [],
        smg: "",
      };
    },
    created: function () {
      this.ListaCliente();
      
    },
    methods: {
      ListaCliente() {
        axios.get("https://localhost:7051/Cliente").then((result) => {
          console.log(result.data);
          this.Clientes = result.data.result;
  
  
         });
  
  
      },
      eliminar(id) {
        var pregunta=window.confirm('¿Desea eliminar el registro?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7051/Cliente?id=" + id);
          window.location.href = "/listacliente";
        }
          
        
  
      },
      editar(pkCliente) {
        console.log(pkCliente);
      this.$router.push("/editarcliente/"+pkCliente)
  
      
  
      },
      crear(){
        window.location.href="/crearcliente";
      }
    },
  
  };
  </script>