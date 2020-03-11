<template>
  <div class="detail">
    <Header />
    <Nav />
    <van-swipe class="my-swipe"
               :autoplay="3000"
               indicator-color="white">
      <van-swipe-item><img src="../../pages/Msite/images/ia_100000003.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../pages/Msite/images/ia_100000004.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../pages/Msite/images/ia_100000005.webp" alt=""></van-swipe-item>
      <van-swipe-item><img src="../../pages/Msite/images/ia_100000006.webp" alt=""></van-swipe-item>
    </van-swipe>
    <div class="content">
      <ul>  
        <li >
          <Splite />
          <div class="con">
            <div class="head">
              <p>防菌抑螨</p>
              <p class="det">抑菌防螨,药到病除</p>
            </div>
            <ul>
              <li>
                <img src="../../pages/Msite/images/ia_100000006.webp" alt="">
                <p class="desc">安心除螨</p>
                <div class="price">
                  <span class="new">￥39</span>
                  <span class="old">￥10
                     <span class="line"></span>
                  </span>
                </div>
                <div class="active">
                  <span>满49减10</span>
                  <span>满49减10
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
import Nav from '../Nav'
export default {
  name: 'Detail',
  components: {
    Nav
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
  .detail 
    width 100%
    .my-swipe
      width 100%
      img 
        height 300px
        width 100%
    .content  
      width 100%
      margin 0 auto
      ul
        width 100% 
        li 
          width 100%
          .con  
            width 90%
            margin 0 auto
            .head   
              font-size 30px 
              text-align center
              height 100px
              display flex
              flex-direction column
              justify-content space-around
              .det 
                font-size 20px
                color rgb(177, 177, 177)
                padding-bottom 10px
            ul  
              width 100%
              display flex
              justify-content space-between
              flex-wrap wrap
              li 
                font-size 30px
                width 49%
                img  
                  width 100%
                  height 380px
                .desc
                  padding-top 20px
                .price  
                  margin 20px 0 20px
                  .new 
                    color red
                    font-size 35px
                    margin-right 10px
                  .old 
                    position relative
                    color rgb(127, 127, 127)
                    .line 
                      width 100% 
                      height 4px
                      display inline-block
                      background-color rgb(127, 127, 127)
                      position absolute
                      right 0
                      top 50%
                .active 
                  color red
                  margin-bottom 30px
                  span 
                    border 1px solid red
                    border-radius 30px
                    font-size 18px 
                    padding 5px
                    margin-right 10px
</style>