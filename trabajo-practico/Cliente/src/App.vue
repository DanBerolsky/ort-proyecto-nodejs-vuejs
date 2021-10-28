<template>
 
  <div>
    
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    
    <router-link class="navbar-brand" to="/">Home</router-link>
    <router-link class="navbar-brand" to="/about">About</router-link>
    <router-link class="navbar-brand" to="/Sistema">Sistema</router-link>
    <router-link class="navbar-brand" to="/ListaProducto">ListaProductos</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
        
      </div>
    </div>
  </div>
  <router-view/>
</nav>
  
  </div>
  
</template>
