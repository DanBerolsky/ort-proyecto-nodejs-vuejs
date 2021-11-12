<template>
  <div>
    <hr />
    <h2>Modificar Usuario</h2>
    <hr />

    <div class="f-cont">
      
        <form method="PUT" style="min-height: 533px;">
          <div class="mb-3" >
            <label for="Nombre del producto" class="form-label"
              >Nombre de Usuario</label
            >
            <input type="text" v-model="name" class="form-control" id="nombre" />
            <div id="nombre" class="form-text">
              Ingresar nombre de usuario aqui
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Contraseña : </label>
            <input type="password" v-model="password" class="form-control" id="precio" />
            
          </div>
          <div class="mb-3">
            <label class="form-label">Coreo Electronico : </label>
            <input type="Email" v-model="email" class="form-control" id="precio" />
            
          </div>

          <button type="submit" @click.prevent="modificar($route.params.id)" class="btn btn-primary button">Modificar</button>
          <button type="button" @click.prevent="cancelar" class="btn btn-secondary button">Cancelar</button>
        </form>     
     
    </div>
  </div>
</template>

<script>

import UsuarioService from "../servicios/UsuarioService";

export default {
  name: "ModificarUsuario",
  data() {
    return {
      name: "",
      password: "",
      email:""
    };
  },
   
    created: async function () {
    try {
      const rta = await UsuarioService.getById(this.$route.params.id);
      this.name = rta.data.nombre;
      this.password = rta.data.password;
      this.email = rta.data.email;
    } catch (error) {
      alert("Se produjo un error");
    }
  },
   
  methods: {
    async modificar(id) {
      
      try {
        const Usuario = {_id:id ,name : this.name, password: this.password, email : this.email}
        await UsuarioService.put(id,Usuario); 
        window.location.href= '/usuarios'       
      } catch (err) {
        console.log(err.message);
        console.log('catch')
      }
    },
    cancelar(){
        window.location.href= '/usuarios' 
    }
  }

};
</script>

<style>

h2 {
  display: flex;
  justify-content: center;
}

.f-cont {
  position: relative;
  display: flex;
  justify-content: center;
  height: auto;
  margin-top: 100px;
}
.f-cont form{
     flex-basis: 700px;
     
}
.button{
    width: 100px;
    height: 55px;
    margin-top: 40px !important;
     margin-right: 40px !important;

}
</style>