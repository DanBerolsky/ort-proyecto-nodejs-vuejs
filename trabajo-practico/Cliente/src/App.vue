<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-expand-lg header1">
      <div>
        <img src="./assets/search2.svg" class="buscar" />
        <img src="./assets/black.png" alt="" class="black" />
        <img src="./assets/shopping-cart.svg" class="carrito" alt="" />
        <router-link class="crearCuenta text-white" to="/crearCuenta">
          <p>CREAR CUENTA</p>
        </router-link>
        <p class="iniciarSesion text-white">INICIAR SESION</p>
     </div>
    </nav>

    <nav class="navbar navbar-expand-lg navbar-light container mar">
      <div>
        <router-link class="navbar-brand" to="/">Home</router-link>
        <router-link class="navbar-brand" to="/about">About</router-link>
        <router-link class="navbar-brand" to="/productos">ListaProductos</router-link
        >
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style >
.mar {
  margin-top: 40px;
  margin-bottom: 80px;
  border-radius: 25px;
}

.navbar-brand {
  /* padding-top: 0px; */
  /* padding-bottom: 0px; */
  margin-right: 2rem;
  font-size: 1.25rem;
  text-decoration: none;
  white-space: nowrap;
  padding: 30px;
}
.navbar-brand:hover {
  background-color: #a8a8a821;
  color: white;
  padding: -10px;
  border-radius: 20px;
}

.navbar-expand-lg {
  flex-wrap: nowrap;
  justify-content: center !important;
}
.header1 {
  background-color: #000000;
}
.carrito {
  position: absolute;
  right: 4rem !important;
  top: 4rem !important;
}
.buscar{
  position: absolute;
  left: 4rem !important;
  top: 4rem !important;
}
.iniciarSesion{
  position: absolute;
  right: 8rem !important;
  top: 5rem !important;
}
.crearCuenta{
  position: absolute;
  right: 16rem !important;
  top: 5rem !important; 
}
.black{
  top: 4rem !important;
  
}

</style>