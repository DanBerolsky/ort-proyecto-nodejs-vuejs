<template>
  <div>
    <hr />
    <h2>Modificar Producto</h2>
    <hr />

    <div class="f-cont">
      
        <form method="PUT">
          <div class="mb-3"  v-if="$route.params.esUsuario !== 'true'">
            <label for="Nombre del producto" class="form-label"
              >Nombre del producto</label
            >
            <input  type="text" v-model="nombre" class="form-control" id="nombre" />
            <div id="nombre" class="form-text">
              Ingresar nombre del producto aqui
            </div>
          </div>
          <div class="mb-3" v-if="$route.params.esUsuario !== 'true'">
            <label for="Precio"  class="form-label">Precio ($)</label>
            <input type="number" v-model="precio" class="form-control" id="precio" />
            
          </div>
          <div class="mb-3">
            <label for="Precio"  class="form-label">Talle </label>
            <br>
            <select name="talles" id="talles" v-model="talle">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
            
          </div>

          <button v-if="$route.params.esUsuario !== 'true'" type="button" @click.prevent="modificar($route.params.id)" class="btn btn-primary button">Modificar</button>
          <button v-if="$route.params.esUsuario !== 'true'" type="button" @click.prevent="cancelar" class="btn btn-secondary button">Cancelar</button>
          <button v-if="$route.params.esUsuario == 'true'" type="button" @click.prevent="modificarDesdeCarrito($route.params.id)" class="btn btn-primary button">Modificar</button>
          <button v-if="$route.params.esUsuario == 'true'" type="button" @click.prevent="cancelarDesdeCarrito" class="btn btn-secondary button">Cancelar</button>
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
      talle:'',
    };
  },
   created: async function () { 
    try {
        const rta = await ProductoService.getById(this.$route.params.id);
        this.nombre = rta.data.nombre;
        this.precio = rta.data.precio;
        this.talle = rta.data.talle;
    } catch (error) {
        alert("Se produjo un error");
    }
  },
   
  methods: {
    async modificar(id) {
      try {
          const producto = {_id:id, nombre: this.nombre, precio: this.precio, talle: this.talle}
          await ProductoService.put(id,producto); 
          window.history.back()
          alert('Producto MODIFICADO con exito')       
      } catch (err) {
          console.log(err.message);
          console.log('catch')
      }
    },
    modificarDesdeCarrito(id) {
      
          const producto = {_id:id, nombre: this.nombre, precio: this.precio, talle: this.talle}
          this.$store.state.carritoCompras = this.$store.state.carritoCompras.filter( obj =>{return obj._id !== producto._id});
          this.$store.state.carritoCompras.push(producto)//cambia en carrito
          alert('Producto MODIFICADO con exito')
          window.history.back()       
      
    },
    cancelar(){
        window.location.href= '/productos' 
    },
    cancelarDesdeCarrito(){
        window.history.back()
    }
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