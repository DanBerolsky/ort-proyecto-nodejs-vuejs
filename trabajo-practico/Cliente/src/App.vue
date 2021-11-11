<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <nav class="navbar navbar-expand-lg header1 flex-con">
      <div class="div-buscar">
        <img src="./assets/search2.svg" class="buscar" />
      </div>
      <div class="div-black">
        <img src="./assets/black.png" alt=""  class="black"/>
      </div>
        
      <div class="div-cart">
          <img src="./assets/shopping-cart.svg" class="carrito" alt="" />
      </div>

      <div class="sesion">
        <router-link class="crearCuenta text-white" to="/crearCuenta">
          <p>CREAR CUENTA</p>
        </router-link>
        <router-link class="iniciarSesion text-white" to="/iniciarSesion">
          <p>INICIAR SESION</p>
        </router-link>
      </div>
        
     
    </nav>

    <nav class="nav navbar-light container mar">
      <div><router-link class="navbar-brand" to="/">Home</router-link>
        </div>
        <div><router-link class="navbar-brand" to="/about">About</router-link>
        </div>
        <div><router-link class="navbar-brand" to="/productos">ListaProductos</router-link
        ></div>
    </nav>
    <router-view />

  </div>
  
</template>

<style >

.flex-con{
  display: flex !important;
  justify-content: space-between !important;
  align-items: center;
}

.flex-con div{
  flex-basis: 10px;
  min-width: 100px;
 

}

.carousel {
    position: relative;
    /* left: auto !important; */
    /* right: 0 !important; */
    max-width: 1000px;
    left: 23%;
}




.mar {
  margin-top: 40px;
  margin-bottom: 100px !important;
  border-radius: 25px;
}

.nav{
  justify-content: space-around ;
  
  
}

.navbar-brand {
  /* padding-top: 0px; */
  /* padding-bottom: 0px; */
  font-size: 1.70rem !important;
  padding: 30px;
  
}
.navbar-brand:hover {
  background-color: #a8a8a821;
  color: white;
  
  border-radius: 20px;
}

.navbar-expand-lg {
  flex-wrap: nowrap;
  
  
}
.header1 {
  background-color: #000000;
}
.div-cart {
  position: relative;
  display: flex;
  align-items: center;
  order : 4;
  max-width: 100px;
  min-width: 150px;
  justify-content: center;
  
}
.div-buscar{
  position: relative;
  display: flex;
  order:0;
  width: 200px;
  max-width: 200px;
  min-width: 150px;
  justify-content: center;
  flex-grow: 2;
}

.sesion{
  
  flex-basis: 100px;
  flex-grow: 1;
  order:3

  
}

.div-black{
  order: 1;
  flex-grow: 6;
  display: flex;
  justify-content: center;  
}
.black{
  order: 1;
  max-width: fit-content;
  
}
.iniciarSesion{
  position: relative;
  text-align: center;
  
}
.crearCuenta{
  position: relative;
  text-align: center;
 
}
</style>