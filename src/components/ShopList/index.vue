<template>
	<ul>
		<li v-for="(cat,index) in category" :key="index">
      <img :src="cat.picUrl" alt="">
      <span>{{cat.text}}</span>
		</li>
	</ul>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'ShopList',
  computed: {
    ...mapState(['category'])
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  ul 
    display flex
    flex-wrap wrap
    justify-content space-around
    li 
      width 130px
      height 130px
      font-size 25px
      margin-bottom 40px
      display flex
      flex-direction column
      align-items center
      img 
        width 90%
        height 100%
</style>
