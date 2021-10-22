<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h2>Home</h2>
    <p>Numero {{this.numero}}</p>
  </div>
</template>

<script>
  // @ is an alias to /src
  //import HelloWorld from '@/components/HelloWorld.vue'7

  export default {
    
    name : 'Home',
    
    data() {
      return {numero : 0} 
    },
    
    components: {
      //HelloWorld
    }
  
  }
</script>
