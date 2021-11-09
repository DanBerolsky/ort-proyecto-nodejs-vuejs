<template>
  <div>
    <hr />
    <h2>Modificar Producto</h2>
    <hr />

    <div class="f-cont">
      
        <form>
          <div class="mb-3">
            <label for="Nombre del producto" class="form-label"
              >Nombre del producto</label
            >
            <input type="text" class="form-control" id="nombre" />
            <div id="nombre" class="form-text">
              Ingresar nombre del producto aqui
            </div>
          </div>
          <div class="mb-3">
            <label for="Precio" class="form-label">Precio ($)</label>
            <input type="number" class="form-control" id="precio" />
          </div>

          <button type="button" class="btn btn-primary">Modificar</button>
          <button type="button" class="btn btn-secondary">Cancelar</button>
        </form>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "ModificarProducto",
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
button{
    width: 100px;
    height: 55px;
    margin-top: 40px !important;
     margin-right: 40px !important;

}
</style>