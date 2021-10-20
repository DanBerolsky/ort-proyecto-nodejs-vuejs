<template>
  <h2>Logout</h2>
  <form @submit.prevent="logout">
      <button type="submit">Logout</button>

  </form>
</template>

<script>
export default {
    name : 'Login',
    methods : {
        logout(){
            console.log('Logout');
            //this.$store.
        }
    }

}
</script>

<style>

</style>