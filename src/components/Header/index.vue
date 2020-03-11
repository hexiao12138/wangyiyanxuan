<template>
  <header>
    <van-search class="input" placeholder="搜索商品,共3943件好物" @click="goSearch"/>
  </header>
</template>
<script>
import Vue from 'vue'
import { Search } from 'vant'
Vue.use(Search)
export default {
  name: 'Header',
  methods: {
    goSearch () {
      this.$router.replace('/search')
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
  header 
    height 100px
    display flex
    align-items center
    justify-content space-around
</style>