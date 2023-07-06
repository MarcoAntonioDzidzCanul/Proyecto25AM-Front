<template>
    <div class="container-fluid">
      <div class="card" style="background-color: #333333;">
          <div class="card-header" style="background-color: #2E8B57; color: white;">Actualizar Factura</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarFac">
                  <div class="form-group">
                      <label for="" style="color: white;">Razon Social:</label>
                              <input type="text" class="form-control" name="razonSocial" aria-describedby="helpId"
                                  id="razonSocial" placeholder="Razon Social" v-model="form.razonSocial" />
                              

                              
                              

                              <!-- <label for="" style="color: black;">RFC:</label>
                              <input type="text" class="form-control" name="rfc" aria-describedby="helpId"
                                  id="rfc" placeholder="rfc" v-model="form.rfc" />


                               <div class="form-group">
                               <label for="cliente">Selecciona el cliente: </label>
                               <select class="form-select" aria-label="Default select example" name="cliente" id="cliente" v-model="form.fkCliente">
                               <option v-for="cliente in Cliente" :value="cliente.pkCliente" :key="cliente.pkCliente">{{cliente.nombre}}</option>
                               </select>
                               </div> -->

                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn btn-outline-primary">Guardar</button>
                                  <router-link :to="{name: 'listafactura'}" class="btn btn-outline-danger">Cancelar</router-link>
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
import axios from 'axios'

export default {
  name: 'editarfactura',
  components: {

  },

  data() {
      return {
          pkFactura : null,
          form: {
              pkFactura: "",
              razonSocial : "",
              fecha : "",
            //   rfc : "",
            //   fkCliente : ""
              
          },
        //   Cliente:{}
          
          
      }
  },
//   created: function () {
//         this.consultarCliente();    
//       },
  mounted : function(){
      this.pkFactura = this.$route.params.pkFactura;
      console.log(this.pkFactura);
      axios.get("https://localhost:7051/Factura/" + this.pkFactura).then(datos =>
      {
          this.form.pkFactura = datos.data.result.pkFactura;
          this.form.razonSocial = datos.data.result.razonSocial;
          this.form.fecha = datos.data.result.fecha;
        //   this.form.rfc = datos.data.result.rfc;
        //   this.form.fkCliente = datos.data.result.fkCliente;
          console.log(this.form)
      });

  },
  methods:{
      editarFac()
      {
          axios.put("https://localhost:7051/Factura/" + this.pkFactura, this.form).then(data =>{
              console.log(data);
          });
          this.$router.push("/listafactura")
      },
    //   consultarCliente() {
    //          axios.get("https://localhost:7051/Cliente").then((result) => {
    //            console.log(result.data.result);
    //            this.Cliente = result.data.result;
    //         });
              
    //     },
      
  },
 
}

  

 


          


      

  



</script>