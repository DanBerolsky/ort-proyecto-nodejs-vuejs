<template>
  <div>
    <div class="btn-agregarProd">
      <router-link to="/productos/agregarProducto">
        <button type="button" class="btn btn-outline-success">Agregar</button>
      </router-link>
    </div>

    <div class="contenedor">
      <ul>
        <li
          class="list-group-item item"
          v-for="(item, index) in this.listaProductos"
          :key="index"
        >
          {{ item.nombre }} ${{ item.precio }}
          <div class="crud-btn">
            <router-link to="/modificarProducto">
              <button type="button" class="btn btn-outline-primary mod">
                Modificar
              </button>
            </router-link>

            <button
              type="button"
              @click="quitar(item._id)"
              class="btn btn-outline-danger quit"
            >
              Quitar
            </button>
          </div>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>





<script>
import { mapState } from "vuex";
import ProductoService from "../servicios/ProductoService.js";

export default {
  name: "ListaProducto",
  data() {
    return { listaProductos: {} };
  },
  created: async function () {
    try {
      const rta = await ProductoService.get();
      this.listaProductos = rta.data;
    } catch (error) {
      alert("Se produjo un error");
    }
  },
  methods: {
    async quitar(id) {
      try {
        console.log(id);
        await ProductoService.delete(id);
        window.location.href = window.location;
      } catch (err) {
        console.log(err.message);
      }
    },
  },

  computed: {
    ...mapState(["productos"])
  },
};
</script>

<style>



.list-group-item {
  /* position: relative; */
  display: flex !important;
  flex-direction: row;
  color: #212529;
  margin-bottom: 10px;
  justify-content: space-between;
  
}



.btn-agregarProd {
  display: flex;
  justify-content: end;
  margin-top: 50px;
  
}

.contenedor{
  display: flex;
  justify-content: center;
}

ul{
  padding: 0px !important;
  flex-basis: 1000px;
}
button {
    width: 100px;
    height: 55px;
    
}
.mod{
  margin-right: 20px;
}

</style>

