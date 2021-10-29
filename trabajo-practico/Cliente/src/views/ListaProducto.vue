<template>
  <div class="container">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-outline-success">Agregar producto</button>
            <button type="button" class="btn btn-outline-primary">Modificar producto</button>
            <button type="button" class="btn btn-outline-danger">Quitar producto</button>
        </div>
        <ul class="list-group">
            <br>
            <li class="list-group-item" v-for="(item, index) in productos" :key="index">{{ item.descripcion }} ${{item.precio}}</li>
        </ul>
  </div>
</template>





<script>
    import { mapState } from 'vuex'
    
    export default {
        name : 'ListaProducto', 
        
        computed:{
        ...mapState(['productos'])
        }
    }


</script>

<style>
#lista{
    padding-top: 45px;
}
</style>