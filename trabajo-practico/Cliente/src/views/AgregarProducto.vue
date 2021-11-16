<template>
  <div>
    <hr />
    <h2>Agregar Producto</h2>
    <hr />

    <div class="f-cont">
      <form method="POST" action="">
        <div class="mb-3">
          <label for="Nombre del producto" class="form-label"
            >Nombre del producto</label
          >
          <input
            type="text"
            class="form-control"
            id="nombre"
            v-model="nombre"
          />
          <div id="nombre" class="form-text">
            Ingresar nombre del producto aqui
          </div>
        </div>
        <div class="mb-3">
          <label for="Precio" class="form-label">Precio ($)</label>
          <input
            type="number"
            class="form-control"
            id="precio"
            v-model="precio"
          />
        </div>
        <div class="mb-3">
          <label for="Precio" class="form-label">Talle</label>
            <br>
            <select name="talles" id="talles" v-model="talle">
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <button @click.prevent="agregarProducto" class="btn btn-dark">
          Submit
        </button>
        <button type="button" class="btn btn-secondary">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
import ProductoService from "../servicios/ProductoService.js";
export default {
  name: "AgregarProducto",
  data() {
    return {
      nombre: "",
      precio: "",
      talle: "",
    };
  },
  methods: {
    async agregarProducto() {
      try {
        await ProductoService.post(this);
        window.location.href = "/productos";
        alert("Producto AGREGADO con exito");
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style>
.mb-3 {
  padding: 3px;
  /* padding-top: 0px; */
  /* padding-bottom: 0px; */
  margin-right: 2rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
}
</style>