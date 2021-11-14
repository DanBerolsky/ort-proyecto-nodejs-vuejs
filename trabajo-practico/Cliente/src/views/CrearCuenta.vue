<template>
  <div>
    <section class="vh-100 bg-image">
      <div class="mask d-flex align-items-center h-100 ">
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Crear cuenta
                  </h2>

                  <form>
                    <div class="form-outline mb-4">
                      <input type="text" class="form-control form-control-lg" v-model="nombre"/>
                      <label class="form-label" for="form3Example1cg"
                        >Nombre completo
                      </label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3cg" class="form-control form-control-lg" v-model="email"/>
                      <label class="form-label" for="form3Example3cg">
                        Email
                      </label
                      >
                    </div>
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4cg" class="form-control form-control-lg" v-model="password"/>
                      <label class="form-label" for="form3Example4cg">
                        Contraseña
                      </label>
                    </div>
                    <div class="form-check d-flex justify-content-center mb-5">
                      <input
                        class="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label class="form-check-label" for="form2Example3g">
                        Estoy de acuerdo con los 
                        <a href="#!" class="text-body"
                          ><u>Terminos y Condiciones</u></a
                        >
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button @click.prevent="crearCuenta" type="button" class=" btn btn-success">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import UsuarioService from '../servicios/UsuarioService.js'

export default {
  name: "CrearCuenta",
  data() {
    return {
      nombre: "",
      password:"",
      email: "",
    };
  },
  methods: {
    async crearCuenta() {
      
      try {
        await UsuarioService.post(this);
        window.location.href= '/'
        alert('BIENVENIDO A BLACK - Tu cuenta fue creada con exito')
      } catch (error) {
        console.log(error.message);
      }
    },
  },
};
</script>

<style>
.gradient-custom-3 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 0.5), rgba(143, 211, 244, 0.5))
}
.gradient-custom-4 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, rgba(132, 250, 176, 1), rgba(143, 211, 244, 1))
}
</style>