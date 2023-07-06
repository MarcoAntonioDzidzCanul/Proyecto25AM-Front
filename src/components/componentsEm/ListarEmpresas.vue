<template>
    <div>
      <button type="button" v-on:click="crear()" class="btn btn-outline-success">Crear Empresa <i class="fa-solid fa-plus"></i></button> 
      <div class="card">
        <div class="card-header" style="background-color: #2E8B57;"><strong style="color:white;">Lista de Empresas</strong></div>
  
        <div class="card_body" style="background-color: #2E8B57;">
          <!-- <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button> -->
          <table class="table table-dark">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">Nombre</th>
                <th style="font-weight: bold;">Direccion</th>
                <th style="font-weight: bold;">Departamento</th>
                <th style="font-weight: bold;">Empleado</th>
                <th style="font-weight: bold;">Factura</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="Empre in Empresas" :key="Empre.pkEmpresa">
                <td style="color:black;">{{ Empre.pkEmpresa }}</td>
                <td>{{ Empre.nombre }}</td>
                <td>{{ Empre.direccion }}</td>
                <td>{{ Empre.fk_Departamento }}</td>
                <td>{{ Empre.fk_Empleado }}</td>
                <td>{{ Empre.fk_Factura }}</td>
                
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="eliminar(Empre.pkEmpresa)" class="btn btn-outline-danger">Eliminar <i class="fa-solid fa-trash"></i></button>
                    <button type="button" v-on:click="  editar(Empre.pkEmpresa)" class="btn btn-outline-warning">Editar <i class="fa-solid fa-pen-to-square"></i></button>
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
    name: 'listaEmpresas',
    components:{
  
    },
    data() {
      
      return {
       
        Empresas: [],
        Departamentos: [],
        Empleado: [],
        Factura: [],
        smg: "",
      };
    },
    created: function () {
      this.listaEmpresas();
    },
    methods: {
      listaEmpresas() {
        axios.get("https://localhost:7051/Empresa").then((result) => {
          console.log(result.data);
          this.Empresas = result.data.result;
  
         });
  
      },
  
      eliminar(id) {
        var pregunta=window.confirm('¿Desea eliminar el registro?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7051/Empresa?id=" + id);
          window.location.href = "/listarEmpresas";
        }
          
        
  
      },
      editar(pkEmpresa) {
        console.log(pkEmpresa);
      this.$router.push("/editarEmpresas/"+ pkEmpresa)
  
      
  
      },
      crear(){
        window.location.href="/crearEmpresas";
      }
    },
  
  };
  </script>