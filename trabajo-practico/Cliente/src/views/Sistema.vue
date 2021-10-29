<template>
  <div>
      <h2 class="text-center container">Sistema</h2>
      <!--<p>Estado {{this.$store.state.count}}</p>
      <p>Estado desde ...mapState {{count}}</p>-->
     
  </div>
</template>


<script>

import { mapState } from 'vuex'

export default {
    name : 'sistema',
    computed:{
        ...mapState(['count'])
    }
}
</script>

<style>

</style>