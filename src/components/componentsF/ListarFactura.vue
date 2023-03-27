<template>
    <div>
      <div class="card">
        <div class="card-header" style="background-color: gray;"><strong style="color:black;">Lista de Facturas</strong></div>
  
        <div class="card_body" style="background-color: gray;">
          <!-- <button type="button" v-on:click="  editaregistro()" class="btn btn-outline-warning">Editar</button> -->
          <table class="table table-dark">
            
            <thead>
              <tr>
                <th style="font-weight: bold;">Id</th>
                <th style="font-weight: bold;">Razon Social</th>
                <th style="font-weight: bold;">Fecha</th>
                <th style="font-weight: bold;">rfc</th>
                <th style="font-weight: bold;">FkCliente</th>
                <th style="font-weight: bold;">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="fac in Facturas" :key="fac.pkFactura">
                <td style="color:black;">{{ fac.pkFactura}}</td>
                <td>{{ fac.razonSocial }}</td>
                <td>{{ fac.fecha }}</td>
                <td>{{ fac.rfc }}</td>
                <td>{{ Cliente.find(e => e.pkCliente == fac.fkCliente)?.nombre }}</td>
                <td>
                  <div class="btn-group" role="label" aria-label="">
                    <!-- |<router-link :to="{name:'editar',param:{id:articulo.id}}" class="btn btn-info">Editar</router-link> | -->
                    <button type="button" v-on:click="eliminar(fac.pkFactura)" class="btn btn-outline-danger">Eliminar</button>
  
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
  
    components:{
  
    },
    data() {
      
      return {
       
        Facturas: [],
        Cliente: [],
        smg: "",
      };
    },
    created: function () {
      this.ListaFactura();
      this.ListaCliente();
      
    },
    methods: {
      ListaFactura() {
        axios.get("https://localhost:7051/Factura").then((result) => {
          console.log(result.data);
          this.Facturas = result.data.result;
  
  
         });
  
  
      },
      ListaCliente() {
        axios.get("https://localhost:7051/Cliente").then((result) => {
          console.log(result.data);
          this.Cliente = result.data.result;
  
  
         });
        
          
    },
  
      eliminar(id) {
        var pregunta=window.confirm('¿Desea eliminar el registro?');
  
        if(pregunta===true){
          axios.delete("https://localhost:7051/Factura?id=" + id);
          window.location.href = "/listafactura";
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