<template>
  <div class="text-center">
    <h2>Home</h2>
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
      <div class="col">
        <div class="card">
          <img src="../assets/remera2.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
            NEW / +3 COLORES 
            <br>
            CAMISA ESTAMPADO SKATER

            <br>
            7.990,00 ARS
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/remera3.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
            NEW / +3 COLORES 
            <br>
            JEANS SLIM STRAIGHT FIT
            <br>
            14.990,00 ARS
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/remera4.webp" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              NEW / +3 COLORES 
            <br>
            GORRA COMBINADA PARCHE
            <br>
            4.990,00 ARS
            </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="../assets/remera1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
            NEW / +3 COLORES 
            <br>
            CAZADORA DENIM BÁSICA
            <br>
            8.990,00 ARS
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Home",
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
  top: 2000px;
  flex-wrap: wrap-reverse !important;
  width: 1000px;
  text-align-last: center;
}

.card-img,
.card-img-bottom,
.card-img-top {
  height: 500px;
  align-self: center;
  width: 500px;
}
</style>