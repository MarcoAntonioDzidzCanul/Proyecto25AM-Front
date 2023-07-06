<template>
    <div>
      <button type="button" v-on:click="crear()" class="btn btn-outline-success">Crear Puesto <i class="fa-solid fa-plus"></i></button> 
      <div class="card">
        <div class="card-header" style="background-color: #2E8B57;"><strong style="color:white;">Lista de Puestos</strong></div>
  
        <div class="card_body" style="background-color: #2E8B57;">
          <!-- <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button> -->
          <table class="table table-dark">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">Nombre puesto</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="puesto in Puestos" :key="puesto.pkpuesto">
                <td style="color:black;">{{ puesto.pkpuesto }}</td>
                <td>{{ puesto.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="eliminar(puesto.pkpuesto)" class="btn btn-outline-danger">Eliminar <i class="fa-solid fa-trash"></i></button>
                    <button type="button" v-on:click="  editar(puesto.pkpuesto)" class="btn btn-outline-warning">Editar <i class="fa-solid fa-pen-to-square"></i></button>
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
    name:'listapuesto',
    components:{
  
    },
    data() {
      
      return {
       
        Puestos: [],
        smg: "",
      };
    },
    created: function () {
      this.ListaPuesto();
    },
    methods: {
      ListaPuesto() {
        axios.get("https://localhost:7051/Puesto").then((result) => {
          console.log(result.data);
          this.Puestos = result.data.result;
  
  
         });
  
  
      },      
      eliminar(id) {
        var pregunta=window.confirm('¿Desea eliminar el registro?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7051/Puesto?id=" + id);
          window.location.href = "/listapuesto";
        }
          
        
  
      },
      editar(pkpuesto) {
        console.log(pkpuesto);
      this.$router.push("/editarpuesto/"+ pkpuesto)
  
      
  
      },
      crear(){
        window.location.href="/crearpuesto";
      }
    },
  
  };
  </script>