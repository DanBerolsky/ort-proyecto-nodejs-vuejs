<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
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
        <td>remera</td>
        <td>1500</td>
        
        </tr>
        
    </tbody>
    </table>
  </div>
  </div>
</template>





<script>



export default {
    name : 'ListaProducto'
}
</script>

<style>
#lista{
    padding-top: 45px;
}
</style>