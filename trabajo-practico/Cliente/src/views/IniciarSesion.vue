<template>
  <div>
    <section class="vh-100 bg-image">
      <div class="mask d-flex align-items-center h-100">
        <div class="container h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" style="border-radius: 15px">
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">
                    Iniciar sesion
                  </h2>

                  <form>
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3cg"
                        class="form-control form-control-lg"
                        v-model="email"
                      />
                      <label class="form-label" for="form3Example3cg">
                        Email
                      </label>
                    </div>
                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cg"
                        class="form-control form-control-lg"
                        v-model="password"
                      />
                      <label class="form-label" for="form3Example4cg">
                        Contraseña
                      </label>
                    </div>

                    <div class="d-flex justify-content-center">
                      <button
                        style="min-width: 140px"
                        @click.prevent="iniciarSesion"
                        type="button"
                        class="btn btn-success"
                      >
                        Iniciar Sesion
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
    <router-view />
  </div>
</template>

<script>
import UsuarioService from "../servicios/UsuarioService.js";

export default {
  name: "IniciarSesion",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async iniciarSesion() {
      try {
        const test = await UsuarioService.postLogin(this);
        const res = test.data
        
        if (res == 'Wrong') {
          window.location.href= '/iniciarSesion'
          alert('Datos mal ingresados, inicio de sesion no completado')
        }else{
          window.history.back() 
          alert('BIENVENIDO A BLACK - Inicio de sesion exitoso')
          this.$store.state.usuario = res
        }

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
  background: -webkit-linear-gradient(
    to right,
    rgba(132, 250, 176, 0.5),
    rgba(143, 211, 244, 0.5)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(132, 250, 176, 0.5),
    rgba(143, 211, 244, 0.5)
  );
}
.gradient-custom-4 {
  /* fallback for old browsers */
  background: #84fab0;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(132, 250, 176, 1),
    rgba(143, 211, 244, 1)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    rgba(132, 250, 176, 1),
    rgba(143, 211, 244, 1)
  );
}
</style>