<template>
  <div id='lista' class="container-sm">
        <table class="table">
    <thead>
        <tr>
        <th scope="">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        </tr>
    </thead>
    <tbody>
        
        <div v-for="item in [{nombre="remera",precio:1600},{nombre="zapatilla",precio:1600}]">
            <tr>
            <th scope="row">1</th>
            <td>{{item.Nombre}}</td>
            <td>{{item.Precio}}</td>
            
            </tr>
        </div>

        
    </tbody>
    </table>
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