<template>
  <div class="nav">
    <span :class="{on: $route.query.id === nav.id}" v-for="(nav,index) in navList" :key="index" @click="goDetail(nav.id)">{{nav.name}}</span>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'Nav',
   methods: {
      goDetail (id) {
        this.$router.replace({
          path: '/detail',
          query: {
            id 
          }
        })
      }
    },
    computed: {
      ...mapState(['navList'])
    },
    mounted () {
      this.$store.dispatch('getNavList')
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
    box-sizing border-box
    height 60px
    line-height 60px
    font-size 25px
    padding 10px
    margin-bottom 25px
    &.on 
      color red
      border-bottom 2px solid red
</style>