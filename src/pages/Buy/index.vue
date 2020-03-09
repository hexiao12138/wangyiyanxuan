<template>
  <div class="buy">
    <div class="head">
      <div class="left">
        <van-icon name="wap-home-o" />
      </div>
      <div class="center">
        <span>值得买</span>
      </div>
      <div class="right">
        <van-icon name="search" />
        <van-icon name="cart-o" />
      </div>
    </div>
    <div class="nav">
      <img src="./images/1.png"
           alt="">
      <span>严选好物 用心生活</span>
    </div>
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"
               v-for="(categorys,index) in categoryArr"
               :key="index">
            <a href="javascript:"
               class="link_to_food"
               v-for="(category,index) in categorys"
               :key="index">
              <div class="food_container">
                <img :src=category.picUrl />
              </div>
              <span class="main">{{category.mainTitle}}</span>
              <span>{{category.viceTitle}}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for='(msg,index) in msgs' :key="index">
          <img src="" alt="">
          <p></p>
          <div class="foot">
            <div class="foot-left">
              <img src="" alt="">
              <span></span>
            </div>
            <div class="foot-right">
              <img src="" alt="">
              <span></span>
            </div>    
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
import Vue from 'vue'
import { Icon } from 'vant'
Vue.use(Icon)
import { reqBuy,reqList } from '../../api'
export default {
  name: 'Buy',
  data() {
    return {
      list: [],
      msgs: []
    }
  },
  computed: {
    categoryArr() {
      const categories = this.list
      let bigArr = []
      let smallArr = []
      categories.forEach(category => {
        if (smallArr.length === 0) {
          bigArr.push(smallArr)
        }
        smallArr.push(category)
        if (smallArr.length === 8) {
          smallArr = []
        }
      })
      return bigArr
    }
  },
  async mounted() {
    const list = await reqList()
    const result = await reqBuy()
    if (result.code === '200') {
      this.list = result.data.navList
    }
    if (list.code === '200') {
      this.msgs = list.data
      console.log(this.msg);
      
    }
    this.$nextTick(()=>{
       /* eslint-disable */
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })     
    })
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.head
  height 100px
  display flex
  align-items center
  .left
    flex 1
    padding-left 20px
  .right
    flex 1
    display flex
    justify-content space-around
.nav
  height 100px
  color #fff
  font-size 28px
  background-image url('./images/2.png')
  display flex
  align-items center
  img
    width 91px
    height 62px
    margin 30px 0 0 30px
  span
    margin-top 30px
.swiper
  .swiper-container
    padding-top 20px
    width 100%
    height 100%
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        .link_to_food
          width 25%
          .food_container
            display block
            width 100%
            text-align center
            padding-bottom 10px
            font-size 0
            img
              display inline-block
              width 70px
              height 70px
          .main 
            font-weight bold
            margin-bottom 10px
            color #000
          span
            display block
            width 100%
            text-align center
            font-size 13px
            color rgb(192, 192, 192)
    .swiper-pagination
      
      >span.swiper-pagination-bullet-active
        background #02a774
  .content 
    width 100%
    height 100%
    ul 
      columns 2
      columns 40%
</style>