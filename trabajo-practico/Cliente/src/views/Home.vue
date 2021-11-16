<template>
  <div class="text-center">
  
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide car"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active car" data-bs-interval="10000">
          <img src="../assets/remera2.jpg" class="" alt="..." />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item car" data-bs-interval="2000">
          <img src="../assets/remera1.jpg" class="" alt="..." />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item car">
          <img src="../assets/remera3.png" class="" alt="..." />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item car">
          <img src="../assets/remera4.webp" class="" alt="..." />
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div id="cards" class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col" 
        v-for="(item, index) in this.listaProductos"
          :key="index">
        <div class="card">
          
          
          <img src='../assets/remera1.jpg' class="card-img-top" alt="..." />
          <div class="card-body">
            
            <p class="card-text"> 
            {{item.nombre}}
            <br>
            {{item.precio}} $ARS
            <br>
            Talle: {{item.talle}}
            </p>
            <button type="button" class="btn btn-danger" @click.prevent="comprar(item)">Comprar</button>
          </div>
        </div>
      </div>
      

    </div>
  </div>
</template>



<script>

import ProductoService from "../servicios/ProductoService.js";
import { mapState } from 'vuex';

export default {
  name: "Home",
  data() {
    return { 
    listaProductos: {} ,
    fotos:['../assets/remera1.jpg','../assets/remera2.jpg','../assets/remera3.png','../assets/remera4.webp'],
    
    };
  },
  created: async function () {
    try {
      const rta = await ProductoService.get();
      this.listaProductos = rta.data;
    } catch (error) {
      alert("Se produjo un error");
    }
    
  },methods:{
    fotoRandom(){
      console.log(this.fotos[Math.floor(Math.random()*this.fotos.length)]);
      return this.fotos[Math.floor(Math.random()*this.fotos.length)];
      
    },
    comprar(item)
    {
      this.carritoCompras.push(item)
      alert('Su producto se ha agregado al carrito!')
    }
  },
    computed:{
        ...mapState(['carritoCompras'])   
    }
};
</script>

<style>
.car {
  width: 1800px;
  height: 500px;
}

#cards {
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  flex-wrap: wrap;
  width: 800px;
  text-align-last: center;
}

.card-img,
.card-img-bottom,
.card-img-top {
  height: 350px;
  align-self: center;
  width: 300px;
}
.carousel-control-next, .carousel-control-prev {
    position: absolute;
    top: 50% !important;
    bottom: auto !important;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15%;
    padding: 0;
    color: #fff;
    text-align: center;
    background: 0 0;
    border: 0;
    opacity: .5;
    transition: opacity .15s ease;
}

</style>