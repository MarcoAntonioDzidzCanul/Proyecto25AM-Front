<template>
    <div class="container-fluid">
      <div class="card" style="background-color: gray;">
          <div class="card-header" style="background-color: gray; color: black;">Actualizar Factura</div>
          <div class="card-body">
              <form v-on:submit.prevent="editarFac">
                  <div class="form-group">
                      <label for="" style="color: black;">Razon Social:</label>
                              <input type="text" class="form-control" name="razonSocial" aria-describedby="helpId"
                                  id="razonSocial" placeholder="Razon Social" v-model="form.razonSocial" />
                              

                              <label for="" style="color: black;">Fecha:</label>
                              <input type="text" class="form-control" name="fecha" aria-describedby="helpId"
                                  id="fecha" placeholder="fecha" v-model="form.fecha" />
                              

                              <label for="" style="color: black;">RFC:</label>
                              <input type="text" class="form-control" name="rfc" aria-describedby="helpId"
                                  id="rfc" placeholder="rfc" v-model="form.rfc" />
                            

                              <label for="" style="color: black;">fkCliente:</label>
                              <input type="text" class="form-control" name="fkCliente" aria-describedby="helpId"
                                  id="fkCliente" placeholder="fkCliente" v-model="form.fkCliente" />
                           

                              
                              </div><br/>

                              <div class="btn-group" role="group">
                                  <button type="submit" class="btn -btn-success">Guardar</button>
                                  <router-link :to="{name: 'listafactura'}" class="btn btn-danger">Cancelar</router-link>
                              </div>
              </form>

          </div>
          </div>
          </div>
 
</template>
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
              razonSocial : "",
              fecha : "",
              rfc : "",
              fkCliente : ""
              
          },
          
          
      }
  },
  mounted : function(){
      this.pkFactura = this.$route.params.pkFactura;
      console.log(this.pkFactura);
      axios.get("https://localhost:7051/Factura/" + this.pkFactura).then(datos =>
      {
          this.form.razonSocial = datos.data.result.razonSocial;
          this.form.fecha = datos.data.result.fecha;
          this.form.rfc = datos.data.result.rfc;
          this.form.fkCliente = datos.data.result.fkCliente;
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
      }
      
  },
 
}

  

 


          


      

  



</script>