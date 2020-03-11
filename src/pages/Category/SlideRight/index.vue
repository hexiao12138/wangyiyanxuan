<template>
<div class="wrapper" v-if='categoryItem'>
   <div class="slideRight" >
    <div class="slide-heade">
      <img :src=categoryItem.categoryList[0].bigImage alt="">
    </div>
    <div class="slide-bottom">
      <ul>
        <li  v-for="(category,index) in categoryItem.categoryList" :key="index" >
          <img :src=category.wapBannerUrl alt="">
          <span>{{category.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</div>
 
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'SlideRight',
  props: ['categoryId'],
  data () {
    return {
     
    }
  },
  computed: {
    ...mapState(['slideRight']),
    categoryItem () {
      return this.slideRight.find(item => item.id === this.categoryId)
    }
  },
  mounted () {
   this.$store.dispatch('getSlideRight')
      
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' >
  .slideRight 
    width 460px
    padding 10px
    .slide-heade 
      display flex
      justify-content center
      margin 10px 0 20px
      img 
        width 90%
        height 190px
    .slide-bottom 
      ul 
        display flex
        width 100%
        justify-content space-between
        flex-wrap wrap
        li 
          display flex
          flex-direction column
          align-items center
          justify-content space-around
          font-size 20px
          width 150px
          height 150px
          
        img 
          width 80px 
          height 80px
</style>