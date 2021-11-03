<template>
  <div class="container">
    <form method="POST" action="">
      <div class="mb-3">
        <label class="form-label">Nombre</label>
        <input
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="nombre"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Precio</label>
        <input
          class="form-control"
          id="exampleInputPassword1"
          v-model="precio"
        />
      </div>
      <button type="submit" class="btn btn-dark">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AgregarProducto",
  data() {
    return {
      nombre: "",
      precio: "",
    };
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