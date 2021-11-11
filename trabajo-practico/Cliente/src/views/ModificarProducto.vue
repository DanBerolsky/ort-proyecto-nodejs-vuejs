<template>
  <div>
    <hr />
    <h2>Modificar Producto</h2>
    <hr />

    <div class="f-cont">
      
        <form method="PUT">
          <div class="mb-3">
            <label for="Nombre del producto" class="form-label"
              >Nombre del producto</label
            >
            <input type="text" v-model="nombre" class="form-control" id="nombre" />
            <div id="nombre" class="form-text">
              Ingresar nombre del producto aqui
            </div>
          </div>
          <div class="mb-3">
            <label for="Precio"  class="form-label">Precio ($)</label>
            <input type="number" v-model="precio" class="form-control" id="precio" />
            
          </div>

          <button type="submit" @click.prevent="modificar($route.params.id)" class="btn btn-primary button">Modificar</button>
          <button type="button" class="btn btn-secondary button">Cancelar</button>
        </form>     
     
    </div>
  </div>
</template>

<script>

import ProductoService from "../servicios/ProductoService.js";

export default {
  name: "ModificarProducto",
  data() {
    return {
      nombre: "",
      precio: "",
    };
  },
   
    created: async function () {
    try {
      const rta = await ProductoService.getById(this.$route.params.id);
      this.nombre = rta.data.nombre;
      this.precio = rta.data.precio;
    } catch (error) {
      alert("Se produjo un error");
    }
  },
   
  methods: {
    async modificar(id) {
      
      try {
        const producto = {_id:id ,nombre : this.nombre, precio: this.precio}
        await ProductoService.put(id,producto); 
        window.location.href= '/productos'       
      } catch (err) {
        console.log(err.message);
        console.log('catch')
      }
    },
  }

};
</script>

<style>
h2 {
  display: flex;
  justify-content: center;
}

.f-cont {
  position: relative;
  display: flex;
  justify-content: center;
  height: auto;
  margin-top: 100px;
}
.f-cont form{
     flex-basis: 700px;
     
}
.button{
    width: 100px;
    height: 55px;
    margin-top: 40px !important;
     margin-right: 40px !important;

}
</style>