<template>
  <div class="slideRight">
    <div class="slide-heade">
      <img src="../../Msite/images/10.png" alt="">
    </div>
    <div class="slide-bottom">
      <ul>
        <li>
          <img src="../../Msite/images/10.png" alt="">
          <span>精选好物</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'SlideRight',
  computed: {
    ...mapState(['slideRight'])
  },
  mounted () {
    this.$store.dispatch('getSlideRight')
    console.log(this.slideRight);
    
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' >
  .slideRight 
    width 530px
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
        justify-content space-around
        flex-wrap wrap
        li 
          display flex
          flex-direction column
          align-items center
          justify-content space-around
          font-size 20px
          width 176px
          height 150px
          
        img 
          width 80px 
          height 80px
</style>