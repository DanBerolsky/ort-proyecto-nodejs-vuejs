<template>
  <div class="container">
    <div class="btn-agregarProd">
      <router-link to="/agregarProducto">
        <button type="button" class="btn btn-outline-success">
          Agregar producto
        </button>
      </router-link>
    </div>
    <ul class="list-group">
      <li
        class="list-group-item item"
        v-for="(item, index) in this.listaProductos"
        :key="index"
        
      >
        {{ item.nombre }} ${{ item.precio }}
        <div class="crud-btn">
          <router-link to="/modificarProducto">
            <button type="button" class="btn btn-outline-primary flex">
              Modificar producto
            </button>
          </router-link>

          <router-link to="/quitarProducto">
            <button type="button" class="btn btn-outline-danger flex">
              Quitar producto
            </button>
          </router-link>
        </div>
      </li>
    </ul>
    <router-view />
  </div>
</template>





<script>
import { mapState } from "vuex";
import ProductoService from '../servicios/ProductoService.js'

export default {
  name: "ListaProducto",
  data(){
    return { listaProductos:{}}
  },
  created: async function () { 
    try {
      const rta = await ProductoService.getProductos()
      this.listaProductos = rta.data
    } catch (error) {
      alert("Se produjo un error");
    }

  },

  computed: {
    ...mapState(["productos"]),

  },
};
</script>

<style>
.crud-btn {
  display: flex;
  flex-wrap: wrap;
  justify-content: end;
  margin: auto;
}

.flex {
  margin: 10px;
}

.list-group-item {
  /* position: relative; */
  display: flex !important;
  display: inline-flex !important;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  flex-wrap: wrap !important;
  align-content: center;
}

.list-group {
  margin-top: 100px;
}

.btn-agregarProd {
  display: flex;
  justify-content: end;
  margin-top: 50px;
}
</style>