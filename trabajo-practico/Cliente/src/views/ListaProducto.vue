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
        
       
            <tr>
            <th scope="row">1</th>
            <td>asioujdioas</td>
            <td>234234</td>
            
            </tr>
       

        
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