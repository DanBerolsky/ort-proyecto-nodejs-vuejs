<template>
  <div class="container">
        <div class="btn-agregarProd" >
            <button type="button" class="btn btn-outline-success">Agregar producto</button>
            
        </div>
        <ul class="list-group">
            <li class="list-group-item item" v-for="(item, index) in productos" :key="index">{{ item.descripcion }} ${{item.precio}} 
            <div class="crud-btn">
                <button type="button" class="btn btn-outline-primary flex">Modificar producto</button>
                <button type="button" class="btn btn-outline-danger flex">Quitar producto</button>
            </div>
            
            
            </li>
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
.crud-btn{
   display: flex;
   flex-wrap: wrap;
   justify-content: end;
   Margin: auto;
}

.flex{
    margin: 10px;
}

.list-group-item {
    /* position: relative; */
    display: flex !important;
    display: inline-flex !important;
    padding: .5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    flex-wrap: wrap !important;;
    align-content: center;
}

.list-group{
    margin-top: 100px;
}

.btn-agregarProd {
    display: flex;
    justify-content: end;
    margin-top: 50px;
}


</style>