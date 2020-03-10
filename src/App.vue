<template>
<div>
  <router-view></router-view>
  <Footer v-show="this.$route.meta.isShow" />
</div>
</template>
<script>
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' >
  
    
    
</style>