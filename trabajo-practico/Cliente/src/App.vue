<template>
 
  <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <nav class="navbar navbar-expand-lg navbar-light bg-light container  ">
        <div>
          <router-link class="navbar-brand" to="/">Home</router-link>
          <router-link class="navbar-brand" to="/about">About</router-link>
          <router-link class="navbar-brand" to="/Sistema">Sistema</router-link>
          <router-link class="navbar-brand" to="/ListaProducto">ListaProductos</router-link>
        </div>
      </nav>
      <router-view/>
  </div>
  
</template>
