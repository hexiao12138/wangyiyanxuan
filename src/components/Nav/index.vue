<template>
  <div class="nav">
    <span v-for="(nav,index) in navList" :key="index">{{nav.name}}</span>
  </div>
</template>
<script>
import {reqNav} from '../../api'
export default {
  name: 'Nav',
  data () {
    return {
      navList: []
    }
  },
  async mounted () {
    const result = await reqNav()
    if (result.code === 0) {
      this.navList = result.data
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped >
.nav 
  display flex
  white-space nowrap
  font-size 0
  height 80px 
  align-items center
  fon
  span 
    height 60px
    line-height 60px
    font-size 25px
    padding 10px
</style>