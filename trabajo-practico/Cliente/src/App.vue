<template>
     
     <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <nav class="navbar navbar-expand-lg navbar-light header1 container  ">
        <div> 
          <!--
          <img src="./assets/search2.svg">
          <img src="./assets/black.png" alt="">
          <img src="./assets/shopping-cart.svg" class="carrito" alt="">
          <p class="text-white">INICIAR SESION</p>
          -->
          <button class="navbar-toggler">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse">
            <ul>
              <li class="nav-link">
                <img src="./assets/search2.svg">
              </li>
            </ul>
            <ul>
              <li class="nav-link">
               <img src="./assets/black.png" alt="">
              </li>
            </ul>
            <ul>
              <li class="nav-link">
                 <img src="./assets/shopping-cart.svg" class="carrito" alt="">
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg navbar-light container  ">
        <div>
          <router-link class="navbar-brand" to="/">Home</router-link>
          <router-link class="navbar-brand" to="/about">About</router-link>
          <router-link class="navbar-brand" to="/Sistema">Sistema</router-link>
          <router-link class="navbar-brand" to="/productos">ListaProductos</router-link>
        </div>
      </nav>
      <router-view/>
  </div>
  
</template>

<style >
    
    .navbar{
        border-radius: 25px
        
    }
    .navbar-brand {
    padding: 3px;
    /* padding-top: 0px; */
    /* padding-bottom: 0px; */
    margin-right: 2rem;
    font-size: 1.25rem;
    text-decoration: none;
    white-space: nowrap;
}
    .navbar-brand:hover{
      background-color: #a8a8a8;
      color: white;
      border-radius: 10px
    }
  
  .navbar-expand-lg {
    flex-wrap: nowrap;
    justify-content: center !important;
    
}
   .header1{
    background-color: #000000;
  } 
  .carrito{
   margin-right: 5px !important
;
  }
    
</style>