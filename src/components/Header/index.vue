<template>
  <header>
    <van-search class="input" placeholder="搜索商品,共3943件好物"/>
  </header>
</template>
<script>
import Vue from 'vue'
import { Search } from 'vant'
Vue.use(Search)
export default {
  
  name: 'Header'
}
</script>
<style lang='stylus' rel='stylesheet/stylus' >
  header 
    height 100px
    display flex
    align-items center
    justify-content space-around
    .input
      margin-right 100px
</style>