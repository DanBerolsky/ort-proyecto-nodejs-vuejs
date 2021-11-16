<template>
  <div>
    <div class="btn-agregarProd">
      <router-link to="/">
        <button style="min-width: 186px;" type="button" class="btn btn-outline-success agregar">Agregar productos</button>
      </router-link>
      <button style="min-width: 186px; margin-left: 20px;"
              type="button"
              @click="finalizarCompra()"
              class="btn btn-outline-dark quit"
            >
              Finalizar Compra
            </button>
    </div>

    <div class="contenedor">
      <ul>
        <li
          class="list-group-item item"
          v-for="(item, index) in this.$store.state.carritoCompras"
          :key="index"
        >
        <div >
            <img style="width: 68px;height: 90px;" src="../assets/remera1.jpg" class="card-img-top" alt="..." />

            
            
        </div>
            
          <div style="display:flex; flex-direction:columm; flex-grow: 10;padding-left: 43px; flex-direction: column;">
                <div style= "align-self: flex-start;">
                    Nombre : {{ item.nombre }} 
                </div>
            
                <div style=" align-self: flex-start;">
                    Precio : $ {{ item.precio }}
                </div>

                <div style=" align-self: flex-start;">
                    Talle : {{ item.talle }}
                </div>
            </div>
          
          <div class="crud-btn">
            <!--ESTO ES LO QUE HAY QUE CAMBIAR, QUE TE LLEVE A OTRA VISTA -->
            <router-link :to="{ name: 'modificarProducto', params: { id: item._id, esUsuario: true }}" >
              <button type="button" class="btn btn-outline-primary mod">
                Modificar
              </button>
            </router-link>

            <button type="button" @click="quitar(item)" class="btn btn-outline-danger quit"> Quitar</button>
          </div>
        </li>
      </ul>
      <router-view />
    </div>
    
  </div>
</template>





<script>
    //import ProductoService from "../servicios/ProductoService.js";
   
    
export default {
  name: "Carrito",
    
    methods:{
        quitar(producto) {
            this.$store.state.carritoCompras = this.$store.state.carritoCompras.filter( obj =>{return obj.nombre !== producto.nombre});
        },finalizarCompra(){
          window.location.href= window.location
        }
        
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
  margin-bottom: 100px;
  
  align-content: center;  
  
  padding-right: 320px;

}


.contenedor{
  display: flex;
  justify-content: center;
}
.contenedor div {
    align-self: center;
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

